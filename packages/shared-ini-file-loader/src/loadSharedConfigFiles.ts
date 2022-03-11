import { SharedConfigFiles } from "@aws-sdk/types";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";
import { normalizeConfigFile } from "./normalizeConfigFile";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";

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

export const loadSharedConfigFiles = async (init: SharedConfigInit = {}): Promise<SharedConfigFiles> => {
  const {
    filepath = process.env[ENV_CREDENTIALS_PATH] || join(getHomeDir(), ".aws", "credentials"),
    configFilepath = process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config"),
  } = init;

  const parsedFiles = await Promise.all([
    slurpFile(configFilepath).then(parseIni).then(normalizeConfigFile).catch(swallowError),
    slurpFile(filepath).then(parseIni).catch(swallowError),
  ]);

  return {
    configFile: parsedFiles[0],
    credentialsFile: parsedFiles[1],
  };
};
