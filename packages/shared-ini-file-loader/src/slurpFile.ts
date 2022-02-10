// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { readFile } = fsPromises;

type callbacks = { resolve: Function; reject: Function };
type FileStatus = {
  contents: string;
  isReading: boolean;
  requestQueue: callbacks[];
};

const fileStatusHash: { [key: string]: FileStatus } = {};

export const slurpFile = (path: string) =>
  new Promise<string>((resolve, reject) => {
    if (!fileStatusHash[path]) {
      // File not read yet, set file isReading to true and read file.
      fileStatusHash[path] = { isReading: true, contents: "", requestQueue: [] };
      fileStatusHash[path].requestQueue.push({ resolve, reject });
      readFile(path, "utf8")
        .then((data) => {
          // File read successful
          fileStatusHash[path].isReading = false;
          fileStatusHash[path].contents = data;
          const { requestQueue } = fileStatusHash[path];
          while (requestQueue.length) {
            const { resolve } = requestQueue.pop()!;
            resolve(data);
          }
        })
        .catch((err) => {
          // File read failed;
          fileStatusHash[path].isReading = false;
          const { requestQueue } = fileStatusHash[path];
          while (requestQueue.length) {
            const { reject } = requestQueue.pop()!;
            reject(err);
          }
        });
    } else if (fileStatusHash[path].isReading) {
      // File currently being read. Add callbacks to the request queue.
      fileStatusHash[path].requestQueue.push({ resolve, reject });
    } else {
      resolve(fileStatusHash[path].contents);
    }
  });
