import { readFile } from "node:fs/promises";
import { brotliCompressSync, gzipSync } from "node:zlib";

export const runtimeArtifacts = [
  {
    name: "hosted",
    path: "dist/skryb-runtime.js",
    budgets: { raw: 210_000, gzip: 60_000, brotli: 52_000 }
  },
  {
    name: "self-packaged",
    path: "dist/skryb-runtime-self-packaged.js",
    budgets: { raw: 425_000, gzip: 118_000, brotli: 62_000 }
  }
];

export async function measureArtifact(artifact) {
  const source = await readFile(artifact.path);
  return {
    ...artifact,
    sizes: {
      raw: source.byteLength,
      gzip: gzipSync(source).byteLength,
      brotli: brotliCompressSync(source).byteLength
    }
  };
}

export async function reportArtifactSizes() {
  const measurements = await Promise.all(runtimeArtifacts.map(measureArtifact));
  console.log("Runtime artifact sizes (bytes):");
  for (const measurement of measurements) {
    const { raw, gzip, brotli } = measurement.sizes;
    console.log(`  ${measurement.name.padEnd(13)} raw ${String(raw).padStart(7)}  gzip ${String(gzip).padStart(6)}  brotli ${String(brotli).padStart(6)}`);
  }
  return measurements;
}
