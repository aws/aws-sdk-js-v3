export type IniSection = Record<string, string | undefined>;

/**
 * @deprecated: Please use IniSection
 */
export interface Profile extends IniSection {}

export type ParsedIniData = Record<string, IniSection>;

export interface SharedConfigFiles {
  credentialsFile: ParsedIniData;
  configFile: ParsedIniData;
}
