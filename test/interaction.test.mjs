import { assert, core, fs, path, test, testDirectory } from "./support/core-context.mjs";

const __dirname = testDirectory;
const runtime = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");

const {
  edgeAnchors,
  edgeMarkerStyles,
  getGridSize,
  expandCanvasForNode,
  flattenFlowchartNodes,
  getNodeEffectiveStyle,
  getEdgeMarkerStyle,
  getEdgeMarkerDimensions,
  parseDiagram,
  resolveDocument,
  renderMarkdown,
  renderDiagram,
  serializeDiagram,
  setNodeLabel,
  setNodeSubtitle,
  setEdgeMarkerStart,
  setEdgeMarkerEnd,
  validateDocumentSource,
  buildEdgePath,
  buildNodeCalloutPointer,
  renderEdgeWaypointHandle,
  buildEdgeInspectorFields,
  buildNodeInspectorFields,
  clearEdgeWaypoint,
  toggleNodeCalloutPointer,
  getWheelPixels,
  getWheelZoom,
  extractDiagramFences,
  getDiagramId,
  setDiagramId,
  setFrontmatterDoctype
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

test("getEdgeMarkerStyle defaults start to none and end to arrow when start/end are omitted", () => {
  const edge = { source: "api", target: "db" };

  assert.equal(getEdgeMarkerStyle(edge, "start"), "none");
  assert.equal(getEdgeMarkerStyle(edge, "end"), "arrow");
});

test("getEdgeMarkerStyle falls back to the default for an unrecognised marker style", () => {
  const edge = { source: "api", target: "db", start: "hexagon", end: "hexagon" };

  assert.equal(getEdgeMarkerStyle(edge, "start"), "none");
  assert.equal(getEdgeMarkerStyle(edge, "end"), "arrow");
});

test("renders no start marker and an end arrow for default backwards-compatible edges", () => {
  const markup = renderDiagram(twoNodeEdgeSource([]), 0);

  assert.doesNotMatch(markup, /marker-start=/);
  // A start: none default should still render an end arrow, matching pre-existing edge visuals.
  assert.match(markup, /marker-end="url\(#docdiagram-marker-0-0-end\)"/);
  assert.match(markup, /<marker id="docdiagram-marker-0-0-end"/);
  assert.doesNotMatch(markup, /<marker id="docdiagram-marker-0-0-start"/);
});

test("renders marker-start and marker-end attributes and defs for each supported marker style", () => {
  for (const style of edgeMarkerStyles) {
    const markup = renderDiagram(twoNodeEdgeSource([`    start: ${style}`, `    end: ${style}`]), 0);

    if (style === "none") {
      assert.doesNotMatch(markup, /marker-start=/, `expected no marker-start for style ${style}`);
      assert.doesNotMatch(markup, /marker-end=/, `expected no marker-end for style ${style}`);
      assert.doesNotMatch(markup, /<marker /, `expected no marker defs for style ${style}`);
      continue;
    }

    assert.match(markup, /marker-start="url\(#docdiagram-marker-0-0-start\)"/, `expected marker-start for style ${style}`);
    assert.match(markup, /marker-end="url\(#docdiagram-marker-0-0-end\)"/, `expected marker-end for style ${style}`);
    assert.match(markup, /<marker id="docdiagram-marker-0-0-start"/, `expected a start marker def for style ${style}`);
    assert.match(markup, /<marker id="docdiagram-marker-0-0-end"/, `expected an end marker def for style ${style}`);

    if (style === "circle") {
      assert.match(markup, /<circle cx="5\.5" cy="5\.5" r="4\.18"/);
    }

    if (style === "arrow") {
      assert.match(markup, /orient="auto-start-reverse"/);
      assert.match(markup, /orient="auto"/);
    }
  }
});

test("each edge gets unique marker ids so overrides on one edge cannot leak into another edge's markers", () => {
  const source = flowchartSource([
    "theme: light",
    "canvas:",
    "  width: 900",
    "  height: 300",
    "nodes:",
    "  - id: a",
    "    label: A",
    "    shape: rounded-rectangle",
    "    position: { x: 0, y: 0 }",
    "    size: { width: 100, height: 60 }",
    "  - id: b",
    "    label: B",
    "    shape: rounded-rectangle",
    "    position: { x: 200, y: 0 }",
    "    size: { width: 100, height: 60 }",
    "  - id: c",
    "    label: C",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 0 }",
    "    size: { width: 100, height: 60 }",
    "edges:",
    "  - source: a",
    "    target: b",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    start: circle",
    "    end: circle",
    "    style: { stroke: \"#ff0000\" }",
    "  - source: b",
    "    target: c",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    start: circle",
    "    end: circle",
    "    style: { stroke: \"#00ff00\" }"
  ].join("\n"));

  const markup = renderDiagram(source, 3);

  assert.match(markup, /id="docdiagram-marker-3-0-start"/);
  assert.match(markup, /id="docdiagram-marker-3-0-end"/);
  assert.match(markup, /id="docdiagram-marker-3-1-start"/);
  assert.match(markup, /id="docdiagram-marker-3-1-end"/);

  const markerIds = [...markup.matchAll(/<marker id="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(markerIds).size, markerIds.length, "expected every marker id to be unique");

  // Each edge's own markers must use its own resolved stroke, not the other edge's stroke.
  const firstMarkerDefs = markup.slice(markup.indexOf('id="docdiagram-marker-3-0-start"'), markup.indexOf('id="docdiagram-marker-3-1-start"'));
  assert.match(firstMarkerDefs, /fill="#ff0000"/);
  assert.doesNotMatch(firstMarkerDefs, /fill="#00ff00"/);
});

test("marker defs use user-space units and scale gently with edge stroke width", () => {
  const markup = renderDiagram(twoNodeEdgeSource([
    "    start: circle",
    "    end: arrow",
    "    style: { strokeWidth: 12 }"
  ]), 0);

  const markerDefs = [...markup.matchAll(/<marker [^>]*>/g)];
  assert.ok(markerDefs.length >= 2, "expected both a start and end marker def");

  for (const markerDef of markerDefs) {
    assert.match(markerDef[0], /markerUnits="userSpaceOnUse"/);
  }

  // The wide stroke-width must not be applied as a marker stroke, but dimensions
  // should increase at a moderated rate to remain visible without becoming huge.
  for (const markerDef of markerDefs) {
    assert.doesNotMatch(markerDef[0], /stroke-width="12"/);
    assert.match(markerDef[0], /markerWidth="36" markerHeight="36"/);
  }
});

test("marker dimensions scale moderately and keep circles wider than their edge", () => {
  assert.equal(JSON.stringify(getEdgeMarkerDimensions(2)), JSON.stringify({ size: 11, circleRadius: 4.18 }));
  assert.equal(JSON.stringify(getEdgeMarkerDimensions(6)), JSON.stringify({ size: 21, circleRadius: 7.98 }));
  assert.equal(JSON.stringify(getEdgeMarkerDimensions(12)), JSON.stringify({ size: 36, circleRadius: 13.68 }));
});

test("marker fill/stroke colour resolves from the edge's effective line stroke, never the label text colour", () => {
  const markup = renderDiagram(twoNodeEdgeSource([
    "    start: circle",
    "    end: arrow",
    "    style: { stroke: \"#123abc\", text: \"#abcdef\" }"
  ]), 0);

  const markerStart = markup.match(/<marker id="docdiagram-marker-0-0-start"[^>]*>[\s\S]*?<\/marker>/)[0];
  const markerEnd = markup.match(/<marker id="docdiagram-marker-0-0-end"[^>]*>[\s\S]*?<\/marker>/)[0];

  assert.match(markerStart, /fill="#123abc"/);
  assert.match(markerEnd, /fill="#123abc"/);
  assert.doesNotMatch(markerStart, /#abcdef/);
  assert.doesNotMatch(markerEnd, /#abcdef/);
});

test("start/end marker styles parse from YAML and round-trip through serialization", () => {
  const source = twoNodeEdgeSource(["    start: circle", "    end: none"]);
  const diagram = parseDiagram(source);

  assert.equal(diagram.edges[0].start, "circle");
  assert.equal(diagram.edges[0].end, "none");

  const reparsed = parseDiagram(serializeDiagram(diagram));
  assert.equal(reparsed.edges[0].start, "circle");
  assert.equal(reparsed.edges[0].end, "none");
  assert.equal(JSON.stringify(reparsed), JSON.stringify(diagram));
});

test("an edge without start/end fields omits them from the parsed model, preserving the implicit defaults", () => {
  const diagram = parseDiagram(twoNodeEdgeSource([]));

  assert.equal(diagram.edges[0].start, undefined);
  assert.equal(diagram.edges[0].end, undefined);
  assert.equal(getEdgeMarkerStyle(diagram.edges[0], "start"), "none");
  assert.equal(getEdgeMarkerStyle(diagram.edges[0], "end"), "arrow");
});

test("setEdgeMarkerStart and setEdgeMarkerEnd mutate the canonical model and round-trip through YAML", () => {
  const diagram = parseDiagram(twoNodeEdgeSource([]));
  const edge = diagram.edges[0];

  setEdgeMarkerStart(edge, "circle");
  setEdgeMarkerEnd(edge, "none");

  assert.equal(edge.start, "circle");
  assert.equal(edge.end, "none");

  const reparsed = parseDiagram(serializeDiagram(diagram));
  assert.equal(reparsed.edges[0].start, "circle");
  assert.equal(reparsed.edges[0].end, "none");
});

test("setEdgeMarkerStart and setEdgeMarkerEnd normalize unsupported values back to their defaults", () => {
  const edge = { source: "api", target: "db" };

  setEdgeMarkerStart(edge, "hexagon");
  setEdgeMarkerEnd(edge, "hexagon");

  assert.equal(edge.start, "none");
  assert.equal(edge.end, "arrow");
});

test("the source tray exposes a top-edge resize handle instead of a corner grabber", () => {
  const bundle = fs.readFileSync(path.resolve(__dirname, "..", "dist", "skryb-runtime.js"), "utf8");
  const trayRule = bundle.match(/\.docdiagram-source-tray \{([^}]*)\}/);

  assert.ok(trayRule, "the tray rule is present in the bundled styles");
  assert.match(bundle, /class="docdiagram-source-resize"/, "the tray renders a resize handle");
  assert.match(bundle, /role="separator"/, "the handle is exposed as a separator");
  assert.match(bundle, /aria-label="Resize source editor"/, "the handle is labelled");
  assert.match(bundle, /tabindex="0"/, "the handle is keyboard reachable");
  assert.match(bundle, /\.docdiagram-source-resize \{[^}]*cursor: ns-resize/, "the handle shows a vertical resize cursor");
  assert.doesNotMatch(
    trayRule[1],
    /resize:\s*vertical/,
    "the tray no longer relies on CSS resize, which is inert while its overflow stays visible"
  );
});

test("a longer fence nests a shorter one and keeps its contents inert", () => {
  const source = [
    "# Doc",
    "",
    "````markdown",
    ":::diagram { id=payment-flow }",
    "",
    "```diagram",
    "id: payment-flow",
    "type: flowchart",
    "canvas:",
    "  width: 600",
    "  height: 300",
    "nodes: []",
    "edges: []",
    "```",
    "````"
  ].join("\n");

  const markup = renderMarkdown(source);

  assert.match(markup, /<pre><code class="language-markdown">/, "the outer fence renders as a code block");
  assert.match(markup, /:::diagram \{ id=payment-flow \}/, "the reference is shown as text");
  assert.doesNotMatch(markup, /docdiagram-error/, "the example does not raise an error");
  assert.equal(
    (markup.match(/<svg/g) || []).length,
    0,
    "nothing inside the example renders as a real diagram"
  );
  assert.doesNotMatch(markup, /````markdown/, "the fence marker is not left in the output");
});

test("a four-backtick fence closes on four backticks, not three", () => {
  const markup = renderMarkdown(["````text", "```", "still inside", "````"].join("\n"));

  assert.match(markup, /<pre><code class="language-text">/);
  assert.match(markup, /still inside/, "a shorter run does not close the block");
  assert.doesNotMatch(markup, /Unclosed code block/);
});

test("validateDocumentSource ignores diagrams nested inside a longer fence", () => {
  const source = [
    "# Doc",
    "",
    "````markdown",
    "```diagram",
    "type: flowchart",
    "this: would not parse",
    "```",
    "````"
  ].join("\n");

  assert.doesNotThrow(() => validateDocumentSource(source));
});

test("a waypointed edge follows its declared route instead of always bending orthogonally", () => {
  const source = { x: 190, y: 40 };
  const target = { x: 400, y: 200 };
  const waypoint = { x: 300, y: 300 };
  const orthogonal = buildEdgePath(source, target, "right", "left", "orthogonal", waypoint);
  const straight = buildEdgePath(source, target, "right", "left", "straight", waypoint);
  const curved = buildEdgePath(source, target, "right", "left", "curved", waypoint);

  assert.match(orthogonal.path, /^M 190 40 L 300 40 L 300 300/);
  assert.equal(straight.path, "M 190 40 L 300 300 L 400 200");
  assert.match(curved.path, /^M 190 40 C .* 300 300 C .* 400 200$/);
  assert.equal(curved.path.match(/C/g).length, 2, "a curved waypoint route is two joined cubics");
});

test("a curved waypoint route leaves and enters its anchors along the anchor direction and passes smoothly through the waypoint", () => {
  const path = buildEdgePath({ x: 190, y: 40 }, { x: 400, y: 200 }, "right", "left", "curved", { x: 300, y: 300 });
  const [, sourceControl, waypointEntry, , waypointExit, targetControl] = path.path
    .match(/-?\d+(?:\.\d+)?(?:e[-+]?\d+)? -?\d+(?:\.\d+)?(?:e[-+]?\d+)?/g)
    .map((pair) => {
      const [x, y] = pair.split(" ").map(Number);
      return { x, y };
    });

  assert.equal(sourceControl.y, 40, "the source control shares the source's row so the curve leaves rightwards");
  assert.ok(sourceControl.x > 190, "the source control sits along the right anchor direction");
  assert.equal(targetControl.y, 200, "the target control shares the target's row so the curve enters leftwards");
  assert.ok(targetControl.x < 400, "the target control sits along the left anchor direction");

  const entryDirection = { x: 300 - waypointEntry.x, y: 300 - waypointEntry.y };
  const exitDirection = { x: waypointExit.x - 300, y: waypointExit.y - 300 };
  const entryLength = Math.hypot(entryDirection.x, entryDirection.y);
  const exitLength = Math.hypot(exitDirection.x, exitDirection.y);

  assert.ok(
    Math.abs(entryDirection.x / entryLength - exitDirection.x / exitLength) < 1e-9 &&
    Math.abs(entryDirection.y / entryLength - exitDirection.y / exitLength) < 1e-9,
    "both control points at the waypoint are colinear, so the two segments meet without a kink"
  );
  assert.equal(JSON.stringify(path.midpoint), JSON.stringify({ x: 300, y: 300 }));
});

test("the edge waypoint handle is a circle until a waypoint is anchored, then a diamond", () => {
  const unanchored = renderEdgeWaypointHandle(0, 1, { x: 300, y: 80 }, false);
  const anchored = renderEdgeWaypointHandle(0, 1, { x: 300, y: 80 }, true);

  assert.match(unanchored, /data-anchored="false"/);
  assert.match(unanchored, /rx="7.5"/, "an unanchored handle is a circle");
  assert.doesNotMatch(unanchored, /transform=/);
  assert.match(anchored, /data-anchored="true"/);
  assert.match(anchored, /transform="rotate\(45 300 80\)"/, "an anchored handle is a diamond");
  assert.doesNotMatch(anchored, /rx="7.5"/);
  for (const handle of [unanchored, anchored]) {
    assert.match(handle, /class="docdiagram-edge-waypoint" data-diagram-index="0" data-edge-index="1"/);
  }
});

test("clearEdgeWaypoint removes the key so the canonical source drops the waypoint entirely", () => {
  const diagram = parseDiagram(flowchartSource([
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
  ].join("\n")));

  clearEdgeWaypoint(diagram.edges[0]);
  const serialized = serializeDiagram(diagram);

  assert.equal("waypoint" in diagram.edges[0], false);
  assert.doesNotMatch(serialized, /waypoint/);
  assert.doesNotThrow(() => parseDiagram(serialized));
});

test("the edge inspector only offers Remove waypoint once a waypoint is anchored", () => {
  const diagram = { theme: "light" };
  const plain = buildEdgeInspectorFields(diagram, { source: "a", target: "b" });
  const anchored = buildEdgeInspectorFields(diagram, { source: "a", target: "b", waypoint: { x: 10, y: 20 } });

  assert.doesNotMatch(plain, /docdiagram-inspector-clear-waypoint/);
  assert.match(anchored, /class="docdiagram-inspector-clear-waypoint">Remove waypoint</);
});

test("a node callout pointer parses, renders in the node's own colours, and round-trips", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 400",
    "nodes:",
    "  - id: note",
    "    label: Note",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 100 }",
    "    size: { width: 200, height: 80 }",
    "    arrow: { x: 320, y: 320 }",
    "edges: []"
  ].join("\n"));
  const diagram = parseDiagram(source);
  const markup = renderDiagram(source, 0);
  const style = getNodeEffectiveStyle(diagram, diagram.nodes[0]);

  assert.equal(JSON.stringify(diagram.nodes[0].arrow), JSON.stringify({ x: 320, y: 320 }));
  assert.equal(JSON.stringify(parseDiagram(serializeDiagram(diagram))), JSON.stringify(diagram));
  assert.match(markup, /<polygon class="docdiagram-node-callout"[^>]*320,320/);
  assert.match(markup, new RegExp(`<polygon class="docdiagram-node-callout"[^>]*fill="${style.fill}"`));
  assert.match(markup, new RegExp(`<polygon class="docdiagram-node-callout-outline"[^>]*stroke="${style.stroke}"`));
  assert.match(markup, /<mask id="docdiagram-callout-mask-0-0" maskUnits="userSpaceOnUse" x="88" y="88" width="244" height="244"/);
  assert.match(markup, /<rect class="docdiagram-node-callout-mask-region" x="88" y="88" width="244" height="244" fill="#ffffff"\/>/);
  assert.match(markup, /class="docdiagram-node-callout-outline"[^>]*mask="url\(#docdiagram-callout-mask-0-0\)"/);
  assert.throws(
    () => parseDiagram(source.replace("{ x: 320, y: 320 }", "{ x: 320 }")),
    /arrow requires finite x and y coordinates/
  );
  assert.throws(
    () => parseDiagram(source.replace("arrow: { x: 320, y: 320 }", "arrow: { x: 320, y: 320, z: 1 }")),
    /Unsupported node "note" arrow field: z/
  );
});

