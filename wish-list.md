# Skryb wish list

Enhancements suggested from the perspective of an agent authoring Skryb
documents. Captured for a later session; nothing here is committed to.

The framing that produced this list: **an authoring agent works blind.** It
emits YAML with absolute coordinates and never sees the result. Most of the ways
generated documents come out ugly trace back to that, so features are ranked by
whether they remove the need to guess, or make a guess cheap to check.

## Priority

| # | Item | Lift | Why |
| --- | --- | --- | --- |
| 1 | Lint command | Small | Closes the authoring feedback loop; mostly assembles logic that already exists |
| 2 | Label wrapping + sizing hints | Small | Kills the most common visual defect |
| 3 | Flowchart auto-layout | Medium | Biggest single quality win; a one-off seeding step, not a layout mode |
| 4 | Code syntax highlighting | Medium | Largest gap in document polish |
| 5 | Whole-document print/PDF | Medium | Shareability outside the browser |
| 6 | Captions, anchors and cross-references | Small | Table stakes for technical writing; caption round-trips free |
| 7 | Named styles | Small | Stops style drift across a large diagram |
| 8 | Table of contents | Small | Navigation for long documents; lists headings and captioned diagrams |
| 9 | Edge obstacle avoidance | Large | Edges still cross unrelated nodes |
| 10 | Regeneration boundaries | Medium | Makes documents safe to maintain over time |
| 11 | Derived canvas bounds | Small | Removes a dimension authors should not have to maintain |

---

## 1. Lint command

The highest value for the least work. Schema errors are already covered by
`validateDocumentSource`; the gap is **visual-quality warnings**, which are
exactly what an authoring agent cannot see:

- a node overlapping another node
- a label wider or taller than its shape
- an edge passing through an unrelated node
- an edge naming a node that does not exist — the renderer currently drops such
  an edge silently (`if (!sourceEntry || !targetEntry) return ""`), so the
  connector simply vanishes with no error. Probably the most valuable rule here,
  because the failure is invisible unless you count your arrows
- duplicate ids (already an error, but worth surfacing early)

Two rules were considered and rejected:

- **"node extends past the canvas"** — see the canvas note below; the canvas
  should grow to fit rather than the author being told to satisfy it.
- **"unreachable node"** — a node with no connector is legitimate. `text` is a
  first-class shape, and annotation, label and legend nodes are a normal part of
  a diagram. This would fire constantly on correct documents.

### Where the code should live

Skryb documents are single files with either an external runtime URL or an
embedded runtime, so this needs care. Three options:

**In the runtime bundle, exposed on the core API — recommended.** Add the rules
under `src/core/`, expose `lintDocument(source)` through `getCoreApi()`, and add
a thin `scripts/lint.mjs` wrapper. There is already a proven precedent for
running the bundle headlessly: `test/render-runtime.test.js` loads
`dist/skryb-runtime.js` into a Node `vm` with a stubbed `document` and calls core
functions directly. No browser, no service, no new infrastructure.

Two further advantages:

- The rules sit next to the geometry they describe, so they cannot drift from
  the renderer that actually draws the diagram.
- The same lint becomes available *in the browser* for free, so the source tray
  could show "3 layout warnings" alongside its existing error reporting.

**In the skill.** Agent-local and versioned with the authoring guidance, but it
would duplicate geometry logic that already lives in `core/` and would drift from
the runtime. Better for the skill to *document* the command than to implement it.

**In the cloud.** Recommend against. It introduces a network dependency and a
privacy question for internal documents, and it runs against the project's
portable, no-infrastructure premise. A document that needs a server to be checked
is no longer self-contained.

### Trade-off to settle first

Putting lint in the default bundle grows every embedded-runtime document by its
size. The rules are pure functions over the parsed model so they should be small,
but measure before committing. If it is material, build two bundles — a lean
runtime for embedding and a full one for tooling — and have the lint script load
the full build.

### Shape

```
node scripts/lint.mjs doc.html            # errors and warnings
node scripts/lint.mjs doc.html --errors   # schema only, for CI
```

Exit non-zero on error; warnings are advisory so generated documents are not
blocked on aesthetics.

---

## 2. Label wrapping and sizing hints

**Auto-width is the wrong answer** — sizing every node to its own text produces a
diagram of ragged, mismatched boxes, which reads as less tidy than uniform
widths, not more. Keep explicit sizes.

Instead:

**Wrap within the declared width.** Today `splitTextLines` only splits on
explicit `\n`, so an over-long label silently overflows its shape and the agent
has to hand-break every label — which means guessing widths anyway. Wrapping on
word boundaries inside the given `size.width` removes the guess without touching
the tidy uniform-width property.

**Publish the capacity in the skill**, so labels can be written to fit in the
first place. Measured against the runtime's own font stack
(`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`) using
representative technical vocabulary:

