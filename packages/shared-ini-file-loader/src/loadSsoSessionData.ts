import { ParsedIniData } from "@aws-sdk/types";

import { getConfigFilepath } from "./getConfigFilepath";
import { getSsoSessionData } from "./getSsoSessionData";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";

export interface SsoSessionInit {
  /**
   * The path at which to locate the ini config file. Defaults to the value of
   * the `AWS_CONFIG_FILE` environment variable (if defined) or
   * `~/.aws/config` otherwise.
   */
  configFilepath?: string;
}

const swallowError = () => ({});

export const loadSsoSessionData = async (init: SsoSessionInit = {}): Promise<ParsedIniData> =>
  slurpFile(init.configFilepath ?? getConfigFilepath())
    .then(parseIni)
    .then(getSsoSessionData)
    .catch(swallowError);
