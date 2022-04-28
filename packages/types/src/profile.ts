export interface ParsedIniSection {
  [key: string]: string | undefined;
}

/**
 * @deprecated: Please use ParsedIniSection
 */
export interface Profile extends ParsedIniSection {}

export interface ParsedIniData {
  [key: string]: ParsedIniSection;
}

export interface SharedConfigFiles {
  credentialsFile: ParsedIniData;
  configFile: ParsedIniData;
}
