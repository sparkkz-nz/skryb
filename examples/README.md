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

All documents preserve their canonical Markdown and diagram YAML in
`template#source`. Use **Save As** to retain a hosted runtime in a downloaded
copy, or **Save for Offline** to embed the runtime in a self-contained copy.
