import type { FlowchartNode, NodeStyle, Position } from "./schema";
import { escapeHtml } from "./parser";
import { type Obstacle, dropRedundantPoints, findClearRoute, getDetourWaypoint, routeIsBlocked, segmentIntersectsRectangle } from "./routing";

export { segmentIntersectsRectangle };
export type { Obstacle };

type TextBounds = { x: number; y: number; width: number; height: number };

export function splitTextLines(value: string | null | undefined): string[] {
  return String(value ?? "").replace(/\r\n/g, "\n").split("\n");
}

// Approximate advance widths as a fraction of the font size, for the runtime's own sans-serif
// stack. Measuring properly needs a canvas or a laid-out DOM, neither of which is available when
// the SVG string is built, so wrapping uses this table instead. It is calibrated so that typical
// technical English comes out near the documented ~8.4px per character at the 16px label size.
const narrowCharacters = "iljI|!.,;:'`()[]{}/\\";
const semiNarrowCharacters = "tfr";
const wideCharacters = "mwMW";

function getCharacterWidthRatio(character: string): number {
  if (character === " ") {
    return 0.26;
  }
  if (narrowCharacters.includes(character)) {
    return 0.28;
  }
  if (semiNarrowCharacters.includes(character)) {
    return 0.33;
  }
  if (wideCharacters.includes(character)) {
    return 0.85;
  }
  if (character >= "0" && character <= "9") {
    return 0.56;
  }
  if (character >= "A" && character <= "Z") {
    return 0.66;
  }
  return 0.55;
}

export function measureTextWidth(text: string, fontSize: number, bold = false): number {
  let ratio = 0;
  for (const character of String(text ?? "")) {
    ratio += getCharacterWidthRatio(character);
  }
  return ratio * fontSize * (bold ? 1.03 : 1);
}

// Wraps on word boundaries inside the width the author already declared, so a long label no longer
// silently overflows its shape. Widths stay uniform: nothing here resizes a node to fit its text.
// A single word wider than the line is left whole rather than broken mid-token.
export function wrapTextLines(lines: string[], maxWidth: number, fontSize: number, bold = false): string[] {
  if (!(maxWidth > 0)) {
    return lines;
  }

  return lines.flatMap((line) => {
    if (measureTextWidth(line, fontSize, bold) <= maxWidth) {
      return [line];
    }

    const wrapped: string[] = [];
    let current = "";
    for (const word of line.split(/(?<=\s)/)) {
      const candidate = current + word;
      if (current && measureTextWidth(candidate.trimEnd(), fontSize, bold) > maxWidth) {
        wrapped.push(current.trimEnd());
        current = word.trimStart();
      } else {
        current = candidate;
      }
    }
    wrapped.push(current.trimEnd());
    return wrapped.filter((entry, index) => entry || !index);
  });
}

export function renderTextBlock(
  centerX: number,
  startY: number,
  lines: string[],
  lineHeight: number,
  className: string,
  fill: string,
  textAnchor: "start" | "middle" | "end" = "middle"
): string {
  if (!lines.length) {
    return "";
  }

  const tspans = lines.map((line, index) => {
    const positionAttribute = index === 0 ? "" : ` dy="${lineHeight}"`;
    return `<tspan x="${centerX}"${positionAttribute}>${escapeHtml(line) || " "}</tspan>`;
  }).join("");

  return `<text x="${centerX}" y="${startY}" text-anchor="${textAnchor}" class="${className}" fill="${escapeHtml(fill)}">${tspans}</text>`;
}

