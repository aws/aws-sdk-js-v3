import { readFile } from "fs/promises";
import { join } from "path";

export const getDeclarationDirname = async (workspaceDir) => {
  const tsTypesConfigPath = join(workspaceDir, "tsconfig.types.json");
  const tsTypesConfigJson = JSON.parse((await readFile(tsTypesConfigPath)).toString());

  const declarationDirname = tsTypesConfigJson.compilerOptions.declarationDir;
  if (!declarationDirname) {
    throw new Error(`The declarationDir is not defined in "${tsTypesConfigPath}".`);
  }

  return declarationDirname;
};
