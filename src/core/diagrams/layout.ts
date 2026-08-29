// Flowchart auto-layout. This is a seeding step, not a layout mode: it runs when a diagram is
// loaded and some node has no position, assigns positions to exactly those nodes, and the result is
// baked into the model immediately. Serialisation always writes the current positions, so there is
// nothing left to do on a second open, layout can never fight a hand edit, and no mode or state has
// to be tracked. In practice it matters exactly once - the first time an agent-authored file is
// opened.
//
// Determinism is load-bearing. A file may be opened many times before it is ever saved, so the same
// source must always produce the same positions; every ordering here is total and derived from
// source order.
import type { FlowchartDiagram, FlowchartEdge, FlowchartNode, Position } from "./schema";
import { defaultNode } from "./schema";
import { flattenFlowchartNodes } from "./hierarchy";
import { getGridSize, snapToGrid } from "./styles";

export const layoutDirections = ["right", "down", "left", "up"] as const;

/**
 * Diagrams the engine actually had to fill something in for. "Needed laying out" is not something a
 * caller can work out from the result - a filled position looks exactly like an authored one - so it
 * is recorded here as the layout runs. Baking uses it to leave a diagram that was already complete
 * exactly as its author wrote it, and opening a document uses it to know whether anything changed.
 */
const filledDiagrams = new WeakSet<FlowchartDiagram>();

export function layoutFilledDiagram(diagram: FlowchartDiagram): boolean {
  return filledDiagrams.has(diagram);
}

export type LayoutDirection = (typeof layoutDirections)[number];

export interface LayoutSettings {
  direction: LayoutDirection;
  stageGap: number;
  siblingGap: number;
}

const defaultGaps = { stageGap: 120, siblingGap: 60 };

type Bounds = { x: number; y: number; width: number; height: number };

function nodeSize(node: FlowchartNode): { width: number; height: number } {
  return {
    width: Number(node.size?.width) || defaultNode.width,
    height: Number(node.size?.height) || defaultNode.height
  };
}

function hasPosition(node: FlowchartNode): boolean {
  return Number.isFinite(node.position?.x) && Number.isFinite(node.position?.y);
}

/** Reads the `layout` key in either its scalar short form or its expanded mapping form. */
export function resolveLayoutSettings(value: unknown): LayoutSettings | null {
  if (value === undefined || value === null) {
    return null;
  }
  if (typeof value === "string") {
    return { direction: value as LayoutDirection, ...defaultGaps };
  }

  const settings = value as { direction?: unknown; stageGap?: unknown; siblingGap?: unknown };
  return {
    direction: settings.direction as LayoutDirection,
    stageGap: settings.stageGap === undefined ? defaultGaps.stageGap : Number(settings.stageGap),
    siblingGap: settings.siblingGap === undefined ? defaultGaps.siblingGap : Number(settings.siblingGap)
  };
}

function isHorizontal(direction: LayoutDirection): boolean {
  return direction === "right" || direction === "left";
}

/** The anchor a node's own edge faces when the flow runs in the layout direction. */
function getForwardAnchors(direction: LayoutDirection): { source: string; target: string } {
  return {
    right: { source: "right", target: "left" },
    left: { source: "left", target: "right" },
    down: { source: "bottom", target: "top" },
    up: { source: "top", target: "bottom" }
  }[direction];
}

/**
 * Assigns each node a stage from the longest path from the sources, which is the layered (Sugiyama)
 * drawing every graph tool converges on. "Stage" describes the result rather than the algorithm.
 */
