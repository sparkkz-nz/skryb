// Runs the runtime's own lint rules headlessly, so a generated document can be checked without a
// browser. Repository tooling imports the internal ESM core directly instead of evaluating the
// browser runtime.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");

const args = process.argv.slice(2);
const errorsOnly = args.includes("--errors");
const jsonOutput = args.includes("--json");
const fixBalanced = args.includes("--fix-balanced");
const files = args.filter((argument) => !argument.startsWith("--"));

if (!files.length) {
  console.error("Usage: node scripts/lint.mjs <document.html|document.md>... [--errors] [--json] [--fix-balanced]");
  process.exit(2);
}

const corePath = path.join(repositoryRoot, "dist", "skryb-core.mjs");
if (!fs.existsSync(corePath)) {
  console.error(`Core module not found at ${corePath}. Run "npm run build" first.`);
  process.exit(2);
}

const { balanceDocumentDiagram, lintDocument } = await import(pathToFileURL(corePath));
const templatePattern = /(<template id="source"[^>]*>)([\s\S]*?)(<\/template>)/;
const handledEntities = ["&lt;", "&gt;", "&quot;", "&#39;", "&amp;"];
const anyEntityPattern = /&(?:#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g;

function unescapeSource(source) {
  return source
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&");
}

function escapeSource(source) {
  return source.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function assertRoundTrippable(lines) {
  for (const line of lines) {
    const offending = (line.match(anyEntityPattern) || []).find((entity) => !handledEntities.includes(entity));
    if (offending) {
      throw new Error(
        `a diagram fence contains ${offending}, which cannot be rewritten safely. Replace it with ` +
        "the character it stands for before applying the wrapped layout."
      );
    }
  }
}

function readDocument(filePath) {
  const contents = fs.readFileSync(filePath, "utf8");
  const template = contents.match(templatePattern);
  return {
    contents,
    source: template ? unescapeSource(template[2]) : contents,
    write(source) {
      if (!template) {
        fs.writeFileSync(filePath, source);
        return;
      }
      const before = unescapeSource(template[2]).split("\n");
      const after = source.split("\n");
      let start = 0;
      while (start < before.length && start < after.length && before[start] === after[start]) start += 1;
      let beforeEnd = before.length;
      let afterEnd = after.length;
      while (beforeEnd > start && afterEnd > start && before[beforeEnd - 1] === after[afterEnd - 1]) {
        beforeEnd -= 1;
        afterEnd -= 1;
      }
      const raw = template[2].split("\n");
      assertRoundTrippable(raw.slice(start, beforeEnd));
      raw.splice(start, beforeEnd - start, ...after.slice(start, afterEnd).map(escapeSource));
      fs.writeFileSync(filePath, contents.replace(templatePattern, () => `${template[1]}${raw.join("\n")}${template[3]}`));
    }
  };
}

let errorTotal = 0;
let warningTotal = 0;
const documents = [];

for (const file of files) {
  let result;
  try {
    const document = readDocument(file);
    let source = document.source;
    result = lintDocument(source);
    if (fixBalanced) {
      const diagramIndexes = result.messages
        .flatMap((message) => message.suggestedAction?.id === "wrap-linear-flow"
          ? [message.suggestedAction.diagramIndex]
          : []);
      for (const diagramIndex of diagramIndexes) {
        source = balanceDocumentDiagram(source, diagramIndex).source;
      }
      if (source !== document.source) {
        document.write(source);
        console.log(`${file}: applied wrapped layout to ${diagramIndexes.length} diagram${diagramIndexes.length === 1 ? "" : "s"}`);
        result = lintDocument(source);
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    result = {
      sourceHash: null,
      messages: [{ severity: "error", rule: "schema", message }],
      errorCount: 1,
      warningCount: 0
    };
  }

  const reported = errorsOnly
    ? result.messages.filter((message) => message.severity === "error")
    : result.messages;
  documents.push({
    file,
    sourceHash: result.sourceHash,
    errors: result.errorCount,
    warnings: errorsOnly ? 0 : result.warningCount,
    messages: reported
  });
  if (!jsonOutput) {
    for (const message of reported) {
      const subjectRange = message.location?.subjects?.find((subject) => subject.sourceRange)?.sourceRange;
      const point = subjectRange?.start || message.location?.fenceRange?.start;
      const location = point ? `${file}:${point.line}:${point.column}` : file;
      console.log(`${location}: ${message.severity}: ${message.message} (${message.rule})`);
    }
  }

  errorTotal += result.errorCount;
  warningTotal += errorsOnly ? 0 : result.warningCount;
}

if (jsonOutput) {
  console.log(JSON.stringify({
    errors: errorTotal,
    warnings: warningTotal,
    documents
  }, null, 2));
} else {
  const summary = errorsOnly
    ? `${errorTotal} error${errorTotal === 1 ? "" : "s"}`
    : `${errorTotal} error${errorTotal === 1 ? "" : "s"}, ${warningTotal} warning${warningTotal === 1 ? "" : "s"}`;
  console.log(summary);
}

// Warnings are advisory, so a generated document is never blocked on aesthetics.
process.exit(errorTotal ? 1 : 0);
