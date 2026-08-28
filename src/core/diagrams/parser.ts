import {
  type Diagram,
  type FlowchartDiagram,
  type FlowchartNode,
  type SequenceDiagram,
  colourSchemes,
  edgeAnchors,
  edgeMarkerStyles,
  edgeRoutes,
  paletteRoles,
  nodeTextHAlignments,
  nodeTextVAlignments,
  nodeShapes,
  supportedDiagramTypes
} from "./schema";
import { fitCanvasToContent } from "./mutations";
import { applyFlowchartLayout, layoutDirections, resolveLayoutSettings } from "./layout";

const diagramCollectionNames = ["nodes", "edges", "participants", "messages", "activations", "notes", "groups"] as const;
const flowchartNodeFields = ["id", "label", "shape", "class", "position", "size", "style", "palette", "subtitle", "textVAlign", "textHAlign", "arrow", "children"] as const;
const flowchartEdgeFields = ["source", "target", "class", "sourceAnchor", "targetAnchor", "route", "label", "style", "start", "end", "waypoint"] as const;
const namedStyleFields = ["palette", "style"] as const;
const layoutFields = ["direction", "stageGap", "siblingGap"] as const;
const flowchartNodeStyleFields = ["fill", "stroke", "strokeWidth", "text"] as const;
const flowchartEdgeStyleFields = ["stroke", "strokeWidth", "text"] as const;
const sequenceParticipantFields = ["id", "label", "kind", "palette", "style", "size"] as const;
const sequenceParticipantKinds = ["actor"] as const;
const sequenceMessageFields = ["from", "to", "label", "style"] as const;
const sequenceMessageStyles = ["solid", "dashed"] as const;
const sequenceActivationFields = ["participant", "from", "to"] as const;
const sequenceNoteFields = ["at", "after", "label", "palette", "style", "size"] as const;
const sequenceGroupFields = ["label", "from", "to"] as const;
const sequenceCanvasFields = ["width", "height", "participantSpacing", "participantSize"] as const;

type ParsedObject = Record<string, unknown>;

type SequencePresentationCandidate = {
  palette?: string;
  style?: ParsedObject;
  size?: ParsedObject;
};

export function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function parseScalar(value: string): unknown {
  const trimmed = value.trim();

  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      throw new Error(`Invalid quoted scalar: ${trimmed}`);
    }
  }

  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1);
  }

  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }

  if (trimmed === "true" || trimmed === "false") {
    return trimmed === "true";
  }

  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    const entriesSource = trimmed.slice(1, -1).trim();
    if (!entriesSource) {
      return {};
    }

    const entries = entriesSource.split(",");
    const object: ParsedObject = {};

    for (const entry of entries) {
      const separator = entry.indexOf(":");
      if (separator === -1) {
        throw new Error(`Invalid inline mapping: ${trimmed}`);
      }

      const key = entry.slice(0, separator).trim();
      object[key] = parseScalar(entry.slice(separator + 1));
    }

    return object;
  }

  return trimmed;
}

const blockScalarStartPattern = /^(\s*)((?:- )?)([A-Za-z_][\w-]*):\s*\|([+-])?\s*$/;

// Desugars YAML literal block scalars ("key: |" followed by indented content lines) into the
// single-line JSON-quoted scalar form the rest of the parser already understands. This runs on
// the raw, unfiltered lines so that blank lines and "#"-prefixed markdown headings inside a block
// are captured as literal content rather than being treated as diagram blank/comment lines. Lines
// outside a detected block are passed through unchanged, preserving existing comment handling.
export function desugarBlockScalars(lines: string[]): string[] {
  const result: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const match = line.match(blockScalarStartPattern);

    if (!match) {
      result.push(line);
      index += 1;
      continue;
    }

    const [, indent, listPrefix, key, chomping] = match;
    let scanIndex = index + 1;
    let contentIndent: number | null = null;

    while (scanIndex < lines.length) {
      const candidate = lines[scanIndex];
      if (candidate.trim() === "") {
        scanIndex += 1;
        continue;
      }
      contentIndent = candidate.length - candidate.trimStart().length;
      break;
    }

    if (contentIndent === null || contentIndent <= indent.length) {
      result.push(`${indent}${listPrefix}${key}: ""`);
      index += 1;
      continue;
    }

    const blockLines: string[] = [];
    let cursor = index + 1;
    let trailingBlankCount = 0;

    while (cursor < lines.length) {
      const candidate = lines[cursor];
      if (candidate.trim() === "") {
        blockLines.push("");
        trailingBlankCount += 1;
        cursor += 1;
        continue;
      }
      if (candidate.length - candidate.trimStart().length < contentIndent) {
        break;
      }
      blockLines.push(candidate.slice(contentIndent));
      trailingBlankCount = 0;
      cursor += 1;
    }

    // YAML "clip" chomping: any run of trailing blank lines collapses to a single trailing newline.
    // `|+` keeps those lines, which the serializer uses to preserve exact text round trips.
    if (trailingBlankCount > 0 && chomping !== "+") {
      blockLines.length -= trailingBlankCount - 1;
    }

    const joined = blockLines.join("\n");
    result.push(`${indent}${listPrefix}${key}: ${JSON.stringify(joined)}`);
    index = cursor;
  }

  return result;
}