test("a callout pointer runs from the node centre out to the target, tapering to a tip", () => {
  const pointer = buildNodeCalloutPointer({ x: 100, y: 100, width: 200, height: 80 }, { x: 200, y: 400 });

  assert.equal(JSON.stringify(pointer.points[1]), JSON.stringify({ x: 200, y: 400 }));
  assert.equal(pointer.points[0].y, 140, "the base sits on the node centre line");
  assert.equal(pointer.points[2].y, 140);
  assert.ok(pointer.points[0].x < 200 && pointer.points[2].x > 200, "the base straddles the node centre");
  assert.equal(pointer.bounds.y + pointer.bounds.height, 400, "the pointer bounds reach the callout target");
  assert.equal(buildNodeCalloutPointer({ x: 100, y: 100, width: 200, height: 80 }, { x: 200, y: 140 }), null);
});

test("a callout pointer on a fill-less node is masked to the node outline so it cannot cover the text", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 400",
    "nodes:",
    "  - id: note",
    "    label: Note",
    "    shape: text",
    "    position: { x: 100, y: 100 }",
    "    size: { width: 200, height: 80 }",
    "    arrow: { x: 320, y: 320 }",
    "edges: []"
  ].join("\n"));
  const markup = renderDiagram(source, 0);

  assert.match(markup, /<polygon class="docdiagram-node-callout"[^>]*mask="url\(#docdiagram-callout-mask-0-0\)"/);
  assert.match(markup, /<polygon class="docdiagram-node-callout"[^>]*fill="#17202A"/);
});

