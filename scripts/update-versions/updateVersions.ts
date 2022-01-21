import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { getUpdatedPackageJson } from "./getUpdatedPackageJson";
import { getWorkspacePaths } from "./getWorkspacePaths";

export const updateVersions = (depToVersionHash) => {
  getWorkspacePaths().forEach((workspacePath) => {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    const updatedPackageJson = getUpdatedPackageJson(packageJson, depToVersionHash);
    writeFileSync(packageJsonPath, JSON.stringify(updatedPackageJson, null, 2).concat(`\n`));
  });
};
