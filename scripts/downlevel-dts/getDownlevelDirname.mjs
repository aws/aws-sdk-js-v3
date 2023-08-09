import { readFile } from "fs/promises";
import { join } from "path";

export const getDownlevelDirname = async (workspaceDir) => {
  const packageJsonPath = join(workspaceDir, "package.json");
  const packageJson = JSON.parse((await readFile(packageJsonPath)).toString());
  if (!packageJson.scripts["build:types:downlevel"]) {
    console.error(`The "build:types:downlevel" script is not defined for "${workspaceDir}"`);
    return;
  }
  const downlevelArgs = packageJson.scripts["build:types:downlevel"].split(" ");
  return downlevelArgs[2].replace(`${downlevelArgs[1]}/`, "");
};
