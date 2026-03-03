// @ts-check
import { readFileSync } from "node:fs";
import { basename, join } from "node:path";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";

export const getDepToDefaultVersionHash = () =>
  getWorkspacePaths().reduce((acc, workspacePath) => {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

    let targetVersion = "^" + packageJson.version;

    acc[`@aws-sdk/${basename(workspacePath)}`] = `workspace:${targetVersion}`;
    return acc;
  }, {});
