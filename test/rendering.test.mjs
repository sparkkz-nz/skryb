import { assert, core, fs, path, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;
const runtime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");

const {
  getResizeNodeOrigin,
  resizeFlowchartNode,
  FlowchartIndex,
  flattenFlowchartNodes,
  getFlowchartNodeBounds,
  reparentFlowchartNode,
  deleteNode,
  parseDiagram,
  renderDiagram,
  serializeDiagram,
  getNodeGeometry,
  renderNodeBody,
  buildEdgePath,
  buildFlowchartEdgeGeometries,
  clampZoom
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

test("diagram markup provides compact view-mode zoom, export, and edit controls", () => {
  const markup = renderDiagram(flowchartSource([
    "canvas:",
    "  width: 800",
    "  height: 500",
    "nodes:",
    "  - id: api",
    "    shape: rounded-rectangle",
    "    label: API",
    "    position: { x: 100, y: 100 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ].join("\n")), 0);

  assert.match(markup, /class="docdiagram-diagram-toolbar"/);
  assert.match(markup, /class="docdiagram-icon-button docdiagram-zoom-in"/);
  assert.match(markup, /class="docdiagram-icon-button docdiagram-zoom-out"/);
  assert.match(markup, /class="docdiagram-icon-button docdiagram-fit"/);
  assert.match(markup, /class="docdiagram-icon-button docdiagram-export-toggle"/);
  assert.match(markup, /class="docdiagram-icon-button docdiagram-start-editing"/);
  assert.match(markup, /aria-label="Zoom in"/);
  assert.match(markup, /aria-label="Zoom to fit"/);
  assert.match(markup, /aria-label="Export diagram"/);
  assert.match(markup, /aria-label="Edit diagram"/);
  assert.match(markup, />Open full diagram<\/button>/);
  assert.match(markup, />Save as SVG<\/button>/);
  assert.match(markup, />Print \/ Save as PDF<\/button>/);
});

test("diagram descriptions provide distinct accessible SVG metadata and round-trip through exports", () => {
  const flowchart = flowchartSource([
    "id: payment-flow",
    "description: The customer submits a payment that the Payments API stores.",
    "canvas: auto",
    "nodes:",
    "edges:"
  ]);
  const sequence = sequenceSource([
    "description: The customer receives the payment result.",
    "participants:",
    "  - id: customer",
    "    label: Customer",
    "messages:",
    "  - from: customer",
    "    to: customer",
    "    label: Payment result"
  ]);

  const captionedMarkup = renderDiagram(flowchart, 2, {
    id: "payment-flow",
    caption: "Figure 1: Payment flow"
  });
  assert.match(captionedMarkup, /role="img" aria-labelledby="docdiagram-title-2" aria-describedby="docdiagram-description-2"/);
  assert.match(captionedMarkup, /<title id="docdiagram-title-2">Figure 1: Payment flow<\/title>/);
  assert.match(captionedMarkup, /<desc id="docdiagram-description-2">The customer submits a payment that the Payments API stores\.<\/desc>/);

  const uncaptionedMarkup = renderDiagram(sequence, 3);
  assert.match(uncaptionedMarkup, /role="img" aria-labelledby="docdiagram-title-3"/);
  assert.match(uncaptionedMarkup, /<title id="docdiagram-title-3">The customer receives the payment result\.<\/title>/);
  assert.doesNotMatch(uncaptionedMarkup, /aria-label="Sequence diagram"/);

  const parsed = parseDiagram(flowchart);
  assert.equal(parsed.description, "The customer submits a payment that the Payments API stores.");
  assert.equal(parseDiagram(serializeDiagram(parsed)).description, parsed.description);
  assert.match(serializeDiagram(parsed), /^description: The customer submits a payment that the Payments API stores\.$/m);
  assert.throws(
    () => parseDiagram(flowchartSource(["description: 42", "canvas: auto", "nodes:", "edges:"])),
    /Diagram description must be a string/
  );
});

test("flowchart rendering uses the deterministic multiline edge-label geometry", () => {
  const source = flowchartSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 100 }",
    "    size: { width: 100, height: 60 }",
    "  - id: ledger",
    "    label: Ledger",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 100 }",
    "    size: { width: 100, height: 60 }",
    "edges:",
    "  - source: api",
    "    target: ledger",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    route: straight",
    "    label: |-",
    "      Submit",
    "      payment"
  ]);
  const diagram = parseDiagram(source);
  const first = buildFlowchartEdgeGeometries(diagram)[0].label;
  const second = buildFlowchartEdgeGeometries(diagram)[0].label;

  assert.deepEqual(JSON.parse(JSON.stringify(first)), JSON.parse(JSON.stringify(second)));
  assert.deepEqual(JSON.parse(JSON.stringify(first.lines)), ["Submit", "payment"]);
  assert.equal(first.bounds.height, 32);
  assert.match(renderDiagram(source, 0), new RegExp(`<text x="${first.center.x}" y="${first.startY}"[^>]*><tspan x="${first.center.x}">Submit</tspan><tspan x="${first.center.x}" dy="16">payment</tspan></text>`));
});

test("flowchart nodes support arbitrary nesting with relative coordinates and edge endpoints", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 800",
    "  height: 500",
    "nodes:",
    "  - id: platform",
    "    label: Platform",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 80 }",
    "    size: { width: 400, height: 300 }",
    "    children:",
    "      - id: service",
    "        label: Service",
    "        shape: oval",
    "        position: { x: 40, y: 50 }",
    "        size: { width: 200, height: 140 }",
    "        children:",
    "          - id: store",
    "            label: Store",
    "            shape: database",
    "            position: { x: 30, y: 40 }",
    "            size: { width: 120, height: 80 }",
    "  - id: client",
    "    label: Client",
    "    shape: rounded-rectangle",
    "    position: { x: 600, y: 180 }",
    "    size: { width: 120, height: 60 }",
    "edges:",
    "  - source: platform",
    "    target: store",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "  - source: store",
    "    target: client",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const entries = flattenFlowchartNodes(diagram);

  assert.equal(entries.length, 4);
  assert.equal(
    JSON.stringify(getFlowchartNodeBounds(diagram, entries.find((entry) => entry.node.id === "store").node)),
    JSON.stringify({ x: 170, y: 170, width: 120, height: 80 })
  );
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));

  const markup = renderDiagram(source, 0);
  assert.match(markup, /data-node-id="platform"/);
  assert.match(markup, /data-node-id="store"/);
  assert.match(markup, /data-node-id="client"/);
});

