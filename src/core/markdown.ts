import {
  calloutKinds,
  paletteRoles,
  gridColumns,
  type ColourSchemeName,
  type PaletteRole,
  type Theme
} from "./diagrams/schema";
import { escapeHtml, parseScalar } from "./diagrams/parser";
import { getNodeColorPalette, mergeStyle } from "./diagrams/styles";
import { findFenceClose, isFenceClose, parseFenceOpen } from "./fences";
import { highlightCode } from "./highlight";

type DirectiveName = "section" | "panel" | "callout" | "grid" | "stack" | "diagram" | "toc";

type DirectiveOpen = {
  name: DirectiveName;
  attributes: Record<string, string>;
};

// Arity is a property of the directive name, so the parser never needs lookahead to know whether a
// `:::` further down belongs to this directive. Void directives hold no content and take no closer.
const directiveDefinitions: Record<DirectiveName, { attributes: string[]; void?: boolean }> = {
  section: { attributes: ["title", "palette", "fill", "stroke", "text"] },
  panel: { attributes: ["title", "palette", "fill", "stroke", "text"] },
  callout: { attributes: ["kind", "title", "palette", "fill", "stroke", "text"] },
  grid: { attributes: ["columns"] },
  stack: { attributes: [] },
  diagram: { attributes: ["id"], void: true },
  toc: { attributes: ["depth", "diagrams"], void: true }
};

const directiveNames = Object.keys(directiveDefinitions) as DirectiveName[];

function isVoidDirective(name: DirectiveName): boolean {
  return Boolean(directiveDefinitions[name].void);
}

type DiagramDefinition = {
  source: string;
  id: string;
};

type DiagramReferenceRegistry = {
  definitions: Map<string, DiagramDefinition>;
  duplicateDefinitionIds: Set<string>;
  referenceCounts: Map<string, number>;
  diagramIds: Set<string>;
};

/** A rendered figure, recorded in render order so numbering and the contents agree. */
type FigureEntry = {
  id: string | null;
  number: number | null;
  text: string;
};

/** A heading or captioned figure, collected in render order for `:::toc`. */
type ContentsEntry = {
  kind: "heading" | "figure";
  level: number;
  id: string;
  text: string;
};

type MarkdownRenderState = {
  diagramIndex: number;
  headingOccurrences?: Map<string, number>;
  usedHeadingIds?: Set<string>;
  figureNumber?: number;
  figures?: Map<string, FigureEntry>;
  contents?: ContentsEntry[];
};

// Deferred substitutions. A cross-reference or a contents listing can point forwards, so both are
// emitted as a placeholder during the render pass and resolved once every figure and heading is
// known. Resolving from what the render actually produced is what keeps numbering, anchors and the
// contents in agreement, rather than a second pass that has to reproduce the same id arithmetic.
const referencePlaceholderPattern = /\u0001ref:([^\u0001]*)\u0001/g;
const contentsPlaceholderPattern = /\u0001toc:([^\u0001]*)\u0001/g;

/** Splits a caption into its parts around the figure-number placeholder, honouring `\#`. */
function parseCaption(caption: string): { hasPlaceholder: boolean; before: string; after: string; text: string } {
  const unescaped = caption.replace(/\\#/g, "\u0002");
  const placeholder = unescaped.indexOf("#");
  const restore = (value: string) => value.replace(/\u0002/g, "#");

  if (placeholder === -1) {
    return { hasPlaceholder: false, before: restore(unescaped), after: "", text: restore(unescaped) };
  }

  return {
    hasPlaceholder: true,
    before: restore(unescaped.slice(0, placeholder)),
    after: restore(unescaped.slice(placeholder + 1)),
    text: restore(unescaped.slice(0, placeholder) + unescaped.slice(placeholder + 1))
  };
}

function createHeadingSlug(value: string): string {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/(\*\*|__|~~|\*|_)/g, "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-") || "section";
}

function getHeadingId(source: string, state: MarkdownRenderState): string {
  const base = createHeadingSlug(source);
  const occurrences = state.headingOccurrences || (state.headingOccurrences = new Map());
  const usedIds = state.usedHeadingIds || (state.usedHeadingIds = new Set());
  let occurrence = (occurrences.get(base) || 0) + 1;
  let id = occurrence === 1 ? base : `${base}-${occurrence}`;

  while (usedIds.has(id)) {
    occurrence += 1;
    id = `${base}-${occurrence}`;
  }

  occurrences.set(base, occurrence);
  usedIds.add(id);
  return id;
}

