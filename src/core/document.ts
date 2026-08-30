import { colourSchemes, themes, type ColourSchemeName, type Theme } from "./diagrams/schema";
import { applyBalancedFlowchartLayout, type BalancedLayoutResult } from "./diagrams/balanced-layout";
import { parseDiagram, parseScalar } from "./diagrams/parser";
import { layoutFilledDiagram } from "./diagrams/layout";
import { applyOneShotRelayout, relayoutApplied } from "./diagrams/relayout";
import { serializeDiagram } from "./diagrams/serializer";
import type { RelayoutMode } from "./diagrams/schema";
import { resolveTheme } from "./diagrams/styles";
import { findFenceClose, isFenceClose, parseFenceOpen, stripFencePrefix } from "./fences";

export const documentDoctypes = ["document", "diagram"] as const;

export type DocumentDoctype = (typeof documentDoctypes)[number];

export interface ResolvedDocument {
  content: string;
  frontmatter: Record<string, unknown>;
  theme: Theme;
  resolvedTheme: Exclude<Theme, "auto">;
  colourScheme: ColourSchemeName;
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
  const theme = String(document.frontmatter.theme ?? "auto");
  const colourScheme = String(document.frontmatter.colourScheme ?? "classic");
  const doctype = String(document.frontmatter.doctype ?? "document");

  if (!themes.includes(theme as Theme)) {
    throw new Error(`Unsupported document theme: ${theme}`);
  }
  const validatedTheme = theme as Theme;
  const resolvedTheme = resolveTheme(validatedTheme);
  if (!Object.prototype.hasOwnProperty.call(colourSchemes, colourScheme)) {
    throw new Error(`Unsupported document colour scheme: ${colourScheme}`);
  }
  const validatedColourScheme = colourScheme as ColourSchemeName;
  if (!documentDoctypes.includes(doctype as DocumentDoctype)) {
    throw new Error(`Unsupported document doctype: ${doctype}`);
  }

  return { ...document, theme: validatedTheme, resolvedTheme, colourScheme: validatedColourScheme, doctype: doctype as DocumentDoctype };
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

export interface SourcePosition {
  /** One-based line and column, plus the zero-based UTF-16 offset used by text editors. */
  line: number;
  column: number;
  offset: number;
}

export interface SourceRange {
  /** Start-inclusive, end-exclusive source range. */
  start: SourcePosition;
  end: SourcePosition;
}

export interface ExtractedDiagram {
  id: string | null;
  source: string;
  index: number;
  fenceRange: SourceRange;
  bodyRange: SourceRange;
  lineRanges: SourceRange[];
}

export function getDiagramId(diagramSource: string): string | null {
  const scalar = diagramSource.match(/^id:\s*(.*?)\s*$/m)?.[1];
  if (scalar === undefined) {
    return null;
  }
  try {
    const id = parseScalar(scalar);
    return typeof id === "string" ? id : null;
  } catch {
    return null;
  }
}

/**
 * Pulls every `diagram` fence body out of a Markdown document. Fence parsing is
 * shared with document validation so nested and block-quoted fences behave the
 * same way here as they do when the document renders.
 */
export function extractDiagramFences(source: string): ExtractedDiagram[] {
  const rawLines = source.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g)?.filter((line, index, lines) =>
    line.length > 0 || index < lines.length - 1
  ) || [];
  const lines = rawLines.map((line) => line.replace(/\r\n$|[\r\n]$/, ""));
  const lineStarts: number[] = [];
  let offset = 0;
  for (const rawLine of rawLines) {
    lineStarts.push(offset);
    offset += rawLine.length;
  }
  const position = (lineIndex: number, columnOffset: number): SourcePosition => ({
    line: lineIndex + 1,
    column: columnOffset + 1,
    offset: (lineStarts[lineIndex] ?? source.length) + columnOffset
  });
  const lineRange = (lineIndex: number): SourceRange => {
    const text = lines[lineIndex] || "";
    const stripped = stripFencePrefix(text);
    const prefixLength = text.length - stripped.length;
    return {
      start: position(lineIndex, prefixLength),
      end: position(lineIndex, text.length)
    };
  };

  let contentStart = 0;
  const firstContentLine = lines.findIndex((line) => line.trim() !== "");
  if (firstContentLine !== -1 && lines[firstContentLine] === "---") {
    const frontmatterEnd = lines.indexOf("---", firstContentLine + 1);
    if (frontmatterEnd !== -1) {
      contentStart = frontmatterEnd + 1;
    }
  }

