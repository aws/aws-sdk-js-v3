import assert from "node:assert";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const webpackDist = {
  name: "webpack",
  content: fs.readFileSync(path.join(__dirname, "dist", "webpack-dist.js"), "utf-8"),
};
const viteDist = {
  name: "vite",
  content: fs.readFileSync(path.join(__dirname, "dist", "vite-dist.js"), "utf-8"),
};
const esbuildDist = {
  name: "esbuild",
  content: fs.readFileSync(path.join(__dirname, "dist", "esbuild-dist.js"), "utf-8"),
};

for (const { content: fileContents, name } of [webpackDist, viteDist, esbuildDist]) {
  console.log("================", name, "================");

  const contentSize = fileContents.replaceAll(/\s+/g, "").length;
  const callsToClassBuilder = fileContents.match(/\.classBuilder\(\)/g) || [];
  const runtimeConfig = fileContents.match(/runtime: "browser"/) || [];

  const serializers = fileContents.match(/(var|const) se_/g) || [];
  const operationSchemas = fileContents.match(/ op\(/g) || [];
  const structSchemas = fileContents.match(/ struct\(/g) || [];

  try {
    assert(contentSize < 1_000_000);
    console.info(`✅ content size is under 1M char. ${contentSize.toLocaleString()}`);
  } catch (e) {
    throw new Error("Content size should be less than 1M characters.");
  }

  try {
    assert(callsToClassBuilder.length <= 2); // only GetObject and CreateSession should be present.
    console.info(`✅ two commands bundled (tree shaken).`);
  } catch (e) {
    throw new Error(
      `there should only be 2 calls to the Command classBuilder, got ${callsToClassBuilder.length}. Tree-shaking failure?`
    );
  }

  try {
    assert(runtimeConfig.length > 0); // browser runtimeConfig should be loaded.
    console.info(`✅ runtimeConfig is browser.`);
  } catch (e) {
    throw new Error("the browser runtimeConfig should be present in the bundle.");
  }

  console.log("serializers", serializers.length);
  console.log("operationSchemas", operationSchemas.length);
  console.log("structSchemas", structSchemas.length);
}

// Model-ignorant codegen expected output:
// problems: webpack fails to tree shake serde functions.
/*
================ webpack ================
✅ content size is under 1M char. 628,148
✅ two commands bundled (tree shaken).
✅ runtimeConfig is browser.
serializers 250
operationSchemas 11
================ vite ================
✅ content size is under 1M char. 341,346
✅ two commands bundled (tree shaken).
✅ runtimeConfig is browser.
serializers 2
operationSchemas 10
 */

// Schema serde expected output:
// problems: both bundlers fail to tree-shake schemas (fix WIP).
/*
================ webpack ================
✅ content size is under 1M char. 557,102
✅ two commands bundled (tree shaken).
✅ runtimeConfig is browser.
serializers 0
operationSchemas 116
================ vite ================
✅ content size is under 1M char. 459,392
✅ two commands bundled (tree shaken).
✅ runtimeConfig is browser.
serializers 0
operationSchemas 115
 */
