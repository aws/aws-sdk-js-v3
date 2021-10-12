// @ts-check
import { readdir, stat } from "fs/promises";
import { join } from "path";

export const getAllFiles = async (dirPath, arrayOfFiles = []) => {
  const files = await readdir(dirPath);

  for (const file of files) {
    const filePath = join(dirPath, file);
    const { isDirectory } = await stat(filePath);
    if (isDirectory()) {
      const filesInDirectory = await getAllFiles(filePath, arrayOfFiles);
      arrayOfFiles.push(filesInDirectory);
    } else {
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
};
