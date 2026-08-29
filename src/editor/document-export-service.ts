import { getDiagramId } from "../core/document";
import { serializeDiagram } from "../core/diagrams/serializer";
import type { EditorState } from "./state";
import type { SourceEditor } from "./source-editor";
import type { DocumentSession } from "./document-session";
import {
  embedRuntimeInDocumentHtml,
  getRuntimeSourceForOfflineExport,
  restoreExternalRuntimeForSaveAs
} from "./offline-document";

export class DocumentExportService {
  public constructor(
    private readonly session: DocumentSession,
    private readonly state: EditorState,
    private readonly outputElement: HTMLElement | null,
    private readonly sourceEditor: SourceEditor | null
  ) {}

  public downloadDocument(): void {
    this.sourceEditor?.flushRender();
    if (!this.canExportLastValidSource()) {
      return;
    }
    const copy = this.createDocumentCopy();
    try {
      restoreExternalRuntimeForSaveAs(copy);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error("Save As failed.", error);
      globalThis.alert(`Save As failed: ${message}`);
      return;
    }
    this.downloadHtml(copy.outerHTML, "-edited");
    this.session.markSaved();
  }

  public async downloadOfflineDocument(): Promise<void> {
    this.sourceEditor?.flushRender();
    if (!this.canExportLastValidSource()) {
      return;
    }
    const copy = this.createDocumentCopy();
    const runtime = await getRuntimeSourceForOfflineExport(copy);
    this.downloadHtml(embedRuntimeInDocumentHtml(copy.outerHTML, runtime.source, runtime.runtimeUrl), "-offline");
    this.session.markSaved();
  }

  public createDocumentCopy(source = this.session.source): HTMLElement {
    const copy = document.documentElement.cloneNode(true) as HTMLElement;
    const sourceCopy = copy.querySelector<HTMLTemplateElement>("#source");
    const output = copy.querySelector<HTMLElement>("#rendered-document");
    sourceCopy?.content.replaceChildren(document.createTextNode(source));
    copy.querySelector(".docdiagram-lint-dialog")?.remove();
    copy.querySelector(".docdiagram-toolbar")?.remove();
    copy.querySelector(".docdiagram-source-tray")?.remove();
    for (const style of copy.querySelectorAll<HTMLStyleElement>("style")) {
      if (style.dataset.docdiagramRuntimeStyles === "true" ||
        (style.textContent?.includes(".docdiagram-inline-editor") && style.textContent.includes(".docdiagram-toolbar"))) {
        style.remove();
      }
    }
    copy.removeAttribute("data-docdiagram-theme");
    copy.removeAttribute("data-docdiagram-expanded");
    copy.style.removeProperty("--docdiagram-page-background");
    copy.style.removeProperty("--docdiagram-page-text");
    if (!copy.getAttribute("style")) {
      copy.removeAttribute("style");
    }
    copy.querySelector("body")?.removeAttribute("data-docdiagram-theme");
    output?.replaceChildren();
    output?.removeAttribute("data-editing-shortcuts-bound");
    for (const attribute of [...(output?.attributes || [])]) {
      if (attribute.name === "style" || attribute.name.startsWith("data-")) {
        output?.removeAttribute(attribute.name);
      }
    }
    return copy;
  }

