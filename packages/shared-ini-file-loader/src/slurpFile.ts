// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { readFile } = fsPromises;

const filePromisesHash: { [key: string]: Promise<string> } = {};

export const slurpFile = (path: string) => {
  if (!filePromisesHash[path]) {
    filePromisesHash[path] = new Promise((resolve, reject) => {
      readFile(path, "utf8")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  return filePromisesHash[path];
};
