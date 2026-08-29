import { assert, core, fs, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;

const {
  getNodeEffectiveStyle,
  getEdgeEffectiveStyle,
  parseDiagram,
  renderMarkdown,
  renderDiagram,
  serializeDiagram
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

function captionedDiagram(id, caption) {
  return [
    "```diagram",
    "type: flowchart",
    `id: ${id}`,
    ...(caption === undefined ? [] : [`caption: ${JSON.stringify(caption)}`]),
    "canvas: auto",
    "nodes:",
    "edges:",
    "```"
  ];
}

test("a caption renders as a figcaption inside the diagram's own figure", () => {
  const markup = renderMarkdown(captionedDiagram("auth-flow", "Authentication flow").join("\n"));

  assert.match(markup, /<figcaption class="docdiagram-caption">Authentication flow<\/figcaption><\/figure>/);
  assert.match(markup, /<figure class="docdiagram docdiagram-captioned" id="auth-flow"/);
});

test("an uncaptioned diagram still gets its id as an anchor and no figcaption", () => {
  const markup = renderMarkdown(captionedDiagram("auth-flow").join("\n"));

  assert.match(markup, /<figure class="docdiagram" id="auth-flow"/);
  assert.doesNotMatch(markup, /figcaption/);
});

test("only a caption with a placeholder consumes a figure number, keeping numbering contiguous", () => {
  const markup = renderMarkdown([
    ...captionedDiagram("first", "Figure #: First"),
    "",
    ...captionedDiagram("middle", "An aside"),
    "",
    ...captionedDiagram("last", "Figure #: Last")
  ].join("\n"));

  assert.match(markup, /Figure 1: First/);
  assert.match(markup, /An aside/);
  assert.match(markup, /Figure 2: Last/);
});

test("figure numbering follows render order, not definition order", () => {
  const markup = renderMarkdown([
    ":::diagram { id=second }",
    "",
    ":::diagram { id=first }",
    "",
    ...captionedDiagram("first", "Figure #: Defined first"),
    "",
    ...captionedDiagram("second", "Figure #: Defined second")
  ].join("\n"));

  assert.ok(
    markup.indexOf("Figure 1: Defined second") < markup.indexOf("Figure 2: Defined first"),
    "the diagram referenced first should be figure 1"
  );
});

test("an escaped hash is a literal hash and does not consume a number", () => {
  const markup = renderMarkdown([
    ...captionedDiagram("ticket", "Ticket \\#42"),
    "",
    ...captionedDiagram("flow", "Figure #: Flow")
  ].join("\n"));

  assert.match(markup, /Ticket #42/);
  assert.match(markup, /Figure 1: Flow/);
});

test("a reference resolves to the number when the caption is numbered, and to the text when it is not", () => {
  const markup = renderMarkdown([
    "See Figure {ref=numbered} and {ref=titled}.",
    "",
    ...captionedDiagram("numbered", "Figure #: Numbered"),
    "",
    ...captionedDiagram("titled", "Just a title")
  ].join("\n"));

  assert.match(markup, /See Figure <a href="#numbered">1<\/a> and <a href="#titled">Just a title<\/a>\./);
});

test("a reference to an unknown or uncaptioned diagram is reported rather than silently wrong", () => {
  const unknown = renderMarkdown("See {ref=nowhere}.");
  const uncaptioned = renderMarkdown([
    "See {ref=plain}.",
    "",
    ...captionedDiagram("plain")
  ].join("\n"));

  assert.match(unknown, /Unknown reference "nowhere"/);
  assert.match(uncaptioned, /Unknown reference "plain"/);
});

test("a diagram id wins an anchor collision with a heading slug", () => {
  const markup = renderMarkdown([
    "## Auth flow",
    "",
    ...captionedDiagram("auth-flow", "Figure #: Auth")
  ].join("\n"));

  assert.match(markup, /<h2 id="auth-flow-2">Auth flow<\/h2>/);
  assert.match(markup, /<figure class="docdiagram docdiagram-captioned" id="auth-flow"/);
});

test("a table of contents lists headings within its depth, nested as valid markup", () => {
  const markup = renderMarkdown([
    ":::toc { depth=2 }",
    "",
    "# Top",
    "",
    "## Middle",
    "",
    "### Deep"
  ].join("\n"));
  const contents = markup.match(/<nav class="docdiagram-contents"[\s\S]*?<\/nav>/)[0];

  assert.match(contents, /<li class="docdiagram-contents-heading"><a href="#top">Top<\/a><ul>/);
  assert.match(contents, /<a href="#middle">Middle<\/a><\/li>/);
  assert.doesNotMatch(contents, /#deep/, "a heading past the depth is left out");
  assert.doesNotMatch(contents, /<ul><ul>/, "lists nest inside their list item");
});

test("a table of contents includes captioned diagrams only when asked, and never uncaptioned ones", () => {
  const source = (attributes) => [
    `:::toc ${attributes}`,
    "",
    "# Top",
    "",
    ...captionedDiagram("shown", "Figure #: Shown"),
    "",
    ...captionedDiagram("hidden")
  ].join("\n");

  const withDiagrams = renderMarkdown(source("{ diagrams=true }"));
  const withoutDiagrams = renderMarkdown(source("{ diagrams=false }"));

  assert.match(withDiagrams, /docdiagram-contents-figure"><a href="#shown">Figure 1: Shown<\/a>/);
  assert.doesNotMatch(withDiagrams, /#hidden/);
  assert.doesNotMatch(withoutDiagrams, /docdiagram-contents-figure/);
});

test("a table of contents defaults to depth 3 with diagrams left out", () => {
  const markup = renderMarkdown([
    ":::toc",
    "",
    "# Top",
    "",
    "#### Fourth level",
    "",
    ...captionedDiagram("flow", "Figure #: Flow")
  ].join("\n"));

  assert.match(markup, /<a href="#top">Top<\/a>/);
  assert.doesNotMatch(markup, /#fourth-level/);
  assert.doesNotMatch(markup, /docdiagram-contents-figure/);
});

test("an invalid toc directive stays literal source", () => {
  assert.match(renderMarkdown(":::toc { depth=9 }"), /docdiagram-literal-source/);
  assert.match(renderMarkdown(":::toc { diagrams=maybe }"), /docdiagram-literal-source/);
  assert.match(renderMarkdown(":::toc { columns=2 }"), /docdiagram-literal-source/);
});

test("a caption round-trips through parse and serialize with no serializer change", () => {
  const source = [
    "type: flowchart",
    "id: auth-flow",
    "caption: \"Figure #: Authentication flow\"",
    "canvas: auto",
    "nodes:",
    "edges:"
  ].join("\n");

  assert.equal(parseDiagram(source).caption, "Figure #: Authentication flow");
  assert.match(serializeDiagram(parseDiagram(source)), /^caption: "Figure #: Authentication flow"$/m);
});

test("diagram metadata validates explicit fields and round-trips unchanged", () => {
  const source = [
    "type: flowchart",
    "version: 1",
    "id: auth-flow",
    "caption: Authentication flow",
    "theme: dark",
    "canvas: auto",
    "nodes:",
    "edges:"
  ].join("\n");
  const body = ["canvas: auto", "nodes:", "edges:"];

  assert.equal(serializeDiagram(parseDiagram(source)), source);
  assert.throws(() => parseDiagram(flowchartSource(["debug: true", ...body])), /Unsupported flowchart diagram field: debug/);
  assert.throws(() => parseDiagram(flowchartSource(["theme: ultraviolet", ...body])), /Unsupported diagram theme: ultraviolet/);
  assert.throws(() => parseDiagram(flowchartSource(["version: 0", ...body])), /Diagram version must be a positive integer/);
  assert.throws(() => parseDiagram(flowchartSource(["id: 42", ...body])), /Diagram id must be a string/);
  assert.throws(() => parseDiagram(flowchartSource(["caption: false", ...body])), /Diagram caption must be a string/);
});

test("captions and references render their inline markdown subset but not block content", () => {
  const markup = renderMarkdown([
    "See {ref=flow}.",
    "",
    ...captionedDiagram("flow", "A **bold** caption")
  ].join("\n"));

  assert.match(markup, /<figcaption class="docdiagram-caption">A <strong>bold<\/strong> caption<\/figcaption>/);
  assert.match(markup, /<a href="#flow">A <strong>bold<\/strong> caption<\/a>/);
});

function styledDiagram(extraLines) {
  return flowchartSource([
    "styles:",
    "  warning:",
    "    palette: warning",
    "    style: { strokeWidth: 3 }",
    "canvas: auto",
    ...extraLines
  ]);
}

test("a named style is applied to a node through its class", () => {
  const diagram = parseDiagram(styledDiagram([
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    class: warning",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]));
  const classed = getNodeEffectiveStyle(diagram, diagram.nodes[0], "light", "classic");
  const inline = getNodeEffectiveStyle(diagram, { id: "x", label: "X", shape: "rounded-rectangle", palette: "warning" }, "light", "classic");

  assert.equal(classed.fill, inline.fill);
  assert.equal(classed.stroke, inline.stroke);
  assert.equal(classed.strokeWidth, 3, "the class's own style values apply too");
});

test("a node's own palette and style win over the class it names", () => {
  const diagram = parseDiagram(styledDiagram([
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    class: warning",
    "    palette: success",
    "    style: { strokeWidth: 8 }",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]));
  const style = getNodeEffectiveStyle(diagram, diagram.nodes[0], "light", "classic");
  const success = getNodeEffectiveStyle(diagram, { id: "x", label: "X", shape: "rounded-rectangle", palette: "success" }, "light", "classic");

  assert.equal(style.fill, success.fill, "the node's own palette wins");
  assert.equal(style.strokeWidth, 8, "the node's own style wins");
});

test("an edge takes the style values of its class but has no palette of its own", () => {
  const diagram = parseDiagram(flowchartSource([
    "styles:",
    "  emphasis:",
    "    palette: warning",
    "    style: { strokeWidth: 4, stroke: \"#B45309\" }",
    "canvas: auto",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    class: emphasis"
  ]));
  const style = getEdgeEffectiveStyle(diagram, diagram.edges[0], "light");

  assert.equal(style.strokeWidth, 4);
  assert.equal(style.stroke, "#B45309");
});

test("a class palette drives the rendered gradient exactly as an inline palette does", () => {
  const nodeLines = (presentation) => [
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    presentation,
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ];
  const classed = renderDiagram(flowchartSource([
    "styles:",
    "  branded:",
    "    palette: accent",
    "canvas: auto",
    ...nodeLines("    class: branded")
  ]), 0);
  const inline = renderDiagram(flowchartSource(["canvas: auto", ...nodeLines("    palette: accent")]), 0);

  assert.match(classed, /fill="url\(#docdiagram-classic-0-accent\)"/);
  assert.equal(
    classed.match(/<g class="docdiagram-node"[\s\S]*?<\/g>/)[0],
    inline.match(/<g class="docdiagram-node"[\s\S]*?<\/g>/)[0],
    "a classed node renders identically to the same palette written inline"
  );
});

test("a class that is not declared is an error rather than a silent no-op", () => {
  assert.throws(
    () => parseDiagram(styledDiagram([
      "nodes:",
      "  - id: api",
      "    label: API",
      "    shape: rounded-rectangle",
      "    class: danger",
      "    position: { x: 0, y: 0 }",
      "    size: { width: 190, height: 80 }",
      "edges:"
    ])),
    /Unknown style class on node "api": danger/
  );
});

test("a style definition is validated like the node fields it stands in for", () => {
  const withStyles = (lines) => flowchartSource(["styles:", ...lines, "canvas: auto", "nodes:", "edges:"]);

  assert.throws(() => parseDiagram(withStyles(["  bad:", "    palette: neon"])), /Unsupported palette in style "bad": neon/);
  assert.throws(() => parseDiagram(withStyles(["  bad:", "    shape: circle"])), /Unsupported style "bad" field: shape/);
  assert.throws(() => parseDiagram(withStyles(["  bad:", "    style: { width: 4 }"])), /Style "bad" style.width is not supported/);
  assert.throws(() => parseDiagram(withStyles(["  bad:", "    style: { glow: yes }"])), /Unsupported style "bad" style field: glow/);
  assert.throws(() => parseDiagram(withStyles(["  bad:", "    style: {}"])), /Style "bad" declares no palette or style values/);
});

test("named styles round-trip as a block, and the source stays stable across saves", () => {
  const source = styledDiagram([
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    class: warning",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]);
  const once = serializeDiagram(parseDiagram(source));
  const twice = serializeDiagram(parseDiagram(once));

  assert.match(once, /^styles:\n {2}warning:\n {4}palette: warning\n {4}style: \{ strokeWidth: 3 \}$/m);
  assert.match(once, /^ {4}class: warning$/m);
  assert.equal(once, twice, "a saved diagram reparses to the same source");
});

test("a diagram with no styles block is completely unaffected", () => {
  const source = flowchartSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]);
  const diagram = parseDiagram(source);

  assert.equal(diagram.styles, undefined);
  assert.doesNotMatch(serializeDiagram(diagram), /styles:/);
});

