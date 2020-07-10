import { join, sep } from "path";
import { ENV_CONFIG_PATH, ENV_CREDENTIALS_PATH, loadSharedConfigFiles } from "./";

jest.mock("fs", () => {
  interface FsModule {
    __addMatcher(toMatch: string, toReturn: string): void;
    __clearMatchers(): void;
    readFile: (path: string, encoding: string, cb: (err: Error | null, data?: string) => void) => void;
  }

  const fs: FsModule = <FsModule>jest.genMockFromModule("fs");
  let matchers = new Map<string, string>();

  function readFile(path: string, encoding: string, callback: (err: Error | null, data?: string) => void): void {
    if (matchers.has(path)) {
      callback(null, matchers.get(path));
      return;
    }

    callback(new Error("ENOENT: no such file or directory"));
  }

  fs.__addMatcher = function (toMatch: string, toReturn: string): void {
    matchers.set(toMatch, toReturn);
  };
  fs.__clearMatchers = function (): void {
    matchers.clear();
  };
  fs.readFile = readFile;

  return fs;
});
import * as fs from "fs";
const { __addMatcher, __clearMatchers } = fs as any;

jest.mock("os", () => {
  interface OsModule {
    homedir: () => string;
  }

  const os: OsModule = <OsModule>jest.genMockFromModule("os");
  const path = require("path");

  os.homedir = () => path.sep + path.join("home", "user");

  return os;
});
import { homedir } from "os";

const DEFAULT_CREDS = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  sessionToken: "sessionToken",
};

const FOO_CREDS = {
  accessKeyId: "foo",
  secretAccessKey: "bar",
  sessionToken: "baz",
};

const FIZZ_CREDS = {
  accessKeyId: "fizz",
  secretAccessKey: "buzz",
  sessionToken: "pop",
};

const envAtLoadTime: { [key: string]: string | undefined } = [
  ENV_CONFIG_PATH,
  ENV_CREDENTIALS_PATH,
  "HOME",
  "USERPROFILE",
  "HOMEPATH",
  "HOMEDRIVE",
].reduce((envState: { [key: string]: string | undefined }, varName: string) => {
  envState[varName] = process.env[varName];
  return envState;
}, {});

beforeEach(() => {
  __clearMatchers();
  Object.keys(envAtLoadTime).forEach((envKey) => {
    delete process.env[envKey];
  });
});

afterAll(() => {
  __clearMatchers();
  Object.keys(envAtLoadTime).forEach((envKey) => {
    process.env[envKey] = envAtLoadTime[envKey];
  });
});

