import { assert, core, fs, path, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;
const runtime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");

const {
  supportedDiagramTypes,
  colourSchemes,
  nodeShapes,
  edgeAnchors,
  edgeRoutes,
  edgeStrokeTypes,
  edgeMarkerStyles,
  getGridSize,
  expandCanvasForNode,
  createUniqueNodeId,
  getDefaultNodePosition,
  createNode,
  duplicateNode,
  createConnector,
  reconnectConnector,
  deleteConnector,
  deleteNode,
  getNodeEffectiveStyle,
  getEdgeEffectiveStyle,
  parseDiagram,
  resolveDocument,
  setFrontmatterTheme,
  renderDiagram,
  snapToGrid,
  clampNodeSize,
  serializeDiagram,
  setNodeLabel,
  setNodeShape,
  setNodeSubtitle,
  setNodeStyleOverride,
  setNodeColorPalette,
  setNodeSize,
  setNodeStrokeType,
  setEdgeLabel,
  setEdgeRoute,
  setEdgeStrokeType,
  setEdgeAnchor,
  setEdgeStyleOverride,
  setStyleStrokeWidth,
  splitTextLines,
  measureTextWidth,
  wrapTextLines,
  computeNodeTextLayout,
  getNodeGeometry,
  renderNodeBody,
  buildEdgePath,
  buildEdgeInspectorFields,
  buildNodeInspectorFields,
  paletteRoles,
  desugarBlockScalars,
  parseTextShapeInlineRuns
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

function twoNodeEdgeSource(edgeLines) {
  return flowchartSource([
    "theme: light",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "  - id: db",
    "    label: Payments DB",
    "    shape: rounded-rectangle",
    "    position: { x: 300, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: db",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    ...edgeLines
  ].join("\n"));
}

test("expanding a canvas keeps a moved node and padding inside its bounds", () => {
  const diagram = {
    canvas: { width: 800, height: 500 },
    nodes: [],
    edges: []
  };
  const node = {
    position: { x: 760, y: 470 },
    size: { width: 190, height: 80 }
  };

  expandCanvasForNode(diagram, node);

  assert.equal(diagram.canvas.width, 990);
  assert.equal(diagram.canvas.height, 590);
});

test("expanding a canvas left or up shifts every node into positive coordinates", () => {
  const diagram = {
    canvas: { width: 800, height: 500 },
    nodes: [
      { id: "moved", position: { x: -100, y: -60 }, size: { width: 190, height: 80 } },
      { id: "existing", position: { x: 300, y: 200 }, size: { width: 190, height: 80 } }
    ],
    edges: []
  };

  expandCanvasForNode(diagram, diagram.nodes[0]);

  assert.equal(JSON.stringify(diagram.nodes[0].position), JSON.stringify({ x: 40, y: 40 }));
  assert.equal(JSON.stringify(diagram.nodes[1].position), JSON.stringify({ x: 440, y: 300 }));
  assert.equal(diagram.canvas.width, 940);
  assert.equal(diagram.canvas.height, 600);
});

test("resolves the actual example document's dark theme", () => {
  const source = readTemplateSource(path.resolve(__dirname, "..", "examples", "web-runtime.html"));
  const document = resolveDocument(source);

  assert.equal(document.theme, "dark");
  assert.equal(document.colourScheme, "classic");
  assert.match(document.content, /^# Payments architecture/m);
  assert.match(document.content, /:::grid \{ columns=3 \}/);
  assert.equal(readDiagramSources(document.content).length, 3);
  for (const diagramSource of readDiagramSources(document.content)) {
    assert.doesNotThrow(() => parseDiagram(diagramSource));
  }
});

test("rejects unsupported document themes", () => {
  assert.throws(
    () => resolveDocument("---\ntheme: neon\n---\n# Payments"),
    /Unsupported document theme: neon/
  );
  assert.throws(
    () => resolveDocument("---\ntheme: false\n---\n# Payments"),
    /Unsupported document theme: false/
  );
});

test("resolves the classic colour scheme by default and rejects unsupported schemes", () => {
  assert.equal(resolveDocument("# Payments").colourScheme, "classic");
  assert.equal(resolveDocument("---\ncolourScheme: classic\n---\n# Payments").colourScheme, "classic");
  assert.throws(
    () => resolveDocument("---\ncolourScheme: pastel\n---\n# Payments"),
    /Unsupported document colour scheme: pastel/
  );
});

test("uses an opt-in canvas grid to normalize positions and dimensions", () => {
  assert.equal(getGridSize({ canvas: { grid: 5 } }), 5);
  assert.equal(getGridSize({ canvas: { grid: 0 } }), 0);
  assert.equal(getGridSize({ canvas: {} }), 0);
  assert.equal(snapToGrid(122, 5), 120);
  assert.equal(snapToGrid(123, 5), 125);
  assert.equal(snapToGrid(122.4, 0), 122);
  assert.equal(clampNodeSize(118, 120, 5), 120);
  assert.equal(clampNodeSize(123, 120, 5), 125);
  assert.equal(clampNodeSize(58, 60, 5), 60);
});

test("creates uniquely identified default nodes at a grid-aligned available position", () => {
  const diagram = {
    canvas: { width: 600, height: 300, grid: 10 },
    nodes: [{
      id: "new-node",
      label: "Existing",
      shape: "rounded-rectangle",
      position: { x: 200, y: 110 },
      size: { width: 190, height: 80 }
    }],
    edges: []
  };

  assert.equal(createUniqueNodeId(diagram.nodes), "new-node-2");
  assert.equal(JSON.stringify(getDefaultNodePosition(diagram)), JSON.stringify({ x: 210, y: 190 }));
  const node = createNode(diagram);

  assert.equal(JSON.stringify(node), JSON.stringify({
    id: "new-node-2",
    label: "New node",
    shape: "rounded-rectangle",
    position: { x: 210, y: 190 },
    size: { width: 190, height: 80 }
  }));
});

test("duplicates a node subtree with shape-derived IDs and independent properties", () => {
  const diagram = {
    type: "flowchart",
    canvas: { width: 700, height: 500, grid: 10 },
    nodes: [{
      id: "platform",
      label: "Platform",
      shape: "rounded-rectangle",
      position: { x: 100, y: 100 },
      size: { width: 200, height: 150 },
      palette: "accent",
      strokeType: "double",
      children: [{
        id: "api",
        label: "API",
        shape: "chevron",
        position: { x: 20, y: 30 },
        size: { width: 120, height: 60 },
        style: { stroke: "#123456" },
        strokeType: "dashed"
      }]
    }, {
      id: "roundedrectangle01",
      label: "Existing",
      shape: "rounded-rectangle",
      position: { x: 400, y: 40 },
      size: { width: 120, height: 60 }
    }],
    edges: []
  };
  const duplicate = duplicateNode(diagram, "platform");

  assert.ok(duplicate);
  assert.equal(duplicate.id, "roundedrectangle02");
  assert.equal(duplicate.children[0].id, "chevron01");
  assert.equal(duplicate.label, "Platform");
  assert.equal(duplicate.palette, "accent");
  assert.equal(duplicate.strokeType, "double");
  assert.equal(duplicate.children[0].strokeType, "dashed");
  assert.notEqual(JSON.stringify(duplicate.position), JSON.stringify(diagram.nodes[0].position));
  assert.equal(JSON.stringify(duplicate.children[0].position), JSON.stringify({ x: 20, y: 30 }));
  assert.doesNotMatch(serializeDiagram(diagram), /undefined/);
  assert.doesNotThrow(() => parseDiagram(serializeDiagram(diagram)));

  duplicate.children[0].style.stroke = "#abcdef";
  assert.equal(diagram.nodes[0].children[0].style.stroke, "#123456");
});

test("duplicates a node outside a full canvas instead of overlapping existing content", () => {
  const diagram = {
    type: "flowchart",
    canvas: { width: 300, height: 200 },
    nodes: [{
      id: "full-canvas",
      label: "Full canvas",
      shape: "rounded-rectangle",
      position: { x: 0, y: 0 },
      size: { width: 300, height: 200 }
    }],
    edges: []
  };
  const duplicate = duplicateNode(diagram, "full-canvas");

  assert.ok(duplicate);
  assert.equal(duplicate.position.x, 320);
  assert.equal(duplicate.position.y, 0);
  assert.ok(diagram.canvas.width >= 660);
});

test("creates, reconnects, and deletes connectors without dangling endpoints", () => {
  const diagram = {
    canvas: {},
    nodes: [
      { id: "api", label: "API", shape: "rounded-rectangle" },
      { id: "db", label: "DB", shape: "database" },
      { id: "cache", label: "Cache", shape: "rounded-rectangle" }
    ],
    edges: []
  };
  const edge = createConnector(diagram, "api", "right", "db", "left");

  assert.equal(JSON.stringify(edge), JSON.stringify({
    source: "api",
    target: "db",
    sourceAnchor: "right",
    targetAnchor: "left",
    route: "orthogonal",
    end: "arrow"
  }));
  reconnectConnector(edge, "target", "cache", "top");
  assert.equal(edge.target, "cache");
  assert.equal(edge.targetAnchor, "top");
  assert.deepEqual(deleteConnector(diagram, 0), edge);
  assert.equal(diagram.edges.length, 0);
  assert.equal(deleteConnector(diagram, 3), null);
});

test("cascade deletion and every lifecycle mutation preserve a serializable diagram", () => {
  const diagram = {
    type: "flowchart",
    canvas: { width: 600, height: 300 },
    nodes: [
      { id: "api", label: "API", shape: "rounded-rectangle", position: { x: 20, y: 40 }, size: { width: 190, height: 80 } },
      { id: "db", label: "DB", shape: "database", position: { x: 320, y: 40 }, size: { width: 190, height: 80 } }
    ],
    edges: []
  };
  const created = createNode(diagram);
  const edge = createConnector(diagram, "api", "right", created.id, "left");
  reconnectConnector(edge, "target", "db", "top");

  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));
  assert.equal(JSON.stringify(deleteNode(diagram, "db").deletedEdges), JSON.stringify([edge]));
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));
  assert.equal(diagram.edges.some((candidate) => candidate.source === "db" || candidate.target === "db"), false);
});

