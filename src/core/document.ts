import { colourSchemes } from "./diagrams/schema";
import { parseDiagram, parseScalar } from "./diagrams/parser";
import { resolveTheme } from "./diagrams/styles";
import { findFenceClose, isFenceClose, parseFenceOpen, stripFencePrefix } from "./fences";

export const documentDoctypes = ["document", "diagram"] as const;

export type DocumentDoctype = (typeof documentDoctypes)[number];

export interface ResolvedDocument {
  content: string;
  frontmatter: Record<string, unknown>;
  theme: string;
  resolvedTheme: "light" | "dark";
  colourScheme: string;
  doctype: DocumentDoctype;
}

export function parseDocumentFrontmatter(source: string): { content: string; frontmatter: Record<string, unknown> } {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const openingIndex = lines.findIndex((line) => line.trim() !== "");
  if (openingIndex === -1 || lines[openingIndex] !== "---") {
    return { content: source, frontmatter: {} };
  }

  const closingIndex = lines.indexOf("---", openingIndex + 1);
  if (closingIndex === -1) {
    return { content: source, frontmatter: {} };
  }

  const frontmatter: Record<string, unknown> = {};
  for (const line of lines.slice(openingIndex + 1, closingIndex)) {
    if (!line.trim() || line.trimStart().startsWith("#")) {
      continue;
    }

    const propertyMatch = line.match(/^([^:]+):\s*(.*)$/);
    if (!propertyMatch) {
      throw new Error(`Cannot parse document frontmatter line: ${line}`);
    }

    frontmatter[propertyMatch[1]] = parseScalar(propertyMatch[2]);
  }

  return { content: lines.slice(closingIndex + 1).join("\n"), frontmatter };
}

export function resolveDocument(source: string): ResolvedDocument {
  const document = parseDocumentFrontmatter(source);
  const theme = String(document.frontmatter.theme || "auto");
  const colourScheme = String(document.frontmatter.colourScheme || "classic");
  const doctype = String(document.frontmatter.doctype || "document");

  let resolvedTheme: "light" | "dark";
  try {
    resolvedTheme = resolveTheme(theme);
  } catch {
    throw new Error(`Unsupported document theme: ${theme}`);
  }
  if (!colourSchemes[colourScheme]) {
    throw new Error(`Unsupported document colour scheme: ${colourScheme}`);
  }
  if (!documentDoctypes.includes(doctype as DocumentDoctype)) {
    throw new Error(`Unsupported document doctype: ${doctype}`);
  }

  return { ...document, theme, resolvedTheme, colourScheme, doctype: doctype as DocumentDoctype };
}

export function validateDocumentSource(source: string): ResolvedDocument {
  const document = resolveDocument(source);
  const lines = document.content.replace(/\r\n/g, "\n").split("\n");
  let index = 0;
  const diagramIds = new Set<string>();
  let hasDiagramReferences = false;
  let referenceFenceMarker: string | null = null;
  for (const line of lines) {
    const normalizedLine = stripFencePrefix(line);
    if (referenceFenceMarker) {
      if (isFenceClose(normalizedLine, referenceFenceMarker)) {
        referenceFenceMarker = null;
      }
      continue;
    }
    const fence = parseFenceOpen(normalizedLine);
    if (fence) {
      referenceFenceMarker = fence.marker;
      continue;
    }
    if (/^:::diagram\s+\{\s*id=/.test(normalizedLine)) {
      hasDiagramReferences = true;
      break;
    }
  }

  while (index < lines.length) {
    const line = stripFencePrefix(lines[index]);
    const fence = parseFenceOpen(line);
    if (!fence) {
      index += 1;
      continue;
    }

    const closeIndex = findFenceClose(lines, index + 1, fence.marker);
    if (closeIndex === -1) {
      throw new Error("Unclosed code block.");
    }

    if (fence.info === "diagram") {
      const diagramSource = lines
        .slice(index + 1, closeIndex)
        .map((candidate) => stripFencePrefix(candidate))
        .join("\n");
      parseDiagram(diagramSource, document.colourScheme);
      const id = diagramSource.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean);
      if (id) {
        if (diagramIds.has(id)) {
          throw new Error(`Duplicate diagram id: ${id}`);
        }
        diagramIds.add(id);
      } else if (hasDiagramReferences) {
        throw new Error("Every diagram requires an id when using diagram references.");
      }
    }
    index = closeIndex + 1;
  }

  return document;
}

