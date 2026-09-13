import { assert, core, test } from "./support/core-context.mjs";

const {
  annotationPositions, bakeDocumentSource, buildFlowchartEdgeGeometries, duplicateNode,
  extractDiagramFences, fitCanvasToContent, FlowchartIndex, getAnnotationBadgeBounds,
  getAnnotationBadgeSize, getAnnotationColors, getAnnotationLabel, getAnnotationPosition,
  getFlowchartAnnotationBounds, lintDocument, measureTextWidth, parseDiagram,
  relayoutDocumentDiagram, renderAnnotationBadge, renderInline, renderMarkdown,
  serializeDiagram, setAnnotationRef, setAnnotationPosition, validateAnnotationRef
} = core;

const fence = (body) => `\`\`\`diagram\n${body}\n\`\`\``;

function flow(ref = "3", edgeRef = "Start", canvas = "auto") {
  return [
    "type: flowchart", "id: overview", "layout: right", `canvas: ${canvas}`, "nodes:",
    "  - id: first", "    label: First", "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }", `    ref: ${ref}`,
    "  - id: last", "    label: Last", "    shape: rounded-rectangle",
    "    position: { x: 360, y: 0 }", "edges:", "  - source: first", "    target: last",
    "    label: Transfer", `    ref: ${edgeRef}`
  ].join("\n");
}

const sequence = (ref) => [
  "type: sequence", "participants:", "  - id: first", "    label: First", "  - id: last", "    label: Last",
  "messages:", "  - from: first", "    to: last", "    label: Transfer", `    ref: ${ref}`
].join("\n");

test("annotation schema accepts scalar and mapped refs on nodes, edges, and messages", () => {
  for (const [source, expected] of [
    ["3", 3], ['"03"', "03"], ["Start", "Start"], ['"three steps"', "three steps"],
    ["{ label: 3, position: ne }", { label: 3, position: "ne" }],
    ["{ label: Don't retry, position: ne }", { label: "Don't retry", position: "ne" }],
    ['{ label: Say "go", position: S }', { label: 'Say "go"', position: "S" }],
    ["{ label: 'Start, then finish', position: SW }", { label: "Start, then finish", position: "SW" }],
    ['{ label: "Start, then finish", position: SW }', { label: "Start, then finish", position: "SW" }]
  ]) {
    const diagram = parseDiagram(flow(source, source));
    assert.deepEqual(diagram.nodes[0].ref, expected);
    assert.deepEqual(diagram.edges[0].ref, expected);
    assert.deepEqual(parseDiagram(sequence(source)).messages[0].ref, expected);
    const roundtrip = parseDiagram(serializeDiagram(diagram));
    assert.deepEqual(roundtrip.nodes[0].ref, expected);
    assert.deepEqual(roundtrip.edges[0].ref, expected);
  }
});

test("all sixteen positions validate while default position is NW", () => {
  assert.equal(annotationPositions.length, 16);
  assert.equal(getAnnotationPosition(3), "NW");
  assert.equal(getAnnotationPosition({ label: "Start" }), "NW");
  for (const position of annotationPositions) {
    validateAnnotationRef({ label: 3, position });
    assert.equal(parseDiagram(sequence(`{ label: 3, position: ${position} }`)).messages[0].ref.position, position);
  }
});

test("sequence messages can omit or empty their labels while retaining annotation refs", () => {
  for (const line of ["", '    label: ""\n']) {
    const source = sequence("3").replace("    label: Transfer\n", line);
    const diagram = parseDiagram(source);
    assert.equal(diagram.messages[0].ref, 3);
    assert.equal(diagram.messages[0].label, line ? "" : undefined);
    assert.deepEqual(parseDiagram(serializeDiagram(diagram)).messages, diagram.messages);
    assert.equal(lintDocument(fence(source)).errorCount, 0);
  }
  assert.throws(() => parseDiagram(sequence("3").replace("    to: last\n", "")), /requires from and to/);
  assert.throws(() => parseDiagram(sequence("3").replace("label: Transfer", "label: {}")), /label must be a string/);
});

