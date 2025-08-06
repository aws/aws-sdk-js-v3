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

for (const { content: fileContents, name } of [webpackDist, viteDist]) {
  console.log(name);

  const contentSize = fileContents.replaceAll(/\s+/g, "").length;
  const callsToClassBuilder = fileContents.match(/\.classBuilder\(\)/g);
  const runtimeConfig = fileContents.match(/runtime: "browser"/);

  try {
    assert(contentSize < 1_000_000);
    console.info(`✅ content size is under 1M char.`);
  } catch (e) {
    throw new Error("Content size should be less than 1M characters.");
  }

  try {
    assert(callsToClassBuilder.length <= 2); // only GetObject and CreateSession should be present.
    console.info(`✅ two commands bundled (tree shaken).`);
  } catch (e) {
    throw new Error("there should only be 2 calls to the Command classBuilder. Tree-shaking failure?");
  }

  try {
    assert(runtimeConfig.length > 0); // browser runtimeConfig should be loaded.
    console.info(`✅ runtimeConfig is browser.`);
  } catch (e) {
    throw new Error("the browser runtimeConfig should be present in the bundle.");
  }
}