export function getNodeGeometry(
  node: { shape: string },
  x: number,
  y: number,
  nodeWidth: number,
  nodeHeight: number
): { bodyMarkup: string; textBounds: TextBounds; anchors: Record<string, Position> } {
  const shape = node.shape;
  const centerX = x + nodeWidth / 2;
  const centerY = y + nodeHeight / 2;
  const textBounds = { x: x + 12, y: y + 12, width: nodeWidth - 24, height: nodeHeight - 24 };
  const anchors: Record<string, Position> = {
    top: { x: centerX, y },
    right: { x: x + nodeWidth, y: centerY },
    bottom: { x: centerX, y: y + nodeHeight },
    left: { x, y: centerY }
  };
  let bodyMarkup: string;

  if (shape === "circle") {
    const diameter = Math.min(nodeWidth, nodeHeight);
    const circleX = centerX - diameter / 2;
    const circleY = centerY - diameter / 2;
    const radius = diameter / 2;
    textBounds.x = circleX + radius * 0.3;
    textBounds.y = circleY + radius * 0.3;
    textBounds.width = radius * 1.4;
    textBounds.height = radius * 1.4;
    anchors.top.y = circleY;
    anchors.right.x = circleX + diameter;
    anchors.bottom.y = circleY + diameter;
    anchors.left.x = circleX;
    bodyMarkup = `<circle class="docdiagram-node-body" cx="${centerX}" cy="${centerY}" r="${radius}"/>`;
  } else if (shape === "oval") {
    textBounds.x += nodeWidth * 0.1;
    textBounds.width -= nodeWidth * 0.2;
    bodyMarkup = `<ellipse class="docdiagram-node-body" cx="${centerX}" cy="${centerY}" rx="${nodeWidth / 2}" ry="${nodeHeight / 2}"/>`;
  } else if (shape === "database") {
    const cap = Math.min(nodeHeight * 0.22, 18);
    textBounds.y += cap / 2;
    textBounds.height -= cap;
    bodyMarkup = `<path class="docdiagram-node-body" d="M ${x} ${y + cap} C ${x} ${y - cap / 3} ${x + nodeWidth} ${y - cap / 3} ${x + nodeWidth} ${y + cap} V ${y + nodeHeight - cap} C ${x + nodeWidth} ${y + nodeHeight + cap / 3} ${x} ${y + nodeHeight + cap / 3} ${x} ${y + nodeHeight - cap} Z"/><path class="docdiagram-node-detail" d="M ${x} ${y + cap} C ${x} ${y + cap * 2.3} ${x + nodeWidth} ${y + cap * 2.3} ${x + nodeWidth} ${y + cap}" fill="none"/>`;
  } else if (shape === "diamond") {
    textBounds.x += nodeWidth * 0.25;
    textBounds.y += nodeHeight * 0.25;
    textBounds.width -= nodeWidth * 0.5;
    textBounds.height -= nodeHeight * 0.5;
    anchors.top = { x: centerX, y };
    anchors.right = { x: x + nodeWidth, y: centerY };
    anchors.bottom = { x: centerX, y: y + nodeHeight };
    anchors.left = { x, y: centerY };
    bodyMarkup = `<polygon class="docdiagram-node-body" points="${centerX},${y} ${x + nodeWidth},${centerY} ${centerX},${y + nodeHeight} ${x},${centerY}"/>`;
  } else if (shape === "rhombus") {
    const slant = Math.min(nodeWidth * 0.2, nodeHeight * 0.6);
    textBounds.x += slant;
    textBounds.width -= slant * 2;
    anchors.left.x = x + slant / 2;
    anchors.right.x = x + nodeWidth - slant / 2;
    bodyMarkup = `<polygon class="docdiagram-node-body" points="${x + slant},${y} ${x + nodeWidth},${y} ${x + nodeWidth - slant},${y + nodeHeight} ${x},${y + nodeHeight}"/>`;
  } else if (shape === "flattened-hexagon") {
    const clip = Math.min(nodeWidth * 0.18, nodeHeight * 0.7);
    textBounds.x += clip;
    textBounds.width -= clip * 2;
    bodyMarkup = `<polygon class="docdiagram-node-body" points="${x + clip},${y} ${x + nodeWidth - clip},${y} ${x + nodeWidth},${centerY} ${x + nodeWidth - clip},${y + nodeHeight} ${x + clip},${y + nodeHeight} ${x},${centerY}"/>`;
  } else if (shape === "chevron") {
    const point = Math.min(nodeWidth * 0.16, nodeHeight * 0.45);
    textBounds.x += point * 1.175;
    textBounds.width -= point * 1.35;
    anchors.left.x = x + point;
    bodyMarkup = `<polygon class="docdiagram-node-body" points="${x},${y} ${x + nodeWidth - point},${y} ${x + nodeWidth},${centerY} ${x + nodeWidth - point},${y + nodeHeight} ${x},${y + nodeHeight} ${x + point},${centerY}"/>`;
  } else if (shape === "right-chevron") {
    const point = Math.min(nodeWidth * 0.16, nodeHeight * 0.45);
    textBounds.width -= point;
    bodyMarkup = `<polygon class="docdiagram-node-body" points="${x},${y} ${x + nodeWidth - point},${y} ${x + nodeWidth},${centerY} ${x + nodeWidth - point},${y + nodeHeight} ${x},${y + nodeHeight}"/>`;
  } else if (shape === "document") {
    const fold = Math.max(12, Math.min(26, Math.min(nodeWidth, nodeHeight) * 0.18));
    textBounds.width -= fold * 0.45;
    textBounds.y += 2;
    textBounds.height -= 2;
    bodyMarkup = `<path class="docdiagram-node-body" d="M ${x} ${y} H ${x + nodeWidth - fold} L ${x + nodeWidth} ${y + fold} V ${y + nodeHeight} H ${x} Z M ${x + nodeWidth - fold} ${y} V ${y + fold} H ${x + nodeWidth}"/>`;
  } else if (shape === "text") {
    bodyMarkup = `<rect class="docdiagram-node-body" x="${x}" y="${y}" width="${nodeWidth}" height="${nodeHeight}"/>`;
  } else {
    bodyMarkup = `<rect class="docdiagram-node-body" x="${x}" y="${y}" width="${nodeWidth}" height="${nodeHeight}" rx="12"/>`;
  }

  return { bodyMarkup, textBounds, anchors };
}

