import { readFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import { spawnProcessReturnValue } from "../utils/spawn-process.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = join(__dirname, "..", "..");

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
const allPackages = JSON.parse(lernaList);

const getWorkspaceVersion = async () => {
  const lernaJson = await readFile(join(root, "lerna.json"), {
    encoding: "utf-8",
  });
  return JSON.parse(lernaJson).version;
};

const workspaceVersion = await getWorkspaceVersion();

const changedPackages = allPackages
  .filter((pkg) => pkg.version === workspaceVersion && pkg.private === false)
  .map((pkg) => {
    return {
      ...pkg,
      location: relative(root, pkg.location),
    };
  });

/*
[
  {
    "name": "@aws-sdk/ec2-metadata-service",
    "version": "3.964.0",
    "private": false,
    "location": "packages/ec2-metadata-service"
  },
  {
    "name": "@aws-sdk/rds-signer",
    "version": "3.964.0",
    "private": false,
    "location": "packages/rds-signer"
  }
]
 */
console.log(JSON.stringify(changedPackages, null, 2));