describe("loadSharedConfigFiles", () => {
  it("should return empty objects if no files are found", async () => {
    const profiles = await loadSharedConfigFiles();
    expect(profiles.configFile).toEqual({});
    expect(profiles.credentialsFile).toEqual({});
  });

  describe("shared credentials file", () => {
    const SIMPLE_CREDS_FILE = `[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`;

    const parsed = {
      default: {
        aws_access_key_id: DEFAULT_CREDS.accessKeyId,
        aws_secret_access_key: DEFAULT_CREDS.secretAccessKey,
        aws_session_token: DEFAULT_CREDS.sessionToken,
      },
      foo: {
        aws_access_key_id: FOO_CREDS.accessKeyId,
        aws_secret_access_key: FOO_CREDS.secretAccessKey,
        aws_session_token: FOO_CREDS.sessionToken,
      },
    };

    const DEFAULT_PATH = join(homedir(), ".aws", "credentials");

    it("should read credentials from ~/.aws/credentials", async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CREDS_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: parsed,
      });
    });

    it("should read from a filepath if provided", async () => {
      const customPath = join(homedir(), ".aws", "foo");
      __addMatcher(customPath, SIMPLE_CREDS_FILE);

      expect(await loadSharedConfigFiles({ filepath: customPath })).toEqual({
        configFile: {},
        credentialsFile: parsed,
      });
    });

    it(`should read from a filepath specified in ${ENV_CREDENTIALS_PATH}`, async () => {
      process.env[ENV_CREDENTIALS_PATH] = join("foo", "bar", "baz");
      __addMatcher(process.env[ENV_CREDENTIALS_PATH], SIMPLE_CREDS_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: parsed,
      });
    });

    it("should prefer a provided filepath over one specified via environment variables", async () => {
      process.env[ENV_CREDENTIALS_PATH] = join("foo", "bar", "baz");
      const customPath = join("fizz", "buzz", "pop");
      __addMatcher(customPath, SIMPLE_CREDS_FILE);

      __addMatcher(process.env[ENV_CREDENTIALS_PATH], "");

      expect(await loadSharedConfigFiles({ filepath: customPath })).toEqual({
        configFile: {},
        credentialsFile: parsed,
      });
    });

    it("should use $HOME when available", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      __addMatcher(`${sep}foo${sep}bar${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: parsed,
      });
    });

    it("should use $USERPROFILE when available", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      __addMatcher(`C:\\Users\\user${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: parsed,
      });
    });

    it("should use $HOMEPATH/$HOMEDRIVE when available", async () => {
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user";
      __addMatcher(`D:\\Users\\user${sep}.aws${sep}credentials`, SIMPLE_CREDS_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: parsed,
      });
    });

    it("should prefer $HOME to $USERPROFILE", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.USERPROFILE = "C:\\Users\\user";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: {
          default: parsed.default,
        },
      });
    });

    it("should prefer $USERPROFILE to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: {
          default: parsed.default,
        },
      });
    });

    it("should prefer $HOME to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}credentials`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await loadSharedConfigFiles()).toEqual({
        configFile: {},
        credentialsFile: {
          default: parsed.default,
        },
      });
    });
  });

  describe("shared config file", () => {
    const SIMPLE_CONFIG_FILE = `[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[profile foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}

[profile "fizz buzz"]
aws_access_key_id = ${FIZZ_CREDS.accessKeyId}
aws_secret_access_key = ${FIZZ_CREDS.secretAccessKey}
aws_session_token = ${FIZZ_CREDS.sessionToken}`;

    const parsed = {
      default: {
        aws_access_key_id: DEFAULT_CREDS.accessKeyId,
        aws_secret_access_key: DEFAULT_CREDS.secretAccessKey,
        aws_session_token: DEFAULT_CREDS.sessionToken,
      },
      foo: {
        aws_access_key_id: FOO_CREDS.accessKeyId,
        aws_secret_access_key: FOO_CREDS.secretAccessKey,
        aws_session_token: FOO_CREDS.sessionToken,
      },
      "fizz buzz": {
        aws_access_key_id: FIZZ_CREDS.accessKeyId,
        aws_secret_access_key: FIZZ_CREDS.secretAccessKey,
        aws_session_token: FIZZ_CREDS.sessionToken,
      },
    };

    const DEFAULT_PATH = join(homedir(), ".aws", "config");

    it("should read credentials from ~/.aws/config", async () => {
      __addMatcher(DEFAULT_PATH, SIMPLE_CONFIG_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: parsed,
      });
    });

    it("should ignore non-profile sections of the file", async () => {
      __addMatcher(
        DEFAULT_PATH,
        `[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[profile foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}

[foo]
aws_access_key_id = ${FIZZ_CREDS.accessKeyId}
aws_secret_access_key = ${FIZZ_CREDS.secretAccessKey}
aws_session_token = ${FIZZ_CREDS.sessionToken}

[fizz]
key = value`
      );

      const { configFile } = await loadSharedConfigFiles();
      expect(configFile.default).toEqual(parsed.default);
      expect(configFile.foo).toEqual(parsed.foo);
      expect(configFile.fizz).toBeUndefined();
    });

    it("should read from a filepath if provided", async () => {
      const customPath = join(homedir(), ".aws", "foo");
      __addMatcher(customPath, SIMPLE_CONFIG_FILE);

      expect(await loadSharedConfigFiles({ configFilepath: customPath })).toEqual({
        credentialsFile: {},
        configFile: parsed,
      });
    });

    it(`should read from a filepath specified in ${ENV_CREDENTIALS_PATH}`, async () => {
      process.env[ENV_CONFIG_PATH] = join("foo", "bar", "baz");
      __addMatcher(process.env[ENV_CONFIG_PATH], SIMPLE_CONFIG_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: parsed,
      });
    });

    it("should prefer a provided filepath over one specified via environment variables", async () => {
      process.env[ENV_CONFIG_PATH] = join("foo", "bar", "baz");
      const customPath = join("fizz", "buzz", "pop");
      __addMatcher(
        customPath,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        process.env[ENV_CONFIG_PATH],
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await loadSharedConfigFiles({ configFilepath: customPath })).toEqual({
        credentialsFile: {},
        configFile: { default: parsed.default },
      });
    });

    it("should use $HOME when available", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      __addMatcher(`${sep}foo${sep}bar${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: parsed,
      });
    });

    it("should use $USERPROFILE when available", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      __addMatcher(`C:\\Users\\user${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: parsed,
      });
    });

    it("should use $HOMEPATH/$HOMEDRIVE when available", async () => {
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user";
      __addMatcher(`D:\\Users\\user${sep}.aws${sep}config`, SIMPLE_CONFIG_FILE);

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: parsed,
      });
    });

    it("should prefer $HOME to $USERPROFILE", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.USERPROFILE = "C:\\Users\\user";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: { default: parsed.default },
      });
    });

    it("should prefer $USERPROFILE to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.USERPROFILE = "C:\\Users\\user";
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `C:\\Users\\user${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: { default: parsed.default },
      });
    });

    it("should prefer $HOME to $HOMEDRIVE+$HOMEPATH", async () => {
      process.env.HOME = `${sep}foo${sep}bar`;
      process.env.HOMEDRIVE = "D:\\";
      process.env.HOMEPATH = "Users\\user2";

      __addMatcher(
        `${sep}foo${sep}bar${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretAccessKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}`.trim()
      );

      __addMatcher(
        `D:\\Users\\user2${sep}.aws${sep}config`,
        `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretAccessKey}
aws_session_token = ${FOO_CREDS.sessionToken}`.trim()
      );

      expect(await loadSharedConfigFiles()).toEqual({
        credentialsFile: {},
        configFile: { default: parsed.default },
      });
    });
  });
});