export interface ExtractedDiagram {
  id: string | null;
  source: string;
}

export function getDiagramId(diagramSource: string): string | null {
  return diagramSource.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean) || null;
}

/**
 * Pulls every `diagram` fence body out of a Markdown document. Fence parsing is
 * shared with document validation so nested and block-quoted fences behave the
 * same way here as they do when the document renders.
 */
export function extractDiagramFences(source: string): ExtractedDiagram[] {
  const { content } = parseDocumentFrontmatter(source.replace(/\r\n/g, "\n"));
  const lines = content.split("\n");
  const diagrams: ExtractedDiagram[] = [];
  let index = 0;

  while (index < lines.length) {
    const fence = parseFenceOpen(stripFencePrefix(lines[index]));
    if (!fence) {
      index += 1;
      continue;
    }

    const closeIndex = findFenceClose(lines, index + 1, fence.marker);
    if (closeIndex === -1) {
      break;
    }
    if (fence.info === "diagram") {
      const diagramSource = lines
        .slice(index + 1, closeIndex)
        .map((line) => stripFencePrefix(line))
        .join("\n");
      diagrams.push({ id: getDiagramId(diagramSource), source: diagramSource });
    }
    index = closeIndex + 1;
  }

  return diagrams;
}

/** Rewrites a diagram's `id:` line, adding one when the diagram has no id yet. */
export function setDiagramId(diagramSource: string, id: string): string {
  return getDiagramId(diagramSource) === null
    ? `id: ${id}\n${diagramSource}`
    : diagramSource.replace(/^id:\s*(?:"[^"]+"|[^\s#]+)\s*$/m, () => `id: ${id}`);
}

export function setFrontmatterSetting(source: string, settingName: "theme" | "colourScheme" | "doctype", value: string): string {
  const normalized = source.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const openingIndex = lines.findIndex((line) => line.trim() !== "");
  const hasFrontmatter = openingIndex !== -1 && lines[openingIndex] === "---";
  const closingIndex = hasFrontmatter ? lines.indexOf("---", openingIndex + 1) : -1;

  if (!hasFrontmatter || closingIndex === -1) {
    return `---\n${settingName}: ${value}\n---\n${normalized}`;
  }

  let settingSet = false;
  const frontmatterLines = lines.slice(openingIndex + 1, closingIndex).map((line) => {
    if (!line.trim() || line.trimStart().startsWith("#")) {
      return line;
    }

    const propertyMatch = line.match(/^([^:]+):\s*(.*)$/);
    if (propertyMatch && propertyMatch[1] === settingName) {
      settingSet = true;
      return `${settingName}: ${value}`;
    }

    return line;
  });

  if (!settingSet) {
    frontmatterLines.push(`${settingName}: ${value}`);
  }

  return [
    ...lines.slice(0, openingIndex + 1),
    ...frontmatterLines,
    ...lines.slice(closingIndex)
  ].join("\n");
}

export function setFrontmatterTheme(source: string, themeName: string): string {
  return setFrontmatterSetting(source, "theme", themeName);
}

export function setFrontmatterColourScheme(source: string, colourScheme: string): string {
  return setFrontmatterSetting(source, "colourScheme", colourScheme);
}

export function setFrontmatterDoctype(source: string, doctype: string): string {
  return setFrontmatterSetting(source, "doctype", doctype);
}

export function findSourceTextRange(source: string, text: string): { start: number; end: number } | null {
  const selectedText = text.trim();
  const start = selectedText ? source.indexOf(selectedText) : -1;

  return start === -1 ? null : { start, end: start + selectedText.length };
}

export function scrollSourceEditorToRange(editor: HTMLTextAreaElement, range: { start: number }): void {
  const lineHeight = Number.parseFloat(globalThis.getComputedStyle(editor).lineHeight) || 20;
  const lineIndex = editor.value.slice(0, range.start).split("\n").length - 1;
  const visibleLineCount = Math.max(1, Math.floor(editor.clientHeight / lineHeight));

  editor.scrollTop = Math.max(0, (lineIndex - Math.floor(visibleLineCount / 2)) * lineHeight);
}
