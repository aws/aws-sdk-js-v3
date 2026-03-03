// @ts-check

// Updates versions for `@aws-sdk/*` local package interdependencies to `workspace:(actual version)`
// or `workspace:^(actual version)` for free-range packages.

import { basename } from "node:path";

import { getWorkspacePaths } from "../utils/getWorkspacePaths.mjs";
import { updateVersions } from "./updateVersions.mjs";

updateVersions(
  getWorkspacePaths().reduce((acc, workspacePath) => {
    acc[`@aws-sdk/${basename(workspacePath)}`] = `*`;
    return acc;
  }, {})
);
