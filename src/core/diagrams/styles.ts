import {
  type Canvas,
  type ColourSchemeName,
  type EdgeStyle,
  type FlowchartEdge,
  type FlowchartNode,
  type NamedStyle,
  type NodeStyle,
  type PaletteRole,
  type Theme,
  type ThemeColors,
  colourSchemes,
  diagramThemes,
  edgeMarkerDefaults,
  edgeMarkerStyles,
} from "./schema";

export function resolveTheme(theme: Theme): Exclude<Theme, "auto"> {
  if (theme === "light" || theme === "dark") {
    return theme;
  }
  if (theme === "auto") {
    return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  throw new Error(`Unsupported document theme: ${theme}`);
}

export function getTheme(_: { theme?: Theme }, documentTheme: Theme = "light"): ThemeColors {
  const themeName = resolveTheme(documentTheme);
  const theme = diagramThemes[themeName];

  if (!theme) {
    throw new Error(`Unsupported diagram theme: ${themeName}`);
  }

  return theme;
}

export function getNodeColorPalette(schemeName: string, theme: Theme, role: string): NodeStyle | null {
  const scheme = Object.prototype.hasOwnProperty.call(colourSchemes, schemeName)
    ? colourSchemes[schemeName as ColourSchemeName]
    : undefined;
  const palette = scheme?.[resolveTheme(theme)]?.[role as PaletteRole];
  return palette || null;
}

export function mergeStyle<T>(defaults: T, overrides: Partial<T> | undefined | null): T {
  return { ...(defaults as object), ...(overrides || {}) } as T;
}

export function getNamedStyle(diagram: { styles?: Record<string, NamedStyle> }, name?: string): NamedStyle | null {
  return name ? diagram.styles?.[name] || null : null;
}

export function getNodeEffectiveStyle(
  diagram: { theme?: Theme; styles?: Record<string, NamedStyle> },
  node: FlowchartNode,
  documentTheme: Theme = "light",
  documentColorScheme: ColourSchemeName = "classic"
): NodeStyle {
  const theme = getTheme(diagram, documentTheme);
  const defaults = theme.node;
  // A "text" shape node is a plain text box: its fill/stroke default to transparent while its
  // text keeps the normal readable colour, unless a palette or explicit style overrides it.
  const shapeDefaults = node.shape === "text" ? { fill: "none", stroke: "none" } : null;
  // A named style sits between the theme and the node's own values, so a class declares the
  // intent once and anything written on the node itself still wins.
  const named = getNamedStyle(diagram, node.class);
  const namedPalette = named?.palette
    ? getNodeColorPalette(documentColorScheme, documentTheme, named.palette)
    : null;
  const palette = node.palette
    ? getNodeColorPalette(documentColorScheme, documentTheme, node.palette)
    : null;
  return mergeStyle(
    mergeStyle(
      mergeStyle(mergeStyle(mergeStyle(defaults, shapeDefaults), namedPalette), named?.style),
      palette
    ),
    node.style
  );
}

export function getSequenceElementEffectiveStyle(
  diagram: { theme?: Theme },
  element: { palette?: PaletteRole; style?: NodeStyle },
  documentTheme: Theme = "light",
  documentColorScheme: ColourSchemeName = "classic"
): NodeStyle {
  const theme = getTheme(diagram, documentTheme);
  const palette = element.palette
    ? getNodeColorPalette(documentColorScheme, documentTheme, element.palette)
    : null;
  return mergeStyle(mergeStyle(theme.node, palette), element.style);
}

export function getEdgeEffectiveStyle(
  diagram: { theme?: Theme; styles?: Record<string, NamedStyle> },
  edge: FlowchartEdge,
  documentTheme: Theme = "light"
): EdgeStyle {
  const theme = getTheme(diagram, documentTheme);
  // An edge has no palette of its own, so a class contributes only its style fields.
  const named = getNamedStyle(diagram, edge.class);
  return mergeStyle(mergeStyle(theme.edge, named?.style), edge.style);
}

export function getEdgeMarkerStyle(edge: FlowchartEdge, endpoint: "start" | "end"): string {
  const value = endpoint === "start" ? edge.start : edge.end;
  return typeof value === "string" && edgeMarkerStyles.includes(value as (typeof edgeMarkerStyles)[number]) ? value : edgeMarkerDefaults[endpoint];
}

export function getGridSize(diagram: { canvas?: Canvas }): number {
  const grid = Number(diagram.canvas?.grid);
  return Number.isFinite(grid) && grid > 0 ? grid : 0;
}

export function snapToGrid(value: number, grid: number): number {
  return grid ? Math.round(value / grid) * grid : Math.round(value);
}

export function clampNodeSize(value: number, minimum: number, grid: number): number {
  const snapped = snapToGrid(value, grid);
  const snappedMinimum = grid ? Math.ceil(minimum / grid) * grid : minimum;
  return Math.max(snappedMinimum, snapped);
}
