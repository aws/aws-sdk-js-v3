import { ParsedIniData } from "@aws-sdk/types";

import { loadSharedConfigFiles, SharedConfigInit } from "./loadSharedConfigFiles";

export interface SourceProfileInit extends SharedConfigInit {
  /**
   * The configuration profile to use.
   */
  profile?: string;
}

/**
 * Load profiles from credentials and config INI files and normalize them into a
 * single profile list.
 *
 * @internal
 */
export const parseKnownFiles = async (init: SourceProfileInit): Promise<ParsedIniData> => {
  const parsedFiles = await loadSharedConfigFiles(init);
  return {
    ...parsedFiles.configFile,
    ...parsedFiles.credentialsFile,
  };
};
