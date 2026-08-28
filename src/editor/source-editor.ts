import {
  extractDiagramFences,
  findSourceTextRange,
  scrollSourceEditorToRange,
  setDiagramId,
  type ExtractedDiagram
} from "../core/document";
import { parseDiagram } from "../core/diagrams/parser";

const referenceUrl = "https://sparkkz-nz.github.io/skryb/docs/reference.html";

const MINIMUM_TRAY_HEIGHT = 192;
const TRAY_VIEWPORT_MARGIN = 96;
const TRAY_KEYBOARD_STEP = 24;
const MAXIMUM_IMPORT_BYTES = 8_000_000;

const insertTemplates: Record<string, string> = {
  flowchart: [
    "```diagram",
    "id: new-flowchart",
    "type: flowchart",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "  grid: 5",
    "nodes:",
    "  - id: first-node",
    "    label: First node",
    "    shape: rounded-rectangle",
    "    position: { x: 80, y: 110 }",
    "  - id: second-node",
    "    label: Second node",
    "    shape: rounded-rectangle",
    "    position: { x: 330, y: 110 }",
    "edges:",
    "  - source: first-node",
    "    target: second-node",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "```"
  ].join("\n"),
  sequence: [
    "```diagram",
    "id: new-sequence",
    "type: sequence",
    "participants:",
    "  - id: first-participant",
    "    label: First participant",
    "  - id: second-participant",
    "    label: Second participant",
    "messages:",
    "  - from: first-participant",
    "    to: second-participant",
    "    label: Request",
    "```"
  ].join("\n"),
  "diagram-reference": ":::diagram { id=diagram-id }",
  toc: ":::toc { depth=3 diagrams=true }",
  panel: [
    ":::panel { title=\"New panel\" palette=accent }",
    "Panel content.",
    ":::"
  ].join("\n"),
  grid: [
    ":::grid { columns=2 }",
    ":::panel { title=\"First panel\" }",
    "First panel content.",
    ":::",
    "",
    ":::panel { title=\"Second panel\" }",
    "Second panel content.",
    ":::",
    ":::"
  ].join("\n")
};