export function computeNodeTextLayout(
  textBounds: TextBounds | number,
  node: FlowchartNode | number,
  legacyWidth?: number,
  legacyHeight?: number,
  legacyNode?: FlowchartNode
): {
  centerX: number;
  textAnchor: "start" | "middle" | "end";
  labelLines: string[];
  subtitleLines: string[];
  labelLineHeight: number;
  subtitleLineHeight: number;
  labelStartY: number;
  subtitleStartY: number;
} {
  let resolvedBounds: TextBounds;
  let resolvedNode: FlowchartNode;

  if (typeof textBounds === "number") {
    resolvedBounds = { x: textBounds, y: node as number, width: legacyWidth || 0, height: legacyHeight || 0 };
    resolvedNode = legacyNode as FlowchartNode;
  } else {
    resolvedBounds = textBounds;
    resolvedNode = node as FlowchartNode;
  }

  const labelLineHeight = 20;
  const subtitleLineHeight = 15;
  const labelLines = wrapTextLines(splitTextLines(resolvedNode.label), resolvedBounds.width, 16, true);
  const subtitleLines = resolvedNode.subtitle
    ? wrapTextLines(splitTextLines(resolvedNode.subtitle), resolvedBounds.width, 13)
    : [];
  const subtitleGap = subtitleLines.length ? 6 : 0;
  const labelBlockHeight = labelLines.length * labelLineHeight;
  const subtitleBlockHeight = subtitleLines.length * subtitleLineHeight;
  const totalBlockHeight = labelBlockHeight + subtitleGap + subtitleBlockHeight;
  const textHAlign = resolvedNode.textHAlign || "center";
  const centerX = textHAlign === "left"
    ? resolvedBounds.x
    : textHAlign === "right"
      ? resolvedBounds.x + resolvedBounds.width
      : resolvedBounds.x + resolvedBounds.width / 2;
  const textAnchor = textHAlign === "left" ? "start" : textHAlign === "right" ? "end" : "middle";
  const centerY = resolvedBounds.y + resolvedBounds.height / 2;
  const blockTop = resolvedNode.textVAlign === "top"
    ? resolvedBounds.y
    : centerY - totalBlockHeight / 2;

  return {
    centerX,
    textAnchor,
    labelLines,
    subtitleLines,
    labelLineHeight,
    subtitleLineHeight,
    labelStartY: blockTop + labelLineHeight * 0.72,
    subtitleStartY: blockTop + labelBlockHeight + subtitleGap + subtitleLineHeight * 0.72
  };
}

export function renderNodeBody(geometry: { bodyMarkup: string }, style: NodeStyle, strokeWidth: number): string {
  return geometry.bodyMarkup.replace(
    "/>",
    ` fill="${escapeHtml(style.fill || "")}" stroke="${escapeHtml(style.stroke || "")}" stroke-width="${strokeWidth}"/>`
  ).replace(
    'class="docdiagram-node-detail"',
    `class="docdiagram-node-detail" stroke="${escapeHtml(style.stroke || "")}" stroke-width="${strokeWidth}"`
  );
}

function getAnchorDirection(anchor: string): Position {
  return {
    top: { x: 0, y: -1 },
    right: { x: 1, y: 0 },
    bottom: { x: 0, y: 1 },
    left: { x: -1, y: 0 }
  }[anchor as "top" | "right" | "bottom" | "left"]!;
}

function formatPathPoint(point: Position): string {
  return `${point.x} ${point.y}`;
}

function getPolylineMidpoint(points: Position[]): Position {
  const segments = points.slice(1).map((point, index) => {
    const previous = points[index];
    return {
      start: previous,
      end: point,
      length: Math.hypot(point.x - previous.x, point.y - previous.y)
    };
  });
  const totalLength = segments.reduce((total, segment) => total + segment.length, 0);
  let remaining = totalLength / 2;

  for (const segment of segments) {
    if (remaining <= segment.length || segment === segments[segments.length - 1]) {
      const ratio = segment.length ? remaining / segment.length : 0;
      return {
        x: segment.start.x + (segment.end.x - segment.start.x) * ratio,
        y: segment.start.y + (segment.end.y - segment.start.y) * ratio
      };
    }
    remaining -= segment.length;
  }

  return points[0];
}

function getCurveControlDistance(from: Position, to: Position): number {
  return Math.min(Math.max(Math.abs(to.x - from.x), Math.abs(to.y - from.y), 80) / 2, 140);
}

// Orthogonal routing works on one axis at a time: "along" is the axis an anchor
// points down, "cross" is the other. Describing both orientations through these
// pair of accessors keeps a single routing implementation for horizontal and
// vertical anchors instead of two mirrored copies that can drift apart.
interface RouteAxis {
  along: (point: Position) => number;
  cross: (point: Position) => number;
  point: (along: number, cross: number) => Position;
}

