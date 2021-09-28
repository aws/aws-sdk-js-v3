import { readdir, stat } from "fs/promises";

export const getAllFiles = async (dirPath, arrayOfFiles = []) => {
  const files = await readdir(dirPath);

  for (const file of files) {
    const { isDirectory } = await stat(dirPath + "/" + file);
    if (isDirectory()) {
      const filesInDirectory = await getAllFiles(dirPath + "/" + file, arrayOfFiles);
      arrayOfFiles.push(filesInDirectory);
    } else {
      arrayOfFiles.push(join(dirPath, "/", file));
    }
  }

  return arrayOfFiles;
};
