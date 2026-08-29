import { reportArtifactSizes } from "./runtime-artifact-sizes.mjs";

const measurements = await reportArtifactSizes();
const failures = [];

for (const measurement of measurements) {
  for (const [encoding, budget] of Object.entries(measurement.budgets)) {
    const actual = measurement.sizes[encoding];
    if (actual > budget) {
      failures.push(`${measurement.name} ${encoding}: ${actual} bytes exceeds ${budget} byte budget`);
    }
  }
}

if (failures.length > 0) {
  console.error("Runtime artifact size budget exceeded:");
  for (const failure of failures) {
    console.error(`  ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log("Runtime artifact size budgets passed.");
}
