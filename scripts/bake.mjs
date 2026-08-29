// Writes the layout engine's positions and anchors back into a document's own source, so an author
// working on the file rather than in the browser has real coordinates to adjust. The bundle is
// loaded into a `vm` with a stubbed `document`, the same way the lint command and the render tests
// exercise it, which keeps one implementation of the bake behind both entry points.
//
// This is the step that closes the gap between what a positionless document renders as and what its
// source says: author, bake, lint, adjust the numbers, lint again.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");

const args = process.argv.slice(2);
const check = args.includes("--check");
const files = args.filter((argument) => !argument.startsWith("--"));

if (!files.length) {
  console.error("Usage: node scripts/bake.mjs <document.html|document.md>... [--check]");
  process.exit(2);
}

const runtimePath = path.join(repositoryRoot, "dist", "skryb-runtime.js");
if (!fs.existsSync(runtimePath)) {
  console.error(`Runtime bundle not found at ${runtimePath}. Run "npm run build" first.`);
  process.exit(2);
}

const context = vm.createContext({ document: { querySelector: () => null }, globalThis: {} });
vm.runInContext(fs.readFileSync(runtimePath, "utf8"), context, { filename: "dist/skryb-runtime.js" });
const { bakeDocumentSource, spliceBakedFences } = context.globalThis.DocDiagramCore;

const templatePattern = /(<template id="source"[^>]*>)([\s\S]*?)(<\/template>)/;

// The runtime reads an embedded source with `textContent`, so the browser has already decoded every
// entity by the time a document parses. Decoding the same way here is what lets the fences parse.
// The set is deliberately short: decoding a numeric entity could introduce a line break, and the
// splice below depends on the decoded text having exactly the lines the encoded text has. Anything
// outside this set is refused rather than guessed at - see `assertRoundTrippable`.
const handledEntities = ["&lt;", "&gt;", "&quot;", "&#39;", "&amp;"];
const anyEntityPattern = /&(?:#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g;

function unescapeSource(text) {
  return text
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&");
}

// Matches how a browser serializes a text node back into the template, so a fence written here and
// a fence saved from the editor escape the same way. It is only ever applied to lines this command
// generates: decoding is lossy across the entities it does not know about, so re-encoding a whole
// document would rewrite parts of it that have nothing to do with any diagram.
function escapeSource(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/**
 * Refuses a fence carrying an entity this command cannot decode and re-encode unchanged. The
 * browser would decode it and this would not, so baking such a fence would either mangle the entity
 * into literal text or, for a numeric line break, write back a diagram that is not the one the
 * document renders. Only the fences being rewritten are checked; nothing else is re-encoded, so the
 * rest of the document's entities are never at risk.
 */
function assertRoundTrippable(lines, fences) {
  for (const fence of fences) {
    for (const line of lines.slice(fence.start, fence.end)) {
      const offending = (line.match(anyEntityPattern) || []).find((entity) => !handledEntities.includes(entity));
      if (offending) {
        throw new Error(
          `a diagram fence contains ${offending}, which cannot be rewritten safely. Replace it with ` +
          "the character it stands for, or remove the diagram's \"layout\" to hand-manage it."
        );
      }
    }
  }
}

/**
 * Bakes a whole file. Entity decoding never moves a line boundary, so the fence line ranges found
 * in the decoded source address the same lines of the still-encoded template, and only those lines
 * are replaced - everything else in the file stays byte for byte as it was.
 */
function bakeFile(contents) {
  const template = contents.match(templatePattern);
  if (!template) {
    const result = bakeDocumentSource(contents);
    return { ...result, contents: result.baked ? result.source : contents };
  }

  const result = bakeDocumentSource(unescapeSource(template[2]));
  if (!result.baked) {
    return { ...result, contents };
  }

  const rawLines = template[2].split("\n");
  assertRoundTrippable(rawLines, result.fences);
  const fences = result.fences.map((fence) => ({ ...fence, lines: fence.lines.map(escapeSource) }));
  const baked = spliceBakedFences(rawLines, fences).join("\n");
  return { ...result, contents: contents.replace(templatePattern, () => `${template[1]}${baked}${template[3]}`) };
}

let failures = 0;
let changed = 0;

for (const file of files) {
  const contents = fs.readFileSync(file, "utf8");
  let result;
  try {
    result = bakeFile(contents);
  } catch (error) {
    console.error(`${file}: ${error.message}`);
    failures += 1;
    continue;
  }

  const diagrams = `${result.baked} baked, ${result.preserved} left alone`;
  if (result.contents === contents) {
    console.log(`${file}: unchanged (${diagrams})`);
    continue;
  }

  changed += 1;
  if (check) {
    console.log(`${file}: would change (${diagrams})`);
    continue;
  }

  fs.writeFileSync(file, result.contents);
  console.log(`${file}: written (${diagrams})`);
}

// `--check` is for a pipeline that wants to know a document was committed already baked.
process.exit(failures || (check && changed) ? 1 : 0);