function splitTableRow(line: string): string[] {
  const cells: string[] = [];
  let cell = "";
  let escaped = false;
  const source = line.trim().replace(/^\||\|$/g, "");

  for (const character of source) {
    if (escaped) {
      cell += character;
      escaped = false;
    } else if (character === "\\") {
      escaped = true;
    } else if (character === "|") {
      cells.push(cell.trim());
      cell = "";
    } else {
      cell += character;
    }
  }
  cells.push(cell.trim());
  return cells;
}

function parseTableAlignment(line: string): string[] | null {
  const cells = splitTableRow(line);
  if (!cells.length || !cells.every((cell) => /^:?-{3,}:?$/.test(cell))) {
    return null;
  }
  return cells.map((cell) => cell.startsWith(":") && cell.endsWith(":")
    ? "center"
    : cell.startsWith(":") ? "left" : cell.endsWith(":") ? "right" : "");
}

function getListMatch(line: string): RegExpMatchArray | null {
  return line.match(/^(\s*)([-+*]|\d+[.)])\s+(.+)$/);
}

function parseDirectiveOpen(line: string): DirectiveOpen | null {
  const match = line.match(new RegExp(`^:::(${directiveNames.join("|")})(?:\\s+\\{(.*)\\})?\\s*$`));
  if (!match) {
    return null;
  }

  const attributes: Record<string, string> = {};
  const source = match[2];
  if (source !== undefined) {
    let index = 0;
    const attributePattern = /\s*([a-z][\w-]*)=(?:"([^"]*)"|([^\s}]+))/gi;
    let attributeMatch: RegExpExecArray | null;
    while ((attributeMatch = attributePattern.exec(source))) {
      if (attributeMatch.index !== index || attributes[attributeMatch[1]] !== undefined) {
        return null;
      }
      attributes[attributeMatch[1]] = attributeMatch[2] ?? attributeMatch[3];
      index = attributePattern.lastIndex;
    }
    if (source.slice(index).trim()) {
      return null;
    }
  }

  return { name: match[1] as DirectiveName, attributes };
}

function parseDiagramReference(line: string): { id: string } | null {
  const directive = parseDirectiveOpen(line);
  if (!directive || directive.name !== "diagram") {
    return null;
  }
  const keys = Object.keys(directive.attributes);
  const id = directive.attributes.id;
  return keys.length === 1 && id ? { id } : null;
}

function getDiagramId(source: string): string | null {
  const match = source.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m);
  return match?.[1] ?? match?.[2] ?? null;
}

function getDiagramCaption(source: string): string | null {
  const match = source.match(/^caption:[ \t]*(\S.*?)\s*$/m);
  // Quoting and escaping follow the diagram parser's own scalar rules, so a caption reads the same
  // way here as it does when the diagram is parsed.
  const caption = match ? parseScalar(match[1]) : null;
  return typeof caption === "string" && caption ? caption : null;
}

function stripBlockQuotePrefix(line: string): string {
  return line.replace(/^(?: {0,3}> ?)+/, "");
}

function isDirectiveClose(line: string): boolean {
  return /^:::(?:\s+.*)?$/.test(line);
}

function findDirectiveClose(lines: string[], start: number, end: number): number {
  let depth = 1;
  let fenceMarker: string | null = null;
  for (let index = start + 1; index < end; index += 1) {
    const line = lines[index];
    if (fenceMarker) {
      if (isFenceClose(line, fenceMarker)) {
        fenceMarker = null;
      }
      continue;
    }
    const fence = parseFenceOpen(line);
    if (fence) {
      fenceMarker = fence.marker;
      continue;
    }
    const directive = parseDirectiveOpen(line);
    if (directive) {
      if (!isVoidDirective(directive.name)) {
        depth += 1;
      }
    } else if (isDirectiveClose(line)) {
      depth -= 1;
      if (!depth) {
        return index;
      }
    }
  }
  return -1;
}

function isComponentColour(value: string): boolean {
  return /^#[\da-f]{3,8}$/i.test(value);
}