test("a gradient palette callout switches the node to a user-space gradient so the join stays seamless", () => {
  const source = flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 400",
    "nodes:",
    "  - id: note",
    "    label: Note",
    "    shape: rounded-rectangle",
    "    palette: accent-strong",
    "    position: { x: 100, y: 100 }",
    "    size: { width: 200, height: 80 }",
    "    arrow: { x: 320, y: 320 }",
    "edges: []"
  ].join("\n"));
  const markup = renderDiagram(source, 0);
  const gradientId = "docdiagram-classic-0-accent-strong-callout-0";

  assert.match(markup, new RegExp(`<linearGradient id="${gradientId}" gradientUnits="userSpaceOnUse" x1="100" y1="100" x2="100" y2="180"`));
  assert.match(markup, new RegExp(`class="docdiagram-node-body"[^>]*fill="url\\(#${gradientId}\\)"`));
  assert.match(markup, new RegExp(`class="docdiagram-node-callout"[^>]*fill="url\\(#${gradientId}\\)"`));
});

test("the node inspector toggles a callout pointer and seeds it below the node", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 400",
    "  grid: 10",
    "nodes:",
    "  - id: note",
    "    label: Note",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 100 }",
    "    size: { width: 200, height: 80 }",
    "edges: []"
  ].join("\n")));
  const node = diagram.nodes[0];

  assert.match(buildNodeInspectorFields(diagram, node), /class="docdiagram-inspector-callout">Add pointer</);
  toggleNodeCalloutPointer(diagram, node);
  assert.equal(JSON.stringify(node.arrow), JSON.stringify({ x: 200, y: 240 }));
  assert.match(buildNodeInspectorFields(diagram, node), /class="docdiagram-inspector-callout">Remove pointer</);
  assert.ok(Number(diagram.canvas.height) >= 280, "the canvas grows to keep the callout target visible");

  toggleNodeCalloutPointer(diagram, node);
  assert.equal("arrow" in node, false);
});

