#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to `*`
// in dependencies/devDependencies/peerDependencies

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const rootDir = join(__dirname, "..", "..");
const packageJsonPath = join(rootDir, "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

const packages = packageJson.workspaces.packages;

const replaceInternalDepVersionWithAsterisk = (section: { [key: string]: string }) => {
  for (const [key, value] of Object.entries(section)) {
    if (key.startsWith("@aws-sdk/") && !value.startsWith("file:")) {
      section[key] = "*";
    }
  }
};

packages
  .map((dir: string) => dir.replace("/*", ""))
  .forEach((workspacesDir: string) => {
    // Process each workspace in workspace directory
    readdirSync(join(rootDir, workspacesDir), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .forEach((workspaceDir) => {
        const cwd = join(rootDir, workspacesDir, workspaceDir);
        const packageJsonPath = join(cwd, "package.json");
        const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

        ["dependencies", "devDependencies", "peerDependencies"]
          .filter((section) => packageJson[section] !== undefined)
          .forEach((section) => replaceInternalDepVersionWithAsterisk(packageJson[section]));

        writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2).concat(`\n`));
      });
  });
