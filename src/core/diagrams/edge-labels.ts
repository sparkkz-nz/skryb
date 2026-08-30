import { FlowchartIndex } from "./hierarchy";
import { buildEdgePath, getNodeGeometry, measureTextWidth, sampleEdgePath, splitTextLines } from "./geometry";
import { segmentIntersectsRectangle, type Obstacle } from "./routing";
import type { FlowchartDiagram, Position } from "./schema";

export const edgeLabelFontSize = 15;
export const edgeLabelLineHeight = 16;
const labelClearance = 6;

export interface EdgeLabelBounds extends Obstacle {}

export interface EdgeLabelPlacement {
  center: Position;
  startY: number;
  lines: string[];
  bounds: EdgeLabelBounds;
  clear: boolean;
  conflicts: EdgeLabelConflict[];
}

export type EdgeLabelConflict =
  | { kind: "canvas" }
  | { kind: "node"; id: string }
  | { kind: "edge-label" | "edge-route"; edgeIndex: number };

export interface FlowchartEdgeGeometry {
  sourceAnchor: Position;
  targetAnchor: Position;
  path: ReturnType<typeof buildEdgePath>;
  label: EdgeLabelPlacement | null;
}

interface Segment {
  start: Position;
  end: Position;
  index: number;
  length: number;
}

function getSegments(path: string): Segment[] {
  const points = sampleEdgePath(path);
  return points.slice(1).map((end, index) => ({
    start: points[index],
    end,
    index,
    length: Math.hypot(end.x - points[index].x, end.y - points[index].y)
  })).filter((segment) => segment.length > 0)
    .sort((first, second) => second.length - first.length || first.index - second.index);
}

function inflate(bounds: EdgeLabelBounds, amount: number): EdgeLabelBounds {
  return {
    x: bounds.x - amount,
    y: bounds.y - amount,
    width: bounds.width + amount * 2,
    height: bounds.height + amount * 2
  };
}

function boundsOverlap(first: EdgeLabelBounds, second: EdgeLabelBounds): boolean {
  return first.x < second.x + second.width && first.x + first.width > second.x &&
    first.y < second.y + second.height && first.y + first.height > second.y;
}

function buildPlacement(lines: string[], center: Position): EdgeLabelPlacement {
  const width = Math.max(0, ...lines.map((line) => measureTextWidth(line, edgeLabelFontSize)));
  const height = lines.length * edgeLabelLineHeight;
  const bounds = { x: center.x - width / 2, y: center.y - height / 2, width, height };
  return {
    center,
    startY: bounds.y + edgeLabelLineHeight * 0.72,
    lines,
    bounds,
    clear: true,
    conflicts: []
  };
}

function candidateCenters(segment: Segment, width: number, height: number): Position[] {
  const midpoint = {
    x: (segment.start.x + segment.end.x) / 2,
    y: (segment.start.y + segment.end.y) / 2
  };
  const dx = segment.end.x - segment.start.x;
  const dy = segment.end.y - segment.start.y;
  let normal = { x: -dy / segment.length, y: dx / segment.length };
  if (normal.y > 0 || (normal.y === 0 && normal.x > 0)) {
    normal = { x: -normal.x, y: -normal.y };
  }
  const offset = Math.abs(normal.x) * width / 2 + Math.abs(normal.y) * height / 2 + labelClearance;
  return [
    { x: midpoint.x + normal.x * offset, y: midpoint.y + normal.y * offset },
    { x: midpoint.x - normal.x * offset, y: midpoint.y - normal.y * offset }
  ];
}

function candidateConflicts(
  placement: EdgeLabelPlacement,
  canvas: EdgeLabelBounds,
  nodeObstacles: Array<{ id: string; bounds: Obstacle }>,
  placedLabels: Array<{ edgeIndex: number; bounds: EdgeLabelBounds }>,
  otherRoutes: Array<{ edgeIndex: number; segments: Segment[] }>
): EdgeLabelConflict[] {
  const padded = inflate(placement.bounds, labelClearance);
  const conflicts: EdgeLabelConflict[] = [];
  if (placement.bounds.x < canvas.x || placement.bounds.y < canvas.y ||
    placement.bounds.x + placement.bounds.width > canvas.x + canvas.width ||
    placement.bounds.y + placement.bounds.height > canvas.y + canvas.height) {
    conflicts.push({ kind: "canvas" });
  }
  for (const obstacle of nodeObstacles) {
    if (boundsOverlap(padded, obstacle.bounds)) {
      conflicts.push({ kind: "node", id: obstacle.id });
    }
  }
  for (const label of placedLabels) {
    if (boundsOverlap(padded, label.bounds)) {
      conflicts.push({ kind: "edge-label", edgeIndex: label.edgeIndex });
    }
  }
  for (const route of otherRoutes) {
    if (route.segments.some((segment) => segmentIntersectsRectangle(segment.start, segment.end, padded))) {
      conflicts.push({ kind: "edge-route", edgeIndex: route.edgeIndex });
    }
  }
  return conflicts;
}