export function parseDiagram(source: string, colorScheme = "classic"): Diagram {
  const lines = desugarBlockScalars(source.replace(/\r\n/g, "\n").split("\n"));
  const meaningfulLines = lines.filter((line) => line.trim() && !line.trimStart().startsWith("#"));
  for (const line of meaningfulLines) {
    if (line.trimStart() !== line || !line.trimEnd().endsWith(":")) {
      continue;
    }
    const key = line.trim().slice(0, -1);
    if (key !== "canvas" && key !== "styles" && key !== "layout" && !diagramCollectionNames.includes(key as (typeof diagramCollectionNames)[number])) {
      throw new Error(`Unsupported diagram section: ${key}`);
    }
  }
  let cursor = 0;
  const indentation = (line: string) => line.length - line.trimStart().length;
  const property = (line: string) => line.trim().match(/^([^:]+):\s*(.*)$/);
  const item = (line: string) => line.trim().match(/^- ([^:]+):\s*(.*)$/);
  const parseValue = (indent: number): unknown => {
    if (cursor >= meaningfulLines.length || indentation(meaningfulLines[cursor]) <= indent) {
      return {};
    }
    return meaningfulLines[cursor].trimStart().startsWith("- ")
      ? parseList(indentation(meaningfulLines[cursor]))
      : parseObject(indentation(meaningfulLines[cursor]));
  };
  const parseObject = (indent: number): ParsedObject => {
    const object: ParsedObject = {};
    while (cursor < meaningfulLines.length && indentation(meaningfulLines[cursor]) === indent) {
      const rawLine = meaningfulLines[cursor];
      const match = property(rawLine);
      if (!match) {
        throw new Error(`Cannot parse diagram line: ${rawLine}`);
      }
      cursor += 1;
      object[match[1]] = match[2] ? parseScalar(match[2]) : parseValue(indent);
    }
    return object;
  };
  const parseList = (indent: number): ParsedObject[] => {
    const list: ParsedObject[] = [];
    while (cursor < meaningfulLines.length && indentation(meaningfulLines[cursor]) === indent) {
      const rawLine = meaningfulLines[cursor];
      const match = item(rawLine);
      if (!match) {
        throw new Error(`Cannot parse diagram line: ${rawLine}`);
      }
      cursor += 1;
      const object: ParsedObject = { [match[1]]: match[2] ? parseScalar(match[2]) : parseValue(indent) };
      while (cursor < meaningfulLines.length && indentation(meaningfulLines[cursor]) > indent) {
        const propertyIndent = indentation(meaningfulLines[cursor]);
        const next = property(meaningfulLines[cursor]);
        if (!next) {
          throw new Error(`Cannot parse diagram line: ${meaningfulLines[cursor]}`);
        }
        cursor += 1;
        object[next[1]] = next[2] ? parseScalar(next[2]) : parseValue(propertyIndent);
      }
      list.push(object);
    }
    return list;
  };
  const diagram = parseObject(0) as ParsedObject & { canvas?: ParsedObject };

  if (!diagram.type) {
    throw new Error(`Diagram type is required and must be one of: ${supportedDiagramTypes.join(", ")}.`);
  }

  if (typeof diagram.type !== "string" || !supportedDiagramTypes.includes(diagram.type as (typeof supportedDiagramTypes)[number])) {
    throw new Error(`Unsupported diagram type: ${String(diagram.type)}`);
  }

  return diagram.type === "flowchart"
    ? parseFlowchartDiagram(diagram as unknown as FlowchartDiagram, colorScheme)
    : parseSequenceDiagram(diagram as unknown as SequenceDiagram, colorScheme);
}

