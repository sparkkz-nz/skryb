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

function serializeItem(item: Record<string, unknown>, indent = 2): string[] {
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
        lines.push(...serializeItem(child as Record<string, unknown>, indent + 4));
      }
    } else {
      lines.push(...formatField(key, value, indent + 2, indent + 4));
    }
  }

  return lines;
}

export function serializeDiagram(diagram: Diagram): string {
  const lines = [`type: ${formatScalar(diagram.type)}`];

  for (const [key, value] of Object.entries(diagram as unknown as Record<string, unknown>)) {
    if (key === "type" || key === "canvas" || key === "nodes" || key === "edges" ||
      key === "participants" || key === "messages" || key === "activations" || key === "notes" || key === "groups") {
      continue;
    }
    lines.push(...formatField(key, value, 0, 2));
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
      lines.push(...serializeItem(participant as unknown as Record<string, unknown>));
    }

    lines.push("messages:");
    for (const message of diagram.messages || []) {
      lines.push(...serializeItem(message as unknown as Record<string, unknown>));
    }

    if (diagram.activations !== undefined) {
      lines.push("activations:");
      for (const activation of diagram.activations || []) {
        lines.push(...serializeItem(activation as unknown as Record<string, unknown>));
      }
    }

    if (diagram.notes !== undefined) {
      lines.push("notes:");
      for (const note of diagram.notes || []) {
        lines.push(...serializeItem(note as unknown as Record<string, unknown>));
      }
    }

    if (diagram.groups !== undefined) {
      lines.push("groups:");
      for (const group of diagram.groups || []) {
        lines.push(...serializeItem(group as unknown as Record<string, unknown>));
      }
    }

    return lines.join("\n");
  }

  // A derived canvas round-trips as `canvas: auto`: its width and height are computed from the
  // content on every parse, so writing the baked numbers back would freeze them into the source.
  const canvas = diagram.canvas || {};
  const canvasEntries = Object.entries(canvas)
    .filter(([key]) => !canvas.auto || (key !== "width" && key !== "height"));
  if (canvas.auto && canvasEntries.length === 1) {
    lines.push("canvas: auto");
  } else {
    lines.push("canvas:");
    for (const [key, value] of canvasEntries) {
      lines.push(...formatField(key, value, 2, 4));
    }
  }

  lines.push("nodes:");
  for (const node of diagram.nodes || []) {
    lines.push(...serializeItem(node as unknown as Record<string, unknown>));
  }

  lines.push("edges:");
  for (const edge of diagram.edges || []) {
    lines.push(...serializeItem(edge as unknown as Record<string, unknown>));
  }

  return lines.join("\n");
}