const horizontalRouteAxis: RouteAxis = {
  along: (point) => point.x,
  cross: (point) => point.y,
  point: (along, cross) => ({ x: along, y: cross })
};

const verticalRouteAxis: RouteAxis = {
  along: (point) => point.y,
  cross: (point) => point.x,
  point: (along, cross) => ({ x: cross, y: along })
};

// How far an edge steps clear of an anchor before it turns. Scaled to the span
// so long edges bend gently, with a floor so short ones still leave the node.
const minimumAnchorLead = 24;

/**
 * Route between anchors that point down different axes, such as a right anchor
 * feeding a top one. A single corner is enough when the target already sits in
 * the direction the source anchor points and the source sits on the side the
 * target anchor faces. Otherwise the edge steps clear of each anchor first and
 * crosses between those leads, which keeps every turn a right angle.
 */
function buildPerpendicularRoute(
  source: Position,
  target: Position,
  sourceDirection: Position,
  targetDirection: Position,
  axis: RouteAxis,
  lead: number
): Position[] {
  const sourceAlong = axis.along(source);
  const sourceCross = axis.cross(source);
  const targetAlong = axis.along(target);
  const targetCross = axis.cross(target);
  const sourceStep = axis.along(sourceDirection);
  const targetStep = axis.cross(targetDirection);

  if (Math.sign(targetAlong - sourceAlong) === sourceStep &&
    Math.sign(sourceCross - targetCross) === targetStep) {
    return [source, axis.point(targetAlong, sourceCross), target];
  }

  // Where a lead can sit between the two endpoints, it goes at the midpoint,
  // which keeps the bend compact and well clear of both. Where it cannot -
  // because the endpoint is behind the anchor - stepping a lead past the anchor
  // is already clear of the other end, so no extra separation is needed. Either
  // way the segment between the leads keeps a real length, and it is a
  // zero-length or hairline segment there that draws the edge back over itself
  // as a spur sticking out of a node.
  const alongLead = Math.sign(targetAlong - sourceAlong) === sourceStep
    ? (sourceAlong + targetAlong) / 2
    : sourceAlong + sourceStep * lead;
  const crossLead = Math.sign(sourceCross - targetCross) === targetStep
    ? (sourceCross + targetCross) / 2
    : targetCross + targetStep * lead;

  return [
    source,
    axis.point(alongLead, sourceCross),
    axis.point(alongLead, crossLead),
    axis.point(targetAlong, crossLead),
    target
  ];
}

/**
 * Route between anchors that point down the same axis. Anchors facing each other
 * take the familiar Z bend at the midpoint, and anchors pointing the same way
 * take a C bend clear of both. When neither applies - anchors facing away, or a
 * C bend that would collapse because both endpoints share a cross coordinate -
 * the edge steps off both anchors and crosses on a line clear of both nodes.
 */
function buildAlignedRoute(
  source: Position,
  target: Position,
  sourceDirection: Position,
  targetDirection: Position,
  axis: RouteAxis,
  lead: number
): Position[] {
  const sourceAlong = axis.along(source);
  const sourceCross = axis.cross(source);
  const targetAlong = axis.along(target);
  const targetCross = axis.cross(target);
  const sourceStep = axis.along(sourceDirection);
  const targetStep = axis.along(targetDirection);
  const facesTarget = Math.sign(targetAlong - sourceAlong) === sourceStep;

  if (sourceStep === -targetStep && facesTarget) {
    return sourceCross === targetCross
      ? [source, target]
      : [
        source,
        axis.point((sourceAlong + targetAlong) / 2, sourceCross),
        axis.point((sourceAlong + targetAlong) / 2, targetCross),
        target
      ];
  }

  // A C bend is only readable while the two endpoints are far enough apart on
  // the cross axis. Nearly aligned anchors would draw the outward and return
  // prongs almost on top of each other, so those route around instead.
  if (sourceStep === targetStep && Math.abs(sourceCross - targetCross) >= minimumAnchorLead) {
    // The bend only has to clear whichever anchor reaches furthest, so it sits a
    // fixed clearance past it. Scaling that by the span would let the distance
    // between the endpoints on the cross axis push the bend out sideways, which
    // is the one direction it does not need to travel.
    const bend = sourceStep > 0
      ? Math.max(sourceAlong, targetAlong) + minimumAnchorLead
      : Math.min(sourceAlong, targetAlong) - minimumAnchorLead;
    return [source, axis.point(bend, sourceCross), axis.point(bend, targetCross), target];
  }

  // Going around both nodes needs more room than stepping off a single anchor.
  const detourLead = lead * 2;
  const sourceDetour = sourceAlong + sourceStep * detourLead;
  const targetDetour = targetAlong + targetStep * detourLead;
  if (sourceDetour === targetDetour) {
    // Both leads land on the same line, so crossing out to a further line and
    // back would only draw the edge over itself. One bend on that line is the
    // whole route.
    return [source, axis.point(sourceDetour, sourceCross), axis.point(sourceDetour, targetCross), target];
  }

  const crossLine = Math.min(sourceCross, targetCross) - detourLead;
  return [
    source,
    axis.point(sourceDetour, sourceCross),
    axis.point(sourceDetour, crossLine),
    axis.point(targetDetour, crossLine),
    axis.point(targetDetour, targetCross),
    target
  ];
}

