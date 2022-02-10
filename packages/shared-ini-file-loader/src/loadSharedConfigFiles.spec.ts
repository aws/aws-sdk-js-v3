import { join } from "path";

import { getHomeDir } from "./getHomeDir";
import { ENV_CONFIG_PATH, ENV_CREDENTIALS_PATH, loadSharedConfigFiles } from "./loadSharedConfigFiles";
import { normalizeConfigFile } from "./normalizeConfigFile";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";

jest.mock("path");
jest.mock("./getHomeDir");
jest.mock("./normalizeConfigFile");
jest.mock("./parseIni");
jest.mock("./slurpFile");

describe("loadSharedConfigFiles", () => {
  const mockSeparator = "/";
  const mockHomeDir = "/mock/home/dir";

  const mockConfigFilepath = "/mock/file/path/config";
  const mockCredsFilepath = "/mock/file/path/credentials";
  const mockCustomSharedConfigFiles = {
    configFile: mockConfigFilepath,
    credentialsFile: mockCredsFilepath,
  };

  const defaultConfigFilepath = `${mockHomeDir}/.aws/config`;
  const defaultCredsFilepath = `${mockHomeDir}/.aws/credentials`;
  const mockDefaultSharedConfigFiles = {
    configFile: defaultConfigFilepath,
    credentialsFile: defaultCredsFilepath,
  };

  beforeEach(() => {
    (join as jest.Mock).mockImplementation((...args) => args.join(mockSeparator));
    (getHomeDir as jest.Mock).mockReturnValue(mockHomeDir);
    (parseIni as jest.Mock).mockImplementation((args) => args);
    (normalizeConfigFile as jest.Mock).mockImplementation((args) => args);
    (slurpFile as jest.Mock).mockImplementation((path) => Promise.resolve(path));
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("returns configFile and credentialsFile from default locations", async () => {
    const sharedConfigFiles = await loadSharedConfigFiles();
    expect(sharedConfigFiles).toStrictEqual(mockDefaultSharedConfigFiles);
  });

  it("returns configFile and credentialsFile from locations defined in environment", async () => {
    const OLD_ENV = process.env;
    process.env = {
      ...OLD_ENV,
      [ENV_CONFIG_PATH]: mockConfigFilepath,
      [ENV_CREDENTIALS_PATH]: mockCredsFilepath,
    };
    const sharedConfigFiles = await loadSharedConfigFiles({});
    expect(sharedConfigFiles).toStrictEqual(mockCustomSharedConfigFiles);
    process.env = OLD_ENV;
  });

  it("returns configFile and credentialsFile from init if defined", async () => {
    const sharedConfigFiles = await loadSharedConfigFiles({
      filepath: mockCredsFilepath,
      configFilepath: mockConfigFilepath,
    });
    expect(sharedConfigFiles).toStrictEqual(mockCustomSharedConfigFiles);
  });

  describe("swallows error and returns empty configuration", () => {
    it("when readFile throws error", async () => {
      (slurpFile as jest.Mock).mockRejectedValue("error");
      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual({ configFile: {}, credentialsFile: {} });
    });

    it("when parseIni throws error", async () => {
      (parseIni as jest.Mock).mockRejectedValue("error");
      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual({ configFile: {}, credentialsFile: {} });
    });

    it("when normalizeConfigFile throws error", async () => {
      (normalizeConfigFile as jest.Mock).mockRejectedValue("error");
      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual({
        configFile: {},
        credentialsFile: defaultCredsFilepath,
      });
    });
  });
});
