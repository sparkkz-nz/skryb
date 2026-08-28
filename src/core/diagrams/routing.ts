// Obstacle-aware orthogonal edge routing.
//
// The default router draws the tidiest route between two anchors and knows nothing about the nodes
// in between, so an edge can run straight through an unrelated node - very visible when nodes were
// placed by an agent that cannot see the result.
//
// This only engages when the default route is actually blocked. A clear route is returned exactly
// as the default router drew it, so every existing diagram is unchanged and the tidy case stays
// tidy. When a detour is needed, routes are searched over a grid of candidate coordinates with a
// cost that charges for turns as well as distance, so the result prefers a straight run and adds a
// bend only where one is genuinely needed.
import type { Position } from "./schema";

export interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function segmentIntersectsRectangle(
  start: Position,
  end: Position,
  rectangle: Obstacle
): boolean {
  const minimumX = Math.min(start.x, end.x);
  const maximumX = Math.max(start.x, end.x);
  const minimumY = Math.min(start.y, end.y);
  const maximumY = Math.max(start.y, end.y);
  if (maximumX <= rectangle.x || minimumX >= rectangle.x + rectangle.width ||
    maximumY <= rectangle.y || minimumY >= rectangle.y + rectangle.height) {
    return false;
  }

  // Axis-aligned segments are already resolved by the overlap test above; only a sloped segment can
  // straddle the box without entering it, which the corner-side test below settles.
  if (start.x === end.x || start.y === end.y) {
    return true;
  }

  const side = (point: Position) => (end.x - start.x) * (point.y - start.y) - (end.y - start.y) * (point.x - start.x);
  const corners = [
    { x: rectangle.x, y: rectangle.y },
    { x: rectangle.x + rectangle.width, y: rectangle.y },
    { x: rectangle.x + rectangle.width, y: rectangle.y + rectangle.height },
    { x: rectangle.x, y: rectangle.y + rectangle.height }
  ].map(side);
  return corners.some((value) => value > 0) && corners.some((value) => value < 0);
}

export function routeIsBlocked(points: Position[], obstacles: Obstacle[]): boolean {
  return points.slice(1).some((point, index) =>
    obstacles.some((obstacle) => segmentIntersectsRectangle(points[index], point, obstacle)));
}

const defaultClearance = 20;
const turnCost = 220;

function unique(values: number[]): number[] {
  return [...new Set(values.map((value) => Math.round(value * 100) / 100))].sort((first, second) => first - second);
}

type Direction = 0 | 1 | 2 | 3;

const directionSteps: Array<{ x: number; y: number }> = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 }
];

function getDirection(step: Position): Direction {
  if (step.x > 0) {
    return 0;
  }
  if (step.x < 0) {
    return 1;
  }
  return step.y > 0 ? 2 : 3;
}

/**
 * Searches for an orthogonal route from source to target that clears every obstacle, leaving along
 * the source anchor and arriving along the target anchor. Returns null when no clear route exists,
 * so the caller can keep the default route rather than draw something worse.
 */
