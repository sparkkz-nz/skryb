function isEditableElement(element: EventTarget | null): boolean {
  return element instanceof Element && element.matches("input, textarea, select, [contenteditable]");
}

export interface BrowserLifecycleHost {
  readonly outputElement: HTMLElement;
  isAutoTheme(): boolean;
  renderDocument(): void;
  refitDiagramViewports(): void;
  hasUnsavedChanges(): boolean;
  isSourceEditorOpen(): boolean;
  toggleSourceEditor(): void;
  downloadDocument(): void;
  closeDocumentMenu(): void;
  closeDiagramExportMenus(): void;
  getExpandedDiagramIndex(): number | null;
  toggleDiagramExpansion(diagramIndex: number): void;
  hasSelection(): boolean;
  clearSelection(): void;
  revealSource(text: string): void;
}

export class BrowserLifecycle {
  private viewportRefitTimer: ReturnType<typeof setTimeout> | null = null;

  public constructor(private readonly host: BrowserLifecycleHost) {}

  public bind(): void {
    globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener("change", () => {
      if (this.host.isAutoTheme()) {
        this.host.renderDocument();
      }
    });
    globalThis.addEventListener("resize", () => {
      if (this.viewportRefitTimer !== null) {
        clearTimeout(this.viewportRefitTimer);
      }
      this.viewportRefitTimer = setTimeout(() => {
        this.viewportRefitTimer = null;
        this.host.refitDiagramViewports();
      }, 150);
    });
    globalThis.addEventListener("beforeunload", (event) => {
      if (!this.host.hasUnsavedChanges()) {
        return;
      }
      event.preventDefault();
      event.returnValue = "";
    });
    document.addEventListener("keydown", (event) => this.handleKeydown(event));
    document.addEventListener("pointerdown", (event) => this.handlePointerDown(event));
    this.host.outputElement.addEventListener("dblclick", (event) => {
      if (event.target instanceof Element && event.target.closest("button, input, textarea, select, [contenteditable]")) {
        return;
      }
      this.host.revealSource(globalThis.getSelection?.()?.toString() || "");
    });
  }

  private handleKeydown(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key.toLowerCase() === "e" &&
      (this.host.isSourceEditorOpen() || !isEditableElement(event.target))) {
      event.preventDefault();
      this.host.toggleSourceEditor();
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      this.host.downloadDocument();
      return;
    }
    if (event.key === "Escape") {
      this.host.closeDocumentMenu();
      const expandedDiagramIndex = this.host.getExpandedDiagramIndex();
      if (!event.defaultPrevented && !isEditableElement(event.target) && expandedDiagramIndex !== null) {
        event.preventDefault();
        this.host.toggleDiagramExpansion(expandedDiagramIndex);
      }
    }
  }

  private handlePointerDown(event: PointerEvent): void {
    const activeInlineEditor = document.activeElement;
    if (activeInlineEditor instanceof HTMLTextAreaElement &&
      activeInlineEditor.matches(".docdiagram-inline-editor") &&
      !(event.target instanceof Node && activeInlineEditor.contains(event.target))) {
      activeInlineEditor.blur();
    }
    const toolbar = document.querySelector<HTMLElement>(".docdiagram-toolbar");
    const withinDiagramControls = event.target instanceof Element &&
      event.target.closest(".docdiagram-diagram-toolbar") !== null;
    if (toolbar && event.target instanceof Node &&
      (!toolbar.contains(event.target) || withinDiagramControls)) {
      this.host.closeDocumentMenu();
    }
    if (event.target instanceof Node && !(
      event.target instanceof Element && event.target.closest(".docdiagram-diagram-export")
    )) {
      this.host.closeDiagramExportMenus();
    }
    if (!(event.target instanceof Element) || event.target.closest(
      ".docdiagram-toolbar, .docdiagram-node, .docdiagram-edge-group, .docdiagram-connection-port, .docdiagram-edge-endpoint, .docdiagram-edge-waypoint, .docdiagram-callout-handle, .docdiagram-inline-editor, .docdiagram-sequence-participant, .docdiagram-sequence-note, .docdiagram-sequence-message"
    ) || !this.host.hasSelection()) {
      return;
    }
    this.host.clearSelection();
  }
}
