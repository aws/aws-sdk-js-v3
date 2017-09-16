import {homedir} from 'os';
import {join, sep} from 'path';
import {readFile} from 'fs';

export const ENV_CREDENTIALS_PATH = 'AWS_SHARED_CREDENTIALS_FILE';
export const ENV_CONFIG_PATH = 'AWS_CONFIG_FILE';

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
    [key: string]: string|undefined;
}

export interface ParsedIniData {
    [key: string]: Profile;
}

export interface SharedConfigFiles {
    credentialsFile: ParsedIniData;
    configFile: ParsedIniData;
}

const swallowError = () => ({});

export function loadSharedConfigFiles(
    init: SharedConfigInit = {}
): Promise<SharedConfigFiles> {
    const {
        filepath = process.env[ENV_CREDENTIALS_PATH]
            || join(getHomeDir(), '.aws', 'credentials'),
        configFilepath = process.env[ENV_CONFIG_PATH]
            || join(getHomeDir(), '.aws', 'config'),
    } = init;

    return Promise.all([
        slurpFile(configFilepath)
            .then(parseIni)
            .then(normalizeConfigFile)
            .catch(swallowError),
        slurpFile(filepath)
            .then(parseIni)
            .catch(swallowError),
    ]).then((parsedFiles: Array<ParsedIniData>) => {
        const [configFile, credentialsFile] = parsedFiles;
        return {
            configFile,
            credentialsFile,
        };
    });
}

const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
function normalizeConfigFile(data: ParsedIniData): ParsedIniData {
    const map: ParsedIniData = {};
    for (let key of Object.keys(data)) {
        let matches: Array<string>|null;
        if (key === 'default') {
            map.default = data.default;
        } else if (matches = profileKeyRegex.exec(key)) {
            const [_1, _2, normalizedKey] = matches;
            if (normalizedKey) {
                map[normalizedKey] = data[key];
            }
        }
    }

    return map;
}

function parseIni(iniData: string): ParsedIniData {
    const map: ParsedIniData = {};
    let currentSection: string|undefined;
    for (let line of iniData.split(/\r?\n/)) {
        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
        const section = line.match(/^\s*\[([^\[\]]+)]\s*$/);
        if (section) {
            currentSection = section[1];
        } else if (currentSection) {
            const item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
            if (item) {
                map[currentSection] = map[currentSection] || {};
                map[currentSection][item[1]] = item[2];
            }
        }
    }

    return map;
}

function slurpFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function getHomeDir(): string {
    const {
        HOME,
        USERPROFILE,
        HOMEPATH,
        HOMEDRIVE = `C:${sep}`,
    } = process.env;

    if (HOME) return HOME;
    if (USERPROFILE) return USERPROFILE;
    if (HOMEPATH) return `${HOMEDRIVE}${HOMEPATH}`;

    return homedir();
}