test("expanding the canvas moves absolute waypoints and callout targets with the nodes", () => {
  const diagram = parseDiagram(flowchartSource([
    "canvas:",
    "  width: 600",
    "  height: 400",
    "nodes:",
    "  - id: source",
    "    label: Source",
    "    shape: rounded-rectangle",
    "    position: { x: 100, y: 100 }",
    "    arrow: { x: 160, y: 260 }",
    "  - id: target",
    "    label: Target",
    "    shape: rounded-rectangle",
    "    position: { x: 400, y: 100 }",
    "edges:",
    "  - source: source",
    "    target: target",
    "    sourceAnchor: right",
    "    targetAnchor: left",
    "    waypoint: { x: 300, y: 260 }"
  ].join("\n")));

  diagram.nodes[0].position = { x: -60, y: 100 };
  expandCanvasForNode(diagram, diagram.nodes[0]);

  assert.equal(diagram.nodes[0].position.x, 40, "the shifted node lands a padding inside the canvas");
  assert.equal(JSON.stringify(diagram.nodes[0].arrow), JSON.stringify({ x: 260, y: 260 }));
  assert.equal(JSON.stringify(diagram.edges[0].waypoint), JSON.stringify({ x: 400, y: 260 }));
});

test("a live inspector text field keeps the text being typed across its debounced re-render", () => {
  const inspector = fs.readFileSync(path.resolve(__dirname, "..", "src", "editor", "inspector.ts"), "utf8");
  const wiring = inspector.slice(
    inspector.indexOf("function wireLiveTextInput"),
    inspector.indexOf("export function wireNodeInspector")
  );

  // setNodeLabel/setNodeSubtitle trim, so re-rendering the field straight from the model would
  // swallow a just-typed trailing space or newline instead of leaving it under the cursor.
  assert.match(wiring, /const draft = controlElement\.value;/);
  assert.match(wiring, /replacement\.value !== draft/);
  assert.match(wiring, /replacement\.value = draft;/);
  assert.ok(
    wiring.indexOf("replacement.value = draft;") < wiring.indexOf("setSelectionRange"),
    "the draft is restored before the caret, so the caret lands in the restored text"
  );
});

