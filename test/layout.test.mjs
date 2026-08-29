import { assert, core, fs, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;

const {
  flattenFlowchartNodes,
  parseDiagram,
  serializeDiagram,
  lintDocument
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

function layoutSource(lines) {
  return flowchartSource(["canvas: auto", ...lines]);
}

function chain(direction, sourceAnchor, targetAnchor) {
  return layoutSource([
    `layout: ${direction}`,
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "  - id: c",
    "    label: C",
    "    shape: rounded-rectangle",
    "edges:",
    "  - source: a",
    "    target: b",
    `    sourceAnchor: ${sourceAnchor}`,
    `    targetAnchor: ${targetAnchor}`,
    "  - source: b",
    "    target: c",
    `    sourceAnchor: ${sourceAnchor}`,
    `    targetAnchor: ${targetAnchor}`
  ]);
}

function positionsOf(diagram) {
  const entries = {};
  for (const { node } of flattenFlowchartNodes(diagram)) {
    entries[node.id] = { x: node.position.x, y: node.position.y };
  }
  return entries;
}

test("with no layout key a node without a position is an error rather than a silent stack at the origin", () => {
  assert.throws(
    () => parseDiagram(layoutSource([
      "nodes:",
      "  - id: a",
      "    label: A",
      "    shape: rounded-rectangle",
      "edges:"
    ])),
    /Node "a" requires a position, or a "layout" on the diagram to place it/
  );
});

test("with no layout key an edge still has to say which anchors it joins", () => {
  const withoutAnchors = [
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 0 }",
    "edges:",
    "  - source: a",
    "    target: b"
  ];

  assert.throws(() => parseDiagram(layoutSource(withoutAnchors)), /requires a sourceAnchor/);
  assert.throws(
    () => parseDiagram(layoutSource([...withoutAnchors, "    sourceAnchor: right"])),
    /requires a targetAnchor/
  );
});

test("a position that is not a coordinate pair is rejected instead of falling back to the origin", () => {
  assert.throws(
    () => parseDiagram(layoutSource([
      "layout: right",
      "nodes:",
      "  - id: a",
      "    label: A",
      "    shape: rounded-rectangle",
      "    position: { x: 10 }",
      "edges:"
    ])),
    /Node "a" position requires finite x and y coordinates/
  );
});

test("layout places a whole unpositioned graph in stages along the declared direction", () => {
  const right = positionsOf(parseDiagram(chain("right", "right", "left")));

  assert.ok(right.a.x < right.b.x && right.b.x < right.c.x, "stages advance along the flow axis");
  assert.equal(right.a.y, right.b.y, "a single-node stage stays on one line");
  assert.equal(right.b.y, right.c.y);
});

test("every layout direction runs the flow the way it says", () => {
  const right = positionsOf(parseDiagram(chain("right", "right", "left")));
  const left = positionsOf(parseDiagram(chain("left", "left", "right")));
  const down = positionsOf(parseDiagram(chain("down", "bottom", "top")));
  const up = positionsOf(parseDiagram(chain("up", "top", "bottom")));

  assert.ok(right.a.x < right.c.x);
  assert.ok(left.a.x > left.c.x);
  assert.ok(down.a.y < down.c.y);
  assert.ok(up.a.y > up.c.y);
});

test("a branch that splits and rejoins puts the branches in one stage and the join in the next", () => {
  const positions = positionsOf(parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "  - id: c",
    "    label: C",
    "    shape: rounded-rectangle",
    "  - id: d",
    "    label: D",
    "    shape: rounded-rectangle",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: a",
    "    target: c",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: b",
    "    target: d",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: c",
    "    target: d",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ])));

  assert.equal(positions.b.x, positions.c.x, "the branches share a stage");
  assert.notEqual(positions.b.y, positions.c.y, "the branches do not share a line");
  assert.ok(positions.a.x < positions.b.x && positions.b.x < positions.d.x, "the join is a stage further on");
});

test("layout is deterministic, so a file looks the same however often it is opened", () => {
  const source = chain("right", "right", "left");

  assert.equal(JSON.stringify(positionsOf(parseDiagram(source))), JSON.stringify(positionsOf(parseDiagram(source))));
});

test("an existing position always wins and is never re-flowed", () => {
  const positions = positionsOf(parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "    position: { x: 500, y: 300 }",
    "    size: { width: 190, height: 80 }",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ])));

  assert.equal(positions.a.x, 500, "the placed node does not move");
  assert.equal(positions.a.y, 300);
  // b's own anchor is left, so its neighbour is to its left and b belongs to a's right,
  // vertically centred on it and one stage gap clear.
  assert.equal(positions.b.x, 500 + 190 + 120);
  assert.equal(positions.b.y, 300);
});