  const diagrams: ExtractedDiagram[] = [];
  let lineIndex = contentStart;
  while (lineIndex < lines.length) {
    const fence = parseFenceOpen(stripFencePrefix(lines[lineIndex]));
    if (!fence) {
      lineIndex += 1;
      continue;
    }

    const closeIndex = findFenceClose(lines, lineIndex + 1, fence.marker);
    if (closeIndex === -1) {
      break;
    }
    if (fence.info === "diagram") {
      const bodyLineRanges = lines.slice(lineIndex + 1, closeIndex)
        .map((_line, bodyIndex) => lineRange(lineIndex + 1 + bodyIndex));
      const diagramSource = lines.slice(lineIndex + 1, closeIndex)
        .map((line) => stripFencePrefix(line))
        .join("\n");
      const openingRange = lineRange(lineIndex);
      const closingRange = lineRange(closeIndex);
      diagrams.push({
        id: getDiagramId(diagramSource),
        source: diagramSource,
        index: diagrams.length,
        fenceRange: { start: openingRange.start, end: closingRange.end },
        bodyRange: bodyLineRanges.length
          ? { start: bodyLineRanges[0].start, end: bodyLineRanges[bodyLineRanges.length - 1].end }
          : { start: openingRange.end, end: closingRange.start },
        lineRanges: bodyLineRanges
      });
    }
    lineIndex = closeIndex + 1;
  }

  return diagrams;
}

/**
 * A short stable digest of a document's source, used to mark which source a lint report describes.
 * It only has to detect change, not resist tampering, so this is FNV-1a rather than a real hash: no
 * dependency, no async crypto API, and the same answer in a browser and in Node.
 */