test("parses and serializes diagram themes and style overrides", () => {
  const source = flowchartSource([
    "version: 1",
    "id: themed-flow",
    "theme: dark",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "  grid: 5",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "    style: { fill: #123456, text: #FFFFFF }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    style: { stroke: #ABCDEF, strokeWidth: 3 }"
  ].join("\n"));
  const diagram = parseDiagram(source);

  assert.equal(diagram.theme, "dark");
  assert.equal(diagram.canvas.grid, 5);
  assert.equal(JSON.stringify(diagram.nodes[0].style), JSON.stringify({ fill: "#123456", text: "#FFFFFF" }));
  assert.equal(JSON.stringify(diagram.edges[0].style), JSON.stringify({ stroke: "#ABCDEF", strokeWidth: 3 }));
  assert.equal(
    JSON.stringify(parseDiagram(serializeDiagram(diagram))),
    JSON.stringify(diagram)
  );
});

test("renders document-theme defaults and explicit style overrides", () => {
  const source = flowchartSource([
    "theme: dark",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "    style: { fill: #123456, strokeWidth: 4 }",
    "  - id: db",
    "    label: Payments DB",
    "    shape: rounded-rectangle",
    "    position: { x: 300, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: db",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    style: { stroke: #ABCDEF, strokeWidth: 3 }"
  ].join("\n"));

  const markup = renderDiagram(source, 0);

  assert.match(markup, /fill="#123456"/);
  assert.match(markup, /stroke="#3574C7" stroke-width="4"/);
  assert.match(markup, /stroke="#ABCDEF" stroke-width="3"/);
  assert.match(markup, /fill="#EAF2FF"/);
});

test("renders edges as selectable groups with a wide hit target", () => {
  const source = flowchartSource([
    "theme: light",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "  - id: db",
    "    label: Payments DB",
    "    shape: rounded-rectangle",
    "    position: { x: 300, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: db",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    label: Reads and writes"
  ].join("\n"));

  const markup = renderDiagram(source, 2);

  assert.match(markup, /<g class="docdiagram-edge-group" data-diagram-index="2" data-edge-index="0">/);
  assert.match(markup, /<path class="docdiagram-edge-hit"[^>]*stroke="transparent"/);
  assert.match(markup, /Reads and writes/);
  assert.ok(
    markup.indexOf('data-node-id="db"') < markup.indexOf('class="docdiagram-edge-group"'),
    "connector markup follows node markup so connectors render above shapes"
  );
});

test("supportedDiagramTypes, nodeShapes, edgeAnchors, edgeRoutes, and edgeMarkerStyles expose the supported option sets", () => {
  assert.equal(JSON.stringify([...supportedDiagramTypes]), JSON.stringify(["flowchart", "sequence"]));
  assert.equal(JSON.stringify([...nodeShapes]), JSON.stringify(["rounded-rectangle", "circle", "oval", "database", "diamond", "rhombus", "flattened-hexagon", "chevron", "right-chevron", "document", "text"]));
  assert.equal(JSON.stringify([...edgeAnchors]), JSON.stringify(["top", "right", "bottom", "left"]));
  assert.equal(JSON.stringify([...edgeRoutes]), JSON.stringify(["orthogonal", "straight", "curved"]));
  assert.equal(JSON.stringify([...edgeMarkerStyles]), JSON.stringify(["none", "arrow", "circle"]));
});

test("semantic palette roles replace manual fill, stroke, and text overrides together", () => {
  const node = {
    style: { fill: "#ffffff", stroke: "#000000", strokeWidth: 3, text: "#222222" }
  };

  setNodeColorPalette(node, "danger");

  assert.equal(node.palette, "danger");
  assert.equal(JSON.stringify(node.style), JSON.stringify({ strokeWidth: 3 }));
  const style = getNodeEffectiveStyle({ theme: "light" }, node);
  assert.equal(style.fill, colourSchemes.classic.light.danger.fill);
  assert.equal(style.stroke, colourSchemes.classic.light.danger.stroke);
  assert.equal(style.text, colourSchemes.classic.light.danger.text);
  assert.equal(style.strokeWidth, 3);

  setNodeStyleOverride(node, "fill", "#ffffff");
  setNodeStyleOverride(node, "stroke", "#000000");
  setNodeStyleOverride(node, "text", "#222222");
  const overridden = getNodeEffectiveStyle({ theme: "light" }, node);
  assert.equal(overridden.fill, "#ffffff");
  assert.equal(overridden.stroke, "#000000");
  assert.equal(overridden.text, "#222222");

  setNodeColorPalette(node, "accent");
  assert.equal(JSON.stringify(node.style), JSON.stringify({ strokeWidth: 3 }));
  const reselected = getNodeEffectiveStyle({ theme: "light" }, node);
  assert.equal(reselected.fill, colourSchemes.classic.light.accent.fill);
  assert.equal(reselected.stroke, colourSchemes.classic.light.accent.stroke);
  assert.equal(reselected.text, colourSchemes.classic.light.accent.text);
});

test("colour schemes provide every semantic role in distinct light and dark variants", () => {
  assert.deepEqual(Object.keys(colourSchemes), ["classic", "fire", "ice", "midnight", "paper"]);
  for (const scheme of Object.values(colourSchemes)) {
    assert.deepEqual(Object.keys(scheme.light), Object.keys(scheme.dark));
    assert.equal(Object.keys(scheme.light).length, 14);
    assert.equal(scheme.light.none.fill, "none");
    assert.equal(scheme.light.none.stroke, "none");
    assert.equal(scheme.dark.none.fill, "none");
    assert.equal(scheme.dark.none.stroke, "none");
  }
  assert.notEqual(colourSchemes.ice.light.accent.fill, colourSchemes.ice.dark.accent.fill);
});

test("palette selection serializes without an empty style mapping", () => {
  const diagram = parseDiagram(twoNodeEdgeSource([]));

  setNodeColorPalette(diagram.nodes[0], "neutral");

  assert.equal(diagram.nodes[0].style, undefined);
  assert.equal(
    JSON.stringify(parseDiagram(serializeDiagram(diagram))),
    JSON.stringify(diagram)
  );
});

test("a None palette clears fill/stroke to none for any node shape and restores when another palette is chosen", () => {
  assert.ok(paletteRoles.includes("none"));

  const diagram = parseDiagram(twoNodeEdgeSource([]));
  const node = diagram.nodes[0];

  setNodeColorPalette(node, "none");
  assert.equal(node.palette, "none");
  const noneStyle = getNodeEffectiveStyle(diagram, node, "light", "classic");
  assert.equal(noneStyle.fill, "none");
  assert.equal(noneStyle.stroke, "none");

  // The None palette must validate and round-trip through the canonical serializer/parser.
  const serialized = serializeDiagram(diagram);
  assert.match(serialized, /palette: none/);
  const reparsed = parseDiagram(serialized);
  assert.equal(reparsed.nodes[0].palette, "none");
  assert.equal(JSON.stringify(reparsed), JSON.stringify(diagram));

  // Choosing a different palette afterwards must restore that palette's normal styling.
  setNodeColorPalette(node, "danger");
  const restored = getNodeEffectiveStyle(diagram, node, "light", "classic");
  assert.equal(restored.fill, colourSchemes.classic.light.danger.fill);
  assert.equal(restored.stroke, colourSchemes.classic.light.danger.stroke);
});

test("requires supported node shapes and strokes, edge strokes, and explicit anchors without retaining style.width aliases", () => {
  const valid = twoNodeEdgeSource(["    route: curved", "    strokeType: double", "    style: { strokeWidth: 3 }"])
    .replace("    shape: rounded-rectangle", "    shape: rounded-rectangle\n    strokeType: dashed");
  const diagram = parseDiagram(valid);

  assert.equal(diagram.nodes[0].shape, "rounded-rectangle");
  assert.equal(diagram.nodes[0].strokeType, "dashed");
  assert.equal(diagram.edges[0].sourceAnchor, "right");
  assert.equal(diagram.edges[0].targetAnchor, "left");
  assert.equal(diagram.edges[0].route, "curved");
  assert.equal(diagram.edges[0].strokeType, "double");
  assert.equal(diagram.edges[0].style.strokeWidth, 3);
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));

  assert.throws(
    () => parseDiagram(valid.replace("    shape: rounded-rectangle\n", "")),
    /Node "api" requires a shape/
  );
  assert.throws(
    () => parseDiagram(valid.replace("    sourceAnchor: right\n", "")),
    /Edge "api" -> "db" requires a sourceAnchor/
  );
  assert.throws(
    () => parseDiagram(valid.replace("    targetAnchor: left\n", "")),
    /Edge "api" -> "db" requires a targetAnchor/
  );
  assert.throws(
    () => parseDiagram(valid.replace("rounded-rectangle", "star")),
    /Unsupported node shape: star/
  );
  assert.throws(
    () => parseDiagram(valid.replace("strokeType: dashed", "strokeType: wavy")),
    /Unsupported node strokeType: wavy/
  );
  assert.throws(
    () => parseDiagram(valid.replace("sourceAnchor: right", "sourceAnchor: centre")),
    /Unsupported edge sourceAnchor: centre/
  );
  assert.throws(
    () => parseDiagram(valid.replace("route: curved", "route: loop")),
    /Unsupported edge route: loop/
  );
  assert.throws(
    () => parseDiagram(valid.replace("strokeType: double", "strokeType: wavy")),
    /Unsupported edge strokeType: wavy/
  );
  assert.throws(
    () => parseDiagram(valid.replace("strokeWidth: 3", "width: 3")),
    /Edge style\.width is not supported; use style\.strokeWidth/
  );
});

