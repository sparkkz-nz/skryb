---
name: skryb-document
description: Create valid, portable Skryb HTML documents with canonical Markdown and editable diagrams.
---

# Author Skryb documents

Use this skill when creating or updating a Skryb document. A Skryb document is
a portable HTML file that embeds canonical Markdown in `template#source` and
renders it through the hosted `skryb-runtime.js` browser runtime.

The complete, versioned authoring contract is the bundled
[schema reference](reference.md). Read it before authoring or changing a
document. Treat it as the source of truth: do not invent frontmatter, Markdown,
YAML fields, enum values, extension fences, or diagram types that it does not
document.

## Authoring workflow

1. Start from the required HTML shell below.
2. Put all canonical document content in `template#source`; never author
   content directly in `main#rendered-document`.
3. Use only the Markdown and diagram YAML described in the syntax reference.
4. Choose a runtime channel appropriate to the document's lifetime.
5. Write accessible headings, concise prose, meaningful node labels, and prose
   that lets a reader understand a diagram without relying only on its visuals.
6. Validate the HTML shell, frontmatter, Markdown subset, and every diagram
   field before returning the document.
7. Open the document to bake and check it, adjust the source, and open it again.
   You cannot see what you have written; this is the loop that closes that gap,
   and it is described under "Reviewing a document" below.

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

## Runtime channel selection

Use one of these script sources:

| Document purpose | Script source |
| --- | --- |
| Normal local or shared use | `https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js` |
| Short-lived pre-merge testing only | `https://sparkkz-nz.github.io/skryb/dev/skryb-runtime.js` |
| Published or distributed document | `https://sparkkz-nz.github.io/skryb/releases/<tag>/skryb-runtime.js` |

Use a real released tag, such as `v1.2.0`, in a pinned URL. Never use the shared
development channel in an enduring document. A local relative runtime is valid
only when the document and runtime are deliberately distributed together. Never
put a machine-specific `file:///...` URL in a shareable document.

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
`type: sequence`. Flowchart nodes must have a supported `shape`. Node positions
and edge anchors are required only when the flowchart has no `layout` - see
"Let the layout engine place the diagram" below. Use only the values in the
syntax reference, including:

- node shapes: `rounded-rectangle`, `circle`, `oval`, `database`, `diamond`,
  `rhombus`, `flattened-hexagon`, `chevron`, `right-chevron`, `document`, and
  `text` (a borderless, unfilled shape whose `label` renders headings,
  **bold**, _italic_, and `code` as native SVG text);
- node palettes: `palette: background|pale|light|neutral|dark|accent-soft|accent|accent-strong|note|success|warning|danger|highlight|none` (`none` clears fill and stroke on any shape);
- anchors: `top`, `right`, `bottom`, and `left`;
- routes: `orthogonal`, `straight`, and `curved`;
- endpoint markers: `none`, `arrow`, and `circle`.

Use explicit, stable node IDs and labels that describe a reader-visible
responsibility. A node's shape is geometry only; choose its appearance with a
palette or explicit style values, never a domain-specific `type`. Keep the
diagram compact and include adjacent prose that explains the flow. Sequence
diagrams use ordered participants and messages; do not add arbitrary positions
or Mermaid syntax.

### Let the layout engine place the diagram

Placing nodes blind is the single largest source of untidy generated diagrams.
Do not do it. Set `layout: right` (or `down`, `left`, `up`), leave every
`position` and both anchors off every edge, and describe only the graph:

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

That is the whole diagram. Opening it fills in the geometry and writes it back
into the source - nodes in stages along the flow, ordered to avoid crossings, and
each connector given the anchors its final geometry implies:

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

The engine only ever fills in what is missing, so it composes with whatever you
do want to control. Pin the one node whose placement carries meaning and let the
rest fall into stages around it. Write an anchor on the one edge that needs to
leave a particular side - a feedback edge doubling back, which the engine also
reads as a deliberate back-edge and keeps out of the stage assignment - and
leave the other edges alone.

Choose the direction from the content: `right` for a pipeline or request path,
`down` for a decision tree or a sequence of steps. A diagram wider than about
five stages usually reads better as `down`.

Keep the `layout` key in the baked source. A fully placed diagram is left
untouched - it is not even rewritten - but the key is what places the next node
you add, and what marks the diagram as yours to regenerate. Removing it is how a
person freezes a diagram they have hand-tuned, so do not remove it for them.

Without a `layout`, every node needs a `position` and every edge both anchors;
leaving one out is an error, not a diagram drawn at the origin.

Set `canvas.grid: 5` on a flowchart unless there is a reason not to. The layout
engine snaps to it, and you should too on the nodes you place by hand. Shared
coordinates are what make a diagram look deliberate: node edges line up, rows
and columns align, and connectors meet anchors squarely instead of missing by a
pixel or two. It also makes later graphical edits snap into the same alignment
rather than drifting out of it.
(This is `canvas.grid` inside a diagram, unrelated to the `:::grid` layout
directive.)