export function hashSource(source: string): string {
  let hash = 0x811c9dc5;
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

export interface BakedFence {
  /** Index of the first body line, and of the line after the last, in the document's own lines. */
  start: number;
  end: number;
  lines: string[];
}

export interface BakeResult {
  source: string;
  baked: number;
  preserved: number;
  fences: BakedFence[];
}

/**
 * Writes the layout engine's work back into the document's own source. Only a fence the engine
 * actually filled something in for is touched: declaring a `layout` is what makes a diagram
 * machine-managed and so licences rewriting it into canonical form, but a diagram that is already
 * complete has nothing to write, and one with no `layout` at all is hand-managed. Both are copied
 * through untouched - comments, field order, and spacing intact.
 *
 * Nothing else is rewritten either, which is why this splices new fence bodies into the document's
 * own lines rather than rebuilding the text: prose, frontmatter, and line endings come through
 * exactly as they went in, and a document with nothing to bake comes back byte for byte identical.
 * The line ranges travel with the result so a caller holding a differently encoded copy of the same
 * document - the HTML-escaped body of a `template`, say - can splice the same fences into that
 * without having to re-encode the parts it is not changing.
 *
 * Every fence is still parsed, so an invalid diagram fails the bake rather than being quietly
 * skipped, and baking is idempotent: the second run reparses what the first one wrote and produces
 * the same text.
 */
export function bakeDocumentSource(source: string): BakeResult {
  const lines = source.split("\n");
  // A line keeps its own ending because it is never rewritten; a line this makes up takes the
  // document's, so a CRLF document does not come back with LF spliced through it. "The document's"
  // is the majority, not merely the presence of one: a stray carriage return in an otherwise LF
  // document should not turn a whole fence into CRLF, which is the same defect the other way round.
  const plain = lines.map((line) => line.endsWith("\r") ? line.slice(0, -1) : line);
  const carriageReturns = lines.filter((line) => line.endsWith("\r")).length;
  const lineEnd = carriageReturns * 2 > lines.length - 1 ? "\r" : "";

  const normalized = source.replace(/\r\n/g, "\n");
  const { content, frontmatter } = parseDocumentFrontmatter(normalized);
  const colourScheme = String(frontmatter.colourScheme || "classic");
  const fences: BakedFence[] = [];
  let index = normalized.split("\n").length - content.split("\n").length;
  let baked = 0;
  let preserved = 0;

  while (index < lines.length) {
    const fence = parseFenceOpen(stripFencePrefix(plain[index]));
    if (!fence) {
      index += 1;
      continue;
    }

    // An unclosed fence runs to the end of the document, so there is nothing further to find.
    const closeIndex = findFenceClose(plain, index + 1, fence.marker);
    if (closeIndex === -1) {
      break;
    }

    if (fence.info === "diagram") {
      const body = plain.slice(index + 1, closeIndex).map((line) => stripFencePrefix(line)).join("\n");
      const diagram = parseDiagram(body, colourScheme);
      // Only a diagram the engine filled or explicitly relaid is rewritten. A complete `layout`
      // diagram without the one-shot modifier is preserved byte for byte.
      if (diagram.type === "flowchart" && (layoutFilledDiagram(diagram) || relayoutApplied(diagram))) {
        // A block-quoted fence keeps its quoting, taken from the line that opened it.
        const opener = plain[index];
        const quote = opener.slice(0, opener.length - stripFencePrefix(opener).length);
        fences.push({
          start: index + 1,
          end: closeIndex,
          lines: serializeDiagram(diagram).split("\n").map((line) => `${quote}${line}${lineEnd}`)
        });
        baked += 1;
      } else {
        preserved += 1;
      }
    }

    index = closeIndex + 1;
  }

  return { source: spliceBakedFences(lines, fences).join("\n"), baked, preserved, fences };
}

/** Replaces each baked fence body in a document's lines, working back so earlier indices hold. */
export function spliceBakedFences(lines: string[], fences: BakedFence[]): string[] {
  const output = [...lines];
  for (const fence of [...fences].reverse()) {
    output.splice(fence.start, fence.end - fence.start, ...fence.lines);
  }
  return output;
}

export interface BalanceDocumentResult {
  source: string;
  changed: boolean;
  layout: BalancedLayoutResult | null;
}

export interface BalanceDocumentFlowsResult {
  source: string;
  changed: boolean;
  layouts: BalancedLayoutResult[];
}

/** Applies the wrapped-layout fix to every eligible linear flow in a document. */
export function balanceDocumentLinearFlows(source: string): BalanceDocumentFlowsResult {
  const resolved = validateDocumentSource(source);
  const extractedDiagrams = extractDiagramFences(source).reverse();
  const layouts: BalancedLayoutResult[] = [];
  let balancedSource = source;
  for (const extracted of extractedDiagrams) {
    const result = balanceExtractedDiagram(balancedSource, extracted, resolved.colourScheme);
    if (result.changed && result.layout) {
      balancedSource = result.source;
      layouts.unshift(result.layout);
    }
  }
  return { source: balancedSource, changed: layouts.length > 0, layouts };
}

function balanceExtractedDiagram(
  source: string,
  extracted: ExtractedDiagram,
  colourScheme: ColourSchemeName
): BalanceDocumentResult {
  const diagram = parseDiagram(extracted.source, colourScheme);
  if (diagram.type !== "flowchart") {
    return { source, changed: false, layout: null };
  }
  const layout = applyBalancedFlowchartLayout(diagram);
  if (!layout) {
    return { source, changed: false, layout: null };
  }

  const lines = source.split("\n");
  const openerIndex = extracted.fenceRange.start.line - 1;
  const closeIndex = extracted.fenceRange.end.line - 1;
  const opener = lines[openerIndex].endsWith("\r") ? lines[openerIndex].slice(0, -1) : lines[openerIndex];
  const quote = opener.slice(0, opener.length - stripFencePrefix(opener).length);
  const carriageReturns = lines.filter((line) => line.endsWith("\r")).length;
  const lineEnd = carriageReturns * 2 > lines.length - 1 ? "\r" : "";
  const replacement = serializeDiagram(diagram).split("\n").map((line) => `${quote}${line}${lineEnd}`);
  lines.splice(openerIndex + 1, closeIndex - openerIndex - 1, ...replacement);
  return { source: lines.join("\n"), changed: true, layout };
}

/** Applies the explicit wrapped-layout fix to one lint-addressed diagram fence. */
export function balanceDocumentDiagram(source: string, diagramIndex: number): BalanceDocumentResult {
  const resolved = validateDocumentSource(source);
  const extracted = extractDiagramFences(source).find((diagram) => diagram.index === diagramIndex);
  if (!extracted) {
    throw new Error(`Diagram ${diagramIndex + 1} does not exist.`);
  }
  return balanceExtractedDiagram(source, extracted, resolved.colourScheme);
}

export interface RelayoutDocumentResult {
  source: string;
  changed: boolean;
}

/** Applies the same destructive relayout exposed by the source-only one-shot modifier. */
export function relayoutDocumentDiagram(
  source: string,
  diagramIndex: number,
  mode: RelayoutMode = "all"
): RelayoutDocumentResult {
  const resolved = validateDocumentSource(source);
  const extracted = extractDiagramFences(source).find((diagram) => diagram.index === diagramIndex);
  if (!extracted) {
    throw new Error(`Diagram ${diagramIndex + 1} does not exist.`);
  }
  const diagram = parseDiagram(extracted.source, resolved.colourScheme);
  if (diagram.type !== "flowchart") {
    return { source, changed: false };
  }
  applyOneShotRelayout(diagram, mode);

  const lines = source.split("\n");
  const openerIndex = extracted.fenceRange.start.line - 1;
  const closeIndex = extracted.fenceRange.end.line - 1;
  const opener = lines[openerIndex].endsWith("\r") ? lines[openerIndex].slice(0, -1) : lines[openerIndex];
  const quote = opener.slice(0, opener.length - stripFencePrefix(opener).length);
  const carriageReturns = lines.filter((line) => line.endsWith("\r")).length;
  const lineEnd = carriageReturns * 2 > lines.length - 1 ? "\r" : "";
  const replacement = serializeDiagram(diagram).split("\n").map((line) => `${quote}${line}${lineEnd}`);
  lines.splice(openerIndex + 1, closeIndex - openerIndex - 1, ...replacement);
  return { source: lines.join("\n"), changed: true };
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
