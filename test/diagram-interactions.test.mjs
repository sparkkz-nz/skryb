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
      export { BrowserLifecycle } from "./src/editor/browser-lifecycle";
      export { DiagramEditor } from "./src/editor/diagram-editor";
      export { BrowserRuntime } from "./src/editor/orchestrator";
      export { createEditorState } from "./src/editor/state";
    `
  },
  bundle: true, write: false, format: "iife", globalName: "interactionTest"
}).outputFiles[0].text;

class Element {
  constructor(tag = "div", classes = "", dataset = {}) {
    this.tag = tag;
    this.classes = new Set(classes.split(" ").filter(Boolean));
    this.dataset = dataset;
    this.children = [];
    this.listeners = new Map();
    this.attributes = new Map();
    this.style = {};
    this.classList = {
      contains: (name) => this.classes.has(name),
      add: (name) => this.classes.add(name),
      remove: (name) => this.classes.delete(name),
      toggle: (name, on) => on ? this.classes.add(name) : this.classes.delete(name)
    };
  }
  append(...children) {
    children.forEach((child) => { child.parent = this; this.children.push(child); });
  }
  matches(selector) {
    return selector.split(",").some((part) => {
      const token = part.trim();
      if (token === "[contenteditable]") return this.attributes.has("contenteditable");
      return token.startsWith(".") ? this.classes.has(token.slice(1)) : token === this.tag;
    });
  }
  closest(selector) { return this.matches(selector) ? this : this.parent?.closest(selector) || null; }
  contains(target) { return this === target || this.children.some((child) => child.contains(target)); }
  querySelectorAll(selector) {
    if (selector === '.docdiagram[data-diagram-type="sequence"] svg') {
      return this.querySelectorAll(".docdiagram")
        .filter((frame) => frame.dataset.diagramType === "sequence")
        .map((frame) => frame.querySelector("svg"));
    }
    return this.children.flatMap((child) => [
      ...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)
    ]);
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  setAttribute(name, value) { this.attributes.set(name, value); }
  addEventListener(name, callback, options) {
    const listeners = this.listeners.get(name) || [];
    listeners.push({ callback, options });
    this.listeners.set(name, listeners);
  }
  dispatch(name, event) { for (const { callback } of this.listeners.get(name) || []) callback(event); }
  getBoundingClientRect() {
    const scale = parseFloat(this.style.width || "100") / 100;
    return { left: 0, top: 0, right: 1000 * scale, bottom: 500 * scale, width: 1000 * scale, height: 500 * scale };
  }
}

function frame(index) {
  const result = new Element("figure", "docdiagram", { diagramIndex: String(index), diagramType: index === 1 ? "sequence" : "flowchart" });
  result.append(new Element("svg", "", { diagramIndex: String(index) }));
  return result;
}

function event(target, overrides = {}) {
  return {
    target, button: 0, deltaX: 0, deltaY: 40, deltaMode: 0,
    clientX: 100, clientY: 100, defaultPrevented: false,
    preventDefault() { this.defaultPrevented = true; },
    ...overrides
  };
}

function harness() {
  const document = new Element("document");
  const output = new Element("main");
  const frames = [frame(0), frame(1)];
  const prose = new Element("p");
  output.append(...frames, prose);
  document.append(output);
  const context = vm.createContext({
    document, Element, Node: Element, HTMLTextAreaElement: class extends Element {},
    addEventListener() {}, getSelection: () => ({ toString: () => "Selected text" }),
    setTimeout, clearTimeout, console, print() {}
  });
  vm.runInContext(code, context);
  const { DiagramEditor, BrowserLifecycle, BrowserRuntime, createEditorState } = context.interactionTest;
  const state = createEditorState();
  state.diagramModels = [{ type: "flowchart" }, { type: "sequence" }];
  let persists = 0;
  let renders = 0;
  const revealed = [];
  const editor = new DiagramEditor({
    state, outputElement: output,
    persistDiagramModels: () => { persists++; },
    renderDocument: () => { renders++; return true; }
  });
  const runtime = {
    state, diagramEditor: editor, pendingViewportFits: new Set(), autoFittedDiagrams: new Set(),
    setExpandedDiagram: BrowserRuntime.prototype.setExpandedDiagram,
    closeDiagramExportMenus() {}, closeDocumentMenu() {}, stopDiagramEditing() {},
    printDocument: BrowserRuntime.prototype.printDocument,
    renderDocument: () => { renders++; }
  };
  const lifecycle = new BrowserLifecycle({
    outputElement: output, isAutoTheme: () => false, hasUnsavedChanges: () => false,
    isSourceEditorOpen: () => false, closeDocumentMenu() {}, closeDiagramExportMenus() {},
    hasSelection: () => false, revealSource: (text) => revealed.push(text),
    activateDiagram: (index) => editor.activateDiagram(index),
    getExpandedDiagramIndex: () => state.expandedDiagramIndex,
    toggleDiagramExpansion: (index) => BrowserRuntime.prototype.toggleDiagramExpansion.call(runtime, index)
  });
  lifecycle.bind();
  editor.enableCanvasPanning();
  return { document, output, frames, prose, state, editor, runtime, revealed,
    persists: () => persists, renders: () => renders };
}

const active = (frame) => frame.classList.contains("docdiagram-scroll-active");
const wheel = (frame, overrides) => {
  const result = event(frame.querySelector("svg"), overrides);
  frame.dispatch("wheel", result);
  return result;
};

test("unfocused diagram wheels retain native document scroll and modifier zoom", () => {
  const h = harness();
  for (const modifiers of [{}, { ctrlKey: true }, { metaKey: true }, { shiftKey: true }]) {
    assert.equal(wheel(h.frames[0], modifiers).defaultPrevented, false);
  }
  assert.equal(h.state.diagramCameraOffsets.size, 0);
  assert.equal(h.state.diagramZooms.size, 0);
  assert.equal(h.frames[0].tabIndex, 0);
});

test("click activation precedes diagram handlers and wheel pans only the active diagram", () => {
  const h = harness();
  assert.equal(h.document.listeners.get("pointerdown")[0].options, true);
  h.document.dispatch("pointerdown", event(h.frames[0].querySelector("svg")));
  assert.equal(active(h.frames[0]), true);
  assert.equal(wheel(h.frames[0]).defaultPrevented, true);
  assert.equal(h.state.diagramCameraOffsets.get(0).y, -40);
  assert.equal(wheel(h.frames[1]).defaultPrevented, false);
  assert.equal(h.persists(), 0);
  assert.equal(h.renders(), 0);
});

test("clicking another diagram or the document transfers or clears activation", () => {
  const h = harness();
  h.document.dispatch("pointerdown", event(h.frames[0]));
  h.document.dispatch("pointerdown", event(h.frames[1]));
  assert.equal(active(h.frames[0]), false);
  assert.equal(active(h.frames[1]), true);
  assert.equal(wheel(h.frames[0]).defaultPrevented, false);
  h.document.dispatch("pointerdown", event(h.prose));
  assert.equal(active(h.frames[1]), false);
  assert.equal(wheel(h.frames[1]).defaultPrevented, false);
});

test("keyboard focus activates diagrams but editable fields keep native wheel handling", () => {
  const h = harness();
  const textarea = new Element("textarea");
  h.frames[0].append(textarea);
  h.document.dispatch("focusin", event(h.frames[0]));
  assert.equal(wheel(h.frames[0], { ctrlKey: true }).defaultPrevented, true);
  assert.ok(h.state.diagramZooms.get(0) < 100);
  assert.equal(wheel(h.frames[0], { target: textarea }).defaultPrevented, false);
  h.document.dispatch("focusin", event(h.prose));
  assert.equal(wheel(h.frames[0]).defaultPrevented, false);
});

test("active wheel keeps horizontal panning and modifier zoom anchored to the pointer", () => {
  const h = harness();
  h.editor.activateDiagram(0);
  wheel(h.frames[0], { shiftKey: true });
  assert.equal(h.state.diagramCameraOffsets.get(0).x, -40);
  assert.equal(h.state.diagramCameraOffsets.get(0).y, 0);
  wheel(h.frames[0], { metaKey: true, deltaY: -40 });
  assert.ok(h.state.diagramZooms.get(0) > 100);
  assert.notEqual(h.state.diagramCameraOffsets.get(0).y, 0);
});

test("activation survives markup replacement and resets when its diagram disappears", () => {
  const h = harness();
  h.editor.activateDiagram(0);
  h.output.children = [];
  const replacement = frame(0);
  h.output.append(replacement);
  h.editor.enableCanvasPanning();
  assert.equal(active(replacement), true);
  assert.equal(wheel(replacement).defaultPrevented, true);
  h.state.diagramModels = [];
  h.editor.enableCanvasPanning();
  assert.equal(active(replacement), false);
  assert.equal(wheel(replacement).defaultPrevented, false);
});

test("background double-click toggles expansion and scrolling without opening source", () => {
  for (const index of [0, 1]) {
    const h = harness();
    for (const target of [h.frames[index].querySelector("svg"), h.frames[index]]) {
      const click = event(target);
      h.output.dispatch("dblclick", click);
      assert.equal(click.defaultPrevented, true);
    }
    assert.equal(h.state.expandedDiagramIndex, null);
    assert.equal(active(h.frames[index]), false);
    assert.equal(wheel(h.frames[index]).defaultPrevented, false);
    assert.equal(h.revealed.length, 0);
    assert.equal(h.persists(), 0);
    assert.equal(h.renders(), 2);
  }
});

test("expanded mode and docked controls activate scrolling; collapse and navigation clear it", () => {
  const h = harness();
  h.runtime.setExpandedDiagram(0);
  assert.equal(active(h.frames[0]), true);
  assert.equal(wheel(h.frames[0]).defaultPrevented, true);
  const controls = new Element("div", "docdiagram-diagram-toolbar");
  const button = new Element("button");
  controls.append(button);
  h.document.append(controls);
  h.document.dispatch("pointerdown", event(h.prose));
  h.document.dispatch("focusin", event(button));
  assert.equal(active(h.frames[0]), true);
  h.runtime.setExpandedDiagram(null);
  assert.equal(active(h.frames[0]), false);
  h.editor.activateDiagram(0);
  h.runtime.setExpandedDiagram(null);
  assert.equal(active(h.frames[0]), false, "navigation also clears a non-expanded active diagram");
});

test("double-clicks on controls stay inert and document text retains source navigation", () => {
  const h = harness();
  for (const tag of ["a", "button", "input", "textarea", "select"]) {
    const target = new Element(tag);
    h.frames[0].append(target);
    h.output.dispatch("dblclick", event(target));
  }
  assert.equal(h.revealed.length, 0);
  assert.equal(h.renders(), 0);
  h.output.dispatch("dblclick", event(h.prose));
  assert.deepEqual(h.revealed, ["Selected text"]);
});

test("empty sequence background clicks do not replace the SVG between double-clicks", () => {
  const h = harness();
  h.state.editingDiagramIndex = 1;
  h.editor.enableSequenceSelection();
  const svg = h.frames[1].querySelector("svg");
  svg.dispatch("click", event(svg));
  assert.equal(h.renders(), 0);
  h.state.selectedSequenceElement = { kind: "message", diagramIndex: 1, index: 0 };
  svg.dispatch("click", event(svg));
  assert.equal(h.state.selectedSequenceElement, null);
  assert.equal(h.renders(), 1);
});

test("printing collapses the diagram and clears wheel activation", () => {
  const h = harness();
  h.runtime.setExpandedDiagram(0);
  h.runtime.printDocument();
  assert.equal(h.state.expandedDiagramIndex, null);
  assert.equal(active(h.frames[0]), false);
  assert.equal(wheel(h.frames[0]).defaultPrevented, false);
});
