import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { buildSync } from "esbuild";

const bundle = buildSync({
  absWorkingDir: fileURLToPath(new URL("..", import.meta.url)),
  stdin: {
    contents: `
      export * from "./src/editor/inspector";
      export * from "./src/editor/document-export-service";
      export { parseDiagram } from "./src/core/diagrams/parser";
      export { serializeDiagram } from "./src/core/diagrams/serializer";
    `,
    resolveDir: fileURLToPath(new URL("..", import.meta.url))
  },
  bundle: true,
  write: false,
  format: "iife",
  globalName: "navigationTest"
}).outputFiles[0].text;

const source = `type: flowchart
id: overview
nodes:
  - id: parent
    label: Parent
    shape: rounded-rectangle
    href: "#detail"
    position: { x: 20, y: 20 }
    size: { width: 400, height: 300 }
    children:
      - id: child
        label: Child
        shape: rounded-rectangle
        href: "#overview"
        position: { x: 20, y: 60 }
        children:
          - id: grandchild
            label: Grandchild
            shape: rounded-rectangle
            href: "#section"
            position: { x: 20, y: 40 }
  - id: encoded
    label: Encoded self reference
    shape: rounded-rectangle
    href: "#%6fverview"
    position: { x: 500, y: 20 }
edges: []`;

const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");

