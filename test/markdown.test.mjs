import { assert, core, fs, path, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;
const runtime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");

const {
  resolveDocument,
  isSafeUrl,
  renderInline,
  renderMarkdown
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

test("keeps rendering document content around an invalid diagram outside source editing", () => {
  const markup = renderMarkdown([
    "# Before",
    "",
    "```diagram",
      "type: flowchart",
    "version: 1",
    "canvas:",
    "  width: 400",
    "  height: 200",
    "nodes:",
    "  - id: api",
    "    label: API",
    "edges:",
    "```",
    "",
    "## After"
  ].join("\n"));

  assert.match(markup, /Diagram could not be rendered/);
  assert.match(markup, /<h2 id="after">After<\/h2>/);
});

test("adds deterministic IDs to headings for internal fragment links", () => {
  const markup = renderMarkdown([
    "# Overview",
    "## **API** details",
    "> ## Overview",
    "## Overview-2"
  ].join("\n"));

  assert.match(markup, /<h1 id="overview">Overview<\/h1>/);
  assert.match(markup, /<h2 id="api-details"><strong>API<\/strong> details<\/h2>/);
  assert.match(markup, /<blockquote><h2 id="overview-2">Overview<\/h2><\/blockquote>/);
  assert.match(markup, /<h2 id="overview-2-2">Overview-2<\/h2>/);
  assert.match(renderInline("[Jump](#overview)"), /<a href="#overview">Jump<\/a>/);
});

test("renders the documented CommonMark and GFM compatibility baseline semantically", () => {
  const source = fs.readFileSync(
    path.resolve(__dirname, "fixtures", "markdown", "compatibility-baseline.md"),
    "utf8"
  );
  const markup = renderMarkdown(source);

  assert.match(markup, /<ol><li>Define the public contract\.<ul><li>Include the API edge case\.<\/li><\/ul><\/li><li>Publish the implementation\.<\/li><\/ol>/);
  assert.match(markup, /<blockquote><p><strong>Important:<\/strong> keep existing document source portable\.<\/p><\/blockquote>/);
  assert.match(markup, /<hr>/);
  assert.match(markup, /<em>emphasis<\/em>, <strong>strong text<\/strong>, <del>removed text<\/del>, and <code>inline code<\/code>/);
  assert.match(
    markup,
    /<pre><code class="language-javascript"><span class="docdiagram-token-keyword">const<\/span> enabled = <span class="docdiagram-token-literal">true<\/span>;<\/code><\/pre>/
  );
  assert.match(markup, /<table><thead><tr><th style="text-align:left">Name<\/th><th style="text-align:center">State<\/th><th style="text-align:right">Detail<\/th>/);
  assert.match(markup, /<td style="text-align:left">API\|edge<\/td>/);
  assert.match(markup, /<li class="docdiagram-task-list-item"><input type="checkbox" disabled checked> Complete the migration<\/li>/);
  assert.match(markup, /<li class="docdiagram-task-list-item"><input type="checkbox" disabled> Publish the release notes<\/li>/);
});

test("renders only safe links and images while keeping unsafe URLs readable", () => {
  const markup = renderMarkdown([
    "[Safe](https://example.com/docs)",
    "",
    "[Unsafe](javascript:alert(1))",
    "",
    "![Logo](images/logo.png)",
    "",
    "![Unsafe image](data:text/html;base64,PHNjcmlwdD4=)",
    "",
    "<script>alert('literal')</script>"
  ].join("\n"));

  assert.match(markup, /<a href="https:\/\/example\.com\/docs">Safe<\/a>/);
  assert.doesNotMatch(markup, /href="javascript:/);
  assert.match(markup, /\[Unsafe\]\(javascript:alert\(1\)\)/);
  assert.match(markup, /<img src="images\/logo\.png" alt="Logo">/);
  assert.doesNotMatch(markup, /src="data:text\/html/);
  assert.match(markup, /&lt;script&gt;alert\(&#39;literal&#39;\)&lt;\/script&gt;/);
  assert.equal(isSafeUrl("mailto:author@example.com"), true);
  assert.equal(isSafeUrl("javascript:alert(1)"), false);
  assert.equal(isSafeUrl("//untrusted.example/path"), false);
  assert.equal(isSafeUrl("\\\\untrusted.example\\path"), false);
  assert.equal(renderInline("`<literal>`"), "<code>&lt;literal&gt;</code>");
});

test("keeps diagram fences distinct from language-labelled code fences", () => {
  const markup = renderMarkdown([
    "```text",
    "diagram",
    "```",
    "",
    "```diagram",
      "type: flowchart",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "edges:",
    "```"
  ].join("\n"));

  assert.match(markup, /<pre><code class="language-text">diagram<\/code><\/pre>/);
  assert.match(markup, /<figure class="docdiagram"/);
});

test("renders diagram references in reading order and omits their later definitions", () => {
  const markup = renderMarkdown([
    "# Payments",
    "",
    "The flow appears here.",
    "",
    ":::diagram { id=payments-flowchart }",
    "",
    "## Next section",
    "",
    "```diagram",
    "type: flowchart",
    "id: payments-flowchart",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "edges:",
    "```"
  ].join("\n"));

  assert.equal([...markup.matchAll(/<figure class="docdiagram"/g)].length, 1);
  assert.ok(markup.indexOf('<figure class="docdiagram"') < markup.indexOf('<h2 id="next-section">Next section</h2>'));
});

test("reports missing, duplicate, and repeated diagram references", () => {
  const missing = renderMarkdown(":::diagram { id=missing }");
  const repeated = renderMarkdown([
    ":::diagram { id=flow }",
    ":::diagram { id=flow }",
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```"
  ].join("\n"));
  const duplicate = renderMarkdown([
    ":::diagram { id=flow }",
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```",
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```"
  ].join("\n"));

  assert.match(missing, /Diagram "missing" could not be found/);
  assert.match(repeated, /Diagram "flow" is referenced more than once/);
  assert.match(duplicate, /Diagram "flow" has multiple definitions/);
});

test("does not treat diagram references in fenced code as real references", () => {
  const markup = renderMarkdown([
    "```text",
    ":::diagram { id=flow }",
    "```",
    "",
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```"
  ].join("\n"));

  assert.match(markup, /<pre><code class="language-text">:::diagram \{ id=flow \}<\/code><\/pre>/);
  assert.equal([...markup.matchAll(/<figure class="docdiagram"/g)].length, 1);
});

test("a void directive needs no closer and tolerates a stray one", () => {
  const definition = [
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```"
  ];
  const withoutCloser = renderMarkdown([":::diagram { id=flow }", "", ...definition].join("\n"));
  const withStrayCloser = renderMarkdown([":::diagram { id=flow }", ":::", "", ...definition].join("\n"));

  assert.equal([...withStrayCloser.matchAll(/<figure class="docdiagram"/g)].length, 1);
  assert.doesNotMatch(withStrayCloser, /docdiagram-literal-source/);
  assert.equal(withStrayCloser, withoutCloser);
});

test("a void directive inside a container does not consume the container's closer", () => {
  const markup = renderMarkdown([
    ":::panel { title=Flow }",
    ":::diagram { id=flow }",
    ":::",
    "",
    "After the panel.",
    "",
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```"
  ].join("\n"));

  assert.match(markup, /<section class="docdiagram-component docdiagram-panel">/);
  assert.match(markup, /<\/section><p>After the panel\.<\/p>/);
  assert.equal([...markup.matchAll(/<figure class="docdiagram"/g)].length, 1);
});

test("a diagram directive with unknown attributes stays literal source", () => {
  const markup = renderMarkdown([
    ":::diagram { id=flow depth=3 }",
    "",
    "```diagram",
    "type: flowchart",
    "id: flow",
    "canvas:",
    "nodes:",
    "edges:",
    "```"
  ].join("\n"));

  assert.match(markup, /<pre class="docdiagram-literal-source">/);
});

test("resolves diagram references across block quotes", () => {
  const markup = renderMarkdown([
    ":::diagram { id=flow }",
    "",
    "> ```diagram",
    "> type: flowchart",
    "> id: flow",
    "> canvas:",
    "> nodes:",
    "> edges:",
    "> ```"
  ].join("\n"));

  assert.equal([...markup.matchAll(/<figure class="docdiagram"/g)].length, 1);
  assert.doesNotMatch(markup, /could not be found/);
});

test("shares diagram indices with diagrams nested in block quotes", () => {
  const diagram = [
    "```diagram",
      "type: flowchart",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "edges:",
    "```"
  ];
  const source = [
    ...diagram,
    "",
    ...diagram.map((line) => `> ${line}`),
    "",
    ...diagram
  ].join("\n");
  const indices = [...renderMarkdown(source).matchAll(/data-diagram-index="(\d+)"/g)]
    .map((match) => match[1]);

  assert.deepEqual([...new Set(indices)], ["0", "1", "2"]);
});

test("renders nested formatting components and responsive grid layouts", () => {
  const markup = renderMarkdown([
    ':::grid { columns="2fr 1fr" }',
    ':::panel { title="Primary" palette=accent }',
    "Primary **Markdown** content.",
    "::: (panel)",
    ":::stack",
    ':::callout { kind=warning title="Review required" palette=highlight }',
    "Confirm the _operational_ assumptions.",
    "::: (callout)",
    ':::panel { title="Supporting detail" fill=#ffffff stroke=#111827 text=#17202a }',
    "Supporting content.",
    ":::",
    "::: (stack)",
    "::: (grid)"
  ].join("\n"));

  assert.match(markup, /class="docdiagram-grid" style="--docdiagram-grid-columns:minmax\(0, 2fr\) minmax\(0, 1fr\)"/);
  assert.match(markup, /class="docdiagram-component docdiagram-panel docdiagram-component-styled" style="[^"]*--docdiagram-component-fill:#BFDBFE;--docdiagram-component-stroke:#2563EB;--docdiagram-component-text:#1E3A8A/);
  assert.match(markup, /class="docdiagram-stack"/);
  assert.match(markup, /<aside class="docdiagram-component docdiagram-component-styled docdiagram-callout docdiagram-callout-warning".*aria-label="Review required callout">/);
  assert.match(markup, /<div class="docdiagram-callout-kind">warning<\/div>/);
  assert.match(markup, /Primary <strong>Markdown<\/strong> content\./);
  assert.match(markup, /Confirm the <em>operational<\/em> assumptions\./);
  assert.match(markup, /--docdiagram-component-fill:#ffffff;--docdiagram-component-stroke:#111827;--docdiagram-component-text:#17202a/);
});

test("renders the documented formatting extension fixture", () => {
  const source = fs.readFileSync(
    path.resolve(__dirname, "fixtures", "markdown", "formatting-extensions.md"),
    "utf8"
  );
  const document = resolveDocument(source);
  const markup = renderMarkdown(document.content);

  assert.match(markup, /class="docdiagram-grid".*repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(markup, /class="docdiagram-component docdiagram-component-styled docdiagram-callout docdiagram-callout-success"/);
  assert.match(markup, /class="docdiagram-grid".*minmax\(0, 2fr\) minmax\(0, 1fr\)/);
  assert.match(markup, /class="docdiagram-stack"/);
});

test("keeps malformed and unsupported formatting directives readable", () => {
  const markup = renderMarkdown([
    ":::panel { title=Unclosed }",
    "This remains readable.",
    "",
    ':::grid { columns=4 }',
    ":::panel",
    "Content",
    ":::"
  ].join("\n"));

  assert.match(markup, /<pre class="docdiagram-literal-source"><code>:::panel \{ title=Unclosed \}<\/code><\/pre>/);
  assert.match(markup, /This remains readable\./);
  assert.match(markup, /<pre class="docdiagram-literal-source"><code>:::grid \{ columns=4 \}<\/code><\/pre>/);
});

test("does not treat directive-looking fenced code as nested components", () => {
  const markup = renderMarkdown([
    ":::panel",
    "```markdown",
    ":::panel",
    "```",
    ":::"
  ].join("\n"));

  assert.match(markup, /<section class="docdiagram-component docdiagram-panel"><pre><code class="language-markdown">:::panel<\/code><\/pre><\/section>/);
});

test("marks explicitly styled components so their palette takes precedence over document theme styles", () => {
  const markup = renderMarkdown([
    ':::section { palette=accent }',
    "[Reference](https://example.com), `code`, and a table header.",
    "",
    "| Name | Value |",
    "| --- | --- |",
    "| One | Two |",
    "",
    "> Quoted content.",
    ":::"
  ].join("\n"));

  assert.match(markup, /class="docdiagram-component docdiagram-section docdiagram-component-styled"/);
  assert.match(markup, /--docdiagram-component-fill:#BFDBFE;--docdiagram-component-stroke:#2563EB;--docdiagram-component-text:#1E3A8A/);
  assert.match(runtime, /docdiagram-section:not\(\.docdiagram-component-styled\)/);
  assert.match(runtime, /\.docdiagram-component pre,[\s\S]*background: transparent/);
  assert.match(runtime, /\.docdiagram-component blockquote \{[\s\S]*color: inherit/);
});