function assignStages(nodeIds: string[], edges: FlowchartEdge[], direction: LayoutDirection): Map<string, number> {
  const ids = new Set(nodeIds);
  const forward = getForwardAnchors(direction);
  // An edge whose anchors contradict the declared direction is a deliberate back-edge or side
  // branch rather than an error, so it is a hint: it is left out of stage assignment so it cannot
  // stretch the graph. Genuine cycles are broken the same way, by the depth-first walk below.
  const joining = edges.filter((edge) => ids.has(edge.source) && ids.has(edge.target) &&
    edge.source !== edge.target);
  const forwardOnly = joining.filter((edge) =>
    !(edge.sourceAnchor === forward.target && edge.targetAnchor === forward.source));
  // The hint is a tie-breaker, not a veto: if honouring it would leave no edges at all, every
  // connector disagrees with the declared direction and the anchors say nothing useful, so the
  // whole graph is used rather than laying out a set of unrelated nodes.
  const candidates = forwardOnly.length ? forwardOnly : joining;

  const outgoing = new Map<string, string[]>();
  for (const edge of candidates) {
    outgoing.set(edge.source, [...(outgoing.get(edge.source) || []), edge.target]);
  }

  const acyclic: Array<{ source: string; target: string }> = [];
  const state = new Map<string, "visiting" | "done">();
  const visit = (id: string): void => {
    state.set(id, "visiting");
    for (const target of outgoing.get(id) || []) {
      // A target still being visited closes a cycle, so that edge is dropped rather than followed.
      if (state.get(target) === "visiting") {
        continue;
      }
      acyclic.push({ source: id, target });
      if (!state.has(target)) {
        visit(target);
      }
    }
    state.set(id, "done");
  };
  for (const id of nodeIds) {
    if (!state.has(id)) {
      visit(id);
    }
  }

  const incoming = new Map<string, string[]>();
  for (const edge of acyclic) {
    incoming.set(edge.target, [...(incoming.get(edge.target) || []), edge.source]);
  }

  const stages = new Map<string, number>();
  const resolve = (id: string, seen: Set<string>): number => {
    const known = stages.get(id);
    if (known !== undefined) {
      return known;
    }
    if (seen.has(id)) {
      return 0;
    }
    seen.add(id);
    const stage = Math.max(0, ...(incoming.get(id) || []).map((source) => resolve(source, seen) + 1));
    stages.set(id, stage);
    return stage;
  };
  for (const id of nodeIds) {
    resolve(id, new Set());
  }
  return stages;
}

/**
 * Orders nodes within each stage to reduce edge crossings, with a few median-heuristic passes.
 * Most of the visual quality of a layered drawing comes from this step.
 */
function orderStages(
  stageMembers: string[][],
  edges: FlowchartEdge[],
  passes = 4
): void {
  const neighbours = (forward: boolean) => {
    const map = new Map<string, string[]>();
    for (const edge of edges) {
      const [from, to] = forward ? [edge.target, edge.source] : [edge.source, edge.target];
      map.set(from, [...(map.get(from) || []), to]);
    }
    return map;
  };
  const upward = neighbours(true);
  const downward = neighbours(false);

  for (let pass = 0; pass < passes; pass += 1) {
    const goingDown = pass % 2 === 0;
    const order = goingDown
      ? stageMembers.map((_, index) => index)
      : stageMembers.map((_, index) => stageMembers.length - 1 - index);

    for (const stageIndex of order) {
      const reference = goingDown ? stageIndex - 1 : stageIndex + 1;
      const referenceMembers = stageMembers[reference];
      if (!referenceMembers) {
        continue;
      }
      const positions = new Map(referenceMembers.map((id, index) => [id, index]));
      const links = goingDown ? upward : downward;
      const medians = new Map<string, number>();
      for (const id of stageMembers[stageIndex]) {
        const indices = (links.get(id) || [])
          .map((neighbour) => positions.get(neighbour))
          .filter((index): index is number => index !== undefined)
          .sort((first, second) => first - second);
        // A node with no neighbour in the reference stage keeps its place rather than being
        // dragged to one end, so ordering stays stable.
        medians.set(id, indices.length ? indices[(indices.length - 1) >> 1] : Number.NaN);
      }
      const original = new Map(stageMembers[stageIndex].map((id, index) => [id, index]));
      stageMembers[stageIndex] = [...stageMembers[stageIndex]].sort((first, second) => {
        const firstMedian = medians.get(first)!;
        const secondMedian = medians.get(second)!;
        if (Number.isNaN(firstMedian) || Number.isNaN(secondMedian) || firstMedian === secondMedian) {
          return original.get(first)! - original.get(second)!;
        }
        return firstMedian - secondMedian;
      });
    }
  }
}

