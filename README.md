# skryb

Finally, your agent can produce beautiful documents that you can still edit
like Markdown.

skryb turns a portable HTML document containing Markdown, frontmatter, and
diagram source into readable documentation with interactive SVG flowcharts and
sequence diagrams. The Markdown source remains embedded in the HTML file, so a
document can be opened locally, edited, saved as a new copy, and reopened
without a server or build tool.

- **Fully Markdown compatible** - the canonical source stays in the file
- **Beautiful diagrams** that lay themselves out, or take exact coordinates
- **A single portable HTML file** that needs only a browser
- **Built-in diagram editor** - no other tools needed
- **Easy for agents to write**, easy for humans to edit
- **Prints properly**, so a document survives leaving the browser

See [the project page](https://sparkkz-nz.github.io/skryb/) for a walkthrough
of source editing, the diagram editor, themes, and zoom.

skryb is a viewer for agent-generated documentation with targeted editing for
human corrections. It is not a general-purpose document authoring application.

Documents accept a CommonMark-style baseline: headings, nested lists, quotes,
thematic breaks, inline formatting, links, language-labelled code fences, and
tables. They also support GFM-style strikethrough and task lists. The
[syntax reference](https://sparkkz-nz.github.io/skryb/docs/reference.html#markdown-compatibility) defines the exact
compatibility and safety rules, including literal raw HTML and permitted
link/image URLs.

## Start here

The fastest way to start by hand is to download
[the basic Skryb document template](https://sparkkz-nz.github.io/skryb/templates/skryb-document-template.html).
Open it in a browser, use **Edit source** to replace its title, introductory
text, and flowchart, then choose **Save As** to create a new document.

To build a document from scratch, create an HTML file containing a `template#source`, a
`main#rendered-document`, and the hosted runtime:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello skryb</title>
  <script
    src="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js"
    defer>
  </script>
</head>
<body>
  <template id="source" type="text/markdown">
# Hello skryb

This document can be opened directly from your file system.
  </template>
  <main id="rendered-document"></main>
</body>
</html>
```

Save it as `hello-skryb.html` and open it in a browser. See the
[getting-started guide](https://sparkkz-nz.github.io/skryb/docs/quickstart.html) for a diagram and editing
walkthrough, or the [syntax reference](https://sparkkz-nz.github.io/skryb/docs/reference.html) for the complete
current document contract.

## Reading and editing

Everything happens inside the open document; there is no separate application.

- **Edit source** (Cmd/Ctrl+Shift+E) opens the source tray over the document. It
  holds the canonical Markdown and diagram YAML and live-renders valid changes.
  Drag the tray's top edge to resize it, or focus that edge and use the arrow
  keys; double-click it to restore the default height.
- **Diagram layout** is optional work, and it is what makes a document worth
  writing by hand or generating. Give a flowchart `layout: right` (or `down`,
  `left`, `up`) and you may leave out node positions and edge anchors entirely;
  it places the nodes in stages from the connectors, ordered to avoid crossings,
  and gives each connector the anchors its final geometry implies. It only ever
  fills in what is missing, so a node you drag stays put and an anchor you wrote
  down is never overwritten. The result is written back into the document's own
  source when it opens, so there are real coordinates there to adjust.
  Connectors route around nodes in the way, labels
  wrap inside the width you gave them, and `canvas: auto` keeps the drawing's
  bounds matched to its content. Without a `layout`, every node needs a
  `position` and every edge both anchors; leaving one out is an error rather
  than a drawing that silently stacks at the origin.
- **Diagram editing** selects a node to set its label, subtitle, shape, palette,
  status colour, fill, stroke, alignment, and size. Nodes can be dragged,
  resized, duplicated, and reconnected; connectors can be rerouted, given a
  waypoint, or removed, and any node can carry a callout pointer. Every change
  is serialized back into the matching diagram fence. Set `grid: 5` on a
  flowchart's `canvas` so dragging and resizing snap to a shared grid and shapes
  stay aligned.
- **Theme and colour scheme** are set in frontmatter or from the document menu:
  `theme` is `auto`, `light`, or `dark`, and `colourScheme` is `classic`,
  `fire`, `ice`, `midnight`, or `paper`. Diagrams render as live SVG and follow
  the theme, and
  a menu change becomes canonical frontmatter when the document is saved.
- **Layout and zoom** switch the reading view between centred and full-width,
  and zoom, fit, or pan a diagram inside its frame. Over a diagram the wheel pans
  and Ctrl/Cmd + wheel zooms around the pointer. Neither has bounds, so a diagram
  can be pushed into a corner to clear working space; **Zoom to fit** brings it
  back. These are view controls:
  panning and zooming never alter stored coordinates. A diagram frame sizes
  itself to the drawn shapes on first render, so short diagrams leave no empty
  band; drag the frame's bottom edge to resize it, or press **Zoom to fit** to
  return to the automatic height.
- **Expand a diagram** to fill the window when a frame is too small to work in,
  and collapse it again from the same control or with Escape. An expanded frame
  keeps the source tray usable alongside it rather than hiding behind it. Set
  `doctype: diagram` in frontmatter for a file whose point is a single diagram:
  it opens with that diagram already expanded, while remaining an ordinary
  Skryb document in every other respect.
- **Longer documents** get a `:::toc` contents list, diagram captions that
  number themselves, `{ref=...}` cross-references that stay right when figures
  move, and diagram ids that work as anchors. Fenced code is syntax highlighted
  in about forty languages, and `styles:` lets a diagram declare a look once and
  apply it with `class:`.
- **Printing** covers the whole document, not just one diagram. Toolbars are
  dropped, diagrams print at full size regardless of how their frame is sized on
  screen, and panels, diagrams and tables are kept off page breaks.
- **Move diagrams between documents** with **Save as Skryb diagram** in a
  diagram's export menu, which writes that one diagram as its own `doctype:
  diagram` file, and **Import diagram…** in the source tray menu, which reads a
  diagram out of such a file and inserts it at the cursor, renaming its `id` if
  the current document already uses it.

## Runtime URLs

```html
<!-- Latest runtime from main: suitable for normal use and local experiments. -->
<script src="https://sparkkz-nz.github.io/skryb/latest/skryb-runtime.js" defer></script>

<!-- Immutable release snapshot: use for documents you publish or distribute. -->
<script src="https://sparkkz-nz.github.io/skryb/releases/v1.2.0/skryb-runtime.js" defer></script>

<!-- Shared branch build: use only for short-lived pre-merge testing. -->
<script src="https://sparkkz-nz.github.io/skryb/dev/skryb-runtime.js" defer></script>
```

Each published channel contains two artifacts:

- `skryb-runtime.js` is the lean hosted runtime and is the right default for
  templates and shared documents.
- `skryb-runtime-self-packaged.js` includes a second encoded runtime copy. Use
  it only when an HTML file and runtime are deliberately distributed together
  for direct `file:` use without network access.

Each push to `main` tests and publishes the latest artifacts. A Git tag beginning
with `v` produces retained, versioned snapshots. Each branch push updates the
shared development artifacts, so documents must not rely on those URLs after
testing.

With a hosted runtime, **Save for Offline** fetches the selected runtime and
embeds it in the saved document. The self-packaged runtime uses its included
copy instead, so the same action works from `file:` without a network request.
Ordinary **Save As** retains a hosted external runtime URL to keep source
documents small and portable between folders.

## Documentation

- [Getting started](https://sparkkz-nz.github.io/skryb/docs/quickstart.html): create, open, edit, and save a
  portable document.
- [Syntax reference](https://sparkkz-nz.github.io/skryb/docs/reference.html): supported HTML, frontmatter, Markdown,
  flowchart and sequence diagram YAML, and editing behaviour.
- [Agent authoring skill](.github/skills/skryb-document/SKILL.md): instructions
  and checked examples for agents creating valid skryb documents.
- [Examples](examples/): ready-to-open hosted and local-runtime documents.

## Install the authoring skill

Install the `skryb-document` skill globally to make its schema-aware authoring
guidance available to every supported local agent:

```sh
npx skills add sparkkz-nz/skryb \
  --skill skryb-document \
  --agent '*' \
  --global \
  --yes \
  --full-depth
```

Omit `--global` to install it for only the current project. Keep the installed
skill current with:

```sh
npx skills update --global
```

The skill is versioned alongside the runtime. Use a release runtime URL for
published documents when you need a stable document contract.

## Development

[examples/web-runtime.html](examples/web-runtime.html) is the comprehensive
hosted-runtime demo. [examples/file-runtime.html](examples/file-runtime.html)
uses `dist/skryb-runtime-self-packaged.js`, so build first and keep the example
beside the repository's `dist/` directory. Install development
dependencies and run the runtime tests with:

```sh
npm ci
npm test
```

`npm test` builds and tests both minified browser artifacts. The build reports
raw, gzip, and Brotli sizes. Use `npm run check` to type-check the TypeScript
build entry independently and `npm run check:artifacts` to enforce the CI size
budgets.

The budgets live beside the measurement code in
`scripts/runtime-artifact-sizes.mjs`. An intentional increase must update those
limits in the same pull request, record fresh measurements in `plan.md`, and
explain why the added transfer cost is justified.

## Checking a document

Nobody writing a document can see it while they write it, which is where most
untidy diagrams come from. The document checks itself instead, when it opens.

If a diagram needed laying out, the geometry is written back into the document's
own source there and then, so what the source says and what the screen shows can
never disagree. The checks then run, and the report goes into a
`template[data-skryb-lint]`
beside the source. The document counts as changed at that point, so you are
asked to save it on the way out - and saving is how the result reaches whoever
asked for it. **Check document** in the document menu runs the checks any time
and shows them in a dialog.

The checks catch what the source will not show you:

- an edge naming a node that does not exist. Worth having on its own: the
  renderer drops these without a word, so the connector simply is not there and
  nothing tells you.
- nodes that overlap
- an edge crossing an unrelated node
- a label too big for its shape

Only the first is an error. The rest are advisory - a document is not broken for
being slightly untidy. The rules live in the runtime next to the geometry they
describe, so they cannot drift from what actually gets drawn.

Because this all happens in the browser, it needs nothing installed and runs in
the browser's sandbox. An agent with browser automation reads the two templates
directly; with only a Chromium binary, `--headless --dump-dom` prints a DOM
containing both. See the
[syntax reference](https://sparkkz-nz.github.io/skryb/docs/reference.html) for
the details.

## Baking from the command line

A checkout of this repository can run the same code headlessly, which is
convenient when you are working on skryb itself or checking documents in CI:

```sh
npm run bake doc.html             # positions and anchors written into the source
npm run bake doc.html -- --check  # non-zero if baking would change the file
npm run lint doc.html             # errors and warnings
npm run lint doc.html -- --errors # schema only, for CI
```

Only a fence that declares a `layout` **and** had something missing is rewritten,
into canonical form. A fence that is already complete is left exactly as its
author wrote it, comments and spacing intact, and so is any fence without a
`layout` - which is also how you freeze a diagram you have finished tuning:
delete its `layout` line.

Baking is idempotent, and every fence is parsed on the way through, so an
invalid diagram fails the bake rather than being quietly skipped. Nothing
outside the diagram fences is rewritten, and line endings survive.

These commands load the runtime from this repository's own `dist/`. Downloading
a runtime and running it outside a browser is not supported: in a browser it is
sandboxed, whereas under Node it would have whatever access you have.

Because the engine only fills in what is missing, the baked source stays useful
to edit:

- delete one node's `position` and bake again to have just that node re-placed
  in the context of the others
- add a new node with no position, and it is placed from the connectors that
  join it to the nodes already there, which never move
- strip every `position` and bake again for a full re-layout from scratch

## Licence

Skryb is licensed under the [Apache License 2.0](LICENSE).

Both built runtimes carry a short attribution banner. Because **Save for
Offline** inlines the selected runtime into the document it produces, that
banner travels with every self-contained document.

To keep single-file documents practical, the copyright holder grants an
additional permission: **retaining the banner comment in an inlined or
otherwise redistributed copy of the runtime satisfies the attribution and
licence-notice requirements of section 4 of the Apache License for that copy.**
Do not strip the banner. Redistributing Skryb's *source* remains subject to the
licence in full.

Documents you write with Skryb are yours. The licence covers Skryb itself, not
the content you author with it.
