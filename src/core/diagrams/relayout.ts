import { applyBalancedFlowchartLayout } from "./balanced-layout";
import { applyFlowchartLayout } from "./layout";
import type { FlowchartDiagram, FlowchartNode, LayoutOptions, RelayoutMode } from "./schema";

const relaidDiagrams = new WeakSet<FlowchartDiagram>();

export function relayoutApplied(diagram: FlowchartDiagram): boolean {
  return relaidDiagrams.has(diagram);
}

function visitNodes(nodes: FlowchartNode[], visit: (node: FlowchartNode) => void): void {
  for (const node of nodes) {
    visit(node);
    visitNodes(node.children || [], visit);
  }
}

/** Replaces generated geometry according to the requested one-shot scope. */
export function applyOneShotRelayout(diagram: FlowchartDiagram, mode: RelayoutMode): FlowchartDiagram {
  if (!diagram.layout) {
    throw new Error("Relayout requires a layout direction on the diagram.");
  }

  visitNodes(diagram.nodes, (node) => {
    if (mode !== "unpinned" || !node.pinned) {
      delete node.position;
    }
  });
  for (const edge of diagram.edges) {
    delete edge.sourceAnchor;
    delete edge.targetAnchor;
    delete edge.route;
    delete edge.waypoint;
  }

  applyFlowchartLayout(diagram);
  if (mode === "autowrap") {
    const originalLayout = diagram.layout;
    const balanced = applyBalancedFlowchartLayout(diagram);
    if (balanced && typeof originalLayout === "object") {
      diagram.layout = {
        ...originalLayout,
        direction: typeof diagram.layout === "string" ? diagram.layout : diagram.layout.direction
      } satisfies LayoutOptions;
    }
  }

  delete diagram.relayout;
  relaidDiagrams.add(diagram);
  return diagram;
}