test("FlowchartIndex preserves traversal order, hierarchy relationships, and snapshot boundaries", () => {
  const diagram = parseDiagram(flowchartSource([
    "nodes:",
    "  - id: platform",
    "    label: Platform",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 80 }",
    "    size: { width: 400, height: 300 }",
    "    children:",
    "      - id: service",
    "        label: Service",
    "        shape: rounded-rectangle",
    "        position: { x: 40, y: 50 }",
    "        children:",
    "          - id: store",
    "            label: Store",
    "            shape: database",
    "            position: { x: 30, y: 40 }",
    "  - id: client",
    "    label: Client",
    "    shape: rounded-rectangle",
    "    position: { x: 600, y: 180 }",
    "edges:"
  ]));
  const index = new FlowchartIndex(diagram);
  const platform = index.getById("platform").node;
  const service = index.getById("service").node;
  const store = index.getById("store").node;
  const client = index.getById("client").node;

  assert.deepEqual(Array.from(index.entries, (entry) => entry.node.id), ["platform", "service", "store", "client"]);
  assert.equal(index.getByNode(store), index.getById("store"));
  assert.deepEqual({ ...index.getById("store").bounds }, { x: 170, y: 170, width: 190, height: 80 });
  assert.equal(index.contains(platform, store), true);
  assert.equal(index.contains(service, client), false);
  assert.equal(index.isRelated(platform, store), true);
  assert.deepEqual(Array.from(index.descendants(platform), (entry) => entry.node.id), ["service", "store"]);

  store.position.x = 60;
  assert.equal(index.getById("store").position.x, 170, "an index remains stable for its operation");
  assert.equal(new FlowchartIndex(diagram).getById("store").position.x, 200, "a rebuilt index sees mutations");
});