Prefer `canvas: auto` on a flowchart (or `auto: true` alongside `grid`) so the
canvas is derived from the content instead of being a dimension you maintain.
Give explicit `width` and `height` only when a fixed aspect ratio matters.

Node labels wrap inside the node's declared width, so a long label will not
overflow its shape - but a wrapped label still reads better when it was sized to
fit. Budget about 9px per label character and 7px per subtitle character, less
24 units of horizontal inset, so a default 190-wide node holds roughly 18 label
characters per line and two lines comfortably in the default 80 height.

When several nodes share a presentation, declare it once in the flowchart's
`styles:` block and apply it with `class:` rather than repeating an inline
`style: { ... }`. It keeps a large diagram consistent and makes the source
materially shorter, which matters when regenerating a whole document. A class
overrides the theme, and anything written on the node itself overrides the
class.

Prefer `orthogonal` routes for most flows. Reach for `curved` when an orthogonal
route would be hard to follow - a long edge doubling back, several edges
converging on one anchor, or an edge that would otherwise run along or across an
unrelated node. A curve separates from its neighbours and reads as one
continuous line, so it can resolve a crowded layout that would otherwise need
another right-angled detour.

An edge that would cut through an unrelated node is routed around it
automatically, keeping its route style. Where the geometry makes that impossible
- most often a curve leaving an anchor that points straight at another node -
the edge is left as authored and lint reports it; change the anchors rather than
adding a waypoint.

An edge may include one optional `waypoint: { x: number, y: number }` in canvas
coordinates, which every route honours: orthogonal legs, a two-segment polyline
for `straight`, and a smooth curve through the point for `curved`. The graphical
flowchart editor can drag this waypoint; use it only when the default route does
not communicate the relationship clearly.

A node may include one optional `arrow: { x: number, y: number }` in canvas
coordinates, which draws a callout pointer from the node centre out to that
point in the node's own colours. Use it to tie an annotation - most often a
`text` shape - to the thing it describes.

For large or detailed diagrams, strongly prefer a `:::diagram { id=... }`
reference at the intended reading position and place the matching fenced
definition at the end of the document. This keeps the explanatory source easy
to edit and review without changing where the diagram renders.

Give a diagram a `caption` when the prose refers to it. Write
`caption: "Figure #: Authentication flow"` to have it numbered, and refer to it
as `See Figure {ref=auth-flow}`; a caption with no `#` is just a title, and
`{ref=}` then renders that title instead of a number. Numbers follow render
order, so the reference pattern above numbers correctly. A diagram's `id` is
also its anchor, so `#auth-flow` deep-links to it.

Add `:::toc { depth=3 diagrams=true }` near the top of a long document. It takes
no closing fence, and lists captioned diagrams under the heading they fall
within.

## Editing and saving

Use **Edit source** for canonical Markdown, document structure, and sequence
diagram changes. The source tray's menu can insert valid flowchart, sequence,
diagram-reference, contents, panel, and grid templates, and **Help** opens the published
reference. Flowchart edit mode supports node and connector presentation,
endpoints, an optional edge waypoint, and an optional node callout pointer.

**Print / Save as PDF** in the document menu prints the whole document, with
diagrams at their natural size and without splitting panels, diagrams or tables
across a page boundary.

**Save As** keeps a hosted runtime URL in the downloaded portable document.
**Save for Offline** embeds the selected runtime into a self-contained copy;
use it when the recipient must open the document without network access.

Label every fenced code block with its language. A recognised language is syntax
highlighted, and the label costs nothing when it is not.

## Reviewing a document

An authoring agent works blind: it emits a document and never sees the result.
Opening the document is what closes that loop, because the runtime does the work
itself the moment it loads:

- if any diagram needed laying out, the result is **baked into the document's own
  source** there and then, so the source and the screen can never disagree;
- **the checks are then run**, and the report is written into a
  `template[data-skryb-lint]` beside the source;
- the document now counts as changed, so a reader is asked to save it on the way
  out.

Both results therefore live in the document, and every route below returns the
same two elements: `template#source` (the baked Markdown) and
`template[data-skryb-lint]` (a JSON report). Both are HTML-escaped, so decode entities when reading them.

The lint report carries a `sourceHash` of the source it describes. Compare it
against the source you hold: if they differ, the report predates your edits and
must not be trusted.

Use the first of these routes available to you.

### 1. Browser automation

Open the document and call into it. Nothing is installed and nothing is
downloaded; the runtime executes in the browser's sandbox.