test("an appended node is placed on the side its own anchor faces away from", () => {
  const appended = (ownAnchor, asSource) => positionsOf(parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: hub",
    "    label: Hub",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 400 }",
    "    size: { width: 200, height: 100 }",
    "  - id: extra",
    "    label: Extra",
    "    shape: rounded-rectangle",
    "    size: { width: 200, height: 100 }",
    "edges:",
    ...(asSource
      ? ["  - source: extra", "    target: hub", `    sourceAnchor: ${ownAnchor}`, "    targetAnchor: left"]
      : ["  - source: hub", "    target: extra", "    sourceAnchor: right", `    targetAnchor: ${ownAnchor}`])
  ]))).extra;

  assert.equal(appended("left", false).x, 400 + 200 + 120, "a left anchor puts the node to the neighbour's right");
  assert.equal(appended("right", false).x, 400 - 120 - 200, "a right anchor puts it to the neighbour's left");
  assert.equal(appended("top", false).y, 400 + 100 + 120, "a top anchor puts it below");
  assert.equal(appended("bottom", false).y, 400 - 120 - 100, "a bottom anchor puts it above");
  assert.equal(appended("left", true).x, 400 + 200 + 120, "the rule reads the node's own end of the edge");
});

test("an appended node with several neighbours clears them all and sits between them", () => {
  const positions = positionsOf(parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: top",
    "    label: Top",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 200, height: 100 }",
    "  - id: bottom",
    "    label: Bottom",
    "    shape: rounded-rectangle",
    "    position: { x: 300, y: 400 }",
    "    size: { width: 200, height: 100 }",
    "  - id: join",
    "    label: Join",
    "    shape: rounded-rectangle",
    "    size: { width: 200, height: 100 }",
    "edges:",
    "  - source: top",
    "    target: join",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: bottom",
    "    target: join",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ])));

  assert.equal(positions.join.x, 300 + 200 + 120, "it clears the furthest neighbour along the flow");
  assert.ok(positions.join.y > 0 && positions.join.y < 400, "it sits between them across the flow");
});

test("a node with no connectors at all falls back to a free slot that clears what is placed", () => {
  const positions = positionsOf(parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 40, y: 40 }",
    "    size: { width: 190, height: 80 }",
    "  - id: legend",
    "    label: Legend",
    "    shape: text",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ])));
  const overlaps = positions.legend.x < 40 + 190 && positions.legend.x + 190 > 40 &&
    positions.legend.y < 40 + 80 && positions.legend.y + 80 > 40;

  assert.ok(!overlaps, "a standalone node does not land on top of a placed one");
});

test("a cycle does not stop layout, and an anchor-contradicting edge is a hint rather than an error", () => {
  const cyclic = positionsOf(parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: b",
    "    target: a",
    "    sourceAnchor: bottom",
    "    targetAnchor: bottom"
  ])));

  assert.ok(cyclic.a.x < cyclic.b.x, "the cycle is broken and the chain still reads left to right");
});

test("containers lay out inside their parent and a sized parent keeps its size", () => {
  const diagram = parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: platform",
    "    label: Platform",
    "    shape: rounded-rectangle",
    "    children:",
    "      - id: api",
    "        label: API",
    "        shape: rounded-rectangle",
    "      - id: worker",
    "        label: Worker",
    "        shape: rounded-rectangle",
    "  - id: fixed",
    "    label: Fixed",
    "    shape: rounded-rectangle",
    "    size: { width: 400, height: 400 }",
    "    children:",
    "      - id: inner",
    "        label: Inner",
    "        shape: rounded-rectangle",
    "edges:",
    "  - source: api",
    "    target: worker",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ]));
  const [platform, fixed] = diagram.nodes;

  assert.ok(platform.children[0].position.x < platform.children[1].position.x, "children lay out in the flow direction");
  assert.ok(platform.size.width >= 190 * 2 + 120, "an unsized container grows to hold its children");
  assert.equal(fixed.size.width, 400, "a sized container keeps the width it was given");
  assert.equal(fixed.size.height, 400, "a sized container keeps the height it was given");
});

test("the layout key is kept after baking, so a later appended node is still placed", () => {
  const diagram = parseDiagram(chain("right", "right", "left"));
  const serialized = serializeDiagram(diagram);

  assert.match(serialized, /^layout: right$/m);
  assert.equal((serialized.match(/position:/g) || []).length, 3, "positions are baked into the source");
  assert.equal(serializeDiagram(parseDiagram(serialized)), serialized, "a baked diagram is stable");
});

test("layout gaps can be widened without breaking the short form", () => {
  const wide = positionsOf(parseDiagram(layoutSource([
    "layout: { direction: right, stageGap: 300, siblingGap: 200 }",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "    size: { width: 190, height: 80 }",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ])));

  assert.equal(wide.b.x - wide.a.x, 190 + 300);
});

test("an unsupported layout is an error rather than a silent no-op", () => {
  const withLayout = (value) => layoutSource([`layout: ${value}`, "nodes:", "edges:"]);

  assert.throws(() => parseDiagram(withLayout("sideways")), /Unsupported layout direction: sideways/);
  assert.throws(() => parseDiagram(withLayout("{ direction: right, stageGap: wide }")), /Layout stageGap must be a number/);
  assert.throws(() => parseDiagram(withLayout("{ direction: right, spacing: 10 }")), /Unsupported layout field: spacing/);
});

test("a laid-out diagram lints clean", () => {
  const result = lintDocument(["# Document", "", "```diagram", chain("right", "right", "left"), "```"].join("\n"));

  assert.equal(result.errorCount, 0);
  assert.equal(result.warningCount, 0);
});