function buildOrthogonalRoute(
  source: Position,
  target: Position,
  sourceDirection: Position,
  targetDirection: Position
): Position[] {
  if (source.x === target.x && source.y === target.y) {
    return [source, target];
  }

  const span = Math.max(Math.abs(target.x - source.x), Math.abs(target.y - source.y));
  const lead = Math.max(span / 4, minimumAnchorLead);
  const sourceIsHorizontal = sourceDirection.x !== 0;
  const axis = sourceIsHorizontal ? horizontalRouteAxis : verticalRouteAxis;

  return sourceIsHorizontal === (targetDirection.x !== 0)
    ? buildAlignedRoute(source, target, sourceDirection, targetDirection, axis, lead)
    : buildPerpendicularRoute(source, target, sourceDirection, targetDirection, axis, lead);
}

// Unit vector the curve travels through a waypoint along. Using the overall source-to-target
// direction keeps both curve segments heading the same way through the waypoint, so the join
// stays smooth instead of forming a visible kink.
function getWaypointTangent(source: Position, target: Position, waypoint: Position): Position {
  for (const [from, to] of [[source, target], [source, waypoint], [waypoint, target]]) {
    const length = Math.hypot(to.x - from.x, to.y - from.y);
    if (length > 0) {
      return { x: (to.x - from.x) / length, y: (to.y - from.y) / length };
    }
  }

  return { x: 1, y: 0 };
}

