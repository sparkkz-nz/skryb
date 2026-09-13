import { annotationPositions, type AnnotationPosition, type AnnotationRef, type ColourSchemeName, type FlowchartDiagram, type Theme } from "./schema";
import { measureTextWidth } from "./geometry";
import { escapeHtml } from "./parser";
import { FlowchartIndex } from "./hierarchy";
import { buildFlowchartEdgeGeometries, type FlowchartEdgeGeometry } from "./edge-labels";
import { resolveTheme } from "./styles";

export type AnnotationBounds = { x: number; y: number; width: number; height: number };
export type FlowchartAnnotationBounds = {
  bounds: AnnotationBounds;
  target: AnnotationBounds;
  ref: AnnotationRef;
} & ({ kind: "node"; id: string } | { kind: "edge"; index: number });

const annotationColors: Record<ColourSchemeName, [string, string]> = {
  classic: ["#1d4ed8", "#93c5fd"],
  fire: ["#1e40af", "#a5c8ff"],
  ice: ["#0369a1", "#7dd3fc"],
  midnight: ["#1e3a8a", "#a5b4fc"],
  paper: ["#245a81", "#a6c9e5"]
};

export function validateAnnotationRef(ref: unknown, description = "Annotation ref"): asserts ref is AnnotationRef {
  let label = ref;
  if (typeof ref === "object" && ref !== null && !Array.isArray(ref)) {
    const fields = ref as Record<string, unknown>;
    if (Object.keys(fields).some((key) => key !== "label" && key !== "position")) {
      throw new Error(`${description} accepts only label and position fields.`);
    }
    if (fields.position !== undefined && !annotationPositions.includes(fields.position as AnnotationPosition)) {
      throw new Error(`${description} position must be one of: ${annotationPositions.join(", ")}.`);
    }
    label = fields.label;
  }
  if (!(typeof label === "number" && Number.isFinite(label)) &&
    !(typeof label === "string" && label.trim() && !/[\u0000-\u001f\u007f]/.test(label))) {
    throw new Error(`${description} label must be a non-empty single-line string or a finite number.`);
  }
}

export function getAnnotationLabel(ref: AnnotationRef): string {
  return String(typeof ref === "object" ? ref.label : ref);
}

export function getAnnotationPosition(ref: AnnotationRef): AnnotationPosition {
  return typeof ref === "object" ? ref.position ?? "NW" : "NW";
}

export function getAnnotationBadgeSize(ref: AnnotationRef): { width: number; height: number } {
  const label = getAnnotationLabel(ref);
  return {
    width: /^[0-9]{1,2}$/.test(label) ? 24 : Math.max(32, Math.ceil(measureTextWidth(label, 14, true) + 16)),
    height: 24
  };
}

export function getAnnotationBadgeBounds(
  ref: AnnotationRef,
  target: AnnotationBounds,
  outsideOnly = false
): AnnotationBounds {
  const position = getAnnotationPosition(ref);
  const direction = position.toUpperCase();
  const outside = outsideOnly || direction === position;
  const { width, height } = getAnnotationBadgeSize(ref);
  const gap = 4;
  const x = direction.includes("W")
    ? (outside ? target.x - width - gap : target.x + gap)
    : direction.includes("E")
      ? (outside ? target.x + target.width + gap : target.x + target.width - width - gap)
      : target.x + (target.width - width) / 2;
  const y = direction.includes("N")
    ? (outside ? target.y - height - gap : target.y + gap)
    : direction.includes("S")
      ? (outside ? target.y + target.height + gap : target.y + target.height - height - gap)
      : target.y + (target.height - height) / 2;
  return { x, y, width, height };
}

export function getAnnotationColors(colourScheme: ColourSchemeName, theme: Theme): { fill: string; text: string } {
  if (!Object.prototype.hasOwnProperty.call(annotationColors, colourScheme)) {
    throw new Error(`Unsupported annotation colour scheme: ${colourScheme}`);
  }
  const palette = annotationColors[colourScheme];
  return resolveTheme(theme) === "dark" ? { fill: palette[1], text: "#10213b" } : { fill: palette[0], text: "#ffffff" };
}

export function getFlowchartAnnotationBounds(
  diagram: FlowchartDiagram,
  index = new FlowchartIndex(diagram),
  edgeGeometries?: Array<FlowchartEdgeGeometry | null>
): FlowchartAnnotationBounds[] {
  const bounds: FlowchartAnnotationBounds[] = [];
  for (const entry of index.entries) {
    if (entry.node.ref !== undefined) {
      bounds.push({
        kind: "node", id: entry.node.id, ref: entry.node.ref, target: entry.bounds,
        bounds: getAnnotationBadgeBounds(entry.node.ref, entry.bounds)
      });
    }
  }
  if (diagram.edges.some((edge) => edge.ref !== undefined)) {
    const geometries = edgeGeometries ?? buildFlowchartEdgeGeometries(diagram, index);
    diagram.edges.forEach((edge, edgeIndex) => {
      const geometry = geometries[edgeIndex];
      if (edge.ref === undefined || !geometry) {
        return;
      }
      const target = geometry.label?.bounds ?? { ...geometry.path.midpoint, width: 0, height: 0 };
      bounds.push({
        kind: "edge", index: edgeIndex, ref: edge.ref, target,
        bounds: getAnnotationBadgeBounds(edge.ref, target, true)
      });
    });
  }
  return bounds;
}

export function renderAnnotationBadge(
  ref: AnnotationRef,
  bounds: AnnotationBounds,
  colourScheme: ColourSchemeName,
  theme: Theme
): string {
  const label = escapeHtml(getAnnotationLabel(ref));
  const colors = getAnnotationColors(colourScheme, theme);
  const center = { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 };
  return `<g class="docdiagram-annotation-ref" role="img" aria-label="Reference ${label}" pointer-events="none"><title>Reference ${label}</title>` +
    `<rect aria-hidden="true" x="${bounds.x}" y="${bounds.y}" width="${bounds.width}" height="${bounds.height}" rx="${bounds.height / 2}" fill="${colors.fill}" stroke="none"/>` +
    `<text aria-hidden="true" x="${center.x}" y="${center.y}" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="${colors.text}">${label}</text></g>`;
}