- Label: 16px, weight 650 → **~8.4px per character**
- Subtitle: 13px, weight 400 → **~6.6px per character**

| Node width | Label chars/line | Subtitle chars/line |
| --- | --- | --- |
| 160 | ~16 | ~20 |
| **190 (default)** | **~19** | **~25** |
| 220 | ~23 | ~29 |
| 260 | ~28 | ~35 |

Vertically, label line height is 20 and subtitle 15, so the default 80-high node
fits **two label lines comfortably**, three at a squeeze.

Caveat worth stating in the skill: these are averages for technical English.
Uppercase or `W`/`M`-heavy strings run wider — "Webhook dispatcher" measures
8.8px per character. Budget **~9px per character** for safety, so a default
190-wide node is closer to **18 characters per line**.

---

## 3. Flowchart auto-layout

The single biggest quality win, and the largest lift.

Worth noting that **sequence diagrams already solve this**:
`renderSequenceDiagram` computes participant positions from `participantSpacing`
and index, which is exactly why generated sequence diagrams come out reliably
better than generated flowcharts. The runtime already proves it can place
things; flowcharts are the outlier.

### Proposed syntax

```yaml
type: flowchart
layout: right          # right | down | left | up
canvas: auto
nodes:
  - id: api
    label: Payments API
    shape: rounded-rectangle      # no position: layout places it
  - id: ledger
    label: Customer ledger
    shape: database
    position: { x: 640, y: 240 }  # already positioned: kept as-is
edges:
  - source: api
    target: ledger
```

### It is a seeding step, not a layout mode

This is the key simplification. Layout runs when a diagram is loaded and any node
lacks a `position`; it assigns positions to those nodes and the result is baked
into the model immediately. Serialisation always writes the actual current
positions, so:

- Layout has nothing left to do on a second open — every node has a position.
- It can never fight a hand edit, because it only ever touches nodes without one.
- There is no `layout: manual`, no persistent mode, and no state to track.

In practice auto-layout matters exactly once: the first time an agent-authored
file is opened. After that the file is fully positioned like any hand-drawn
diagram.

**Keep the `layout` key after baking.** It becomes a no-op for a fully positioned
diagram, but it declares *how to place anything unpositioned*, so an agent can
later append a node with no coordinates and have it placed on the next open. That
makes incremental agent edits work without re-laying out the whole diagram.

### Rules

- **`layout` absent → today's behaviour exactly.** Fully backwards compatible;
  every existing document is unaffected. A node with no position keeps the
  current fallback rather than being laid out.
- **An existing `position` always wins.** Never moved, never re-flowed.
- Containers (`children`) lay out recursively inside their parent's box.
- `canvas: auto` fits computed content bounds (see item 11).

Spacing is left to defaults deliberately. Because the result bakes immediately,
an author who dislikes the spacing just drags a node, so configuration would earn
its keep only rarely. If it is ever wanted, the scalar can widen to
`layout: { direction: right, stageGap: 120, siblingGap: 60 }` without breaking
the short form. No `engine` key until a second algorithm exists to choose between.

### Three cases, in decreasing order of difficulty

**No node has a position** — a fresh agent-authored diagram. Lay out the whole
graph. Nodes fall into **stages** by how deep they sit in the dependency chain,
each stage drawn perpendicular to the flow: columns for `right`, rows for `down`.
For `A → B`, `A → C`, `B → D`, `C → D`, A is stage 0, B and C are stage 1, and D
is stage 2.

This is the approach usually called *layered* or *Sugiyama* drawing, and is what
Graphviz's `dot` does. The literature's terms — "layer", "rank" — are avoided
here in favour of "stage", which describes the result rather than the algorithm.

1. Assign each node a stage from the longest path from the sources.
2. Order nodes within a stage to reduce edge crossings — a couple of
   median-heuristic passes. Most of the visual quality comes from this step.
3. Assign coordinates from the stage and sibling gaps, snapped to `canvas.grid`.

**Some nodes have positions** — a baked diagram an agent has appended to. Never
re-flow: that would move nodes someone placed deliberately. But this is not
simply "find a free slot" either, because a new node usually arrives *with
connectors*, and those say where it belongs.

The parser requires both `sourceAnchor` and `targetAnchor` on every edge — it
throws without them — so every connector already declares its spatial
relationship. `A.right → B.left` states that B sits to the right of A. The author
has written the intent down; placement only has to honour it.

That gives a simple rule: **a node sits on the side its own anchor faces away
from.** A connector entering the new node's `left` anchor means the neighbour is
to its left, so the node goes to the neighbour's right, vertically centred on it
and one gap clear.

Placing one appended node then becomes:

1. Take the edges joining it to already-positioned nodes. Each yields a candidate
   position from its anchor pair and that neighbour's box.
