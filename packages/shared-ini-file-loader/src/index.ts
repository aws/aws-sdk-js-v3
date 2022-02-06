// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";

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

const swallowError = () => ({});

const { readFile } = fsPromises;
export const loadSharedConfigFiles = (init: SharedConfigInit = {}): Promise<SharedConfigFiles> => {
  const {
    filepath = process.env[ENV_CREDENTIALS_PATH] || join(getHomeDir(), ".aws", "credentials"),
    configFilepath = process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config"),
  } = init;

  return Promise.all([
    readFile(configFilepath, "utf8").then(parseIni).then(normalizeConfigFile).catch(swallowError),
    readFile(filepath, "utf8").then(parseIni).catch(swallowError),
  ]).then((parsedFiles: Array<ParsedIniData>) => {
    const [configFile, credentialsFile] = parsedFiles;
    return {
      configFile,
      credentialsFile,
    };
  });
};

const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
const normalizeConfigFile = (data: ParsedIniData): ParsedIniData => {
  const map: ParsedIniData = {};
  for (const key of Object.keys(data)) {
    let matches: Array<string> | null;
    if (key === "default") {
      map.default = data.default;
    } else if ((matches = profileKeyRegex.exec(key))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_1, _2, normalizedKey] = matches;
      if (normalizedKey) {
        map[normalizedKey] = data[key];
      }
    }
  }

  return map;
};

const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData: string): ParsedIniData => {
  const map: ParsedIniData = {};
  let currentSection: string | undefined;
  for (let line of iniData.split(/\r?\n/)) {
    line = line.split(/(^|\s)[;#]/)[0]; // remove comments
    const section = line.match(/^\s*\[([^\[\]]+)]\s*$/);
    if (section) {
      currentSection = section[1];
      if (profileNameBlockList.includes(currentSection)) {
        throw new Error(`Found invalid profile name "${currentSection}"`);
      }
    } else if (currentSection) {
      const item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
      if (item) {
        map[currentSection] = map[currentSection] || {};
        map[currentSection][item[1]] = item[2];
      }
    }
  }

  return map;
};
