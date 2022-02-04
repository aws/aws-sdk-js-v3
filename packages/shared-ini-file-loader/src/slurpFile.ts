// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { readFile, stat } = fsPromises;

type callbacks = { resolve: Function; reject: Function };
type fileStatus = {
  contents: string;
  isReading: boolean;
  lastModified: Date;
  requestQueue: callbacks[];
};

const fileReadHash: { [key: string]: fileStatus } = {};

const callReadFile = (path: string, cbs: callbacks) => {
  fileReadHash[path].requestQueue.push(cbs);
  readFile(path, "utf8")
    .then((data) => {
      // File read successful
      fileReadHash[path].contents = data;
      fileReadHash[path].requestQueue.forEach(({ resolve }) => resolve(data));
    })
    .catch((err) => {
      fileReadHash[path].requestQueue.forEach(({ reject }) => reject(err));
    })
    .finally(() => {
      fileReadHash[path].isReading = false;
      fileReadHash[path].requestQueue = [];
      // Update last modified.
      stat(path).then(({ mtime }) => {
        fileReadHash[path].lastModified = mtime;
      });
    });
};

export const slurpFile = (path: string) =>
  new Promise<string>((resolve, reject) => {
    if (!fileReadHash[path]) {
      // File not read yet, set file isReading to true.
      fileReadHash[path] = { isReading: true, lastModified: new Date(0), contents: "", requestQueue: [] };
      // Read file.
      callReadFile(path, { resolve, reject });
    } else if (fileReadHash[path].isReading) {
      // File currently being read. Add to request queue.
      fileReadHash[path].requestQueue.push({ resolve, reject });
    } else {
      // File already read, or read failed.
      if (fileReadHash[path].lastModified === null) {
        // Read failed. Read file again.
        callReadFile(path, { resolve, reject });
      } else {
        // Read file only if it's modified.
        stat(path).then(({ mtime }) => {
          if (mtime === fileReadHash[path].lastModified) {
            resolve(fileReadHash[path].contents);
          } else {
            callReadFile(path, { resolve, reject });
          }
        });
      }
    }
  });
