// @ts-check
import { readFileSync } from "fs";
import { basename, join } from "path";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";

export const getDepToCurrentVersionHash = () =>
  getWorkspacePaths().reduce((acc, workspacePath) => {
    const packageJsonPath = join(workspacePath, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    return {
      ...acc,
      [`@aws-sdk/${basename(workspacePath)}`]: packageJson.version,
    };
  }, {});
