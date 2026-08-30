import type { EdgeAnchor, FlowchartDiagram, FlowchartNode, LayoutDirection, Position } from "./schema";
import { defaultNode } from "./schema";
import { FlowchartIndex } from "./hierarchy";
import { getGridSize, snapToGrid } from "./styles";

export const balancedLayoutDefaults = {
  horizontalAspectRatio: 4,
  verticalAspectRatio: 5,
  minimumNodeCount: 8,
  minimumDominantPath: 8,
  minimumPathCoverage: 0.75,
  maximumBranchingRatio: 0.2
} as const;

export interface BalancedLayoutAnalysis {
  direction: "horizontal" | "vertical";
  width: number;
  height: number;
  aspectRatio: number;
  dominantPathLength: number;
  nodeCount: number;
  pathCoverage: number;
  branchingNodes: number;
  reason: string;
}

export interface BalancedLayoutResult {
  analysis: BalancedLayoutAnalysis;
  before: { width: number; height: number; aspectRatio: number };
  after: { width: number; height: number; aspectRatio: number };
}

interface GraphAnalysis {
  order: string[];
  dominantPath: string[];
  incoming: Map<string, string[]>;
  outgoing: Map<string, string[]>;
  branchingNodes: number;
}

function nodeSize(node: FlowchartNode): { width: number; height: number } {
  return {
    width: Number(node.size?.width) || defaultNode.width,
    height: Number(node.size?.height) || defaultNode.height
  };
}

function analyseGraph(diagram: FlowchartDiagram): GraphAnalysis | null {
  if (diagram.nodes.some((node) => node.children?.length)) {
    return null;
  }
  const ids = diagram.nodes.map((node) => node.id);
  const sourceOrder = new Map(ids.map((id, index) => [id, index]));
  const idSet = new Set(ids);
  const incoming = new Map(ids.map((id) => [id, [] as string[]]));
  const outgoing = new Map(ids.map((id) => [id, [] as string[]]));
  for (const edge of diagram.edges) {
    if (!idSet.has(edge.source) || !idSet.has(edge.target) || edge.source === edge.target) {
      return null;
    }
    outgoing.get(edge.source)!.push(edge.target);
    incoming.get(edge.target)!.push(edge.source);
  }
  const connected = new Set<string>();
  const pending = ids.length ? [ids[0]] : [];
  while (pending.length) {
    const id = pending.pop()!;
    if (connected.has(id)) {
      continue;
    }
    connected.add(id);
    pending.push(...incoming.get(id)!, ...outgoing.get(id)!);
  }
  if (connected.size !== ids.length) {
    return null;
  }

  const indegree = new Map(ids.map((id) => [id, incoming.get(id)!.length]));
  const ready = ids.filter((id) => indegree.get(id) === 0);
  const order: string[] = [];
  while (ready.length) {
    ready.sort((first, second) => sourceOrder.get(first)! - sourceOrder.get(second)!);
    const id = ready.shift()!;
    order.push(id);
    for (const target of outgoing.get(id)!) {
      const remaining = indegree.get(target)! - 1;
      indegree.set(target, remaining);
      if (remaining === 0) {
        ready.push(target);
      }
    }
  }
  if (order.length !== ids.length) {
    return null;
  }

  const bestPath = new Map<string, string[]>();
  for (const id of order) {
    const candidates = incoming.get(id)!.map((source) => bestPath.get(source) || [source]);
    candidates.sort((first, second) => second.length - first.length || sourceOrder.get(first[0])! - sourceOrder.get(second[0])!);
    bestPath.set(id, [...(candidates[0] || []), id]);
  }
  const dominantPath = [...bestPath.values()].sort((first, second) =>
    second.length - first.length || sourceOrder.get(first[0])! - sourceOrder.get(second[0])!
  )[0] || [];
  const branchingNodes = ids.filter((id) => incoming.get(id)!.length > 1 || outgoing.get(id)!.length > 1).length;
  return { order, dominantPath, incoming, outgoing, branchingNodes };
}

