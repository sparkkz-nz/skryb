import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { buildSync } from "esbuild";

const root = fileURLToPath(new URL("..", import.meta.url));
const code = buildSync({
  absWorkingDir: root,
  stdin: {
    resolveDir: root,
    contents: `
      export * from "./src/editor/inspector";
      export * from "./src/editor/document-export-service";
      export * from "./src/core/diagrams/annotations";
      export { parseDiagram } from "./src/core/diagrams/parser";
      export { serializeDiagram } from "./src/core/diagrams/serializer";
      export { renderSequenceDiagram } from "./src/renderers/sequence";
    `
  },
  bundle: true, write: false, format: "iife", globalName: "annotationTest"
}).outputFiles[0].text;

function harness() {
  const alerts = [];
  const downloads = [];
  const blobs = new Map();
  class ObjectURL extends URL {
    static createObjectURL(blob) {
      const key = `blob:${blobs.size}`;
      blobs.set(key, blob);
      return key;
    }
    static revokeObjectURL() {}
  }
  const document = {
    title: "References",
    createElement: () => {
      const link = { click: () => downloads.push(blobs.get(link.href)) };
      return link;
    },
    createElementNS: (_, tag) => new Element(tag)
  };
  const context = vm.createContext({
    document, Blob, URL: ObjectURL,
    alert: (message) => alerts.push(message),
    getComputedStyle: () => ({ backgroundColor: "#fff" }),
    setTimeout: () => 1, clearTimeout() {}, console
  });
  vm.runInContext(code, context);
  const state = {
    documentTheme: "light", documentThemeSetting: "light", documentColorScheme: "classic",
    diagramModels: [], editingDiagramIndex: null, expandedDiagramIndex: null,
    diagramViewportHeights: new Map(), diagramZooms: new Map()
  };
  return { api: context.annotationTest, state, alerts, downloads };
}

function sequence() {
  return {
    type: "sequence", id: "messages",
    canvas: { width: 600, height: 560 },
    participants: [{ id: "a", label: "Client" }, { id: "b", label: "Service" }],
    messages: [
      { from: "a", to: "b", ref: 3 },
      { from: "b", to: "a", label: "First line\nSecond line", ref: { label: "Start", position: "se" } },
      { from: "b", to: "b", label: "Local work", ref: "123" }
    ]
  };
}

const render = (h, diagram) => h.api.renderSequenceDiagram(diagram, 0, h.state, () => "");
const badges = (markup) => [...markup.matchAll(/<g class="docdiagram-annotation-ref"[^>]*>[\s\S]*?<\/g>/g)].map(([badge]) => ({
  markup: badge,
  ...Object.fromEntries([...badge.matchAll(/\b(x|y|width|height)="(-?[\d.]+)"/g)].slice(0, 4).map(([, key, value]) => [key, Number(value)]))
}));
const viewBox = (markup) => markup.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number);

