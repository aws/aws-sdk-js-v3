import { ParsedIniData } from "@aws-sdk/types";

import { loadSharedConfigFiles } from "./loadSharedConfigFiles";

/**
 * Load profiles from credentials and config INI files and normalize them into a
 * single profile list.
 *
 * @internal
 */
export const parseKnownFiles = async (): Promise<ParsedIniData> => {
  const loadedConfig = loadSharedConfigFiles();

  const parsedFiles = await loadedConfig;
  return {
    ...parsedFiles.configFile,
    ...parsedFiles.credentialsFile,
  };
};