test("the shipped flowchart starting points set a snapping grid and sit on it", () => {
  const templates = [
    readTemplateSource(path.resolve(__dirname, "..", "pages", "templates", "skryb-document-template.html")),
    readTemplateSource(path.resolve(__dirname, "..", "pages", "templates", "skryb-diagram-template.html")),
    readTemplateSource(path.resolve(__dirname, "..", "pages", "docs", "quickstart.html"))
  ];

  // The docs tell authors to set canvas.grid (normally 5) and place nodes on it, so the templates
  // they copy from have to demonstrate that rather than contradict it.
  assert.match(runtime, /"  grid: 5",/, "the source tray's flowchart template sets a grid");

  for (const template of templates) {
    for (const source of readDiagramSources(template)) {
      const diagram = parseDiagram(source);
      if (diagram.type !== "flowchart") {
        continue;
      }

      assert.equal(getGridSize(diagram), 5);
      for (const { node } of flattenFlowchartNodes(diagram)) {
        for (const value of [node.position?.x, node.position?.y, node.size?.width, node.size?.height]) {
          if (value !== undefined) {
            assert.equal(value % 5, 0, `expected ${value} to sit on the grid`);
          }
        }
      }
    }
  }
});

test("doctype defaults to document and only accepts the supported values", () => {
  assert.equal(resolveDocument("# Untitled").doctype, "document");
  assert.equal(resolveDocument("---\ndoctype: diagram\n---\n# Untitled").doctype, "diagram");
  assert.throws(
    () => resolveDocument("---\ndoctype: poster\n---\n# Untitled"),
    /Unsupported document doctype: poster/
  );
});

test("setFrontmatterDoctype adds a header when there is none and rewrites it when there is", () => {
  assert.equal(
    setFrontmatterDoctype("# Untitled", "diagram"),
    "---\ndoctype: diagram\n---\n# Untitled"
  );
  assert.equal(
    setFrontmatterDoctype("---\ntheme: dark\ndoctype: diagram\n---\n# Untitled", "document"),
    "---\ntheme: dark\ndoctype: document\n---\n# Untitled"
  );
  // Switching back and forth must not accumulate duplicate keys, which would
  // make the frontmatter ambiguous.
  assert.equal(
    setFrontmatterDoctype(setFrontmatterDoctype("---\ntheme: dark\n---\n# Untitled", "diagram"), "document"),
    "---\ntheme: dark\ndoctype: document\n---\n# Untitled"
  );
});

test("extractDiagramFences pulls out every diagram, skipping frontmatter and non-diagram fences", () => {
  const source = [
    "---",
    "doctype: diagram",
    "---",
    "# Title",
    "",
    "```js",
    "// not a diagram",
    "```",
    "",
    "```diagram",
    "type: flowchart",
    "id: first",
    "nodes: []",
    "```",
    "",
    "```diagram",
    "type: sequence",
    "id: second",
    "participants: []",
    "```"
  ].join("\n");

  const diagrams = extractDiagramFences(source);

  assert.equal(diagrams.length, 2);
  assert.equal(diagrams.map((diagram) => diagram.id).join(","), "first,second");
  assert.match(diagrams[0].source, /^type: flowchart\n/);
  assert.equal(diagrams[0].source.includes("```"), false, "the fence markers stay out of the diagram source");
});