function getComponentStyle(
  attributes: Record<string, string>,
  documentColorScheme: ColourSchemeName = "classic",
  documentTheme: Theme = "light"
): string | null {
  const hasPalette = attributes.palette !== undefined;
  if (hasPalette && !paletteRoles.includes(attributes.palette as (typeof paletteRoles)[number])) {
    return null;
  }

  for (const key of ["fill", "stroke", "text"] as const) {
    if (attributes[key] !== undefined && !isComponentColour(attributes[key])) {
      return null;
    }
  }

  const palette = hasPalette
    ? getNodeColorPalette(documentColorScheme, documentTheme, attributes.palette as PaletteRole)
    : null;
  const overrides = Object.fromEntries(
    ["fill", "stroke", "text"]
      .filter((key) => attributes[key] !== undefined)
      .map((key) => [key, attributes[key]])
  );
  const style = mergeStyle(palette || {}, overrides);
  return Object.entries(style)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `--docdiagram-component-${key}:${value}`)
    .join(";");
}

export function isSafeUrl(value: string, allowDataImage = false): boolean {
  const normalized = String(value).trim();
  if (normalized.startsWith("//") || normalized.startsWith("\\")) {
    return false;
  }

  if (!normalized || normalized.startsWith("#") ||
    normalized.startsWith("/") ||
    normalized.startsWith("./") || normalized.startsWith("../") || normalized.startsWith("?")) {
    return true;
  }

  if (allowDataImage && /^data:image\/(?:gif|jpeg|png|webp);base64,/i.test(normalized)) {
    return true;
  }

  const scheme = normalized.match(/^([a-z][a-z\d+.-]*):/i);
  return !scheme || ["http", "https", "mailto"].includes(scheme[1].toLowerCase());
}