/** Lays out a whole set of sibling nodes that hold no layout decisions of their own. */
function layoutWholeGraph(
  nodes: FlowchartNode[],
  edges: FlowchartEdge[],
  settings: LayoutSettings,
  origin: Position,
  grid: number
): void {
  const ids = nodes.map((node) => node.id);
  const stages = assignStages(ids, edges, settings.direction);
  const stageCount = Math.max(0, ...[...stages.values()]) + 1;
  const stageMembers: string[][] = Array.from({ length: stageCount }, () => []);
  for (const id of ids) {
    stageMembers[stages.get(id) || 0].push(id);
  }

  const relevantEdges = edges.filter((edge) => stages.has(edge.source) && stages.has(edge.target));
  orderStages(stageMembers, relevantEdges);

  const byId = new Map(nodes.map((node) => [node.id, node]));
  const horizontal = isHorizontal(settings.direction);
  const reversed = settings.direction === "left" || settings.direction === "up";
  const stageExtents = stageMembers.map((members) => Math.max(0, ...members.map((id) => {
    const size = nodeSize(byId.get(id)!);
    return horizontal ? size.width : size.height;
  })));
  const crossExtents = stageMembers.map((members) => members.reduce((total, id, index) => {
    const size = nodeSize(byId.get(id)!);
    return total + (horizontal ? size.height : size.width) + (index ? settings.siblingGap : 0);
  }, 0));
  const widestCross = Math.max(0, ...crossExtents);

  let along = 0;
  const alongOffsets = stageExtents.map((extent) => {
    const offset = along;
    along += extent + settings.stageGap;
    return offset;
  });
  const totalAlong = Math.max(0, along - settings.stageGap);

  stageMembers.forEach((members, stageIndex) => {
    // Each stage is centred across the flow, so a narrow stage sits against the middle of a wide
    // one rather than hugging one edge.
    let across = (widestCross - crossExtents[stageIndex]) / 2;
    for (const id of members) {
      const node = byId.get(id)!;
      const size = nodeSize(node);
      const alongOffset = reversed
        ? totalAlong - alongOffsets[stageIndex] - (horizontal ? size.width : size.height)
        : alongOffsets[stageIndex];
      node.position = {
        x: snapToGrid(origin.x + (horizontal ? alongOffset : across), grid),
        y: snapToGrid(origin.y + (horizontal ? across : alongOffset), grid)
      };
      across += (horizontal ? size.height : size.width) + settings.siblingGap;
    }
  });
}

function rectanglesOverlap(first: Bounds, second: Bounds, clearance = 0): boolean {
  return first.x - clearance < second.x + second.width &&
    first.x + first.width + clearance > second.x &&
    first.y - clearance < second.y + second.height &&
    first.y + first.height + clearance > second.y;
}

/**
 * Places one appended node from the connectors that join it to nodes already placed. An edge that
 * carries anchors already declares a spatial relationship: a connector entering this node's `left`
 * means the neighbour is to its left, so the node belongs to that neighbour's right. Where the
 * author has written that intent down, placement only has to honour it; where the anchors were left
 * out, the diagram's own direction is the stated intent instead, so the node lands downstream.
 */
function placeFromConnectors(
  node: FlowchartNode,
  siblings: FlowchartNode[],
  edges: FlowchartEdge[],
  settings: LayoutSettings,
  grid: number
): { position: Position; acrossAxis: "x" | "y" } | null {
  const placed = new Map(siblings.filter(hasPosition).map((sibling) => [sibling.id, sibling]));
  const size = nodeSize(node);
  const forward = getForwardAnchors(settings.direction);
  const candidates: Array<{ position: Position; axis: "x" | "y"; sign: number }> = [];

  for (const edge of edges) {
    const isSource = edge.source === node.id;
    const isTarget = edge.target === node.id;
    if (isSource === isTarget) {
      continue;
    }
    const neighbour = placed.get(isSource ? edge.target : edge.source);
    if (!neighbour) {
      continue;
    }

    const ownAnchor = (isSource ? edge.sourceAnchor : edge.targetAnchor) ||
      (isSource ? forward.source : forward.target);
    const neighbourBounds = { ...(neighbour.position as Position), ...nodeSize(neighbour) };
    // The node sits on the side its own anchor faces away from, vertically or horizontally centred
    // on the neighbour and one stage gap clear of it.
    if (ownAnchor === "left") {
      candidates.push({
        position: {
          x: neighbourBounds.x + neighbourBounds.width + settings.stageGap,
          y: neighbourBounds.y + (neighbourBounds.height - size.height) / 2
        },
        axis: "x",
        sign: 1
      });
    } else if (ownAnchor === "right") {
      candidates.push({
        position: {
          x: neighbourBounds.x - settings.stageGap - size.width,
          y: neighbourBounds.y + (neighbourBounds.height - size.height) / 2
        },
        axis: "x",
        sign: -1
      });
    } else if (ownAnchor === "top") {
      candidates.push({
        position: {
          x: neighbourBounds.x + (neighbourBounds.width - size.width) / 2,
          y: neighbourBounds.y + neighbourBounds.height + settings.stageGap
        },
        axis: "y",
        sign: 1
      });
    } else if (ownAnchor === "bottom") {
      candidates.push({
        position: {
          x: neighbourBounds.x + (neighbourBounds.width - size.width) / 2,
          y: neighbourBounds.y - settings.stageGap - size.height
        },
        axis: "y",
        sign: -1
      });
    }
  }

  if (!candidates.length) {
    return null;
  }

  // Several candidates are reconciled by taking the extreme along the flow axis, so the node clears
  // every neighbour, and the mean across it, so it sits between them.
  const alongAxis = candidates[0].axis;
  const along = candidates.filter((candidate) => candidate.axis === alongAxis);
  const sign = along[0].sign;
  const alongValue = sign > 0
    ? Math.max(...along.map((candidate) => candidate.position[alongAxis]))
    : Math.min(...along.map((candidate) => candidate.position[alongAxis]));
  const acrossAxis = alongAxis === "x" ? "y" : "x";
  const acrossValue = candidates.reduce((total, candidate) => total + candidate.position[acrossAxis], 0) / candidates.length;

  return {
    position: {
      x: snapToGrid(alongAxis === "x" ? alongValue : acrossValue, grid),
      y: snapToGrid(alongAxis === "y" ? alongValue : acrossValue, grid)
    },
    acrossAxis
  };
}

