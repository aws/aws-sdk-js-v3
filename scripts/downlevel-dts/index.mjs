// @ts-check
import parallelLimit from "async/parallelLimit";
import { cpus } from "os";
import yargs from "yargs";

import { downlevelWorkspace } from "./downlevelWorkspace.mjs";
import { getWorkspaces } from "./getWorkspaces.mjs";

// ToDo: Write downlevel-dts as a yargs command, and import yargs in scripts instead.
yargs(process.argv.slice(2))
  .usage(
    "Runs build:types:downlevel npm script (if present) in each workspace of monorepo," +
      " and strips comments from *.d.ts files.\n\n" +
      "Usage: index.mjs"
  )
  .help()
  .alias("h", "help").argv;

const workspaces = getWorkspaces(process.cwd());
const tasks = workspaces
  .filter(({ workspacesDir }) => workspacesDir !== "private")
  .map(({ workspacesDir, workspaceName }) => async () => {
    await downlevelWorkspace(workspacesDir, workspaceName);
  });

parallelLimit(tasks, cpus().length, function (err) {
  if (err) {
    throw err;
  }
});
