import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import * as core from "../../dist/skryb-core.mjs";

const testDirectory = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

export { assert, core, fs, path, test, testDirectory };
