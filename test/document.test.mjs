import { assert, core, fs, path, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;
const runtime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");

const {
  parseDiagram,
  parseDocumentFrontmatter,
  resolveDocument,
  renderMarkdown,
  validateDocumentSource,
  findSourceTextRange,
  balanceDocumentDiagram,
  balanceDocumentLinearFlows
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

function longFlowSource(count = 8) {
  return flowchartSource([
    "id: quoted-long-flow",
    "layout: right",
    "nodes:",
    ...Array.from({ length: count }, (_, index) => [
      `  - id: n${index}`,
      `    label: Node ${index}`,
      "    shape: rounded-rectangle",
      `    position: { x: 20, y: ${index * 180} }`,
      "    size: { width: 180, height: 80 }"
    ]).flat(),
    "edges:",
    ...Array.from({ length: count - 1 }, (_, index) => [
      `  - source: n${index}`,
      `    target: n${index + 1}`,
      "    sourceAnchor: bottom",
      "    targetAnchor: top"
    ]).flat()
  ]);
}

test("portable autowrap rewrites every eligible flow and is idempotent", () => {
  const firstFence = ["```diagram", longFlowSource(), "```"].join("\n");
  const secondFence = ["```diagram", longFlowSource().replace("quoted-long-flow", "second-long-flow"), "```"].join("\n");
  const source = ["# Two flows", "", firstFence, "", "Preserved prose.", "", secondFence].join("\n");

  const first = balanceDocumentLinearFlows(source);
  const second = balanceDocumentLinearFlows(first.source);

  assert.equal(first.changed, true);
  assert.equal(first.layouts.length, 2);
  assert.match(first.source, /Preserved prose\./);
  assert.equal(second.changed, false);
  assert.equal(second.layouts.length, 0);
  assert.equal(second.source, first.source);
});

test("balanced source rewriting preserves CRLF block quotes and bytes outside the selected fence", () => {
  const fence = ["```diagram", longFlowSource(), "```"].join("\n");
  const quotedFence = fence.split("\n").map((line) => `> ${line}`).join("\r\n");
  const source = `Before\r\n\r\n${quotedFence}\r\n\r\nAfter`;
  const result = balanceDocumentDiagram(source, 0);

  assert.ok(result.changed);
  assert.ok(result.source.startsWith("Before\r\n\r\n> ```diagram\r\n"));
  assert.ok(result.source.endsWith("\r\n> ```\r\n\r\nAfter"));
  assert.equal(result.source.replaceAll("\r\n", "").includes("\n"), false);
  assert.ok(result.source.split("\r\n").slice(3, -3).every((line) => line.startsWith("> ")));
});

test("render authoring skill fixtures use the required shell and valid source", () => {
  const fixtureDirectory = path.resolve(__dirname, "fixtures", "render-document");
  const fixtures = [
    "simple-document.html",
    "flowchart-document.html",
    "themed-document.html",
    "sequence-document.html"
  ];

  for (const fixture of fixtures) {
    const filePath = path.join(fixtureDirectory, fixture);
    const html = fs.readFileSync(filePath, "utf8");
    const source = readTemplateSource(filePath);

    assert.match(html, /^<!doctype html>/i, `${fixture} has a document doctype`);
    assert.match(html, /<html lang="en">/, `${fixture} declares its language`);
    assert.match(html, /<meta charset="utf-8">/, `${fixture} declares UTF-8`);
    assert.match(html, /<meta name="viewport"/, `${fixture} has a viewport`);
    assert.match(html, /<script src="https:\/\/sparkkz-nz\.github\.io\/skryb\/(?:latest|releases\/v1\.2\.0)\/skryb-runtime\.js" defer><\/script>/, `${fixture} uses a hosted runtime`);
    assert.match(html, /<main id="rendered-document"><\/main>/, `${fixture} has an empty render target`);

    const document = resolveDocument(source);
    assert.ok(document.content.includes("# "), `${fixture} has a document heading`);

    for (const diagramSource of readDiagramSources(document.content)) {
      assert.doesNotThrow(() => parseDiagram(diagramSource), `${fixture} has a valid diagram`);
    }
  }
});


test("published documentation and starter template use the required shell and valid source", () => {
  const documentationFiles = [
    path.resolve(__dirname, "..", "pages", "docs", "quickstart.html"),
    path.resolve(__dirname, "..", "pages", "docs", "reference.html"),
    path.resolve(__dirname, "..", "pages", "templates", "skryb-document-template.html")
  ];

  for (const filePath of documentationFiles) {
    const html = fs.readFileSync(filePath, "utf8");
    const source = readTemplateSource(filePath);

    assert.match(html, /^<!doctype html>/i, `${filePath} has a document doctype`);
    assert.match(html, /<html lang="en">/, `${filePath} declares its language`);
    assert.match(html, /<meta charset="utf-8">/, `${filePath} declares UTF-8`);
    assert.match(html, /<meta name="viewport"/, `${filePath} has a viewport`);
    assert.match(html, /<script src="https:\/\/sparkkz-nz\.github\.io\/skryb\/latest\/skryb-runtime\.js" defer><\/script>/, `${filePath} uses the hosted runtime`);
    assert.match(html, /<main id="rendered-document"><\/main>/, `${filePath} has an empty render target`);

    const document = resolveDocument(source);
    assert.ok(document.content.includes("# "), `${filePath} has a document heading`);

    for (const diagramSource of readDiagramSources(document.content)) {
      assert.doesNotThrow(() => parseDiagram(diagramSource), `${filePath} has a valid diagram`);
    }
  }
});

test("published reference renders Markdown and YAML source blocks", () => {
  const source = readTemplateSource(path.resolve(__dirname, "..", "pages", "docs", "reference.html"));
  const markup = renderMarkdown(resolveDocument(source).content);

  // Highlighting wraps recognised tokens, so the block's text is compared without them.
  const text = markup.replace(/<span class="docdiagram-token-\w+">/g, "").replace(/<\/span>/g, "");

  assert.match(markup, /<pre><code class="language-markdown">/);
  assert.match(markup, /<pre><code class="language-yaml">/);
  assert.match(text, /type: flowchart/);
  assert.match(text, /type: sequence/);
  assert.match(source, /:::diagram \{ id=payment-flow \}/);
});

test("Pages home promotes the published guides", () => {
  const home = fs.readFileSync(path.resolve(__dirname, "..", "pages", "index.html"), "utf8");
  const deployment = fs.readFileSync(path.resolve(__dirname, "..", ".github", "workflows", "deploy-pages.yml"), "utf8");

  assert.match(home, /<title>Skryb - beautiful documents your agent writes and you can still edit<\/title>/);
  assert.match(home, /href="\.\/docs\/quickstart\.html"/);
  assert.match(home, /href="\.\/docs\/reference\.html"/);
  assert.match(home, /src="\.\/assets\/sample\.png"/);
  assert.match(home, /src="\.\/assets\/secure-doc-flow\.png"/);
  assert.match(home, /src="\.\/assets\/source-edit\.png"/);
  assert.match(home, /src="\.\/assets\/edit-flowchart\.png"/);
  assert.match(home, /src="\.\/assets\/sequence\.png"/);
  assert.match(home, /src="\.\/assets\/edit-source\.mp4"/);
  assert.match(home, /src="\.\/assets\/edit-diagram\.mp4"/);
  assert.match(home, /src="\.\/assets\/themes\.mp4"/);
  assert.match(home, /src="\.\/assets\/zoom\.mp4"/);
  assert.match(home, /npx skills add sparkkz-nz\/skryb/);
  assert.match(home, /data-carousel-previous/);
  assert.match(home, /data-carousel-next/);
  assert.match(deployment, /cp pages\/index\.html "\$site_dir\/index\.html"/);
  assert.match(
    deployment,
    /rm -rf "\$site_dir\/assets" "\$site_dir\/templates"/,
    "asset trees are replaced, since cp -R nests into an existing directory"
  );
  assert.match(deployment, /cp -R pages\/assets "\$site_dir\/assets"/);
  assert.match(deployment, /cp pages\/docs\/quickstart\.html "\$site_dir\/docs\/index\.html"/);
});

test("extracts document frontmatter without treating it as Markdown content", () => {
  const document = parseDocumentFrontmatter("\n---\ntheme: dark\n---\n\n# Payments");

  assert.equal(document.frontmatter.theme, "dark");
  assert.equal(document.content, "\n# Payments");
});

test("validates a complete source document before it is committed", () => {
  const document = validateDocumentSource([
    "---",
    "theme: dark",
    "---",
    "",
    "# Payments"
  ].join("\n"));

  assert.equal(document.theme, "dark");
  assert.equal(document.content, "\n# Payments");
});

test("finds the first canonical source range for rendered text navigation", () => {
  const source = "# Payments\n\nThe Payments API creates an intent.";
  const range = findSourceTextRange(source, "Payments");

  assert.equal(range.start, 2);
  assert.equal(range.end, 10);
  assert.equal(findSourceTextRange(source, "Missing"), null);
  assert.equal(findSourceTextRange(source, "   "), null);
});

test("rejects malformed frontmatter before source commit", () => {
  assert.throws(
    () => validateDocumentSource("---\ntheme dark\n---\n\n# Payments"),
    /Cannot parse document frontmatter line/
  );
});

test("rejects invalid diagram source before source commit", () => {
  assert.throws(
    () => validateDocumentSource([
      "# Payments",
      "",
      "```diagram",
      "type: flowchart",
      "version: 1",
      "canvas:",
      "  width: 800",
      "  height: 500",
      "nodes:",
      "  - id: api",
      "    label: API",
      "    shape: rounded-rectangle",
      "    position: { x: 100, y: 100 }",
      "    size: { width: 190, height: 80 }",
      "edges:",
      "  - source: api",
      "    target: api",
      "    targetAnchor: left",
      "```"
    ].join("\n")),
    /requires a sourceAnchor/
  );
});

test("rejects diagrams missing a node identifier or label before source commit", () => {
  assert.throws(
    () => validateDocumentSource([
      "```diagram",
      "type: flowchart",
      "version: 1",
      "canvas:",
      "  width: 400",
      "  height: 200",
      "nodes:",
      "  - id: api",
      "    shape: rounded-rectangle",
      "edges:",
      "```"
    ].join("\n")),
    /Every node requires an id and a string label/
  );
  assert.doesNotThrow(() => validateDocumentSource([
    "```diagram",
    "type: flowchart",
    "canvas:",
    "nodes:",
    "  - id: api",
    '    label: ""',
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "edges:",
    "```"
  ].join("\n")));
});

test("requires a supported diagram type and rejects removed flowchart node.type fields", () => {
  assert.throws(
    () => parseDiagram([
      "canvas:",
      "  width: 400",
      "  height: 200",
      "nodes:",
      "edges:"
    ].join("\n")),
    /Diagram type is required/
  );

  assert.throws(
    () => parseDiagram([
      "type: mindmap",
      "canvas:",
      "  width: 400",
      "  height: 200",
      "nodes:",
      "edges:"
    ].join("\n")),
    /Unsupported diagram type: mindmap/
  );

  assert.throws(
    () => parseDiagram(flowchartSource([
      "canvas:",
      "  width: 400",
      "  height: 200",
      "nodes:",
      "  - id: api",
      "    label: API",
      "    type: service",
      "    shape: rounded-rectangle",
      "edges:"
    ].join("\n"))),
    /uses removed field "type"/
  );
});

test("validates diagram fences with trailing closing-fence whitespace", () => {
  assert.throws(
    () => validateDocumentSource([
      "```diagram",
      "type: flowchart",
      "this is not valid diagram YAML",
      "```   "
    ].join("\n")),
    /Cannot parse diagram line/
  );
});

test("requires document-wide unique diagram IDs when diagram references are used", () => {
  const diagram = [
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```"
  ];
  assert.throws(
    () => validateDocumentSource([":::diagram { id=flow }", "", ...diagram, "", ...diagram].join("\n")),
    /Duplicate diagram id: flow/
  );
  assert.throws(
    () => validateDocumentSource([
      ":::diagram { id=flow }",
      "",
      ...diagram,
      "",
      "```diagram",
      "type: flowchart",
      "canvas:",
      "nodes:",
      "edges:",
      "```"
    ].join("\n")),
    /Every diagram requires an id when using diagram references/
  );
});

test("rejects an unclosed code fence before source commit", () => {
  assert.throws(
    () => validateDocumentSource("```diagram\nversion: 1"),
    /Unclosed code block/
  );
});

