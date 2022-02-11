// @ts-check
import parallelLimit from "async/parallelLimit";
import { cpus } from "os";
import yargs from "yargs";

import { downlevelWorkspace } from "./downlevelWorkspace.mjs";
import { getWorkspaces } from "./getWorkspaces.mjs";
import { isPrivateWorkspace } from "./isPrivateWorkspace.mjs";

// ToDo: Write downlevel-dts as a yargs command, and import yargs in scripts instead.
yargs
  .usage(
    "Runs build:types:downlevel npm script (if present) in each workspace of monorepo," +
      " and strips comments from *.d.ts files.\n\n" +
      "Usage: index.mjs"
  )
  .help()
  .alias("h", "help").argv;

const workspaces = getWorkspaces(process.cwd()).filter(
  ({ workspacesDir, workspaceName }) => !isPrivateWorkspace(workspacesDir, workspaceName)
);
const tasks = workspaces.map(({ workspacesDir, workspaceName }) => async () => {
  await downlevelWorkspace(workspacesDir, workspaceName);
});

parallelLimit(tasks, cpus().length, function (err) {
  if (err) {
    throw err;
  }
});
