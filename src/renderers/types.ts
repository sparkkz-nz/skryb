import { escapeHtml } from "../core/diagrams/parser";
import type { Position } from "../core/diagrams/schema";

export interface NodeSelection {
  diagramIndex: number;
  nodeId: string;
}

export interface EdgeSelection {
  diagramIndex: number;
  edgeIndex: number;
}

export interface InlineNodeEditor extends NodeSelection {}

export interface InlineEdgeEditor extends EdgeSelection {}

export interface ConnectionDrag {
  diagramIndex: number;
  sourceNodeId: string;
  sourceAnchor: string;
  start: Position;
  current: Position;
  targetAnchor?: string;
  edgeIndex?: number;
  endpoint?: "source" | "target";
  reconnect?: boolean;
  invalid: boolean;
}

export interface DiagramRenderState {
  documentTheme: string;
  documentColorScheme: string;
  editingDiagramIndex: number | null;
  selectedNode: NodeSelection | null;
  selectedEdge: EdgeSelection | null;
  editingNode: InlineNodeEditor | null;
  editingEdge: InlineEdgeEditor | null;
  connectionDrag: ConnectionDrag | null;
  expandedDiagramIndex: number | null;
  diagramZooms: Map<number, number>;
  diagramCameraOffsets: Map<number, Position>;
  diagramViewportHeights: Map<number, number>;
}

export type DiagramEditingMode = "none" | "flowchart" | "sequence";

export type DiagramToolbarRenderer = (
  diagramIndex: number,
  editingMode: DiagramEditingMode,
  state: DiagramRenderState
) => string;

/** The document-level identity of a rendered diagram: its anchor and its resolved caption. */
export interface DiagramFigure {
  id: string | null;
  caption: string | null;
}

export function renderFigureAttributes(figure?: DiagramFigure): string {
  // The diagram's own id is its anchor, so `#some-id` deep-links to it exactly as a heading does.
  // A captioned frame is flagged here rather than matched with `:has()`, so reserving room for the
  // caption never depends on a CSS feature the reader's browser might not have.
  return [
    figure?.caption ? ' class="docdiagram docdiagram-captioned"' : ' class="docdiagram"',
    figure?.id ? ` id="${escapeHtml(figure.id)}"` : ""
  ].join("");
}

export function renderFigureCaption(figure: DiagramFigure | undefined, renderInline: (source: string) => string): string {
  // A figcaption inside the existing figure is both semantically correct and gives the hiding rule
  // for free: an expanded frame is a working view rather than a document view.
  return figure?.caption ? `<figcaption class="docdiagram-caption">${renderInline(figure.caption)}</figcaption>` : "";
}
