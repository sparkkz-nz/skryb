import {
  defaultNode,
  documentMinimumNodeSize,
  edgeAnchors,
  minimumNodeSize,
  colourSchemes,
  type FlowchartDiagram,
  type FlowchartNode
} from "../core/diagrams/schema";
import { escapeHtml } from "../core/diagrams/parser";
import { flattenFlowchartNodes } from "../core/diagrams/hierarchy";
import { getNodeEffectiveStyle, getEdgeEffectiveStyle, getEdgeMarkerStyle } from "../core/diagrams/styles";
import { splitTextLines, renderTextBlock, getNodeGeometry, computeNodeTextLayout, renderNodeBody, buildEdgePath, buildEdgeMarkerDef, renderEdgeWaypointHandle, buildNodeCalloutPointer, renderNodeCalloutPointer } from "../core/diagrams/geometry";
import { renderTextShapeContent } from "../core/diagrams/text-shape";
import type { DiagramRenderState, DiagramToolbarRenderer } from "./types";

export function getNodeBounds(node: FlowchartNode): { x: number; y: number; width: number; height: number } {
  return {
    x: Number(node.position?.x) || 0,
    y: Number(node.position?.y) || 0,
    width: Number(node.size?.width) || defaultNode.width,
    height: Number(node.size?.height) || defaultNode.height
  };
}

export function getMinimumNodeDimensions(shape: string): { width: number; height: number } {
  return shape === "document" ? documentMinimumNodeSize : minimumNodeSize;
}

export function renderDiagramToolbar(
  diagramIndex: number,
  editingMode: "none" | "flowchart" | "sequence",
  state: DiagramRenderState
): string {
  const allowsEditing = editingMode !== "none";
  const allowsNodeCreation = editingMode === "flowchart";
  const isExpanded = state.expandedDiagramIndex === diagramIndex;
  return [
    `<div class="docdiagram-diagram-toolbar" role="toolbar" aria-label="Diagram controls">`,
    `<button type="button" class="docdiagram-icon-button docdiagram-zoom-in" data-diagram-index="${diagramIndex}" aria-label="Zoom in" title="Zoom in">+</button>`,
    `<button type="button" class="docdiagram-icon-button docdiagram-zoom-out" data-diagram-index="${diagramIndex}" aria-label="Zoom out" title="Zoom out">−</button>`,
    `<button type="button" class="docdiagram-icon-button docdiagram-fit" data-diagram-index="${diagramIndex}" aria-label="Zoom to fit" title="Zoom to fit">⊡</button>`,
    `<button type="button" class="docdiagram-icon-button docdiagram-toggle-expand" data-diagram-index="${diagramIndex}" aria-pressed="${isExpanded}" aria-label="${isExpanded ? "Collapse diagram" : "Expand diagram"}" title="${isExpanded ? "Collapse diagram (Esc)" : "Expand diagram"}">${isExpanded ? "⤡" : "⤢"}</button>`,
    `<div class="docdiagram-diagram-export">`,
    `<button type="button" class="docdiagram-icon-button docdiagram-export-toggle" data-diagram-index="${diagramIndex}" aria-label="Export diagram" aria-expanded="false" title="Export diagram">⇧</button>`,
    `<div class="docdiagram-diagram-export-menu" hidden>`,
    `<button type="button" class="docdiagram-open-diagram" data-diagram-index="${diagramIndex}">Open full diagram</button>`,
    `<button type="button" class="docdiagram-save-diagram" data-diagram-index="${diagramIndex}">Save as Skryb diagram</button>`,
    `<button type="button" class="docdiagram-download-diagram" data-diagram-index="${diagramIndex}">Save as SVG</button>`,
    `<button type="button" class="docdiagram-print-diagram" data-diagram-index="${diagramIndex}">Print / Save as PDF</button>`,
    `</div>`,
    `</div>`,
    allowsEditing
      ? state.editingDiagramIndex === diagramIndex
        ? `<button type="button" class="docdiagram-icon-button docdiagram-done-editing" aria-label="Done editing" title="Done editing">✓</button><button type="button" class="docdiagram-icon-button docdiagram-cancel-editing" aria-label="Cancel editing and discard changes" title="Cancel editing and discard changes">×</button>${allowsNodeCreation ? `<button type="button" class="docdiagram-icon-button docdiagram-create-node" data-diagram-index="${diagramIndex}" aria-label="New node" title="New node">+</button>` : ""}`
        : state.editingDiagramIndex === null
          ? `<button type="button" class="docdiagram-icon-button docdiagram-start-editing" aria-label="Edit diagram" title="Edit diagram">✎</button>`
          : ""
      : "",
    `</div>`
  ].join("");
}