/** Slides a candidate along the cross axis until it clears everything already placed. */
function resolveOverlap(
  candidate: Position,
  size: { width: number; height: number },
  occupied: Bounds[],
  acrossAxis: "x" | "y",
  grid: number,
  siblingGap: number
): Position {
  const step = (grid || 20);
  const clearance = Math.min(siblingGap, 20);
  for (let attempt = 0; attempt <= 200; attempt += 1) {
    for (const offset of attempt ? [attempt * step, -attempt * step] : [0]) {
      const position = { ...candidate, [acrossAxis]: candidate[acrossAxis] + offset } as Position;
      const bounds = { ...position, ...size };
      if (!occupied.some((entry) => rectanglesOverlap(bounds, entry, clearance))) {
        return { x: snapToGrid(position.x, grid), y: snapToGrid(position.y, grid) };
      }
    }
  }
  return candidate;
}

/** Finds a free, grid-snapped slot for a node with nothing to infer a position from. */
function findFreeSlot(
  size: { width: number; height: number },
  occupied: Bounds[],
  origin: Position,
  grid: number,
  siblingGap: number
): Position {
  const step = grid || 20;
  const clearance = Math.min(siblingGap, 20);
  const start = {
    x: snapToGrid(origin.x, grid),
    y: snapToGrid(origin.y, grid)
  };
  const below = Math.max(origin.y, ...occupied.map((entry) => entry.y + entry.height));
  for (let offset = 0; offset <= 2000; offset += step) {
    for (const candidate of offset
      ? [{ x: start.x + offset, y: start.y }, { x: start.x, y: start.y + offset }]
      : [start]) {
      if (!occupied.some((entry) => rectanglesOverlap({ ...candidate, ...size }, entry, clearance))) {
        return candidate;
      }
    }
  }
  return { x: start.x, y: snapToGrid(below + step, grid) };
}

function layoutSiblings(
  nodes: FlowchartNode[],
  edges: FlowchartEdge[],
  settings: LayoutSettings,
  origin: Position,
  grid: number
): boolean {
  const unpositioned = nodes.filter((node) => !hasPosition(node));
  if (!unpositioned.length) {
    return false;
  }

  if (unpositioned.length === nodes.length) {
    layoutWholeGraph(nodes, edges, settings, origin, grid);
    return true;
  }

  // An existing position always wins, so a diagram someone has appended to is never re-flowed;
  // only the new nodes are placed, and they are placed from what their connectors already say.
  for (const node of unpositioned) {
    const size = nodeSize(node);
    const occupied = nodes.filter((sibling) => sibling !== node && hasPosition(sibling))
      .map((sibling) => ({ ...(sibling.position as Position), ...nodeSize(sibling) }));
    const fromConnectors = placeFromConnectors(node, nodes, edges, settings, grid);
    // A node with no connectors at all - a standalone text or legend node - is the only case with
    // nothing to infer from, so it falls back to a free-slot search.
    node.position = fromConnectors
      ? resolveOverlap(fromConnectors.position, size, occupied, fromConnectors.acrossAxis, grid, settings.siblingGap)
      : findFreeSlot(size, occupied, origin, grid, settings.siblingGap);
  }
  return true;
}

