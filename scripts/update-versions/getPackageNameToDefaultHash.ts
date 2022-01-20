import { basename } from "path";

import { getWorkspacePaths } from "./getWorkspacePaths";

export const getPackageNameToDefaultHash = () =>
  getWorkspacePaths().reduce(
    (acc, workspacePath) => ({
      ...acc,
      [`@aws-sdk/${basename(workspacePath)}`]: "*",
    }),
    {}
  );
