import { getNodeColorPalette } from "../core/diagrams/styles";
import type { Theme } from "../core/diagrams/schema";
import type { EditorState } from "./state";

export class BrowserChrome {
  public constructor(
    private readonly state: EditorState,
    private readonly outputElement: HTMLElement | null
  ) {}

  public closeDocumentMenu(): void {
    const menu = document.querySelector<HTMLElement>(".docdiagram-menu");
    const toggle = document.querySelector<HTMLButtonElement>(".docdiagram-menu-toggle");
    if (!menu || !toggle) {
      return;
    }
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  public closeDiagramExportMenus(): void {
    for (const menu of document.querySelectorAll<HTMLElement>(".docdiagram-diagram-export-menu")) {
      menu.hidden = true;
    }
    for (const toggle of document.querySelectorAll<HTMLButtonElement>(".docdiagram-export-toggle")) {
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  public applyDocumentColourScheme(element: HTMLElement): void {
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

  public applyPageTheme(theme: Exclude<Theme, "auto">): void {
    const background = getNodeColorPalette(this.state.documentColorScheme, theme, "background");
    document.documentElement.dataset.docdiagramTheme = theme;
    document.documentElement.dataset.docdiagramExpanded = String(this.state.expandedDiagramIndex !== null);
    document.documentElement.style.setProperty("--docdiagram-page-background", background?.fill || "");
    document.documentElement.style.setProperty("--docdiagram-page-text", background?.text || "");
    if (document.body) {
      document.body.dataset.docdiagramTheme = theme;
    }
  }

  public dockExpandedDiagramToolbar(toolbar: HTMLElement): void {
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

  public removeToolbar(): void {
    if (!this.outputElement) {
      return;
    }
    while (this.outputElement.previousElementSibling?.classList.contains("docdiagram-toolbar")) {
      this.outputElement.previousElementSibling.remove();
    }
  }
}
