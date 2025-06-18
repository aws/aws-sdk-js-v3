// @ts-check
import { exec } from "child_process";
import decomment from "decomment";
import { access, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { promisify } from "util";

import { getAllFiles } from "./getAllFiles.mjs";
import { getDeclarationDirname } from "./getDeclarationDirname.mjs";
import { getDownlevelDirname } from "./getDownlevelDirname.mjs";

const execPromise = promisify(exec);

export const downlevelWorkspace = async (workspacesDir, workspaceName) => {
  const workspaceDir = join(workspacesDir, workspaceName);
  const downlevelDirname = await getDownlevelDirname(workspaceDir);
  const declarationDirname = await getDeclarationDirname(workspaceDir);

  const declarationDir = join(workspaceDir, declarationDirname);
  try {
    await access(declarationDir);
  } catch (error) {
    console.log(`The types for "${workspaceName}" do not exist.\n`);
    return;
  }

  const downlevelDir = join(declarationDir, downlevelDirname);
  // Create downlevel-dts folder if it doesn't exist
  try {
    await access(downlevelDir);
  } catch (error) {
    await execPromise(["yarn", "build:types:downlevel"].join(" "), { cwd: workspaceDir });
  }

  // Strip comments from downlevel-dts files
  try {
    await access(downlevelDir);
    const files = await getAllFiles(downlevelDir);
    for (const downlevelTypesFilepath of files) {
      try {
        const content = await readFile(downlevelTypesFilepath, "utf8");
        const decommentedContent = decomment(content);
        try {
          const { formatCode } = await import("../biome/biome.mjs");
          const formatted = await formatCode(decommentedContent, downlevelTypesFilepath);
          await writeFile(downlevelTypesFilepath, formatted);
        } catch (error) {
          console.warn(`Failed to format "${downlevelTypesFilepath}". Skipping...`);
        }
      } catch (error) {
        console.error(`Error while stripping comments from "${downlevelTypesFilepath.replace(process.cwd(), "")}"`);
        console.error(error);
      }
    }
  } catch (error) {
    // downlevelDir is not present, do nothing.
  }
};
