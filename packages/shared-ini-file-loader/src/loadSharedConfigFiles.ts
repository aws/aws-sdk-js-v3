import { SharedConfigFiles } from "@aws-sdk/types";

import { getConfigFilepath } from "./getConfigFilepath";
import { getCredentialsFilepath } from "./getCredentialsFilepath";
import { getProfileData } from "./getProfileData";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";

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
  const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;

  const parsedFiles = await Promise.all([
    slurpFile(configFilepath).then(parseIni).then(getProfileData).catch(swallowError),
    slurpFile(filepath).then(parseIni).catch(swallowError),
  ]);

  return {
    configFile: parsedFiles[0],
    credentialsFile: parsedFiles[1],
  };
};
