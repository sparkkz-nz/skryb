# Examples

The first two examples exercise the same complete document while demonstrating
the two supported runtime distribution models.

- [web-runtime.html](web-runtime.html) loads the shareable latest runtime URL.
  Open it directly in a browser when you have network access.
- [file-runtime.html](file-runtime.html) loads
  `../dist/skryb-runtime-self-packaged.js`. Run `npm run build` first, then open
  it from this repository so that the relative runtime path resolves. Its
  packaged source lets **Save for Offline** work without a network request.
- [skryb-codebase-architecture.html](skryb-codebase-architecture.html) is a
  portable technical architecture document with flowchart and sequence diagrams.
  It loads the shareable latest runtime URL.
- [constrained-relayout.html](constrained-relayout.html) demonstrates pinned
  constraints, automatically placed neighbours, a multiline connector label,
  controlled feedback routing, and the confirmation-gated relayout action.
- [diagram-navigation.html](diagram-navigation.html) demonstrates node links to
  detail diagrams and headings, plus ordinary Markdown return links.
- [annotation-references.html](annotation-references.html) demonstrates node,
  connector, and sequence-message badges with matching prose references.

The navigation and annotation examples require the next runtime release. They
load `../dist/skryb-runtime-self-packaged.js`; run `npm run build` first.
The built runtime also supports background double-click expansion and
click-to-activate wheel controls. Click or Tab into a diagram to pan or zoom
with the wheel; click outside to resume document scrolling. These features
are not yet available in published `latest` or an existing pinned release.

All documents preserve their canonical Markdown and diagram YAML in
`template#source`. Use **Save As** to retain a hosted runtime in a downloaded
copy, or **Save for Offline** to embed the runtime in a self-contained copy.