export function renderFlowchartDiagram(
  diagram: FlowchartDiagram,
  diagramIndex: number,
  state: DiagramRenderState,
  renderToolbar: DiagramToolbarRenderer
): string {
  const { selectedNode, selectedEdge, editingNode, editingEdge, connectionDrag, diagramZooms, diagramCameraOffsets } = state;
  const isDiagramEditing = state.editingDiagramIndex === diagramIndex;
  const nodeEntries = flattenFlowchartNodes(diagram);
  const nodes = new Map(nodeEntries.map((entry) => [entry.node.id, entry]));

  const edgeLabelLineHeight = 16;
  const edgeMarkerDefs: string[] = [];
  const edgeEndpointMarkup: string[] = [];
  const scheme = colourSchemes[state.documentColorScheme];
  const palette = scheme?.[state.documentTheme === "dark" ? "dark" : "light"];
  const paletteDefs = palette ? Object.entries(palette)
    .filter(([, value]) => value.gradient)
    .map(([role, value]) => `<linearGradient id="docdiagram-${state.documentColorScheme}-${diagramIndex}-${role}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${escapeHtml(value.gradient || value.fill)}"/><stop offset="1" stop-color="${escapeHtml(value.fill)}"/></linearGradient>`)
    .join("") : "";

  const edgeMarkup = diagram.edges.map((edge, edgeIndex) => {
    const sourceEntry = nodes.get(edge.source);
    const targetEntry = nodes.get(edge.target);

    if (!sourceEntry || !targetEntry) {
      return "";
    }
    const sourceNode = sourceEntry.node;
    const targetNode = targetEntry.node;

    const sourceGeometry = getNodeGeometry(
      sourceNode,
      sourceEntry.position.x,
      sourceEntry.position.y,
      Number(sourceNode.size?.width) || 190,
      Number(sourceNode.size?.height) || 80
    );
    const targetGeometry = getNodeGeometry(
      targetNode,
      targetEntry.position.x,
      targetEntry.position.y,
      Number(targetNode.size?.width) || 190,
      Number(targetNode.size?.height) || 80
    );
    const sourceAnchorName = edge.sourceAnchor || "right";
    const targetAnchorName = edge.targetAnchor || "left";
    const sourceAnchor = sourceGeometry.anchors[sourceAnchorName];
    const targetAnchor = targetGeometry.anchors[targetAnchorName];
    const route = edge.route || "orthogonal";
    const edgePath = buildEdgePath(sourceAnchor, targetAnchor, sourceAnchorName, targetAnchorName, route, edge.waypoint);
    const labelX = edgePath.midpoint.x;
    const labelY = edgePath.midpoint.y - 10;

    const style = getEdgeEffectiveStyle(diagram, edge, state.documentTheme);
    const isSelected = selectedEdge?.diagramIndex === diagramIndex && selectedEdge.edgeIndex === edgeIndex;
    const isEditing = isSelected && editingEdge?.diagramIndex === diagramIndex && editingEdge.edgeIndex === edgeIndex;
    const strokeWidth = (Number(style.strokeWidth) || 2) + (isSelected ? 2 : 0);
    const editorWidth = 220;
    const editorHeight = 72;
    const edgeLabelLines = edge.label ? splitTextLines(edge.label) : [];
    const edgeLabelBlockHeight = edgeLabelLines.length * edgeLabelLineHeight;
    const edgeLabelStartY = labelY - edgeLabelBlockHeight / 2 + edgeLabelLineHeight * 0.72;

    const startMarkerStyle = getEdgeMarkerStyle(edge, "start");
    const endMarkerStyle = getEdgeMarkerStyle(edge, "end");
    const startMarkerId = `docdiagram-marker-${diagramIndex}-${edgeIndex}-start`;
    const endMarkerId = `docdiagram-marker-${diagramIndex}-${edgeIndex}-end`;

    if (startMarkerStyle !== "none") {
      edgeMarkerDefs.push(buildEdgeMarkerDef(startMarkerId, startMarkerStyle, "start", style.stroke || "", strokeWidth));
    }

    if (endMarkerStyle !== "none") {
      edgeMarkerDefs.push(buildEdgeMarkerDef(endMarkerId, endMarkerStyle, "end", style.stroke || "", strokeWidth));
    }

    if (isSelected && isDiagramEditing) {
      edgeEndpointMarkup.push(
        `<circle class="docdiagram-edge-endpoint" data-diagram-index="${diagramIndex}" data-edge-index="${edgeIndex}" data-endpoint="source" cx="${sourceAnchor.x}" cy="${sourceAnchor.y}" r="7"/>`,
        `<circle class="docdiagram-edge-endpoint" data-diagram-index="${diagramIndex}" data-edge-index="${edgeIndex}" data-endpoint="target" cx="${targetAnchor.x}" cy="${targetAnchor.y}" r="7"/>`,
        renderEdgeWaypointHandle(diagramIndex, edgeIndex, edge.waypoint ?? edgePath.midpoint, Boolean(edge.waypoint))
      );
    }

    const markerAttributes = [
      startMarkerStyle !== "none" ? ` marker-start="url(#${startMarkerId})"` : "",
      endMarkerStyle !== "none" ? ` marker-end="url(#${endMarkerId})"` : ""
    ].join("");

    return [
      `<g class="docdiagram-edge-group${isSelected ? " docdiagram-edge-selected" : ""}" data-diagram-index="${diagramIndex}" data-edge-index="${edgeIndex}">`,
      `<path class="docdiagram-edge-hit" d="${edgePath.hitPath}" fill="none" stroke="transparent" stroke-width="16"/>`,
      `<path class="docdiagram-edge" d="${edgePath.path}"${markerAttributes} stroke="${escapeHtml(style.stroke || "")}" stroke-width="${strokeWidth}"/>`,
      isEditing
        ? `<foreignObject class="docdiagram-inline-editor-host" x="${labelX - editorWidth / 2}" y="${labelY - editorHeight / 2}" width="${editorWidth}" height="${editorHeight}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-edge" aria-label="Edit edge label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${escapeHtml(edge.label || "")}</textarea></foreignObject>`
        : edgeLabelLines.length
          ? renderTextBlock(labelX, edgeLabelStartY, edgeLabelLines, edgeLabelLineHeight, "docdiagram-edge-label", style.text || "")
          : "",
      `</g>`
    ].join("");
  }).join("");

  const nodeDefs: string[] = [];
  const nodeMarkup = nodeEntries.map(({ node, position }, nodeIndex) => {
    const x = position.x;
    const y = position.y;
    const nodeWidth = Number(node.size?.width) || 190;
    const nodeHeight = Number(node.size?.height) || 80;
    const effectiveStyle = getNodeEffectiveStyle(
      diagram,
      node,
      state.documentTheme,
      state.documentColorScheme
    );
    const paletteRole = node.palette;
    const gradientEntry = paletteRole ? palette?.[paletteRole] : undefined;
    const calloutPointer = node.arrow
      ? buildNodeCalloutPointer({ x, y, width: nodeWidth, height: nodeHeight }, node.arrow)
      : null;
    // An object-bounding-box gradient would restart across the pointer's own box and break the
    // join, so a callout node switches to a user-space gradient spanning the node instead.
    const calloutGradientId = calloutPointer && gradientEntry?.gradient
      ? `docdiagram-${state.documentColorScheme}-${diagramIndex}-${paletteRole}-callout-${nodeIndex}`
      : "";
    if (calloutGradientId && gradientEntry) {
      nodeDefs.push(`<linearGradient id="${calloutGradientId}" gradientUnits="userSpaceOnUse" x1="${x}" y1="${y}" x2="${x}" y2="${y + nodeHeight}"><stop offset="0" stop-color="${escapeHtml(gradientEntry.gradient || gradientEntry.fill)}"/><stop offset="1" stop-color="${escapeHtml(gradientEntry.fill)}"/></linearGradient>`);
    }
    const style = gradientEntry?.gradient
      ? {
        ...effectiveStyle,
        fill: calloutGradientId
          ? `url(#${calloutGradientId})`
          : `url(#docdiagram-${state.documentColorScheme}-${diagramIndex}-${paletteRole})`
      }
      : effectiveStyle;
    const isSelected = selectedNode?.diagramIndex === diagramIndex && selectedNode.nodeId === node.id;
    const isEditing = isSelected && editingNode?.diagramIndex === diagramIndex && editingNode.nodeId === node.id;
    const strokeWidth = (Number(style.strokeWidth) || 2) + (isSelected ? 2 : 0);
    const geometry = getNodeGeometry(node, x, y, nodeWidth, nodeHeight);
    const layout = computeNodeTextLayout(geometry.textBounds, node);
    const isTextShape = node.shape === "text";

    return [
      `<g class="docdiagram-node${isSelected ? " docdiagram-node-selected" : ""}" data-diagram-index="${diagramIndex}" data-node-id="${escapeHtml(node.id)}">`,
      renderNodeBody(geometry, style, strokeWidth),
      calloutPointer
        ? renderNodeCalloutPointer(
          calloutPointer,
          geometry.bodyMarkup,
          style,
          strokeWidth,
          `docdiagram-callout-mask-${diagramIndex}-${nodeIndex}`
        )
        : "",
      isEditing
        ? `<foreignObject class="docdiagram-inline-editor-host" x="${geometry.textBounds.x}" y="${geometry.textBounds.y}" width="${geometry.textBounds.width}" height="${geometry.textBounds.height}"><textarea class="docdiagram-inline-editor docdiagram-inline-editor-node" aria-label="Edit node label. Press Enter for a new line. Press Control or Command plus Enter to save. Press Escape to cancel.">${escapeHtml(node.label)}</textarea></foreignObject>`
        : isTextShape
          ? renderTextShapeContent(geometry.textBounds, node, style.text || "")
          : renderTextBlock(layout.centerX, layout.labelStartY, layout.labelLines, layout.labelLineHeight, "docdiagram-node-label", style.text || "", layout.textAnchor),
      !isEditing && !isTextShape && layout.subtitleLines.length
        ? renderTextBlock(layout.centerX, layout.subtitleStartY, layout.subtitleLines, layout.subtitleLineHeight, "docdiagram-node-subtitle", style.text || "", layout.textAnchor)
        : "",
      isSelected && isDiagramEditing && !isEditing
        ? [
          ["top-left", x - 7, y - 7],
          ["top-right", x + nodeWidth - 7, y - 7],
          ["bottom-left", x - 7, y + nodeHeight - 7],
          ["bottom-right", x + nodeWidth - 7, y + nodeHeight - 7]
        ].map(([corner, handleX, handleY]) =>
          `<rect class="docdiagram-resize-handle" data-resize-corner="${corner}" x="${handleX}" y="${handleY}" width="14" height="14" rx="3"/>`
        ).join("")
        : "",
      isSelected && isDiagramEditing && !isEditing
        ? edgeAnchors.map((anchor) => {
          const point = geometry.anchors[anchor];
          return `<circle class="docdiagram-connection-port" data-anchor="${anchor}" cx="${point.x}" cy="${point.y}" r="7" aria-label="${anchor} connection port"/>`;
        }).join("")
        : "",
      isSelected && isDiagramEditing && !isEditing && node.arrow
        ? `<circle class="docdiagram-callout-handle" data-diagram-index="${diagramIndex}" data-node-id="${escapeHtml(node.id)}" cx="${node.arrow.x}" cy="${node.arrow.y}" r="7" aria-label="Callout pointer target"/>`
        : "",
      `</g>`
    ].join("");
  }).join("");

  const width = Number(diagram.canvas.width) || 1000;
  const height = Number(diagram.canvas.height) || 560;
  const isExpanded = state.expandedDiagramIndex === diagramIndex;
  const viewportHeight = state.diagramViewportHeights.get(diagramIndex);
  const viewportStyle = viewportHeight && !isExpanded
    ? ` style="box-sizing: border-box; height: ${viewportHeight}px; min-height: 0"`
    : "";
  const cameraOffset = diagramCameraOffsets.get(diagramIndex) || { x: 0, y: 0 };
  const cameraStyle = `width: ${diagramZooms.get(diagramIndex) || 100}%; transform: translate(${cameraOffset.x}px, ${cameraOffset.y}px)`;

  return [
    `<figure class="docdiagram" data-diagram-index="${diagramIndex}" data-diagram-type="flowchart" data-editing="${isDiagramEditing}" data-expanded="${isExpanded}"${viewportStyle}>`,
    renderToolbar(diagramIndex, "flowchart", state),
    `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Architecture diagram" data-diagram-index="${diagramIndex}" style="${cameraStyle}">`,
    `<defs>${paletteDefs}${nodeDefs.join("")}${edgeMarkerDefs.join("")}</defs>`,
    nodeMarkup,
    edgeMarkup,
    connectionDrag?.diagramIndex === diagramIndex
      ? `<path class="docdiagram-connection-preview${connectionDrag.invalid ? " docdiagram-connection-invalid" : ""}" d="${buildEdgePath(connectionDrag.start, connectionDrag.current, connectionDrag.sourceAnchor, connectionDrag.targetAnchor || connectionDrag.sourceAnchor, "straight").path}"/>`
      : "",
    edgeEndpointMarkup.join(""),
    `</svg>`,
    `</figure>`
  ].join("");
}
