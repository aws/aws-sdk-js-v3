// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { readFile } = fsPromises;

const filePromisesHash: Record<string, Promise<string>> = {};

interface SlurpFileOptions {
  ignoreCache?: boolean;
}

export const slurpFile = (path: string, options?: SlurpFileOptions) => {
  if (!filePromisesHash[path] || options?.ignoreCache) {
    filePromisesHash[path] = readFile(path, "utf8");
  }
  return filePromisesHash[path];
};
