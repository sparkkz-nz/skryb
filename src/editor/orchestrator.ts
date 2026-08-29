import {
  diagramThemes,
  edgeAnchors,
  edgeMarkerStyles,
  edgeRoutes,
  colourSchemes,
  nodeShapes,
  paletteRoles,
  supportedDiagramTypes,
  type Diagram,
  type FlowchartDiagram,
  type FlowchartEdge,
  type FlowchartNode,
  type SequenceMessage,
  type SequenceNote,
  type SequenceParticipant,
  type Theme
} from "../core/diagrams/schema";
import { escapeHtml, parseDiagram, desugarBlockScalars } from "../core/diagrams/parser";
import { serializeDiagram } from "../core/diagrams/serializer";
import { FlowchartIndex, findFlowchartNode, flattenFlowchartNodes, getFlowchartNodeBounds, reparentFlowchartNode } from "../core/diagrams/hierarchy";
import {
  clampZoom,
  getWheelPixels,
  getWheelZoom,
  createNode,
  expandCanvasForNode,
  fitCanvasToContent,
  getResizeNodeOrigin,
  createUniqueNodeId,
  getDefaultNodePosition,
  duplicateNode,
  createConnector,
  reconnectConnector,
  resizeFlowchartNode,
  deleteConnector,
  deleteNode,
  setNodeLabel,
  setNodeShape,
  setNodeSubtitle,
  setNodeTextAlignment,
  setNodeStyleOverride,
  setNodeColorPalette,
  setNodeSize,
  setEdgeLabel,
  setEdgeRoute,
  setEdgeAnchor,
  setEdgeStyleOverride,
  setStyleStrokeWidth,
  setEdgeMarkerStart,
  setEdgeMarkerEnd,
  clearEdgeWaypoint,
  setNodeCalloutPointer,
  clearNodeCalloutPointer,
  toggleNodeCalloutPointer
} from "../core/diagrams/mutations";
import {
  clampNodeSize,
  getEdgeEffectiveStyle,
  getEdgeMarkerStyle,
  getGridSize,
  getNamedStyle,
  getNodeColorPalette,
  getNodeEffectiveStyle,
  getTheme,
  snapToGrid
} from "../core/diagrams/styles";
import {
  buildEdgeMarkerDef,
  buildEdgePath,
  buildNodeCalloutPointer,
  computeNodeTextLayout,
  renderEdgeWaypointHandle,
  getEdgeMarkerDimensions,
  getNodeGeometry,
  renderNodeBody,
  renderTextBlock,
  sampleEdgePath,
  segmentIntersectsRectangle,
  splitTextLines,
  measureTextWidth,
  wrapTextLines
} from "../core/diagrams/geometry";
import { parseTextShapeInlineRuns, renderTextShapeContent } from "../core/diagrams/text-shape";
import {
  bakeDocumentSource,
  hashSource,
  spliceBakedFences,
  extractDiagramFences,
  findSourceTextRange,
  getDiagramId,
  parseDocumentFrontmatter,
  resolveDocument,
  setDiagramId,
  setFrontmatterColourScheme,
  scrollSourceEditorToRange,
  setFrontmatterDoctype,
  setFrontmatterTheme,
  validateDocumentSource
} from "../core/document";
import { formatLintMessages, lintDocument } from "../core/lint";
import type { LintResult } from "../core/lint";
import { getHighlightLanguage, highlightCode, isHighlightableLanguage } from "../core/highlight";
import { applyFlowchartLayout, layoutDirections } from "../core/diagrams/layout";
import { dropRedundantPoints, findClearRoute, getDetourWaypoint, routeIsBlocked } from "../core/diagrams/routing";
import { isSafeUrl, renderInline, renderMarkdown as renderMarkdownCore } from "../core/markdown";
import { renderDiagramSource } from "../renderers/diagram";
import type { DiagramFigure } from "../renderers/types";
import { injectStyles } from "../styles";
import { DiagramEditor } from "./diagram-editor";
import {
  buildEdgeInspectorFields,
  buildNodeInspectorFields,
  buildSequenceInspectorFields,
  wireEdgeInspector,
  wireNodeInspector,
  wireSequenceInspector
} from "./inspector";
import { SourceEditor } from "./source-editor";
import { clearEditorState, createEditorState, isDiagramEditing, type EditorState } from "./state";
import {
  embedRuntimeInDocumentHtml,
  fetchRuntimeSource,
  getRuntimeSourceForOfflineExport,
  getPortableRuntimeUrl,
  restoreExternalRuntimeForSaveAs
} from "./offline-document";

type SequenceInspectable = SequenceParticipant | SequenceMessage | SequenceNote;

function isEditableElement(element: EventTarget | null): boolean {
  return element instanceof Element && element.matches("input, textarea, select, [contenteditable]");
}

/**
 * Measures the rendered height a diagram frame needs to show the drawn shapes
 * (rather than the whole canvas) at the current fit-to-width scale. Returns
 * null when the browser cannot report geometry, and never exceeds the frame's
 * current height so tall diagrams keep their scrollable viewport.
 */
function measureDiagramContentHeight(figure: HTMLElement): number | null {
  const svg = figure.querySelector<SVGSVGElement>("svg");
  if (!svg || typeof svg.getBBox !== "function") {
    return null;
  }
  let contentBounds: { y: number; height: number };
  try {
    contentBounds = svg.getBBox();
  } catch {
    return null;
  }
  const canvasHeight = svg.viewBox?.baseVal?.height || 0;
  const svgBounds = svg.getBoundingClientRect();
  if (!canvasHeight || !svgBounds.height || !contentBounds.height) {
    return null;
  }
  const scale = svgBounds.height / canvasHeight;
  const frameStyles = getComputedStyle(figure);
  const chromeAbove = svgBounds.top - figure.getBoundingClientRect().top + figure.scrollTop;
  const chromeBelow = (parseFloat(frameStyles.paddingBottom) || 0) + (parseFloat(frameStyles.borderBottomWidth) || 0);
  const trailingMargin = Math.min(Math.max(contentBounds.y, 0), 40) * scale;
  const fittedHeight = Math.ceil(
    chromeAbove + (contentBounds.y + contentBounds.height) * scale + trailingMargin + chromeBelow
  );
  return Math.min(fittedHeight, figure.offsetHeight);
}

