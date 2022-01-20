#!/usr/bin/env ts-node

// Updates versions for internal packages `@aws-sdk/*` to exact versions
// in dependencies/devDependencies/peerDependencies

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";

const rootDir = join(__dirname, "..", "..");
const packageJsonPath = join(rootDir, "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

const packages = packageJson.workspaces.packages;

const packageNameToExactVersionHash = packages
  .map((dir) => dir.replace("/*", ""))
  .flatMap((workspacesDir) =>
    readdirSync(join(rootDir, workspacesDir), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .map((workspaceDir) => join(rootDir, workspacesDir, workspaceDir))
  )
  .reduce((acc, workspacePath) => {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    return {
      ...acc,
      [`@aws-sdk/${basename(workspacePath)}`]: packageJson.version,
    };
  }, {});

const replaceInternalDepVersionWithExact = (section: { [key: string]: string }) => {
  for (const [key, value] of Object.entries(section)) {
    if (key.startsWith("@aws-sdk/") && !value.startsWith("file:")) {
      section[key] = packageNameToExactVersionHash[key];
    }
  }
};

packages
  .map((dir) => dir.replace("/*", ""))
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
      .forEach((section) => replaceInternalDepVersionWithExact(packageJson[section]));

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2).concat(`\n`));
  });