test("resizing from each corner anchors the opposite corner and preserves nested positions", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "  width: 800",
    "  height: 500",
    "nodes:",
    "  - id: container",
    "    label: Container",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 80 }",
    "    size: { width: 300, height: 200 }",
    "    children:",
    "      - id: child",
    "        label: Child",
    "        shape: rounded-rectangle",
    "        position: { x: 40, y: 50 }",
    "        size: { width: 120, height: 60 }",
    "edges:"
  ].join("\n")));
  const container = diagram.nodes[0];
  const child = container.children[0];
  const childBounds = getFlowchartNodeBounds(diagram, child);

  const origin = getResizeNodeOrigin(container);
  resizeFlowchartNode(diagram, container, "top-left", -30, -20, origin);
  resizeFlowchartNode(diagram, container, "top-left", -60, -40, origin);

  assert.equal(JSON.stringify(container.position), JSON.stringify({ x: 40, y: 40 }));
  assert.equal(JSON.stringify(container.size), JSON.stringify({ width: 360, height: 240 }));
  assert.equal(JSON.stringify(getFlowchartNodeBounds(diagram, child)), JSON.stringify(childBounds));

  const resizeCases = [
    { corner: "top-right", horizontalDelta: 60, verticalDelta: -40, position: { x: 100, y: 40 } },
    { corner: "bottom-left", horizontalDelta: -60, verticalDelta: 40, position: { x: 40, y: 80 } },
    { corner: "bottom-right", horizontalDelta: 60, verticalDelta: 40, position: { x: 100, y: 80 } }
  ];
  for (const { corner, horizontalDelta, verticalDelta, position } of resizeCases) {
    const node = {
      id: corner,
      label: corner,
      shape: "rounded-rectangle",
      position: { x: 100, y: 80 },
      size: { width: 300, height: 200 }
    };
    const oneNodeDiagram = { canvas: { width: 800, height: 500 }, nodes: [node], edges: [] };
    resizeFlowchartNode(oneNodeDiagram, node, corner, horizontalDelta, verticalDelta);

    assert.equal(JSON.stringify(node.position), JSON.stringify(position));
    assert.equal(JSON.stringify(node.size), JSON.stringify({ width: 360, height: 240 }));
  }
});

test("flowchart node text stack alignment parses, renders, and round-trips", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 400",
    "  height: 240",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    subtitle: Owns intents",
    "    shape: rounded-rectangle",
    "    position: { x: 40, y: 50 }",
    "    size: { width: 200, height: 120 }",
    "    textVAlign: top",
    "    textHAlign: left",
    "edges:"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const markup = renderDiagram(source, 0);

  assert.equal(diagram.nodes[0].textVAlign, "top");
  assert.equal(diagram.nodes[0].textHAlign, "left");
  assert.match(markup, /<text x="52" y="76\.4" text-anchor="start" class="docdiagram-node-label"/);
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));
  assert.throws(
    () => parseDiagram(source.replace("textHAlign: left", "textHAlign: justify")),
    /Unsupported node textHAlign/
  );
});

test("database geometry separates the filled body from its top seam", () => {
  const geometry = getNodeGeometry({ shape: "database" }, 10, 20, 180, 100);
  const body = renderNodeBody(geometry, { fill: "#123456", stroke: "#abcdef" }, 2);

  assert.match(body, /class="docdiagram-node-body"[^>]*fill="#123456"[^>]*stroke="#abcdef"/);
  assert.match(body, /class="docdiagram-node-detail"[^>]*stroke="#abcdef"[^>]*fill="none"/);
});

test("drag reparenting uses center containment and preserves absolute position", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "  width: 800",
    "  height: 500",
    "nodes:",
    "  - id: first-parent",
    "    label: First parent",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 100 }",
    "    size: { width: 240, height: 180 }",
    "  - id: second-parent",
    "    label: Second parent",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 100 }",
    "    size: { width: 240, height: 180 }",
    "  - id: child",
    "    label: Child",
    "    shape: oval",
    "    position: { x: 420, y: 140 }",
    "    size: { width: 180, height: 80 }",
    "edges:"
  ].join("\n")));

  const child = flattenFlowchartNodes(diagram).find((entry) => entry.node.id === "child").node;
  const before = getFlowchartNodeBounds(diagram, child);
  reparentFlowchartNode(diagram, "child");
  const after = getFlowchartNodeBounds(diagram, child);

  assert.deepEqual(after, before);
  assert.equal(diagram.nodes.find((node) => node.id === "second-parent").children[0].id, "child");

  child.position = { x: 300, y: 300 };
  reparentFlowchartNode(diagram, "child");
  assert.ok(diagram.nodes.some((node) => node.id === "child"));
});

test("deleting a final child omits empty children and preserves a parseable diagram", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "  width: 400",
    "  height: 240",
    "nodes:",
    "  - id: parent",
    "    label: Parent",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 20 }",
    "    children:",
    "      - id: child",
    "        label: Child",
    "        shape: oval",
    "        position: { x: 20, y: 20 }",
    "edges:"
  ].join("\n")));

  deleteNode(diagram, "child");
  const serialized = serializeDiagram(diagram);

  assert.doesNotMatch(serialized, /children:/);
  assert.doesNotThrow(() => parseDiagram(serialized));
});

