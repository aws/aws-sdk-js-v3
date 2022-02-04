import { readFile } from "fs";

export const slurpFile = (path: string): Promise<string> =>
  new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
