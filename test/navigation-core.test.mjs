import { assert, core, test } from "./support/core-context.mjs";

const {
  bakeDocumentSource, collectDocumentAnchors, decodeDocumentFragment, duplicateNode,
  extractDiagramFences, getFragmentTargetId, isValidNodeHref, lintDocument, parseDiagram, relayoutDocumentDiagram,
  renderMarkdown, serializeDiagram, setNodeHref, setNodeLabel, validateDocumentSource
} = core;

function diagram(href = "#detail", id = "overview") {
  return [
    "type: flowchart", `id: ${id}`, "layout: right", "nodes:",
    "  - id: start", "    label: Overview", "    shape: rounded-rectangle",
    ...(href === undefined ? [] : [`    href: ${JSON.stringify(href)}`]),
    "edges:"
  ].join("\n");
}

const fence = (body) => `\`\`\`diagram\n${body}\n\`\`\``;
const destinationMessages = (source) => lintDocument(source).messages.filter((message) =>
  message.rule.endsWith("node-destination"));

test("ordinary generated fragments retain native ID text without relaxing the node schema", () => {
  assert.equal(getFragmentTargetId("#detail diagram"), "detail diagram");
  assert.equal(getFragmentTargetId("#detail%20diagram"), "detail diagram");
  assert.equal(isValidNodeHref("#detail diagram"), false);
  const source = [
    ":::toc {diagrams=true}", "", 'See {ref="detail diagram"}.', "",
    fence(diagram("#detail%20diagram", '"detail diagram"').replace("layout: right", 'caption: "Figure #: Detail"\nlayout: right'))
  ].join("\n");
  validateDocumentSource(source);
  assert.match(renderMarkdown(source), /href="#detail diagram"/);
  assert.deepEqual(destinationMessages(source), []);
});

test("node href accepts only nonempty fragment strings and decodes once", () => {
  for (const [href, id] of [
    ["#detail", "detail"], ["#caf%C3%A9", "café"], ["#detail%20diagram", "detail diagram"],
    ["#%2520", "%20"], ["#detail+diagram", "detail+diagram"]
  ]) {
    assert.equal(decodeDocumentFragment(href), id);
    assert.equal(isValidNodeHref(href), true);
    assert.equal(parseDiagram(diagram(href)).nodes[0].href, href);
  }
  for (const href of [
    null, undefined, {}, [], 1, true, "", "#", "#%20", "detail", "https://example.test/#detail",
    "//example.test/#detail", "other.html#detail", "javascript:alert(1)", " #detail",
    "#detail ", "#bad\nid", "#bad\\id", "#bad%00id", "#bad%0aid", "#bad%", "#%FF",
    "#detail:~:text=secret", "#detail%3A~%3Atext=secret"
  ]) {
    assert.equal(decodeDocumentFragment(href), null, String(href));
    assert.equal(isValidNodeHref(href), false, String(href));
  }
});

test("malformed href values are schema errors, not missing-target warnings", () => {
  for (const value of ['""', '"#"', '"https://example.test"', "{ target: detail }", "true", "3"]) {
    const source = fence(diagram().replace('href: "#detail"', `href: ${value}`));
    assert.throws(() => validateDocumentSource(source), /href must be/);
    const result = lintDocument(source);
    assert.equal(result.errorCount, 1);
    assert.equal(result.warningCount, 0);
    assert.equal(result.messages[0].rule, "schema");
    const range = result.messages[0].location.subjects[0].sourceRange;
    assert.equal(source.slice(range.start.offset, range.end.offset), `href: ${value}`);
  }
});

test("optional href survives normalization, unrelated mutation, and recursive duplication", () => {
  const model = parseDiagram(diagram());
  model.nodes[0].children = [{
    id: "child", label: "Child", shape: "rounded-rectangle", position: { x: 20, y: 40 }, href: "#other"
  }];
  setNodeLabel(model.nodes[0], "Changed");
  const copy = duplicateNode(model, "start");
  assert.equal(copy.href, "#detail");
  assert.equal(copy.children[0].href, "#other");
  const reparsed = parseDiagram(serializeDiagram(model));
  assert.equal(reparsed.nodes[0].href, "#detail");
  assert.equal(reparsed.nodes[1].href, "#detail");
  assert.equal(reparsed.nodes[1].children[0].href, "#other");
  assert.equal(parseDiagram(diagram().replace('    href: "#detail"\n', "")).nodes[0].href, undefined);
});

test("href mutation changes and removes links without accepting unsafe values", () => {
  const node = parseDiagram(diagram()).nodes[0];
  assert.equal(setNodeHref(node, "#other"), node);
  assert.equal(node.href, "#other");
  assert.throws(() => setNodeHref(node, "https://example.test"), /href must be/);
  assert.equal(node.href, "#other");
  setNodeHref(node, "");
  assert.equal(Object.hasOwn(node, "href"), false);
});

test("baking and each one-shot relayout retain node destinations", () => {
  const source = `${fence(diagram())}\n\n# Detail`;
  const baked = bakeDocumentSource(source);
  assert.equal(parseDiagram(extractDiagramFences(baked.source)[0].source).nodes[0].href, "#detail");
  for (const mode of ["all", "unpinned", "autowrap"]) {
    const relaid = relayoutDocumentDiagram(baked.source, 0, mode);
    assert.equal(parseDiagram(extractDiagramFences(relaid.source)[0].source).nodes[0].href, "#detail");
    assert.deepEqual(destinationMessages(relaid.source), []);
  }
});

