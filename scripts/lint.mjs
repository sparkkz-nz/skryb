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
const files = args.filter((argument) => !argument.startsWith("--"));

if (!files.length) {
  console.error("Usage: node scripts/lint.mjs <document.html|document.md>... [--errors] [--json]");
  process.exit(2);
}

const corePath = path.join(repositoryRoot, "dist", "skryb-core.mjs");
if (!fs.existsSync(corePath)) {
  console.error(`Core module not found at ${corePath}. Run "npm run build" first.`);
  process.exit(2);
}

const { lintDocument } = await import(pathToFileURL(corePath));

function readDocumentSource(filePath) {
  const contents = fs.readFileSync(filePath, "utf8");
  const template = contents.match(/<template id="source"[^>]*>([\s\S]*?)<\/template>/);
  if (!template) {
    return contents;
  }

  return template[1]
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&");
}

let errorTotal = 0;
let warningTotal = 0;
const documents = [];

for (const file of files) {
  let result;
  try {
    result = lintDocument(readDocumentSource(file));
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
