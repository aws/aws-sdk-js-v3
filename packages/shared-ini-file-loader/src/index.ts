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
const { readFile } = fsPromises;

export const loadSharedConfigFiles = (init: SharedConfigInit = {}): Promise<SharedConfigFiles> => {
  const {
    filepath = process.env[ENV_CREDENTIALS_PATH] || join(getHomeDir(), ".aws", "credentials"),
    configFilepath = process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config"),
  } = init;

  return Promise.all([
    readFile(configFilepath, "utf8").then(parseIni).then(normalizeConfigFile).catch(swallowError),
    readFile(filepath, "utf8").then(parseIni).catch(swallowError),
  ]).then((parsedFiles: Array<ParsedIniData>) => {
    const [configFile, credentialsFile] = parsedFiles;
    return {
      configFile,
      credentialsFile,
    };
  });
};
