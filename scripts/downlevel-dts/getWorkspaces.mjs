import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const getWorkspaces = (rootDir) => {
  const { packages } = JSON.parse(readFileSync(join(rootDir, "package.json")).toString()).workspaces;
  return packages
    .map((dir) => dir.replace("/*", ""))
    .flatMap((workspacesDir) =>
      readdirSync(join(rootDir, workspacesDir), { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => ({ workspacesDir, workspaceName: dirent.name }))
    );
};
