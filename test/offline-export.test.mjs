import { assert, core, fs, path, test, testDirectory } from "./support/core-context.mjs";
import vm from "node:vm";

const __dirname = testDirectory;
const runtime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");
const selfPackagedRuntime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime-self-packaged.js"), "utf8");
const context = vm.createContext({ document: { querySelector: () => null }, globalThis: {} });
const selfPackagedContext = vm.createContext({ document: { querySelector: () => null }, globalThis: {} });
vm.runInContext(runtime, context, { filename: "dist/skryb-runtime.js" });
vm.runInContext(selfPackagedRuntime, selfPackagedContext, { filename: "dist/skryb-runtime-self-packaged.js" });

const {
  bakeDocumentSource,
  spliceBakedFences,
  lintDocument,
  embedRuntimeInDocumentHtml,
  fetchRuntimeSource,
  getPortableRuntimeUrl
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

test("creates a portable offline document with the fetched runtime at the end of the body", async () => {
  const runtimeSource = await fetchRuntimeSource("https://example.test/skryb-runtime.js", async () => ({
    ok: true,
    status: 200,
    text: async () => "globalThis.portableRuntime = true;"
  }));
  const exportedDocument = embedRuntimeInDocumentHtml(
    "<html><head></head><body><main id=\"rendered-document\"></main><script src=\"https://sparkkz-nz.github.io/skryb/releases/v1.2.0/skryb-runtime.js\" data-docdiagram-offline-runtime-placeholder defer></script></body></html>",
    runtimeSource,
    "https://sparkkz-nz.github.io/skryb/releases/v1.2.0/skryb-runtime.js"
  );

  assert.doesNotMatch(exportedDocument, /src="https:\/\/sparkkz-nz\.github\.io\/skryb\/releases\/v1\.2\.0\/skryb-runtime\.js"/);
  assert.match(exportedDocument, /data-docdiagram-runtime-url="https:\/\/sparkkz-nz\.github\.io\/skryb\/releases\/v1\.2\.0\/skryb-runtime\.js"/);
  assert.match(exportedDocument, new RegExp(`<script data-docdiagram-runtime="embedded" data-docdiagram-runtime-url="https://sparkkz-nz.github.io/skryb/releases/v1.2.0/skryb-runtime.js">\\n${runtimeSource}\\n</script>\\n</body>`));
});

test("hosted runtime exposes only the compatibility core surface", () => {
  assert.equal(context.globalThis.DocDiagramRuntimeSource, undefined);
  assert.deepEqual(
    Object.keys(context.globalThis.DocDiagramCore).sort(),
    ["bakeDocumentSource", "lintDocument", "spliceBakedFences"]
  );
});

test("self-packaged runtime carries the hosted source for local offline export", () => {
  assert.equal(selfPackagedContext.globalThis.DocDiagramRuntimeSource, runtime);
  assert.equal(typeof selfPackagedContext.globalThis.DocDiagramCore, "object");
});

test("local file examples select the self-packaged runtime", () => {
  for (const fixture of ["file-runtime.html", "diagram-file.html", "seq-diag-file.html"]) {
    const html = fs.readFileSync(path.resolve(__dirname, "..", "examples", fixture), "utf8");
    assert.match(html, /<script src="\.\.\/dist\/skryb-runtime-self-packaged\.js" defer(?:="")?><\/script>/);
  }
});

test("portable document exports remove page-level runtime theme state", () => {
  assert.ok((runtime.match(/\.removeAttribute\("data-docdiagram-theme"\)/g) || []).length >= 2);
  assert.match(runtime, /\.style\.removeProperty\("--docdiagram-page-background"\)/);
  assert.match(runtime, /\.style\.removeProperty\("--docdiagram-page-text"\)/);
});

test("standalone diagram SVG exports embed the runtime font stack", () => {
  assert.match(
    runtime,
    /svg\{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif\}/
  );
  assert.match(runtime, /docdiagram-export-background/);
});

test("uses the hosted runtime for a portable Save As when local runtime paths are unavailable", () => {
  assert.equal(
    getPortableRuntimeUrl("./dist/skryb-runtime.js"),
    "https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js"
  );
  assert.equal(
    getPortableRuntimeUrl("https://sparkkz-nz.github.io/skryb/releases/v1.2.0/skryb-runtime.js"),
    "https://sparkkz-nz.github.io/skryb/releases/v1.2.0/skryb-runtime.js"
  );
});

test("hosted and self-packaged runtimes produce the same executable offline document", () => {
  const shell = "<html><body><script data-docdiagram-offline-runtime-placeholder></script></body></html>";
  const hostedExport = embedRuntimeInDocumentHtml(shell, runtime);
  const exportedDocument = embedRuntimeInDocumentHtml(
    shell,
    selfPackagedContext.globalThis.DocDiagramRuntimeSource
  );
  assert.equal(exportedDocument, hostedExport);
  const embeddedRuntime = exportedDocument.match(/<script data-docdiagram-runtime="embedded">\n([\s\S]*?)\n<\/script>/);
  const offlineContext = vm.createContext({
    document: { querySelector: () => null },
    globalThis: {}
  });

  assert.ok(embeddedRuntime, "Expected exported document to contain an embedded runtime");
  assert.doesNotThrow(() => vm.runInContext(embeddedRuntime[1], offlineContext));
  assert.equal(typeof offlineContext.globalThis.DocDiagramCore, "object");
});

test("does not export an offline document when runtime fetching fails", async () => {
  await assert.rejects(
    () => fetchRuntimeSource("https://example.test/skryb-runtime.js", async () => ({
      ok: false,
      status: 503,
      text: async () => ""
    })),
    /Could not fetch the Skryb runtime \(503\)/
  );
});

test("reopens an exported offline document without fetching the runtime", () => {
  const runtimeSource = "globalThis.portableRuntime = true;";
  const exportedDocument = embedRuntimeInDocumentHtml(
    "<html><body><script src=\"https://example.test/skryb-runtime.js\" data-docdiagram-offline-runtime-placeholder></script></body></html>",
    runtimeSource
  );
  const embeddedRuntime = exportedDocument.match(/<script data-docdiagram-runtime="embedded">\n([\s\S]*?)\n<\/script>/);
  const offlineContext = vm.createContext({ globalThis: {} });

  assert.ok(embeddedRuntime, "Expected exported document to contain an embedded runtime");
  vm.runInContext(embeddedRuntime[1], offlineContext);
  assert.equal(offlineContext.globalThis.portableRuntime, true);
});

test("keeps runtime strings containing closing script tags executable offline", () => {
  const runtimeSource = 'globalThis.runtimeSnippet = "</script>"; globalThis.portableRuntime = true;';
  const exportedDocument = embedRuntimeInDocumentHtml(
    "<html><body><script src=\"https://example.test/skryb-runtime.js\" data-docdiagram-offline-runtime-placeholder></script></body></html>",
    runtimeSource
  );
  const embeddedRuntime = exportedDocument.match(/<script data-docdiagram-runtime="embedded">\n([\s\S]*?)\n<\/script>/);
  const offlineContext = vm.createContext({ globalThis: {} });

  assert.ok(embeddedRuntime, "Expected exported document to contain an embedded runtime");
  assert.doesNotMatch(embeddedRuntime[1], /<\/script/i);
  vm.runInContext(embeddedRuntime[1], offlineContext);
  assert.equal(offlineContext.globalThis.portableRuntime, true);
});

test("preserves dollar sequences while embedding the runtime before the body close tag", () => {
  const runtimeSource = "globalThis.runtimeMatch = '$&';";
  const exportedDocument = embedRuntimeInDocumentHtml(
    "<html><body><script data-docdiagram-offline-runtime-placeholder></script></body></html>",
    runtimeSource
  );
  const embeddedRuntime = exportedDocument.match(/<script data-docdiagram-runtime="embedded">\n([\s\S]*?)\n<\/script>/);
  const offlineContext = vm.createContext({ globalThis: {} });

  assert.ok(embeddedRuntime, "Expected exported document to contain an embedded runtime");
  assert.equal(embeddedRuntime[1], runtimeSource);
  vm.runInContext(embeddedRuntime[1], offlineContext);
  assert.equal(offlineContext.globalThis.runtimeMatch, "$&");
});