test("resolves effective node and edge styles from theme defaults and overrides", () => {
  const diagram = { theme: "dark", canvas: {}, nodes: [], edges: [] };
  const node = { id: "api", label: "Payments API" };
  const styledNode = { ...node, style: { fill: "#123456" } };

  assert.equal(getNodeEffectiveStyle(diagram, node).fill, "#EAF2FF");
  assert.equal(getNodeEffectiveStyle(diagram, styledNode).fill, "#123456");
  assert.equal(getNodeEffectiveStyle(diagram, styledNode).stroke, "#3574C7");

  const edge = { source: "api", target: "api" };
  const styledEdge = { ...edge, style: { stroke: "#ABCDEF" } };

  assert.equal(getEdgeEffectiveStyle(diagram, edge).stroke, colourSchemes.classic.light.neutral.fill);
  assert.equal(getEdgeEffectiveStyle(diagram, edge).text, colourSchemes.classic.light.background.text);
  assert.equal(getEdgeEffectiveStyle(diagram, edge, "dark", "ice").stroke, colourSchemes.ice.dark.neutral.fill);
  assert.equal(getEdgeEffectiveStyle(diagram, styledEdge).stroke, "#ABCDEF");
});

test("setFrontmatterTheme updates an existing theme key without disturbing other frontmatter", () => {
  const source = "---\ntitle: Payments\ntheme: light\nowner: payments-team\n---\n\n# Payments";
  const updated = setFrontmatterTheme(source, "dark");

  assert.equal(
    updated,
    "---\ntitle: Payments\ntheme: dark\nowner: payments-team\n---\n\n# Payments"
  );
  assert.equal(resolveDocument(updated).theme, "dark");
});

