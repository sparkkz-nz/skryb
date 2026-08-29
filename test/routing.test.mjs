import { assert, core, fs, path, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;

const {
  renderDiagram,
  lintDocument,
  sampleEdgePath,
  segmentIntersectsRectangle,
  findClearRoute,
  routeIsBlocked,
  getDetourWaypoint,
  dropRedundantPoints,
  buildEdgePath
} = core;

function readTemplateSource(filePath) {
  const html = fs.readFileSync(filePath, "utf8");
  const template = html.match(/<template id="source"[^>]*>([\s\S]*?)<\/template>/);

  assert.ok(template, "Expected an HTML template with id=\"source\"");
  return template[1];
}

function readDiagramSources(source) {
  return [...source.matchAll(/^```diagram\s*\n([\s\S]*?)^```$/gm)].map((match) => match[1]);
}

function flowchartSource(source) {
  const body = Array.isArray(source) ? source.join("\n") : String(source);
  return `type: flowchart\n${body}`;
}

function sequenceSource(source) {
  const body = Array.isArray(source) ? source.join("\n") : String(source);
  return `type: sequence\n${body}`;
}

function pathClears(path, obstacles) {
  const points = sampleEdgePath(path);
  return !obstacles.some((obstacle) =>
    points.slice(1).some((point, index) => segmentIntersectsRectangle(points[index], point, obstacle)));
}

function countBends(path) {
  return (path.match(/L /g) || []).length - 1;
}

test("a clear route is drawn exactly as it was before, so avoidance never disturbs a tidy diagram", () => {
  const source = { x: 200, y: 100 };
  const target = { x: 700, y: 100 };
  const aside = [{ x: 300, y: 400, width: 200, height: 100 }];

  for (const route of ["orthogonal", "straight", "curved"]) {
    assert.equal(
      buildEdgePath(source, target, "right", "left", route, undefined, aside).path,
      buildEdgePath(source, target, "right", "left", route).path,
      `${route} is untouched when nothing is in the way`
    );
  }
});

test("an orthogonal edge routes around a node in its way", () => {
  const obstacles = [{ x: 430, y: 390, width: 200, height: 100 }];
  const blocked = buildEdgePath({ x: 200, y: 440 }, { x: 900, y: 440 }, "right", "left", "orthogonal");
  const routed = buildEdgePath({ x: 200, y: 440 }, { x: 900, y: 440 }, "right", "left", "orthogonal", undefined, obstacles);

  assert.ok(!pathClears(blocked.path, obstacles), "the unrouted edge really does cross the node");
  assert.ok(pathClears(routed.path, obstacles), "the routed edge clears it");
});

test("straight and curved edges detour with an implicit waypoint rather than becoming right-angled", () => {
  const obstacles = [{ x: 430, y: 390, width: 200, height: 100 }];
  const straight = buildEdgePath({ x: 200, y: 440 }, { x: 900, y: 440 }, "right", "left", "straight", undefined, obstacles);
  const curved = buildEdgePath({ x: 200, y: 440 }, { x: 900, y: 440 }, "right", "left", "curved", undefined, obstacles);

  assert.ok(pathClears(straight.path, obstacles));
  assert.ok(pathClears(curved.path, obstacles));
  assert.equal(countBends(straight.path), 1, "a straight detour is a two-segment polyline");
  assert.match(curved.path, /C /, "a curved detour is still drawn as curves");
});

test("routing prefers a straight run and spends a bend only where one is needed", () => {
  const obstacles = [{ x: 400, y: 300, width: 200, height: 100 }];
  const routed = buildEdgePath({ x: 100, y: 350 }, { x: 900, y: 350 }, "right", "left", "orthogonal", undefined, obstacles);

  assert.ok(pathClears(routed.path, obstacles));
  // Out, across, along, back, in: the minimum for stepping around a single box in the way.
  assert.ok(countBends(routed.path) <= 4, `expected a compact detour, got ${countBends(routed.path)} bends`);
});

test("an authored waypoint is honoured rather than second-guessed", () => {
  const markup = renderDiagram(flowchartSource([
    "canvas: auto",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 400 }",
    "    size: { width: 190, height: 80 }",
    "  - id: middle",
    "    label: Middle",
    "    shape: rounded-rectangle",
    "    position: { x: 300, y: 400 }",
    "    size: { width: 190, height: 80 }",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "    position: { x: 600, y: 400 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    waypoint: { x: 395, y: 200 }"
  ]), 0);

  assert.match(markup, /395 200/, "the authored waypoint still drives the route");
});

test("an edge to or from a container is not blocked by the container it belongs to", () => {
  const source = flowchartSource([
    "canvas: auto",
    "nodes:",
    "  - id: platform",
    "    label: Platform",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 400, height: 300 }",
    "    children:",
    "      - id: api",
    "        label: API",
    "        shape: rounded-rectangle",
    "        position: { x: 40, y: 40 }",
    "        size: { width: 190, height: 80 }",
    "  - id: ledger",
    "    label: Ledger",
    "    shape: database",
    "    position: { x: 600, y: 40 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: ledger",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ]);

  assert.equal(lintDocument(["# D", "", "```diagram", source, "```"].join("\n")).warningCount, 0);
});

test("a route that cannot be cleared keeps the path it was authored with", () => {
  // The obstacle sits directly below the source's own anchor, so no smooth curve can leave that
  // anchor and clear it. The edge is left alone rather than being redrawn worse.
  const obstacles = [{ x: 0, y: 60, width: 400, height: 400 }];
  const source = { x: 200, y: 40 };
  const target = { x: 900, y: 500 };

  assert.equal(
    buildEdgePath(source, target, "bottom", "left", "curved", undefined, obstacles).path,
    buildEdgePath(source, target, "bottom", "left", "curved").path
  );
});

test("routing is deterministic, so the same diagram always draws the same edges", () => {
  const obstacles = [
    { x: 430, y: 390, width: 200, height: 100 },
    { x: 300, y: 200, width: 150, height: 90 }
  ];
  const build = () => buildEdgePath({ x: 200, y: 440 }, { x: 900, y: 440 }, "right", "left", "orthogonal", undefined, obstacles).path;

  assert.equal(build(), build());
});

test("dropRedundantPoints reports only the bends a route actually has", () => {
  const collinear = dropRedundantPoints([
    { x: 0, y: 0 },
    { x: 50, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 }
  ]);

  assert.equal(collinear.length, 3, "a point in the middle of a straight run is dropped");
  assert.equal(dropRedundantPoints([{ x: 0, y: 0 }, { x: 0, y: 0 }]).length, 1, "a repeated point is dropped");
});

test("routeIsBlocked and getDetourWaypoint describe the detour a single waypoint has to stand for", () => {
  const obstacles = [{ x: 430, y: 390, width: 200, height: 100 }];
  const source = { x: 200, y: 440 };
  const target = { x: 900, y: 440 };

  assert.ok(routeIsBlocked([source, target], obstacles));
  const cleared = findClearRoute(source, target, { x: 1, y: 0 }, { x: -1, y: 0 }, obstacles, 24);
  const waypoint = getDetourWaypoint(cleared, source, target);

  assert.ok(waypoint.y < 390, "the waypoint sits clear of the obstacle");
  // The middle of the detour run is chosen over its first corner, which would leave the following
  // segment cutting straight back across the obstacle.
  assert.ok(waypoint.x > 430 && waypoint.x < 630, "the waypoint is centred on the detour");
});

