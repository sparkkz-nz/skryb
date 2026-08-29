export * from "./diagrams/geometry";
export * from "./diagrams/edge-labels";
export * from "./diagrams/hierarchy";
export * from "./diagrams/layout";
export * from "./diagrams/mutations";
export * from "./diagrams/parser";
export * from "./diagrams/routing";
export * from "./diagrams/schema";
export * from "./diagrams/serializer";
export * from "./diagrams/styles";
export * from "./diagrams/text-shape";
export * from "./document";
export * from "./fences";
export * from "./highlight";
export * from "./lint";
export { isSafeUrl, renderInline, renderMarkdown as renderMarkdownCore } from "./markdown";

export { buildEdgeInspectorFields, buildNodeInspectorFields } from "../editor/inspector";
export { DocumentExportService } from "../editor/document-export-service";
export { DocumentRenderer } from "../editor/document-renderer";
export { DocumentSession, TemplateSourceStore } from "../editor/document-session";
export { createEditorState } from "../editor/state";
export {
  embedRuntimeInDocumentHtml,
  fetchRuntimeSource,
  getPortableRuntimeUrl
} from "../editor/offline-document";
export { renderDiagramSource } from "../renderers/diagram";

import type { Diagram } from "./diagrams/schema";
import { renderMarkdown as renderMarkdownCore } from "./markdown";
import { renderDiagramSource } from "../renderers/diagram";
import { createEditorState } from "../editor/state";
import type { DiagramFigure } from "../renderers/types";

const renderState = createEditorState();

export function renderDiagram(source: string, diagramIndex: number, figure?: DiagramFigure): string {
  return renderDiagramSource(source, diagramIndex, {
    colourScheme: renderState.documentColorScheme,
    state: renderState,
    onDiagram: (_index: number, _diagram: Diagram) => undefined,
    figure
  });
}

export function renderMarkdown(source: string, state = { diagramIndex: 0 }): string {
  return renderMarkdownCore(source, state, {
    renderDiagram,
    documentColorScheme: renderState.documentColorScheme,
    documentTheme: renderState.documentTheme
  });
}
