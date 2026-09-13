import { assert, core, test } from "./support/core-context.mjs";

const { DocumentNavigation, createEditorState, renderDiagramSource } = core;

const source = `type: flowchart
id: overview
description: Overview of order processing.
nodes:
  - id: platform
    label: Order platform
    shape: rounded-rectangle
    href: "#detail"
    position: { x: 20, y: 20 }
    size: { width: 400, height: 200 }
    children:
      - id: orders
        label: Orders & delivery
        shape: rounded-rectangle
        href: "#delivery"
        position: { x: 40, y: 60 }
edges: []`;

test("linked parent and child render as independent native links with accessible names", () => {
  const markup = renderDiagramSource(source, 0, {
    state: createEditorState(),
    colourScheme: "classic",
    onDiagram: () => {}
  });
  assert.match(markup, /<svg[^>]+role="group"/);
  assert.match(markup, /<a class="docdiagram-node-link" href="#detail" aria-label="Order platform">/);
  assert.match(markup, /href="#delivery" aria-label="Orders &amp; delivery"/);
  assert.equal((markup.match(/<a /g) || []).length, 2);
  const links = [...markup.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)];
  for (const [, content] of links) {
    assert.doesNotMatch(content, /<a\b/);
    assert.match(content, /docdiagram-node-link-hit/);
    assert.match(content, /docdiagram-node-link-focus/);
    assert.match(content, /docdiagram-node-link-indicator/);
  }
});

test("editing keeps linked nodes as ordinary selectable graphics", () => {
  const state = createEditorState();
  state.editingDiagramIndex = 0;
  const markup = renderDiagramSource(source, 0, { state, colourScheme: "classic", onDiagram: () => {} });
  assert.doesNotMatch(markup, /docdiagram-node-link/);
  assert.match(markup, /<svg[^>]+role="img"/);
  assert.match(markup, /data-node-id="orders"/);
});

test("unlinked diagrams retain image semantics and have no navigation decoration", () => {
  const markup = renderDiagramSource(source.replace(/^\s+href:.*\n/gm, "\n"), 0, {
    state: createEditorState(), colourScheme: "classic", onDiagram: () => {}
  });
  assert.doesNotMatch(markup, /docdiagram-node-link/);
  assert.match(markup, /<svg[^>]+role="img"/);
});

test("blank node labels use a subtitle or destination as the accessible link name", () => {
  for (const [label, name] of [
    ['label: ""', "Go to #detail"],
    ['label: ""\n    subtitle: Processing details', "Processing details"],
    ['label: "   "', "Go to #detail"]
  ]) {
    const markup = renderDiagramSource(source.replace("label: Order platform", label), 0, {
      state: createEditorState(), colourScheme: "classic", onDiagram: () => {}
    });
    assert.match(markup, new RegExp(`href="#detail" aria-label="${name}"`));
  }
});

class ElementStub {
  constructor(id = "", attributes = {}) {
    this.id = id;
    this.attributes = new Map(Object.entries(attributes));
    this.listeners = new Map();
    this.targets = [];
    this.focused = false;
    this.scrolled = false;
  }
  addEventListener(name, listener) {
    const listeners = this.listeners.get(name) || [];
    listeners.push(listener);
    this.listeners.set(name, listeners);
  }
  dispatch(name, event) {
    for (const listener of this.listeners.get(name) || []) listener(event);
  }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  setAttribute(name, value) { this.attributes.set(name, value); }
  removeAttribute(name) { this.attributes.delete(name); }
  hasAttribute(name) { return this.attributes.has(name); }
  matches(selector) { return selector === ".docdiagram-node-link" && this.attributes.has("href"); }
  closest(selector) {
    return (selector === "a[href]" || selector === "a.docdiagram-node-link") && this.attributes.has("href") ? this : null;
  }
  querySelectorAll() { return this.targets; }
  focus() { this.focused = true; }
  scrollIntoView() { this.scrolled = true; }
}

async function withNavigation(run) {
  const output = new ElementStub("rendered-document");
  const target = new ElementStub("detail");
  output.targets = [target];
  const warnings = [];
  const alerts = [];
  const historyListeners = new Map();
  const location = { hash: "" };
  const document = { fullscreenElement: null };
  let prepared = 0;
  let permitNavigation = true;
  let scroll = null;
  const globals = {
    Element: ElementStub,
    document,
    location,
    addEventListener: (name, handler) => historyListeners.set(name, handler),
    alert: (message) => alerts.push(message),
    scrollTo: (...args) => { scroll = args; },
    console: { ...console, warn: (message) => warnings.push(message), error: (message) => warnings.push(message) }
  };
  const descriptors = new Map(Object.keys(globals).map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const [key, value] of Object.entries(globals)) {
    Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });
  }
  try {
    const navigation = new DocumentNavigation({
      outputElement: output,
      prepareDocumentView: () => { prepared++; return permitNavigation; }
    });
    navigation.bind();
    await run({
      output, target, location, document, navigation, warnings, alerts, historyListeners,
      prepared: () => prepared, scroll: () => scroll,
      refuseNavigation: () => { permitNavigation = false; }
    });
  } finally {
    for (const [key, descriptor] of descriptors) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  }
}

function clickEvent(link, overrides = {}) {
  return {
    target: link, detail: 0, button: 0, defaultPrevented: false,
    preventDefault() { this.defaultPrevented = true; },
    ...overrides
  };
}