class Element {
  constructor(tagName, attributes = {}, text = "") {
    this.tagName = tagName;
    this.attrs = { ...attributes };
    this.text = text;
    this.childNodes = [];
    this.listeners = new Map();
    this.style = { removeProperty() {} };
    this.classList = {
      remove: (...names) => {
        this.attrs.class = (this.attrs.class || "").split(" ").filter((name) => !names.includes(name)).join(" ");
      }
    };
    this.content = tagName === "template" ? new Element("fragment") : null;
    this.value = "";
  }
  get attributes() { return Object.entries(this.attrs).map(([name, value]) => ({ name, value })); }
  get dataset() { return {}; }
  get textContent() { return this.text; }
  set textContent(value) { this.text = value; }
  get firstChild() { return this.childNodes[0] || null; }
  get nextSibling() { return this.parent?.childNodes[this.parent.childNodes.indexOf(this) + 1] || null; }
  get outerHTML() {
    if (this.tagName === "text") return escape(this.text);
    const attributes = Object.entries(this.attrs).map(([name, value]) => ` ${name}="${escape(value)}"`).join("");
    const children = (this.content?.childNodes || this.childNodes).map((child) => child.outerHTML).join("");
    return `<${this.tagName}${attributes}>${escape(this.text)}${children}</${this.tagName}>`;
  }
  setAttribute(name, value) { this.attrs[name] = value; }
  getAttribute(name) { return this.attrs[name] ?? null; }
  removeAttribute(name) { delete this.attrs[name]; }
  append(...children) {
    for (const child of children) {
      child.parent = this;
      this.childNodes.push(child);
    }
  }
  replaceChildren(...children) { this.childNodes = []; this.append(...children); }
  remove() { this.parent?.childNodes.splice(this.parent.childNodes.indexOf(this), 1); }
  replaceWith(...children) {
    const parent = this.parent;
    parent.childNodes.splice(parent.childNodes.indexOf(this), 1, ...children);
    for (const child of children) child.parent = parent;
  }
  insertBefore(child, before) {
    child.parent = this;
    const index = before ? this.childNodes.indexOf(before) : this.childNodes.length;
    this.childNodes.splice(index, 0, child);
  }
  matches(selector) {
    const match = selector.match(/^([\w-]+)?(?:#([\w-]+))?(?:\.([\w-]+))?(?:\[([\w-]+)(?:="([^"]*)")?\])?$/);
    if (!match) return false;
    const [, tag, id, className, attr, value] = match;
    return (!tag || tag === this.tagName) &&
      (!id || id === this.attrs.id) &&
      (!className || (this.attrs.class || "").split(" ").includes(className)) &&
      (!attr || (Object.hasOwn(this.attrs, attr) && (value === undefined || this.attrs[attr] === value)));
  }
  querySelectorAll(selector) {
    const selectors = selector.split(",").map((part) => part.trim());
    return this.childNodes.flatMap((child) => [
      ...(selectors.some((part) => child.matches(part)) ? [child] : []),
      ...child.querySelectorAll(selector)
    ]);
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  closest(selector) { return this.matches(selector) ? this : this.parent?.closest(selector) || null; }
  cloneNode() {
    const copy = new Element(this.tagName, this.attrs, this.text);
    copy.ownerDocument = this.ownerDocument;
    copy.append(...this.childNodes.map((child) => child.cloneNode(true)));
    if (this.content) copy.content = this.content.cloneNode(true);
    return copy;
  }
  addEventListener(name, listener) { this.listeners.set(name, listener); }
  dispatch(name) { this.listeners.get(name)?.({ currentTarget: this }); }
  focus() { this.focused = true; }
}

function harness() {
  const alerts = [];
  const downloads = [];
  const blobs = new Map();
  const document = {
    title: "Navigation example",
    createTextNode: (text) => new Element("text", {}, text),
    createElementNS: (_, tag) => new Element(tag),
    createElement: (tag) => {
      const element = new Element(tag);
      element.click = () => downloads.push({ name: element.download, blob: blobs.get(element.href) });
      return element;
    }
  };
  const root = new Element("html");
  const body = new Element("body");
  const title = new Element("title", {}, document.title);
  const template = new Element("template", { id: "source" });
  const output = new Element("main", { id: "rendered-document", "data-editing-shortcuts-bound": "true" });
  const script = new Element("script", { src: "https://example.test/skryb-runtime.js" });
  script.src = script.attrs.src;
  template.content.append(document.createTextNode(source));
  root.append(title, body);
  body.append(template, output, script);
  document.documentElement = root;
  document.body = body;
  root.ownerDocument = document;
  document.baseURI = "https://example.test/document.html";
  class ObjectURL extends URL {
    static createObjectURL(blob) {
      const url = `blob:test-${blobs.size}`;
      blobs.set(url, blob);
      return url;
    }
    static revokeObjectURL() {}
  }
  const context = vm.createContext({
    document,
    URL: ObjectURL,
    Blob,
    console,
    alert: (message) => alerts.push(message),
    setTimeout: () => 1,
    clearTimeout() {},
    getComputedStyle: () => ({ backgroundColor: "rgb(255, 255, 255)" }),
    DocDiagramRuntimeSource: "globalThis.offlineNavigationRuntime = true;"
  });
  vm.runInContext(bundle, context);
  const api = context.navigationTest;
  const diagram = api.parseDiagram(source);
  const state = { diagramModels: [diagram], documentThemeSetting: "light", documentColorScheme: "classic" };
  const session = { source: `# Overview\n\n\`\`\`diagram\n${source}\n\`\`\`\n\n# Detail\n\n[Return](#overview)`, markSaved() { this.saved = true; } };
  const exporter = new api.DocumentExportService(session, state, output, null);
  return { api, state, session, exporter, document, output, downloads, alerts };
}

function inspector(h, nodeId = "parent") {
  const destination = new Element("input");
  const container = {
    querySelector: (selector) => selector === ".docdiagram-inspector-destination" ? destination : null,
    querySelectorAll: () => []
  };
  let renders = 0;
  let persists = 0;
  h.api.wireNodeInspector({
    state: h.state,
    persistDiagramModels() {
      persists++;
      h.session.source = h.api.serializeDiagram(h.state.diagramModels[0]);
    },
    renderDocument() { renders++; return true; }
  }, container, 0, nodeId);
  return { destination, counts: () => [persists, renders] };
}

function downloadedSource(html) {
  const match = html.match(/<template id="source">([\s\S]*?)<\/template>/);
  assert.ok(match, "Downloaded HTML must contain canonical source");
  return match[1].replaceAll("&lt;", "<").replaceAll("&quot;", '"').replaceAll("&amp;", "&");
}

test("node inspector displays an escaped Destination field", () => {
  const h = harness();
  const diagram = h.state.diagramModels[0];
  const markup = h.api.buildNodeInspectorFields(diagram, diagram.nodes[0]);
  assert.match(markup, />Destination<input type="text" class="docdiagram-inspector-destination" value="#detail"/);
  assert.match(h.api.buildNodeInspectorFields(diagram, { ...diagram.nodes[0], href: '#"><svg>' }), /value="#&quot;&gt;&lt;svg&gt;"/);
});

test("node inspector sets, changes, and removes nested destinations in canonical source", () => {
  const h = harness();
  const { destination, counts } = inspector(h, "child");
  for (const href of ["#new-section", "#%6fverview", ""]) {
    destination.value = href;
    destination.dispatch("change");
    const child = h.api.parseDiagram(h.session.source).nodes[0].children[0];
    assert.equal(child.href, href || undefined);
  }
  assert.deepEqual(counts(), [3, 3]);
  assert.equal(Object.hasOwn(h.state.diagramModels[0].nodes[0].children[0], "href"), false);
});

test("invalid inspector destinations report errors without committing invalid model or source", () => {
  const h = harness();
  const { destination, counts } = inspector(h);
  const original = h.session.source;
  for (const href of ["#", "https://example.test/detail", "javascript:alert(1)", "detail", "#bad%ZZ", " #detail", "#has space"]) {
    destination.value = href;
    destination.dispatch("change");
    assert.equal(h.session.source, original);
    assert.equal(h.state.diagramModels[0].nodes[0].href, "#detail");
    assert.equal(destination.getAttribute("aria-invalid"), "true");
    assert.match(h.alerts.at(-1), /same-document fragment/);
    assert.equal(destination.focused, true);
  }
  assert.deepEqual(counts(), [0, 0]);
  destination.value = "#fixed";
  destination.dispatch("change");
  assert.equal(destination.getAttribute("aria-invalid"), null);
  assert.deepEqual(counts(), [1, 1]);
});

test("isolated Skryb downloads keep only self destinations recursively without mutating the original", async () => {
  const h = harness();
  const original = JSON.stringify(h.state.diagramModels);
  const originalSource = h.session.source;
  h.exporter.downloadDiagramDocument(0);
  const html = await h.downloads[0].blob.text();
  const saved = downloadedSource(html);
  const diagram = h.api.parseDiagram(saved.match(/```diagram\n([\s\S]*?)```/)[1]);
  assert.equal(diagram.nodes[0].href, undefined);
  assert.equal(diagram.nodes[0].children[0].href, "#overview");
  assert.equal(diagram.nodes[0].children[0].children[0].href, undefined);
  assert.equal(diagram.nodes[1].href, "#%6fverview");
  assert.equal(JSON.stringify(h.state.diagramModels), original);
  assert.equal(h.session.source, originalSource);
  assert.match(saved, /doctype: diagram/);
  assert.equal(h.downloads[0].name, "overview.html");
});

test("isolated diagrams without an authored id retain no destinations", async () => {
  const h = harness();
  delete h.state.diagramModels[0].id;
  h.exporter.downloadDiagramDocument(0);
  assert.doesNotMatch(downloadedSource(await h.downloads[0].blob.text()), /\bhref:/);
});

test("standalone SVG unwraps all node links and removes navigation decoration without changing live SVG", () => {
  const h = harness();
  const figure = new Element("figure", { class: "docdiagram", id: "overview" });
  const svg = new Element("svg", { role: "group", "aria-label": "Overview" });
  figure.append(svg);
  for (const [id, href] of [["parent", "#detail"], ["child", "#overview"]]) {
    const link = new Element("a", { class: "docdiagram-node-link", href });
    const node = new Element("g", { class: "docdiagram-node docdiagram-node-selected", "data-node-id": id });
    node.append(new Element("rect", { class: "node-body", width: "100", height: "60" }));
    for (const suffix of ["hit", "focus", "indicator"]) {
      node.append(new Element("rect", { class: `docdiagram-node-link-${suffix}` }));
    }
    link.append(node);
    svg.append(link);
  }
  const original = svg.outerHTML;
  h.output.querySelector = () => svg;
  const copy = h.exporter.getStandaloneDiagramSvg(0);
  assert.equal(svg.outerHTML, original);
  assert.equal(copy.querySelectorAll("a").length, 0);
  assert.equal(copy.querySelectorAll("g.docdiagram-node").length, 2);
  assert.equal(copy.querySelectorAll(".node-body").length, 2);
  assert.doesNotMatch(copy.outerHTML, /docdiagram-node-link|href=|docdiagram-node-selected/);
  assert.equal(copy.getAttribute("role"), "img");
  assert.equal(copy.getAttribute("aria-label"), "Overview");
  assert.equal(copy.querySelectorAll(".docdiagram-export-background").length, 1);
});

test("full Save As and Offline downloaded HTML preserve all canonical navigation links", async () => {
  const h = harness();
  const original = h.session.source;
  h.output.setAttribute("tabindex", "-1");
  h.exporter.downloadDocument();
  await h.exporter.downloadOfflineDocument();
  assert.equal(h.downloads.length, 2);
  for (const download of h.downloads) {
    const html = await download.blob.text();
    assert.equal(downloadedSource(html), original);
    assert.doesNotMatch(html, /tabindex=/);
  }
  const offline = await h.downloads[1].blob.text();
  assert.match(offline, /data-docdiagram-runtime="embedded"/);
  assert.doesNotMatch(offline, /<script src=/);
  const runtime = offline.match(/<script data-docdiagram-runtime="embedded"[^>]*>\n([\s\S]*?)\n<\/script>/)[1];
  const reopened = vm.createContext({});
  vm.runInContext(runtime, reopened);
  assert.equal(reopened.offlineNavigationRuntime, true);
  assert.equal(h.session.saved, true);
  assert.equal(h.session.source, original);
  assert.equal(h.output.getAttribute("tabindex"), "-1");
});
