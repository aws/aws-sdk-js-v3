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
    writeFileSync(packageJsonPath, format(JSON.stringify(updatedPackageJson), { parser: "json" }));
  });
};
