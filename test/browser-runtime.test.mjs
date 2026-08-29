import { assert, fs, path, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;
const runtime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");


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

function printRules() {
  const start = runtime.indexOf("@media print");
  assert.notEqual(start, -1, "the bundle carries a print stylesheet");
  return runtime.slice(start, start + 2600);
}

test("the document menu offers printing the whole document", () => {
  assert.match(runtime, /class="docdiagram-print-document">Print \/ Save as PDF</);
  // The diagram-level action stays, so a single diagram can still be printed on its own.
  assert.match(runtime, /class="docdiagram-print-diagram"/);
});

test("printing hides the editing chrome, which is not part of the document", () => {
  const rules = printRules();

  for (const chrome of [
    "docdiagram-toolbar",
    "docdiagram-source-tray",
    "docdiagram-diagram-toolbar",
    "docdiagram-inspector"
  ]) {
    assert.ok(rules.includes(chrome), `${chrome} is hidden when printing`);
  }
});

test("a printed diagram frame becomes its own height with the camera reset", () => {
  const rules = printRules();

  // On screen the frame is a fixed-height viewport that scrolls, zooms and pans. On paper there is
  // nothing to scroll, so a pan would otherwise print as a cropped diagram.
  assert.match(rules, /height: auto !important/);
  assert.match(rules, /overflow: visible !important/);
  assert.match(rules, /transform: none !important/);
});

test("printing keeps headings with their content and never splits a panel or diagram", () => {
  const rules = printRules();

  assert.match(rules, /break-after: avoid/, "a heading is not stranded at the foot of a page");
  assert.match(rules, /break-inside: avoid/, "a panel, diagram, table or code block stays whole");
  assert.match(rules, /orphans: 3/);
  assert.match(rules, /widows: 3/);
});

test("printing asks for colour, because palettes and highlighting carry meaning", () => {
  assert.match(printRules(), /print-color-adjust: exact !important/);
});

test("a grid stacks when printed, since its columns are a screen-width device", () => {
  assert.match(printRules(), /docdiagram-grid \{\s*display: block !important/);
});