export function renderInline(source: string): string {
  const codeTokens: string[] = [];
  let value = String(source).replace(/`([^`]+)`/g, (_, code: string) => {
    const token = `\u0000${codeTokens.length}\u0000`;
    codeTokens.push(`<code>${escapeHtml(code)}</code>`);
    return token;
  });

  // A cross-reference can point at a figure that has not been rendered yet, so it becomes a
  // placeholder here and is resolved once the whole document has been traversed.
  value = value.replace(/\{ref=(?:"([^"}]+)"|([^\s}]+))\}/g, (_, quoted: string, bare: string) =>
    `\u0001ref:${quoted ?? bare}\u0001`);

  value = escapeHtml(value);
  value = value.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_, alt: string, url: string) => {
    const decodedUrl = url.replace(/&amp;/g, "&");
    return isSafeUrl(decodedUrl, true)
      ? `<img src="${escapeHtml(decodedUrl)}" alt="${alt}">`
      : `![${alt}](${escapeHtml(url)})`;
  });
  value = value.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;[^&]*&quot;)?\)/g, (_, label: string, url: string) => {
    const decodedUrl = url.replace(/&amp;/g, "&");
    return isSafeUrl(decodedUrl)
      ? `<a href="${escapeHtml(decodedUrl)}">${label}</a>`
      : `[${label}](${escapeHtml(url)})`;
  });
  value = value
    .replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g, "<strong>$2</strong>")
    .replace(/~~(?=\S)([\s\S]*?\S)~~/g, "<del>$1</del>")
    .replace(/(?<!\*)\*(?=\S)([\s\S]*?\S)\*(?!\*)/g, "<em>$1</em>")
    .replace(/(?<!_)_(?=\S)([\s\S]*?\S)_(?!_)/g, "<em>$1</em>");

  return value.replace(/\u0000(\d+)\u0000/g, (_, index: string) => codeTokens[Number(index)]);
}

export function renderMarkdown(
  source: string,
  state: MarkdownRenderState = { diagramIndex: 0 },
  options?: {
    renderDiagram?: (source: string, index: number, figure?: { id: string | null; caption: string | null }) => string;
    documentColorScheme?: ColourSchemeName;
    documentTheme?: Theme;
    diagramReferenceRegistry?: DiagramReferenceRegistry;
  }
): string {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const renderDiagram = options?.renderDiagram ?? ((_: string, __: number) => {
    throw new Error("renderDiagram callback is required for diagram blocks.");
  });
  const isNestedRender = Boolean(options?.diagramReferenceRegistry);
  const documentColorScheme = options?.documentColorScheme || "classic";
  const documentTheme = options?.documentTheme || "light";
  const registry = options?.diagramReferenceRegistry || (() => {
    const definitions = new Map<string, DiagramDefinition>();
    const duplicateDefinitionIds = new Set<string>();
    const referenceCounts = new Map<string, number>();
    const diagramIds = new Set<string>();
    const normalizedLines = lines.map(stripBlockQuotePrefix);

    for (let index = 0; index < normalizedLines.length; index += 1) {
      const fence = parseFenceOpen(normalizedLines[index]);
      if (!fence) {
        continue;
      }
      const closeIndex = findFenceClose(normalizedLines, index + 1, fence.marker);
      if (closeIndex === -1) {
        break;
      }
      if (fence.info === "diagram") {
        const definitionSource = normalizedLines.slice(index + 1, closeIndex).join("\n");
        const id = getDiagramId(definitionSource);
        if (id) {
          diagramIds.add(id);
          if (definitions.has(id)) {
            duplicateDefinitionIds.add(id);
          } else {
            definitions.set(id, { id, source: definitionSource });
          }
        }
      }
      // Skip the whole block so a fence nested inside a longer one stays inert.
      index = closeIndex;
    }

    let fenceMarker: string | null = null;
    for (const line of normalizedLines) {
      if (fenceMarker) {
        if (isFenceClose(line, fenceMarker)) {
          fenceMarker = null;
        }
        continue;
      }
      const fence = parseFenceOpen(line);
      if (fence) {
        fenceMarker = fence.marker;
        continue;
      }
      const reference = parseDiagramReference(line);
      if (reference) {
        referenceCounts.set(reference.id, (referenceCounts.get(reference.id) || 0) + 1);
      }
    }
    return { definitions, duplicateDefinitionIds, referenceCounts, diagramIds };
  })();
  const { definitions: diagramDefinitions, duplicateDefinitionIds, referenceCounts } = registry;

  state.figures ||= new Map<string, FigureEntry>();
  state.contents ||= [];
  // A diagram id is declared by the author and is load-bearing for `{ref=}` and `:::diagram`,
  // whereas a heading slug is derived, so diagram ids are claimed first and a colliding heading
  // takes the numeric suffix getHeadingId already applies to a repeated heading.
  if (!isNestedRender) {
    const usedIds = state.usedHeadingIds || (state.usedHeadingIds = new Set());
    for (const id of registry.diagramIds) {
      usedIds.add(id);
    }
  }

  function renderFigure(definitionSource: string): string {
    const id = getDiagramId(definitionSource);
    const caption = getDiagramCaption(definitionSource);
    const parsed = caption ? parseCaption(caption) : null;
    // Only a caption asking for a number consumes one, which keeps numbering contiguous when a
    // titled but unnumbered figure sits between two numbered ones.
    const number = parsed?.hasPlaceholder
      ? (state.figureNumber = (state.figureNumber || 0) + 1)
      : null;
    const text = parsed
      ? (number === null ? parsed.text : `${parsed.before}${number}${parsed.after}`)
      : null;

    if (parsed && id) {
      state.figures!.set(id, { id, number, text: text as string });
      state.contents!.push({ kind: "figure", level: 0, id, text: renderInline(text as string) });
    }

    const markup = renderDiagram(definitionSource, state.diagramIndex, { id, caption: text });
    state.diagramIndex += 1;
    return markup;
  }

  function isBlockStart(index: number): boolean {
    const line = lines[index] || "";
    return !line.trim() || /^```/.test(line) || /^(#{1,6})\s+/.test(line) ||
      /^ {0,3}&gt;|^ {0,3}>/.test(line) || /^ {0,3}(?:[-*_]\s*){3,}$/.test(line) ||
      /^:::/.test(line) || Boolean(getListMatch(line)) ||
      (index + 1 < lines.length && Boolean(parseTableAlignment(lines[index + 1])));
  }

  function renderList(start: number, baseIndent: number): { html: string; index: number } {
    const first = getListMatch(lines[start]) as RegExpMatchArray;
    const ordered = /^\d/.test(first[2]);
    const items: Array<{ content: string[]; children: string[] }> = [];
    let index = start;
    const startValue = ordered ? Number.parseInt(first[2], 10) : null;

    while (index < lines.length) {
      const match = getListMatch(lines[index]);
      if (!match || match[1].length !== baseIndent || /^\d/.test(match[2]) !== ordered) {
        break;
      }

      const item = { content: [match[3]], children: [] as string[] };
      index += 1;
      while (index < lines.length) {
        const nested = getListMatch(lines[index]);
        if (nested && nested[1].length > baseIndent) {
          const rendered = renderList(index, nested[1].length);
          item.children.push(rendered.html);
          index = rendered.index;
          continue;
        }
        if (!lines[index].trim()) {
          index += 1;
          const nextMatch = index < lines.length ? getListMatch(lines[index]) : null;
          if (index >= lines.length || !nextMatch || nextMatch[1].length <= baseIndent) {
            break;
          }
          continue;
        }
        if (/^\s+/.test(lines[index]) && !getListMatch(lines[index])) {
          item.content.push(lines[index].trim());
          index += 1;
          continue;
        }
        break;
      }
      items.push(item);
    }

    const tag = ordered ? "ol" : "ul";
    const attributes = ordered && startValue !== 1 ? ` start="${startValue}"` : "";
    const markup = items.map((item) => {
      const task = !ordered && item.content.length === 1 && item.content[0].match(/^\[([ xX])\]\s+(.*)$/);
      const content = task
        ? `<input type="checkbox" disabled${task[1].toLowerCase() === "x" ? " checked" : ""}> ${renderInline(task[2])}`
        : renderInline(item.content.join(" "));
      return `<li${task ? ' class="docdiagram-task-list-item"' : ""}>${content}${item.children.join("")}</li>`;
    }).join("");
    return { html: `<${tag}${attributes}>${markup}</${tag}>`, index };
  }

  /** Renders a directive that holds no content. Returns null when the directive is not valid. */
  function renderVoidDirective(directive: DirectiveOpen): string | null {
    const { name, attributes } = directive;
    if (Object.keys(attributes).some((key) => !directiveDefinitions[name].attributes.includes(key))) {
      return null;
    }

    if (name === "diagram") {
      const id = attributes.id;
      if (!id) {
        return null;
      }
      const definition = diagramDefinitions.get(id);
      if (!definition) {
        return `<section class="docdiagram-error"><strong>Diagram "${escapeHtml(id)}" could not be found.</strong></section>`;
      }
      if (duplicateDefinitionIds.has(id)) {
        return `<section class="docdiagram-error"><strong>Diagram "${escapeHtml(id)}" has multiple definitions.</strong></section>`;
      }
      if ((referenceCounts.get(id) || 0) > 1) {
        return `<section class="docdiagram-error"><strong>Diagram "${escapeHtml(id)}" is referenced more than once.</strong></section>`;
      }
      return renderFigure(definition.source);
    }

    const depth = attributes.depth === undefined ? 3 : Number(attributes.depth);
    if (!Number.isInteger(depth) || depth < 1 || depth > 6) {
      return null;
    }
    if (attributes.diagrams !== undefined && attributes.diagrams !== "true" && attributes.diagrams !== "false") {
      return null;
    }
    // The contents can only be built once every heading and figure is known, so the render pass
    // leaves a placeholder behind and the finished document is filled in afterwards.
    return `\u0001toc:${depth}:${attributes.diagrams === "true"}\u0001`;
  }

  function renderDirective(start: number, end: number): { html: string; next: number } | null {
    const directive = parseDirectiveOpen(lines[start]);
    if (!directive || isVoidDirective(directive.name)) {
      return null;
    }
    const close = findDirectiveClose(lines, start, end);
    if (close === -1) {
      return null;
    }

    const { name, attributes } = directive;
    if (Object.keys(attributes).some((key) => !directiveDefinitions[name].attributes.includes(key))) {
      return null;
    }

    if (name === "grid") {
      const columns = gridColumns[attributes.columns];
      if (!columns) {
        return null;
      }

      const items: string[] = [];
      let index = start + 1;
      while (index < close) {
        if (!lines[index].trim()) {
          index += 1;
          continue;
        }
        const child = parseDirectiveOpen(lines[index]);
        if (!child || !["panel", "callout", "stack"].includes(child.name)) {
          return null;
        }
        const rendered = renderDirective(index, close);
        if (!rendered) {
          return null;
        }
        items.push(`<div class="docdiagram-grid-item">${rendered.html}</div>`);
        index = rendered.next;
      }
      return {
        html: `<div class="docdiagram-grid" style="--docdiagram-grid-columns:${columns}">${items.join("")}</div>`,
        next: close + 1
      };
    }

    if (name === "stack") {
      if (Object.keys(attributes).length) {
        return null;
      }
      return {
        html: `<div class="docdiagram-stack">${renderBlocks(start + 1, close)}</div>`,
        next: close + 1
      };
    }

    const style = getComponentStyle(attributes, documentColorScheme, documentTheme);
    if (style === null || (name === "callout" && attributes.kind !== undefined && !calloutKinds.includes(attributes.kind as (typeof calloutKinds)[number]))) {
      return null;
    }

    const title = attributes.title ? `<div class="docdiagram-component-title">${renderInline(attributes.title)}</div>` : "";
    const body = renderBlocks(start + 1, close);
    const componentClass = `docdiagram-component${name === "callout" ? "" : ` docdiagram-${name}`}${style ? " docdiagram-component-styled" : ""}`;
    if (name === "callout") {
      const kind = attributes.kind || "info";
      return {
        html: `<aside class="${componentClass} docdiagram-callout docdiagram-callout-${kind}"${style ? ` style="${style}"` : ""} aria-label="${escapeHtml(attributes.title || kind)} callout"><div class="docdiagram-callout-kind">${escapeHtml(kind)}</div>${title}${body}</aside>`,
        next: close + 1
      };
    }

    return {
      html: `<section class="${componentClass}"${style ? ` style="${style}"` : ""}>${title}${body}</section>`,
      next: close + 1
    };
  }

  function renderBlocks(start = 0, end = lines.length): string {
    const output: string[] = [];
    let index = start;
    while (index < end) {
      const line = lines[index];
      if (!line.trim()) {
        index += 1;
        continue;
      }

      if (/^:::/.test(line)) {
        const directive = parseDirectiveOpen(line);
        if (directive && isVoidDirective(directive.name)) {
          const rendered = renderVoidDirective(directive);
          output.push(rendered ?? `<pre class="docdiagram-literal-source"><code>${escapeHtml(line)}</code></pre>`);
          index += 1;
          // A void directive needs no closer, but one written out of habit is swallowed rather than
          // left on the page as a stray `:::`.
          if (rendered !== null && index < end && isDirectiveClose(lines[index])) {
            index += 1;
          }
          continue;
        }
        const rendered = renderDirective(index, end);
        if (rendered) {
          output.push(rendered.html);
          index = rendered.next;
        } else {
          output.push(`<pre class="docdiagram-literal-source"><code>${escapeHtml(line)}</code></pre>`);
          index += 1;
        }
        continue;
      }

      const fence = parseFenceOpen(line);
      if (fence) {
        const closing = lines.slice(index + 1, end).findIndex((candidate) => isFenceClose(candidate, fence.marker));
        if (closing === -1) {
          output.push(`<section class="docdiagram-error"><strong>Unclosed code block.</strong></section>`);
          break;
        }
        const closeIndex = index + closing + 1;
        const content = lines.slice(index + 1, closeIndex).join("\n");
        if (fence.info === "diagram") {
          const id = getDiagramId(content);
          if (id && duplicateDefinitionIds.has(id)) {
            output.push(`<section class="docdiagram-error"><strong>Diagram "${escapeHtml(id)}" has multiple definitions.</strong></section>`);
          } else if (!id || !referenceCounts.has(id)) {
            output.push(renderFigure(content));
          }
        } else {
          const className = fence.info ? ` class="language-${escapeHtml(fence.info)}"` : "";
          output.push(`<pre><code${className}>${highlightCode(content, fence.info)}</code></pre>`);
        }
        index = closeIndex + 1;
        continue;
      }

      const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
      if (heading) {
        const level = heading[1].length;
        const headingId = getHeadingId(heading[2], state);
        state.contents!.push({ kind: "heading", level, id: headingId, text: renderInline(heading[2]) });
        output.push(`<h${level} id="${headingId}">${renderInline(heading[2])}</h${level}>`);
        index += 1;
        continue;
      }

      if (/^ {0,3}(?:[-*_]\s*){3,}$/.test(line)) {
        output.push("<hr>");
        index += 1;
        continue;
      }

      if (/^ {0,3}>/.test(line)) {
        const quoteLines: string[] = [];
        while (index < end && /^ {0,3}>/.test(lines[index])) {
          quoteLines.push(lines[index].replace(/^ {0,3}> ?/, ""));
          index += 1;
        }
        output.push(`<blockquote>${renderMarkdown(quoteLines.join("\n"), state, {
          ...options,
          diagramReferenceRegistry: registry
        })}</blockquote>`);
        continue;
      }

      const list = getListMatch(line);
      if (list) {
        const rendered = renderList(index, list[1].length);
        output.push(rendered.html);
        index = rendered.index;
        continue;
      }

      const alignment = index + 1 < end ? parseTableAlignment(lines[index + 1]) : null;
      if (alignment) {
        const header = splitTableRow(line);
        const rows: string[][] = [];
        index += 2;
        while (index < end && lines[index].includes("|") && lines[index].trim()) {
          rows.push(splitTableRow(lines[index]));
          index += 1;
        }
        const renderCells = (tag: string, cells: string[]) => cells.map((cell, cellIndex) =>
          `<${tag}${alignment[cellIndex] ? ` style="text-align:${alignment[cellIndex]}"` : ""}>${renderInline(cell || "")}</${tag}>`
        ).join("");
        output.push(`<table><thead><tr>${renderCells("th", header)}</tr></thead><tbody>${rows.map((row) =>
          `<tr>${renderCells("td", row)}</tr>`
        ).join("")}</tbody></table>`);
        continue;
      }

      const paragraph = [line.trim()];
      index += 1;
      while (index < end && !isBlockStart(index)) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      output.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    }
    return output.join("");
  }

  const markup = renderBlocks();
  // A nested render (a block quote) shares the outer state, so substitution is left to the
  // outermost call, where every figure and heading has been collected.
  return isNestedRender ? markup : resolveDeferredMarkup(markup, state);
}

