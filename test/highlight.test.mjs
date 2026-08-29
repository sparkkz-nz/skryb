import { assert, core, fs, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;

const {
  renderMarkdown,
  highlightCode,
  getHighlightLanguage,
  isHighlightableLanguage
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

function tokenTypes(html) {
  const types = [];
  for (const match of html.matchAll(/docdiagram-token-(\w+)/g)) {
    if (!types.includes(match[1])) {
      types.push(match[1]);
    }
  }
  return types.sort();
}

function unhighlight(html) {
  return html
    .replace(/<span class="docdiagram-token-\w+">/g, "")
    .replace(/<\/span>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

test("highlighting never changes the code, only how it is presented", () => {
  const samples = [
    ["typescript", "// note\nconst total: number = 1; // trailing\nexport function run(name: string) { return `hi ${name}`; }"],
    ["python", "# entry\ndef run(name: str) -> None:\n    total = 0x1F\n    print(f\"hi {name}\", True, None)"],
    ["json", "{ \"name\": \"skryb\", \"count\": 3, \"ok\": true, \"extra\": null }"],
    ["yaml", "# config\nname: skryb\nnested:\n  - id: first\n    label: \"Quoted\""],
    ["sql", "SELECT id FROM users WHERE active = TRUE -- only active\nORDER BY id;"],
    ["bash", "# deploy\nexport PATH=\"$HOME/bin:$PATH\"\nif [ -f \"$file\" ]; then echo found; fi"],
    ["html", "<!doctype html>\n<a href=\"x.html\" class=\"link\">Text</a><!-- note -->"],
    ["css", "/* theme */\n.card { color: #1f2937; margin: 1.5rem 0; }"],
    ["diff", "--- a/file\n+++ b/file\n@@ -1 +1 @@\n-old\n+new"]
  ];

  for (const [language, code] of samples) {
    const highlighted = highlightCode(code, language);
    assert.equal(unhighlight(highlighted), code, `${language} round-trips through highlighting`);
    assert.ok(tokenTypes(highlighted).length, `${language} recognises something`);
  }
});

test("each language recognises the tokens that matter for it", () => {
  assert.deepEqual(
    tokenTypes(highlightCode("// note\nconst x = 1;", "typescript")),
    ["comment", "keyword", "number"]
  );
  assert.deepEqual(
    tokenTypes(highlightCode("{ \"key\": \"value\" }", "json")),
    ["attribute", "string"],
    "a JSON key is distinguished from a string value"
  );
  assert.deepEqual(tokenTypes(highlightCode("name: skryb", "yaml")), ["attribute"]);
  assert.deepEqual(tokenTypes(highlightCode("-gone\n+added", "diff")), ["deleted", "inserted"]);
});

test("markup inside code is escaped, never rendered", () => {
  const highlighted = highlightCode("const a = \"<img src=x onerror=alert(1)>\";", "js");

  assert.doesNotMatch(highlighted, /<img/, "the tag is not emitted as markup");
  assert.match(highlighted, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(highlighted, /<span class="docdiagram-token-string">/);
});

test("an unknown or absent language renders as plain escaped text", () => {
  assert.equal(highlightCode("<b>x</b>", "brainfuck"), "&lt;b&gt;x&lt;/b&gt;");
  assert.equal(highlightCode("<b>x</b>", undefined), "&lt;b&gt;x&lt;/b&gt;");
  assert.equal(highlightCode("plain text", ""), "plain text");
});

test("language names are matched case-insensitively and through their common aliases", () => {
  assert.equal(getHighlightLanguage("TypeScript"), "clike");
  assert.equal(getHighlightLanguage("ts"), "clike");
  assert.equal(getHighlightLanguage("yml"), "yaml");
  assert.equal(getHighlightLanguage("sh"), "shell");
  assert.equal(getHighlightLanguage("svg"), "markup");
  assert.equal(getHighlightLanguage("nonesuch"), null);
  assert.ok(isHighlightableLanguage("python"));
  assert.ok(!isHighlightableLanguage("nonesuch"));
});

test("indentation is left outside a token, so it is never coloured with it", () => {
  const highlighted = highlightCode("nested:\n  key: value", "yaml");

  assert.match(highlighted, /\n {2}<span class="docdiagram-token-attribute">key<\/span>/);
});

test("a fenced block keeps its language class and gains highlighting", () => {
  const markup = renderMarkdown(["```python", "x = None  # note", "```"].join("\n"));

  assert.match(markup, /<pre><code class="language-python">/);
  assert.match(markup, /<span class="docdiagram-token-literal">None<\/span>/);
  assert.match(markup, /<span class="docdiagram-token-comment"># note<\/span>/);
});

test("a diagram fence is still a diagram, not a highlighted code block", () => {
  const markup = renderMarkdown(["```diagram", "type: flowchart", "canvas: auto", "nodes:", "edges:", "```"].join("\n"));

  assert.match(markup, /<figure class="docdiagram"/);
  assert.doesNotMatch(markup, /docdiagram-token-/);
});

test("an unterminated string or comment cannot swallow the rest of the block", () => {
  const highlighted = highlightCode("const a = \"unterminated;\nconst b = 2;", "js");

  assert.equal(unhighlight(highlighted), "const a = \"unterminated;\nconst b = 2;");
  assert.match(highlighted, /<span class="docdiagram-token-number">2<\/span>/, "the following line is still highlighted");
});

