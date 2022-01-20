#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to exact versions
// in dependencies/devDependencies/peerDependencies

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { getPackageNameToVersionHash } from "./getPackageNameToVersionHash";
import { getWorkspacePaths } from "./getWorkspacePaths";

const packageNameToVersionHash = getPackageNameToVersionHash();

const replaceInternalDepVersionWithExact = (section: { [key: string]: string }) => {
  for (const [key, value] of Object.entries(section)) {
    if (key.startsWith("@aws-sdk/") && !value.startsWith("file:")) {
      section[key] = packageNameToVersionHash[key];
    }
  }
};

getWorkspacePaths().forEach((workspacePath) => {
  const packageJsonPath = join(workspacePath, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

  ["dependencies", "devDependencies"]
    .filter((section) => packageJson[section] !== undefined)
    .forEach((section) => replaceInternalDepVersionWithExact(packageJson[section]));

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2).concat(`\n`));
});
