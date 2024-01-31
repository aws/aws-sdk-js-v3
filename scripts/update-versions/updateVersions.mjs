// @ts-check
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { format } from "prettier";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";
import { getUpdatedPackageJson } from "./getUpdatedPackageJson.mjs";

export const updateVersions = (depToVersionHash) => {
  getWorkspacePaths().forEach((workspacePath) => {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    const updatedPackageJson = getUpdatedPackageJson(packageJson, depToVersionHash);
    writeFileSync(packageJsonPath, format(JSON.stringify(updatedPackageJson), { parser: "json-stringify" }));
  });
};

export const updatePeerVersions = (depToVersionHash) => {
  getWorkspacePaths().forEach((workspacePath) => {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    if (packageJson.peerDependencies) {
      for (const peer of Object.keys(packageJson.peerDependencies)) {
        if (peer in depToVersionHash) {
          packageJson.peerDependencies[peer] = depToVersionHash[peer];
        }
      }
    }
    writeFileSync(packageJsonPath, format(JSON.stringify(packageJson), { parser: "json-stringify" }));
  });
};