function parseFlowchartDiagram(diagram: FlowchartDiagram, colorScheme = "classic"): FlowchartDiagram {
  // `canvas: auto` is shorthand for a canvas whose size is derived from its content.
  if ((diagram.canvas as unknown) === "auto") {
    diagram.canvas = { auto: true };
  }
  diagram.canvas = diagram.canvas || {};
  if (typeof diagram.canvas !== "object" || Array.isArray(diagram.canvas)) {
    throw new Error("Flowchart canvas must be a mapping or the value \"auto\".");
  }
  if (diagram.canvas.auto !== undefined && typeof diagram.canvas.auto !== "boolean") {
    throw new Error("Flowchart canvas.auto must be true or false.");
  }
  if (!Array.isArray(diagram.nodes)) {
    diagram.nodes = [];
  }
  if (!Array.isArray(diagram.edges)) {
    diagram.edges = [];
  }
  validateFlowchartDiagram(diagram, colorScheme);
  // Layout runs before the canvas is measured, so a derived canvas fits the laid-out result.
  applyFlowchartLayout(diagram);
  // Derived bounds are baked into the model so the renderer, exports, and the editor all read a
  // real width and height. The serializer writes `auto` back out rather than the baked numbers.
  if (diagram.canvas.auto) {
    fitCanvasToContent(diagram);
  }
  return diagram;
}

function parseSequenceDiagram(diagram: SequenceDiagram, colorScheme = "classic"): SequenceDiagram {
  validateSequenceDiagram(diagram, colorScheme);
  return diagram;
}

function validateDiagram(diagram: Diagram, colorScheme = "classic"): void {
  return diagram.type === "flowchart"
    ? validateFlowchartDiagram(diagram, colorScheme)
    : validateSequenceDiagram(diagram, colorScheme);
}

function assertAllowedFields(candidate: Record<string, unknown> | undefined, allowedFields: readonly string[], description: string): void {
  for (const key of Object.keys(candidate || {})) {
    if (!allowedFields.includes(key)) {
      throw new Error(`Unsupported ${description} field: ${key}`);
    }
  }
}

function assertAllowedStyleFields(style: Record<string, unknown> | undefined, allowedFields: readonly string[], description: string): void {
  if (!style) {
    return;
  }

  for (const key of Object.keys(style)) {
    if (!allowedFields.includes(key)) {
      throw new Error(`Unsupported ${description} style field: ${key}`);
    }
  }
}

function assertCoordinatePair(value: unknown, description: string): void {
  const sentence = description.charAt(0).toUpperCase() + description.slice(1);

  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`${sentence} must be a mapping.`);
  }

  const point = value as { x?: unknown; y?: unknown };
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    throw new Error(`${sentence} requires finite x and y coordinates.`);
  }

  assertAllowedFields(value as ParsedObject, ["x", "y"], description);
}

function validateNamedStyles(diagram: FlowchartDiagram): Set<string> {
  if (diagram.styles === undefined) {
    return new Set();
  }

  if (typeof diagram.styles !== "object" || Array.isArray(diagram.styles)) {
    throw new Error("Diagram styles must be a mapping of names to style definitions.");
  }

  for (const [name, definition] of Object.entries(diagram.styles)) {
    if (typeof definition !== "object" || definition === null || Array.isArray(definition)) {
      throw new Error(`Style "${name}" must be a mapping.`);
    }

    assertAllowedFields(definition as unknown as Record<string, unknown>, namedStyleFields, `style "${name}"`);

    if (definition.palette !== undefined &&
      (typeof definition.palette !== "string" || !paletteRoles.includes(definition.palette as (typeof paletteRoles)[number]))) {
      throw new Error(`Unsupported palette in style "${name}": ${String(definition.palette)}`);
    }

    if ((definition.style as { width?: unknown } | undefined)?.width !== undefined) {
      throw new Error(`Style "${name}" style.width is not supported; use style.strokeWidth.`);
    }

    assertAllowedStyleFields(definition.style as Record<string, unknown> | undefined, flowchartNodeStyleFields, `style "${name}"`);

    if (definition.palette === undefined && !Object.keys(definition.style || {}).length) {
      throw new Error(`Style "${name}" declares no palette or style values.`);
    }
  }

  return new Set(Object.keys(diagram.styles));
}

