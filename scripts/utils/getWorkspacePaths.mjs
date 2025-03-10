// @ts-check
import { readdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const getWorkspacePaths = () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const rootDir = join(__dirname, "..", "..");
  const packageJsonPath = join(rootDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

  return packageJson.workspaces.packages
    .map((dir) => dir.replace("/*", "").replace("!(all-in-one)", ""))
    .flatMap((workspacesDir) =>
      readdirSync(join(rootDir, workspacesDir), { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
        .map((workspaceDir) => join(rootDir, workspacesDir, workspaceDir))
    );
};