test("setFrontmatterTheme inserts a theme key when frontmatter exists without one", () => {
  const source = "---\ntitle: Payments\n---\n\n# Payments";
  const updated = setFrontmatterTheme(source, "dark");

  assert.equal(resolveDocument(updated).frontmatter.title, "Payments");
  assert.equal(resolveDocument(updated).theme, "dark");
});

test("setFrontmatterTheme creates a frontmatter block when none exists", () => {
  const source = "# Payments architecture\n\nNo frontmatter here.";
  const updated = setFrontmatterTheme(source, "dark");

  assert.equal(resolveDocument(updated).theme, "dark");
  assert.match(updated, /^---\ntheme: dark\n---\n# Payments architecture/);
});

test("node inspector helpers mutate the canonical model and round-trip through YAML", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 300",
    "  grid: 10",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const node = diagram.nodes[0];

  setNodeLabel(node, "  Payment Gateway  ");
  setNodeStyleOverride(node, "fill", "#0000ff");
  setNodeStrokeType(node, "double");
  setStyleStrokeWidth(node, "3.6");
  setNodeSize(diagram, node, "width", 123);
  setNodeSize(diagram, node, "height", 58);

  assert.equal(node.label, "Payment Gateway");
  assert.equal(node.style.fill, "#0000ff");
  assert.equal(node.strokeType, "double");
  assert.equal(node.style.strokeWidth, 4);
  assert.equal(node.size.width, 120);
  assert.equal(node.size.height, 60);

  const reparsed = parseDiagram(serializeDiagram(diagram));
  assert.equal(reparsed.nodes[0].label, "Payment Gateway");
  assert.equal(reparsed.nodes[0].style.fill, "#0000ff");
  assert.equal(reparsed.nodes[0].strokeType, "double");
  assert.equal(reparsed.nodes[0].style.strokeWidth, 4);
  assert.equal(reparsed.nodes[0].size.width, 120);
  assert.equal(reparsed.nodes[0].size.height, 60);
});

test("setNodeLabel permits clearing a node label", () => {
  const node = { id: "api", label: "Payments API" };
  setNodeLabel(node, "   ");
  assert.equal(node.label, "");
});

test("edge inspector helpers mutate the canonical model and round-trip through YAML", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    label: Retry"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const edge = diagram.edges[0];

  setEdgeLabel(edge, "  Create payment intent  ");
  setEdgeRoute(edge, "straight");
  setEdgeStrokeType(edge, "dashed");
  setEdgeAnchor(edge, "source", "bottom");
  setEdgeAnchor(edge, "target", "top");
  setEdgeStyleOverride(edge, "stroke", "#ff0000");
  setEdgeStyleOverride(edge, "text", "#00ff00");
  setStyleStrokeWidth(edge, "4.7");

  assert.equal(edge.label, "Create payment intent");
  assert.equal(edge.route, "straight");
  assert.equal(edge.strokeType, "dashed");
  assert.equal(edge.sourceAnchor, "bottom");
  assert.equal(edge.targetAnchor, "top");
  assert.equal(edge.style.stroke, "#ff0000");
  assert.equal(edge.style.text, "#00ff00");
  assert.equal(edge.style.strokeWidth, 5);

  const reparsed = parseDiagram(serializeDiagram(diagram));
  assert.equal(reparsed.edges[0].label, "Create payment intent");
  assert.equal(reparsed.edges[0].route, "straight");
  assert.equal(reparsed.edges[0].strokeType, "dashed");
  assert.equal(reparsed.edges[0].sourceAnchor, "bottom");
  assert.equal(reparsed.edges[0].targetAnchor, "top");
  assert.equal(reparsed.edges[0].style.stroke, "#ff0000");
  assert.equal(reparsed.edges[0].style.strokeWidth, 5);
});

test("editor mutations reject unsupported validated values", () => {
  const node = { id: "api", label: "API", shape: "rounded-rectangle", palette: "accent" };
  const edge = { source: "api", target: "db", sourceAnchor: "right", targetAnchor: "left", route: "orthogonal" };

  setNodeShape(node, "hexagon");
  setNodeColorPalette(node, "rainbow");
  setNodeStrokeType(node, "wavy");
  setEdgeRoute(edge, "diagonal");
  setEdgeStrokeType(edge, "wavy");
  setEdgeAnchor(edge, "source", "middle");
  reconnectConnector(edge, "target", "cache", "centre");

  assert.equal(node.shape, "rounded-rectangle");
  assert.equal(node.palette, "accent");
  assert.equal(node.strokeType, undefined);
  assert.equal(edge.route, "orthogonal");
  assert.equal(edge.strokeType, undefined);
  assert.equal(edge.sourceAnchor, "right");
  assert.equal(edge.target, "db");
  assert.equal(edge.targetAnchor, "left");
  assert.throws(
    () => createConnector({ nodes: [], edges: [] }, "api", "middle", "db", "left"),
    /Connector anchors must be supported edge anchors/
  );
});

