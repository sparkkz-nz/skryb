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
const files = args.filter((argument) => !argument.startsWith("--"));

if (!files.length) {
  console.error("Usage: node scripts/lint.mjs <document.html|document.md>... [--errors]");
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

for (const file of files) {
  let result;
  try {
    result = lintDocument(readDocumentSource(file));
  } catch (error) {
    console.error(`${file}: ${error.message}`);
    errorTotal += 1;
    continue;
  }

  const reported = errorsOnly
    ? result.messages.filter((message) => message.severity === "error")
    : result.messages;
  for (const message of reported) {
    const location = message.diagram ? `${file}:${message.diagram}` : file;
    console.log(`${location}: ${message.severity}: ${message.message} (${message.rule})`);
  }

  errorTotal += result.errorCount;
  warningTotal += errorsOnly ? 0 : result.warningCount;
}

const summary = errorsOnly
  ? `${errorTotal} error${errorTotal === 1 ? "" : "s"}`
  : `${errorTotal} error${errorTotal === 1 ? "" : "s"}, ${warningTotal} warning${warningTotal === 1 ? "" : "s"}`;
console.log(summary);

// Warnings are advisory, so a generated document is never blocked on aesthetics.
process.exit(errorTotal ? 1 : 0);
