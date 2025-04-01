#!/usr/bin/env node

import { join } from "path";
import { execSync } from "child_process";
import { getDirName } from "./getDirName.mjs";
import { getAllTags } from "./getAllTags.mjs";
import { getPackageTags } from "./getPackageTags.mjs";
import { runTestForTags } from "./runTestForTags.mjs";

const __dirname = getDirName();
const ROOT_BIN = join(__dirname, "..", "..", "node_modules", ".bin");

console.info(`Looking for changed packages...`);
let changedPackages = [];
try {
  const execOptions = { ...process, cwd: __dirname, encoding: "utf-8" };
  changedPackages = execSync(`${join(ROOT_BIN, "lerna")} changed`, execOptions).split("\n");
} catch (e) {
  // Swallow error because Lerna throws if no package changes.
}

const allTags = getAllTags();
const changedPackageTags = getPackageTags(changedPackages);
const tagsToTest = changedPackageTags.filter((tag) => allTags.includes(tag));
runTestForTags(tagsToTest);