export function findClearRoute(
  source: Position,
  target: Position,
  sourceDirection: Position,
  targetDirection: Position,
  obstacles: Obstacle[],
  lead = 24,
  clearance = defaultClearance
): Position[] | null {
  // Stepping clear of each anchor first is what keeps the edge leaving its node squarely, and it
  // gives the search two fixed points it must pass through.
  const sourceLead = { x: source.x + sourceDirection.x * lead, y: source.y + sourceDirection.y * lead };
  const targetLead = { x: target.x + targetDirection.x * lead, y: target.y + targetDirection.y * lead };

  // Candidate channels are the corridors between and around the obstacles, plus the coordinates the
  // endpoints already sit on so an aligned route stays perfectly straight.
  const xs = unique([
    source.x, target.x, sourceLead.x, targetLead.x,
    ...obstacles.flatMap((obstacle) => [obstacle.x - clearance, obstacle.x + obstacle.width + clearance])
  ]);
  const ys = unique([
    source.y, target.y, sourceLead.y, targetLead.y,
    ...obstacles.flatMap((obstacle) => [obstacle.y - clearance, obstacle.y + obstacle.height + clearance])
  ]);

  const xIndex = new Map(xs.map((value, index) => [value, index]));
  const yIndex = new Map(ys.map((value, index) => [value, index]));
  const at = (point: Position) => {
    const column = xIndex.get(Math.round(point.x * 100) / 100);
    const row = yIndex.get(Math.round(point.y * 100) / 100);
    return column === undefined || row === undefined ? null : { column, row };
  };

  const start = at(sourceLead);
  const goal = at(targetLead);
  if (!start || !goal) {
    return null;
  }

  const isClear = (from: Position, to: Position) =>
    !obstacles.some((obstacle) => segmentIntersectsRectangle(from, to, obstacle));
  if (!isClear(source, sourceLead) || !isClear(target, targetLead)) {
    return null;
  }

  const stateCount = xs.length * ys.length * 4;
  const stateKey = (column: number, row: number, direction: Direction) =>
    (row * xs.length + column) * 4 + direction;
  const best = new Float64Array(stateCount).fill(Number.POSITIVE_INFINITY);
  const cameFrom = new Int32Array(stateCount).fill(-1);
  // The edge must arrive travelling the way the target anchor faces, or it would enter the node
  // from the wrong side.
  const arrivalDirection = getDirection({ x: -targetDirection.x, y: -targetDirection.y });
  const departureDirection = getDirection(sourceDirection);

  const startKey = stateKey(start.column, start.row, departureDirection);
  best[startKey] = 0;
  // A plain sorted frontier is enough here: the grid is only as large as the obstacles make it, and
  // keeping it simple keeps the ordering total and therefore the result deterministic.
  const frontier: Array<{ key: number; cost: number }> = [{ key: startKey, cost: 0 }];
  let goalKey = -1;

  while (frontier.length) {
    frontier.sort((first, second) => first.cost - second.cost || first.key - second.key);
    const current = frontier.shift()!;
    if (current.cost > best[current.key]) {
      continue;
    }
    const direction = (current.key % 4) as Direction;
    const cell = (current.key - direction) / 4;
    const column = cell % xs.length;
    const row = (cell - column) / xs.length;

    if (column === goal.column && row === goal.row && direction === arrivalDirection) {
      goalKey = current.key;
      break;
    }

    const from = { x: xs[column], y: ys[row] };
    for (let next: Direction = 0; next < 4; next = (next + 1) as Direction) {
      const step = directionSteps[next];
      // Reversing on the spot is never useful and would let the search double back on itself.
      if (step.x === -directionSteps[direction].x && step.y === -directionSteps[direction].y) {
        continue;
      }
      const nextColumn = column + step.x;
      const nextRow = row + step.y;
      if (nextColumn < 0 || nextColumn >= xs.length || nextRow < 0 || nextRow >= ys.length) {
        continue;
      }
      const to = { x: xs[nextColumn], y: ys[nextRow] };
      if (!isClear(from, to)) {
        continue;
      }
      // Charging for a turn as well as for distance is what makes the route prefer a straight run
      // and spend a bend only where one is needed.
      const cost = current.cost + Math.hypot(to.x - from.x, to.y - from.y) + (next === direction ? 0 : turnCost);
      const key = stateKey(nextColumn, nextRow, next);
      if (cost < best[key]) {
        best[key] = cost;
        cameFrom[key] = current.key;
        frontier.push({ key, cost });
      }
    }
  }

  if (goalKey === -1) {
    return null;
  }

  const cells: Position[] = [];
  for (let key = goalKey; key !== -1; key = cameFrom[key]) {
    const direction = key % 4;
    const cell = (key - direction) / 4;
    const column = cell % xs.length;
    const row = (cell - column) / xs.length;
    cells.unshift({ x: xs[column], y: ys[row] });
  }

  return dropRedundantPoints([source, ...cells, target]);
}

/** Removes repeated and collinear points, so a route reports only the bends it actually has. */
export function dropRedundantPoints(points: Position[]): Position[] {
  const distinct = points.filter((point, index) =>
    index === 0 || point.x !== points[index - 1].x || point.y !== points[index - 1].y);

  return distinct.filter((point, index) => {
    if (index === 0 || index === distinct.length - 1) {
      return true;
    }
    const previous = distinct[index - 1];
    const next = distinct[index + 1];
    return !((previous.x === point.x && point.x === next.x) || (previous.y === point.y && point.y === next.y));
  });
}

/**
 * The vertex of a clear route that departs furthest from the straight line between the endpoints.
 * A curved or straight edge carries only one waypoint, so this picks the single point that captures
 * the detour, letting those routes reuse the waypoint machinery they already have rather than
 * needing a second, curve-specific router.
 */
export function getDetourWaypoint(route: Position[], source: Position, target: Position): Position | null {
  const spanX = target.x - source.x;
  const spanY = target.y - source.y;
  const span = Math.hypot(spanX, spanY);
  const distanceFromLine = (point: Position) => span
    ? Math.abs(spanX * (point.y - source.y) - spanY * (point.x - source.x)) / span
    : Math.hypot(point.x - source.x, point.y - source.y);

  // Segment midpoints are considered alongside the corners: the detour is usually a run parallel to
  // the direct line, and its middle clears the obstacle from both sides, where its first corner
  // only just clears it and leaves the following segment cutting back across.
  const interior = route.slice(1, -1);
  const candidates = [
    ...interior,
    ...route.slice(1).map((point, index) => ({
      x: (route[index].x + point.x) / 2,
      y: (route[index].y + point.y) / 2
    }))
  ];
  if (!candidates.length) {
    return null;
  }

  const furthest = Math.max(...candidates.map(distanceFromLine));
  if (!furthest) {
    return null;
  }

  // Among equally clear candidates the most central one is chosen, so the detour sits in the middle
  // of the edge rather than bunched against one end.
  const middle = { x: (source.x + target.x) / 2, y: (source.y + target.y) / 2 };
  return candidates
    .filter((point) => distanceFromLine(point) === furthest)
    .reduce((best, point) =>
      Math.hypot(point.x - middle.x, point.y - middle.y) < Math.hypot(best.x - middle.x, best.y - middle.y)
        ? point
        : best);
}
