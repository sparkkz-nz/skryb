import { assert, core, test } from "./support/core-context.mjs";

const { createEditorState, DocumentRenderer, DocumentSession } = core;

function createMemoryStore(initialSource) {
  let source = initialSource;
  return {
    read: () => source,
    write: (value) => { source = value; }
  };
}

test("DocumentSession owns canonical source and dirty state", () => {
  const session = new DocumentSession(createMemoryStore("# Original"));

  session.captureSavedSource();
  assert.equal(session.hasUnsavedChanges(), false);

  session.source = "# Changed";
  assert.equal(session.hasUnsavedChanges(), true);

  session.markSaved();
  assert.equal(session.hasUnsavedChanges(), false);
  session.markLintReportUnsaved();
  assert.equal(session.hasUnsavedChanges(), true);
  session.markSaved();
  assert.equal(session.hasUnsavedChanges(true), true);
});

test("DocumentSession bakes layout into canonical source", () => {
  const source = [
    "```diagram",
    "type: flowchart",
    "layout: right",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "edges:",
    "  - source: a",
    "    target: b",
    "```"
  ].join("\n");
  const session = new DocumentSession(createMemoryStore(source));

  const result = session.bake();

  assert.equal(result.failed, false);
  assert.equal(result.baked, 1);
  assert.match(session.source, /position: \{ x: \d+, y: \d+ \}/);
});

test("DocumentRenderer resolves source into markup and explicit document state", () => {
  const state = createEditorState();
  const renderer = new DocumentRenderer(state, (source) => `<main>${source.trim()}</main>`);

  const result = renderer.render("---\ntheme: dark\ncolourScheme: fire\ndoctype: document\n---\n\n# Service boundary");

  assert.deepEqual(result, { ok: true, markup: "<main># Service boundary</main>" });
  assert.equal(state.documentTheme, "dark");
  assert.equal(state.documentThemeSetting, "dark");
  assert.equal(state.documentColorScheme, "fire");
  assert.equal(state.documentDoctype, "document");
});

test("DocumentRenderer preserves the last valid state for invalid source drafts", () => {
  const state = createEditorState();
  state.documentTheme = "dark";
  state.documentThemeSetting = "dark";
  const renderer = new DocumentRenderer(state, (source) => source);

  const result = renderer.render("---\ntheme: unsupported\n---\n\nInvalid draft", true);

  assert.equal(result.ok, false);
  assert.match(result.message, /theme/i);
  assert.equal(state.documentTheme, "dark");
  assert.equal(state.documentThemeSetting, "dark");
});
