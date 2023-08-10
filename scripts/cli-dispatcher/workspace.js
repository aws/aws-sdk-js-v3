#!/usr/bin/env node

/**
 * This script runs files by filename in the root/workspace (unversioned) directory.
 *
 * @example
 * r dyn test
 *
 * would match to a file in /workspace/dynamodb/test.ts and execute it with esbuild runner.
 *
 * @example
 * r ssec
 *
 * would run "node /workspace/s3/ssec.mjs"
 *
 * The workspace directory is meant as a place to test short scripts
 * that make use of the packages built in the root monorepo workspace.
 */

const path = require("path");
const walk = require("../utils/walk");

const matcher = require("./lib/matcher");
const matchSorter = require("./lib/matchSorter");

const root = path.join(__dirname, "..", "..");
const workspaceFolder = path.join(root, "workspace");

const USE_NODE = 1;
const USE_TYPESCRIPT = 2;
const runnable = { ".js": USE_NODE, ".ts": USE_TYPESCRIPT, ".cjs": USE_NODE, ".mjs": USE_NODE };

const execute = async (cwd, exe, commands) => {
  const { spawnProcess } = require("../utils/spawn-process");
  await spawnProcess(exe, [...commands], {
    cwd,
    stdio: "inherit",
  });
  return;
};

const [node, dispatcher, ...query] = process.argv;

(async () => {
  if (query.length === 0) {
    console.log("No query given, use `r [substring words]`.");
    return;
  }

  const matches = [];

  for await (const f of walk(workspaceFolder, ["node_modules", ".yarn", ".git"])) {
    const ext = path.extname(f);
    if (ext in runnable) {
      if (matcher(f, ...query)) {
        matches.push(f);
      }
    }
  }

  if (matches.length === 0) {
    console.log("No matching workspace scripts.");
    return;
  }

  const selection = matchSorter(matches, ...query)[0];
  const ext = path.extname(selection);

  console.log("Exec script:", selection);

  if (runnable[ext] === USE_NODE) {
    await execute(path.dirname(selection), "node", [selection]);
  }
  if (runnable[ext] === USE_TYPESCRIPT) {
    await execute(path.dirname(selection), "npx", ["esbuild-runner", selection]);
  }
})();