2. Reconcile several candidates by taking the extreme along the flow axis, so the
   node clears every neighbour, and the mean across it, so it sits between them.
3. Snap to `canvas.grid`, then resolve any overlap by sliding along the cross
   axis, falling back to the free-slot search.
4. **No connectors at all** — a standalone text or legend node — is the only case
   with nothing to infer from. `getDefaultNodePosition` already handles it,
   walking outward from the centre for a non-overlapping, grid-snapped slot.

Anchors are worth exploiting in the whole-graph case too. Because they are
mandatory, every edge carries a direction hint, which can order siblings within a
stage rather than leaving it to the crossing heuristic alone. An edge whose
anchors disagree with the declared `layout` direction is a hint rather than an
error — a deliberate back-edge or side branch.

Splitting these still keeps the hard graph algorithm confined to the case where
the diagram holds no layout decisions, where it cannot damage anything.

### Determinism is load-bearing

A file may be opened many times before it is ever saved, so the same source must
always produce the same positions. If ordering were unstable, a document would
look different on each open until someone saved it.

### Baking and the dirty flag

One wrinkle worth designing for. `boot()` records `state.savedSource`, and
`beforeunload` warns when the current source differs. Baking at load would
therefore make an untouched document look edited the moment it opened.

Bake into the model and update `savedSource` to match, so the document is not
considered dirty. Nothing is lost by leaving it unsaved: layout is deterministic,
so reopening reproduces the same positions. Any later Save As or offline export
writes the baked positions out, exactly as `persistDiagramModels` already does.

---

## 4. Code syntax highlighting

The reference is explicit that a fence language only produces a
`language-<name>` class. Technical documents are largely code, and unhighlighted
blocks are the flattest-looking part of an otherwise polished format.

Even a small tokeniser covering a handful of languages would lift perceived
quality noticeably. If runtime size is the concern — and it matters for embedded
documents — make it a build-time opt-in, or highlight at author time into spans
so the runtime carries no tokeniser at all.

---

## 5. Whole-document print / PDF

Only single-diagram print exists today. A document-level print stylesheet with
sensible page breaks — never split a panel or diagram across a page boundary,
keep headings with their content — would make Skryb documents shareable in
contexts where HTML is not accepted.

---

## 6. Captions, anchors and cross-references

### Captions

A diagram gains a `caption` field, rendered below the diagram and centred:

```yaml
type: flowchart
id: auth-flow
caption: "Figure #: Authentication flow"
```

`#` is a placeholder substituted with the figure number. A caption without one is
simply a title:

```yaml
caption: Authentication flow
```

**Only captions containing a placeholder consume a number**, assigned in order.
That keeps numbering contiguous — an unnumbered titled figure sitting between
Figure 1 and Figure 2 does not create a visible gap — and makes numbering opt-in
per diagram rather than a document-wide mode.

Captions render as a `<figcaption>` inside the existing `<figure class="docdiagram">`,
which is both semantically correct and gives the hiding rule for free: a caption
is suppressed while `data-expanded="true"`, because a full-window frame is a
working view rather than a document view. Caption text should render through
`renderInline`, so the safe inline subset works but block content does not.

A literal `#` needs an escape — `\#` — worth settling early.

### Numbering follows render order, not definition order

This is the detail most likely to be got wrong. The reference documentation
**strongly prefers** the `:::diagram { id=... }` pattern for large diagrams,
where the reference sits beside the prose and the fenced definition is collected
at the end of the document. Numbering by definition order would therefore
number most real documents wrongly.

The existing machinery already does the right thing: `renderMarkdown` renders a
referenced diagram at the *reference* position and increments `state.diagramIndex`
there, so that counter already traverses in render order. Figure numbering can
piggyback on the same traversal. A diagram may be referenced at most once, which
the renderer already enforces, so each diagram has exactly one render position and
therefore one number.

### References

`{ref=auth-flow}` resolves to:

- **the number**, when the target's caption has a placeholder — so
  `See Figure {ref=auth-flow}` renders as "See Figure 3"
- **the caption text**, when it has no placeholder — so `See {ref=auth-flow}`
  renders as "See Authentication flow"

A reference to an unknown or uncaptioned id should be an error rather than
silently rendering nothing, matching how the renderer already reports a missing or
duplicated diagram definition. A silently wrong cross-reference is worse than a
visible failure, and the source tray already keeps the last valid render while
reporting the problem.

### Anchors

A diagram's `id` should also be its anchor, so `#auth-flow` deep-links to it
exactly as `#some-heading` links to a title. The `id` goes on the existing
`<figure class="docdiagram">`, which is already the scroll target.

