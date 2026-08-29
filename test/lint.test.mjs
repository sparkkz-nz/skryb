import { assert, core, fs, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;

const {
  lintDocument,
  formatLintMessages,
  sampleEdgePath,
  segmentIntersectsRectangle
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

function lintSource(diagramLines, frontmatter = []) {
  return [
    ...(frontmatter.length ? ["---", ...frontmatter, "---", ""] : []),
    "# Document",
    "",
    "```diagram",
    "type: flowchart",
    ...diagramLines,
    "```"
  ].join("\n");
}

function lintRules(source) {
  // Values cross the vm realm boundary, so they are copied into this realm before comparison.
  const rules = [];
  for (const message of lintDocument(source).messages) {
    rules.push(message.rule);
  }
  return rules;
}

function linearFlowchartFixture(nodeCount) {
  const lines = ["canvas: auto", "nodes:"];
  for (let index = 0; index < nodeCount; index += 1) {
    lines.push(
      `  - id: node-${index}`,
      `    label: Node ${index}`,
      "    shape: rounded-rectangle",
      `    position: { x: 0, y: ${index * 120} }`,
      "    size: { width: 190, height: 80 }"
    );
  }
  lines.push("edges:");
  for (let index = 1; index < nodeCount; index += 1) {
    lines.push(
      `  - source: node-${index - 1}`,
      `    target: node-${index}`,
      "    sourceAnchor: bottom",
      "    targetAnchor: top"
    );
  }
  return lintSource(lines);
}

function nestedFlowchartFixture(groupCount, childrenPerGroup) {
  const groupHeight = childrenPerGroup * 120 + 40;
  const lines = ["canvas: auto", "nodes:"];
  for (let group = 0; group < groupCount; group += 1) {
    lines.push(
      `  - id: group-${group}`,
      `    label: Group ${group}`,
      "    shape: rounded-rectangle",
      `    position: { x: 0, y: ${group * (groupHeight + 40)} }`,
      `    size: { width: 270, height: ${groupHeight} }`,
      "    children:"
    );
    for (let child = 0; child < childrenPerGroup; child += 1) {
      lines.push(
        `      - id: group-${group}-node-${child}`,
        `        label: Node ${group}-${child}`,
        "        shape: rounded-rectangle",
        `        position: { x: 40, y: ${20 + child * 120} }`,
        "        size: { width: 190, height: 80 }"
      );
    }
  }
  lines.push("edges:");
  for (let group = 0; group < groupCount; group += 1) {
    for (let child = 1; child < childrenPerGroup; child += 1) {
      lines.push(
        `  - source: group-${group}-node-${child - 1}`,
        `    target: group-${group}-node-${child}`,
        "    sourceAnchor: bottom",
        "    targetAnchor: top"
      );
    }
    if (group > 0) {
      lines.push(
        `  - source: group-${group - 1}-node-${childrenPerGroup - 1}`,
        `    target: group-${group}-node-0`,
        "    sourceAnchor: bottom",
        "    targetAnchor: top"
      );
    }
  }
  return lintSource(lines);
}

function assertLintWithinBudget(source, budgetMs) {
  const started = performance.now();
  const result = lintDocument(source);
  const elapsed = performance.now() - started;

  assert.equal(result.errorCount, 0, formatLintMessages(result));
  assert.equal(result.warningCount, 0, formatLintMessages(result));
  assert.deepEqual(JSON.parse(JSON.stringify(result.messages)), []);
  assert.ok(elapsed < budgetMs, `expected lint to finish within ${budgetMs / 1000} seconds, took ${Math.round(elapsed)}ms`);
}

test("500-node flat flowchart lint stays within its CI performance budget", { timeout: 15_000 }, () => {
  assertLintWithinBudget(linearFlowchartFixture(500), 10_000);
});

test("500-node nested flowchart lint stays within its CI performance budget", { timeout: 15_000 }, () => {
  assertLintWithinBudget(nestedFlowchartFixture(50, 9), 10_000);
});

test("flat and nested lint fixtures keep warning content and order deterministic", () => {
  const flat = linearFlowchartFixture(40);
  const nested = lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: group",
    "    label: Group",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 600, height: 600 }",
    "    children:",
    "      - id: first",
    "        label: First",
    "        shape: rounded-rectangle",
    "        position: { x: 40, y: 40 }",
    "      - id: second",
    "        label: Second",
    "        shape: rounded-rectangle",
    "        position: { x: 100, y: 80 }",
    "  - id: outsider",
    "    label: Outsider",
    "    shape: rounded-rectangle",
    "    position: { x: 120, y: 100 }",
    "edges:"
  ]);

  assert.deepEqual(JSON.parse(JSON.stringify(lintDocument(flat).messages)), []);
  const nestedMessages = lintDocument(nested).messages;
  assert.deepEqual(
    JSON.parse(JSON.stringify(nestedMessages.map(({ location: _location, ...message }) => message))),
    [
      {
        severity: "warning",
        rule: "node-overlap",
        message: "Nodes \"group\" and \"outsider\" overlap by 190 by 80 units.",
        diagram: "diagram 1"
      },
      {
        severity: "warning",
        rule: "node-overlap",
        message: "Nodes \"first\" and \"second\" overlap by 130 by 40 units.",
        diagram: "diagram 1"
      },
      {
        severity: "warning",
        rule: "node-overlap",
        message: "Nodes \"first\" and \"outsider\" overlap by 110 by 20 units.",
        diagram: "diagram 1"
      },
      {
        severity: "warning",
        rule: "node-overlap",
        message: "Nodes \"second\" and \"outsider\" overlap by 170 by 60 units.",
        diagram: "diagram 1"
      }
    ]
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(nestedMessages.map((message) => message.location))),
    JSON.parse(JSON.stringify(lintDocument(nested).messages.map((message) => message.location)))
  );
});