export function buildEdgePath(
  source: Position,
  target: Position,
  sourceAnchor: string,
  targetAnchor: string,
  route = "orthogonal",
  waypoint?: Position,
  obstacles?: Obstacle[]
): { path: string; midpoint: Position; startTangent: Position; endTangent: Position; hitPath: string } {
  const sourceDirection = getAnchorDirection(sourceAnchor);
  const targetDirection = getAnchorDirection(targetAnchor);
  const sourceIsHorizontal = sourceDirection.x !== 0;
  const targetIsHorizontal = targetDirection.x !== 0;
  // A straight or curved edge carries a single waypoint, so when one of those runs through a node
  // the detour is expressed as an implicit waypoint and drawn by the machinery that already exists
  // for an authored one. The curve then bends around the obstacle rather than being replaced by a
  // right-angled route the author did not ask for.
  if (!waypoint && obstacles?.length && route !== "orthogonal" &&
    routeIsBlocked([source, target], obstacles)) {
    // A single waypoint has to stand in for a whole detour, so a route that only just clears an
    // obstacle can still cut back across it on the way in or out. Widening the clearance gives the
    // waypoint more room to work with, which is usually all a stubborn one needs.
    for (const clearance of [20, 60, 120]) {
      const cleared = findClearRoute(
        source,
        target,
        sourceDirection,
        targetDirection,
        obstacles,
        minimumAnchorLead,
        clearance
      );
      const detour = cleared && getDetourWaypoint(cleared, source, target);
      if (!detour) {
        continue;
      }
      // A curve's control points can bow it back into the very node the waypoint was meant to
      // clear, so the result is checked before it is kept. Where nothing clears the obstacle the
      // edge is left exactly as it was authored: converting it to a right-angled route would add
      // bends the author did not ask for, and lint still reports the crossing.
      const candidate = buildEdgePath(source, target, sourceAnchor, targetAnchor, route, detour);
      if (!routeIsBlocked(sampleEdgePath(candidate.path), obstacles)) {
        waypoint = detour;
        break;
      }
    }
  }
  let path: string;
  let midpoint: Position;
  let startTangent: Position;
  let endTangent: Position;

  if (waypoint && route === "straight") {
    path = `M ${formatPathPoint(source)} L ${formatPathPoint(waypoint)} L ${formatPathPoint(target)}`;
    midpoint = waypoint;
    startTangent = { x: waypoint.x - source.x, y: waypoint.y - source.y };
    endTangent = { x: target.x - waypoint.x, y: target.y - waypoint.y };
  } else if (waypoint && route === "curved") {
    const sourceControlDistance = getCurveControlDistance(source, waypoint);
    const targetControlDistance = getCurveControlDistance(waypoint, target);
    const tangent = getWaypointTangent(source, target, waypoint);
    const sourceControl = {
      x: source.x + sourceDirection.x * sourceControlDistance,
      y: source.y + sourceDirection.y * sourceControlDistance
    };
    const waypointEntry = {
      x: waypoint.x - tangent.x * sourceControlDistance,
      y: waypoint.y - tangent.y * sourceControlDistance
    };
    const waypointExit = {
      x: waypoint.x + tangent.x * targetControlDistance,
      y: waypoint.y + tangent.y * targetControlDistance
    };
    const targetControl = {
      x: target.x + targetDirection.x * targetControlDistance,
      y: target.y + targetDirection.y * targetControlDistance
    };
    path = [
      `M ${formatPathPoint(source)}`,
      `C ${formatPathPoint(sourceControl)} ${formatPathPoint(waypointEntry)} ${formatPathPoint(waypoint)}`,
      `C ${formatPathPoint(waypointExit)} ${formatPathPoint(targetControl)} ${formatPathPoint(target)}`
    ].join(" ");
    midpoint = waypoint;
    startTangent = { x: sourceControl.x - source.x, y: sourceControl.y - source.y };
    endTangent = { x: target.x - targetControl.x, y: target.y - targetControl.y };
  } else if (waypoint) {
    const anchorClearance = 24;
    const sourceIsBehind = (waypoint.x - source.x) * sourceDirection.x +
      (waypoint.y - source.y) * sourceDirection.y <= 0;
    const targetIsBehind = (waypoint.x - target.x) * targetDirection.x +
      (waypoint.y - target.y) * targetDirection.y <= 0;
    const sourceLead = {
      x: source.x + sourceDirection.x * anchorClearance,
      y: source.y + sourceDirection.y * anchorClearance
    };
    const targetLead = {
      x: target.x + targetDirection.x * anchorClearance,
      y: target.y + targetDirection.y * anchorClearance
    };
    const sourcePoints = sourceIsBehind
      ? [
        source,
        sourceLead,
        sourceIsHorizontal
          ? { x: sourceLead.x, y: waypoint.y }
          : { x: waypoint.x, y: sourceLead.y },
        waypoint
      ]
      : [
        source,
        sourceIsHorizontal
          ? { x: waypoint.x, y: source.y }
          : { x: source.x, y: waypoint.y },
        waypoint
      ];
    const targetPoints = targetIsBehind
      ? [
        targetIsHorizontal
          ? { x: targetLead.x, y: waypoint.y }
          : { x: waypoint.x, y: targetLead.y },
        targetLead,
        target
      ]
      : [
        targetIsHorizontal
          ? { x: waypoint.x, y: target.y }
          : { x: target.x, y: waypoint.y },
        target
      ];
    const points = [...sourcePoints, ...targetPoints].filter((point, index, entries) =>
      index === 0 || point.x !== entries[index - 1].x || point.y !== entries[index - 1].y
    );
    path = `M ${formatPathPoint(points[0])}${points.slice(1).map((point) => ` L ${formatPathPoint(point)}`).join("")}`;
    midpoint = getPolylineMidpoint(points);
    startTangent = { x: points[1].x - points[0].x, y: points[1].y - points[0].y };
    const finalSegment = points.slice(-2);
    endTangent = {
      x: finalSegment[1].x - finalSegment[0].x,
      y: finalSegment[1].y - finalSegment[0].y
    };
  } else if (route === "straight") {
    path = `M ${formatPathPoint(source)} L ${formatPathPoint(target)}`;
    midpoint = { x: (source.x + target.x) / 2, y: (source.y + target.y) / 2 };
    startTangent = { x: target.x - source.x, y: target.y - source.y };
    endTangent = startTangent;
  } else if (route === "curved") {
    const controlDistance = getCurveControlDistance(source, target);
    const sourceControl = {
      x: source.x + sourceDirection.x * controlDistance,
      y: source.y + sourceDirection.y * controlDistance
    };
    const targetControl = {
      x: target.x + targetDirection.x * controlDistance,
      y: target.y + targetDirection.y * controlDistance
    };
    path = `M ${formatPathPoint(source)} C ${formatPathPoint(sourceControl)} ${formatPathPoint(targetControl)} ${formatPathPoint(target)}`;
    midpoint = {
      x: (source.x + 3 * sourceControl.x + 3 * targetControl.x + target.x) / 8,
      y: (source.y + 3 * sourceControl.y + 3 * targetControl.y + target.y) / 8
    };
    startTangent = { x: sourceControl.x - source.x, y: sourceControl.y - source.y };
    endTangent = { x: target.x - targetControl.x, y: target.y - targetControl.y };
  } else {
    const points = buildOrthogonalRoute(source, target, sourceDirection, targetDirection);

    let distinctPoints = points.filter((point, index) =>
      index === 0 || point.x !== points[index - 1].x || point.y !== points[index - 1].y
    );
    if (distinctPoints.length === 1) {
      distinctPoints = [source, target];
    }
    // Obstacle avoidance only engages on a route that is actually blocked, so a clear route is
    // drawn exactly as it always was and the tidy case stays tidy.
    if (obstacles?.length && routeIsBlocked(distinctPoints, obstacles)) {
      const cleared = findClearRoute(
        source,
        target,
        sourceDirection,
        targetDirection,
        obstacles,
        minimumAnchorLead
      );
      // A route that cannot be cleared keeps its original path rather than being drawn worse.
      if (cleared) {
        distinctPoints = dropRedundantPoints(cleared);
      }
    }
    path = `M ${formatPathPoint(distinctPoints[0])}${distinctPoints.slice(1).map((point) => ` L ${formatPathPoint(point)}`).join("")}`;
    midpoint = getPolylineMidpoint(distinctPoints);
    startTangent = {
      x: distinctPoints[1].x - distinctPoints[0].x,
      y: distinctPoints[1].y - distinctPoints[0].y
    };
    const finalSegment = distinctPoints.slice(-2);
    endTangent = {
      x: finalSegment[1].x - finalSegment[0].x,
      y: finalSegment[1].y - finalSegment[0].y
    };
  }

  return { path, midpoint, startTangent, endTangent, hitPath: path };
}

