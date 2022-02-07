// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";
import { normalizeConfigFile } from "./normalizeConfigFile";
import { parseIni } from "./parseIni";
import { ParsedIniData, SharedConfigFiles } from "./types";

export const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
export const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";

export interface SharedConfigInit {
  /**
   * The path at which to locate the ini credentials file. Defaults to the
   * value of the `AWS_SHARED_CREDENTIALS_FILE` environment variable (if
   * defined) or `~/.aws/credentials` otherwise.
   */
  filepath?: string;

  /**
   * The path at which to locate the ini config file. Defaults to the value of
   * the `AWS_CONFIG_FILE` environment variable (if defined) or
   * `~/.aws/config` otherwise.
   */
  configFilepath?: string;
}

const swallowError = () => ({});

type SharedConfigStatus = {
  contents: SharedConfigFiles;
  isReading: boolean;
  requestQueue: { resolve: Function }[];
};
const SharedConfigHash: { [key: string]: SharedConfigStatus } = {};

export const loadSharedConfigFiles = (init: SharedConfigInit = {}): Promise<SharedConfigFiles> =>
  new Promise((resolve) => {
    const {
      filepath = process.env[ENV_CREDENTIALS_PATH] || join(getHomeDir(), ".aws", "credentials"),
      configFilepath = process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config"),
    } = init;

    const key = JSON.stringify({ filepath, configFilepath });

    if (!SharedConfigHash[key]) {
      // Config not read yet. Set to isReading and read shared config.
      SharedConfigHash[key] = { isReading: true, contents: {} as SharedConfigFiles, requestQueue: [{ resolve }] };

      Promise.all([
        fsPromises.readFile(configFilepath, "utf-8").then(parseIni).then(normalizeConfigFile).catch(swallowError),
        fsPromises.readFile(filepath, "utf-8").then(parseIni).catch(swallowError),
      ]).then((parsedFiles: Array<ParsedIniData>) => {
        const [configFile, credentialsFile] = parsedFiles;
        const sharedConfig = { configFile, credentialsFile };
        SharedConfigHash[key].isReading = false;
        SharedConfigHash[key].contents = sharedConfig;
        while (SharedConfigHash[key].requestQueue.length) {
          const { resolve } = SharedConfigHash[key].requestQueue.pop()!;
          resolve(sharedConfig);
        }
      });
    } else if (SharedConfigHash[key].isReading) {
      SharedConfigHash[key].requestQueue.push({ resolve });
    } else {
      resolve(SharedConfigHash[key].contents);
    }
  });
