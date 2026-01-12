import fs from "node:fs";
import { readFile } from "node:fs/promises";
import path, { join } from "node:path";

import { spawnProcess, spawnProcessReturnValue } from "../../utils/spawn-process.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const root = path.resolve(__dirname, "..", "..", "..");

const lernaConfigPath = path.join(root, "lerna.json");
const lernaConfig = JSON.parse(fs.readFileSync(lernaConfigPath, "utf8"));

/**
 * Overrides for lerna.json when publishing linked packages.
 */
export const linkedPackagesConfig = {
  useWorkspaces: false,
  packages: ["clients/*", "private/*", "lib/*", "packages/*"],
};

/**
 * Overrides for lerna.json when publishing independent packages.
 */
export const independentPackagesConfig = {
  version: "independent",
  useWorkspaces: false,
  packages: ["packages-internal/*"],
};

/**
 * Execute `lerna version`.
 */
export const runLernaVersion = async (useNewLinkedVersion = false) => {
  await spawnProcess("yarn", [
    "lerna",
    "version",
    "--exact",
    "--conventional-commits",
    "--no-push",
    "--no-git-tag-version",
    "--no-commit-hooks",
    "--yes",
  ]);
  if (useNewLinkedVersion) {
    lernaConfig.version = await getWorkspaceVersion();
  }
};

/**
 * Returns the output of `lerna list`.
 */
export const getLernaList = async () => {
  const lernaList = await spawnProcessReturnValue(
    "yarn",
    [
      "run",
      "--silent",
      "lerna",
      "list",
      "--toposort", //dependencies come before dependents
      "--loglevel",
      "silent",
      "--json",
    ],
    {
      cwd: root,
    }
  );
  return JSON.parse(lernaList);
};

/**
 * Returns the output of `lerna changed`.
 * This takes longer, and so is used against the independent-version
 * package list but not the linked-version package list.
 */
export const getLernaChanged = async () => {
  const lernaList = await spawnProcessReturnValue(
    "yarn",
    ["run", "--silent", "lerna", "changed", "--toposort", "--loglevel", "silent", "--json"],
    {
      cwd: root,
    }
  );
  return JSON.parse(lernaList);
};

export const getWorkspaceVersion = async () => {
  const lernaJson = await readFile(join(root, "lerna.json"), {
    encoding: "utf-8",
  });
  return JSON.parse(lernaJson).version;
};

/**
 * Writes a config object, with merging, to lerna.json.
 */
export const overwriteLerna = (data) => {
  fs.writeFileSync(
    lernaConfigPath,
    JSON.stringify(
      {
        ...lernaConfig,
        ...data,
      },
      null,
      2
    ) + "\n"
  );
};

process.on("exit", () => {
  overwriteLerna(lernaConfig);
});
