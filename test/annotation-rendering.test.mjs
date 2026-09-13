import { assert, core, test } from "./support/core-context.mjs";

const {
  FlowchartIndex, buildFlowchartEdgeGeometries, createEditorState, getAnnotationBadgeBounds,
  renderAnnotationBadge, renderDiagramSource
} = core;

function render(body, state = createEditorState()) {
  let diagram;
  const markup = renderDiagramSource(`type: flowchart\n${body}`, 0, {
    colourScheme: state.documentColorScheme,
    state,
    onDiagram: (_, model) => { diagram = model; }
  });
  return { markup, diagram, state };
}

function badge(ref, bounds, state) {
  return renderAnnotationBadge(ref, bounds, state.documentColorScheme, state.documentTheme);
}

const basicNodes = `canvas: { width: 600, height: 300 }
nodes:
  - id: first
    label: First
    shape: rounded-rectangle
    position: { x: 80, y: 80 }
    size: { width: 180, height: 80 }
  - id: second
    label: Second
    shape: rounded-rectangle
    position: { x: 400, y: 80 }
    size: { width: 180, height: 80 }`;

function connector(ref, label = "") {
  return `${basicNodes}
edges:
  - source: first
    target: second
    sourceAnchor: bottom
    targetAnchor: bottom
    route: curved
    waypoint: { x: 280, y: 250 }
    ref: ${ref}
${label ? `    label: ${label}` : ""}`;
}

test("node annotations use each node's absolute bounds, including nested children", () => {
  const { markup, diagram, state } = render(`canvas: { width: 600, height: 400 }
nodes:
  - id: parent
    label: Parent
    shape: rounded-rectangle
    position: { x: 80, y: 80 }
    size: { width: 380, height: 260 }
    ref: Start
    children:
      - id: child
        label: Child
        shape: database
        position: { x: 100, y: 100 }
        ref: { label: 2, position: se }
edges: []`);
  for (const { node, bounds } of new FlowchartIndex(diagram).entries) {
    assert.ok(markup.includes(badge(node.ref, getAnnotationBadgeBounds(node.ref, bounds), state)));
  }
  assert.equal((markup.match(/class="docdiagram-annotation-ref"/g) || []).length, 2);
  assert.match(markup, /<svg[^>]+role="group"/);
});

test("connector annotations use routed label boxes and uppercase/lowercase both stay outside", () => {
  for (const position of ["N", "S", "E", "W", "NE", "NW", "SE", "SW"]) {
    const results = [];
    for (const variant of [position, position.toLowerCase()]) {
      const { markup, diagram, state } = render(connector(`{ label: 3, position: ${variant} }`, "Accepted"));
      const geometry = buildFlowchartEdgeGeometries(diagram)[0];
      assert.ok(geometry.label);
      const bounds = getAnnotationBadgeBounds(diagram.edges[0].ref, geometry.label.bounds, true);
      assert.ok(markup.includes(badge(diagram.edges[0].ref, bounds, state)));
      const label = geometry.label.bounds;
      assert.ok(bounds.x + bounds.width <= label.x || bounds.x >= label.x + label.width ||
        bounds.y + bounds.height <= label.y || bounds.y >= label.y + label.height);
      results.push(bounds);
    }
    assert.deepEqual(results[0], results[1], position);
  }
});

test("an unlabeled connector positions its badge around the routed midpoint", () => {
  const { markup, diagram, state } = render(connector("Continue"));
  const geometry = buildFlowchartEdgeGeometries(diagram)[0];
  assert.equal(geometry.label, null);
  const bounds = getAnnotationBadgeBounds(diagram.edges[0].ref, {
    ...geometry.path.midpoint, width: 0, height: 0
  }, true);
  assert.ok(markup.includes(badge(diagram.edges[0].ref, bounds, state)));
});

test("a fixed canvas includes external badge extents without moving authored nodes", () => {
  const { markup, diagram } = render(`canvas: { width: 200, height: 100 }
nodes:
  - id: corner
    label: Corner
    shape: rounded-rectangle
    position: { x: 0, y: 0 }
    ref: A long reference
edges: []`);
  const match = markup.match(/viewBox="([^"]+)"/);
  const [x, y, width, height] = match[1].split(" ").map(Number);
  const reference = getAnnotationBadgeBounds(diagram.nodes[0].ref, { x: 0, y: 0, width: 190, height: 80 });
  assert.ok(x < 0 && y < 0);
  assert.ok(x <= reference.x && y <= reference.y);
  assert.ok(x + width >= reference.x + reference.width && y + height >= reference.y + reference.height);
  assert.deepEqual(diagram.nodes[0].position, { x: 0, y: 0 });
  assert.equal(diagram.canvas.width, 200);
  assert.equal(diagram.canvas.height, 100);
});

test("annotations survive edit mode while navigation remains an editing action", () => {
  const state = createEditorState();
  state.editingDiagramIndex = 0;
  state.selectedNode = { diagramIndex: 0, nodeId: "first" };
  const annotated = basicNodes.replace("label: First", 'label: First\n    href: "#detail"\n    ref: 1');
  const { markup } = render(`${annotated}\nedges: []`, state);
  assert.match(markup, /class="docdiagram-annotation-ref"/);
  assert.match(markup, /docdiagram-resize-handle/);
  assert.doesNotMatch(markup, /class="docdiagram-node-link"/);
});

test("node links include annotation values in their accessible name", () => {
  const { markup } = render(`${basicNodes.replace("label: First", 'label: First\n    href: "#detail"\n    ref: 1')}\nedges: []`);
  assert.match(markup, /aria-label="First, reference 1"/);
});

test("unannotated diagrams retain their original viewport and image semantics", () => {
  const { markup } = render(`${basicNodes}\nedges: []`);
  assert.match(markup, /viewBox="0 0 600 300"/);
  assert.match(markup, /<svg[^>]+role="img"/);
  assert.doesNotMatch(markup, /docdiagram-annotation/);
});

test("diagram and prose badge colors are independent of node presentation", () => {
  for (const documentColorScheme of ["classic", "fire", "ice", "midnight", "paper"]) {
    for (const documentTheme of ["light", "dark"]) {
      const state = createEditorState();
      state.documentColorScheme = documentColorScheme;
      state.documentTheme = documentTheme;
      const { markup, diagram } = render(
        `${basicNodes.replace("label: First", "label: First\n    ref: 0\n    palette: danger")}\nedges: []`, state);
      const { node, bounds } = new FlowchartIndex(diagram).entries[0];
      assert.ok(markup.includes(badge(node.ref, getAnnotationBadgeBounds(node.ref, bounds), state)));
    }
  }
});