  public openDiagram(diagramIndex: number): void {
    const url = this.getDiagramExportUrl(diagramIndex, "image/svg+xml;charset=utf-8");
    if (!url) {
      return;
    }
    const diagramWindow = globalThis.open(url, "_blank");
    if (!diagramWindow) {
      URL.revokeObjectURL(url);
      globalThis.alert("Your browser blocked the new diagram tab. Allow pop-ups and try again.");
      return;
    }
    globalThis.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  public downloadDiagramDocument(diagramIndex: number): void {
    const diagram = this.state.diagramModels[diagramIndex];
    if (!diagram) {
      globalThis.alert("The diagram is no longer available to save.");
      return;
    }
    const diagramSource = serializeDiagram(diagram);
    const name = getDiagramId(diagramSource) || this.getDiagramExportName(diagramIndex);
    const source = [
      "---",
      `theme: ${this.state.documentThemeSetting}`,
      `colourScheme: ${this.state.documentColorScheme}`,
      "doctype: diagram",
      "---",
      "",
      "```diagram",
      diagramSource,
      "```",
      ""
    ].join("\n");
    const copy = this.createDocumentCopy(source);
    const title = copy.querySelector("title");
    if (title) {
      title.textContent = name;
    }
    try {
      restoreExternalRuntimeForSaveAs(copy);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error("Save as Skryb diagram failed.", error);
      globalThis.alert(`Save as Skryb diagram failed: ${message}`);
      return;
    }
    this.downloadHtml(copy.outerHTML, "", this.slug(name));
  }

  public downloadDiagram(diagramIndex: number): void {
    const url = this.getDiagramExportUrl(diagramIndex, "image/svg+xml;charset=utf-8");
    if (!url) {
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.download = `${this.getDiagramExportName(diagramIndex)}.svg`;
    link.hidden = true;
    document.body.append(link);
    link.click();
    link.remove();
    globalThis.setTimeout(() => URL.revokeObjectURL(url), 200);
  }

  public printDiagram(diagramIndex: number): void {
    const svg = this.getStandaloneDiagramSvg(diagramIndex);
    if (!svg) {
      globalThis.alert("The diagram is no longer available to print.");
      return;
    }
    const documentHtml = [
      "<!doctype html><html><head><meta charset=\"utf-8\"><title>Diagram</title>",
      "<style>html,body{height:100%;margin:0}body{display:grid;place-items:center}svg{height:auto;max-height:100vh;max-width:100vw;width:auto}@page{margin:0}</style>",
      "</head><body>",
      new XMLSerializer().serializeToString(svg),
      "</body></html>"
    ].join("");
    const printWindow = globalThis.open("", "_blank");
    if (!printWindow) {
      globalThis.alert("Your browser blocked the print window. Allow pop-ups and try again.");
      return;
    }
    printWindow.document.open();
    printWindow.document.write(documentHtml);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  public getStandaloneDiagramSvg(diagramIndex: number): SVGSVGElement | null {
    const svg = this.outputElement?.querySelector<SVGSVGElement>(
      `.docdiagram[data-diagram-index="${diagramIndex}"] svg`
    );
    if (!svg) {
      return null;
    }
    const diagram = svg.closest<HTMLElement>(".docdiagram");
    const backgroundColour = globalThis.getComputedStyle(diagram || svg).backgroundColor;
    const copy = svg.cloneNode(true) as SVGSVGElement;
    copy.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    copy.removeAttribute("style");
    copy.querySelectorAll(
      ".docdiagram-inline-editor-host, .docdiagram-resize-handle, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-connection-preview"
    ).forEach((element) => element.remove());
    copy.querySelectorAll(".docdiagram-node-selected, .docdiagram-edge-selected").forEach((element) => {
      element.classList.remove("docdiagram-node-selected", "docdiagram-edge-selected");
    });
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = [
      "svg{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif}",
      ".docdiagram-edge,.docdiagram-edge-hit{fill:none}",
      ".docdiagram-edge-label{font-size:15px}",
      ".docdiagram-node-label{font-size:16px;font-weight:650}",
      ".docdiagram-node-subtitle{font-size:13px}"
    ].join("");
    copy.insertBefore(style, copy.firstChild);
    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    background.setAttribute("class", "docdiagram-export-background");
    background.setAttribute("width", "100%");
    background.setAttribute("height", "100%");
    background.setAttribute("fill", backgroundColour);
    copy.insertBefore(background, style.nextSibling);
    return copy;
  }

  private canExportLastValidSource(): boolean {
    return !(this.sourceEditor?.hasError && this.sourceEditor.hasUnsavedDraft) ||
      globalThis.confirm("Source has errors. Save the last valid version instead?");
  }

  private getDiagramExportUrl(diagramIndex: number, type: string): string | null {
    const svg = this.getStandaloneDiagramSvg(diagramIndex);
    if (!svg) {
      globalThis.alert("The diagram is no longer available to export.");
      return null;
    }
    return URL.createObjectURL(new Blob([
      new XMLSerializer().serializeToString(svg)
    ], { type }));
  }

  private getDiagramExportName(diagramIndex: number): string {
    return `${this.slug(document.title) || "diagram"}-${diagramIndex + 1}`;
  }

  private downloadHtml(documentHtml: string, suffix: string, name = ""): void {
    const blob = new Blob([`<!doctype html>\n${documentHtml}`], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    const title = name || this.slug(document.title);
    link.href = URL.createObjectURL(blob);
    link.download = `${title || "document"}${suffix}.html`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  private slug(value: string): string {
    return value.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");
  }
}
