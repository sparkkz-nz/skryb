# Skryb improvement log

This document records observations from authoring and reviewing a portable
Skryb technical architecture document as an agent. It is a working backlog of
product and authoring-contract improvements, not a specification.

## Initial assessment - 2026-08-29

### What worked well

- The `skryb-document` skill provides an exact HTML shell, a bounded Markdown
  and YAML contract, semantic presentation directives, and an explicit
  validation loop. It prevented undocumented syntax from entering the document.
- `layout`, `canvas: auto`, semantic palettes, captions, figure references,
  contents, grids, panels, and callouts were sufficient to create a polished,
  readable architecture document without raw HTML or custom CSS.
- The runtime lint catches problems an author cannot reliably infer from source:
  schema errors, missing edge endpoints, node overlap, edge crossings, and
  label overflow. It caught and enabled correction of issues in the initial
  generated diagrams.
- Keeping Markdown and diagram YAML inside `template#source` is a strong
  portable-source model. Browser editing and rendering work against one
  canonical representation.

### Friction found

- A browser rendering pass is essential. The document looked valid in source
  and passed schema checks, but the first layouts were too dense when fitted to
  the normal document viewport.
- Auto-layout deliberately preserves baked positions and anchors. This protects
  human changes, but made it awkward to revise a diagram after changing its
  desired layout direction.
- Repository-only Node tooling gave this evaluation an advantage unavailable to
  a normal document author. The agent-facing skill should describe only browser
  review routes. The repository scripts remain useful implementation tooling,
  but are not part of the portable-document authoring contract.

## Review routes

The portable-document authoring workflow has three legitimate review routes:

1. **Browser automation**: open the file, inspect the rendered document, read
   the baked `template#source` and `template[data-skryb-lint]` from the DOM,
   then persist the updated HTML.
2. **Headless Chromium DOM dump**: use an installed Chromium-family browser
   with `--headless --dump-dom` and an adequate virtual-time budget. Extract,
   HTML-decode, and persist the same source and lint templates.
3. **Human-assisted review**: ask a person to open the document, choose
   **Check document**, and save it over the original.

Route 2 is valuable when an agent has no browser-control integration but can
run an installed browser executable. It provides the same browser-sandboxed
runtime behaviour as Route 1, avoids executing a runtime URL under Node, and
does not require human interaction. Its trade-offs are browser discovery across
platforms, wait-time tuning, DOM extraction/HTML decoding, and weaker visual
inspection than browser automation.

## Completed authoring-contract updates

- [x] Removed the repository-only Route 4 and direct Node runtime guidance from
  the agent-facing skill and schema reference. The portable authoring contract
  now has the three browser-based review routes above.
- [x] Added constrained auto-layout guidance: default node size (`190` by
  `80`), stage gap (`120`), sibling gap (`60`), grid alignment, and a practical
  right-flow placement budget (`190 + 120 = 310`).
- [x] Added a portable architecture-document example that exercises the
  authoring contract with responsive presentation components, cross-referenced
  flowcharts, a sequence diagram, browser visual review, and clean runtime
  linting.

## Candidate: one-shot relayout source modifier

### Proposal

Extend flowchart layout syntax with a one-shot modifier:

```yaml
layout: relayout right
```

When loading the diagram, the runtime would:

1. parse `relayout right` as a request to regenerate layout in the `right`
   direction;
2. discard all top-level node positions and all edge endpoint anchors;
3. retain node identity, labels, shapes, sizes, styles, child structure, edge
   topology, markers, route type, labels, waypoints, and diagram-level layout
   settings;
4. apply normal automatic layout and derived anchors;
5. serialize the result as the stable form `layout: right`, removing
   `relayout`.

The same shape should work for all supported directions:
`relayout right`, `relayout down`, `relayout left`, and `relayout up`.

### Why it fits portable agent authoring

- An agent can make the intent explicit by editing only canonical Markdown/YAML,
  then use any browser review route. No Node command, local runtime bundle, or
  hidden UI action is required.
- The modifier is transient. Once a browser has baked the diagram, ordinary
  `layout: right` semantics resume: newly omitted positions can be filled,
  while saved positions and anchors are preserved.