function validateLayout(diagram: FlowchartDiagram): void {
  if (diagram.layout === undefined) {
    return;
  }

  if (typeof diagram.layout === "object" && !Array.isArray(diagram.layout)) {
    assertAllowedFields(diagram.layout as Record<string, unknown>, layoutFields, "layout");
    for (const key of ["stageGap", "siblingGap"] as const) {
      const value = (diagram.layout as Record<string, unknown>)[key];
      if (value !== undefined && (typeof value !== "number" || !Number.isFinite(value) || value < 0)) {
        throw new Error(`Layout ${key} must be a number of zero or more.`);
      }
    }
  } else if (typeof diagram.layout !== "string") {
    throw new Error("Layout must be a direction or a mapping.");
  }

  const settings = resolveLayoutSettings(diagram.layout);
  if (!settings || !layoutDirections.includes(settings.direction)) {
    throw new Error(`Unsupported layout direction: ${String(settings?.direction)}`);
  }
}

function validateFlowchartDiagram(diagram: FlowchartDiagram, colorScheme = "classic"): void {
  validateLayout(diagram);
  // The `layout` key is what makes a diagram machine-managed, and that is the whole of the
  // difference: with it, positions and anchors may be left out for the layout engine to fill in;
  // without it, leaving them out is an error rather than a drawing silently stacked at the origin.
  const layoutManaged = diagram.layout !== undefined;
  if (diagram.participants !== undefined || diagram.messages !== undefined ||
    diagram.activations !== undefined || diagram.notes !== undefined || diagram.groups !== undefined) {
    throw new Error("Flowchart diagrams do not support sequence sections.");
  }

  const styleNames = validateNamedStyles(diagram);
  const assertKnownClass = (value: unknown, description: string): void => {
    if (value === undefined) {
      return;
    }
    if (typeof value !== "string" || !styleNames.has(value)) {
      throw new Error(`Unknown style class on ${description}: ${String(value)}`);
    }
  };

  const nodeIds = new Set<string>();
  const validateNode = (node: FlowchartNode): void => {
    if ("type" in node) {
      throw new Error(`Node "${node.id || "unknown"}" uses removed field "type".`);
    }

    assertAllowedFields(node as unknown as Record<string, unknown>, flowchartNodeFields, `node "${node.id || "unknown"}"`);

    if (!node.id || typeof node.label !== "string") {
      throw new Error("Every node requires an id and a string label.");
    }

    if (!node.shape) {
      throw new Error(`Node "${node.id}" requires a shape.`);
    }

    if (!nodeShapes.includes(node.shape as (typeof nodeShapes)[number])) {
      throw new Error(`Unsupported node shape: ${node.shape}`);
    }
    if (node.position === undefined) {
      if (!layoutManaged) {
        throw new Error(`Node "${node.id}" requires a position, or a "layout" on the diagram to place it.`);
      }
    } else {
      assertCoordinatePair(node.position, `node "${node.id}" position`);
    }

    if (node.textVAlign !== undefined && !nodeTextVAlignments.includes(node.textVAlign)) {
      throw new Error(`Unsupported node textVAlign: ${node.textVAlign}`);
    }
    if (node.textHAlign !== undefined && !nodeTextHAlignments.includes(node.textHAlign)) {
      throw new Error(`Unsupported node textHAlign: ${node.textHAlign}`);
    }

    if (node.palette !== undefined) {
      if (typeof node.palette !== "string" || !paletteRoles.includes(node.palette as (typeof paletteRoles)[number])) {
        throw new Error(`Unsupported node palette: ${String(node.palette || "unknown")}`);
      }
    }

    if ((node.style as { width?: unknown } | undefined)?.width !== undefined) {
      throw new Error("Node style.width is not supported; use style.strokeWidth.");
    }

    assertKnownClass(node.class, `node "${node.id}"`);
    assertAllowedStyleFields(node.style as Record<string, unknown> | undefined, flowchartNodeStyleFields, `node "${node.id}"`);
    if (node.arrow !== undefined) {
      assertCoordinatePair(node.arrow, `node "${node.id}" arrow`);
    }
    if (nodeIds.has(node.id)) {
      throw new Error(`Duplicate flowchart node id: ${node.id}`);
    }
    nodeIds.add(node.id);
    if (node.children !== undefined && !Array.isArray(node.children)) {
      throw new Error(`Children for node "${node.id}" must be a list.`);
    }
    for (const child of node.children || []) {
      validateNode(child);
    }
  };

  for (const node of diagram.nodes) {
    validateNode(node);
  }

  for (const edge of diagram.edges) {
    assertAllowedFields(edge as unknown as Record<string, unknown>, flowchartEdgeFields, `edge "${edge.source || "unknown"}" -> "${edge.target || "unknown"}"`);

    // Anchors are resolved per side, so an author can pin the one that carries intent - the
    // deliberate back-edge that steers stage assignment - and leave the other to be derived.
    if (!edge.sourceAnchor && !layoutManaged) {
      throw new Error(`Edge "${edge.source || "unknown"}" -> "${edge.target || "unknown"}" requires a sourceAnchor.`);
    }

    if (!edge.targetAnchor && !layoutManaged) {
      throw new Error(`Edge "${edge.source || "unknown"}" -> "${edge.target || "unknown"}" requires a targetAnchor.`);
    }

    if (edge.sourceAnchor && !edgeAnchors.includes(edge.sourceAnchor as (typeof edgeAnchors)[number])) {
      throw new Error(`Unsupported edge sourceAnchor: ${edge.sourceAnchor}`);
    }

    if (edge.targetAnchor && !edgeAnchors.includes(edge.targetAnchor as (typeof edgeAnchors)[number])) {
      throw new Error(`Unsupported edge targetAnchor: ${edge.targetAnchor}`);
    }

    if (edge.route !== undefined && !edgeRoutes.includes(edge.route as (typeof edgeRoutes)[number])) {
      throw new Error(`Unsupported edge route: ${edge.route}`);
    }
    if (edge.waypoint !== undefined) {
      assertCoordinatePair(edge.waypoint, `edge "${edge.source}" -> "${edge.target}" waypoint`);
    }

    if (edge.start !== undefined && !edgeMarkerStyles.includes(edge.start as (typeof edgeMarkerStyles)[number])) {
      throw new Error(`Unsupported edge start marker: ${edge.start}`);
    }

    if (edge.end !== undefined && !edgeMarkerStyles.includes(edge.end as (typeof edgeMarkerStyles)[number])) {
      throw new Error(`Unsupported edge end marker: ${edge.end}`);
    }

    if ((edge.style as { width?: unknown } | undefined)?.width !== undefined) {
      throw new Error("Edge style.width is not supported; use style.strokeWidth.");
    }

    assertKnownClass(edge.class, `edge "${edge.source || "unknown"}" -> "${edge.target || "unknown"}"`);
    assertAllowedStyleFields(edge.style as Record<string, unknown> | undefined, flowchartEdgeStyleFields, `edge "${edge.source || "unknown"}" -> "${edge.target || "unknown"}"`);
  }

}