test("annotation refs reject malformed labels, positions, collections, and unknown fields", () => {
  for (const ref of [null, undefined, false, NaN, Infinity, -Infinity, "", "  ", "a\nb", [], {}, { label: {} }, { label: [] }, { label: true }, { label: 3, position: "North" }, { label: 3, position: "Ne" }, { label: 3, position: null }, { label: 3, color: "red" }]) {
    assert.throws(() => validateAnnotationRef(ref), /ref/i);
  }
  for (const ref of ["{}", "[]", "[3]", "true", '""', '"  "', "{ label: {} }", "{ label: [] }", "{ label: 3, position: Ne }", "{ label: Start, href: detail }", "{ label: 3, label: 4 }", '{ label: "Start, position: ne }', "{ label: 'Start, position: ne }", "{ label: { x: 3 }"]) {
    assert.throws(() => parseDiagram(flow(ref)), /ref|mapping/i, ref);
    assert.throws(() => parseDiagram(sequence(ref)), /ref|mapping/i, ref);
    const lint = lintDocument(fence(flow(ref)));
    assert.equal(lint.messages[0].rule, "schema");
    assert.equal(lint.errorCount, 1);
  }
});

test("numeric-looking string annotation labels retain their type and leading zeros", () => {
  for (const ref of ['"03"', '"true"', '"3"', '{ label: "03", position: ne }']) {
    const parsed = parseDiagram(flow(ref));
    const serialized = serializeDiagram(parsed);
    assert.deepEqual(parseDiagram(serialized).nodes[0].ref, parsed.nodes[0].ref);
  }
});

test("annotation sizes use fixed circles for one or two ASCII digits and measured stadiums otherwise", () => {
  for (const ref of [0, 3, 99, "03", "9", { label: "12" }]) {
    assert.deepEqual(getAnnotationBadgeSize(ref), { width: 24, height: 24 });
  }
  for (const ref of ["i", ".", "Start", 100, "-1", "３", "three words"]) {
    const label = getAnnotationLabel(ref);
    assert.deepEqual(getAnnotationBadgeSize(ref), {
      width: Math.max(32, Math.ceil(measureTextWidth(label, 14, true) + 16)), height: 24
    });
    assert.ok(getAnnotationBadgeSize(ref).width > getAnnotationBadgeSize(ref).height);
  }
  assert.ok(measureTextWidth("99", 14, true) <= 18);
});

test("annotation styling rejects unsupported color schemes rather than substituting one", () => {
  assert.throws(() => getAnnotationColors("unknown", "light"), /Unsupported annotation colour scheme/);
});

test("node badge bounds distinguish all exterior and interior positions", () => {
  const target = { x: 100, y: 200, width: 160, height: 100 };
  const expected = {
    N: [168, 172], S: [168, 304], E: [264, 238], W: [72, 238],
    NE: [264, 172], NW: [72, 172], SE: [264, 304], SW: [72, 304],
    n: [168, 204], s: [168, 272], e: [232, 238], w: [104, 238],
    ne: [232, 204], nw: [104, 204], se: [232, 272], sw: [104, 272]
  };
  for (const [position, [x, y]] of Object.entries(expected)) {
    assert.deepEqual(getAnnotationBadgeBounds({ label: 3, position }, target), { x, y, width: 24, height: 24 });
    assert.deepEqual(getAnnotationBadgeBounds({ label: 3, position }, target, true),
      getAnnotationBadgeBounds({ label: 3, position: position.toUpperCase() }, target));
  }
});

test("edge badge targets use rendered label bounds and route midpoints without a label", () => {
  for (const label of [true, false]) {
    const diagram = parseDiagram(label ? flow() : flow().replace("    label: Transfer\n", ""));
    const index = new FlowchartIndex(diagram);
    const geometries = buildFlowchartEdgeGeometries(diagram, index);
    const entry = getFlowchartAnnotationBounds(diagram, index, geometries).find((item) => item.kind === "edge");
    const geometry = geometries[0];
    const target = label ? geometry.label.bounds : { ...geometry.path.midpoint, width: 0, height: 0 };
    assert.deepEqual(entry.target, target);
    assert.deepEqual(entry.bounds, getAnnotationBadgeBounds(diagram.edges[0].ref, target, true));
  }
});

