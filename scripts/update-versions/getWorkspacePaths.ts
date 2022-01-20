import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export const getWorkspacePaths = () => {
  const rootDir = join(__dirname, "..", "..");
  const packageJsonPath = join(rootDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());

  return packageJson.workspaces.packages
    .map((dir: string) => dir.replace("/*", ""))
    .flatMap((workspacesDir) =>
      readdirSync(join(rootDir, workspacesDir), { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
        .map((workspaceDir) => join(rootDir, workspacesDir, workspaceDir))
    );
};
