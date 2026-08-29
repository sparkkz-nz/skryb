import { build } from "esbuild";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { reportArtifactSizes } from "./runtime-artifact-sizes.mjs";

const entryPoint = process.env.RENDER_RUNTIME_ENTRY ?? "src/index.ts";
const hostedRuntimePath = "dist/skryb-runtime.js";
const selfPackagedRuntimePath = "dist/skryb-runtime-self-packaged.js";

// Kept in the bundle so offline copies carry attribution with them.
const licenseBanner =
  "/*! Skryb runtime | Copyright 2026 Stuart Parkinson | Apache-2.0 | https://github.com/sparkkz-nz/skryb */";

await Promise.all([
  rm("dist/render-runtime.js", { force: true }),
  rm(hostedRuntimePath, { force: true }),
  rm(selfPackagedRuntimePath, { force: true })
]);
await mkdir("dist", { recursive: true });

const result = await build({
  banner: { js: licenseBanner },
  bundle: true,
  entryPoints: [entryPoint],
  format: "iife",
  legalComments: "none",
  minify: true,
  outfile: hostedRuntimePath,
  platform: "browser",
  target: ["es2020"],
  write: false
});

const runtimeSource = result.outputFiles[0].text;
await Promise.all([
  writeFile(hostedRuntimePath, runtimeSource),
  writeFile(
    selfPackagedRuntimePath,
    `${runtimeSource}globalThis.DocDiagramRuntimeSource=${JSON.stringify(runtimeSource)};\n`
  )
]);

await reportArtifactSizes();
