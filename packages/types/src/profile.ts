export interface Profile {
  [key: string]: string | undefined;
}

export interface ParsedIniData {
  [key: string]: Profile;
}

export interface SharedConfigFiles {
  credentialsFile: ParsedIniData;
  configFile: ParsedIniData;
}
