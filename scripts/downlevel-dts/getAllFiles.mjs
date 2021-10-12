// @ts-check
import { readdir, stat } from "fs/promises";
import { join } from "path";

export const getAllFiles = async (dirPath, arrayOfFiles = []) => {
  const files = await readdir(dirPath);

  for (const file of files) {
    const filePath = join(dirPath, file);
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      const filesInDirectory = await getAllFiles(filePath, arrayOfFiles);
      arrayOfFiles.concat(filesInDirectory);
    } else {
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
};