test("rejects unsupported top-level diagram sections", () => {
  assert.throws(
    () => parseDiagram(flowchartSource([
      "canvas:",
      "  width: 400",
      "  height: 240",
      "bogusSection:",
      "  value: unexpected",
      "nodes:",
      "edges:"
    ].join("\n"))),
    /Unsupported diagram section: bogusSection/
  );
});

test("sequence diagrams parse, round-trip, and render with lightweight edit controls", () => {
  const source = sequenceSource([
    "theme: dark",
    "participants:",
    "  - id: client",
    "    label: Client",
    "    kind: actor",
    "    palette: accent",
    "    size: { width: 200, height: 56 }",
    "  - id: server",
    "    label: Server",
    "    palette: success",
    "    size: { width: 200, height: 56 }",
    "messages:",
    "  - from: client",
    "    to: server",
    "    label: GET /api/data",
    "    style: solid",
    "  - from: server",
    "    to: client",
    "    label: 200 OK",
    "    style: dashed",
    "activations:",
    "  - participant: server",
    "    from: 1",
    "    to: 2",
    "notes:",
    "  - at: server",
    "    after: 1",
    "    label: Process request",
    "    palette: highlight",
    "    size: { width: 220, height: 64 }",
    "groups:",
    "  - label: Authentication",
    "    from: 1",
    "    to: 2"
  ].join("\n"));
  const diagram = parseDiagram(source);

  assert.equal(diagram.type, "sequence");
  assert.equal(diagram.participants[0].kind, "actor");
  assert.equal(diagram.messages[0].style, "solid");
  assert.equal(diagram.messages[1].style, "dashed");
  assert.equal(diagram.activations[0].participant, "server");
  assert.equal(diagram.participants[1].size.width, 200);
  assert.equal(diagram.notes[0].size.height, 64);
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));

  const markup = renderDiagram(source, 1);

  assert.match(markup, /aria-label="Sequence diagram"/);
  assert.match(markup, /Client/);
  assert.match(markup, /Server/);
  assert.match(markup, /GET \/api\/data/);
  assert.match(markup, /200 OK/);
  assert.match(markup, /Process request/);
  assert.match(markup, /Authentication/);
  assert.match(markup, /docdiagram-sequence-lifeline/);
  assert.match(markup, /docdiagram-sequence-activation/);
  assert.match(markup, /stroke-dasharray="8 5"/);
  assert.match(markup, /width="200" height="56"/);
  assert.match(markup, /width="220" height="64"/);
  assert.match(markup, /docdiagram-sequence-activation[^>]*fill="#DCFCE7"[^>]*stroke="#16A34A"/);
  assert.ok(markup.indexOf("docdiagram-sequence-activation") < markup.indexOf("docdiagram-sequence-note"));
  assert.match(markup, /docdiagram-start-editing/);
  assert.doesNotMatch(markup, /docdiagram-create-node/);
});