test("buildEdgePath produces deterministic geometry for every route and anchor pair", () => {
  const source = { x: 100, y: 100 };
  const target = { x: 300, y: 220 };

  for (const route of edgeRoutes) {
    for (const sourceAnchor of edgeAnchors) {
      for (const targetAnchor of edgeAnchors) {
        const edgePath = buildEdgePath(source, target, sourceAnchor, targetAnchor, route);
        assert.match(edgePath.path, /^M 100 100 /, `${route} ${sourceAnchor} -> ${targetAnchor}`);
        assert.match(edgePath.path, /300 220$/, `${route} ${sourceAnchor} -> ${targetAnchor}`);
        assert.equal(edgePath.hitPath, edgePath.path);
        assert.ok(Number.isFinite(edgePath.midpoint.x) && Number.isFinite(edgePath.midpoint.y));
        assert.ok(Number.isFinite(edgePath.startTangent.x) && Number.isFinite(edgePath.startTangent.y));
        assert.ok(Number.isFinite(edgePath.endTangent.x) && Number.isFinite(edgePath.endTangent.y));
      }
    }
  }

  assert.equal(
    JSON.stringify(buildEdgePath(source, target, "right", "left", "curved")),
    JSON.stringify({
      path: "M 100 100 C 200 100 200 220 300 220",
      midpoint: { x: 200, y: 160 },
      startTangent: { x: 100, y: 0 },
      endTangent: { x: 100, y: 0 },
      hitPath: "M 100 100 C 200 100 200 220 300 220"
    })
  );

  const overlapping = buildEdgePath(source, source, "right", "right", "orthogonal");
  assert.equal(overlapping.path, "M 100 100 L 100 100");
  assert.deepEqual(JSON.parse(JSON.stringify(overlapping.midpoint)), { x: 100, y: 100 });

  const sameSide = buildEdgePath({ x: 300, y: 100 }, { x: 100, y: 100 }, "right", "right", "orthogonal");
  // Both anchors point right and the endpoints share a y, so a C bend would
  // collapse onto that line and double back. The edge routes clear of both
  // instead, leaving the source rightwards and entering the target's right side.
  assert.equal(sameSide.path, "M 300 100 L 400 100 L 400 0 L 200 0 L 200 100 L 100 100");

  const balanced = buildEdgePath(source, target, "right", "left", "orthogonal");
  assert.equal(balanced.path, "M 100 100 L 200 100 L 200 220 L 300 220");

  const rightTarget = buildEdgePath({ x: 190, y: 40 }, { x: 300, y: 40 }, "right", "right", "orthogonal");
  assert.equal(rightTarget.path, "M 190 40 L 245 40 L 245 -15 L 355 -15 L 355 40 L 300 40");
  assert.deepEqual(JSON.parse(JSON.stringify(rightTarget.endTangent)), { x: -55, y: 0 });

  const reverse = buildEdgePath({ x: 490, y: 140 }, { x: 100, y: 140 }, "right", "left", "orthogonal");
  assert.equal(reverse.path, "M 490 140 L 685 140 L 685 -55 L -95 -55 L -95 140 L 100 140");
  assert.deepEqual(JSON.parse(JSON.stringify(reverse.startTangent)), { x: 195, y: 0 });
  assert.deepEqual(JSON.parse(JSON.stringify(reverse.endTangent)), { x: 195, y: 0 });

  const aligned = buildEdgePath({ x: 100, y: 100 }, { x: 100, y: 300 }, "right", "left", "orthogonal");
  assert.equal(aligned.path, "M 100 100 L 200 100 L 200 0 L 0 0 L 0 300 L 100 300");
  assert.deepEqual(JSON.parse(JSON.stringify(aligned.startTangent)), { x: 100, y: 0 });
  assert.deepEqual(JSON.parse(JSON.stringify(aligned.endTangent)), { x: 100, y: 0 });
});

test("node inspector exposes an accessible stroke-type dropdown", () => {
  const node = { id: "api", label: "API", shape: "rounded-rectangle", strokeType: "dashed" };
  const markup = buildNodeInspectorFields({ canvas: {}, nodes: [node], edges: [] }, node, "classic", "light");

  assert.match(markup, /<select class="docdiagram-inspector-node-stroke-type" aria-label="Stroke type">/);
  for (const strokeType of edgeStrokeTypes) {
    assert.match(markup, new RegExp(`value="${strokeType}"`));
  }
  assert.match(markup, /value="dashed"[^>]* selected/);
});

test("edge inspector exposes route, stroke type, and both endpoint-side controls", () => {
  const markup = buildEdgeInspectorFields(
    { theme: "light" },
    { source: "api", target: "db", sourceAnchor: "bottom", targetAnchor: "top", route: "curved", strokeType: "double" }
  );

  assert.match(markup, /class="docdiagram-inspector-route"/);
  assert.match(markup, /class="docdiagram-inspector-stroke-type"/);
  assert.match(markup, /class="docdiagram-inspector-source-anchor"/);
  assert.match(markup, /class="docdiagram-inspector-target-anchor"/);
  assert.match(markup, /value="curved" selected/);
  assert.match(markup, /value="double" selected/);
  for (const strokeType of edgeStrokeTypes) {
    assert.match(markup, new RegExp(`value="${strokeType}"`));
  }
  assert.match(markup, /value="bottom" selected/);
  assert.match(markup, /value="top" selected/);
});

test("setStyleStrokeWidth never produces a stroke width below one", () => {
  const edge = { source: "a", target: "b" };
  setStyleStrokeWidth(edge, "-5");
  assert.equal(edge.style.strokeWidth, 1);
  setStyleStrokeWidth(edge, "not-a-number");
  assert.equal(edge.style.strokeWidth, 1);
});

test("splitTextLines normalizes CRLF and splits on newlines", () => {
  assert.equal(JSON.stringify(splitTextLines("one")), JSON.stringify(["one"]));
  assert.equal(JSON.stringify(splitTextLines("one\ntwo")), JSON.stringify(["one", "two"]));
  assert.equal(JSON.stringify(splitTextLines("one\r\ntwo\r\nthree")), JSON.stringify(["one", "two", "three"]));
  assert.equal(JSON.stringify(splitTextLines("")), JSON.stringify([""]));
  assert.equal(JSON.stringify(splitTextLines(undefined)), JSON.stringify([""]));
});

test("computeNodeTextLayout stacks label and subtitle lines and keeps the block centered", () => {
  const labelOnly = computeNodeTextLayout(20, 40, 180, 80, { label: "Payments API" });
  assert.equal(labelOnly.centerX, 20 + 90);
  assert.equal(labelOnly.labelLines.length, 1);
  assert.equal(labelOnly.subtitleLines.length, 0);

  const withSubtitle = computeNodeTextLayout(20, 40, 180, 80, {
    label: "Payments API\nGateway",
    subtitle: "Handles card capture"
  });

  assert.equal(withSubtitle.labelLines.length, 2);
  assert.equal(withSubtitle.subtitleLines.length, 1);
  // The label block should start above the subtitle block so the stack reads top-to-bottom.
  assert.ok(withSubtitle.labelStartY < withSubtitle.subtitleStartY);
});

