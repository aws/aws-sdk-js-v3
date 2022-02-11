import { readFileSync } from "fs";
import { join } from "path";

export const isPrivateWorkspace = (workspacesDir, workspaceName) => {
  const packageJsonPath = join(workspacesDir, workspaceName, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
  return packageJson.private && packageJson.private === true;
};
