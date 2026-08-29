import { resolveDocument, validateDocumentSource } from "../core/document";
import type { EditorState } from "./state";

export type DocumentRenderResult =
  | { ok: true; markup: string }
  | { ok: false; message: string };

export class DocumentRenderer {
  public constructor(
    private readonly state: EditorState,
    private readonly renderMarkdown: (source: string) => string
  ) {}

  public render(source: string, preserveOnError = false): DocumentRenderResult {
    const previousModels = [...this.state.diagramModels];
    const previousTheme = this.state.documentTheme;
    const previousThemeSetting = this.state.documentThemeSetting;
    const previousColorScheme = this.state.documentColorScheme;
    const previousDoctype = this.state.documentDoctype;
    this.state.diagramModels.length = 0;

    try {
      const parsedDocument = preserveOnError ? validateDocumentSource(source) : resolveDocument(source);
      this.state.documentTheme = parsedDocument.resolvedTheme;
      this.state.documentThemeSetting = parsedDocument.theme;
      this.state.documentColorScheme = parsedDocument.colourScheme;
      this.state.documentDoctype = parsedDocument.doctype;
      let markup = this.renderMarkdown(parsedDocument.content);
      if (this.state.expandedDiagramIndex !== null && !this.state.diagramModels[this.state.expandedDiagramIndex]) {
        this.state.expandedDiagramIndex = null;
        this.state.diagramModels.length = 0;
        markup = this.renderMarkdown(parsedDocument.content);
      }
      return { ok: true, markup };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.state.diagramModels.length = 0;
      this.state.diagramModels.push(...previousModels);
      if (preserveOnError) {
        this.state.documentTheme = previousTheme;
        this.state.documentThemeSetting = previousThemeSetting;
        this.state.documentColorScheme = previousColorScheme;
        this.state.documentDoctype = previousDoctype;
      }
      return { ok: false, message };
    }
  }
}
