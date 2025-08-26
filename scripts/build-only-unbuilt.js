#!/usr/bin/env node

/*
usage: `make unbuilt`

This script builds only those packages that are not already built.
This is for development when you need for example newly released clients to be built
but do not need the actual latest build of every single client (slow).

As for why this is not a shell script, I found the combination of find with exec to be too slow.
 */

/**
 * For reference, this is the equivalent shell command.
 * @type {string}
 */
void `find ./clients/client-*/ -type d -maxdepth 0 -exec test -d "{}/dist-types" \\; -exec sh -c "cd {} && yarn build" \\;`;

const path = require("node:path");
const fs = require("node:fs");
const { spawnProcess } = require("./utils/spawn-process");

const root = path.join(__dirname, "..");

const packageFolders = [
  ...fs.readdirSync(path.join(root, "lib"), { withFileTypes: true }),
  ...fs.readdirSync(path.join(root, "clients"), { withFileTypes: true }),
  ...fs.readdirSync(path.join(root, "packages"), { withFileTypes: true }),
  ...fs.readdirSync(path.join(root, "private"), { withFileTypes: true }),
];

(async () => {
  for (const pkgFolder of packageFolders) {
    const isPackage = fs.existsSync(path.join(pkgFolder.path, pkgFolder.name, "package.json"));
    if (isPackage) {
      const cwd = path.join(pkgFolder.path, pkgFolder.name);
      const isBuilt = fs.existsSync(path.join(cwd, "dist-types"));
      const hasArtifacts = fs.existsSync(path.join(cwd, "tsconfig.json"));

      if (!isBuilt && hasArtifacts) {
        console.log("Building", cwd);
        await spawnProcess("yarn", ["build"], {
          cwd,
        });
      }
    }
  }
  console.log("Done.");
})();