function validateSequenceDiagram(diagram: SequenceDiagram, colorScheme = "classic"): void {
  if (diagram.nodes !== undefined || diagram.edges !== undefined) {
    throw new Error("Sequence diagrams do not support flowchart sections.");
  }

  if (!Array.isArray(diagram.participants) || !Array.isArray(diagram.messages)) {
    throw new Error("Sequence diagrams require participants and messages sections.");
  }

  if (diagram.activations !== undefined && !Array.isArray(diagram.activations)) {
    throw new Error("Sequence diagram activations must be a list.");
  }

  if (diagram.notes !== undefined && !Array.isArray(diagram.notes)) {
    throw new Error("Sequence diagram notes must be a list.");
  }

  if (diagram.groups !== undefined && !Array.isArray(diagram.groups)) {
    throw new Error("Sequence diagram groups must be a list.");
  }

  if (diagram.canvas !== undefined && (typeof diagram.canvas !== "object" || Array.isArray(diagram.canvas))) {
    throw new Error("Sequence canvas must be a mapping.");
  }
  assertAllowedFields(diagram.canvas as ParsedObject | undefined, sequenceCanvasFields, "sequence canvas");
  for (const key of ["width", "height", "participantSpacing"] as const) {
    const value = diagram.canvas?.[key];
    if (value !== undefined && (!Number.isFinite(value) || Number(value) <= 0)) {
      throw new Error(`Sequence canvas.${key} must be a positive number.`);
    }
  }
  if (diagram.canvas?.participantSize !== undefined) {
    if (typeof diagram.canvas.participantSize !== "object" || Array.isArray(diagram.canvas.participantSize)) {
      throw new Error("Sequence canvas.participantSize must be a mapping.");
    }
    assertAllowedFields(
      diagram.canvas.participantSize as unknown as ParsedObject,
      ["width", "height"],
      "sequence canvas participantSize"
    );
    for (const key of ["width", "height"] as const) {
      const value = diagram.canvas.participantSize[key];
      if (value !== undefined && (!Number.isFinite(value) || Number(value) <= 0)) {
        throw new Error(`Sequence canvas.participantSize.${key} must be a positive number.`);
      }
    }
  }

  const participantIds = new Set<string>();
  for (const participant of diagram.participants) {
    assertAllowedFields(participant as unknown as Record<string, unknown>, sequenceParticipantFields, `participant "${participant.id || "unknown"}"`);

    if (!participant.id || !participant.label) {
      throw new Error("Every sequence participant requires an id and label.");
    }

    if (participant.kind !== undefined && !sequenceParticipantKinds.includes(participant.kind as (typeof sequenceParticipantKinds)[number])) {
      throw new Error(`Unsupported sequence participant kind: ${participant.kind}`);
    }
    validateSequencePresentation(participant as unknown as SequencePresentationCandidate, `participant "${participant.id}"`, colorScheme);

    if (participantIds.has(participant.id)) {
      throw new Error(`Duplicate sequence participant id: ${participant.id}`);
    }

    participantIds.add(participant.id);
  }

  for (const [index, message] of diagram.messages.entries()) {
    assertAllowedFields(message as unknown as Record<string, unknown>, sequenceMessageFields, `message ${index}`);

    if (!message.from || !message.to || !message.label) {
      throw new Error(`Sequence message ${index} requires from, to, and label.`);
    }

    if (!participantIds.has(message.from) || !participantIds.has(message.to)) {
      throw new Error(`Sequence message ${index} references an unknown participant.`);
    }

    if (message.style !== undefined && !sequenceMessageStyles.includes(message.style as (typeof sequenceMessageStyles)[number])) {
      throw new Error(`Unsupported sequence message style: ${message.style}`);
    }
  }

  for (const [index, activation] of (diagram.activations || []).entries()) {
    assertAllowedFields(activation as unknown as Record<string, unknown>, sequenceActivationFields, `activation ${index}`);
    if (!activation.participant || !Number.isInteger(activation.from) || !Number.isInteger(activation.to)) {
      throw new Error(`Sequence activation ${index} requires participant and integer from and to message positions.`);
    }
    if (!participantIds.has(activation.participant)) {
      throw new Error(`Sequence activation ${index} references an unknown participant.`);
    }
    if (activation.from < 1 || activation.to < activation.from || activation.to > diagram.messages.length) {
      throw new Error(`Sequence activation ${index} range is out of bounds.`);
    }
  }

  for (const [index, note] of (diagram.notes || []).entries()) {
    assertAllowedFields(note as unknown as Record<string, unknown>, sequenceNoteFields, `note ${index}`);
    const after = note.after as unknown as number;
    if (!note.at || !Number.isInteger(after) || !note.label) {
      throw new Error(`Sequence note ${index} requires at, after, and label.`);
    }
    validateSequencePresentation(note as unknown as SequencePresentationCandidate, `note ${index}`, colorScheme);
    if (!participantIds.has(note.at)) {
      throw new Error(`Sequence note ${index} references an unknown participant.`);
    }
    if (after < 0 || after > diagram.messages.length) {
      throw new Error(`Sequence note ${index} after position is out of bounds.`);
    }
  }

  for (const [index, group] of (diagram.groups || []).entries()) {
    assertAllowedFields(group as unknown as Record<string, unknown>, sequenceGroupFields, `group ${index}`);
    if (!group.label && group.label !== "") {
      throw new Error(`Sequence group ${index} requires a label.`);
    }
    if (!Number.isInteger(group.from) || !Number.isInteger(group.to)) {
      throw new Error(`Sequence group ${index} requires integer from and to indices.`);
    }
    if (group.from < 1 || group.to < group.from || group.to > diagram.messages.length) {
      throw new Error(`Sequence group ${index} range is out of bounds.`);
    }
  }

}

function validateSequencePresentation(item: SequencePresentationCandidate, description: string, colorScheme = "classic"): void {
  if (item.palette !== undefined) {
    const palette = String(item.palette || "");
    if (!paletteRoles.includes(palette as (typeof paletteRoles)[number])) {
      throw new Error(`Unsupported ${description} palette: ${palette || "unknown"}`);
    }
  }
  assertAllowedStyleFields(item.style, flowchartNodeStyleFields, description);
  if (item.size) {
    assertAllowedFields(item.size, ["width", "height"], `size for ${description}`);
    for (const key of ["width", "height"] as const) {
      const value = item.size[key];
      if (value !== undefined && (!Number.isFinite(value) || Number(value) <= 0)) {
        throw new Error(`${description} size.${key} must be a positive number.`);
      }
    }
  }
}