test("labels wrap on word boundaries inside the declared width instead of overflowing", () => {
  const layout = computeNodeTextLayout(
    { x: 12, y: 12, width: 166, height: 56 },
    { label: "Payment reconciliation service", subtitle: "Matches settlement files against the ledger" }
  );

  assert.ok(layout.labelLines.length > 1, "an over-long label should wrap");
  assert.ok(layout.subtitleLines.length > 1, "an over-long subtitle should wrap");
  assert.equal(layout.labelLines.join(" "), "Payment reconciliation service");
  for (const line of layout.labelLines) {
    assert.ok(measureTextWidth(line, 16, true) <= 166, `"${line}" should fit the declared width`);
  }
});

test("wrapping keeps explicit line breaks and never breaks a single long word", () => {
  assert.deepEqual(wrapTextLines(["Alpha", "Beta"], 400, 16, true), ["Alpha", "Beta"]);
  assert.deepEqual(wrapTextLines(["Supercalifragilisticexpialidocious"], 40, 16), ["Supercalifragilisticexpialidocious"]);
  assert.deepEqual(wrapTextLines(["Alpha beta"], 0, 16), ["Alpha beta"]);
});

test("canvas: auto derives the canvas from its content and round-trips as auto", () => {
  const source = flowchartSource([
    "canvas: auto",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 60 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]);
  const diagram = parseDiagram(source);

  assert.equal(diagram.canvas.auto, true);
  assert.equal(diagram.canvas.width, 100 + 190 + 40);
  assert.equal(diagram.canvas.height, 60 + 80 + 40);
  assert.match(serializeDiagram(diagram), /^canvas: auto$/m);
  assert.doesNotMatch(serializeDiagram(diagram), /^ {2}width:/m);
});

test("a derived canvas keeps other canvas fields and shrinks back when content is removed", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "  auto: true",
    "  grid: 20",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "  - id: ledger",
    "    label: Ledger",
    "    shape: database",
    "    position: { x: 600, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]));

  assert.equal(diagram.canvas.width, 600 + 190 + 40);
  deleteNode(diagram, "ledger");
  assert.equal(diagram.canvas.width, 190 + 40);

  const serialized = serializeDiagram(diagram);
  assert.match(serialized, /^ {2}auto: true$/m);
  assert.match(serialized, /^ {2}grid: 20$/m);
  assert.doesNotMatch(serialized, /^ {2}width:/m);
});

test("an authored canvas keeps its size when content is removed", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "  width: 1000",
    "  height: 560",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 190, height: 80 }",
    "edges:"
  ]));

  deleteNode(diagram, "api");
  assert.equal(diagram.canvas.width, 1000);
  assert.equal(diagram.canvas.height, 560);
});

test("canvas.auto must be a boolean", () => {
  assert.throws(
    () => parseDiagram(flowchartSource(["canvas:", "  auto: sometimes", "nodes:", "edges:"])),
    /canvas.auto must be true or false/
  );
});