- It avoids provenance metadata. After baking, positions remain plain,
  human-editable canonical source.
- It is intentionally destructive but clear in a diff: readers see
  `relayout`, then review the generated geometry before accepting it.

### Open design details

- **Nested nodes:** The implementation should define whether it clears every
  node position recursively or only top-level positions. Clearing all positions
  is the most internally consistent interpretation of "from scratch"; keeping
  child structure but clearing all child positions is likely the least
  surprising behaviour.
- **Waypoints:** Retaining explicit waypoints honours authored routing intent,
  but a waypoint may no longer make sense after a full relayout. The safest
  first version should retain them and allow lint to report crossings. A future
  `relayout all right` variant could explicitly discard waypoints too, if real
  documents need it.
- **Manual overrides:** This modifier must be documented as replacing all
  positions and endpoint anchors. It should not attempt to guess which values
  were generated versus hand-authored.
- **Failure behaviour:** Invalid `relayout` syntax must be a schema error, not
  silently treated as a normal direction.

## Improving layout authoring guidance

The current advice to begin with full automatic layout is right for most
agent-authored diagrams: blindly placing a full graph is a common source of
overlap, poor spacing, and crossing edges.

However, the skill should more clearly promote **constrained auto-layout** for
diagrams where placement itself carries meaning:

- Pin one or two important nodes, such as an external actor at the left, a
  system boundary, or a final durable store.
- Set an anchor only when it conveys a relationship the engine cannot infer,
  especially a feedback edge or intentional side branch.
- Leave all other node positions and edge anchors absent, so layout fills the
  remaining graph around those constraints.

This would have helped the architecture document. I could have pinned the
reader-facing output and source nodes, then let the engine arrange the core and
UI modules between them. It would not have removed the need for browser review,
but it would provide a better middle ground than either fully blind layout or
fully manual coordinates.

Suggested skill wording:

> Start with automatic layout. Add manual positions only for one or two nodes
> whose placement communicates meaning; leave the rest and their ordinary
> connectors unspecified so the engine can place them around those constraints.
> Use a deliberate anchor or waypoint only for a relationship whose route is
> itself meaningful.

Implemented in the skill and reference: constrained auto-layout guidance now
states the default node size (`190` by `80`), stage gap (`120`), sibling gap
(`60`), grid alignment recommendation, and the practical right-flowing
placement budget (`190 + 120 = 310`).

## Prioritized improvement backlog

1. **Add edge-label clearance checks and guidance.** Introduce an
   `edge-label-overlap` warning and document explicit multiline labels. This is
   the smallest high-value improvement for agent-authored diagrams.
2. **Improve layered coordinate assignment.** Align nodes with connected
   neighbours after stage ordering, then preserve sibling spacing and collision
   clearance. This removes unnecessary dog-legs from main flows through
   branching diagrams.
3. **Add the one-shot `layout: relayout <direction>` modifier.** Give agents a
   source-only way to intentionally regenerate an already baked diagram without
   depending on repository tooling or an unsafe end-user action.
4. **Refine route-style choice for ambiguous corridors.** Prefer a baked
   `route: curved` only for opposing or otherwise ambiguous overlaps, while
   retaining orthogonal routing as the ordinary default.
5. **Add an example for constrained auto-layout.** Demonstrate one or two
   pinned nodes, automatically placed surrounding nodes, an explicit multiline
   edge label, and a controlled feedback edge.
6. **Improve browser-only review guidance.** Make headless Chromium (Route 2)
   a first-class fallback and document machine-readable runtime lint handling.
7. **Make lint findings source-addressable.** Report the diagram id plus the
   relevant node, edge, or source line/range, so an agent or a person can go
   directly from a visual warning to its canonical Markdown/YAML.
8. **Add accessible diagram descriptions.** Let authors provide a concise
   diagram-level text alternative that becomes the SVG accessible name or
   description, rather than using the generic “Architecture diagram” label.
9. **Reduce default diagram-toolbar visual weight.** Keep controls keyboard and
   pointer accessible, but show a quieter toolbar until its diagram is hovered
   or focused so finished technical documents read as documents before tools.

