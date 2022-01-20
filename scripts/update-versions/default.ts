#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to `*`
// in dependencies/devDependencies/peerDependencies

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { getPackageNameToDefaultHash } from "./getPackageNameToDefaultHash";
import { getUpdatedPackageJson } from "./getUpdatedPackageJson";
import { getWorkspacePaths } from "./getWorkspacePaths";

const packageNameToDefaultHash = getPackageNameToDefaultHash();

getWorkspacePaths().forEach((workspacePath) => {
  const packageJsonPath = join(workspacePath, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
  const updatedPackageJson = getUpdatedPackageJson(packageJson, packageNameToDefaultHash);
  writeFileSync(packageJsonPath, JSON.stringify(updatedPackageJson, null, 2).concat(`\n`));
});
