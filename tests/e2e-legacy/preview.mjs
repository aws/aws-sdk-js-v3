#!/usr/bin/env node

import { execSync } from "child_process";
import { getDirName } from "./getDirName.mjs";
import { getAllTags } from "./getAllTags.mjs";
import { getPackageTags } from "./getPackageTags.mjs";
import { runTestForTags } from "./runTestForTags.mjs";
import conventionalCommitsParser from "conventional-commits-parser";

const __dirname = getDirName();

const execOptions = { ...process, cwd: __dirname, encoding: "utf-8" };
const gitCommitMessage = execSync(`git show -s --format=%s`, execOptions);
const { scope } = conventionalCommitsParser.sync(gitCommitMessage);
console.info(`Updated scope: ${scope}`);

if (!scope) {
  console.info(`Couldn't find scope in commit message '${gitCommitMessage}'`);
  process.exit(1);
}

const allTags = getAllTags();
const changedPackageTags = getPackageTags([`@aws-sdk/${scope}`]);
const tagsToTest = changedPackageTags.filter((tag) => allTags.includes(tag));
runTestForTags(tagsToTest);