function contentBounds(diagram: FlowchartDiagram): { width: number; height: number } | null {
  const entries = new FlowchartIndex(diagram).entries;
  if (!entries.length) {
    return null;
  }
  const left = Math.min(...entries.map(({ bounds }) => bounds.x));
  const top = Math.min(...entries.map(({ bounds }) => bounds.y));
  const right = Math.max(...entries.map(({ bounds }) => bounds.x + bounds.width));
  const bottom = Math.max(...entries.map(({ bounds }) => bounds.y + bounds.height));
  return { width: right - left, height: bottom - top };
}

function analyseCandidate(diagram: FlowchartDiagram): { analysis: BalancedLayoutAnalysis; graph: GraphAnalysis } | null {
  const nodeCount = diagram.nodes.length;
  if (nodeCount < balancedLayoutDefaults.minimumNodeCount || diagram.nodes.some((node) => !node.position)) {
    return null;
  }
  const graph = analyseGraph(diagram);
  const bounds = contentBounds(diagram);
  if (!graph || !bounds || !bounds.width || !bounds.height) {
    return null;
  }
  const direction = bounds.width >= bounds.height ? "horizontal" : "vertical";
  const aspectRatio = direction === "horizontal" ? bounds.width / bounds.height : bounds.height / bounds.width;
  const threshold = direction === "horizontal"
    ? balancedLayoutDefaults.horizontalAspectRatio
    : balancedLayoutDefaults.verticalAspectRatio;
  const dominantPathLength = graph.dominantPath.length;
  const pathCoverage = dominantPathLength / nodeCount;
  const branchingRatio = graph.branchingNodes / nodeCount;
  if (aspectRatio < threshold || dominantPathLength < balancedLayoutDefaults.minimumDominantPath ||
      pathCoverage < balancedLayoutDefaults.minimumPathCoverage ||
      branchingRatio > balancedLayoutDefaults.maximumBranchingRatio) {
    return null;
  }

  return {
    graph,
    analysis: {
      direction,
      width: Math.round(bounds.width),
      height: Math.round(bounds.height),
      aspectRatio,
      dominantPathLength,
      nodeCount,
      pathCoverage,
      branchingNodes: graph.branchingNodes,
      reason: `the dominant path contains ${dominantPathLength} of ${nodeCount} nodes (${Math.round(pathCoverage * 100)}%) with ${graph.branchingNodes} branching node${graph.branchingNodes === 1 ? "" : "s"}`
    }
  };
}

export function analyseBalancedLayoutCandidate(diagram: FlowchartDiagram): BalancedLayoutAnalysis | null {
  return analyseCandidate(diagram)?.analysis || null;
}

function wrappedOrder(graph: GraphAnalysis): string[] {
  const pathStage = new Map(graph.dominantPath.map((id, index) => [id, index]));
  const stages = new Map<string, number>();
  for (const id of graph.order) {
    const dominantStage = pathStage.get(id);
    const incomingStage = Math.max(-1, ...graph.incoming.get(id)!.map((source) => stages.get(source) ?? -1));
    stages.set(id, dominantStage ?? incomingStage);
  }
  const topologicalIndex = new Map(graph.order.map((id, index) => [id, index]));
  return [...graph.order].sort((first, second) =>
    stages.get(first)! - stages.get(second)! ||
    Number(!pathStage.has(first)) - Number(!pathStage.has(second)) ||
    topologicalIndex.get(first)! - topologicalIndex.get(second)!
  );
}

function facingAnchors(source: Position, target: Position): { source: EdgeAnchor; target: EdgeAnchor } {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0 ? { source: "right", target: "left" } : { source: "left", target: "right" };
  }
  return dy >= 0 ? { source: "bottom", target: "top" } : { source: "top", target: "bottom" };
}

