// @ts-check
import { exec } from "node:child_process";
import decomment from "decomment";
import { access, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { format } from "oxfmt";
import { promisify } from "node:util";

import { getAllFiles } from "./getAllFiles.mjs";
import { getDeclarationDirname } from "./getDeclarationDirname.mjs";
import { getDownlevelDirname } from "./getDownlevelDirname.mjs";

const execPromise = promisify(exec);

export const downlevelWorkspace = async (workspacesDir, workspaceName) => {
  const workspaceDir = join(workspacesDir, workspaceName);

  const pkgJson = JSON.parse(await readFile(join(workspaceDir, "package.json"), "utf8"));
  if (!pkgJson.scripts?.["build:types:downlevel"]) {
    return;
  }

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
          const formatted = (await format(downlevelTypesFilepath, decommentedContent)).code;
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