test("sequence diagrams use configurable participant layout and expand the canvas", () => {
  const defaultMarkup = renderDiagram(sequenceSource([
    "participants:",
    "  - id: client",
    "    label: \"Client\\nApp\"",
    "  - id: service",
    "    label: \"Service\\nAPI\"",
    "messages:",
    "  - from: client",
    "    to: service",
    "    label: Request"
  ].join("\n")), 0);
  const source = sequenceSource([
    "canvas:",
    "  width: 600",
    "  participantSpacing: 260",
    "  participantSize: { width: 180, height: 60 }",
    "participants:",
    "  - id: client",
    "    label: \"Client\\nApp\"",
    "  - id: service",
    "    label: \"Service\\nAPI\"",
    "    size: { width: 120, height: 48 }",
    "  - id: database",
    "    label: Database",
    "messages:",
    "  - from: client",
    "    to: service",
    "    label: Request",
    "  - from: service",
    "    to: database",
    "    label: Query"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const markup = renderDiagram(source, 0);

  assert.match(defaultMarkup, /<rect x="0" y="28" width="180" height="42"/);
  assert.match(defaultMarkup, /M 90 \d+ L 310 \d+/);
  assert.equal(diagram.canvas.participantSpacing, 260);
  assert.equal(JSON.stringify(diagram.canvas.participantSize), JSON.stringify({ width: 180, height: 60 }));
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));
  assert.match(markup, /viewBox="0 0 700 \d+"/);
  assert.match(markup, /<rect x="0" y="28" width="180" height="60"/);
  assert.match(markup, /<rect x="290" y="28" width="120" height="48"/);
  assert.match(markup, /<rect x="520" y="28" width="180" height="60"/);
  assert.match(markup, /<tspan x="90">Client<\/tspan><tspan x="90" dy="16">App<\/tspan>/);
  assert.match(markup, /<tspan x="350">Service<\/tspan><tspan x="350" dy="16">API<\/tspan>/);
  assert.match(markup, /M 90 \d+ L 350 \d+"/);
  assert.match(markup, /M 350 \d+ L 610 \d+"/);
  assert.throws(
    () => parseDiagram(source.replace("participantSpacing: 260", "participantSpacing: 0")),
    /Sequence canvas.participantSpacing must be a positive number/
  );
  assert.throws(
    () => parseDiagram(source.replace("{ width: 180, height: 60 }", "180")),
    /Sequence canvas.participantSize must be a mapping/
  );
});

test("clampZoom limits diagram zoom to supported discrete bounds", () => {
  assert.equal(clampZoom(10), 25);
  assert.equal(clampZoom(125), 125);
  assert.equal(clampZoom(600), 600);
  // A wheel gesture can raise the zoom continuously, so it needs a ceiling to
  // stop a runaway one leaving the diagram unrecoverably large.
  assert.equal(clampZoom(5000), 800);
});

test("diagram viewports can be vertically resized", () => {
  const diagramEditor = fs.readFileSync(path.resolve(__dirname, "..", "src", "editor", "diagram-editor.ts"), "utf8");

  assert.match(runtime, /\.docdiagram \{[\s\S]*resize: vertical/);
  assert.match(diagramEditor, /function isViewportResizePointer/);
  assert.match(diagramEditor, /!isViewportResizePointer\(frame, event\)/);
});

test("a diagram frame never scrolls natively, so the camera offset has no bounds", () => {
  // Native scrolling cannot reach past the canvas origin, so anything the camera
  // moved left of or above it was unreachable. The camera offset is now the only
  // thing that positions the canvas, which is what lets a diagram be pushed into
  // a corner - or right out of view, with Zoom to fit to recover.
  assert.match(runtime, /\.docdiagram \{[^}]*overflow: hidden;/);
  assert.doesNotMatch(runtime, /\.docdiagram \{[^}]*overflow: auto;/);
  // The scrollbar-hiding rules the frame used to need are gone with it.
  assert.doesNotMatch(runtime, /\.docdiagram::-webkit-scrollbar/);
});

test("flowchart edge waypoints parse, render, route, and round-trip", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: source",
    "    label: Source",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "  - id: target",
    "    label: Target",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 160 }",
    "edges:",
    "  - source: source",
    "    target: target",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    waypoint: { x: 300, y: 80 }"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const path = buildEdgePath(
    { x: 190, y: 40 },
    { x: 400, y: 200 },
    "right",
    "left",
    "orthogonal",
    diagram.edges[0].waypoint
  );

  assert.equal(JSON.stringify(diagram.edges[0].waypoint), JSON.stringify({ x: 300, y: 80 }));
  assert.match(path.path, /L 300 80/);
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));
  assert.match(renderDiagram(source, 0), /M 190 40 L 300 40 L 300 80/);
  assert.throws(
    () => parseDiagram(source.replace("{ x: 300, y: 80 }", "{ x: 300 }")),
    /waypoint requires finite x and y coordinates/
  );

  const behindSource = buildEdgePath(
    { x: 190, y: 40 },
    { x: 400, y: 200 },
    "right",
    "left",
    "orthogonal",
    { x: 120, y: 80 }
  );
  assert.match(behindSource.path, /^M 190 40 L 214 40 L 214 80 L 120 80/);

  const behindTarget = buildEdgePath(
    { x: 190, y: 40 },
    { x: 400, y: 200 },
    "right",
    "left",
    "orthogonal",
    { x: 450, y: 80 }
  );
  assert.match(behindTarget.path, /L 376 80 L 376 200 L 400 200$/);
});

test("runtime chrome uses the document colour scheme for the page background", () => {
  assert.match(runtime, /background: var\(--docdiagram-page-background, #ffffff\);/);
  assert.match(runtime, /--docdiagram-page-background/);
});

test("source editor chrome includes insert and help controls with an accessible close button", () => {
  assert.match(runtime, /class="docdiagram-source-menu-toggle" aria-label="Source editor menu"/);
  assert.match(runtime, /data-source-template="flowchart"/);
  assert.match(runtime, /data-source-template="diagram-reference"/);
  assert.match(runtime, /class="docdiagram-source-help">Help/);
  assert.match(runtime, /class="docdiagram-source-close" aria-label="Close source editor"/);
});

test("callouts use a prominent left accent border", () => {
  assert.match(runtime, /\.docdiagram-callout \{\s*border-left-width: 8px;/);
});

