import { readFile } from "fs/promises";
import { join } from "path";

export const getDownlevelDirname = async (workspaceDir) => {
  const packageJsonPath = join(workspaceDir, "package.json");
  const packageJson = JSON.parse((await readFile(packageJsonPath)).toString());
  if (!packageJson.scripts["downlevel-dts"]) {
    console.error(`The "downlevel-dts" script is not defined for "${workspaceDir}"`);
    return;
  }
  const downlevelArgs = packageJson.scripts["downlevel-dts"].split(" ");
  return downlevelArgs[2].replace(`${downlevelArgs[1]}/`, "");
};
