# Skryb improvement plan

This is the durable implementation plan for the next phase of Skryb. It turns
the architectural review and the proposals in `improvements.md` into a sequence
of independently reviewable changes. Update this file as decisions are made and
pull requests merge; do not use it as a release changelog.

## Working agreement

Each work session owns one coherent block below and ends with a pull request.
Do not stack new work on a previous session branch.

At the start of every session:

1. Fetch `origin` and inspect the current branch and related pull request.
2. If the previous pull request has merged, switch to `main`, pull it with
   `--ff-only`, and verify that the working tree is clean.
3. Create a new branch from that updated `main`.
4. Re-read this plan and mark the selected block **In progress** in the branch.
5. Implement only that block and any tightly coupled fixes it requires.
6. Run the smallest relevant checks, then the full existing checks before the
   pull request when the runtime or document format changed.
7. Update this plan with decisions, measurements, and the block's final status.
8. Commit, push, and open a pull request. The branch is not reused after merge.

A block may be split into smaller pull requests if investigation shows that it
cannot remain easy to review. Later blocks may be reordered when measurements or
user feedback justify it, but the dependency order recorded here should be
preserved.

### Status values

- **Planned**: ready when its dependencies are complete.
- **In progress**: owned by the current session and branch.
- **Blocked**: cannot proceed; record the reason and decision needed.
- **Complete**: merged to `main`; record the pull request and key result.

## Baseline

The review established this starting point:

- Type checking passes.
- All 268 tests pass.
- Repository examples, templates, and generated documentation lint with no
  errors or warnings.
- The runtime has no production dependencies.
- The generated runtime is 407,836 bytes raw and about 113,000 bytes gzip.
- Runtime code without its embedded second copy is 199,638 bytes raw and about
  56,000 bytes gzip.
- Large-flowchart linting scales poorly: an indicative benchmark took about
  0.55 seconds for 100 nodes, 7.7 seconds for 250 nodes, and 71 seconds for 500
  nodes.

Re-measure these values in the relevant blocks rather than treating them as
permanent targets.

## Block 1 — Runtime artifact split and size budgets

