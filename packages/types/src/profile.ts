/**
 * @internal
 */
export interface Profile {
  [key: string]: string | undefined;
}

/**
 * @internal
 */
export interface ParsedIniData {
  [key: string]: Profile;
}

/**
 * @internal
 */
export interface SharedConfigFiles {
  credentialsFile: ParsedIniData;
  configFile: ParsedIniData;
}