test("extractDiagramFences ignores a diagram nested inside a longer fence", () => {
  const source = [
    "````markdown",
    "```diagram",
    "type: flowchart",
    "id: illustration-only",
    "```",
    "````",
    "",
    "```diagram",
    "type: flowchart",
    "id: real",
    "```"
  ].join("\n");

  assert.equal(extractDiagramFences(source).map((diagram) => diagram.id).join(","), "real");
});

test("extractDiagramFences reads diagrams out of a block-quoted fence", () => {
  const source = ["> ```diagram", "> type: flowchart", "> id: quoted", "> ```"].join("\n");
  const [diagram] = extractDiagramFences(source);

  assert.equal(diagram.id, "quoted");
  assert.equal(diagram.source, "type: flowchart\nid: quoted");
});

test("setDiagramId rewrites an existing id and adds one when the diagram has none", () => {
  assert.equal(
    setDiagramId("type: flowchart\nid: original\nnodes: []", "renamed"),
    "type: flowchart\nid: renamed\nnodes: []"
  );
  assert.equal(
    setDiagramId("type: flowchart\nnodes: []", "added"),
    "id: added\ntype: flowchart\nnodes: []"
  );
  // A quoted id is still the diagram's id, so it must be replaced rather than
  // left behind next to a second id line.
  assert.equal(getDiagramId(setDiagramId("id: \"quoted id\"\ntype: flowchart", "renamed")), "renamed");
});

test("an imported diagram keeps rendering after its id is rewritten to avoid a clash", () => {
  const imported = extractDiagramFences([
    "```diagram",
    "type: flowchart",
    "id: document-flow",
    "canvas:",
    "  width: 400",
    "  height: 200",
    "nodes:",
    "  - id: only",
    "    label: Only",
    "    shape: rounded-rectangle",
    "    position: { x: 20, y: 20 }",
    "```"
  ].join("\n"))[0];

  const renamed = setDiagramId(imported.source, "document-flow-2");
  const diagram = parseDiagram(renamed);

  assert.equal(diagram.id, "document-flow-2");
  assert.equal(diagram.nodes[0].label, "Only");
  // The round trip has to stay stable, because the runtime re-serializes every
  // diagram back into the fence whenever the model is persisted.
  assert.equal(getDiagramId(serializeDiagram(diagram)), "document-flow-2");
});

test("a document with two diagrams sharing an id is rejected, which is what import guards against", () => {
  const duplicate = ["```diagram", "type: flowchart", "id: shared", "```"].join("\n");

  assert.throws(() => validateDocumentSource(`${duplicate}\n\n${duplicate}`), /Duplicate diagram id: shared/);
});

const sampleNodeLines = [
  "id: sample",
  "canvas:",
  "  width: 400",
  "  height: 200",
  "nodes:",
  "  - id: only",
  "    label: Only",
  "    shape: rounded-rectangle",
  "    position: { x: 20, y: 20 }"
];

test("the diagram toolbar offers an expand toggle that reports its pressed state", () => {
  const source = flowchartSource(sampleNodeLines);
  const collapsed = renderDiagram(source, 0);

  assert.match(collapsed, /class="docdiagram-icon-button docdiagram-toggle-expand"[^>]*aria-pressed="false"/);
  assert.match(collapsed, /<figure class="docdiagram"[^>]*data-expanded="false"/);
  assert.match(collapsed, /aria-label="Expand diagram"/);
});

test("the diagram export menu offers saving the diagram as its own Skryb document", () => {
  const source = flowchartSource(sampleNodeLines);

  assert.match(renderDiagram(source, 0), /class="docdiagram-save-diagram" data-diagram-index="0">Save as Skryb diagram</);
});

test("the source tray menu offers importing a diagram from another document", () => {
  assert.match(runtime, /docdiagram-source-import/, "the tray exposes an import control");
  assert.match(runtime, /Import diagram/, "the import control is labelled for authors");
});

test("an expanded frame drops its stored viewport height so it can fill the window", () => {
  // The height the reader resized the frame to must not be re-applied inline
  // while the frame is expanded, or it would fight the full-window layout.
  assert.match(
    runtime,
    /docdiagram-source-tray-height, 0px\)/,
    "the expanded frame stops above the source tray instead of hiding behind it"
  );
  assert.match(runtime, /\.docdiagram\[data-expanded="true"\]/, "expanded frames get their own layout");
});

test("the shipped diagram template is a valid doctype: diagram document", () => {
  const source = readTemplateSource(
    path.resolve(__dirname, "..", "pages", "templates", "skryb-diagram-template.html")
  );
  const document = validateDocumentSource(source);

  assert.equal(document.doctype, "diagram");
  assert.equal(extractDiagramFences(source).length, 1, "a diagram document holds exactly one diagram");
});

test("setDiagramId inserts the new id literally, so replacement patterns in it are not expanded", () => {
  // The id comes from an imported file, and String.replace would otherwise
  // treat $& and friends as references to the matched text, silently producing
  // a different id from the one uniqueness was checked against.
  for (const id of ["$&", "$'", "$`", "$1", "plain-id"]) {
    assert.equal(
      getDiagramId(setDiagramId("type: flowchart\nid: original\nnodes: []", id)),
      id,
      `expected the id to survive verbatim: ${id}`
    );
  }
});