test("sequence references occupy one left gutter aligned with unlabeled, multiline and self-loop outgoing rows", () => {
  const h = harness();
  const diagram = sequence();
  const markup = render(h, diagram);
  const refs = badges(markup);
  assert.match(markup, /<svg[^>]+role="group"/);
  const rows = [...markup.matchAll(/class="docdiagram-sequence-message"[^>]*>\s*<path d="M [\d.]+ ([\d.]+)/g)].map(([, y]) => Number(y));
  assert.equal(refs.length, 3);
  assert.equal(rows.length, 3);
  refs.forEach((ref, index) => {
    assert.equal(ref.x, 12);
    assert.equal(ref.y + ref.height / 2, rows[index]);
    assert.doesNotMatch(ref.markup, /<a |href=/);
    assert.match(ref.markup, /font-family="Arial, sans-serif" font-size="14" font-weight="700"/);
  });
  assert.equal(refs[0].width, refs[0].height);
  assert.ok(refs[1].width > refs[1].height);
  assert.ok(refs[2].width > refs[2].height);
  const before = markup;
  diagram.messages[1].ref.position = "NW";
  assert.equal(render(h, diagram), before, "Sequence ref position must not affect layout");
});

test("sequence gutter and canvas include wide notes, group labels, participant sizes and message labels", () => {
  const h = harness();
  const diagram = sequence();
  diagram.canvas = { width: 80, height: 60 };
  diagram.participants[0].size = { width: 1100, height: 900 };
  diagram.participants[1].size = { width: 1400, height: 42 };
  diagram.messages[1].label = "Very wide message ".repeat(30);
  diagram.messages[1].ref = "A much longer annotation reference";
  diagram.notes = [{ at: "a", label: "Wide note", size: { width: 3000, height: 90 } }];
  diagram.groups = [{ from: 1, to: 3, label: "Wide group ".repeat(30) }];
  const markup = render(h, diagram);
  const [width, height] = viewBox(markup);
  const offset = Number(markup.match(/class="docdiagram-sequence-content" transform="translate\(([\d.]+) 0\)"/)[1]);
  const refs = badges(markup);
  const gutterRight = Math.max(...refs.map((ref) => ref.x + ref.width));
  const content = markup.split('<g class="docdiagram-sequence-content"')[1].split('<g class="docdiagram-annotation-ref"')[0];
  for (const rect of content.matchAll(/<rect x="(-?[\d.]+)" y="(-?[\d.]+)" width="([\d.]+)" height="([\d.]+)"/g)) {
    const [, x, y, itemWidth, itemHeight] = rect.map(Number);
    assert.ok(x + offset >= gutterRight + 19, `Content at ${x + offset} must not cover reference gutter`);
    assert.ok(x + offset + itemWidth <= width - 10, "Right edge must remain inside viewBox");
    assert.ok(y >= 0 && y + itemHeight <= height, "Vertical bounds must remain inside viewBox");
  }
  assert.ok(width > 3000);
  assert.ok(height >= 944);
});

test("sequence diagrams without refs keep their existing layout and markup", () => {
  const h = harness();
  const diagram = sequence();
  diagram.messages.forEach((message) => delete message.ref);
  const markup = render(h, diagram);
  assert.deepEqual(viewBox(markup), [600, 560]);
  assert.match(markup, /<svg[^>]+role="img"/);
  assert.doesNotMatch(markup, /docdiagram-annotation-ref|docdiagram-sequence-content|translate\(/);
  assert.match(markup, /<rect x="0" y="28" width="180"/);
  diagram.messages[0].ref = undefined;
  assert.equal(render(h, diagram), markup);
});

test("one-participant self messages and dark-scheme refs remain within the canvas", () => {
  const h = harness();
  h.state.documentTheme = "dark";
  h.state.documentColorScheme = "fire";
  const diagram = sequence();
  diagram.participants = [{ id: "a", label: "Worker", size: { width: 20, height: 42 } }];
  diagram.messages = [{ from: "a", to: "a", ref: 0 }];
  const markup = render(h, diagram);
  const ref = badges(markup)[0];
  const colors = h.api.getAnnotationColors("fire", "dark");
  assert.match(ref.markup, new RegExp(`fill="${colors.fill}"`));
  assert.match(ref.markup, new RegExp(`fill="${colors.text}"`));
  assert.ok(ref.y >= 0 && ref.y + ref.height < viewBox(markup)[1]);
});

class Field {
  constructor() { this.value = ""; this.listeners = new Map(); this.attributes = new Map(); }
  addEventListener(name, listener) { this.listeners.set(name, listener); }
  setAttribute(name, value) { this.attributes.set(name, value); }
  removeAttribute(name) { this.attributes.delete(name); }
  focus() { this.focused = true; }
  change(value) { this.value = value; this.listeners.get("change")?.({ currentTarget: this }); }
}

function editReference(kind) {
  const h = harness();
  const label = new Field();
  const position = new Field();
  const target = kind === "message" ? sequence().messages[0] : kind === "node"
    ? { id: "a", label: "A", shape: "rounded-rectangle", position: { x: 20, y: 20 } }
    : { source: "a", target: "a", sourceAnchor: "right", targetAnchor: "left" };
  const diagram = kind === "message" ? sequence() : {
    type: "flowchart", canvas: { width: 500, height: 500 },
    nodes: kind === "node" ? [target] : [{ id: "a", label: "A", shape: "rounded-rectangle", position: { x: 20, y: 20 } }],
    edges: kind === "edge" ? [target] : []
  };
  if (kind === "message") diagram.messages[0] = target;
  h.state.diagramModels = [diagram];
  h.state.selectedSequenceElement = { kind: "message", diagramIndex: 0, messageIndex: 0 };
  let source = h.api.serializeDiagram(diagram);
  let persists = 0;
  const host = {
    state: h.state, renderDocument: () => true,
    persistDiagramModels() { source = h.api.serializeDiagram(diagram); persists++; }
  };
  const container = {
    querySelector: (selector) => selector === ".docdiagram-inspector-reference" ? label
      : selector === ".docdiagram-inspector-reference-position" && kind !== "message" ? position : null,
    querySelectorAll: () => []
  };
  if (kind === "node") h.api.wireNodeInspector(host, container, 0, "a");
  else if (kind === "edge") h.api.wireEdgeInspector(host, container, 0, 0);
  else h.api.wireSequenceInspector(host, container, target);
  return { ...h, host, target, diagram, label, position, source: () => source, persists: () => persists };
}

test("sequence inspector clears message labels without clearing required participant and note labels", () => {
  for (const kind of ["message", "participant", "note"]) {
    const h = harness();
    const diagram = sequence();
    diagram.messages[0].label = "Existing label";
    diagram.participants[0].label = "Existing label";
    diagram.notes = [{ at: "a", after: 1, label: "Existing label" }];
    const element = kind === "message" ? diagram.messages[0]
      : kind === "participant" ? diagram.participants[0] : diagram.notes[0];
    h.state.diagramModels = [diagram];
    h.state.selectedSequenceElement = { kind, diagramIndex: 0, messageIndex: 0, participantId: "a", noteIndex: 0 };
    const field = new Field();
    let source;
    const host = {
      state: h.state, renderDocument: () => true,
      persistDiagramModels() { source = h.api.serializeDiagram(diagram); }
    };
    const container = {
      querySelector: (selector) => selector === ".docdiagram-sequence-inspector-label" ? field : null,
      querySelectorAll: () => []
    };
    h.api.wireSequenceInspector(host, container, element);
    field.change("  ");
    assert.equal(element.label, kind === "message" ? "" : "Existing label");
    const saved = h.api.parseDiagram(source);
    assert.equal(saved.messages[0].ref, 3);
    assert.equal(saved.messages[0].label, kind === "message" ? "" : "Existing label");
    field.change("Replacement label");
    assert.equal(element.label, "Replacement label");
  }
});

test("reference inspector propagates persistence and render failures without reporting invalid input", () => {
  for (const kind of ["node", "edge", "message"]) {
    for (const stage of ["persistDiagramModels", "renderDocument"]) {
      const h = editReference(kind);
      const error = new Error(`${stage} failed`);
      h.host[stage] = () => { throw error; };
      assert.throws(() => h.label.change("Start"), (caught) => caught === error);
      assert.equal(h.alerts.length, 0);
      assert.equal(h.label.attributes.has("aria-invalid"), false);
    }
  }
});

for (const kind of ["node", "edge", "message"]) {
  test(`${kind} inspector adds, edits and removes reference without committing invalid input`, () => {
    const h = editReference(kind);
    h.label.change("  Start  ");
    assert.equal(h.api.getAnnotationLabel(h.target.ref), "Start");
    if (kind !== "message") {
      h.position.change("ne");
      assert.equal(h.api.getAnnotationPosition(h.target.ref), "ne");
    }
    h.label.change("12");
    assert.equal(h.api.getAnnotationLabel(h.target.ref), "12");
    if (kind !== "message") assert.equal(h.api.getAnnotationPosition(h.target.ref), "ne");
    const source = h.source();
    const count = h.persists();
    h.label.change("Invalid\nReference");
    assert.equal(h.source(), source);
    assert.equal(h.persists(), count);
    assert.equal(h.label.attributes.get("aria-invalid"), "true");
    assert.ok(h.alerts.length > 0);
    h.label.change("");
    assert.equal(Object.hasOwn(h.target, "ref"), false);
    assert.doesNotMatch(h.source(), kind === "message" ? /^\s{4}ref: 12$/m : /\bref:/);
    assert.equal(h.label.attributes.has("aria-invalid"), false);
  });
}

test("inspector offers position for flowcharts only and rejects invalid positions", () => {
  const h = editReference("node");
  assert.match(h.api.buildNodeInspectorFields(h.diagram, h.target), /docdiagram-inspector-reference-position" disabled/);
  h.label.change("<Reference & 3>");
  const markup = h.api.buildNodeInspectorFields(h.diagram, h.target);
  assert.match(markup, /Reference<input[^>]+value="&lt;Reference &amp; 3&gt;"/);
  assert.match(markup, /NW \(outside\)/);
  assert.match(markup, /nw \(inside\)/);
  const source = h.source();
  h.position.change("middle");
  assert.equal(h.source(), source);
  const message = sequence().messages[0];
  const sequenceFields = h.api.buildSequenceInspectorFields({}, { kind: "message" }, message);
  assert.match(sequenceFields, /docdiagram-inspector-reference/);
  assert.doesNotMatch(sequenceFields, /docdiagram-inspector-reference-position/);
  assert.doesNotMatch(h.api.buildSequenceInspectorFields({}, { kind: "participant" }, { id: "a" }), /docdiagram-inspector-reference/);
  const edge = editReference("edge");
  const edgeFields = edge.api.buildEdgeInspectorFields(edge.diagram, { ...edge.target, ref: { label: 3, position: "se" } });
  assert.match(edgeFields, /value="SE" selected/);
  assert.doesNotMatch(edgeFields, /value="se"|inside/);
});

test("inspector preserves numeric reference labels when the text is unchanged or only position changes", () => {
  const message = editReference("message");
  message.label.change("3");
  assert.equal(message.target.ref, 3);
  const node = editReference("node");
  node.target.ref = { label: 3, position: "NW" };
  node.label.change("3");
  node.position.change("se");
  assert.equal(node.target.ref.label, 3);
  assert.equal(node.target.ref.position, "se");
});

class Element {
  constructor(tag, className = "") { this.tag = tag; this.className = className; this.children = []; this.attrs = {}; }
  get childNodes() { return this.children; }
  get firstChild() { return this.children[0]; }
  get nextSibling() { return this.parent?.children[this.parent.children.indexOf(this) + 1]; }
  get viewBox() {
    const [x, y, width, height] = (this.attrs.viewBox || "0 0 0 0").split(" ").map(Number);
    return { baseVal: { x, y, width, height } };
  }
  get classList() { return { remove() {} }; }
  append(...children) { for (const child of children) { child.parent = this; this.children.push(child); } }
  setAttribute(key, value) { this.attrs[key] = value; }
  removeAttribute(key) { delete this.attrs[key]; }
  closest() { return null; }
  remove() { this.parent.children.splice(this.parent.children.indexOf(this), 1); }
  replaceWith(...children) {
    this.parent.children.splice(this.parent.children.indexOf(this), 1, ...children);
    children.forEach((child) => { child.parent = this.parent; });
  }
  querySelectorAll(selector) {
    const matches = selector.split(",").map((part) => part.trim().split(".").at(-1));
    return this.children.flatMap((child) => [
      ...(matches.includes(child.className) ? [child] : []), ...child.querySelectorAll(selector)
    ]);
  }
  cloneNode() {
    const copy = new Element(this.tag, this.className);
    copy.attrs = { ...this.attrs };
    copy.textContent = this.textContent;
    copy.append(...this.children.map((child) => child.cloneNode(true)));
    return copy;
  }
  insertBefore(child, before) {
    child.parent = this;
    this.children.splice(before ? this.children.indexOf(before) : this.children.length, 0, child);
  }
}

test("isolated SVG removes navigation but preserves annotation geometry, colours and font attributes", () => {
  const h = harness();
  const svg = new Element("svg");
  svg.attrs.viewBox = "0 0 700 500";
  const link = new Element("a", "docdiagram-node-link");
  const node = new Element("g", "docdiagram-node");
  const badge = new Element("g", "docdiagram-annotation-ref");
  const rect = new Element("rect");
  rect.attrs = { x: "12", y: "20", width: "24", height: "24", rx: "12", fill: "#1d4ed8" };
  const text = new Element("text");
  text.attrs = { "font-family": "Arial, sans-serif", "font-size": "14", fill: "#ffffff" };
  badge.append(rect, text);
  node.append(badge, new Element("path", "docdiagram-node-link-indicator"));
  link.append(node);
  svg.append(link);
  const exporter = new h.api.DocumentExportService({}, h.state, { querySelector: () => svg }, null);
  const copy = exporter.getStandaloneDiagramSvg(0);
  assert.equal(copy.querySelectorAll(".docdiagram-node-link").length, 0);
  assert.equal(copy.querySelectorAll(".docdiagram-node-link-indicator").length, 0);
  const savedBadge = copy.querySelectorAll(".docdiagram-annotation-ref")[0];
  assert.deepEqual(savedBadge.children[0].attrs, rect.attrs);
  assert.deepEqual(savedBadge.children[1].attrs, text.attrs);
  assert.equal(copy.attrs.viewBox, svg.attrs.viewBox);
  assert.equal(copy.attrs.role, "group");
  assert.equal(svg.children[0], link);
  assert.equal(node.children.length, 2);
});

test("standalone SVG backgrounds cover the full viewBox including negative annotation margins", () => {
  const h = harness();
  for (const bounds of ["0 0 700 500", "-48 -32 748 532"]) {
    const svg = new Element("svg");
    svg.attrs.viewBox = bounds;
    const exporter = new h.api.DocumentExportService({}, h.state, { querySelector: () => svg }, null);
    const copy = exporter.getStandaloneDiagramSvg(0);
    const background = copy.children.find((child) => child.attrs.class === "docdiagram-export-background");
    const [x, y, width, height] = bounds.split(" ");
    assert.deepEqual(background.attrs, {
      class: "docdiagram-export-background", x, y, width, height, fill: "#fff"
    });
    assert.equal(copy.attrs.viewBox, bounds);
    assert.equal(svg.children.length, 0);
  }
});

test("isolated diagram document download preserves node, edge and sequence refs while stripping unrelated href", async () => {
  const h = harness();
  const flowchart = editReference("node").diagram;
  flowchart.id = "overview";
  flowchart.nodes[0].href = "#elsewhere";
  flowchart.nodes[0].ref = { label: 3, position: "ne" };
  flowchart.edges = [{ source: "a", target: "a", sourceAnchor: "right", targetAnchor: "left", ref: "Start" }];
  for (const diagram of [flowchart, sequence()]) {
    const before = JSON.stringify(diagram);
    h.state.diagramModels = [diagram];
    const exporter = new h.api.DocumentExportService({}, h.state, null, null);
    exporter.createDocumentCopy = (source) => ({ outerHTML: source, querySelector: () => null });
    exporter.downloadDiagramDocument(0);
    const html = await h.downloads.at(-1).text();
    const saved = h.api.parseDiagram(html.match(/```diagram\n([\s\S]*?)```/)[1]);
    if (diagram.type === "flowchart") {
      assert.equal(saved.nodes[0].href, undefined);
      assert.equal(JSON.stringify(saved.nodes[0].ref), JSON.stringify(diagram.nodes[0].ref));
      assert.equal(saved.edges[0].ref, "Start");
    } else {
      assert.equal(JSON.stringify(saved.messages.map((message) => message.ref)), JSON.stringify(diagram.messages.map((message) => message.ref)));
    }
    assert.equal(JSON.stringify(diagram), before);
  }
});
