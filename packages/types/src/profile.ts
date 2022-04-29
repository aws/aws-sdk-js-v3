export interface IniSection {
  [key: string]: string | undefined;
}

/**
 * @deprecated: Please use IniSection
 */
export interface Profile extends IniSection {}

export interface ParsedIniData {
  [key: string]: IniSection;
}

export interface SharedConfigFiles {
  credentialsFile: ParsedIniData;
  configFile: ParsedIniData;
}
