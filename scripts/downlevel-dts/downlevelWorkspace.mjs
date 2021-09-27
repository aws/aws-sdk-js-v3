import { exec } from "child_process";
import { access, readFile, writeFile } from "fs/promises";
import { join } from "path";
import stripComments from "strip-comments";
import { promisify } from "util";

const execPromise = promisify(exec);

export const downlevelWorkspace = async (workspacesDir, workspaceName) => {
  const workspaceDir = join(workspacesDir, workspaceName);

  const packageJsonPath = join(workspaceDir, "package.json");
  const packageJson = JSON.parse((await readFile(packageJsonPath)).toString());
  if (!packageJson.scripts["downlevel-dts"]) {
    console.error(`The "downlevel-dts" script is not defined for "${workspaceDir}"`);
    return;
  }
  const downlevelArgs = packageJson.scripts["downlevel-dts"].split(" ");
  const downlevelDirname = downlevelArgs[2].replace(`${downlevelArgs[1]}/`, "");

  const tsTypesConfigPath = join(workspaceDir, "tsconfig.types.json");
  const declarationDirname = JSON.parse((await readFile(tsTypesConfigPath)).toString()).compilerOptions.declarationDir;

  if (!declarationDirname) {
    throw new Error(`The declarationDir is not defined in "${tsTypesConfigPath}".`);
  }

  const declarationDir = join(workspaceDir, declarationDirname);
  try {
    await access(declarationDir);
  } catch (error) {
    throw new Error(
      `The types for "${workspaceName}" do not exist.\n` +
        `Please build types for workspace "${workspaceDir}" before running downlevel-dts script.`
    );
  }

  const downlevelDir = join(declarationDir, downlevelDirname);
  // Create downlevel-dts folder if it doesn't exist
  try {
    await access(downlevelDir);
  } catch (error) {
    await execPromise(["yarn", "downlevel-dts"].join(" "), { cwd: workspaceDir });
  }

  // Strip comments from downlevel-dts files
  try {
    await access(downlevelDir);
    getAllFiles(downlevelDir).forEach(async (downlevelTypesFilepath) => {
      try {
        const content = await readFile(downlevelTypesFilepath, "utf8");
        await writeFile(downlevelTypesFilepath, stripComments(content));
      } catch (error) {
        console.error(`Error while stripping comments from "${downlevelTypesFilepath.replace(process.cwd(), "")}"`);
        console.error(error);
      }
    });
  } catch (error) {}
};
