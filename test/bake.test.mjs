import { assert, core, fs, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;

const {
  flattenFlowchartNodes,
  parseDiagram,
  bakeDocumentSource,
  spliceBakedFences,
  hashSource
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
  return flowchartSource(lines);
}

function anchorsOf(diagram) {
  return diagram.edges.map((edge) => `${edge.sourceAnchor}->${edge.targetAnchor}`).join(" ");
}

function positionsOf(diagram) {
  const entries = {};
  for (const { node } of flattenFlowchartNodes(diagram)) {
    entries[node.id] = { x: node.position.x, y: node.position.y };
  }
  return entries;
}

test("an edge with no anchors is given the pair its final geometry implies", () => {
  const anchors = anchorsOf(parseDiagram(layoutSource([
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
    "    target: b"
  ])));

  assert.equal(anchors, "right->left");
});

test("derived anchors follow where the nodes ended up, not the declared direction", () => {
  const anchors = anchorsOf(parseDiagram(layoutSource([
    "layout: down",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "edges:",
    "  - source: a",
    "    target: b"
  ])));

  assert.equal(anchors, "bottom->top");
});

test("an anchor written down is intent, so only the side left out is derived", () => {
  const diagram = parseDiagram(layoutSource([
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
    "  - source: b",
    "    target: a",
    "    sourceAnchor: bottom"
  ]));

  assert.equal(anchorsOf(diagram), "right->left bottom->right");
});

test("a node appended to a laid-out diagram is placed without moving anything already placed", () => {
  const baked = parseDiagram(layoutSource([
    "layout: right",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "    position: { x: 40, y: 40 }",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "    position: { x: 350, y: 40 }",
    "  - id: c",
    "    label: C",
    "    shape: rounded-rectangle",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: b",
    "    target: c"
  ]));
  const positions = positionsOf(baked);

  assert.deepEqual(positions.a, { x: 40, y: 40 });
  assert.deepEqual(positions.b, { x: 350, y: 40 });
  assert.ok(positions.c.x > positions.b.x, "the appended node lands downstream of its neighbour");
  assert.equal(anchorsOf(baked).split(" ")[1], "right->left");
});

function fence(lines) {
  return ["```diagram", ...lines, "```"].join("\n");
}

const bakeableFence = fence([
  "type: flowchart",
  "layout: right",
  "canvas: auto",
  "nodes:",
  "  - id: a",
  "    label: A",
  "    shape: rounded-rectangle",
  "  - id: b",
  "    label: B",
  "    shape: rounded-rectangle",
  "edges:",
  "  - source: a",
  "    target: b"
]);

test("baking writes the layout engine's positions and anchors into the document source", () => {
  const result = bakeDocumentSource(bakeableFence);

  assert.equal(result.baked, 1);
  assert.match(result.source, /position: \{ x: 40, y: 40 \}/);
  assert.match(result.source, /sourceAnchor: right/);
  assert.match(result.source, /targetAnchor: left/);
});

test("baking is idempotent, so a baked document reparses to the same text", () => {
  const once = bakeDocumentSource(bakeableFence).source;

  assert.equal(bakeDocumentSource(once).source, once);
});

test("a diagram with no layout key is hand-managed, so baking copies it through untouched", () => {
  const source = [
    "# Heading",
    "",
    fence([
      "# why this node sits here",
      "type: flowchart",
      "nodes:",
      "  - id: a",
      "    label: A",
      "    shape: circle",
      "    position: { x: 20, y: 20 }",
      "edges: []"
    ]),
    ""
  ].join("\n");
  const result = bakeDocumentSource(source);

  assert.equal(result.baked, 0);
  assert.equal(result.preserved, 1);
  assert.equal(result.source, source);
});

test("baking leaves frontmatter, prose, and non-diagram fences exactly as they were", () => {
  const source = [
    "---",
    "colourScheme: ice",
    "---",
    "",
    "Some prose with a ```diagram``` mention.",
    "",
    "```js",
    "const layout = \"right\";",
    "```",
    "",
    bakeableFence,
    ""
  ].join("\n");
  const result = bakeDocumentSource(source);
  const [preamble] = result.source.split("```diagram");

  assert.equal(result.baked, 1);
  assert.equal(preamble, source.split("```diagram")[0]);
});

test("baking a block-quoted fence keeps its quoting", () => {
  const source = bakeableFence.split("\n").map((line) => `> ${line}`).join("\n");
  const result = bakeDocumentSource(source);

  assert.equal(result.baked, 1);
  assert.ok(result.source.split("\n").every((line) => line.startsWith("> ")), "every line stays quoted");
  assert.match(result.source, /^> {5}position: \{ x: 40, y: 40 \}$/m);
});

test("baking fails on an invalid diagram rather than quietly skipping it", () => {
  assert.throws(
    () => bakeDocumentSource(fence(["type: flowchart", "layout: right", "nodes:", "  - id: a", "edges:"])),
    /Every node requires an id and a string label/
  );
});

test("baking a CRLF document keeps its line endings, in the fence it rewrites and everywhere else", () => {
  const document = ["Prose.", "", bakeableFence, ""].join("\n").replaceAll("\n", "\r\n");
  const result = bakeDocumentSource(document);

  assert.equal(result.baked, 1);
  assert.doesNotMatch(result.source, /[^\r]\n/, "no bare line feed survives anywhere");
  assert.match(result.source, /Prose\.\r\n/);
  assert.match(result.source, /\r\n {4}position: \{ x: 40, y: 40 \}\r\n/);
});

test("a stray carriage return does not make a whole baked fence CRLF", () => {
  const document = ["Prose.\r", "", bakeableFence, ""].join("\n");
  const result = bakeDocumentSource(document);

  assert.equal(result.baked, 1);
  assert.match(result.source, /^ {4}position: \{ x: 40, y: 40 \}$/m, "generated lines follow the majority");
  assert.match(result.source, /Prose\.\r\n/, "and the odd line out keeps its own ending");
});

test("a document with nothing to bake comes back byte for byte identical", () => {
  const document = ["Prose.", "", "```js", "const x = 1;", "```", ""].join("\r\n");
  const result = bakeDocumentSource(document);

  assert.equal(result.baked, 0);
  assert.equal(result.source, document);
});

test("baking reports the line range of each fence it rewrote, so an encoded copy can be spliced too", () => {
  const document = ["Prose.", "", bakeableFence, ""].join("\n");
  const result = bakeDocumentSource(document);
  const [fence] = result.fences;
  const lines = document.split("\n");

  assert.equal(lines[fence.start - 1], "```diagram", "the range starts just inside the opening fence");
  assert.equal(lines[fence.end], "```", "and ends just before the closing one");
  assert.equal(spliceBakedFences(lines, result.fences).join("\n"), result.source);
});

test("a fence that never closes is left alone rather than half-rewritten", () => {
  const document = [bakeableFence, "", "```diagram", "type: flowchart"].join("\n");
  const result = bakeDocumentSource(document);

  assert.equal(result.baked, 1, "the closed fence before it still bakes");
  assert.match(result.source, /```diagram\ntype: flowchart$/, "the unclosed one is untouched");
});

test("stripping every position and rebaking is how a diagram is laid out again from scratch", () => {
  const baked = bakeDocumentSource(bakeableFence).source;
  const stripped = baked.split("\n").filter((line) => !line.trim().startsWith("position:")).join("\n");

  assert.equal(bakeDocumentSource(stripped).source, baked);
});


test("a layout diagram that is already complete is left exactly as its author wrote it", () => {
  const source = fence([
    "# why these coordinates",
    "type: flowchart",
    "layout: right",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: circle",
    "    position: { x: 0, y: 0 }",
    "  - id: b",
    "    label: B",
    "    shape: circle",
    "    position: { x: 200, y: 0 }",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ]);
  const result = bakeDocumentSource(source);

  assert.equal(result.baked, 0, "there was nothing to fill in, so nothing is rewritten");
  assert.equal(result.source, source, "including the comment and the author's own formatting");
});

test("baking counts only the fences the layout engine actually had to fill", () => {
  const complete = fence([
    "type: flowchart",
    "layout: right",
    "nodes:",
    "  - id: x",
    "    label: X",
    "    shape: circle",
    "    position: { x: 0, y: 0 }",
    "edges: []"
  ]);
  const result = bakeDocumentSource([complete, "", bakeableFence, ""].join("\n"));

  assert.equal(result.baked, 1);
  assert.equal(result.preserved, 1);
});

test("the source hash tells a stale lint report from a current one", () => {
  const source = "# One\n";

  assert.equal(hashSource(source), hashSource("# One\n"));
  assert.notEqual(hashSource(source), hashSource("# Two\n"));
  assert.match(hashSource(source), /^[0-9a-f]{8}$/);
});

