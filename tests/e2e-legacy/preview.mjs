#!/usr/bin/env node

import { execSync } from "child_process";
import { getDirName } from "./getDirName.mjs";
import { getAllTags } from "./getAllTags.mjs";
import { getPackageTags } from "./getPackageTags.mjs";
import { runTestForTags } from "./runTestForTags.mjs";

const __dirname = getDirName();

const execOptions = { ...process, cwd: __dirname, encoding: "utf-8" };
const commitMessage = execSync(`git show -s --format=%s`, execOptions);
const prefix = commitMessage.split(":")[0];
const scope = prefix.substring(prefix.indexOf("(") + 1, prefix.indexOf(")"));
console.info(`Updated scope: ${scope}`);

if (!scope) {
  console.info(`Couldn't find scope in commit message '${commitMessage}'`);
  process.exit(1);
}

const allTags = getAllTags();
const changedPackageTags = getPackageTags([`@aws-sdk/${scope}`]);
const tagsToTest = changedPackageTags.filter((tag) => allTags.includes(tag));
runTestForTags(tagsToTest);