**Collisions with heading anchors need resolving.** `createHeadingSlug` produces
lowercase kebab-case, so a heading "Auth flow" becomes `auth-flow` — precisely
the id an author would give the diagram in that section. Two elements sharing a
DOM id is invalid HTML and makes the link ambiguous.

Diagram ids should win. They are explicitly declared by the author and already
load-bearing for `{ref=}` and `:::diagram { id=... }`, whereas a heading slug is
derived and has no other meaning; suffixing the derived one costs less. In
practice: pre-seed `usedHeadingIds` with every diagram id before the render pass,
so a colliding heading takes the `-2` suffix that `getHeadingId` already applies
for repeated headings. This is straightforward because the diagram registry, with
every definition and id, is built before rendering begins.

Worth noting in the skill: diagram ids are only barred from containing whitespace
or `#`, so they can hold characters that need percent-encoding in a URL fragment.
They will still work, but kebab-case ids keep links readable.

### Known simplification

A single counter across all diagrams. If flowcharts said `Figure #` and sequence
diagrams said `Diagram #`, they would share one sequence and read oddly. A
`captionGroup` could separate them later; not worth the complexity until someone
wants it.

### Free with the existing code

`serializeDiagram` iterates the diagram's own entries and skips only known
structural keys, so a scalar `caption` round-trips through edit and save with no
serializer change at all.

---

## 7. Named styles

Inline `style: { ... }` objects get repeated across many nodes, and consistency
drifts as a diagram grows — one node ends up a shade off. A document-level
`styles:` block with `class: warning` on nodes would let intent be declared once.
It would also shrink diagram source materially, which matters when regenerating
whole documents.

---

## 8. Table of contents

Headings already carry slugged, de-duplicated `id` attributes (`getHeadingId` in
`core/markdown.ts`), so deep links work today — though this is not mentioned in
the reference, which is worth fixing on its own.

What is missing is navigation for long documents: an opt-in `:::toc` directive
that builds from the heading tree, with a depth attribute.

```markdown
:::toc { depth=3 diagrams=true }
:::
```

### Including diagrams

Once diagrams carry anchors (item 6), they can appear in the contents alongside
headings, nested under the heading they fall within.

- **Only captioned diagrams.** The caption is the human-facing name, with its
  number resolved; a diagram without one would otherwise surface a raw id like
  `auth-flow` as a reading-list entry.
- **Render order, not definition order** — the same rule numbering follows, and
  for the same reason: the recommended pattern keeps definitions at the end of
  the document behind a reference.
- Opt-in via an attribute, since a contents listing every diagram is not always
  wanted.

An alternative worth weighing is a separate `:::figures` block producing a list
of figures, which is the established convention in longer technical documents and
keeps the contents purely structural. Both build from the same collected data, so
the choice is presentational rather than architectural.

---

## 9. Edge obstacle avoidance

Orthogonal routing no longer draws spurs, but edges still pass through unrelated
nodes. This is very visible when nodes are placed by an agent that cannot see the
result. Naturally follows auto-layout — whatever owns node placement is
also the right place to route edges around obstacles.

---

## 10. Regeneration boundaries

When an agent regenerates a document, hand edits are clobbered. Some marker for
generated versus hand-authored regions would make round-tripping safe, and make
agents useful for documents that are *maintained* rather than written once.

---

## 11. Derived canvas bounds

Now that panning is unbounded and **Zoom to fit** recovers any view, a node
sitting outside the canvas is not a defect the author should have to correct.
The editor already agrees: `expandCanvasForNode` grows the canvas when a node is
dragged past its edge, pads by 40, and shifts everything when coordinates go
negative.

The canvas is not vestigial though. `canvas.width` and `canvas.height` become the
SVG `viewBox`, which still governs two things:

- **Export and print bounds.** `getStandaloneDiagramSvg` keeps the viewBox, so
  anything outside the canvas is clipped out of a saved SVG or PDF even though it
  renders on screen.
- **Aspect ratio.** The SVG is `width: N%` with height derived from the viewBox,
  so the canvas shape decides how a diagram fills its frame at 100%.

So the canvas should be *derived* rather than authored:

- `canvas: auto` computes bounds from content plus padding, the same rule
  `expandCanvasForNode` already applies.
- Keep explicit `width` / `height` for authors who want a fixed aspect ratio,
  for instance to make several diagrams in one document share a shape.

**Worth fixing regardless of `auto`:** the existing expansion only ever grows.
Nothing shrinks a canvas, so it accumulates dead space across an editing session
— delete a node from the right-hand edge and the canvas keeps the width. That
dead space then shows up as empty margin in every export. A "fit canvas to
content" action, or making **Zoom to fit** also tighten the canvas, would close
that.

---

## Caveat

This list is reasoned from the code and from authoring experience, not from
observing readers. The reader-facing items — print, TOC, cross-references — are
the ones where the project's own instincts should outrank this list.