test("fragment navigation closes the working view and focuses the actual target", async () => {
  await withNavigation(async ({ navigation, target, location, prepared }) => {
    await navigation.revealFragment("#detail", true);
    assert.equal(prepared(), 1);
    assert.equal(location.hash, "#detail");
    assert.equal(target.focused, true);
    assert.equal(target.scrolled, true);
    assert.equal(target.getAttribute("tabindex"), "-1");
    target.dispatch("blur", {});
    assert.equal(target.hasAttribute("tabindex"), false);
  });
});

test("direct fragments and back/forward reveal targets without adding history entries", async () => {
  await withNavigation(async ({ navigation, location, target, historyListeners, output, scroll }) => {
    location.hash = "#%64etail";
    await navigation.revealFragment();
    assert.equal(location.hash, "#%64etail");
    assert.equal(target.focused, true);
    location.hash = "";
    historyListeners.get("hashchange")();
    assert.equal(output.focused, true);
    assert.deepEqual(scroll(), [0, 0]);
  });
});

test("generated links to diagram IDs with spaces navigate without a schema warning", async () => {
  await withNavigation(async ({ output, target, location, alerts }) => {
    target.id = "detail diagram";
    const link = new ElementStub("", { href: "#detail diagram" });
    output.dispatch("click", clickEvent(link));
    assert.equal(target.focused, true);
    assert.equal(location.hash, "#detail diagram");
    assert.equal(alerts.length, 0);
  });
});

test("navigation waits for fullscreen exit before exposing the document", async () => {
  await withNavigation(async ({ navigation, document, prepared, target }) => {
    document.fullscreenElement = {};
    let finish;
    document.exitFullscreen = () => new Promise((resolve) => { finish = resolve; });
    const pending = navigation.revealFragment("#detail", true);
    assert.equal(prepared(), 0);
    finish();
    await pending;
    assert.equal(prepared(), 1);
    assert.equal(target.focused, true);
  });
});

test("fullscreen failure is surfaced and does not navigate behind the overlay", async () => {
  await withNavigation(async ({ navigation, document, prepared, alerts, location }) => {
    document.fullscreenElement = {};
    document.exitFullscreen = async () => { throw new Error("Denied"); };
    await navigation.revealFragment("#detail", true);
    assert.equal(prepared(), 0);
    assert.equal(location.hash, "");
    assert.match(alerts[0], /Exit fullscreen/);
  });
});

test("a newer history navigation supersedes a pending fullscreen navigation", async () => {
  await withNavigation(async ({ navigation, document, location, prepared, output }) => {
    document.fullscreenElement = {};
    let finish;
    document.exitFullscreen = () => new Promise((resolve) => { finish = resolve; });
    const pending = navigation.revealFragment("#detail", true);
    document.fullscreenElement = null;
    await navigation.revealFragment("");
    finish();
    await pending;
    assert.equal(prepared(), 1);
    assert.equal(location.hash, "");
    assert.equal(output.focused, true);
  });
});

test("missing and ambiguous destinations report failure without inventing a target", async () => {
  await withNavigation(async ({ navigation, output, prepared, alerts, location }) => {
    await navigation.revealFragment("#missing", true);
    output.targets.push(new ElementStub("detail"));
    await navigation.revealFragment("#detail", true);
    assert.equal(prepared(), 0);
    assert.equal(location.hash, "");
    assert.equal(alerts.length, 2);
  });
});

test("cancelled source-editor close leaves the destination and history untouched", async () => {
  await withNavigation(async ({ navigation, refuseNavigation, target, location }) => {
    refuseNavigation();
    await navigation.revealFragment("#detail", true);
    assert.equal(target.focused, false);
    assert.equal(location.hash, "");
  });
});

test("Tab/Enter activation uses the native click path without a custom key handler", async () => {
  await withNavigation(async ({ output, location }) => {
    const link = new ElementStub("", { href: "#detail" });
    const event = clickEvent(link);
    output.dispatch("click", event);
    assert.equal(event.defaultPrevented, true);
    assert.equal(location.hash, "#detail");
    assert.equal(output.listeners.has("keydown"), false);
  });
});

test("moved, cancelled and wheel gestures cannot activate a node link", async () => {
  for (const gesture of ["pointermove", "pointerup", "pointercancel", "wheel", "dragstart"]) {
    await withNavigation(async ({ output, location }) => {
      const link = new ElementStub("", { href: "#detail" });
      output.dispatch("pointerdown", { target: link, pointerId: 1, clientX: 10, clientY: 10, button: 0, isPrimary: true });
      output.dispatch(gesture, { target: link, pointerId: 1, clientX: 20, clientY: 10, preventDefault() {} });
      const event = clickEvent(link, { detail: 1 });
      output.dispatch("click", event);
      assert.equal(event.defaultPrevented, true, gesture);
      assert.equal(location.hash, "", gesture);
    });
  }
});

test("ordinary pointer clicks navigate; modified links retain native browser behavior", async () => {
  await withNavigation(async ({ output, location }) => {
    const link = new ElementStub("", { href: "#detail" });
    output.dispatch("pointerdown", { target: link, pointerId: 1, clientX: 10, clientY: 10, button: 0, isPrimary: true });
    const modified = clickEvent(link, { detail: 1, ctrlKey: true });
    output.dispatch("click", modified);
    assert.equal(modified.defaultPrevented, false);
    assert.equal(location.hash, "");
    const normal = clickEvent(link, { detail: 1 });
    output.dispatch("click", normal);
    assert.equal(location.hash, "#detail");
  });
});