/**
 * The pair of anchors a connector between these two boxes would be drawn with, or null when they
 * overlap and neither faces the other. The comparison is of the clear space between the boxes on
 * each axis rather than of their centre offsets, which is what makes it agree with the eye: two
 * wide nodes stacked with a small horizontal offset face bottom to top, not right to left.
 */
function facingAnchors(source: Bounds, target: Bounds): { source: string; target: string } | null {
  const dx = (target.x + target.width / 2) - (source.x + source.width / 2);
  const dy = (target.y + target.height / 2) - (source.y + source.height / 2);
  const reachX = Math.abs(dx) - (source.width + target.width) / 2;
  const reachY = Math.abs(dy) - (source.height + target.height) / 2;

  if (reachX <= 0 && reachY <= 0) {
    return null;
  }
  if (reachX >= reachY) {
    return dx >= 0 ? { source: "right", target: "left" } : { source: "left", target: "right" };
  }
  return dy >= 0 ? { source: "bottom", target: "top" } : { source: "top", target: "bottom" };
}

/**
 * Gives an anchor to every side that was left without one, reading the positions the nodes actually
 * ended up at. It runs after placement for that reason, and it fills each side independently: an
 * anchor that was written down is intent - the deliberate back-edge that steers stage assignment is
 * expressed exactly this way - so it is never overwritten. A pair with no geometry to read, a self
 * connector or a node that overlaps its neighbour, falls back to the diagram's own direction.
 */
function deriveEdgeAnchors(diagram: FlowchartDiagram, settings: LayoutSettings): boolean {
  const edges = diagram.edges || [];
  if (!edges.some((edge) => !edge.sourceAnchor || !edge.targetAnchor)) {
    return false;
  }

  const forward = getForwardAnchors(settings.direction);
  const bounds = new Map(flattenFlowchartNodes(diagram)
    .map((entry) => [entry.node.id, { ...entry.position, ...nodeSize(entry.node) }] as const));

  for (const edge of edges) {
    if (edge.sourceAnchor && edge.targetAnchor) {
      continue;
    }
    const source = bounds.get(edge.source);
    const target = bounds.get(edge.target);
    const facing = source && target && edge.source !== edge.target ? facingAnchors(source, target) : null;
    edge.sourceAnchor = edge.sourceAnchor || facing?.source || forward.source;
    edge.targetAnchor = edge.targetAnchor || facing?.target || forward.target;
  }
  return true;
}

/**
 * Places every node that has no position, leaving every node that has one exactly where it is, and
 * gives every connector left without anchors the ones its final geometry implies.
 * Containers lay out recursively inside their parent's box.
 */
export function applyFlowchartLayout(diagram: FlowchartDiagram): FlowchartDiagram {
  const settings = resolveLayoutSettings(diagram.layout);
  if (!settings) {
    return diagram;
  }

  const grid = getGridSize(diagram);
  const padding = 40;
  let filled = false;
  const visit = (nodes: FlowchartNode[], origin: Position): void => {
    for (const node of nodes) {
      if (node.children?.length) {
        visit(node.children, { x: padding, y: padding });
        // A container laid out from nothing needs a box big enough to hold the result. An author
        // who gave the container a size has already decided, so that size is left alone.
        if (!node.size) {
          const extent = node.children.reduce((bounds, child) => {
            const size = nodeSize(child);
            return {
              width: Math.max(bounds.width, (Number(child.position?.x) || 0) + size.width),
              height: Math.max(bounds.height, (Number(child.position?.y) || 0) + size.height)
            };
          }, { width: 0, height: 0 });
          node.size = {
            width: snapToGrid(extent.width + padding, grid),
            height: snapToGrid(extent.height + padding, grid)
          };
        }
      }
    }
    // Siblings are placed after their own children, so a container already knows how big it is by
    // the time its position and its neighbours' positions are worked out.
    filled = layoutSiblings(nodes, diagram.edges || [], settings, origin, grid) || filled;
  };

  visit(diagram.nodes || [], { x: padding, y: padding });
  filled = deriveEdgeAnchors(diagram, settings) || filled;
  if (filled) {
    filledDiagrams.add(diagram);
  }
  return diagram;
}
