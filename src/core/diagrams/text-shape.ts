// Native-SVG markdown-subset rendering for flowchart "text" shape nodes. This intentionally does
// not reuse the HTML-based renderer in core/markdown.ts: SVG <text>/<tspan> elements cannot embed
// HTML tags, and exports must stay standalone, native SVG (no foreignObject). Only the documented
// subset is supported: level 1/2 headings ("#"/"##"), inline **bold**, inline _italic_, inline
// `code`, and explicit line breaks (one Markdown line per rendered line, no reflow/wrapping).
import type { FlowchartNode } from "./schema";
import { escapeHtml } from "./parser";
import { splitTextLines, renderTextBlock } from "./geometry";

type TextBounds = { x: number; y: number; width: number; height: number };
type LineKind = "h1" | "h2" | "body";

interface ClassifiedLine {
  kind: LineKind;
  text: string;
}

interface InlineRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
}

const lineMetrics: Record<LineKind, { fontSize: number; lineHeight: number }> = {
  h1: { fontSize: 26, lineHeight: 34 },
  h2: { fontSize: 20, lineHeight: 26 },
  body: { fontSize: 16, lineHeight: 20 }
};

const baselineRatio = 0.72;
const headingLinePattern = /^(#{1,2})\s+(.*)$/;
const inlineRunPattern = /(\*\*([^*]+)\*\*)|((?<!\w)_([^_\s](?:[^_]*[^_\s])?)_)(?!\w)|(`([^`]+)`)/g;

function classifyLine(rawLine: string): ClassifiedLine {
  const heading = rawLine.match(headingLinePattern);
  if (heading) {
    return { kind: heading[1].length === 1 ? "h1" : "h2", text: heading[2] };
  }
  return { kind: "body", text: rawLine };
}

export function parseTextShapeInlineRuns(text: string): InlineRun[] {
  const runs: InlineRun[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  inlineRunPattern.lastIndex = 0;

  while ((match = inlineRunPattern.exec(text))) {
    if (match.index > lastIndex) {
      runs.push({ text: text.slice(lastIndex, match.index) });
    }
    if (match[2] !== undefined) {
      runs.push({ text: match[2], bold: true });
    } else if (match[4] !== undefined) {
      runs.push({ text: match[4], italic: true });
    } else if (match[6] !== undefined) {
      runs.push({ text: match[6], code: true });
    }
    lastIndex = inlineRunPattern.lastIndex;
  }

  if (lastIndex < text.length || !runs.length) {
    runs.push({ text: text.slice(lastIndex) });
  }

  return runs;
}

function renderRunTspan(run: InlineRun, headingWeight: boolean, positioned: boolean, x: number, dy: number | null, fontSize: number): string {
  const attributes: string[] = [];
  if (positioned) {
    attributes.push(`x="${x}"`);
    if (dy !== null) {
      attributes.push(`dy="${dy}"`);
    }
  }

  const styles = [`font-size:${fontSize}px`];
  if (run.bold || headingWeight) {
    styles.push("font-weight:700");
  }
  if (run.italic) {
    styles.push("font-style:italic");
  }
  if (run.code) {
    styles.push("font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace");
  }
  attributes.push(`style="${styles.join(";")}"`);

  const content = escapeHtml(run.text) || " ";
  return `<tspan ${attributes.join(" ")}>${content}</tspan>`;
}

function renderLabelTextElement(
  centerX: number,
  textAnchor: "start" | "middle" | "end",
  blockTop: number,
  classifiedLines: ClassifiedLine[],
  fill: string
): string {
  if (!classifiedLines.length) {
    return "";
  }

  const firstBaseline = blockTop + lineMetrics[classifiedLines[0].kind].lineHeight * baselineRatio;
  let runningTop = blockTop;
  let previousBaseline = 0;

  const lineMarkup = classifiedLines.map((line, index) => {
    const metrics = lineMetrics[line.kind];
    const baseline = runningTop + metrics.lineHeight * baselineRatio;
    const dy = index === 0 ? null : baseline - previousBaseline;
    runningTop += metrics.lineHeight;
    previousBaseline = baseline;

    const runs = parseTextShapeInlineRuns(line.text);
    const headingWeight = line.kind !== "body";
    return runs.map((run, runIndex) =>
      renderRunTspan(run, headingWeight, runIndex === 0, centerX, runIndex === 0 ? dy : null, metrics.fontSize)
    ).join("");
  }).join("");

  return `<text x="${centerX}" y="${firstBaseline}" text-anchor="${textAnchor}" class="docdiagram-node-label docdiagram-node-label-markdown" fill="${escapeHtml(fill)}">${lineMarkup}</text>`;
}

// Renders a "text" shape node's label as the supported native-SVG markdown subset, with the
// node's subtitle (plain, unformatted) preserved below the formatted content per the same
// vertical/horizontal alignment used by every other node shape.
export function renderTextShapeContent(textBounds: TextBounds, node: FlowchartNode, fill: string): string {
  const classifiedLines = splitTextLines(node.label).map(classifyLine);
  const subtitleLines = node.subtitle ? splitTextLines(node.subtitle) : [];

  if (!classifiedLines.length && !subtitleLines.length) {
    return "";
  }

  const subtitleLineHeight = 15;
  const labelBlockHeight = classifiedLines.reduce((total, line) => total + lineMetrics[line.kind].lineHeight, 0);
  const subtitleGap = subtitleLines.length ? 6 : 0;
  const subtitleBlockHeight = subtitleLines.length * subtitleLineHeight;
  const totalBlockHeight = labelBlockHeight + subtitleGap + subtitleBlockHeight;

  const textHAlign = node.textHAlign || "center";
  const centerX = textHAlign === "left"
    ? textBounds.x
    : textHAlign === "right"
      ? textBounds.x + textBounds.width
      : textBounds.x + textBounds.width / 2;
  const textAnchor: "start" | "middle" | "end" = textHAlign === "left" ? "start" : textHAlign === "right" ? "end" : "middle";
  const centerY = textBounds.y + textBounds.height / 2;
  const blockTop = node.textVAlign === "top" ? textBounds.y : centerY - totalBlockHeight / 2;

  const labelMarkup = renderLabelTextElement(centerX, textAnchor, blockTop, classifiedLines, fill);
  const subtitleStartY = blockTop + labelBlockHeight + subtitleGap + subtitleLineHeight * baselineRatio;
  const subtitleMarkup = subtitleLines.length
    ? renderTextBlock(centerX, subtitleStartY, subtitleLines, subtitleLineHeight, "docdiagram-node-subtitle", fill, textAnchor)
    : "";

  return labelMarkup + subtitleMarkup;
}