test("the text shape renders a plain, square-cornered rect distinct from the rounded-rectangle default", () => {  const textGeometry = getNodeGeometry({ shape: "text" }, 20, 40, 200, 100);
  const rectGeometry = getNodeGeometry({ shape: "rounded-rectangle" }, 20, 40, 200, 100);

  assert.match(textGeometry.bodyMarkup, /<rect/);
  assert.doesNotMatch(textGeometry.bodyMarkup, /rx="/);
  assert.match(rectGeometry.bodyMarkup, /rx="12"/);
});

test("a text shape node defaults to transparent fill/stroke while keeping readable text, unless a palette or style override is applied", () => {
  const diagram = { theme: "light" };
  const textNode = { id: "note", label: "Note", shape: "text" };

  const defaultStyle = getNodeEffectiveStyle(diagram, textNode, "light", "classic");
  assert.equal(defaultStyle.fill, "none");
  assert.equal(defaultStyle.stroke, "none");
  assert.ok(defaultStyle.text, "text colour should still be set for readability");

  setNodeColorPalette(textNode, "danger");
  const paletteStyle = getNodeEffectiveStyle(diagram, textNode, "light", "classic");
  assert.equal(paletteStyle.fill, colourSchemes.classic.light.danger.fill);
  assert.equal(paletteStyle.stroke, colourSchemes.classic.light.danger.stroke);

  const overriddenNode = { id: "note2", label: "Note", shape: "text", style: { fill: "#ff0000" } };
  const overriddenStyle = getNodeEffectiveStyle(diagram, overriddenNode, "light", "classic");
  assert.equal(overriddenStyle.fill, "#ff0000");
});

test("parseTextShapeInlineRuns tokenizes bold, italic, and inline code runs while leaving plain text untouched", () => {
  assert.equal(JSON.stringify(parseTextShapeInlineRuns("plain text")), JSON.stringify([{ text: "plain text" }]));
  assert.equal(
    JSON.stringify(parseTextShapeInlineRuns("**bold** and _italic_ and `code`")),
    JSON.stringify([
      { text: "bold", bold: true },
      { text: " and " },
      { text: "italic", italic: true },
      { text: " and " },
      { text: "code", code: true }
    ])
  );
  assert.equal(
    JSON.stringify(parseTextShapeInlineRuns("Set max_retries_count for user_id.")),
    JSON.stringify([{ text: "Set max_retries_count for user_id." }])
  );
});

test("renders a text shape node's label with the native-SVG markdown subset and preserves its subtitle below, without foreignObject", () => {
  const source = flowchartSource([
    "theme: light",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: note",
    "    label: |",
    "      # Heading",
    "      ## Subheading",
    "      Body with **bold**, _italic_, and `code`.",
    "    shape: text",
    "    subtitle: Preserved subtitle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 240, height: 140 }",
    "edges:",
    "  - source: note",
    "    target: note",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));

  const markup = renderDiagram(source, 0);

  assert.doesNotMatch(markup, /foreignObject/);
  assert.match(markup, /class="docdiagram-node-label docdiagram-node-label-markdown"/);
  assert.match(markup, /font-size:26px[^"]*"[^>]*>Heading<\/tspan>/);
  assert.match(markup, /font-size:20px[^"]*"[^>]*>Subheading<\/tspan>/);
  assert.match(markup, /font-weight:700[^"]*"[^>]*>bold<\/tspan>/);
  assert.match(markup, /font-style:italic[^"]*"[^>]*>italic<\/tspan>/);
  assert.match(markup, /font-family:ui-monospace[^"]*"[^>]*>code<\/tspan>/);
  assert.match(markup, /class="docdiagram-node-subtitle"[^>]*>[\s\S]*?Preserved subtitle/);
  // The transparent shape default must still surface in the rendered body when no palette is set.
  assert.match(markup, /fill="none" stroke="none"/);
});

test("shape geometry renders every supported shape with usable text bounds and perimeter anchors", () => {
  const expectedMarkup = {
    "rounded-rectangle": "<rect", circle: "<circle", oval: "<ellipse", database: "<path",
    diamond: "<polygon", rhombus: "<polygon", "flattened-hexagon": "<polygon",
    chevron: "<polygon", "right-chevron": "<polygon", text: "<rect"
  };

  for (const shape of nodeShapes) {
    const geometry = getNodeGeometry({ shape }, 20, 40, 200, 100);
    assert.match(geometry.bodyMarkup, new RegExp(expectedMarkup[shape]));
    assert.match(renderNodeBody(geometry, { fill: "#123456", stroke: "#abcdef" }, 4), /fill="#123456" stroke="#abcdef" stroke-width="4"/);
    assert.ok(geometry.textBounds.width > 0 && geometry.textBounds.height > 0, `${shape} has usable text bounds`);
    assert.equal(JSON.stringify(Object.keys(geometry.anchors).sort()), JSON.stringify(["bottom", "left", "right", "top"]));

    for (const anchor of Object.values(geometry.anchors)) {
      assert.ok(Number.isFinite(anchor.x) && Number.isFinite(anchor.y), `${shape} anchor is finite`);
    }
  }
});

test("shape-specific anchors resolve to their rendered perimeters", () => {
  const rhombus = getNodeGeometry({ shape: "rhombus" }, 20, 40, 200, 100);
  assert.equal(rhombus.anchors.left.x, 40);
  assert.equal(rhombus.anchors.right.x, 200);
  assert.equal(rhombus.anchors.left.y, 90);
  assert.equal(rhombus.anchors.right.y, 90);

  const chevron = getNodeGeometry({ shape: "chevron" }, 20, 40, 200, 100);
  assert.match(chevron.bodyMarkup, /points="20,40 188,40 220,90 188,140 20,140 52,90"/);
  assert.equal(chevron.anchors.left.x, 52);
  assert.equal(chevron.anchors.left.y, 90);
  assert.equal(chevron.textBounds.x + chevron.textBounds.width / 2, 136);

  const rightChevron = getNodeGeometry({ shape: "right-chevron" }, 20, 40, 200, 100);
  assert.match(rightChevron.bodyMarkup, /points="20,40 188,40 220,90 188,140 20,140"/);
  assert.equal(rightChevron.anchors.left.x, 20);
  assert.equal(rightChevron.anchors.left.y, 90);

  const database = getNodeGeometry({ shape: "database" }, 20, 40, 200, 100);
  assert.equal(database.anchors.top.y, 40);
  assert.equal(database.anchors.bottom.y, 140);
});


test("document nodes render with a folded corner and reserved text bounds", () => {
  const geometry = getNodeGeometry({ shape: "document" }, 20, 40, 200, 100);

  assert.match(geometry.bodyMarkup, /M 20 40 H 202 L 220 58 V 140 H 20 Z M 202 40 V 58 H 220/);
  assert.ok(geometry.textBounds.width < 176);
  assert.equal(geometry.anchors.right.x, 220);
  assert.equal(geometry.anchors.bottom.y, 140);
});

test("circle node size changes preserve a square bounding box", () => {
  const diagram = { canvas: { grid: 5 } };
  const circle = { shape: "circle", size: { width: 150, height: 150 } };

  setNodeSize(diagram, circle, "width", 183);
  assert.equal(JSON.stringify(circle.size), JSON.stringify({ width: 185, height: 185 }));
  setNodeShape(circle, "oval");
  setNodeSize(diagram, circle, "height", 92);
  assert.equal(JSON.stringify(circle.size), JSON.stringify({ width: 185, height: 90 }));
});

test("parses and serializes a node subtitle, including multiline values, with a safe roundtrip", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    subtitle: Handles card capture",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));
  const diagram = parseDiagram(source);

  assert.equal(diagram.nodes[0].subtitle, "Handles card capture");

  setNodeSubtitle(diagram.nodes[0], "Line one\nLine two");
  setNodeLabel(diagram.nodes[0], "Multiline\nLabel");
  assert.equal(diagram.nodes[0].subtitle, "Line one\nLine two");
  assert.equal(diagram.nodes[0].label, "Multiline\nLabel");

  const serialized = serializeDiagram(diagram);
  // Newline-bearing scalars are emitted as YAML literal block scalars ("key: |" plus indented
  // content lines) rather than JSON-escaped "\n" strings, so multiline labels/subtitles stay
  // human-readable in the canonical source.
  assert.match(serialized, /subtitle: \|\+\n {6}Line one\n {6}Line two\n/);
  assert.match(serialized, /label: \|\+\n {6}Multiline\n {6}Label\n/);

  const reparsed = parseDiagram(serialized);
  assert.equal(reparsed.nodes[0].subtitle, "Line one\nLine two");
  assert.equal(reparsed.nodes[0].label, "Multiline\nLabel");
  assert.equal(JSON.stringify(reparsed), JSON.stringify(diagram));
});

test("setNodeSubtitle trims whitespace and allows clearing the subtitle back to empty", () => {
  const node = { id: "api", label: "Payments API", subtitle: "Old subtitle" };
  setNodeSubtitle(node, "  New subtitle  ");
  assert.equal(node.subtitle, "New subtitle");
  setNodeSubtitle(node, "   ");
  assert.equal(node.subtitle, "");
});

test("desugarBlockScalars converts a literal block scalar into a JSON-quoted single line and leaves other lines untouched", () => {
  const lines = [
    "nodes:",
    "  - id: api",
    "    label: |",
    "      Multiline",
    "      Label",
    "    shape: text"
  ];
  const desugared = desugarBlockScalars(lines);
  assert.equal(JSON.stringify(desugared), JSON.stringify([
    "nodes:",
    "  - id: api",
    `    label: ${JSON.stringify("Multiline\nLabel")}`,
    "    shape: text"
  ]));
});

test("a markdown heading inside a multiline label block scalar is preserved as content, not treated as a YAML comment", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: note",
    "    label: |",
    "      # Heading",
    "      Body _text_",
    "    shape: text",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: note",
    "    target: note",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));
  const diagram = parseDiagram(source);

  assert.equal(diagram.nodes[0].label, "# Heading\nBody _text_");

  const serialized = serializeDiagram(diagram);
  assert.match(serialized, /label: \|\+\n {6}# Heading\n {6}Body _text_/);

  const reparsed = parseDiagram(serialized);
  assert.equal(reparsed.nodes[0].label, "# Heading\nBody _text_");
  assert.equal(JSON.stringify(reparsed), JSON.stringify(diagram));
});

test("multiline block scalar serialization preserves every trailing blank line", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "nodes:",
    "  - id: note",
    "    label: \"Line one\\n\\n\\n\"",
    "    shape: text",
    "    position: { x: 20, y: 20 }",
    "edges:"
  ].join("\n")));
  const serialized = serializeDiagram(diagram);

  assert.match(serialized, /label: \|\+/);
  assert.equal(parseDiagram(serialized).nodes[0].label, "Line one\n\n\n");
});