test("an orthogonal edge with no waypoint never doubles back on itself", () => {
  // A segment that reverses its predecessor draws a spur sticking out of a node
  // that reads as a stray waypoint, even though the edge has none. Sweeping the
  // anchor pairs against targets in every relative position is what caught it:
  // the failures clustered in anchors on different axes, and in same-axis
  // anchors whose endpoints shared a cross coordinate.
  const anchorDirections = {
    top: { x: 0, y: -1 },
    right: { x: 1, y: 0 },
    bottom: { x: 0, y: 1 },
    left: { x: -1, y: 0 }
  };
  const offsets = [-300, -190, -48, -1, 0, 1, 48, 190, 300];
  const source = { x: 400, y: 400 };
  let checked = 0;

  for (const sourceAnchor of edgeAnchors) {
    for (const targetAnchor of edgeAnchors) {
      for (const dx of offsets) {
        for (const dy of offsets) {
          if (dx === 0 && dy === 0) {
            continue;
          }
          const target = { x: source.x + dx, y: source.y + dy };
          const { path } = buildEdgePath(source, target, sourceAnchor, targetAnchor, "orthogonal");
          const points = path
            .match(/-?\d+(?:\.\d+)?\s-?\d+(?:\.\d+)?/g)
            .map((point) => point.split(" ").map(Number));
          const segments = points
            .slice(1)
            .map((point, index) => [point[0] - points[index][0], point[1] - points[index][1]])
            .filter(([x, y]) => x !== 0 || y !== 0);
          const label = `${sourceAnchor} -> ${targetAnchor} at (${dx}, ${dy}): ${path}`;
          checked += 1;

          for (const [x, y] of segments) {
            assert.ok(x === 0 || y === 0, `every segment stays axis-aligned. ${label}`);
          }
          for (let index = 0; index < segments.length - 1; index += 1) {
            const [ax, ay] = segments[index];
            const [bx, by] = segments[index + 1];
            assert.ok(ax * bx + ay * by >= 0, `no segment doubles back. ${label}`);
          }

          // A U-turn much narrower than the endpoints are apart is the spur
          // shape: the outward and return prongs sit almost on top of each
          // other. Bends placed at a midpoint halve that distance by
          // construction, so that is the bound.
          for (let index = 0; index < segments.length - 2; index += 1) {
            const [ax, ay] = segments[index];
            const turn = segments[index + 1];
            const [cx, cy] = segments[index + 2];
            if (ax * cx + ay * cy >= 0) {
              continue;
            }
            const separation = Math.abs(turn[0] !== 0 ? dx : dy);
            assert.ok(
              Math.hypot(turn[0], turn[1]) >= separation / 2,
              `no hairline U-turn. ${label}`
            );
          }

          // The route also has to respect the anchors it was asked for: leave
          // along the source anchor and enter through the target's.
          const sourceDirection = anchorDirections[sourceAnchor];
          const targetDirection = anchorDirections[targetAnchor];
          const first = segments[0];
          const last = segments[segments.length - 1];
          assert.ok(
            first[0] * sourceDirection.x + first[1] * sourceDirection.y > 0,
            `leaves along the source anchor. ${label}`
          );
          assert.ok(
            last[0] * targetDirection.x + last[1] * targetDirection.y < 0,
            `arrives through the target anchor. ${label}`
          );
        }
      }
    }
  }

  assert.equal(checked, 1280);
});

test("a single corner is enough when both anchors already face the way the edge travels", () => {
  // The common case must stay the simple L rather than gaining bends.
  assert.equal(
    buildEdgePath({ x: 100, y: 100 }, { x: 300, y: 200 }, "right", "top", "orthogonal").path,
    "M 100 100 L 300 100 L 300 200"
  );
  assert.equal(
    buildEdgePath({ x: 100, y: 100 }, { x: 300, y: 200 }, "bottom", "left", "orthogonal").path,
    "M 100 100 L 100 200 L 300 200"
  );
});

test("an orthogonal edge steps around instead of overshooting when an anchor faces away", () => {
  // Target sits behind the source's right anchor: the edge used to run right,
  // then straight back over itself through the node it had just left.
  assert.equal(
    buildEdgePath({ x: 300, y: 100 }, { x: 100, y: 200 }, "right", "top", "orthogonal").path,
    "M 300 100 L 350 100 L 350 150 L 100 150 L 100 200"
  );
  // Source sits behind the target's bottom anchor: the edge used to overshoot
  // past the target and come back up into it. It now crosses at the midpoint
  // between the two, so the bend stays clear of both ends.
  assert.equal(
    buildEdgePath({ x: 100, y: 100 }, { x: 300, y: 200 }, "right", "bottom", "orthogonal").path,
    "M 100 100 L 200 100 L 200 250 L 300 250 L 300 200"
  );
  // A bend that would land almost on the source's own line is moved to the
  // midpoint rather than pushed out past it, which keeps the detour compact
  // instead of throwing it off the canvas.
  assert.equal(
    buildEdgePath({ x: 640, y: 75 }, { x: 200, y: 180 }, "right", "top", "orthogonal").path,
    "M 640 75 L 750 75 L 750 127.5 L 200 127.5 L 200 180"
  );
});