export function applyBalancedFlowchartLayout(diagram: FlowchartDiagram): BalancedLayoutResult | null {
  const candidate = analyseCandidate(diagram);
  if (!candidate) {
    return null;
  }
  const { analysis, graph } = candidate;

  const grid = getGridSize(diagram);
  const settings = typeof diagram.layout === "object" ? diagram.layout : undefined;
  const stageGap = Number(settings?.stageGap) || 120;
  const siblingGap = Number(settings?.siblingGap) || 60;
  const byId = new Map(diagram.nodes.map((node) => [node.id, node]));
  const maxWidth = Math.max(...diagram.nodes.map((node) => nodeSize(node).width));
  const maxHeight = Math.max(...diagram.nodes.map((node) => nodeSize(node).height));
  const horizontal = analysis.direction === "horizontal";
  const alongStep = horizontal ? maxWidth + stageGap : maxHeight + stageGap;
  const crossStep = horizontal ? maxHeight + siblingGap : maxWidth + siblingGap;
  const order = wrappedOrder(graph);
  const perLine = Math.max(3, Math.min(Math.ceil(order.length / 2), Math.ceil(Math.sqrt(order.length * crossStep / alongStep))));
  const padding = snapToGrid(40, grid);

  order.forEach((id, index) => {
    const line = Math.floor(index / perLine);
    const slot = index % perLine;
    const node = byId.get(id)!;
    node.position = horizontal
      ? { x: snapToGrid(padding + slot * alongStep, grid), y: snapToGrid(padding + line * crossStep, grid) }
      : { x: snapToGrid(padding + line * crossStep, grid), y: snapToGrid(padding + slot * alongStep, grid) };
  });

  const outside = horizontal
    ? padding + perLine * alongStep - stageGap + Math.max(stageGap / 2, 40)
    : padding + perLine * alongStep - stageGap + Math.max(stageGap / 2, 40);
  const orderIndex = new Map(order.map((id, index) => [id, index]));
  for (const edge of diagram.edges) {
    const source = byId.get(edge.source);
    const target = byId.get(edge.target);
    if (!source?.position || !target?.position) {
      continue;
    }
    const sourceIndex = orderIndex.get(source.id)!;
    const targetIndex = orderIndex.get(target.id)!;
    const sourceLine = Math.floor(sourceIndex / perLine);
    const targetLine = Math.floor(targetIndex / perLine);
    delete edge.waypoint;
    edge.route = "orthogonal";
    if (sourceLine !== targetLine) {
      if (horizontal) {
        edge.sourceAnchor = "right";
        edge.targetAnchor = "top";
        edge.waypoint = {
          x: snapToGrid(outside, grid),
          y: snapToGrid(target.position.y - siblingGap / 2, grid)
        };
      } else {
        edge.sourceAnchor = "bottom";
        edge.targetAnchor = "left";
        edge.waypoint = {
          x: snapToGrid(target.position.x - siblingGap / 2, grid),
          y: snapToGrid(outside, grid)
        };
      }
    } else {
      const anchors = facingAnchors(source.position, target.position);
      edge.sourceAnchor = anchors.source;
      edge.targetAnchor = anchors.target;
    }
  }

  diagram.layout = (horizontal ? "right" : "down") as LayoutDirection;
  const afterBounds = contentBounds(diagram)!;
  if (!diagram.canvas.auto) {
    diagram.canvas.width = Math.max(Number(diagram.canvas.width) || 0, Math.ceil(afterBounds.width + padding * 2));
    diagram.canvas.height = Math.max(Number(diagram.canvas.height) || 0, Math.ceil(afterBounds.height + padding * 2));
  }
  return {
    analysis,
    before: { width: analysis.width, height: analysis.height, aspectRatio: analysis.aspectRatio },
    after: {
      width: Math.round(afterBounds.width),
      height: Math.round(afterBounds.height),
      aspectRatio: Math.max(afterBounds.width / afterBounds.height, afterBounds.height / afterBounds.width)
    }
  };
}
