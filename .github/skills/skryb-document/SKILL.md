---
name: skryb-document
description: Create valid, portable Skryb HTML documents with canonical Markdown and editable diagrams.
---

# Author Skryb documents

Use this skill when creating or updating a Skryb document. A Skryb document is
a portable HTML file that embeds canonical Markdown in `template#source` and
renders it through a Skryb browser runtime.

The complete, versioned authoring contract is the bundled
[schema reference](reference.md). Read it before authoring or changing a
document. Treat it as the source of truth: do not invent frontmatter, Markdown,
YAML fields, enum values, extension fences, or diagram types that it does not
document.

## Authoring workflow

1. Start from the required HTML shell below.
2. Put all canonical content in `template#source`. Leave
   `main#rendered-document` empty.
3. Use only the Markdown and diagram YAML documented in the schema reference.
4. Select a hosted runtime channel for the document's expected lifetime.
5. Write accessible headings, concise prose, and descriptive diagram labels.
   Explain each diagram in adjacent prose.
6. Bake automatic layout into the source, run the document checks, and correct
   all errors and unintended warnings. See [Reviewing a document](#reviewing-a-document).
7. Validate the HTML shell, frontmatter, Markdown, and diagram fields before
   returning the document.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Document title</title>
  <script
    src="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js"
    defer>
  </script>
</head>
<body>
  <template id="source" type="text/markdown">
# Document title

Readable fallback prose describes the document and any diagram's purpose.
  </template>
  <main id="rendered-document"></main>
</body>
</html>
```

## Runtime selection and offline documents

Author documents with one of these hosted runtime URLs:

| Document purpose | Script source |
| --- | --- |
| Normal local or shared use | `https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js` |
| Short-lived pre-merge testing | `https://sparkkz-nz.github.io/skryb/dev/skryb-runtime.js` |
| Published or distributed document | `https://sparkkz-nz.github.io/skryb/releases/<tag>/skryb-runtime.js` |

Use a released tag such as `v1.2.0` in a pinned URL. Do not use the shared
`dev` channel in a persistent document. Do not put a machine-specific
`file:///...` URL in a document intended for other users.

A standalone offline document contains the runtime within its HTML. Create one
with **Save for Offline**; do not distribute a separate JavaScript file with it.

`skryb-runtime-self-packaged.js` is a separate artifact for an uncommon
air-gapped authoring workflow. A document that references this artifact by a
relative URL can create an offline copy without fetching the runtime. Use it only
when deliberately distributing an editable HTML template and its runtime
together. It is not the runtime format for a standalone document.

## Formatting extensions

Use formatting directives only as specified in the syntax reference. They begin
in column 1, wrap ordinary supported Markdown, and can nest:

```markdown
:::panel { title="Summary" palette=accent }
Readable **Markdown** content.
::: (summary panel)
```

Use `section` for semantic grouping, `panel` for a bordered visual container,
and `callout` for a labelled `note`, `info`, `warning`, or `success` message.
Use one semantic `palette` role (`background`, `pale`, `light`, `neutral`,
`dark`, `accent-soft`, `accent`, `accent-strong`, `note`, `success`, `warning`,
`danger`, `highlight`, or `none`). The document's colour scheme and theme
resolve its visual treatment. `fill`, `stroke`, and `text` accept only
documented hexadecimal overrides and take precedence over a palette.

Use `grid` only for the documented `columns` presets: `2`, `3`, `"2fr 1fr"`,
or `"1fr 2fr"`. A grid's direct children must be `panel`, `callout`, or
`stack`; use `stack` to place vertically arranged components in one grid cell.
Grids collapse to one column on narrow screens. Do not use arbitrary CSS,
fixed widths, column spans, source reordering, or custom breakpoints.

Close directives with `:::`. Optional text following whitespace is an ignored
annotation for nesting readability, such as `::: (supporting stack)`.

## Diagram rules

Every fenced `diagram` YAML block must declare `type: flowchart` or
`type: sequence`. Every flowchart node requires a supported `shape`. A
flowchart without `layout` requires a `position` on every node and both anchors
on every edge. With `layout`, the runtime supplies omitted geometry. Use only
values documented in the schema reference, including:

- node shapes: `rounded-rectangle`, `circle`, `oval`, `database`, `diamond`,
  `rhombus`, `flattened-hexagon`, `chevron`, `right-chevron`, `document`, and
  `text` (a borderless, unfilled shape whose `label` renders headings,
  **bold**, _italic_, and `code` as native SVG text);
- node palettes: `palette: background|pale|light|neutral|dark|accent-soft|accent|accent-strong|note|success|warning|danger|highlight|none` (`none` clears fill and stroke on any shape);
- anchors: `top`, `right`, `bottom`, and `left`;
- routes: `orthogonal`, `straight`, and `curved`;
- node and connector stroke types: `solid`, `dotted`, `dashed`, and `double`;
- endpoint markers: `none`, `arrow`, and `circle`.

Use stable node IDs and labels that state each node's responsibility. A node's
shape defines geometry, not domain type. Set appearance with a palette, named
class, or explicit style values. Write multiline node, subtitle, and edge
labels as YAML literal block scalars rather than quoted `\n` strings. Break long
edge labels at phrase boundaries. To resolve `edge-label-overlap`, wrap the
label first, then move only the affected nodes by the smallest useful grid
increment. Widen the diagram only if those changes are insufficient. Include
adjacent prose that explains the flow.

Sequence diagrams use ordered participants and messages. Do not add positions,
anchors, or Mermaid syntax to them.

### Use automatic layout

For a new flowchart, set `layout` to `right`, `down`, `left`, or `up`. Omit node
positions and edge anchors so the runtime can derive them from the graph:

```yaml
type: flowchart
layout: right
canvas: { auto: true, grid: 5 }
nodes:
  - id: client
    label: Client
    shape: rounded-rectangle
  - id: api
    label: Orders API
    shape: rounded-rectangle
  - id: db
    label: Order store
    shape: database
edges:
  - source: client
    target: api
    label: POST /orders
  - source: api
    target: db
```

Baking adds deterministic positions and anchors. The resulting fence includes
the generated geometry:

```yaml
nodes:
  - id: client
    label: Client
    shape: rounded-rectangle
    position: { x: 40, y: 40 }
  - id: api
    label: Orders API
    shape: rounded-rectangle
    position: { x: 350, y: 40 }
  - id: db
    label: Order store
    shape: database
    position: { x: 660, y: 40 }
edges:
  - source: client
    target: api
    label: POST /orders
    sourceAnchor: right
    targetAnchor: left
  - source: api
    target: db
    sourceAnchor: right
    targetAnchor: left
```

Automatic layout preserves existing positions and anchors and fills in only
missing values. Set a position only when a node requires a specific location.
Add `pinned: true` only when `relayout: unpinned` must preserve that position.
Set an explicit anchor when an edge must use a particular side. An edge whose
anchors oppose the layout direction is treated as a back-edge and excluded from
stage assignment.

After layout or relayout, inspect every feedback edge even when lint reports no
warnings. If an orthogonal return overlaps a forward connector or has an
ambiguous destination, assign it unused anchors such as `bottom`-to-`bottom`.
Use a curved route if the paths still overlap. Do not add a waypoint unless the
default curve remains ambiguous.

### Automatic layout geometry

Flowchart nodes default to `190` by `80`. Automatic layout uses a `120`-unit
stage gap and a `60`-unit sibling gap. Leave at least those clearances around
manually positioned nodes. With `canvas.grid: 5`, use multiples of `5` for
manual geometry.

For example, in a right-flowing diagram, a default node placed after a
`190`-unit-wide node starts about `310` units farther right (`190 + 120`). Add
an explicit `size` when a label needs more room. Omit positions and anchors that
do not carry specific meaning.

Choose the direction from the content: `right` for a pipeline or request path,
`down` for a decision tree or a sequence of steps. A diagram wider than about
five stages usually reads better as `down`.

Lint reports `unbalanced-aspect-ratio` when fitted content forms a long strip
and at least eight nodes form a sufficiently linear dominant path. The warning
does not modify the source. In **Check document**, the corresponding wrap action
shows the before and after dimensions. Confirming it replaces authored
positions, anchors, routes, and waypoints with canonical, grid-aligned geometry.
Repeating the action makes no further change. Automated remediation is described
under [Reviewing a document](#reviewing-a-document).

Keep `layout` in the baked source. A fully specified diagram is not rewritten,
but the key enables automatic placement of later additions and explicit
`relayout` operations. Remove it only when deliberately freezing manually tuned
geometry.

Without `layout`, every node requires a `position` and every edge requires both
anchors. Missing geometry is a schema error.

Set `canvas.grid: 5` unless the diagram needs a different grid. Use the same grid
for manual positions and sizes so nodes, rows, columns, and connectors align.
`canvas.grid` is unrelated to the `:::grid` formatting directive.

Prefer `canvas: auto` on a flowchart (or `auto: true` alongside `grid`) so the
canvas is derived from the content instead of being a dimension you maintain.
Give explicit `width` and `height` only when a fixed aspect ratio matters.

Node labels wrap within their declared width. Estimate 9px per label character
and 7px per subtitle character, with 24 units reserved for horizontal inset. A
default `190`-unit-wide node holds about 18 label characters per line and two
lines within the default `80`-unit height. Set an explicit size when necessary.

Prefer straight connector geometry when a bend adds no information. After
baking, align node centres on the dominant flow axis and move secondary branches
perpendicular to it. Retain bends for branches, feedback, and obstacle
avoidance. An `orthogonal` edge between aligned anchors renders as one straight
segment and retains obstacle routing; `route: straight` is not required.

When nodes share a presentation, declare it in the flowchart's `styles:` block
and apply it with `class:` instead of repeating inline styles. A class overrides
the theme, and node-level values override the class.

Use `orthogonal` for most routes. Use `curved` for a long back-edge, several
edges converging on one anchor, or an edge that would otherwise overlap another
route or unrelated node. Prefer changing anchors before adding a waypoint.

The renderer routes edges around unrelated nodes when possible without changing
the route style. If the selected anchors prevent a clear route, lint reports the
crossing. Change the anchors before adding a waypoint.

An edge may include one optional `waypoint: { x: number, y: number }` in canvas
coordinates, which every route honours: orthogonal legs, a two-segment polyline
for `straight`, and a smooth curve through the point for `curved`. The graphical
flowchart editor can drag this waypoint; use it only when the default route does
not communicate the relationship clearly.

A node may include one optional `arrow: { x: number, y: number }` in canvas
coordinates, which draws a callout pointer from the node centre out to that
point in the node's own colours. Use it to tie an annotation - most often a
`text` shape - to the thing it describes.

For a large or detailed diagram, place a `:::diagram { id=... }` reference at
the intended reading position and its matching fenced definition at the end of
the document. This separates explanatory content from diagram YAML without
changing render order.

Give every diagram a concise plain-text `description` of its purpose and primary
relationship. The description becomes accessible SVG text and is retained by
SVG and diagram-document exports. Put detailed explanation in adjacent prose.

Give a diagram a `caption` when the prose refers to it. Write
`caption: "Figure #: Authentication flow"` to have it numbered, and refer to it
as `See Figure {ref=auth-flow}`; a caption with no `#` is just a title, and
`{ref=}` then renders that title instead of a number. Numbers follow render
order, so the reference pattern above numbers correctly. A diagram's `id` is
also its anchor, so `#auth-flow` deep-links to it.

Add `:::toc { depth=3 diagrams=true }` near the top of a long document. It takes
no closing fence, and lists captioned diagrams under the heading they fall
within.

## Editing, saving, and printing

Use **Edit source** for canonical Markdown, document structure, and sequence
diagram changes. Its menu inserts valid flowchart, sequence, diagram-reference,
contents, panel, and grid templates. **Help** opens the published reference.
Flowchart edit mode supports node and connector presentation, endpoints, an
optional edge waypoint, and an optional node callout pointer.

**Save As** downloads a portable document that references a hosted runtime.
**Save for Offline** downloads one self-contained HTML file with the runtime
embedded. When the current document uses a hosted runtime, this action fetches
that runtime before embedding it. The self-packaged companion runtime supports
the air-gapped authoring case described above.

**Print / Save as PDF** prints the complete document. Diagrams retain their
natural size, and panels, diagrams, and tables do not split across page
boundaries.

Label every fenced code block with its language so recognised languages receive
syntax highlighting.

## Reviewing a document

Bake and lint after changing a document. Baking resolves missing automatic
layout. Lint runs after baking.

In a browser, these results exist in the loaded DOM:

- `template#source` contains the baked Markdown;
- `template[data-skryb-lint]` contains a JSON lint report.

Loading a document does not overwrite its physical file. Persist browser-baked
geometry by extracting and writing `template#source`, using **Save As**, or
saving through the editor. Only baking marks the loaded document as changed;
checking alone does not cause a save prompt. **Save As** includes the current
lint report.

Decode template entities when extracting content from serialized HTML. Escape
`&`, `<`, and `>` when writing extracted Markdown back into an HTML template.
The lint report's `sourceHash` identifies the source it checks; discard locations
from a report whose hash does not match the current source.
Geometry messages identify the diagram and affected nodes or edges. Locations
use one-based lines and columns, zero-based UTF-16 offsets, and end-exclusive
ranges.

When screenshots are available, inspect each rendered diagram after linting.
Check alignment, compactness, label spacing, and connector paths. In particular,
look for overlapping connector segments and ambiguous feedback paths, which lint
may not report.

Use the first applicable review method.

### 1. Browser automation

Open the document, then read the source and report from the DOM:

```javascript
await page.goto("file:///abs/path/doc.html?skryb=lint");
const { source, lint } = await page.evaluate(() => ({
  source: document.querySelector("#source").content.textContent,
  lint: JSON.parse(document.querySelector("template[data-skryb-lint]")?.content.textContent || "null")
}));
```

HTML-escape `source` and replace the content of `template#source` in the original
file. The hosted runtime may require network access. The legacy `?skryb-lint`
query remains supported.

If the report contains `unbalanced-aspect-ratio`, reopen the original document
with `?skryb=autowrap`. This mode wraps every eligible flow, updates both DOM
templates, and requires no UI confirmation. Extract and save `template#source`,
then lint the saved file again. Repeating `?skryb=autowrap` on the wrapped result
makes no further change.

### 2. Chromium command line

Chrome, Edge, Brave, or Chromium can serialize the rendered DOM:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --virtual-time-budget=5000 \
  --dump-dom "file:///abs/path/doc.html?skryb=lint" > dom.html
```

Use the installed browser path for the current platform. Extract both templates
from `dom.html`, decode entities, and write the source back into the original
HTML file. Keep `--virtual-time-budget`; otherwise serialization may finish
before the runtime.

### 3. Manual browser review

If no automated method is available, ask the user to open the document and
choose **Check document**. Ask for the findings and for the file to be saved if
loading it baked layout. Checking alone does not prompt for a save. If the
returned file must contain the lint report, ask the user to choose **Save As**.
Batch changes before requesting another review.

### Baking changes

Baking rewrites a flowchart fence only when it has `layout` and either missing
geometry or a `relayout` instruction. Rewritten fences use canonical field order
and do not preserve comments within the fence. A complete fence with no
`relayout`, and any fence without `layout`, is preserved byte for byte. Content
outside diagram fences is not changed.

### Lint rules

| Rule | Severity | Meaning |
| --- | --- | --- |
| `schema` | error | The document or a diagram fails validation. Other checks do not run until this is fixed. |
| `unknown-edge-endpoint` | error | An edge references a node that does not exist, so the renderer omits the edge. |
| `node-overlap` | warning | Two unrelated node bounds overlap. A child within its parent is excluded. |
| `edge-crosses-node` | warning | An edge passes through a node other than its source or target. |
| `edge-label-overlap` | warning | All deterministic label positions conflict with a node, another label, or another route. The fallback label remains visible. |
| `label-overflow` | warning | A label does not fit within its shape after reducing its padding. |
| `unbalanced-aspect-ratio` | warning | Fitted content forms a long horizontal or vertical strip whose dominant path is eligible for wrapping. |

Errors are blocking. Review every warning and either correct it or confirm that
the geometry is intentional. Disconnected nodes are valid and are not reported;
this supports annotations and legends.

### Adjusting baked source

Automatic layout preserves existing geometry and fills in missing values:

| Goal | Action |
| --- | --- |
| Move a node | Edit its `position` using the `canvas.grid` multiple. |
| Re-place one node | Delete its `position` and bake again. |
| Add a node | Add it without `position` and bake. Existing positions remain unchanged. |
| Regenerate all geometry | Add `relayout: all` and bake. Node sizes remain; positions, anchors, routes, and waypoints are regenerated. The `relayout` key is then removed. |
| Regenerate geometry except selected positions | Mark retained nodes `pinned: true`, add `relayout: unpinned`, and bake. |
| Wrap an eligible linear flow | Add `relayout: autowrap` and bake, or use the lint remediation described above. |
| Change connector endpoints | Edit the edge anchors, or delete both anchors and bake to derive them again. |

If no baking method is available, omit `layout` and specify every node position
and both anchors on every edge. Validate the complete geometry against the
schema.

## Validation checklist

Before returning a document, verify:

- It has `<!doctype html>`, `lang`, UTF-8, viewport, a descriptive `title`,
  `template#source`, and `main#rendered-document`.
- The template contains canonical Markdown and the rendered container is empty.
- The runtime selection matches the document's intended lifetime and offline
  requirements.
- Frontmatter, if present, is at the start and uses only supported values.
- The Markdown uses only documented Markdown and formatting directives; grids
  contain only panels, callouts, or stacks as direct children.
- Every diagram declares its supported type and has a concise accessible
  `description`. Every flowchart has explicit shapes and uses only supported
  palette, route, marker, waypoint, callout pointer, and style values.
- Flowcharts set `canvas.grid` (normally `5`) and any hand-written node positions
  and sizes are multiples of it.
- A flowchart either declares `layout` or gives every node a `position` and every
  edge both anchors.
- The document has been baked and linted since the last source change. The saved
  source contains the geometry used for rendering.
- The checks report no errors, and every warning is either fixed or a deliberate
  choice.
- A reader can understand each diagram from its heading, labels, and nearby
  prose.
- The finished file can be opened in a browser directly from the local file
  system.
