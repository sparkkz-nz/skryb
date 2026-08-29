import type { ColourSchemeName, Diagram, Theme } from "../core/diagrams/schema";
import type { DocumentDoctype } from "../core/document";
import type {
  ConnectionDrag,
  DiagramRenderState,
  EdgeSelection,
  InlineEdgeEditor,
  InlineNodeEditor,
  NodeSelection
} from "../renderers/types";

export type SequenceElementKind = "participant" | "message" | "note";

export interface ParticipantSelection {
  diagramIndex: number;
  kind: "participant";
  id: string;
}

export interface IndexedSequenceSelection {
  diagramIndex: number;
  kind: Exclude<SequenceElementKind, "participant">;
  index: number;
}

export type SequenceSelection = ParticipantSelection | IndexedSequenceSelection;

export interface EditorState extends DiagramRenderState {
  diagramModels: Diagram[];
  selectedSequenceElement: SequenceSelection | null;
  documentTheme: Exclude<Theme, "auto">;
  documentThemeSetting: Theme;
  documentColorScheme: ColourSchemeName;
  documentFormat: "centered" | "full-width";
  documentDoctype: DocumentDoctype;
  savedSource: string;
  editSessionDiagram: Diagram | null;
}

export function createEditorState(): EditorState {
  return {
    diagramModels: [],
    editingDiagramIndex: null,
    selectedNode: null,
    selectedEdge: null,
    selectedSequenceElement: null,
    editingNode: null,
    editingEdge: null,
    connectionDrag: null,
    documentTheme: "light",
    documentThemeSetting: "auto",
    documentColorScheme: "classic",
    documentFormat: "centered",
    documentDoctype: "document",
    savedSource: "",
    editSessionDiagram: null,
    expandedDiagramIndex: null,
    diagramZooms: new Map(),
    diagramCameraOffsets: new Map(),
    diagramViewportHeights: new Map()
  };
}

export function clearEditorState(state: EditorState): void {
  state.selectedNode = null;
  state.selectedEdge = null;
  state.selectedSequenceElement = null;
  state.editingNode = null;
  state.editingEdge = null;
}

export function isDiagramEditing(state: EditorState, diagramIndex: number): boolean {
  return state.editingDiagramIndex === diagramIndex;
}

export type {
  ConnectionDrag,
  EdgeSelection,
  InlineEdgeEditor,
  InlineNodeEditor,
  NodeSelection
};