test("lint reports an edge naming a node that does not exist as an error, because the renderer drops it silently", () => {
  const result = lintDocument(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: ledger",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ]));

  assert.equal(result.errorCount, 1);
  assert.equal(result.messages[0].rule, "unknown-edge-endpoint");
  assert.match(result.messages[0].message, /"ledger" that does not exist/);
});

test("lint reports overlapping nodes but not a child sitting inside its parent", () => {
  const overlapping = lintRules(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: ledger",
    "    label: Ledger",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 40 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]));
  const nested = lintRules(lintSource([
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
    "        position: { x: 40, y: 60 }",
    "        size: { width: 190, height: 80 }",
    "edges:"
  ]));

  assert.deepEqual(overlapping, ["node-overlap"]);
  assert.deepEqual(nested, []);
});

test("lint reports an edge passing through an unrelated node", () => {
  const crossing = lintRules(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: middle",
    "    label: Middle",
    "    shape: rounded-rectangle",
    "    position: { x: 260, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: ledger",
    "    label: Ledger",
    "    shape: rounded-rectangle",
    "    position: { x: 520, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: ledger",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    route: straight"
  ]));

  assert.deepEqual(crossing, ["edge-crosses-node"]);
});

test("lint accepts an edge that clears every other node", () => {
  const clear = lintRules(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: ledger",
    "    label: Ledger",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: aside",
    "    label: Aside",
    "    shape: rounded-rectangle",
    "    position: { x: 200, y: 400 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: ledger",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    route: straight"
  ]));

  assert.deepEqual(clear, []);
});

test("lint reports a label that cannot fit its shape, and tolerates one that only spills into the padding", () => {
  const tooTall = lintRules(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: |+",
    "      One",
    "      Two",
    "      Three",
    "      Four",
    "      Five",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]));
  const fits = lintRules(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: |+",
    "      One",
    "      Two",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]));

  assert.deepEqual(tooTall, ["label-overflow"]);
  assert.deepEqual(fits, []);
});

test("lint reports a text-shape line wider than its shape, since that shape never wraps", () => {
  const overflowing = lintRules(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: note",
    "    label: This annotation line is far too long to fit inside its declared width",
    "    shape: text",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 200 }",
    "edges:"
  ]));

  assert.deepEqual(overflowing, ["label-overflow"]);
});

test("lint reports a schema failure as an error and stops before the visual rules", () => {
  const result = lintDocument(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: not-a-shape",
    "edges:"
  ]));

  assert.equal(result.errorCount, 1);
  assert.equal(result.warningCount, 0);
  assert.equal(result.messages[0].rule, "schema");
});

test("lint names each diagram by its id and leaves sequence diagrams to the schema rules", () => {
  const result = lintDocument([
    "# Document",
    "",
    "```diagram",
    "type: flowchart",
    "id: payment-flow",
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: missing",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "```",
    "",
    "```diagram",
    "type: sequence",
    "id: handshake",
    "participants:",
    "  - id: shopper",
    "    label: Shopper",
    "  - id: api",
    "    label: API",
    "messages:",
    "  - from: shopper",
    "    to: api",
    "    label: Pay",
    "```"
  ].join("\n"));

  assert.equal(result.messages.length, 1);
  assert.equal(result.messages[0].diagram, "payment-flow");
});

