// Visual-quality rules for authored documents. Schema errors are already reported by
// validateDocumentSource; what an authoring agent cannot see is whether the result *looks* right,
// so these rules describe geometry. They live beside the geometry they describe, in the same
// bundle as the renderer that draws it, so a rule cannot drift from what is actually drawn.
import type { FlowchartDiagram } from "./diagrams/schema";
import { defaultNode } from "./diagrams/schema";
import {
  extractDiagramFences,
  hashSource,
  resolveDocument,
  validateDocumentSource,
  type ExtractedDiagram,
  type SourceRange
} from "./document";
import { parseDiagram } from "./diagrams/parser";
import { FlowchartIndex } from "./diagrams/hierarchy";
import {
  computeNodeTextLayout,
  getNodeGeometry,
  measureTextWidth,
  sampleEdgePath,
  segmentIntersectsRectangle,
  splitTextLines
} from "./diagrams/geometry";
import { buildFlowchartEdgeGeometries } from "./diagrams/edge-labels";

export type LintSeverity = "error" | "warning";

export interface LintNodeSubject {
  kind: "node";
  id: string;
  sourceRange?: SourceRange;
}

export interface LintEdgeSubject {
  kind: "edge";
  index: number;
  source: string;
  target: string;
  sourceRange?: SourceRange;
}

export type LintSubject = LintNodeSubject | LintEdgeSubject;

export interface LintLocation {
  diagramId: string | null;
  diagramIndex: number;
  fenceRange: SourceRange;
  subjects: LintSubject[];
}

export interface LintMessage {
  severity: LintSeverity;
  rule: string;
  message: string;
  diagram?: string;
  location?: LintLocation;
}

export interface LintResult {
  sourceHash: string;
  messages: LintMessage[];
  errorCount: number;
  warningCount: number;
}

type Bounds = { x: number; y: number; width: number; height: number };

function describeDiagram(id: string | null, index: number): string {
  return id || `diagram ${index + 1}`;
}

function locateSubjects(diagram: ExtractedDiagram, subjects: LintSubject[]): LintSubject[] {
  const nodeRanges = new Map<string, SourceRange>();
  const edgeRanges: SourceRange[] = [];
  let section = "";

  diagram.source.split("\n").forEach((line, lineIndex) => {
    const topLevel = line.match(/^([A-Za-z_][\w-]*):/);
    if (topLevel) {
      section = topLevel[1];
    }
    const node = line.match(/^\s*-\s+id:\s*(?:"([^"]+)"|'([^']+)'|([^\s#]+))/);
    const range = diagram.lineRanges[lineIndex];
    if (node && range) {
      nodeRanges.set(node[1] || node[2] || node[3], range);
    }
    if (section === "edges" && /^\s*-\s+[^:]+:/.test(line) && range) {
      edgeRanges.push(range);
    }
  });

  return subjects.map((subject) => subject.kind === "node"
    ? { ...subject, sourceRange: nodeRanges.get(subject.id) }
    : { ...subject, sourceRange: edgeRanges[subject.index] });
}

function boundsOverlap(first: Bounds, second: Bounds): { width: number; height: number } | null {
  const width = Math.min(first.x + first.width, second.x + second.width) - Math.max(first.x, second.x);
  const height = Math.min(first.y + first.height, second.y + second.height) - Math.max(first.y, second.y);
  return width > 0 && height > 0 ? { width, height } : null;
}

function lintNodeOverlaps(
  index: FlowchartIndex,
  report: (rule: string, message: string, severity?: LintSeverity, subjects?: LintSubject[]) => void
): void {
  const entries = index.entries;
  for (let entryIndex = 0; entryIndex < entries.length; entryIndex += 1) {
    for (let other = entryIndex + 1; other < entries.length; other += 1) {
      const first = entries[entryIndex];
      const second = entries[other];
      // A child is meant to sit inside its parent, and siblings of different parents are compared
      // in absolute coordinates, so only unrelated boxes can genuinely collide.
      if (index.isRelated(first.node, second.node)) {
        continue;
      }
      const overlap = boundsOverlap(first.bounds, second.bounds);
      if (overlap) {
        report(
          "node-overlap",
          `Nodes "${first.node.id}" and "${second.node.id}" overlap by ${Math.round(overlap.width)} by ${Math.round(overlap.height)} units.`,
          "warning",
          [{ kind: "node", id: first.node.id }, { kind: "node", id: second.node.id }]
        );
      }
    }
  }
}