test("legacy JSON-quoted single-line multiline labels still parse for backward compatibility", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: \"Multiline\\nLabel\"",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));
  const diagram = parseDiagram(source);

  assert.equal(diagram.nodes[0].label, "Multiline\nLabel");
});

test("multiline edge labels round-trip through serialization safely", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const edge = diagram.edges[0];

  setEdgeLabel(edge, "Retry\nwith backoff");
  assert.equal(edge.label, "Retry\nwith backoff");

  const serialized = serializeDiagram(diagram);
  assert.match(serialized, /label: \|\+\n {6}Retry\n {6}with backoff/);

  const reparsed = parseDiagram(serialized);
  assert.equal(reparsed.edges[0].label, "Retry\nwith backoff");
});

test("renders a node subtitle below the label and never renders the internal type as SVG text", () => {
  const source = flowchartSource([
    "theme: dark",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    subtitle: Card capture and auth",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));

  const markup = renderDiagram(source, 0);

  assert.match(markup, /class="docdiagram-node-subtitle"/);
  assert.match(markup, /Card capture and auth/);
  // The semantic type key must stay internal-only: no SVG text output should mention "service".
  assert.doesNotMatch(markup, /docdiagram-node-type/);
  assert.doesNotMatch(markup, />service</);
});

test("renders multiline node labels and subtitles as stacked tspans", () => {
  const source = flowchartSource([
    "theme: light",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: \"Payments\\nAPI\"",
    "    shape: rounded-rectangle",
    "    subtitle: \"Card capture\\nand auth\"",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 100 }",
    "edges:",
    "  - source: api",
    "    target: api",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));

  const markup = renderDiagram(source, 0);
  const labelGroup = markup.match(/<text[^>]*class="docdiagram-node-label"[^>]*>[\s\S]*?<\/text>/);
  const subtitleGroup = markup.match(/<text[^>]*class="docdiagram-node-subtitle"[^>]*>[\s\S]*?<\/text>/);

  assert.ok(labelGroup, "Expected a node label text block");
  assert.ok(subtitleGroup, "Expected a node subtitle text block");
  assert.equal((labelGroup[0].match(/<tspan/g) || []).length, 2);
  assert.match(labelGroup[0], />Payments<\/tspan>/);
  assert.match(labelGroup[0], />API<\/tspan>/);
  assert.equal((subtitleGroup[0].match(/<tspan/g) || []).length, 2);
  assert.match(subtitleGroup[0], />Card capture<\/tspan>/);
  assert.match(subtitleGroup[0], />and auth<\/tspan>/);
});

test("renders multiline edge labels as stacked tspans while preserving stroke/width overrides", () => {
  const source = flowchartSource([
    "theme: light",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "  - id: db",
    "    label: Payments DB",
    "    shape: rounded-rectangle",
    "    position: { x: 300, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: db",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    route: curved",
    "    label: \"Retry\\nwith backoff\"",
    "    start: circle",
    "    end: arrow",
    "    style: { stroke: #ABCDEF, strokeWidth: 3 }"
  ].join("\n"));

  const markup = renderDiagram(source, 0);
  const edgeLabelGroup = markup.match(/<text[^>]*class="docdiagram-edge-label"[^>]*>[\s\S]*?<\/text>/);

  assert.match(markup, /<path class="docdiagram-edge-hit" d="M 200 80 C 250 80 250 80 300 80"/);
  assert.match(markup, /<path class="docdiagram-edge" d="M 200 80 C 250 80 250 80 300 80"[^>]*marker-start=/);
  assert.match(markup, /marker-end="url\(#docdiagram-marker-0-0-end\)"/);
  assert.ok(edgeLabelGroup, "Expected an edge label text block");
  assert.equal((edgeLabelGroup[0].match(/<tspan/g) || []).length, 2);
  assert.match(edgeLabelGroup[0], />Retry<\/tspan>/);
  assert.match(edgeLabelGroup[0], />with backoff<\/tspan>/);
  assert.match(markup, /stroke="#ABCDEF" stroke-width="3"/);
});

test("inspector edge style overrides for stroke and width are reflected in the rendered markup", () => {
  const source = flowchartSource([
    "theme: light",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes:",
    "  - id: api",
    "    label: Payments API",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "  - id: db",
    "    label: Payments DB",
    "    shape: rounded-rectangle",
    "    position: { x: 300, y: 40 }",
    "    size: { width: 180, height: 80 }",
    "edges:",
    "  - source: api",
    "    target: db",
    "    sourceAnchor: right",
    "    targetAnchor: left"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const edge = diagram.edges[0];

  // Simulate the inspector mutating the selected edge, then re-rendering from the mutated model.
  setEdgeStyleOverride(edge, "stroke", "#ff00ff");
  setStyleStrokeWidth(edge, "6");

  const markup = renderDiagram(serializeDiagram(diagram), 0);

  assert.match(markup, /stroke="#ff00ff" stroke-width="6"/);
});

test("the injected .docdiagram-edge CSS rule no longer hard-codes stroke or stroke-width so inline overrides win", () => {
  const edgeRuleMatch = runtime.match(/\.docdiagram-edge\s*\{([^}]*)\}/);

  assert.ok(edgeRuleMatch, "Expected a .docdiagram-edge CSS rule in the stylesheet template");
  assert.doesNotMatch(edgeRuleMatch[1], /stroke\s*:/);
  assert.doesNotMatch(edgeRuleMatch[1], /stroke-width\s*:/);
});

test("edge labels use the document background as a soft contrast shadow", () => {
  const labelRuleMatch = runtime.match(/\.docdiagram-edge-label\s*\{([^}]*)\}/);

  assert.ok(labelRuleMatch, "Expected a .docdiagram-edge-label CSS rule in the stylesheet template");
  assert.match(labelRuleMatch[1], /filter:\s*drop-shadow\(0 0 4px var\(--docdiagram-background\)\)/);
});

test("node and edge inline editors share focused, accessible textarea markup with newline/commit hints", () => {
  assert.match(runtime, /class="docdiagram-inline-editor docdiagram-inline-editor-node"/);
  assert.match(runtime, /class="docdiagram-inline-editor docdiagram-inline-editor-edge"/);
  assert.match(runtime, /aria-label="Edit node label\. Press Enter for a new line\. Press Control or Command plus Enter to save\. Press Escape to cancel\."/);
  assert.match(runtime, /aria-label="Edit edge label\. Press Enter for a new line\. Press Control or Command plus Enter to save\. Press Escape to cancel\."/);
});

