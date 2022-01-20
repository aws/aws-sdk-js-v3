import { basename } from "path";

import { getWorkspacePaths } from "./getWorkspacePaths";

export const getDepToDefaultVersionHash = () =>
  getWorkspacePaths().reduce(
    (acc, workspacePath) => ({
      ...acc,
      [`@aws-sdk/${basename(workspacePath)}`]: "*",
    }),
    {}
  );