test("a C bend clears the furthest anchor by a fixed margin, not by the whole span", () => {
  // Two right anchors on the same vertical line only need the bend far enough
  // right to clear them both. Scaling the clearance by the span let the vertical
  // gap between them push the bend sideways, which sent it off a tight canvas.
  const near = buildEdgePath({ x: 860, y: 375 }, { x: 860, y: 215 }, "right", "right", "orthogonal");
  assert.equal(near.path, "M 860 375 L 884 375 L 884 215 L 860 215");

  // Pulling the endpoints four times further apart on the cross axis must not
  // move the bend, because that distance is not the direction it travels.
  const spread = buildEdgePath({ x: 860, y: 900 }, { x: 860, y: 260 }, "right", "right", "orthogonal");
  assert.equal(spread.path, "M 860 900 L 884 900 L 884 260 L 860 260");

  // The margin is measured from whichever anchor reaches furthest, so an
  // offset pair still only clears the outermost of the two.
  const offset = buildEdgePath({ x: 200, y: 100 }, { x: 800, y: 300 }, "right", "right", "orthogonal");
  assert.equal(offset.path, "M 200 100 L 824 100 L 824 300 L 800 300");

  // Anchors pointing the other way clear on the other side by the same margin.
  const leftward = buildEdgePath({ x: 100, y: 100 }, { x: 300, y: 260 }, "left", "left", "orthogonal");
  assert.equal(leftward.path, "M 100 100 L 76 100 L 76 260 L 300 260");
});

test("every diagram control names its own diagram, so the toolbar survives being docked", () => {
  // An expanded frame's toolbar is moved into the document toolbar, outside the
  // frame it belongs to. Any handler that recovered the index by walking up to
  // the enclosing figure would break there, so the index travels on the button.
  const source = flowchartSource(sampleNodeLines);
  const markup = renderDiagram(source, 3);
  const toolbar = markup.match(/<div class="docdiagram-diagram-toolbar"[\s\S]*?<\/svg>/)[0];
  const buttons = [...toolbar.matchAll(/<button[^>]*class="([^"]*)"[^>]*>/g)]
    .map((match) => ({ tag: match[0], classes: match[1] }));

  // Done and Cancel act on whichever diagram is being edited, which the runtime
  // already tracks, so they are the only controls without an index.
  const scoped = buttons.filter(({ classes }) =>
    !/docdiagram-(done|cancel)-editing/.test(classes) && !/docdiagram-source/.test(classes));

  assert.ok(scoped.length >= 5, "the toolbar still has controls to check");
  for (const { tag, classes } of scoped) {
    assert.match(tag, /data-diagram-index="3"/, `${classes} carries its diagram index`);
  }
});

test("the expanded frame hands its controls to the document toolbar", () => {
  assert.match(
    runtime,
    /\.docdiagram-toolbar \.docdiagram-diagram-toolbar/,
    "docked controls get layout that suits a row rather than their own frame"
  );
  assert.match(runtime, /dockExpandedDiagramToolbar|prepend/, "the runtime moves the toolbar when expanded");
});

test("a wheel gesture zooms proportionally and is reversible", () => {
  // Zooming out has to undo zooming in exactly, or repeatedly nudging the wheel
  // back and forth would drift the diagram away from where it started.
  assert.equal(getWheelZoom(getWheelZoom(100, -100), 100), 100);
  assert.equal(getWheelZoom(getWheelZoom(250, -37), 37).toFixed(6), "250.000000");

  // Proportional rather than a fixed number of points, so a gesture feels the
  // same at every magnification.
  const fromHundred = getWheelZoom(100, -100) / 100;
  const fromFourHundred = getWheelZoom(400, -100) / 400;
  assert.equal(fromHundred.toFixed(6), fromFourHundred.toFixed(6));

  // One notch of a detented wheel lands near the toolbar's own zoom step.
  assert.ok(getWheelZoom(100, -100) > 120 && getWheelZoom(100, -100) < 135);
});

test("wheel zoom reads line and page deltas as comparable to pixel deltas", () => {
  // A device reporting three lines must not zoom a sixteenth as far as one
  // reporting the equivalent in pixels.
  assert.equal(getWheelZoom(100, -3, 1), getWheelZoom(100, -48, 0));
  assert.equal(getWheelZoom(100, -1, 2), getWheelZoom(100, -400, 0));
  assert.ok(getWheelZoom(100, -3, 1) > 110, "a line-mode notch is a usable step");
});

test("wheel zoom stays inside the supported bounds however hard it is driven", () => {
  let zoomedIn = 100;
  let zoomedOut = 100;
  for (let step = 0; step < 200; step += 1) {
    zoomedIn = getWheelZoom(zoomedIn, -200);
    zoomedOut = getWheelZoom(zoomedOut, 200);
  }

  assert.equal(zoomedIn, 800);
  assert.equal(zoomedOut, 25);
});

test("ctrl or cmd wheel zoom is registered so it can suppress the browser's own page zoom", () => {
  // The listener has to be non-passive, or preventDefault is ignored and the
  // gesture zooms the whole page instead of the diagram.
  assert.match(runtime, /"wheel"[\s\S]{0,120}passive:\s*!1/, "the wheel listener opts out of passive");
});

test("wheel deltas normalise to pixels whichever unit the device reports", () => {
  assert.equal(getWheelPixels(100), 100);
  assert.equal(getWheelPixels(-100), -100);
  assert.equal(getWheelPixels(3, 1), 48, "lines are read as pixels");
  assert.equal(getWheelPixels(1, 2), 400, "pages are read as pixels");
  // Panning and zooming share this, so a device reporting lines moves a diagram
  // the same distance as one reporting the equivalent in pixels.
  assert.equal(getWheelZoom(100, 3, 1), getWheelZoom(100, getWheelPixels(3, 1), 0));
});

