// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { readFile } = fsPromises;

import { execSync } from "child_process";

const filePromisesHash: Record<string, Promise<string>> = {};

export const slurpFile = (path: string) => {
  // make the change here in this function. we need to allow for both regular file paths and file paths in a Docker container
  // ~/.aws/
  // /root/aws
  exec("cd ~ && pwd") -> /root -> /usr / home / harry / aws
  let shellUserName = execSync("whoami").toString();
  if (execSync("whoami").toString() === "root") {
    path = '/root/.aws'
  }
  if (!filePromisesHash[path]) {
    filePromisesHash[path] = readFile(path, "utf8");
  }
  return filePromisesHash[path];
};