/** The lint report is addressed by attribute so it can never collide with a document's own ids. */
const lintReportSelector = "template[data-skryb-lint]";

export class BrowserRuntime {
  public readonly state: EditorState = createEditorState();
  private readonly pendingViewportFits = new Set<number>();
  private readonly autoFittedDiagrams = new Map<number, number>();
  private viewportRefitTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly sourceEditor: SourceEditor | null;
  private readonly diagramEditor: DiagramEditor | null;

  public constructor(
    private readonly sourceElement: HTMLTemplateElement | null,
    public readonly outputElement: HTMLElement | null
  ) {
    this.sourceEditor = outputElement ? new SourceEditor({
      outputElement,
      getSource: () => this.getSource(),
      getDocumentTheme: () => this.getDocumentTheme(),
      getDocumentColourScheme: () => this.state.documentColorScheme,
      renderDocument: (source, options) => this.renderDocument(source, options),
      stopDiagramEditing: () => this.stopDiagramEditing(),
      closeDocumentMenu: () => this.closeDocumentMenu()
    }) : null;
    this.diagramEditor = outputElement ? new DiagramEditor({
      outputElement,
      state: this.state,
      persistDiagramModels: () => this.persistDiagramModels(),
      renderDocument: () => this.renderDocument()
    }) : null;
  }

  /**
   * A lint report lives outside the document's Markdown, so writing one does not change the source
   * and would not otherwise register as an unsaved change. It has to, because saving the file is
   * exactly how a reader hands the report back to whoever asked for it.
   */
  private lintReportUnsaved = false;

  public getSource(): string {
    return this.sourceElement?.content.textContent || "";
  }

  public setSource(source: string): void {
    this.sourceElement?.content.replaceChildren(document.createTextNode(source));
  }

  public getDocumentTheme(): string {
    return this.state.documentTheme;
  }

  public stopDiagramEditing(): void {
    if (this.state.editingDiagramIndex !== null) {
      this.state.editingDiagramIndex = null;
      this.state.editSessionDiagram = null;
      clearEditorState(this.state);
    }
  }

  public renderDiagram(source: string, diagramIndex: number, figure?: DiagramFigure): string {
    return renderDiagramSource(source, diagramIndex, {
      figure,
      colourScheme: this.state.documentColorScheme,
      state: {
        ...this.state,
        documentTheme: this.state.documentTheme,
        documentColorScheme: this.state.documentColorScheme
      },
      onDiagram: (index, diagram) => {
        this.state.diagramModels[index] = diagram;
      }
    });
  }

  public renderMarkdown(source: string, state = { diagramIndex: 0 }): string {
    return renderMarkdownCore(source, state, {
      renderDiagram: (diagramSource, index, figure) => this.renderDiagram(diagramSource, index, figure),
      documentColorScheme: this.state.documentColorScheme,
      documentTheme: this.state.documentTheme
    });
  }

