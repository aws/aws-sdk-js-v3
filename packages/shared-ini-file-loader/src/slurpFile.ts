import { readFile } from "fs/promises";

const filePromisesHash: { [key: string]: Promise<string> } = {};

export const slurpFile = (path: string) => {
  if (!filePromisesHash[path]) {
    filePromisesHash[path] = readFile(path, "utf8");
  }
  return filePromisesHash[path];
};
