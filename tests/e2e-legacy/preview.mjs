#!/usr/bin/env node

import { execSync } from "child_process";
import { getDirName } from "./getDirName.mjs";
import { getAllTags } from "./getAllTags.mjs";
import { getPackageTags } from "./getPackageTags.mjs";
import { runTestForTags } from "./runTestForTags.mjs";

const __dirname = getDirName();

const execOptions = { ...process, cwd: __dirname, encoding: "utf-8" };
const commitsSinceOriginHead = execSync(`git log --oneline origin/main..HEAD --format=%s`, execOptions).split("\n");

const updatedClients = new Set();
for (const commitMessage of commitsSinceOriginHead) {
  const prefix = commitMessage.split(":")[0];
  const scope = prefix.substring(prefix.indexOf("(") + 1, prefix.indexOf(")"));
  if (scope && scope.startsWith("client-")) {
    updatedClients.add(`@aws-sdk/${scope}`);
  }
}
console.info(`Updated packages: ${updatedClients}`);

if (updatedClients.size === 0) {
  console.info(`Couldn't find clients in commit messages:\n '${commitsSinceOriginHead.join("\n")}'`);
  process.exit(1);
}

const allTags = getAllTags();
const changedPackageTags = getPackageTags([...updatedClients]);
const tagsToTest = changedPackageTags.filter((tag) => allTags.includes(tag));
runTestForTags(tagsToTest);