test("SVG annotation badge labels are escaped, accessible, solid, and noninteractive", () => {
  const ref = '<Start & "finish">';
  const bounds = getAnnotationBadgeBounds(ref, { x: 0, y: 0, width: 100, height: 80 });
  const html = renderAnnotationBadge(ref, bounds, "fire", "light");
  assert.match(html, /class="docdiagram-annotation-ref"/);
  assert.match(html, /role="img" aria-label="Reference &lt;Start &amp; &quot;finish&quot;&gt;"/);
  assert.match(html, /<title>Reference &lt;Start &amp; &quot;finish&quot;&gt;<\/title>/);
  assert.match(html, /font-size="14" font-weight="700"/);
  assert.match(html, /pointer-events="none"/);
  assert.equal((html.match(/aria-hidden="true"/g) || []).length, 2);
  assert.match(html, /<rect[^>]+fill="#[0-9a-f]+"/);
  assert.match(html, /<text[^>]+fill="#[0-9a-f]+"/);
  assert.doesNotMatch(html, /href=|tabindex=|url\(|linearGradient|<Start/);
});

test("annotation colors remain blue and have accessible label contrast in every scheme", () => {
  const luminance = (hex) => {
    const channels = hex.match(/[0-9a-f]{2}/gi).map((value) => Number.parseInt(value, 16) / 255)
      .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };
  for (const scheme of ["classic", "fire", "ice", "midnight", "paper"]) {
    for (const theme of ["light", "dark"]) {
      const { fill, text } = getAnnotationColors(scheme, theme);
      const channel = fill.match(/[0-9a-f]{2}/gi).map((value) => Number.parseInt(value, 16));
      assert.ok(channel[2] > channel[0], `${scheme}/${theme} is blue`);
      const l = [luminance(fill), luminance(text)].sort((a, b) => b - a);
      assert.ok((l[0] + 0.05) / (l[1] + 0.05) >= 4.5, `${scheme}/${theme} contrast`);
    }
  }
});

test("inline annotations are inert plain badges separate from figure cross references", () => {
  const html = renderInline('{annotation=3} {annotation=Start} {annotation=03} {annotation="<b>Start</b>"}');
  assert.equal((html.match(/class="docdiagram-annotation-inline/g) || []).length, 4);
  assert.equal((html.match(/docdiagram-annotation-inline-circle/g) || []).length, 2);
  assert.match(html, /&lt;b&gt;Start&lt;\/b&gt;/);
  assert.doesNotMatch(html, /<a|href=|<b>/);
  assert.match(html, /role="img" aria-label="Reference 3"/);
  assert.doesNotMatch(html, /tabindex=/);
  assert.equal(renderInline("`{annotation=3}`"), "<code>{annotation=3}</code>");
  assert.equal(renderInline("{annotation=} {annotation= }"), "{annotation=} {annotation= }");
  const document = renderMarkdown(`${fence(flow().replace("id: overview", "id: overview\ncaption: Figure #"))}\n\n{annotation=3} {ref=overview}`);
  assert.match(document, /docdiagram-annotation-inline/);
  assert.match(document, /href="#overview">1<\/a>/);
  assert.equal(lintDocument(fence(flow())).messages.some((message) => message.rule.includes("destination")), false);
  assert.equal(renderInline("[Link](#{annotation=3})"), '<a href="#{annotation=3}">Link</a>');
  assert.equal(renderInline("![{annotation=3}](image.png)"), '<img src="image.png" alt="{annotation=3}">');
});

test("annotation labels can repeat within diagrams and prose without a uniqueness check", () => {
  const source = `${fence(flow("3", "3"))}\n\n{annotation=3} {annotation=3}\n\n${fence(flow("3", "3").replace("id: overview", "id: detail"))}`;
  const lint = lintDocument(source);
  assert.equal(lint.errorCount, 0);
  assert.equal(lint.messages.some((message) => /duplicate|destination|ambiguous/i.test(message.message)), false);
  assert.equal((renderMarkdown(source).match(/aria-label="Reference 3"/g) || []).length, 6);
});

test("recursive duplication copies annotation mappings independently", () => {
  const diagram = parseDiagram(flow("{ label: 3, position: ne }"));
  diagram.nodes[0].children = [{
    id: "child", label: "Child", shape: "rounded-rectangle", position: { x: 20, y: 30 }, ref: { label: "Start" }
  }];
  const copy = duplicateNode(diagram, "first");
  assert.deepEqual(copy.ref, diagram.nodes[0].ref);
  assert.notEqual(copy.ref, diagram.nodes[0].ref);
  assert.deepEqual(copy.children[0].ref, diagram.nodes[0].children[0].ref);
  assert.notEqual(copy.children[0].ref, diagram.nodes[0].children[0].ref);
});

test("annotation mutations preserve label types and positions, validate, and remove cleanly", () => {
  const target = { ref: 3 };
  assert.equal(setAnnotationRef(target, "3"), target);
  assert.equal(target.ref, 3);
  setAnnotationPosition(target, "ne");
  assert.deepEqual(target.ref, { label: 3, position: "ne" });
  setAnnotationRef(target, "Start");
  assert.deepEqual(target.ref, { label: "Start", position: "ne" });
  assert.throws(() => setAnnotationRef(target, " "), /label must/);
  assert.throws(() => setAnnotationPosition(target, "North"), /position must/);
  assert.deepEqual(target.ref, { label: "Start", position: "ne" });
  setAnnotationRef(target, "");
  assert.equal(Object.hasOwn(target, "ref"), false);
  setAnnotationPosition(target, "NW");
  assert.equal(Object.hasOwn(target, "ref"), false);
  setAnnotationRef(target, "03");
  assert.equal(target.ref, "03");
});

test("derived canvas contains negative node and edge badges and repeated parsing is stable", () => {
  let diagram = parseDiagram(flow());
  assert.ok(diagram.nodes[0].position.x > 0);
  assert.ok(diagram.nodes[0].position.y > 0);
  const check = () => {
    for (const { bounds } of getFlowchartAnnotationBounds(diagram)) {
      assert.ok(bounds.x >= 0 && bounds.y >= 0);
      assert.ok(bounds.x + bounds.width <= diagram.canvas.width);
      assert.ok(bounds.y + bounds.height <= diagram.canvas.height);
    }
  };
  check();
  for (let iteration = 0; iteration < 4; iteration += 1) {
    const previous = structuredClone(diagram);
    diagram = parseDiagram(serializeDiagram(diagram));
    assert.deepEqual(diagram, previous);
    check();
  }
});

test("explicit canvas fitting includes annotations and remains idempotent", () => {
  const diagram = parseDiagram(flow("Start", "{ label: 32, position: SE }", "{ width: 300, height: 200 }"));
  fitCanvasToContent(diagram);
  const expected = structuredClone(diagram);
  fitCanvasToContent(diagram);
  assert.deepEqual(diagram, expected);
  for (const { bounds } of getFlowchartAnnotationBounds(diagram)) {
    assert.ok(bounds.x >= 0 && bounds.y >= 0);
    assert.ok(bounds.x + bounds.width <= diagram.canvas.width);
    assert.ok(bounds.y + bounds.height <= diagram.canvas.height);
  }
});

test("parsing an authored fixed canvas preserves geometry for renderer viewBox expansion", () => {
  const diagram = parseDiagram(flow("3", "Start", "{ width: 300, height: 200 }"));
  assert.deepEqual(diagram.canvas, { width: 300, height: 200 });
  assert.deepEqual(diagram.nodes[0].position, { x: 0, y: 0 });
  assert.deepEqual(diagram.nodes[1].position, { x: 360, y: 0 });
  const badge = getFlowchartAnnotationBounds(diagram)[0].bounds;
  assert.ok(badge.x < 0 && badge.y < 0);
});

test("auto canvas includes wide annotation bounds at every compass position without drift", () => {
  for (const position of annotationPositions) {
    const source = flow(`{ label: "An annotation wider than a node", position: ${position} }`,
      `{ label: "Transfer annotation", position: ${position} }`)
      .replace("    position: { x: 360, y: 0 }", "    position: { x: 40, y: 280 }");
    let diagram = parseDiagram(source);
    for (let iteration = 0; iteration < 3; iteration += 1) {
      for (const { bounds } of getFlowchartAnnotationBounds(diagram)) {
        assert.ok(bounds.x >= 0 && bounds.y >= 0, position);
        assert.ok(bounds.x + bounds.width <= diagram.canvas.width, position);
        assert.ok(bounds.y + bounds.height <= diagram.canvas.height, position);
      }
      const previous = structuredClone(diagram);
      diagram = parseDiagram(serializeDiagram(diagram));
      assert.deepEqual(diagram, previous, position);
    }
  }
});

test("auto canvas label placement stays stable when its derived bounds move the origin", () => {
  for (const targetY of [0, 300]) {
    const source = flow("3", '{ label: Annotation, position: N }')
      .replace("    position: { x: 360, y: 0 }", `    position: { x: 0, y: ${targetY} }`)
      .replace("    label: Transfer", `    label: ${"Long label ".repeat(10)}`);
    let diagram = parseDiagram(source);
    for (let iteration = 0; iteration < 3; iteration += 1) {
      const geometry = buildFlowchartEdgeGeometries(diagram)[0];
      for (const bounds of [geometry.label.bounds, ...getFlowchartAnnotationBounds(diagram).map((entry) => entry.bounds)]) {
        assert.ok(bounds.x >= 0 && bounds.y >= 0);
        assert.ok(bounds.x + bounds.width <= diagram.canvas.width);
        assert.ok(bounds.y + bounds.height <= diagram.canvas.height);
      }
      const previous = structuredClone(diagram);
      diagram = parseDiagram(serializeDiagram(diagram));
      assert.deepEqual(diagram, previous);
    }
  }
});

test("baking and relayout retain scalar and mapped refs without renumbering", () => {
  const source = fence(flow('"03"', "{ label: Start, position: sw }").replace(/    position:.*\n/g, ""));
  const baked = bakeDocumentSource(source);
  for (const mode of ["all", "unpinned", "autowrap"]) {
    const result = relayoutDocumentDiagram(baked.source, 0, mode);
    const diagram = parseDiagram(extractDiagramFences(result.source)[0].source);
    assert.equal(diagram.nodes[0].ref, "03");
    assert.deepEqual(diagram.edges[0].ref, { label: "Start", position: "sw" });
    assert.equal(bakeDocumentSource(result.source).source, result.source);
  }
});

test("lint warns when an inside annotation cannot fit its node", () => {
  const source = flow('{ label: "A label far wider than this tiny node", position: nw }')
    .replace("    label: First", "    label: First\n    size: { width: 50, height: 20 }");
  const messages = lintDocument(fence(source)).messages;
  const overflow = messages.find((message) => message.rule === "annotation-overflow");
  assert.equal(overflow.severity, "warning");
  assert.equal(overflow.location.subjects[0].id, "first");
});

test("lint identifies an annotation that overlaps an unrelated node", () => {
  const source = flow("{ label: 3, position: E }")
    .replace("    position: { x: 360, y: 0 }", "    position: { x: 200, y: 0 }");
  const overlap = lintDocument(fence(source)).messages.find((message) => message.rule === "annotation-overlap");
  assert.equal(overlap.severity, "warning");
  assert.equal(overlap.location.subjects[0].id, "first");
  assert.equal(overlap.location.subjects[1].id, "last");
});
