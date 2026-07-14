// @ts-check
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { format } from "oxfmt";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";
import { getUpdatedPackageJson } from "./getUpdatedPackageJson.mjs";

export const updateVersions = async (depToVersionHash) => {
  for (const workspacePath of getWorkspacePaths()) {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    const updatedPackageJson = getUpdatedPackageJson(packageJson, depToVersionHash);
    writeFileSync(packageJsonPath, (await format(packageJsonPath, JSON.stringify(updatedPackageJson))).code);
  }
};
