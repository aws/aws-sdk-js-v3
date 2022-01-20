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
  .flatMap((workspacesDir) =>
    readdirSync(join(rootDir, workspacesDir), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .map((workspaceDir) => join(rootDir, workspacesDir, workspaceDir))
  )
  .forEach((workspacePath) => {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

    ["dependencies", "devDependencies"]
      .filter((section) => packageJson[section] !== undefined)
      .forEach((section) => replaceInternalDepVersionWithAsterisk(packageJson[section]));

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2).concat(`\n`));
  });