  public persistDiagramModels(): void {
    let diagramIndex = 0;
    const sourceBeforePersistence = this.getSource().replace(/\r\n/g, "\n");
    const diagramsById = new Map<string, Diagram[]>();
    for (const diagram of this.state.diagramModels) {
      const id = (diagram as { id?: unknown }).id;
      if (typeof id === "string") {
        diagramsById.set(id, [...(diagramsById.get(id) || []), diagram]);
      }
    }
    const uniqueDiagramsById = new Map(
      [...diagramsById].flatMap(([id, diagrams]) => diagrams.length === 1 ? [[id, diagrams[0]] as const] : [])
    );
    const source = sourceBeforePersistence.replace(
      /^((?: {0,3}> ?)*)```diagram\s*\n([\s\S]*?)^((?: {0,3}> ?)*)```$/gm,
      (_, prefix: string, diagramSource: string, closingPrefix: string) => {
        const normalizedDiagramSource = diagramSource.replace(/^(?: {0,3}> ?)+/gm, "");
        const definitionId = normalizedDiagramSource.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean);
        const diagram = (definitionId && uniqueDiagramsById.get(definitionId)) || this.state.diagramModels[diagramIndex];
        diagramIndex += 1;
        const serializedDiagram = diagram ? serializeDiagram(diagram) : "";
        const serializedLines = serializedDiagram
          ? serializedDiagram.split("\n").map((line) => `${prefix}${line}`).join("\n")
          : "";
        return `${prefix}\`\`\`diagram\n${serializedLines ? `${serializedLines}\n` : ""}${closingPrefix}\`\`\``;
      }
    );
    this.setSource(source);
    this.sourceEditor?.syncSource(source);
  }

  public renderDocument(source = this.getSource(), { preserveOnError = false }: { preserveOnError?: boolean } = {}): boolean {
    if (!this.outputElement) {
      return false;
    }
    for (const diagram of this.outputElement.querySelectorAll<HTMLElement>(".docdiagram")) {
      const diagramIndex = Number(diagram.dataset.diagramIndex);
      if (this.pendingViewportFits.has(diagramIndex)) {
        this.state.diagramViewportHeights.delete(diagramIndex);
        continue;
      }
      // An expanded frame fills the viewport, so its height says nothing about
      // the height the frame should return to once it collapses.
      if (diagramIndex === this.state.expandedDiagramIndex) {
        continue;
      }
      this.state.diagramViewportHeights.set(diagramIndex, diagram.offsetHeight);
    }
    const pageScroll = { x: globalThis.scrollX || 0, y: globalThis.scrollY || 0 };
    const previousModels = [...this.state.diagramModels];
    const previousTheme = this.state.documentTheme;
    const previousThemeSetting = this.state.documentThemeSetting;
    const previousColorScheme = this.state.documentColorScheme;
    const previousDoctype = this.state.documentDoctype;
    this.state.diagramModels.length = 0;

    let markup: string;
    try {
      const parsedDocument = preserveOnError ? validateDocumentSource(source) : resolveDocument(source);
      this.state.documentTheme = parsedDocument.resolvedTheme;
      this.state.documentThemeSetting = parsedDocument.theme;
      this.state.documentColorScheme = parsedDocument.colourScheme;
      this.state.documentDoctype = parsedDocument.doctype;
      markup = this.renderMarkdown(parsedDocument.content);
      // A source edit can remove the diagram that was expanded, which would
      // otherwise leave the runtime pinned to an index that no longer renders.
      if (this.state.expandedDiagramIndex !== null && !this.state.diagramModels[this.state.expandedDiagramIndex]) {
        this.state.expandedDiagramIndex = null;
        this.state.diagramModels.length = 0;
        markup = this.renderMarkdown(parsedDocument.content);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.state.diagramModels.length = 0;
      this.state.diagramModels.push(...previousModels);
      if (preserveOnError) {
        this.state.documentTheme = previousTheme;
        this.state.documentThemeSetting = previousThemeSetting;
        this.state.documentColorScheme = previousColorScheme;
        this.state.documentDoctype = previousDoctype;
        this.sourceEditor?.setError(message);
        return false;
      }
      this.applyPageTheme(this.state.documentTheme);
      this.removeToolbarChrome();
      this.outputElement.innerHTML = `<section class="docdiagram-error"><strong>Document could not be rendered.</strong><br>${escapeHtml(message)}</section>`;
      this.sourceEditor?.renderTray();
      return false;
    }

    this.setSource(source);
    this.sourceEditor?.clearError();
    this.outputElement.dataset.theme = this.state.documentTheme;
    this.outputElement.dataset.colourScheme = this.state.documentColorScheme;
    this.applyDocumentColourScheme(this.outputElement);
    this.outputElement.dataset.format = this.state.documentFormat;
    this.applyPageTheme(this.state.documentTheme);
    this.outputElement.innerHTML = markup;
    this.removeToolbarChrome();
    this.createToolbar();
    this.sourceEditor?.renderTray();
    const sourceTray = document.querySelector<HTMLElement>(".docdiagram-source-tray");
    if (sourceTray) {
      this.applyDocumentColourScheme(sourceTray);
    }
    this.diagramEditor?.enableCanvasPanning();
    this.diagramEditor?.enableSequenceSelection();
    this.fitDiagramViewports();
    if (this.state.editingDiagramIndex !== null) {
      this.diagramEditor?.enableEditing();
    }

    globalThis.scrollTo?.(pageScroll.x, pageScroll.y);
    return true;
  }

  /**
   * Sizes each diagram frame to its drawn content the first time it renders, so
   * short diagrams do not leave a band of empty canvas. Once a height is known
   * it is reused, which preserves any manual resize the reader makes later.
   */
  private fitDiagramViewports(): void {
    if (!this.outputElement) {
      return;
    }
    for (const figure of this.outputElement.querySelectorAll<HTMLElement>(".docdiagram")) {
      const diagramIndex = Number(figure.dataset.diagramIndex);
      if (this.state.diagramViewportHeights.has(diagramIndex) ||
        diagramIndex === this.state.expandedDiagramIndex) {
        continue;
      }
      const fittedHeight = measureDiagramContentHeight(figure);
      if (!fittedHeight) {
        continue;
      }
      this.state.diagramViewportHeights.set(diagramIndex, fittedHeight);
      this.autoFittedDiagrams.set(diagramIndex, fittedHeight);
      figure.style.boxSizing = "border-box";
      figure.style.minHeight = "0";
      figure.style.height = `${fittedHeight}px`;
    }
    this.pendingViewportFits.clear();
  }

  /**
   * Re-fits auto-sized frames when the page width changes, because the diagram
   * scales with the frame width and a stale height would clip or waste space.
   * Frames the reader has resized by hand are left untouched.
   */
  private refitDiagramViewports(): void {
    if (!this.outputElement) {
      return;
    }
    for (const figure of this.outputElement.querySelectorAll<HTMLElement>(".docdiagram")) {
      const diagramIndex = Number(figure.dataset.diagramIndex);
      const autoFittedHeight = this.autoFittedDiagrams.get(diagramIndex);
      if (autoFittedHeight === undefined || diagramIndex === this.state.expandedDiagramIndex) {
        continue;
      }
      if (figure.offsetHeight !== autoFittedHeight) {
        this.autoFittedDiagrams.delete(diagramIndex);
        continue;
      }
      figure.style.removeProperty("height");
      figure.style.removeProperty("min-height");
      this.state.diagramViewportHeights.delete(diagramIndex);
    }
    this.fitDiagramViewports();
  }

  public closeDocumentMenu(): void {
    const menu = document.querySelector<HTMLElement>(".docdiagram-menu");
    const toggle = document.querySelector<HTMLButtonElement>(".docdiagram-menu-toggle");
    if (!menu || !toggle) {
      return;
    }
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  /**
   * Lays out and bakes the document the moment it opens, then reports on the result. Layout has
   * always run on open; what changes here is that its work is written back into the document's own
   * source rather than staying in memory, so what the source says and what the screen shows can
   * never disagree. A document that needed nothing is left exactly as it was, and stays clean.
   */
  private bakeOnOpen(): void {
    let baked = 0;
    let failed = false;
    try {
      const result = bakeDocumentSource(this.getSource());
      baked = result.baked;
      if (baked) {
        this.setSource(result.source);
      }
    } catch {
      // A document that cannot be baked is a document with something wrong in it, which is exactly
      // when a report is worth having, so the failure is remembered rather than swallowed. What is
      // actually wrong is left to lint to say properly.
      failed = true;
    }
    // Linting follows a bake because the geometry has just changed and nobody has seen the result.
    // It is also available on demand, for a reader who wants it without having changed anything.
    if (baked || failed || this.lintRequestedByUrl()) {
      this.writeLintReport();
    }
  }

  private lintRequestedByUrl(): boolean {
    const search = globalThis.location?.search || "";
    return /(^|[?&])skryb-lint(=|&|$)/.test(search);
  }

  /**
   * Publishes lint results as a `template#lint` beside the document's source. A template is inert,
   * so this cannot disturb the document, and it survives Save As - which makes it the one way a
   * reader with no tooling can hand a report back: open, save, send the file. An agent driving a
   * browser, or dumping the DOM from a headless one, reads exactly the same element.
   */
  public writeLintReport(): LintResult | null {
    const source = this.getSource();
    let result: LintResult;
    try {
      result = lintDocument(source);
    } catch (error) {
      result = {
        messages: [{ severity: "error", rule: "schema", message: error instanceof Error ? error.message : String(error) }],
        errorCount: 1,
        warningCount: 0
      };
    }

    // Found by attribute rather than by id: ids belong to the document's own anchor namespace, and a
    // heading called "Lint" or a diagram with that id would otherwise be picked up instead.
    const report = document.querySelector<HTMLTemplateElement>(lintReportSelector) ||
      document.createElement("template");
    report.dataset.skrybLint = "";
    // The hash says which source the report describes, so a later reader can tell whether it still
    // applies rather than trusting a report that predates an edit.
    report.content.replaceChildren(document.createTextNode(JSON.stringify({
      errors: result.errorCount,
      warnings: result.warningCount,
      sourceHash: hashSource(source),
      messages: result.messages
    }, null, 2)));
    if (!report.isConnected) {
      document.body.append(report);
    }
    this.lintReportUnsaved = true;
    return result;
  }

  /**
   * Runs the checks and shows what they found. The report is written into the document as well as
   * shown, so a reader asked for one by an author who cannot see the document can simply save the
   * file and send it back.
   */
  public showLintReport(): void {
    const result = this.writeLintReport();
    if (!result) {
      return;
    }
    const summary = `${result.errorCount} error${result.errorCount === 1 ? "" : "s"}, ` +
      `${result.warningCount} warning${result.warningCount === 1 ? "" : "s"}`;
    const detail = formatLintMessages(result);
    const dialog = document.querySelector<HTMLDialogElement>(".docdiagram-lint-dialog") ||
      document.body.appendChild(document.createElement("dialog"));
    dialog.className = "docdiagram-lint-dialog";
    dialog.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = `Document check: ${summary}`;
    const body = document.createElement("pre");
    body.textContent = detail || "Nothing to report. Every check passed.";
    const close = document.createElement("button");
    close.type = "button";
    close.textContent = "Close";
    close.addEventListener("click", () => dialog.close());
    dialog.append(heading, body, close);
    dialog.showModal();
  }

  public downloadDocument(): void {
    this.sourceEditor?.flushRender();
    if (this.sourceEditor?.hasError && this.sourceEditor.hasUnsavedDraft &&
      !globalThis.confirm("Source has errors. Save the last valid version instead?")) {
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
    this.state.savedSource = this.getSource();
    this.lintReportUnsaved = false;
  }

  public async downloadOfflineDocument(): Promise<void> {
    this.sourceEditor?.flushRender();
    if (this.sourceEditor?.hasError && this.sourceEditor.hasUnsavedDraft &&
      !globalThis.confirm("Source has errors. Save the last valid version instead?")) {
      return;
    }
    const copy = this.createDocumentCopy();
    const runtime = await getRuntimeSourceForOfflineExport(copy);
    this.downloadHtml(embedRuntimeInDocumentHtml(copy.outerHTML, runtime.source, runtime.runtimeUrl), "-offline");
    this.state.savedSource = this.getSource();
    this.lintReportUnsaved = false;
  }

  private createDocumentCopy(source = this.getSource()): HTMLElement {
    const copy = document.documentElement.cloneNode(true) as HTMLElement;
    const sourceCopy = copy.querySelector<HTMLTemplateElement>("#source");
    const toolbar = copy.querySelector(".docdiagram-toolbar");
    const sourceTray = copy.querySelector(".docdiagram-source-tray");
    const output = copy.querySelector<HTMLElement>("#rendered-document");
    const body = copy.querySelector("body");
    sourceCopy?.content.replaceChildren(document.createTextNode(source));
    // The lint report is deliberately kept: it is the document's own answer to "what is wrong with
    // me", and saving is how a reader hands that answer back. The dialog that displayed it is
    // editing chrome and goes, like the toolbar.
    copy.querySelector(".docdiagram-lint-dialog")?.remove();
    toolbar?.remove();
    sourceTray?.remove();
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
    body?.removeAttribute("data-docdiagram-theme");
    output?.replaceChildren();
    output?.removeAttribute("data-editing-shortcuts-bound");
    for (const attribute of [...(output?.attributes || [])]) {
      if (attribute.name === "style" || attribute.name.startsWith("data-")) {
        output?.removeAttribute(attribute.name);
      }
    }
    return copy;
  }

  private downloadHtml(documentHtml: string, suffix: string, name = ""): void {
    const blob = new Blob([`<!doctype html>\n${documentHtml}`], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    const title = name || document.title.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");
    link.href = URL.createObjectURL(blob);
    link.download = `${title || "document"}${suffix}.html`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  public boot(): void {
    if (!this.sourceElement || !this.outputElement) {
      return;
    }
    injectStyles();
    // The saved mark is taken before baking, so a document that had to be laid out reads as changed
    // and the reader is asked to save it on the way out. That is the whole of how a positionless
    // document gets its geometry back onto disk when nobody is driving a browser.
    this.state.savedSource = this.getSource();
    this.bakeOnOpen();
    globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change", () => {
      if (this.state.documentThemeSetting === "auto") {
        this.renderDocument();
      }
    });
    globalThis.addEventListener("resize", () => {
      if (this.viewportRefitTimer !== null) {
        clearTimeout(this.viewportRefitTimer);
      }
      this.viewportRefitTimer = setTimeout(() => {
        this.viewportRefitTimer = null;
        this.refitDiagramViewports();
      }, 150);
    });
    globalThis.addEventListener("beforeunload", (event) => {
      if (this.getSource() === this.state.savedSource && !this.sourceEditor?.hasUnsavedDraft &&
        !this.lintReportUnsaved) {
        return;
      }
      event.preventDefault();
      event.returnValue = "";
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key.toLowerCase() === "e" &&
        (this.sourceEditor?.isOpen || !isEditableElement(event.target))) {
        event.preventDefault();
        this.sourceEditor?.isOpen ? this.sourceEditor.close() : this.sourceEditor?.open();
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        this.downloadDocument();
        return;
      }
      if (event.key === "Escape") {
        this.closeDocumentMenu();
        if (!event.defaultPrevented && !isEditableElement(event.target) &&
          this.state.expandedDiagramIndex !== null) {
          event.preventDefault();
          this.toggleDiagramExpansion(this.state.expandedDiagramIndex);
        }
      }
    });
    document.addEventListener("pointerdown", (event) => {
      const activeInlineEditor = document.activeElement;
      if (activeInlineEditor instanceof HTMLTextAreaElement &&
        activeInlineEditor.matches(".docdiagram-inline-editor") &&
        !(event.target instanceof Node && activeInlineEditor.contains(event.target))) {
        activeInlineEditor.blur();
      }
      const toolbar = document.querySelector<HTMLElement>(".docdiagram-toolbar");
      // Diagram controls docked into the document toolbar are still diagram
      // controls, so using them dismisses the document menu as they would from
      // inside their own frame.
      const withinDiagramControls = event.target instanceof Element &&
        event.target.closest(".docdiagram-diagram-toolbar") !== null;
      if (toolbar && event.target instanceof Node &&
        (!toolbar.contains(event.target) || withinDiagramControls)) {
        this.closeDocumentMenu();
      }
      if (event.target instanceof Node && !(
        event.target instanceof Element && event.target.closest(".docdiagram-diagram-export")
      )) {
        this.closeDiagramExportMenus();
      }
      if (!(event.target instanceof Element) || event.target.closest(
        ".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message"
      ) || (!this.state.selectedNode && !this.state.selectedEdge && !this.state.selectedSequenceElement)) {
        return;
      }
      clearEditorState(this.state);
      this.renderDocument();
    });
    this.outputElement.addEventListener("dblclick", (event) => {
      if (event.target instanceof Element && event.target.closest("button, input, textarea, select, [contenteditable]")) {
        return;
      }
      this.sourceEditor?.reveal(globalThis.getSelection?.()?.toString() || "");
    });
    // A `doctype: diagram` document opens straight into the expanded frame.
    // Reading the frontmatter up front keeps that to a single render, and an
    // unparseable header is reported by renderDocument as usual.
    try {
      if (parseDocumentFrontmatter(this.getSource()).frontmatter.doctype === "diagram") {
        this.state.expandedDiagramIndex = 0;
      }
    } catch {
      this.state.expandedDiagramIndex = null;
    }
    this.renderDocument();
  }

  public getCoreApi() {
    return {
      bakeDocumentSource,
      spliceBakedFences,
      lintDocument
    };
  }

  private createToolbar(): void {
    if (!this.outputElement) {
      return;
    }
    const toolbar = document.createElement("section");
    toolbar.className = "docdiagram-toolbar";
    toolbar.dataset.editing = String(this.state.editingDiagramIndex !== null);
    toolbar.dataset.theme = this.state.documentTheme;
    toolbar.dataset.colourScheme = this.state.documentColorScheme;
    toolbar.dataset.format = this.state.documentFormat;

    const node = this.getSelectedNode();
    const edge = !node ? this.getSelectedEdge() : null;
    const sequenceElement = !node && !edge ? this.getSelectedSequenceElement() : null;
    const inspectorDiagram = node && this.state.selectedNode
      ? this.state.diagramModels[this.state.selectedNode.diagramIndex]
      : edge && this.state.selectedEdge
        ? this.state.diagramModels[this.state.selectedEdge.diagramIndex]
        : sequenceElement && this.state.selectedSequenceElement
          ? this.state.diagramModels[this.state.selectedSequenceElement.diagramIndex]
          : null;

    toolbar.innerHTML = [
      `<button type="button" class="docdiagram-menu-toggle" aria-label="Document menu" aria-expanded="false" title="Document menu">☰</button>`,
      `<div class="docdiagram-menu" hidden>`,
      `<label class="docdiagram-theme-control">Theme<select class="docdiagram-theme-select">`,
      `<option value="auto"${this.state.documentThemeSetting === "auto" ? " selected" : ""}>Auto</option>`,
      `<option value="light"${this.state.documentThemeSetting === "light" ? " selected" : ""}>Light</option>`,
      `<option value="dark"${this.state.documentThemeSetting === "dark" ? " selected" : ""}>Dark</option>`,
      `</select></label>`,
      `<label class="docdiagram-theme-control">Colour scheme<select class="docdiagram-colour-scheme-select">${Object.entries(colourSchemes).map(([name, scheme]) => `<option value="${name}"${this.state.documentColorScheme === name ? " selected" : ""}>${scheme.label}</option>`).join("")}</select></label>`,
      `<label class="docdiagram-theme-control">Format<select class="docdiagram-format-select">`,
      `<option value="centered"${this.state.documentFormat === "centered" ? " selected" : ""}>Centered</option>`,
      `<option value="full-width"${this.state.documentFormat === "full-width" ? " selected" : ""}>Full width</option>`,
      `</select></label>`,
      `<label class="docdiagram-theme-control">Opens as<select class="docdiagram-doctype-select">`,
      `<option value="document"${this.state.documentDoctype === "document" ? " selected" : ""}>Document</option>`,
      `<option value="diagram"${this.state.documentDoctype === "diagram" ? " selected" : ""}>Diagram</option>`,
      `</select></label>`,
      `<button type="button" class="docdiagram-edit-source">Edit source</button>`,
      `<button type="button" class="docdiagram-lint">Check document</button>`,
      `<button type="button" class="docdiagram-print-document">Print / Save as PDF</button>`,
      `<button type="button" class="docdiagram-save">Save As</button>`,
      `<button type="button" class="docdiagram-offline-save">Save for Offline</button>`,
      `</div>`,
      node && inspectorDiagram?.type === "flowchart"
        ? `<div class="docdiagram-inspector" data-kind="node">${buildNodeInspectorFields(inspectorDiagram, node, this.state.documentColorScheme, this.state.documentTheme)}</div>`
        : edge && inspectorDiagram
          ? `<div class="docdiagram-inspector" data-kind="edge">${buildEdgeInspectorFields(inspectorDiagram, edge)}</div>`
          : sequenceElement && inspectorDiagram
            ? `<div class="docdiagram-inspector" data-kind="sequence">${buildSequenceInspectorFields(inspectorDiagram, this.state.selectedSequenceElement!, sequenceElement, this.state.documentColorScheme, this.state.documentTheme)}</div>`
            : ""
    ].join("");
    const menuToggle = toolbar.querySelector<HTMLButtonElement>(".docdiagram-menu-toggle");
    const menu = toolbar.querySelector<HTMLElement>(".docdiagram-menu");
    menuToggle?.addEventListener("click", () => {
      if (!menu) {
        return;
      }
      const open = menu.hidden;
      menu.hidden = !open;
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    toolbar.querySelector<HTMLButtonElement>(".docdiagram-print-document")?.addEventListener("click", () => this.printDocument());
    toolbar.querySelector<HTMLButtonElement>(".docdiagram-save")?.addEventListener("click", () => this.downloadDocument());
    toolbar.querySelector<HTMLButtonElement>(".docdiagram-offline-save")?.addEventListener("click", async (event) => {
      const button = event.currentTarget as HTMLButtonElement;
      button.disabled = true;
      try {
        await this.downloadOfflineDocument();
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("Offline export failed.", error);
        globalThis.alert(`Save for Offline failed: ${message}`);
      } finally {
        button.disabled = false;
      }
    });
    toolbar.querySelector<HTMLButtonElement>(".docdiagram-edit-source")?.addEventListener("click", () => {
      this.closeDocumentMenu();
      this.sourceEditor?.open();
    });
    toolbar.querySelector<HTMLButtonElement>(".docdiagram-lint")?.addEventListener("click", () => {
      this.closeDocumentMenu();
      this.showLintReport();
    });
    toolbar.querySelector<HTMLSelectElement>(".docdiagram-theme-select")?.addEventListener("change", (event) => {
      this.setSource(setFrontmatterTheme(this.getSource(), (event.currentTarget as HTMLSelectElement).value));
      this.renderDocument();
    });
    toolbar.querySelector<HTMLSelectElement>(".docdiagram-colour-scheme-select")?.addEventListener("change", (event) => {
      this.setSource(setFrontmatterColourScheme(this.getSource(), (event.currentTarget as HTMLSelectElement).value));
      this.renderDocument();
    });
    toolbar.querySelector<HTMLSelectElement>(".docdiagram-format-select")?.addEventListener("change", (event) => {
      this.state.documentFormat = (event.currentTarget as HTMLSelectElement).value === "full-width" ? "full-width" : "centered";
      this.renderDocument();
    });
    toolbar.querySelector<HTMLSelectElement>(".docdiagram-doctype-select")?.addEventListener("change", (event) => {
      const doctype = (event.currentTarget as HTMLSelectElement).value === "diagram" ? "diagram" : "document";
      this.setSource(setFrontmatterDoctype(this.getSource(), doctype));
      this.setExpandedDiagram(doctype === "diagram" ? 0 : null);
      this.renderDocument();
    });
    this.outputElement.before(toolbar);
    this.applyDocumentColourScheme(toolbar);

    if (node && this.state.selectedNode) {
      wireNodeInspector(this, toolbar, this.state.selectedNode.diagramIndex, this.state.selectedNode.nodeId);
    } else if (edge && this.state.selectedEdge) {
      wireEdgeInspector(this, toolbar, this.state.selectedEdge.diagramIndex, this.state.selectedEdge.edgeIndex);
    } else if (sequenceElement && this.state.selectedSequenceElement) {
      wireSequenceInspector(this, toolbar, sequenceElement);
    }
    this.wireChromeControls();
    this.dockExpandedDiagramToolbar(toolbar);
  }

  /**
   * While a frame fills the window it has no free corner of its own, and the
   * document menu no longer floats above scrolling content because nothing
   * scrolls behind it. Moving the frame's controls into the document toolbar
   * makes the two a single row that lays itself out, instead of one having to
   * reserve a guessed amount of space for the other. The controls keep the
   * listeners bound in wireChromeControls, which travel with the element, and
   * the next render rebuilds both from scratch.
   */
  private dockExpandedDiagramToolbar(toolbar: HTMLElement): void {
    if (this.state.expandedDiagramIndex === null) {
      return;
    }
    const diagramToolbar = this.outputElement?.querySelector<HTMLElement>(
      `.docdiagram[data-diagram-index="${this.state.expandedDiagramIndex}"] .docdiagram-diagram-toolbar`
    );
    if (diagramToolbar) {
      toolbar.prepend(diagramToolbar);
    }
  }

  private getSelectedNode(): FlowchartNode | null {
    const selected = this.state.selectedNode;
    const diagram = selected ? this.state.diagramModels[selected.diagramIndex] : null;
    return selected && diagram?.type === "flowchart" && isDiagramEditing(this.state, selected.diagramIndex)
      ? findFlowchartNode(diagram, selected.nodeId)?.node || null
      : null;
  }

  private getSelectedEdge(): FlowchartEdge | null {
    const selected = this.state.selectedEdge;
    const diagram = selected ? this.state.diagramModels[selected.diagramIndex] : null;
    return selected && diagram?.type === "flowchart" && isDiagramEditing(this.state, selected.diagramIndex)
      ? diagram.edges[selected.edgeIndex] || null
      : null;
  }

  private getSelectedSequenceElement(): SequenceInspectable | null {
    const selected = this.state.selectedSequenceElement;
    const diagram = selected ? this.state.diagramModels[selected.diagramIndex] : null;
    if (!selected || diagram?.type !== "sequence" || !isDiagramEditing(this.state, selected.diagramIndex)) {
      return null;
    }
    if (selected.kind === "participant") {
      return diagram.participants?.find((participant) => participant.id === selected.id) || null;
    }
    return selected.kind === "message"
      ? diagram.messages?.[selected.index] || null
      : diagram.notes?.[selected.index] || null;
  }

  private applyDocumentColourScheme(element: HTMLElement): void {
    const background = getNodeColorPalette(this.state.documentColorScheme, this.state.documentTheme, "background");
    const pale = getNodeColorPalette(this.state.documentColorScheme, this.state.documentTheme, "pale");
    const neutral = getNodeColorPalette(this.state.documentColorScheme, this.state.documentTheme, "neutral");
    const accent = getNodeColorPalette(this.state.documentColorScheme, this.state.documentTheme, "accent");
    if (!background || !pale || !neutral || !accent) {
      return;
    }
    element.style.setProperty("--docdiagram-background", background.fill || "");
    element.style.setProperty("--docdiagram-border", neutral.stroke || "");
    element.style.setProperty("--docdiagram-control-background", pale.fill || "");
    element.style.setProperty("--docdiagram-control-hover", neutral.fill || "");
    element.style.setProperty("--docdiagram-code-background", pale.fill || "");
    element.style.setProperty("--docdiagram-text", background.text || "");
    element.style.setProperty("--docdiagram-muted", neutral.text || "");
    element.style.setProperty("--docdiagram-accent", accent.stroke || "");
  }

  private wireChromeControls(): void {
    if (!this.outputElement) {
      return;
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-export-toggle")) {
      button.addEventListener("click", () => {
        const menu = button.parentElement?.querySelector<HTMLElement>(".docdiagram-diagram-export-menu");
        if (!menu) {
          return;
        }
        const open = menu.hidden;
        this.closeDiagramExportMenus();
        menu.hidden = !open;
        button.setAttribute("aria-expanded", String(open));
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-toggle-expand")) {
      button.addEventListener("click", () => this.toggleDiagramExpansion(Number(button.dataset.diagramIndex)));
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-open-diagram")) {
      button.addEventListener("click", () => {
        this.closeDiagramExportMenus();
        this.openDiagram(Number(button.dataset.diagramIndex));
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-save-diagram")) {
      button.addEventListener("click", () => {
        this.closeDiagramExportMenus();
        this.downloadDiagramDocument(Number(button.dataset.diagramIndex));
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-download-diagram")) {
      button.addEventListener("click", () => {
        this.closeDiagramExportMenus();
        this.downloadDiagram(Number(button.dataset.diagramIndex));
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-print-diagram")) {
      button.addEventListener("click", () => {
        this.closeDiagramExportMenus();
        this.printDiagram(Number(button.dataset.diagramIndex));
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-zoom-in, .docdiagram-zoom-out")) {
      button.addEventListener("click", () => {
        const diagramIndex = Number(button.dataset.diagramIndex);
        const current = this.state.diagramZooms.get(diagramIndex) || 100;
        const direction = button.classList.contains("docdiagram-zoom-in") ? 25 : -25;
        this.state.diagramZooms.set(diagramIndex, clampZoom(current + direction));
        this.renderDocument();
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-fit")) {
      button.addEventListener("click", () => {
        const diagramIndex = Number(button.dataset.diagramIndex);
        this.state.diagramZooms.set(diagramIndex, 100);
        this.state.diagramCameraOffsets.delete(diagramIndex);
        this.pendingViewportFits.add(diagramIndex);
        this.renderDocument();
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-start-editing")) {
      button.addEventListener("click", () => {
        // Read from the button rather than its ancestor frame, because an
        // expanded diagram's controls are docked outside that frame.
        const diagramIndex = Number(button.dataset.diagramIndex);
        const diagram = this.state.diagramModels[diagramIndex];
        if (!diagram) {
          return;
        }
        this.state.editSessionDiagram = parseDiagram(serializeDiagram(diagram), this.state.documentColorScheme);
        this.state.editingDiagramIndex = diagramIndex;
        clearEditorState(this.state);
        this.renderDocument();
      });
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-done-editing")) {
      button.addEventListener("click", () => this.exitEditing(this.state.editingDiagramIndex, false));
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-cancel-editing")) {
      button.addEventListener("click", () => this.exitEditing(this.state.editingDiagramIndex, true));
    }
    for (const button of this.outputElement.querySelectorAll<HTMLButtonElement>(".docdiagram-create-node")) {
      button.addEventListener("click", () => this.createNewNode(Number(button.dataset.diagramIndex)));
    }
  }

  private getStandaloneDiagramSvg(diagramIndex: number): SVGSVGElement | null {
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
    const title = document.title.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "");
    return `${title || "diagram"}-${diagramIndex + 1}`;
  }

  private openDiagram(diagramIndex: number): void {
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

  /**
   * Writes a single diagram out as its own Skryb document. The result carries
   * `doctype: diagram`, so opening it drops straight into the expanded editor,
   * and it stays a normal Skryb document that can be imported back into any
   * other document later.
   */
  private downloadDiagramDocument(diagramIndex: number): void {
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
    this.downloadHtml(copy.outerHTML, "", name.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, ""));
  }

  private downloadDiagram(diagramIndex: number): void {
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

  /**
   * Prints the whole document. The print stylesheet does the layout work, so this only has to put
   * the document back into its reading state first: an expanded frame, an open editor or a stored
   * viewport height would otherwise print as they appear on screen rather than as the document.
   */
  private printDocument(): void {
    this.closeDocumentMenu();
    this.closeDiagramExportMenus();
    this.stopDiagramEditing();
    this.state.expandedDiagramIndex = null;
    // Stored heights are a record of how each frame was resized on screen, which says nothing
    // about how tall a diagram needs to be on paper.
    this.state.diagramViewportHeights.clear();
    for (const diagramIndex of this.state.diagramZooms.keys()) {
      this.state.diagramZooms.set(diagramIndex, 100);
    }
    this.state.diagramCameraOffsets.clear();
    this.renderDocument();
    globalThis.print();
  }

  private printDiagram(diagramIndex: number): void {
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

  private closeDiagramExportMenus(): void {
    // Searched from the document because an expanded frame's controls are docked
    // into the document toolbar, outside the rendered output.
    for (const menu of document.querySelectorAll<HTMLElement>(".docdiagram-diagram-export-menu")) {
      menu.hidden = true;
    }
    for (const toggle of document.querySelectorAll<HTMLButtonElement>(".docdiagram-export-toggle")) {
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  private exitEditing(diagramIndex: number | null, discard: boolean): void {
    if (diagramIndex === null) {
      return;
    }
    if (discard && this.state.editSessionDiagram) {
      this.state.diagramModels[diagramIndex] = this.state.editSessionDiagram;
      this.persistDiagramModels();
    }
    this.state.editingDiagramIndex = null;
    this.state.editSessionDiagram = null;
    clearEditorState(this.state);
    this.renderDocument();
  }

  private createNewNode(diagramIndex: number): void {
    const diagram = this.state.diagramModels[diagramIndex];
    if (!diagram || diagram.type !== "flowchart") {
      return;
    }
    const node = createNode(diagram);
    this.state.selectedNode = { diagramIndex, nodeId: node.id };
    this.state.selectedEdge = null;
    this.persistDiagramModels();
    this.renderDocument();
  }

  private applyPageTheme(theme: Exclude<Theme, "auto">): void {
    const background = getNodeColorPalette(this.state.documentColorScheme, theme, "background");
    const text = background?.text;
    document.documentElement.dataset.docdiagramTheme = theme;
    document.documentElement.dataset.docdiagramExpanded = String(this.state.expandedDiagramIndex !== null);
    document.documentElement.style.setProperty("--docdiagram-page-background", background?.fill || "");
    document.documentElement.style.setProperty("--docdiagram-page-text", text || "");
    document.body?.dataset && (document.body.dataset.docdiagramTheme = theme);
  }

  /**
   * Expands one diagram frame to fill the window, or collapses the expanded
   * one. The frame stays in the document tree so editing, panning and the
   * inspector keep working; only its layout changes. Both the frame being
   * expanded and the one being collapsed are re-fitted, because the frame's
   * width - and so the scale the diagram is drawn at - changes with the
   * transition. Marking them pending also stops the next render from recording
   * a fixed-position frame's viewport-filling height as its stored height.
   */
  private setExpandedDiagram(diagramIndex: number | null): void {
    const previousIndex = this.state.expandedDiagramIndex;
    if (previousIndex === diagramIndex) {
      return;
    }
    this.state.expandedDiagramIndex = diagramIndex;
    for (const index of [previousIndex, diagramIndex]) {
      if (index === null) {
        continue;
      }
      this.state.diagramZooms.set(index, 100);
      this.state.diagramCameraOffsets.delete(index);
      this.pendingViewportFits.add(index);
      this.autoFittedDiagrams.delete(index);
    }
  }

  public toggleDiagramExpansion(diagramIndex: number): void {
    this.setExpandedDiagram(this.state.expandedDiagramIndex === diagramIndex ? null : diagramIndex);
    this.closeDiagramExportMenus();
    this.renderDocument();
  }

  private removeToolbarChrome(): void {
    if (!this.outputElement) {
      return;
    }
    while (this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar")) {
      this.outputElement.previousElementSibling.remove();
    }
  }
}