**Status:** Complete
**Pull request:** [#67](https://github.com/sparkkz-nz/skryb/pull/67)
**Suggested branch:** `perf/runtime-artifact-split`  
**Dependencies:** None

### Goal

Stop every hosted reader downloading a second encoded copy of the runtime while
preserving deliberate local and offline workflows.

### Work

- Produce a lean hosted runtime without `DocDiagramRuntimeSource`.
- Produce an explicitly named self-packaged runtime for local distribution and
  offline export without network access.
- Keep hosted-runtime offline export working by fetching and embedding the
  selected runtime.
- Update publication, templates, contributor documentation, and the authoring
  skill wherever artifact selection is user-visible.
- Report raw, gzip, and Brotli sizes during the build.
- Add CI budgets for both artifacts, with a documented process for intentional
  increases.

### Acceptance

- The hosted artifact is approximately 200 KB raw and no more than 60 KB gzip,
  subject to a freshly recorded baseline.
- Hosted and self-packaged runtimes produce equivalent offline documents.
- A local `file:` document has a documented, tested self-packaged route.
- Existing document rendering and export tests pass.

### Implementation result

Recorded on 2026-08-30 for `perf/runtime-artifact-split`:

- The hosted artifact is 199,901 bytes raw, 56,398 bytes gzip, and 48,554
  bytes Brotli.
- The self-packaged artifact is 408,155 bytes raw, 113,165 bytes gzip, and
  58,525 bytes Brotli.
- CI budgets are 205,000/60,000/52,000 bytes for hosted raw/gzip/Brotli and
  415,000/118,000/62,000 bytes for self-packaged raw/gzip/Brotli.
- The self-packaged artifact embeds the exact hosted artifact source. Focused
  equivalence and local `file:` route tests pass, as do the full type, test,
  artifact-budget, and document-lint checks.

## Block 2 — Flowchart index and performance regression coverage

**Status:** Complete
**Pull request:** [#68](https://github.com/sparkkz-nz/skryb/pull/68)
**Suggested branch:** `perf/flowchart-index`  
**Dependencies:** None

### Goal

Remove repeated full hierarchy traversal from rendering, linting, routing, and
mutation operations.

### Work

- Introduce a per-operation `FlowchartIndex` with stable traversal order,
  node-ID and object-identity lookup, absolute position and bounds, parent,
  ancestors, and descendants or an equivalent constant-time relationship test.
- Build the index once per render, lint, layout, or mutation transaction and
  pass it through the operation.
- Remove complete hierarchy flattening from nested node-pair, edge, obstacle,
  and placement loops.
- Add deterministic performance fixtures for representative flat and nested
  flowcharts.
- Add a benchmark command or test that has stable, generous thresholds suitable
  for CI; avoid assertions based on sub-millisecond timing.

### Acceptance

- Linting a 500-node linear fixture completes in seconds rather than more than a
  minute on the development baseline.
- Warning content and order remain deterministic.
- Nested-node absolute positions and containment behavior remain unchanged.
- Existing tests pass and focused index tests cover invalidation boundaries.

### Implementation result

Recorded on 2026-08-30 for `perf/flowchart-index`:

- A per-operation `FlowchartIndex` preserves pre-order traversal while providing
  node-ID, object-identity, absolute position, bounds, parent, descendant, and
  constant-time containment lookups.
- Rendering, linting, final layout anchor derivation, mutation placement, and
  editor interaction loops reuse indexed entries rather than repeatedly walking
  the hierarchy.
- The deterministic 500-node flat and nested lint fixtures complete in
  approximately 0.22 and 0.20 seconds respectively on the development baseline,
  each with a generous 10-second CI budget.
- Flat and nested fixtures verify deterministic warning content and order, and
  focused tests document that an index is a snapshot rebuilt after mutation.

## Block 3 — Direct core entry point and test/tool boundaries

**Status:** Complete
**Pull request:** [#69](https://github.com/sparkkz-nz/skryb/pull/69)
**Suggested branch:** `refactor/core-entrypoint`  
**Dependencies:** Blocks 1 and 2

### Goal

Let repository tooling and unit tests consume core modules without loading the
complete browser runtime through `node:vm`.

### Work

- Add an internal ESM core entry point for bake, lint, and focused tests.
- Change repository bake and lint scripts to import the core entry directly.
- Retain a small built-bundle smoke suite for the actual browser artifact.
- Decide whether `DocDiagramCore` is public. Document and version a small public
  surface if it is; otherwise reduce it to the minimum compatibility surface.
- Split the monolithic test file by document, Markdown, parsing, layout,
  routing, lint, rendering, editor, and offline-export responsibilities without
  changing behavior.

### Acceptance

- Most core tests run without DOM stubs or the generated browser bundle.
- Bake and lint do not depend on `BrowserRuntime.getCoreApi()`.
- Built artifacts still receive direct smoke coverage.
- Test count and behavioral coverage do not regress.

### Implementation result

Recorded on 2026-08-30 for `refactor/core-entrypoint`:

- The build emits an internal `dist/skryb-core.mjs` ESM entry point for repository
  tooling and focused tests; it is not published with the browser artifacts.
- Bake and lint import the core module directly and no longer evaluate the
  browser bundle in a VM with a stub document.
- The 274-test monolith is split into responsibility-focused document,
  Markdown, parsing/editor, layout, routing, lint, rendering, highlighting,
  baking, offline-export, and browser-runtime suites.
- Focused suites import the ESM core directly. Browser VM execution remains only
  in the artifact/offline smoke suite, which executes hosted, self-packaged, and
  embedded runtime forms.
- `DocDiagramCore` remains an undocumented compatibility object limited to
  `bakeDocumentSource`, `spliceBakedFences`, and `lintDocument`.

## Block 4 — Strong validated domain types

**Status:** Complete
**Pull request:** [#70](https://github.com/sparkkz-nz/skryb/pull/70)
**Suggested branch:** `refactor/validated-domain-types`
**Dependencies:** Block 3

### Goal

Make invalid schema enum values unrepresentable after parsing.

### Work

- Derive shape, anchor, route, marker, layout-direction, theme, participant-kind,
  and message-style unions from their existing constant arrays.
- Separate untrusted parser input from validated domain models and serialized
  output where this improves guarantees.
- Remove broad index signatures from validated models unless an explicit
  extension mechanism requires them.
- Keep runtime validation at every external boundary.

### Acceptance

- Validated models cannot compile with unsupported enum values.
- Constant lists remain the single source of truth.
- Parser error behavior and serialized documents remain compatible.

## Block 5 — Browser runtime decomposition

**Status:** In progress
**Pull request:** [#71](https://github.com/sparkkz-nz/skryb/pull/71)
**Suggested branch:** `refactor/browser-runtime-services`  
**Dependencies:** Blocks 3 and 4

### Goal

Reduce `BrowserRuntime` to orchestration and browser adaptation rather than
rendering, persistence, export, chrome, and lifecycle ownership.

### Work

Extract responsibilities incrementally, beginning with the clearest pure
boundaries:

1. `DocumentSession` for canonical source, baking, persistence, and dirty state.
2. `DocumentExportService` for Save As, offline export, SVG export, and print
   preparation.
3. `DocumentRenderer` for resolved document-to-markup coordination.
4. Toolbar/chrome and browser lifecycle adapters.

Do not redesign the interface in this block. Avoid a generic plugin framework;
small typed interfaces are sufficient.

### Acceptance

- Document and export behavior is independently testable.
- Browser orchestration mainly coordinates explicit services.
- No document-format or visible interaction changes occur.
- Existing browser-level tests pass.

### Implementation result

Recorded on 2026-08-30 for `refactor/browser-runtime-services`:

- `DocumentSession` owns canonical and saved source, baking, diagram persistence,
  and dirty-state decisions behind a source-store boundary.
- `DocumentRenderer` coordinates validated source-to-markup state transitions and
  restores the last valid state when an editor draft cannot be rendered.
- `DocumentExportService` owns clean document copies, Save As and offline output,
  SVG preparation and download, diagram documents, and print preparation.
- `BrowserLifecycle` and `BrowserChrome` isolate global event binding, shortcuts,
  browser dismissal behavior, page theming, menu state, and toolbar docking.
- `BrowserRuntime` is reduced from 1,254 to 852 lines and primarily coordinates
  the extracted services with the existing source and diagram editors.
- Four focused service tests cover session dirty state and baking plus renderer
  success and rollback behavior. All 280 tests, type checks, and both runtime
  artifact budgets pass without document-format or visible interaction changes.

## Block 6 — Source-addressable lint model

**Status:** Planned  
**Suggested branch:** `feat/source-addressable-lint`  
**Dependencies:** Blocks 2 through 4

### Goal

Give people, the source editor, and automation a stable route from a lint
finding to the relevant canonical source.

### Work

- Add structured locations without removing existing human-readable messages.
- Represent the diagram ID and fence range plus the relevant node ID, edge
  index or stable edge identity, and source line/range when known.
- Update machine-readable lint templates and CLI output.
- Let the source editor select or reveal the finding's source.
- Document the JSON contract and stale `sourceHash` handling.

### Acceptance

- Every geometry warning identifies its diagram and subject.
- CLI output is directly navigable where a line is available.
- Existing consumers of message text continue to work.
- Location tests cover referenced definitions, block quotes, CRLF, and diagrams
  without IDs.

## Block 7 — Edge-label placement and clearance lint

**Status:** Planned  
**Suggested branch:** `feat/edge-label-clearance`  
**Dependencies:** Blocks 2 and 6

### Goal

Treat edge labels as visual geometry and report labels that cannot be placed
clearly.

### Work

- Compute deterministic label bounds from the exact rendered text layout.
- Try candidate positions around the longest clear route segments.
- Check candidates against unrelated nodes, other labels, and nearby unrelated
  edge segments.
- Keep a visible label at the deterministic fallback when none is clear and emit
  `edge-label-overlap` rather than silently hiding it.
- Document canonical multiline labels using YAML literal block scalars. Remove
  stale guidance that presents quoted `\n` values as the preferred form.

### Acceptance

- Rendering and lint share the same selected label geometry.
- Candidate selection is deterministic across opens.
- Focused fixtures cover node, label, and route conflicts plus multiline labels.
- Warnings include source-addressable subjects.

## Block 8 — Accessible diagram descriptions

**Status:** Planned  
**Suggested branch:** `feat/diagram-descriptions`  
**Dependencies:** Block 4

### Goal

Replace generic accessible names with an author-provided concise description of
each diagram's purpose and primary relationship.

### Work

- Add an optional, schema-validated diagram `description` field.
- Map it to SVG `title`/`desc` and correct accessible relationships.
- Preserve it in standalone SVG and diagram-document exports.
- Update the reference, skill, examples, and accessibility tests.
- Keep nearby prose as the expected full explanation; the field is not a place
  for a complete transcript of the diagram.

### Acceptance

- Multiple diagrams on a page have distinct useful accessible descriptions.
- Exported SVGs retain the description.
- Documents without the field retain a sensible compatibility fallback.

## Block 9 — Balanced aspect-ratio lint and wrapped linear layout

**Status:** Planned  
**Suggested branch:** `feat/balanced-diagram-layout`  
**Dependencies:** Blocks 2, 6, and the coordinate work in Block 10 may be
implemented first if investigation shows it is required

### Goal

Detect diagrams whose content forms a very long, narrow horizontal or vertical
strip and provide a safe, explicit way to re-layout a substantially linear flow
as shorter rows or columns with readable connectors.

### Design principles

- Diagnose fitted **content bounds**, not the authored canvas dimensions; empty
  canvas space must not hide an unbalanced diagram.
- Use both aspect ratio and graph structure. A wide architecture map should not
  be treated as a linear flow merely because it is wide.
- Do not silently rewrite a complete authored diagram during ordinary opening.
- Preserve semantic traversal order and make every generated choice
  deterministic and reviewable in canonical source.
- Prefer an opt-in fix or one-shot relayout over an irreversible automatic
  change.
- Keep connector direction legible at row or column turns; avoid a serpentine
  route whose visual reading order is ambiguous.

### Investigation and decision record

Before fixing, record fixtures and choose defaults for:

- Fitted aspect-ratio threshold, with separate consideration for horizontal and
  vertical flows.
- Minimum node count and minimum dominant path length.
- A linearity score based on the dominant path, degree distribution, branching,
  cycles, and proportion of nodes represented by that path.
- Target row/column count or target aspect ratio.
- Whether wrapping is expressed as expanded layout settings, a one-shot relayout
  modifier, or an editor/CLI fix that bakes ordinary positions. Do not add
  multiple overlapping syntax forms.
- Treatment of pinned nodes, containers, waypoints, deliberate back-edges, and
  manually authored anchors.

### Work

1. Add an `unbalanced-aspect-ratio` advisory lint rule that reports fitted
   width, height, ratio, dominant direction, and why the graph was considered
   sufficiently linear.
2. Include a source-addressable suggested action, but never mutate source from
   lint alone.
3. Add a deterministic wrapped-layout strategy:
   - horizontal flows become a bounded set of shorter rows;
   - vertical flows become a bounded set of shorter columns;
   - nodes retain path order;
   - branch nodes remain near their attachment stage;
   - row/column transitions receive explicit anchors and routes;
   - return connectors travel outside occupied rows/columns rather than through
     nodes;
   - grid snapping and configured gaps remain authoritative.
4. Expose the strategy through the single explicit fix mechanism chosen in the
   investigation. Bake the resulting positions, anchors, waypoints, and any
   non-default routes into canonical YAML.
5. Show a before/after preview and require confirmation in the editor if the fix
   would discard hand tuning. CLI or source-only use must be explicitly invoked.
6. Add authoring guidance and a constrained example for a long linear flow.
7. Add a performance guard so detection and wrapping do not reintroduce repeated
   graph traversal.

### Acceptance

- A long linear horizontal and vertical fixture each trigger the warning.
- Balanced flows, intentional wide maps, branching trees, and small diagrams do
  not trigger it under the recorded defaults.
- Wrapped results meet the chosen target aspect range or document why a hard
  constraint prevented it.
- Consecutive path edges remain easy to follow across row/column transitions and
  do not cross unrelated nodes.
- Running the fix twice is idempotent.
- Opening an already complete diagram without choosing the fix is byte-for-byte
  non-destructive.
- Layout is deterministic, source-addressable, grid-aligned, and covered by
  geometry and performance tests.

## Block 10 — Layered coordinate assignment quality

**Status:** Planned  
**Suggested branch:** `feat/layered-coordinate-assignment`  
**Dependencies:** Blocks 2 and 4

### Goal

Remove unnecessary connector dog-legs after stage ordering while preserving
stable order, spacing, and collision clearance.

### Work

- Align nodes toward the median or barycentre of connected neighbours in
  adjacent stages.
- Preserve source-order tie breaking and existing crossing-reduction order.
- Resolve sibling spacing and collisions after alignment.
- Snap final coordinates to the diagram grid.
- Use fixture-based geometry assertions for representative paths, branches,
  joins, pinned nodes, containers, and all four directions.

### Acceptance

- Main paths through branching diagrams form a visibly coherent lane.
- Crossing count does not regress in the accepted fixtures.
- Layout remains deterministic and respects author-pinned positions.

## Block 11 — One-shot relayout and constrained-layout example

**Status:** Planned  
**Suggested branch:** `feat/one-shot-relayout`  
**Dependencies:** Blocks 9 and 10

### Goal

Provide an intentional, source-only way to regenerate an already baked diagram
using the improved layout without making ordinary opens destructive.

### Work

- Define one one-shot relayout syntax, including how balanced/wrapped layout is
  requested if Block 9 uses the same mechanism.
- Specify which positions, anchors, waypoints, sizes, and pinned constraints are
  preserved or cleared.
- Consume the modifier during baking and serialize back to ordinary persistent
  layout settings so it cannot repeat on the next open.
- Require confirmation for an equivalent editor action.
- Add an example with pinned nodes, automatically placed neighbours, a literal
  multiline edge label, a controlled feedback edge, and auto canvas bounds.

### Acceptance

- Relayout runs exactly once and is idempotent after serialization.
- Ordinary opening never discards hand-tuned geometry.
- Browser, headless, and repository bake routes produce the same result.

## Block 12 — Later routing, density, UI, and CI refinements

**Status:** Planned  
**Suggested branches:** one focused branch and pull request per item  
**Dependencies:** Relevant earlier blocks

These remain deliberately separate and should be prioritized using observed
usage after the preceding work:

- Score route styles only for ambiguous or opposing shared corridors, retaining
  orthogonal routing as the default.
- Add visual-density lint based on fitted scale or viewport clipping.
- Reduce diagram-toolbar visual weight in reading mode while retaining visible
  focus, keyboard access, editing visibility, and tool-free printing.
- Add platform-specific headless browser discovery guidance if support requests
  show it is needed.
- Split read-only branch/PR checks from privileged GitHub Pages publication;
  publish `main` and tags automatically and make the shared `dev` channel
  explicit or manual.

## Cross-cutting rules

Every block must preserve these properties:

- Canonical Markdown/YAML remains the source of truth.
- Opening a complete document is non-destructive unless the author explicitly
  requested a one-shot transformation.
- Parsing and rendering remain deterministic.
- No production dependency is added without a measured size and maintenance
  justification.
- New format fields are schema-validated, serialized canonically, documented in
  the reference and skill, and covered by compatibility tests.
- Geometry used by lint and rendering comes from shared calculations rather
  than parallel approximations.
- Warnings remain advisory; schema and invisible-data-loss failures remain
  errors.
- Accessibility and standalone exports are part of feature acceptance, not
  follow-up work.

## Completion log

Record merged work here in chronological order.

| Block | Status | Pull request | Result |
|---|---|---|---|
| 1 | Complete | [#67](https://github.com/sparkkz-nz/skryb/pull/67) | Split lean hosted and self-packaged runtime artifacts with enforced size budgets. |
| 2 | In progress | [#68](https://github.com/sparkkz-nz/skryb/pull/68) | Added a reusable hierarchy index and reduced 500-node linting to approximately 0.22 seconds. |
| 3 | Planned | — | — |
| 4 | In progress | [#70](https://github.com/sparkkz-nz/skryb/pull/70) | Derived validated unions from schema constants, removed broad model index signatures, and guarded parser and editor boundaries. |
| 5 | Planned | — | — |
| 6 | Planned | — | — |
| 7 | Planned | — | — |
| 8 | Planned | — | — |
| 9 | Planned | — | — |
| 10 | Planned | — | — |
| 11 | Planned | — | — |
| 12 | Planned | — | — |