```js
await page.goto("file:///abs/path/doc.html");
const { source, lint } = await page.evaluate(() => ({
  source: document.querySelector("#source").content.textContent,
  lint: JSON.parse(document.querySelector("template[data-skryb-lint]")?.content.textContent || "null")
}));
```

Write `source` back over the original file. Add `?skryb-lint` to the URL to force
a check even when nothing needed baking.

### 2. Any Chromium browser, no automation library

Chrome, Edge, Brave, or Chromium can render the document and print the resulting
DOM, which contains both templates:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --virtual-time-budget=5000 \
  --dump-dom "file:///abs/path/doc.html?skryb-lint" > dom.html
```

Extract `template#source` and `template[data-skryb-lint]` from `dom.html`, decode the
entities, and write the source back over the original file. Use the browser's
own path on the platform you are running on. `--virtual-time-budget` matters:
without it the DOM may be dumped before the runtime has finished.

### 3. Ask a person

With no browser at all, ask whoever you are working for to open the document,
choose **Check document** from the document menu, and save it over the original.
That single action bakes the layout, runs the checks, and hands both back to you.
Batch your edits before asking: each request costs them an open and a save.

### 4. Working inside the skryb repository

Only when you are in a checkout of skryb itself:

```sh
node scripts/bake.mjs doc.html            # positions and anchors written in
node scripts/bake.mjs doc.html --check    # non-zero if baking would change it
node scripts/lint.mjs doc.html            # errors and warnings
node scripts/lint.mjs doc.html --errors   # schema only, for CI
```

Do not download a runtime and run it outside the browser, and do not ask anyone
to. In a browser the runtime is sandboxed; under Node it would have the same
access to the machine as you do, and the URL it came from is a value taken from
a document that may not be trustworthy.

### What baking touches

Only a fence that declares a `layout` **and** had something missing is rewritten,
and it is rewritten into canonical form: fields reordered, comments inside that
fence dropped. That is expected - such a diagram is generated output. A fence
that is already complete, or has no `layout`, is copied through byte for byte,
comments and all. Nothing outside the diagram fences is ever rewritten.

### The rules the checks apply

| Rule | Severity | What it means |
| --- | --- | --- |
| `schema` | error | The document or a diagram fails validation. Nothing else runs until this is fixed. |
| `unknown-edge-endpoint` | error | An edge names a node that does not exist. The renderer drops such an edge silently, so the connector simply vanishes - invisible unless you count your arrows. |
| `node-overlap` | warning | Two unrelated nodes' boxes overlap. A child inside its own parent is not reported. |
| `edge-crosses-node` | warning | An edge's route passes through a node that is neither its source nor its target. |
| `label-overflow` | warning | A label cannot fit inside its shape even with its padding given up. |

Only errors are blocking; warnings are advisory, so a document is never held up
on aesthetics. A node with no connector is never reported - a `text` shape used
for annotation or a legend is a normal part of a diagram.

### Then adjust the baked source and check again

Because the engine only fills in what is missing, the baked source stays workable
without any extra machinery:

| To do this | Do this |
| --- | --- |
| Move a node | Edit its `position`, keeping to the `canvas.grid` multiple. |
| Have one node re-placed in context | Delete its `position` and bake again. |
| Add a node | Add it with no `position` and bake. Nothing already placed moves. |
| Lay the whole diagram out afresh | Strip every `position` and bake. This discards any hand tuning, so be sure. |
| Change where a connector leaves or lands | Edit that edge's anchors, or delete them and bake to have them derived again. |

If you have none of the routes above and nobody to ask, place every node and
anchor by hand and leave the `layout` key off. The document is then complete as
written, and the schema will tell you if it is not.

## Validation checklist

Before returning a document, verify:

- It has `<!doctype html>`, `lang`, UTF-8, viewport, a descriptive `title`,
  `template#source`, and `main#rendered-document`.
- The template contains canonical Markdown and the rendered container is empty.
- The script URL matches the document's intended lifetime.
- Frontmatter, if present, is at the start and uses only supported values.
- The Markdown uses only documented Markdown and formatting directives; grids
  contain only panels, callouts, or stacks as direct children.
- Every diagram declares its supported type. Every flowchart has explicit shapes
  and uses only supported palette, route, marker, waypoint, callout pointer, and
  style values.
- Flowcharts set `canvas.grid` (normally `5`) and any hand-written node positions
  and sizes are multiples of it.
- A flowchart either declares `layout` or gives every node a `position` and every
  edge both anchors.
- The document has been opened once since the last change, so its source carries
  the positions and anchors it renders with, and the diagrams have been checked.
- The checks report no errors, and every warning is either fixed or a deliberate
  choice.
- A reader can understand each diagram from its heading, labels, and nearby
  prose.
- The finished file can be opened in a browser directly from the local file
  system.