function getUniqueDiagramId(source: string, prefix: string): string {
  const ids = new Set(
    [...source.matchAll(/(?:\bid:\s*|:::diagram\s+\{\s*id=)(?:"([^"]+)"|([^\s}\n#]+))/g)]
      .map((match) => match[1] || match[2])
  );
  let suffix = 1;
  let candidate = prefix;
  while (ids.has(candidate)) {
    suffix += 1;
    candidate = `${prefix}-${suffix}`;
  }
  return candidate;
}

function getInsertTemplate(name: string, source: string): string | null {
  const template = insertTemplates[name];
  if (!template) {
    return null;
  }
  if (name === "flowchart") {
    return template.replace("id: new-flowchart", `id: ${getUniqueDiagramId(source, "new-flowchart")}`);
  }
  if (name === "sequence") {
    return template.replace("id: new-sequence", `id: ${getUniqueDiagramId(source, "new-sequence")}`);
  }
  if (name === "diagram-reference") {
    const id = getUniqueDiagramId(source, "diagram-reference");
    return template.replace("diagram-id", id);
  }
  return template;
}

export interface SourceEditorHost {
  readonly outputElement: HTMLElement;
  getSource(): string;
  getDocumentTheme(): string;
  getDocumentColourScheme(): string;
  renderDocument(source?: string, options?: { preserveOnError?: boolean }): boolean;
  stopDiagramEditing(): void;
  closeDocumentMenu(): void;
}

/**
 * Reads the canonical Markdown out of an imported file. Saved Skryb documents
 * keep their source in a `<template id="source">`, so an HTML file is unwrapped
 * first; anything else is treated as Markdown. Parsing is inert - the parsed
 * tree is only read for that template's text and is never attached to the page.
 */
export function readImportedSource(fileText: string): string {
  if (!/<template[^>]*\bid=["']?source\b/i.test(fileText)) {
    return fileText;
  }
  const parsed = new DOMParser().parseFromString(fileText, "text/html");
  const template = parsed.querySelector<HTMLTemplateElement>("template#source");
  if (!template) {
    throw new Error("That Skryb document has no source template to import from.");
  }
  return template.content.textContent || "";
}

function pickImportFile(): Promise<File | null> {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".html,.htm,.md,.markdown,text/html,text/markdown";
    input.hidden = true;
    const settle = (file: File | null) => {
      input.remove();
      resolve(file);
    };
    input.addEventListener("change", () => settle(input.files?.[0] || null), { once: true });
    input.addEventListener("cancel", () => settle(null), { once: true });
    document.body.append(input);
    input.click();
  });
}

function chooseImportedDiagram(diagrams: ExtractedDiagram[]): ExtractedDiagram | null {
  if (diagrams.length <= 1) {
    return diagrams[0] || null;
  }
  const listing = diagrams
    .map((diagram, index) => `${index + 1}. ${diagram.id || "(no id)"}`)
    .join("\n");
  const answer = globalThis.prompt(`That file has ${diagrams.length} diagrams. Import which one?\n\n${listing}`, "1");
  if (answer === null) {
    return null;
  }
  const choice = Number.parseInt(answer.trim(), 10);
  if (!Number.isInteger(choice) || choice < 1 || choice > diagrams.length) {
    throw new Error(`Enter a number between 1 and ${diagrams.length}.`);
  }
  return diagrams[choice - 1];
}

export class SourceEditor {
  private renderTimer: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private openState = false;
  private draft = "";
  private error = "";

  public constructor(private readonly host: SourceEditorHost) {}

  public get isOpen(): boolean {
    return this.openState;
  }

  public get hasUnsavedDraft(): boolean {
    return this.openState && this.draft !== this.host.getSource();
  }

  public get hasError(): boolean {
    return this.error.length > 0;
  }

  public get draftSource(): string {
    return this.draft;
  }

  public setError(error: string): void {
    this.error = error;
    this.updateStatus();
  }

  public clearError(): void {
    this.error = "";
  }

  public open(): void {
    globalThis.clearTimeout(this.renderTimer ?? undefined);
    this.renderTimer = null;
    this.draft = this.host.getSource();
    this.error = "";
    this.openState = true;
    this.host.stopDiagramEditing();
    this.host.renderDocument();
    const focus = () => this.focus();
    globalThis.requestAnimationFrame?.(focus) ?? focus();
  }

  public close(): void {
    this.flushRender();
    if (this.error && this.draft !== this.host.getSource() &&
      !globalThis.confirm("Discard the invalid source changes?")) {
      return;
    }

    this.openState = false;
    this.draft = "";
    this.error = "";
    this.renderTray();
    document.querySelector<HTMLButtonElement>(".docdiagram-menu-toggle")?.focus();
  }

  public flushRender(): boolean {
    return this.renderTimer === null ? true : this.renderDraft();
  }

  public syncSource(source: string): void {
    if (!this.openState) {
      return;
    }

    this.draft = source;
    this.error = "";
    const editor = document.querySelector<HTMLTextAreaElement>(".docdiagram-source-editor");
    if (!editor) {
      return;
    }

    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;
    const scrollTop = editor.scrollTop;
    editor.value = source;
    editor.setSelectionRange(
      Math.min(selectionStart, source.length),
      Math.min(selectionEnd, source.length)
    );
    editor.scrollTop = scrollTop;
    this.updateStatus();
  }

  public reveal(text: string): boolean {
    const range = findSourceTextRange(this.host.getSource(), text);
    if (!range || this.hasUnsavedDraft) {
      return false;
    }

    if (!this.openState) {
      this.open();
    }

    const selectMatch = () => {
      const editor = document.querySelector<HTMLTextAreaElement>(".docdiagram-source-editor");
      if (!editor) {
        return;
      }
      editor.focus();
      editor.setSelectionRange(range.start, range.end);
      scrollSourceEditorToRange(editor, range);
    };

    globalThis.requestAnimationFrame?.(selectMatch) ?? selectMatch();
    return true;
  }

  public renderTray(): void {
    let tray = document.querySelector<HTMLElement>(".docdiagram-source-tray");
    if (!this.openState) {
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;
      tray?.remove();
      delete this.host.outputElement.dataset.sourceEditorOpen;
      this.host.outputElement.style.removeProperty("--docdiagram-source-tray-height");
      return;
    }

    if (tray) {
      tray.dataset.theme = this.host.getDocumentTheme();
      this.host.outputElement.dataset.sourceEditorOpen = "true";
      this.updateStatus();
      return;
    }

    tray = document.createElement("section");
    tray.className = "docdiagram-source-tray";
    tray.dataset.theme = this.host.getDocumentTheme();
    tray.setAttribute("aria-label", "Document source editor");
    tray.innerHTML = [
      `<div class="docdiagram-source-resize" role="separator" aria-orientation="horizontal" aria-label="Resize source editor" tabindex="0" title="Drag to resize"></div>`,
      `<header class="docdiagram-source-header">`,
      `<div><strong>Source</strong><span class="docdiagram-source-shortcut">Cmd/Ctrl+Shift+E to close</span></div>`,
      `<div class="docdiagram-source-actions">`,
      `<button type="button" class="docdiagram-source-menu-toggle" aria-label="Source editor menu" aria-expanded="false" title="Source editor menu">☰</button>`,
      `<div class="docdiagram-source-menu" hidden>`,
      `<div class="docdiagram-source-menu-heading">Insert</div>`,
      `<button type="button" data-source-template="flowchart">Flowchart</button>`,
      `<button type="button" data-source-template="sequence">Sequence</button>`,
      `<button type="button" data-source-template="diagram-reference">Diagram Reference</button>`,
      `<button type="button" data-source-template="toc">Contents</button>`,
      `<button type="button" class="docdiagram-source-import">Import diagram…</button>`,
      `<button type="button" data-source-template="panel">Panel</button>`,
      `<button type="button" data-source-template="grid">Grid</button>`,
      `<button type="button" class="docdiagram-source-help">Help</button>`,
      `</div>`,
      `<button type="button" class="docdiagram-source-close" aria-label="Close source editor" title="Close source editor">×</button>`,
      `</div>`,
      `</header>`,
      `<label class="docdiagram-source-label">Canonical Markdown<textarea class="docdiagram-source-editor" spellcheck="false"></textarea></label>`,
      `<p class="docdiagram-source-status" aria-live="polite"></p>`,
      `<p class="docdiagram-source-error" role="alert"></p>`
    ].join("");
    const editor = tray.querySelector<HTMLTextAreaElement>(".docdiagram-source-editor");
    const closeButton = tray.querySelector<HTMLButtonElement>(".docdiagram-source-close");
    const menuToggle = tray.querySelector<HTMLButtonElement>(".docdiagram-source-menu-toggle");
    const menu = tray.querySelector<HTMLElement>(".docdiagram-source-menu");
    if (!editor || !closeButton || !menuToggle || !menu) {
      return;
    }

    editor.value = this.draft;
    editor.addEventListener("input", () => {
      this.draft = editor.value;
      this.error = "";
      this.updateStatus();
      this.scheduleRender();
    });
    closeButton.addEventListener("click", () => this.close());
    menuToggle.addEventListener("click", () => {
      const open = menu.hidden;
      menu.hidden = !open;
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    for (const button of tray.querySelectorAll<HTMLButtonElement>("[data-source-template]")) {
      button.addEventListener("click", () => {
        const template = getInsertTemplate(button.dataset.sourceTemplate || "", editor.value);
        if (!template) {
          return;
        }
        this.insertTemplate(editor, template);
        menu.hidden = true;
        menuToggle.setAttribute("aria-expanded", "false");
      });
    }
    tray.querySelector<HTMLButtonElement>(".docdiagram-source-import")?.addEventListener("click", async (event) => {
      const button = event.currentTarget as HTMLButtonElement;
      menu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      button.disabled = true;
      try {
        await this.importDiagram(editor);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        globalThis.alert(`Import diagram failed: ${message}`);
      } finally {
        button.disabled = false;
      }
    });
    tray.querySelector<HTMLButtonElement>(".docdiagram-source-help")?.addEventListener("click", () => {
      globalThis.open(referenceUrl, "_blank", "noopener");
    });
    tray.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) {
        event.preventDefault();
        menu.hidden = true;
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
      }
    });
    this.host.outputElement.after(tray);
    this.host.outputElement.dataset.sourceEditorOpen = "true";
    const syncTrayHeight = () => {
      this.host.outputElement.style.setProperty("--docdiagram-source-tray-height", `${tray?.offsetHeight || 0}px`);
    };
    this.attachResizeHandle(tray, syncTrayHeight);
    this.resizeObserver?.disconnect();
    if (globalThis.ResizeObserver) {
      this.resizeObserver = new globalThis.ResizeObserver(syncTrayHeight);
      this.resizeObserver.observe(tray);
    }
    syncTrayHeight();
    this.updateStatus();
  }

  private attachResizeHandle(tray: HTMLElement, syncTrayHeight: () => void): void {
    const handle = tray.querySelector<HTMLElement>(".docdiagram-source-resize");
    if (!handle) {
      return;
    }

    const clampHeight = (height: number): number => {
      const viewport = globalThis.innerHeight || 0;
      const maximum = viewport ? Math.max(MINIMUM_TRAY_HEIGHT, viewport - TRAY_VIEWPORT_MARGIN) : height;
      return Math.min(Math.max(height, MINIMUM_TRAY_HEIGHT), maximum);
    };
    const applyHeight = (height: number): void => {
      tray.style.height = `${clampHeight(height)}px`;
      // Keep the document padding in step without waiting on ResizeObserver.
      syncTrayHeight();
    };

    handle.addEventListener("pointerdown", (event: PointerEvent) => {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      const startY = event.clientY;
      const startHeight = tray.offsetHeight;
      tray.dataset.resizing = "true";
      handle.setPointerCapture?.(event.pointerId);

      const move = (moveEvent: PointerEvent): void => {
        // The tray is anchored to the bottom, so dragging up must grow it.
        applyHeight(startHeight - (moveEvent.clientY - startY));
      };
      const stop = (): void => {
        handle.removeEventListener("pointermove", move);
        handle.removeEventListener("pointerup", stop);
        handle.removeEventListener("pointercancel", stop);
        delete tray.dataset.resizing;
        handle.releasePointerCapture?.(event.pointerId);
      };

      handle.addEventListener("pointermove", move);
      handle.addEventListener("pointerup", stop);
      handle.addEventListener("pointercancel", stop);
    });

    handle.addEventListener("keydown", (event: KeyboardEvent) => {
      const step = event.shiftKey ? TRAY_KEYBOARD_STEP * 4 : TRAY_KEYBOARD_STEP;
      if (event.key === "ArrowUp") {
        event.preventDefault();
        applyHeight(tray.offsetHeight + step);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        applyHeight(tray.offsetHeight - step);
      } else if (event.key === "Home") {
        event.preventDefault();
        applyHeight(Number.MAX_SAFE_INTEGER);
      } else if (event.key === "End") {
        event.preventDefault();
        applyHeight(MINIMUM_TRAY_HEIGHT);
      }
    });

    handle.addEventListener("dblclick", () => {
      tray.style.removeProperty("height");
      syncTrayHeight();
    });
  }

  private scheduleRender(): void {
    globalThis.clearTimeout(this.renderTimer ?? undefined);
    this.renderTimer = globalThis.setTimeout(() => {
      this.renderTimer = null;
      this.renderDraft();
    }, 250);
  }

  private renderDraft(): boolean {
    globalThis.clearTimeout(this.renderTimer ?? undefined);
    this.renderTimer = null;
    return this.host.renderDocument(this.draft, { preserveOnError: true });
  }

  private updateStatus(): void {
    const tray = document.querySelector<HTMLElement>(".docdiagram-source-tray");
    if (!tray) {
      return;
    }

    const status = tray.querySelector<HTMLElement>(".docdiagram-source-status");
    const error = tray.querySelector<HTMLElement>(".docdiagram-source-error");
    if (!status || !error) {
      return;
    }
    status.textContent = this.error ? "Source has errors; showing the last valid render." : "Changes render automatically.";
    error.hidden = !this.error;
    error.textContent = this.error;
  }

  private insertTemplate(editor: HTMLTextAreaElement, template: string): void {
    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;
    const lineStart = editor.value.lastIndexOf("\n", selectionStart - 1) + 1;
    const lineEnd = editor.value.indexOf("\n", selectionStart);
    const currentLineEnd = lineEnd === -1 ? editor.value.length : lineEnd;
    const currentLine = editor.value.slice(lineStart, currentLineEnd);
    const insertionStart = /^\s*$/.test(currentLine) ? selectionStart : currentLineEnd;
    const insertionEnd = /^\s*$/.test(currentLine) ? selectionEnd : currentLineEnd;
    const insertion = insertionStart === currentLineEnd ? `\n${template}` : template;

    editor.setRangeText(insertion, insertionStart, insertionEnd, "end");
    this.draft = editor.value;
    this.error = "";
    this.updateStatus();
    this.scheduleRender();
    editor.focus();
  }

  /**
   * Imports one diagram from a saved Skryb document (or a plain Markdown file)
   * and inserts it at the caret. The imported id is rewritten when it would
   * clash, because duplicate diagram ids stop the whole document rendering.
   */
  private async importDiagram(editor: HTMLTextAreaElement): Promise<void> {
    const file = await pickImportFile();
    if (!file) {
      return;
    }
    if (file.size > MAXIMUM_IMPORT_BYTES) {
      throw new Error("That file is too large to import.");
    }

    const diagrams = extractDiagramFences(readImportedSource(await file.text()));
    if (!diagrams.length) {
      throw new Error("That file has no diagrams to import.");
    }
    const chosen = chooseImportedDiagram(diagrams);
    if (!chosen) {
      return;
    }

    parseDiagram(chosen.source, this.host.getDocumentColourScheme());
    const id = getUniqueDiagramId(editor.value, chosen.id || "imported-diagram");
    this.insertTemplate(editor, `\`\`\`diagram\n${setDiagramId(chosen.source, id)}\n\`\`\``);
  }

  private focus(): void {
    const editor = document.querySelector<HTMLTextAreaElement>(".docdiagram-source-editor");
    if (!editor) {
      return;
    }

    editor.focus();
    editor.setSelectionRange(editor.value.length, editor.value.length);
  }
}