test("lint locations point through CRLF block quotes to a referenced diagram definition", () => {
  const source = [
    "# Document",
    "",
    ":::diagram { id=shared-flow }",
    "",
    "> ```diagram",
    "> id: shared-flow",
    "> type: flowchart",
    "> canvas: auto",
    "> nodes:",
    ">   - id: first",
    ">     label: First",
    ">     shape: rounded-rectangle",
    ">     position: { x: 0, y: 0 }",
    ">   - id: second",
    ">     label: Second",
    ">     shape: rounded-rectangle",
    ">     position: { x: 100, y: 40 }",
    "> edges:",
    "> ```"
  ].join("\r\n");

  const result = lintDocument(source);
  const message = result.messages[0];
  assert.equal(message.rule, "node-overlap");
  assert.equal(message.location.diagramId, "shared-flow");
  assert.equal(message.location.diagramIndex, 0);
  assert.equal(message.location.fenceRange.start.line, 5);
  assert.equal(message.location.fenceRange.end.line, 19);
  assert.deepEqual(message.location.subjects.map((subject) => subject.id), ["first", "second"]);
  assert.equal(source.slice(
    message.location.subjects[0].sourceRange.start.offset,
    message.location.subjects[0].sourceRange.end.offset
  ).trim(), "- id: first");
  assert.equal(result.sourceHash.length, 8);
});

test("lint locations address edges and diagrams without ids by stable indexes", () => {
  const source = lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "edges:",
    "  - source: api",
    "    target: missing",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ]);

  const message = lintDocument(source).messages[0];
  assert.equal(message.location.diagramId, null);
  assert.equal(message.location.diagramIndex, 0);
  assert.equal(message.location.subjects[0].kind, "edge");
  assert.equal(message.location.subjects[0].index, 0);
  assert.equal(source.slice(
    message.location.subjects[0].sourceRange.start.offset,
    message.location.subjects[0].sourceRange.end.offset
  ).trim(), "- source: api");
});

test("lint locations preserve canonical quoted ids and edge indexes regardless of property order", () => {
  const source = lintSource([
    "id: 'quoted-flow'",
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "edges:",
    "  - target: first-missing",
    "    source: api",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: api",
    "    target: second-missing",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ]);

  const messages = lintDocument(source).messages;
  assert.equal(messages.length, 2);
  assert.equal(messages[0].location.diagramId, "quoted-flow");
  assert.deepEqual(messages.map((message) => message.location.subjects[0].index), [0, 1]);
  assert.deepEqual(messages.map((message) => source.slice(
    message.location.subjects[0].sourceRange.start.offset,
    message.location.subjects[0].sourceRange.end.offset
  ).trim()), ["- target: first-missing", "- source: api"]);
});

test("a clean document lints clean", () => {
  const result = lintDocument(lintSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: ledger",
    "    label: Ledger",
    "    shape: database",
    "    position: { x: 400, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: ledger",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ]));

  assert.equal(result.messages.length, 0);
  assert.equal(result.errorCount, 0);
  assert.equal(result.warningCount, 0);
});

test("formatLintMessages names the severity, diagram, and rule for every message", () => {
  const formatted = formatLintMessages({
    messages: [{ severity: "warning", rule: "node-overlap", message: "Nodes overlap.", diagram: "flow" }],
    errorCount: 0,
    warningCount: 1
  });

  assert.equal(formatted, "warning [flow] Nodes overlap. (node-overlap)");
});

test("sampleEdgePath flattens curves so a route can be reasoned about as points", () => {
  const straight = sampleEdgePath("M 0 0 L 100 0");
  const curved = sampleEdgePath("M 0 0 C 50 0 50 100 100 100");

  assert.equal(JSON.stringify(straight), JSON.stringify([{ x: 0, y: 0 }, { x: 100, y: 0 }]));
  assert.equal(curved[0].x, 0);
  assert.equal(JSON.stringify(curved[curved.length - 1]), JSON.stringify({ x: 100, y: 100 }));
  assert.ok(curved.length > 2, "a curve is sampled rather than reduced to its endpoints");
});

test("segmentIntersectsRectangle ignores a segment that only straddles a corner region", () => {
  const box = { x: 100, y: 100, width: 100, height: 100 };

  assert.ok(segmentIntersectsRectangle({ x: 0, y: 150 }, { x: 300, y: 150 }, box), "a crossing segment hits");
  assert.ok(!segmentIntersectsRectangle({ x: 0, y: 0 }, { x: 300, y: 0 }, box), "a clear segment misses");
  // The bounding boxes overlap, but the sloped line passes outside the corner.
  assert.ok(!segmentIntersectsRectangle({ x: 0, y: 420 }, { x: 420, y: 0 }, box), "a corner straddle misses");
});