// The waypoint handle doubles as a state indicator: a circle while the edge merely offers a
// waypoint at its midpoint, and a diamond once a waypoint has actually been anchored. Both
// states are the same element type so dragging can reshape the handle in place.
export function getEdgeWaypointHandleGeometry(
  point: Position,
  anchored: boolean
): { x: number; y: number; size: number; radius: number; transform: string } {
  const size = anchored ? 13 : 15;

  return {
    x: point.x - size / 2,
    y: point.y - size / 2,
    size,
    radius: anchored ? 2 : size / 2,
    transform: anchored ? `rotate(45 ${point.x} ${point.y})` : ""
  };
}

export function renderEdgeWaypointHandle(
  diagramIndex: number,
  edgeIndex: number,
  point: Position,
  anchored: boolean
): string {
  const handle = getEdgeWaypointHandleGeometry(point, anchored);
  const label = anchored ? "Anchored edge waypoint" : "Edge waypoint";

  return `<rect class="docdiagram-edge-waypoint" data-diagram-index="${diagramIndex}" data-edge-index="${edgeIndex}" data-anchored="${anchored}" x="${handle.x}" y="${handle.y}" width="${handle.size}" height="${handle.size}" rx="${handle.radius}"${handle.transform ? ` transform="${handle.transform}"` : ""} aria-label="${label}"/>`;
}

export function getEdgeMarkerDimensions(strokeWidth: number): { size: number; circleRadius: number } {
  const width = Math.max(1, Number(strokeWidth) || 2);
  const size = 6 + width * 2.5;
  const circleRadius = Math.max(size * 0.38, width / 2 + 1);

  return { size, circleRadius };
}

export function buildEdgeMarkerDef(
  markerId: string,
  markerStyle: string,
  endpoint: string,
  strokeColor: string,
  strokeWidth: number
): string {
  const color = escapeHtml(strokeColor);
  const { size, circleRadius } = getEdgeMarkerDimensions(strokeWidth);
  const center = size / 2;

  if (markerStyle === "arrow") {
    const orient = endpoint === "start" ? "auto-start-reverse" : "auto";
    return `<marker id="${markerId}" markerWidth="${size}" markerHeight="${size}" refX="${size}" refY="${center}" markerUnits="userSpaceOnUse" orient="${orient}"><path fill="${color}" stroke="${color}" d="M 0 0 L ${size} ${center} L 0 ${size} z"/></marker>`;
  }

  if (markerStyle === "circle") {
    return `<marker id="${markerId}" markerWidth="${size}" markerHeight="${size}" refX="${center}" refY="${center}" markerUnits="userSpaceOnUse"><circle cx="${center}" cy="${center}" r="${circleRadius}" fill="${color}" stroke="${color}"/></marker>`;
  }

  return "";
}

export interface NodeCalloutPointer {
  points: Position[];
  polygonPoints: string;
  bounds: TextBounds;
}

// A callout pointer is a tapered triangle running from the node centre out to the callout target.
// Anchoring the base at the centre rather than at the outline keeps the construction identical for
// every shape: the part inside the node is either covered by the node's own fill or masked away.
export function buildNodeCalloutPointer(
  bounds: { x: number; y: number; width: number; height: number },
  arrow: Position
): NodeCalloutPointer | null {
  const center = { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 };
  const deltaX = arrow.x - center.x;
  const deltaY = arrow.y - center.y;
  const length = Math.hypot(deltaX, deltaY);

  if (!Number.isFinite(length) || length < 1) {
    return null;
  }

  const baseHalfWidth = Math.max(
    6,
    Math.min(Math.min(bounds.width, bounds.height) * 0.28, length * 0.6, 44)
  );
  const perpendicular = {
    x: -deltaY / length * baseHalfWidth,
    y: deltaX / length * baseHalfWidth
  };
  const points = [
    { x: center.x + perpendicular.x, y: center.y + perpendicular.y },
    { x: arrow.x, y: arrow.y },
    { x: center.x - perpendicular.x, y: center.y - perpendicular.y }
  ];
  const xs = [...points.map((point) => point.x), bounds.x, bounds.x + bounds.width];
  const ys = [...points.map((point) => point.y), bounds.y, bounds.y + bounds.height];
  const minimumX = Math.min(...xs);
  const minimumY = Math.min(...ys);

  return {
    points,
    polygonPoints: points.map((point) => `${point.x},${point.y}`).join(" "),
    bounds: {
      x: minimumX,
      y: minimumY,
      width: Math.max(...xs) - minimumX,
      height: Math.max(...ys) - minimumY
    }
  };
}