/** Builds the edge paths and selects the label positions consumed by both rendering and lint. */
export function buildFlowchartEdgeGeometries(
  diagram: FlowchartDiagram,
  index = new FlowchartIndex(diagram)
): Array<FlowchartEdgeGeometry | null> {
  const geometries: Array<FlowchartEdgeGeometry | null> = diagram.edges.map((edge) => {
    const source = index.getById(edge.source);
    const target = index.getById(edge.target);
    if (!source || !target) {
      return null;
    }
    const sourceAnchor = getNodeGeometry(source.node, source.bounds.x, source.bounds.y, source.bounds.width, source.bounds.height)
      .anchors[edge.sourceAnchor || "right"];
    const targetAnchor = getNodeGeometry(target.node, target.bounds.x, target.bounds.y, target.bounds.width, target.bounds.height)
      .anchors[edge.targetAnchor || "left"];
    const obstacles = index.entries.filter(({ node }) =>
      !index.isRelated(node, source.node) && !index.isRelated(node, target.node));
    const path = buildEdgePath(
      sourceAnchor,
      targetAnchor,
      edge.sourceAnchor || "right",
      edge.targetAnchor || "left",
      edge.route || "orthogonal",
      edge.waypoint,
      edge.waypoint ? undefined : obstacles.map((entry) => entry.bounds)
    );
    return { sourceAnchor, targetAnchor, path, label: null } satisfies FlowchartEdgeGeometry;
  });
  const routeSegments = geometries.map((geometry, edgeIndex) => geometry
    ? { edgeIndex, segments: getSegments(geometry.path.path) }
    : null).filter((entry): entry is { edgeIndex: number; segments: Segment[] } => Boolean(entry));
  const placedLabels: Array<{ edgeIndex: number; bounds: EdgeLabelBounds }> = [];
  const canvas = {
    x: 0,
    y: 0,
    width: Number(diagram.canvas.width) || 1000,
    height: Number(diagram.canvas.height) || 560
  };

  geometries.forEach((geometry, edgeIndex) => {
    const edge = diagram.edges[edgeIndex];
    if (!geometry || !edge.label) {
      return;
    }
    const lines = splitTextLines(edge.label);
    const dimensions = buildPlacement(lines, { x: 0, y: 0 }).bounds;
    const segments = routeSegments.find((entry) => entry.edgeIndex === edgeIndex)?.segments || [];
    const candidates = segments.flatMap((segment) => candidateCenters(segment, dimensions.width, dimensions.height)
      .map((center) => ({ center, hostSegmentIndex: segment.index })));
    if (!candidates.length) {
      candidates.push({
        center: { x: geometry.path.midpoint.x, y: geometry.path.midpoint.y - dimensions.height / 2 - labelClearance },
        hostSegmentIndex: -1
      });
    }
    const nodeObstacles = index.entries.map(({ node, bounds }) => ({ id: node.id, bounds }));
    const otherRoutes = routeSegments.filter((entry) => entry.edgeIndex !== edgeIndex);
    let selected: EdgeLabelPlacement | null = null;
    for (const { center, hostSegmentIndex } of candidates) {
      const candidate = buildPlacement(lines, center);
      // Adjacent samples describe the same local curve as the host segment; real polyline bends do not.
      const adjacentSampleCount = (edge.route || "orthogonal") === "curved" ? 1 : 0;
      const nonHostSegments = segments.filter((segment) =>
        hostSegmentIndex < 0 || Math.abs(segment.index - hostSegmentIndex) > adjacentSampleCount);
      candidate.conflicts = candidateConflicts(
        candidate,
        canvas,
        nodeObstacles,
        placedLabels,
        [...otherRoutes, { edgeIndex, segments: nonHostSegments }]
      );
      candidate.clear = candidate.conflicts.length === 0;
      selected ||= candidate;
      if (candidate.clear) {
        selected = candidate;
        break;
      }
    }
    geometry.label = selected;
    if (selected) {
      placedLabels.push({ edgeIndex, bounds: selected.bounds });
    }
  });

  return geometries;
}
