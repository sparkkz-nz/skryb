import type { Diagram } from "./schema";

function formatScalar(value: unknown): string {
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (value && typeof value === "object") {
    if (!Object.keys(value).length) {
      return "{}";
    }
    return `{ ${Object.entries(value).map(([key, entry]) => `${key}: ${formatScalar(entry)}`).join(", ")} }`;
  }

  return /^[\w./-]+(?: [\w./-]+)*$/.test(String(value))
    ? String(value)
    : JSON.stringify(String(value));
}

// Emits a single field as one or more lines. Multiline string values are emitted as a YAML
// literal block scalar ("key: |" followed by indented content lines) instead of a JSON-escaped
// "\n" string, so authored labels/subtitles stay human-readable in the canonical source. `prefix`
// carries the list-item "- " marker for a first field, and `contentIndent` is the column used for
// the block's content lines (always deeper than any sibling field so parsing is unambiguous).
function formatField(key: string, value: unknown, lineIndent: number, contentIndent: number, prefix = ""): string[] {
  if (typeof value === "string" && value.includes("\n")) {
    const contentLines = value.split("\n").map((line) => line.length ? `${" ".repeat(contentIndent)}${line}` : "");
    return [`${" ".repeat(lineIndent)}${prefix}${key}: |+`, ...contentLines];
  }

  return [`${" ".repeat(lineIndent)}${prefix}${key}: ${formatScalar(value)}`];
}

function serializeItem(item: object, indent = 2): string[] {
  const entries = Object.entries(item);
  const [firstKey, firstValue] = entries[0];
  const lines = formatField(firstKey, firstValue, indent, indent + 4, "- ");

  for (const [key, value] of entries.slice(1)) {
    if (key === "children" && Array.isArray(value) && !value.length) {
      continue;
    }
    if (key === "children" && Array.isArray(value)) {
      lines.push(`${" ".repeat(indent + 2)}children:`);
      for (const child of value) {
        lines.push(...serializeItem(child as object, indent + 4));
      }
    } else {
      lines.push(...formatField(key, value, indent + 2, indent + 4));
    }
  }

  return lines;
}

export function serializeDiagram(diagram: Diagram): string {
  const lines = [`type: ${formatScalar(diagram.type)}`];

  for (const key of ["version", "id", "caption", "theme"] as const) {
    if (diagram[key] !== undefined) {
      lines.push(...formatField(key, diagram[key], 0, 2));
    }
  }
  if (diagram.type === "flowchart" && diagram.layout !== undefined) {
    lines.push(...formatField("layout", diagram.layout, 0, 2));
  }

  if (diagram.type === "sequence") {
    if (diagram.canvas !== undefined) {
      lines.push("canvas:");
      for (const [key, value] of Object.entries(diagram.canvas)) {
        lines.push(...formatField(key, value, 2, 4));
      }
    }

    lines.push("participants:");
    for (const participant of diagram.participants || []) {
      lines.push(...serializeItem(participant));
    }

    lines.push("messages:");
    for (const message of diagram.messages || []) {
      lines.push(...serializeItem(message));
    }

    if (diagram.activations !== undefined) {
      lines.push("activations:");
      for (const activation of diagram.activations || []) {
        lines.push(...serializeItem(activation));
      }
    }

    if (diagram.notes !== undefined) {
      lines.push("notes:");
      for (const note of diagram.notes || []) {
        lines.push(...serializeItem(note));
      }
    }

    if (diagram.groups !== undefined) {
      lines.push("groups:");
      for (const group of diagram.groups || []) {
        lines.push(...serializeItem(group));
      }
    }

    return lines.join("\n");
  }

  // Named styles are written as a block rather than an inline mapping, both so the canonical
  // source stays readable and because an inline mapping does not survive being parsed back.
  if (diagram.styles !== undefined) {
    lines.push("styles:");
    for (const [name, definition] of Object.entries(diagram.styles)) {
      lines.push(`  ${name}:`);
      for (const [key, value] of Object.entries(definition)) {
        lines.push(...formatField(key, value, 4, 6));
      }
    }
  }

  // A derived canvas round-trips as `canvas: auto`: its width and height are computed from the
  // content on every parse, so writing the baked numbers back would freeze them into the source.
  const canvas = diagram.canvas || {};
  const canvasEntries = Object.entries(canvas)
    .filter(([key]) => !canvas.auto || (key !== "width" && key !== "height"));
  if (canvas.auto && canvasEntries.length === 1) {
    lines.push("canvas: auto");
  } else if (canvasEntries.length) {
    lines.push("canvas:");
    for (const [key, value] of canvasEntries) {
      lines.push(...formatField(key, value, 2, 4));
    }
  }

  lines.push("nodes:");
  for (const node of diagram.nodes || []) {
    lines.push(...serializeItem(node));
  }

  lines.push("edges:");
  for (const edge of diagram.edges || []) {
    lines.push(...serializeItem(edge));
  }

  return lines.join("\n");
}
