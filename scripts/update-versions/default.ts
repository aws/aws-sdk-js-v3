#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to `*`
// in dependencies/devDependencies/peerDependencies

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { getWorkspacePaths } from "./getWorkspacePaths";

const replaceInternalDepVersionWithAsterisk = (section: { [key: string]: string }) => {
  for (const [key, value] of Object.entries(section)) {
    if (key.startsWith("@aws-sdk/") && !value.startsWith("file:")) {
      section[key] = "*";
    }
  }
};

getWorkspacePaths().forEach((workspacePath) => {
  const packageJsonPath = join(workspacePath, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

  ["dependencies", "devDependencies"]
    .filter((section) => packageJson[section] !== undefined)
    .forEach((section) => replaceInternalDepVersionWithAsterisk(packageJson[section]));

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2).concat(`\n`));
});