function getNodeBodyFillMarkup(bodyMarkup: string, fill: string, className: string): string {
  const detailIndex = bodyMarkup.indexOf('<path class="docdiagram-node-detail"');
  const body = detailIndex === -1 ? bodyMarkup : bodyMarkup.slice(0, detailIndex);
  return body
    .replace('class="docdiagram-node-body"', `class="${className}"`)
    .replace("/>", ` fill="${fill}" stroke="none"/>`);
}

// The mask copy of the node body is what keeps the pointer outline outside the node. It is filled
// only (no stroke) so the outline runs to the border's centreline and meets it without a notch.
export function renderNodeCalloutMaskBody(bodyMarkup: string): string {
  return getNodeBodyFillMarkup(bodyMarkup, "#000000", "docdiagram-node-callout-mask-body");
}

export function getNodeCalloutMaskRegion(
  pointer: NodeCalloutPointer,
  strokeWidth: number
): { x: number; y: number; width: number; height: number } {
  const padding = strokeWidth * 2 + 8;

  return {
    x: pointer.bounds.x - padding,
    y: pointer.bounds.y - padding,
    width: pointer.bounds.width + padding * 2,
    height: pointer.bounds.height + padding * 2
  };
}

// Renders the pointer as a fill layer plus a masked outline layer. The unmasked fill hides the
// node's own border where the pointer joins it, and masking the outline against the node body
// keeps it outside the node, so the two shapes read as a single speech-bubble outline.
export function renderNodeCalloutPointer(
  pointer: NodeCalloutPointer,
  bodyMarkup: string,
  style: NodeStyle,
  strokeWidth: number,
  maskId: string
): string {
  const hasFill = Boolean(style.fill) && style.fill !== "none";
  const hasStroke = Boolean(style.stroke) && style.stroke !== "none";
  const fill = hasFill ? style.fill : hasStroke ? "none" : style.text || "none";
  const region = getNodeCalloutMaskRegion(pointer, strokeWidth);
  const mask = [
    `<mask id="${maskId}" maskUnits="userSpaceOnUse" x="${region.x}" y="${region.y}" width="${region.width}" height="${region.height}">`,
    `<rect class="docdiagram-node-callout-mask-region" x="${region.x}" y="${region.y}" width="${region.width}" height="${region.height}" fill="#ffffff"/>`,
    renderNodeCalloutMaskBody(bodyMarkup),
    `</mask>`
  ].join("");
  // A node without a fill cannot hide the pointer's base, so the fill layer is masked too and the
  // pointer starts at the node outline instead of overlapping the node's own content.
  const fillMask = hasFill ? "" : ` mask="url(#${maskId})"`;

  return [
    mask,
    fill === "none"
      ? ""
      : `<polygon class="docdiagram-node-callout" points="${pointer.polygonPoints}" fill="${escapeHtml(fill || "")}" stroke="none"${fillMask}/>`,
    hasStroke
      ? `<polygon class="docdiagram-node-callout-outline" points="${pointer.polygonPoints}" fill="none" stroke="${escapeHtml(style.stroke || "")}" stroke-width="${strokeWidth}" stroke-linejoin="round" mask="url(#${maskId})"/>`
      : ""
  ].join("");
}

// Flattens a built edge path back into points, sampling curve segments, so callers can reason about
// where an edge actually travels rather than re-deriving each route's geometry.
export function sampleEdgePath(path: string, curveSamples = 12): Position[] {
  const points: Position[] = [];
  const numbers = /-?\d+(?:\.\d+)?/g;
  let cursor: Position = { x: 0, y: 0 };

  for (const [, command, argumentSource] of path.matchAll(/([MLC])\s*([^MLC]*)/g)) {
    const values = (argumentSource.match(numbers) || []).map(Number);
    if (command === "C") {
      const [firstX, firstY, secondX, secondY, endX, endY] = values;
      for (let step = 1; step <= curveSamples; step += 1) {
        const t = step / curveSamples;
        const inverse = 1 - t;
        points.push({
          x: inverse ** 3 * cursor.x + 3 * inverse ** 2 * t * firstX + 3 * inverse * t ** 2 * secondX + t ** 3 * endX,
          y: inverse ** 3 * cursor.y + 3 * inverse ** 2 * t * firstY + 3 * inverse * t ** 2 * secondY + t ** 3 * endY
        });
      }
      cursor = { x: endX, y: endY };
      continue;
    }

    for (let index = 0; index + 1 < values.length; index += 2) {
      cursor = { x: values[index], y: values[index + 1] };
      points.push(cursor);
    }
  }

  return points;
}