function lintNodeLabels(
  index: FlowchartIndex,
  report: (rule: string, message: string, severity?: LintSeverity, subjects?: LintSubject[]) => void
): void {
  for (const { node } of index.entries) {
    const width = Number(node.size?.width) || defaultNode.width;
    const height = Number(node.size?.height) || defaultNode.height;
    const { textBounds } = getNodeGeometry(node, 0, 0, width, height);
    const layout = computeNodeTextLayout(textBounds, node);
    // Text is inset from the shape by 12 units on each side. Spilling into that padding is a
    // tidiness question rather than a defect, so the rule fires only once the text can no longer
    // fit the shape at all, even with its padding given up.
    const padding = 24;

    // The text shape renders its label verbatim, one source line per rendered line, so it is the
    // one shape where a too-wide line is not wrapped for you.
    if (node.shape === "text") {
      const overflowing = splitTextLines(node.label)
        .find((line) => measureTextWidth(line.replace(/^#{1,2}\s+/, ""), /^#{1,2}\s/.test(line) ? 24 : 16) > textBounds.width + padding);
      if (overflowing !== undefined) {
        report(
          "label-overflow",
          `Node "${node.id}" has a line wider than its shape: "${overflowing.trim()}".`,
          "warning",
          [{ kind: "node", id: node.id }]
        );
      }
    }

    const contentHeight = layout.labelLines.length * layout.labelLineHeight +
      (layout.subtitleLines.length ? 6 + layout.subtitleLines.length * layout.subtitleLineHeight : 0);
    if (contentHeight > textBounds.height + padding) {
      report(
        "label-overflow",
        `Node "${node.id}" needs ${Math.ceil(contentHeight)} units of text height but its shape offers ${Math.floor(textBounds.height + padding)}.`,
        "warning",
        [{ kind: "node", id: node.id }]
      );
    }
  }
}

function lintEdges(
  diagram: FlowchartDiagram,
  index: FlowchartIndex,
  report: (rule: string, message: string, severity?: LintSeverity, subjects?: LintSubject[]) => void
): void {
  const edgeSubject = (edgeIndex: number): LintEdgeSubject => ({
    kind: "edge",
    index: edgeIndex,
    source: diagram.edges[edgeIndex].source,
    target: diagram.edges[edgeIndex].target
  });
  const geometries = buildFlowchartEdgeGeometries(diagram, index);
  for (const [edgeIndex, edge] of (diagram.edges || []).entries()) {
    const subject = edgeSubject(edgeIndex);
    const source = index.getById(edge.source);
    const target = index.getById(edge.target);
    // The renderer drops an edge naming an unknown node without a word, so the connector simply
    // vanishes. That is invisible unless you count your arrows, which makes it an error.
    for (const [role, id, entry] of [["source", edge.source, source], ["target", edge.target, target]] as const) {
      if (!entry) {
        report(
          "unknown-edge-endpoint",
          `Edge "${edge.source}" -> "${edge.target}" names a ${role} node "${id}" that does not exist, so it is not drawn.`,
          "error",
          [subject]
        );
      }
    }
    if (!source || !target) {
      continue;
    }

    const obstacles = index.entries.filter(({ node }) =>
      !index.isRelated(node, source.node) && !index.isRelated(node, target.node)
    );
    const geometry = geometries[edgeIndex]!;
    const points = sampleEdgePath(geometry.path.path);

    for (const obstacle of obstacles) {
      const crossed = points.slice(1).some((point, pointIndex) => segmentIntersectsRectangle(points[pointIndex], point, obstacle.bounds));
      if (crossed) {
        report(
          "edge-crosses-node",
          `Edge "${edge.source}" -> "${edge.target}" passes through unrelated node "${obstacle.node.id}".`,
          "warning",
          [subject, { kind: "node", id: obstacle.node.id }]
        );
      }
    }

    if (geometry.label && !geometry.label.clear) {
      const subjects: LintSubject[] = [subject];
      const keys = new Set([`edge:${edgeIndex}`]);
      for (const conflict of geometry.label.conflicts) {
        if (conflict.kind === "canvas") {
          continue;
        }
        const key = conflict.kind === "node" ? `node:${conflict.id}` : `edge:${conflict.edgeIndex}`;
        if (keys.has(key)) {
          continue;
        }
        keys.add(key);
        subjects.push(conflict.kind === "node"
          ? { kind: "node", id: conflict.id }
          : edgeSubject(conflict.edgeIndex));
      }
      report(
        "edge-label-overlap",
        `Edge "${edge.source}" -> "${edge.target}" has no clear position for its label; the deterministic fallback remains visible.`,
        "warning",
        subjects
      );
    }
  }
}

/**
 * Lints a whole Skryb document: schema errors first, then the visual-quality rules an authoring
 * agent cannot check by eye. Warnings are advisory; only errors mean the document is wrong.
 */
export function lintDocument(source: string): LintResult {
  const messages: LintMessage[] = [];
  const sourceHash = hashSource(source);

  try {
    validateDocumentSource(source);
  } catch (error) {
    messages.push({ severity: "error", rule: "schema", message: (error as Error).message });
    return { sourceHash, messages, errorCount: 1, warningCount: 0 };
  }

  const colourScheme = resolveDocument(source).colourScheme;
  extractDiagramFences(source).forEach((extracted) => {
    const diagram = parseDiagram(extracted.source, colourScheme);
    if (diagram.type !== "flowchart") {
      return;
    }

    const name = describeDiagram(extracted.id, extracted.index);
    const report = (
      rule: string,
      message: string,
      severity: LintSeverity = "warning",
      subjects: LintSubject[] = []
    ) => {
      messages.push({
        severity,
        rule,
        message,
        diagram: name,
        location: {
          diagramId: extracted.id,
          diagramIndex: extracted.index,
          fenceRange: extracted.fenceRange,
          subjects: locateSubjects(extracted, subjects)
        }
      });
    };

    const flowchartIndex = new FlowchartIndex(diagram);
    lintEdges(diagram, flowchartIndex, report);
    lintNodeOverlaps(flowchartIndex, report);
    lintNodeLabels(flowchartIndex, report);
  });

  return {
    sourceHash,
    messages,
    errorCount: messages.filter((message) => message.severity === "error").length,
    warningCount: messages.filter((message) => message.severity === "warning").length
  };
}

export function formatLintMessages(result: LintResult): string {
  return result.messages
    .map((message) => [
      message.severity,
      message.diagram ? `[${message.diagram}]` : null,
      message.message,
      `(${message.rule})`
    ].filter(Boolean).join(" "))
    .join("\n");
}