### Detail and rationale

- Improve coordinate assignment after stage ordering. The current whole-graph
  layout centres each stage across the largest stage extent. That is
  deterministic and avoids overlap, but a node on the main path through a
  branch can be offset from both its predecessor and successor, producing
  unnecessary orthogonal dog-legs. After assigning stages and order, place each
  node as close as possible to the median/barycentre of its connected neighbours
  in adjacent stages, then resolve sibling spacing and collisions. In the
  architecture diagram, this would keep `BrowserRuntime -> HTML and SVG
  renderers -> Interactive document` on one horizontal lane and move the editor
  branch away from that lane. This is the coordinate-assignment portion of a
  layered/Sugiyama layout, rather than a change to stage assignment or crossing
  minimisation.
- Treat edge labels as part of visual geometry. The current renderer places each
  label at the route midpoint, but the visual lint does not test the label's
  bounds against nodes, other labels, or nearby route segments. Add an
  `edge-label-overlap` warning and choose among deterministic candidate label
  positions around the longest clear route segment. A label that cannot be
  placed clearly should remain visible and receive a warning rather than being
  silently hidden.
- Preserve author control of edge-label density. Multiline edge labels use a
  YAML literal block scalar. The skill should recommend a newline at a meaningful
  phrase boundary for a long label on a short connector, for example:
  ```yaml
  label: |+
    rendered DOM
    and SVG
  ```
  The renderer may eventually wrap labels automatically, but automatic wrapping should be a
  visual convenience only: it must not silently rewrite the semantic source or
  create a mismatch between the source and the exported diagram.
- Prefer a curved route for a deliberate feedback edge or when an orthogonal
  return edge would share a corridor with an opposing connector. Keep
  orthogonal as the normal default: automatically converting every crossing is
  too broad and may make ordinary branching diagrams less legible. A useful
  later router enhancement would score competing route styles only for
  same-corridor, opposite-direction overlaps, prefer a clear curve when it
  reduces ambiguity, and retain orthogonal routes otherwise. Any automatic
  route-style choice should be baked to explicit canonical YAML so it can be
  reviewed and edited.
- Add an example document that deliberately demonstrates a pinned node, an
  auto-positioned remainder, and a controlled feedback edge. This makes the
  mixed-authoring strategy concrete for both agents and humans.
- Add a lightweight visual-density warning based on the diagram's fitted scale
  or viewport clipping. Geometry lint cannot detect a diagram that is valid but
  too small to comfortably read in its default frame.
- Document Route 2 as a first-class fallback, including recommended Chromium,
  Edge, Brave, and Chrome path discovery patterns by platform, the required
  virtual-time budget, and safe extraction of both returned templates.
- Consider machine-readable lint output in the runtime report documentation so
  browser-automation agents can make deterministic decisions from warnings.
- Include precise source locations in lint reports. Current messages identify a
  diagram id and, in many cases, node ids, but do not include the canonical
  source line/range or an edge index. A `location` object such as `{ diagramId,
  nodeId, edgeIndex, startLine, endLine }` would let the source editor select
  the problem immediately and let browser-automation agents patch the minimal
  relevant YAML. Keep the existing human-readable message unchanged.
- Give each diagram an optional concise `description` field and map it to the
  rendered SVG's accessible name or description. Current flowchart and
  sequence SVGs carry generic names, which are insufficient when a screen
  reader user encounters several figures. Nearby prose remains essential for
  explanation; this field should identify the diagram's purpose and main
  relationship, for example “Skryb’s canonical-source render and edit loop.”
  It must be schema-validated and included in standalone SVG export.
- Make the diagram toolbar visually quiet in reading mode. The permanent
  zoom/export/edit controls take prominent space above every diagram, including
  in screenshots and exported-looking documents. Use opacity or a compact
  affordance until the diagram is hovered or receives keyboard focus, while
  preserving visible focus indicators and an always-available keyboard path.
  This is presentation-only: it must not hide controls during editing or
  expanded-diagram mode, and print output should remain tool-free.
- Keep no repository-only commands in the portable-document skill. If
  maintainers need those commands documented, place them in contributor or
  developer documentation instead.
