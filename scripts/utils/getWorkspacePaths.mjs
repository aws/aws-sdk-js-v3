// @ts-check
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const getWorkspacePaths = () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const rootDir = join(__dirname, "..", "..");
  const packageJsonPath = join(rootDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

  return packageJson.workspaces.packages
    .map((dir) => dir.replace("/*", ""))
    .flatMap((workspacesDir) =>
      readdirSync(join(rootDir, workspacesDir), { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
        .map((workspaceDir) => join(rootDir, workspacesDir, workspaceDir))
    );
};
