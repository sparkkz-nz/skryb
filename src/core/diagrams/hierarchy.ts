import type { FlowchartDiagram, FlowchartNode, Position } from "./schema";
import { defaultNode } from "./schema";

export interface FlowchartNodeBounds extends Position {
  width: number;
  height: number;
}

export interface FlowchartNodeEntry {
  node: FlowchartNode;
  parent: FlowchartNode | null;
  siblings: FlowchartNode[];
  position: Position;
  bounds: FlowchartNodeBounds;
  depth: number;
}

interface TraversalRange {
  start: number;
  end: number;
}

function nodeSize(node: FlowchartNode): { width: number; height: number } {
  return {
    width: Number(node.size?.width) || defaultNode.width,
    height: Number(node.size?.height) || defaultNode.height
  };
}

/** A stable snapshot of a flowchart hierarchy. Rebuild it after mutating nodes or their geometry. */
export class FlowchartIndex {
  public readonly entries: readonly FlowchartNodeEntry[];
  private readonly entriesById = new Map<string, FlowchartNodeEntry>();
  private readonly entriesByNode = new Map<FlowchartNode, FlowchartNodeEntry>();
  private readonly ranges = new Map<FlowchartNode, TraversalRange>();

  public constructor(diagram: FlowchartDiagram) {
    const entries: FlowchartNodeEntry[] = [];
    const visit = (nodes: FlowchartNode[], parent: FlowchartNode | null, parentPosition: Position, depth: number): void => {
      for (const node of nodes) {
        const position = {
          x: parentPosition.x + (Number(node.position?.x) || 0),
          y: parentPosition.y + (Number(node.position?.y) || 0)
        };
        const entry = { node, parent, siblings: nodes, position, bounds: { ...position, ...nodeSize(node) }, depth };
        const start = entries.length;
        entries.push(entry);
        this.entriesById.set(node.id, this.entriesById.get(node.id) || entry);
        this.entriesByNode.set(node, entry);
        visit(node.children || [], node, position, depth + 1);
        this.ranges.set(node, { start, end: entries.length });
      }
    };

    visit(diagram.nodes, null, { x: 0, y: 0 }, 0);
    this.entries = entries;
  }

  public getById(nodeId: string): FlowchartNodeEntry | null {
    return this.entriesById.get(nodeId) || null;
  }

  public getByNode(node: FlowchartNode): FlowchartNodeEntry | null {
    return this.entriesByNode.get(node) || null;
  }

  public contains(ancestor: FlowchartNode, candidate: FlowchartNode): boolean {
    const ancestorRange = this.ranges.get(ancestor);
    const candidateRange = this.ranges.get(candidate);
    return Boolean(ancestorRange && candidateRange &&
      candidateRange.start > ancestorRange.start && candidateRange.start < ancestorRange.end);
  }

  public isRelated(first: FlowchartNode, second: FlowchartNode): boolean {
    return first === second || this.contains(first, second) || this.contains(second, first);
  }

  public descendants(node: FlowchartNode): readonly FlowchartNodeEntry[] {
    const range = this.ranges.get(node);
    return range ? this.entries.slice(range.start + 1, range.end) : [];
  }
}

export function flattenFlowchartNodes(diagram: FlowchartDiagram): FlowchartNodeEntry[] {
  return [...new FlowchartIndex(diagram).entries];
}

export function findFlowchartNode(diagram: FlowchartDiagram, nodeId: string): FlowchartNodeEntry | null {
  return new FlowchartIndex(diagram).getById(nodeId);
}

export function getFlowchartNodePosition(diagram: FlowchartDiagram, node: FlowchartNode): Position {
  return new FlowchartIndex(diagram).getByNode(node)?.position || { x: 0, y: 0 };
}

export function getFlowchartNodeBounds(diagram: FlowchartDiagram, node: FlowchartNode): FlowchartNodeBounds {
  return new FlowchartIndex(diagram).getByNode(node)?.bounds || { x: 0, y: 0, ...nodeSize(node) };
}

export function reparentFlowchartNode(diagram: FlowchartDiagram, nodeId: string): FlowchartNode | null {
  const index = new FlowchartIndex(diagram);
  const entry = index.getById(nodeId);
  if (!entry) {
    return null;
  }

  const { node, siblings, position } = entry;
  const { width, height } = entry.bounds;
  const center = { x: position.x + width / 2, y: position.y + height / 2 };
  const candidates = index.entries
    .filter((candidate) => candidate.node !== node && !index.contains(node, candidate.node))
    .filter(({ bounds }) => center.x >= bounds.x && center.x <= bounds.x + bounds.width &&
      center.y >= bounds.y && center.y <= bounds.y + bounds.height);
  const parent = candidates.reduce<FlowchartNodeEntry | null>(
    (deepest, candidate) => !deepest || candidate.depth >= deepest.depth ? candidate : deepest,
    null
  );

  const targetSiblings = parent ? (parent.node.children ||= []) : diagram.nodes;
  if (siblings === targetSiblings) {
    return node;
  }

  siblings.splice(siblings.indexOf(node), 1);
  node.position = {
    x: position.x - (parent?.position.x || 0),
    y: position.y - (parent?.position.y || 0)
  };
  targetSiblings.push(node);
  return node;
}