function renderContentsList(entries: ContentsEntry[], depth: number, includeDiagrams: boolean): string {
  const listed = entries.filter((entry) => entry.kind === "figure" ? includeDiagrams : entry.level <= depth);
  if (!listed.length) {
    return "";
  }

  // A figure is nested one level below the heading it falls within, so it reads as belonging to
  // that section rather than as a sibling of it.
  const headingLevels = listed.filter((entry) => entry.kind === "heading").map((entry) => entry.level);
  const baseLevel = Math.min(...(headingLevels.length ? headingLevels : [1]));
  type ContentsNode = { entry: ContentsEntry; level: number; children: ContentsNode[] };
  const roots: ContentsNode[] = [];
  const ancestors: ContentsNode[] = [];

  for (const entry of listed) {
    const level = entry.kind === "figure"
      ? (ancestors.length ? ancestors[ancestors.length - 1].level : 0) + 1
      : entry.level - baseLevel + 1;
    while (ancestors.length && ancestors[ancestors.length - 1].level >= level) {
      ancestors.pop();
    }
    const node: ContentsNode = { entry, level, children: [] };
    (ancestors.length ? ancestors[ancestors.length - 1].children : roots).push(node);
    if (entry.kind === "heading") {
      ancestors.push(node);
    }
  }

  const renderNodes = (nodes: ContentsNode[]): string => `<ul>${nodes.map((node) =>
    `<li class="docdiagram-contents-${node.entry.kind}"><a href="#${escapeHtml(node.entry.id)}">${node.entry.text}</a>${
      node.children.length ? renderNodes(node.children) : ""
    }</li>`
  ).join("")}</ul>`;

  return `<nav class="docdiagram-contents" aria-label="Table of contents">${renderNodes(roots)}</nav>`;
}

function resolveDeferredMarkup(markup: string, state: MarkdownRenderState): string {
  const figures = state.figures || new Map<string, FigureEntry>();
  const contents = state.contents || [];

  return markup
    .replace(referencePlaceholderPattern, (_, id: string) => {
      const figure = figures.get(id);
      // A silently wrong cross-reference is worse than a visible failure, so an unknown or
      // uncaptioned target is reported the same way a missing diagram definition already is.
      if (!figure) {
        return `<strong class="docdiagram-error-inline">Unknown reference "${escapeHtml(id)}"</strong>`;
      }
      return `<a href="#${escapeHtml(id)}">${figure.number === null ? renderInline(figure.text) : String(figure.number)}</a>`;
    })
    .replace(contentsPlaceholderPattern, (_, attributes: string) => {
      const [depth, includeDiagrams] = attributes.split(":");
      return renderContentsList(contents, Number(depth), includeDiagrams === "true");
    });
}