test("anchor collection matches heading suffixes and uncaptioned diagram reservations", () => {
  const source = [
    "---", 'title: "# Not a heading"', "---", "# Detail", "# Detail", "# Detail 2",
    "> # Café", "", fence(diagram("#detail-2", "detail")),
    "", "```text", "# Not rendered", "```"
  ].join("\n");
  assert.deepEqual([...collectDocumentAnchors(source).keys()], ["detail-2", "detail-3", "detail-2-2", "cafe", "detail"]);
  assert.deepEqual(destinationMessages(source), []);
});

test("captioned and uncaptioned forward diagram destinations resolve at reference placement", () => {
  const source = [
    fence(diagram("#detail")),
    ':::diagram {id="detail"}', "",
    fence(diagram("#overview", "'detail'"))
  ].join("\n");
  assert.deepEqual([...collectDocumentAnchors(source)], [["overview", 1], ["detail", 1]]);
  assert.deepEqual(destinationMessages(source), []);
  const html = renderMarkdown(source);
  assert.equal((html.match(/id="detail"/g) || []).length, 1);
  const captioned = source.replace("id: 'detail'", "id: 'detail'\ncaption: Detail #");
  assert.deepEqual(destinationMessages(captioned), []);
  assert.equal(collectDocumentAnchors(captioned).get("detail"), 1);
});

test("repeated diagram references have no rendered target and trigger a warning", () => {
  const source = [
    fence(diagram("#detail")), fence(diagram("#overview", "detail")),
    ':::diagram {id="detail"}', ':::diagram {id="detail"}'
  ].join("\n");
  const result = lintDocument(source);
  assert.equal(result.errorCount, 0);
  assert.equal(collectDocumentAnchors(source).has("detail"), false);
  assert.equal(destinationMessages(source)[0].rule, "missing-node-destination");
});

test("generated SVG IDs and directive titles are not document navigation anchors", () => {
  const source = [
    ':::section {title="Detail section"}', "# Authored heading", ":::",
    fence(diagram("#docdiagram-title-0"))
  ].join("\n");
  assert.deepEqual([...collectDocumentAnchors(source)], [["authored-heading", 1], ["overview", 1]]);
  const warnings = destinationMessages(source);
  assert.equal(warnings.length, 1);
  assert.equal(warnings[0].rule, "missing-node-destination");
  assert.equal(warnings[0].severity, "warning");
  assert.match(warnings[0].message, /#docdiagram-title-0/);
  assert.equal(destinationMessages(source.replace("#docdiagram-title-0", "#detail-section")).length, 1);
});

test("unresolved nested href diagnostics point at the authored field in CRLF block quotes", () => {
  const body = [
    "type: flowchart", "id: overview", "layout: right", "nodes:",
    "  - id: parent", "    label: |", "      Text with a pretend field",
    '      href: "#pretend"', "    shape: rounded-rectangle", "    children:",
    '      - href: "#absent"', "        id: child", "        label: Child",
    "        shape: rounded-rectangle", "edges:"
  ].join("\n");
  const source = ["# Start", "", ...fence(body).split("\n").map((line) => `> ${line}`)].join("\r\n");
  const warnings = destinationMessages(source);
  assert.equal(warnings.length, 1);
  assert.equal(warnings[0].severity, "warning");
  assert.equal(warnings[0].location.subjects[0].id, "child");
  const range = warnings[0].location.subjects[0].sourceRange;
  assert.equal(source.slice(range.start.offset, range.end.offset), 'href: "#absent"');
  assert.equal(range.start.column, 11);
});

test("encoded destination IDs resolve without double decoding", () => {
  const source = `${fence(diagram("#detail%20diagram"))}\n\n${fence(diagram("#overview", '"detail diagram"'))}`;
  assert.deepEqual(destinationMessages(source), []);
  assert.equal(destinationMessages(source.replace("#detail%20diagram", "#detail%2520diagram")).length, 1);
});

test("href ranges follow parent fields after children and list-leading block scalars", () => {
  const source = fence([
    "type: flowchart", "id: overview", "layout: right", "nodes:",
    "  - label: |", "      Parent", "    id: parent", "    shape: rounded-rectangle",
    "    children:", "      - label: |", "          Child", "        id: child",
    "        shape: rounded-rectangle", '        href: "#missing-child"',
    '    href: "#missing-parent"', "edges:"
  ].join("\n"));
  const warnings = destinationMessages(source);
  assert.equal(warnings.length, 2);
  for (const message of warnings) {
    const subject = message.location.subjects[0];
    assert.equal(source.slice(subject.sourceRange.start.offset, subject.sourceRange.end.offset),
      `href: "#missing-${subject.id}"`);
  }
});

test("duplicate quoted diagram IDs remain schema errors rather than ambiguous destinations", () => {
  const source = `${fence(diagram("#detail", "'detail'"))}\n\n${fence(diagram("#detail", '"detail"'))}`;
  assert.throws(() => validateDocumentSource(source), /Duplicate diagram id: detail/);
  assert.equal(lintDocument(source).messages[0].rule, "schema");
});
