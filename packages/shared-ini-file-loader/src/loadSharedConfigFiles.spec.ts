// import * as fs from "fs";
import { join } from "path";

describe("loadSharedConfigFiles", () => {
  let ENV_CONFIG_PATH;
  let ENV_CREDENTIALS_PATH;
  let loadSharedConfigFiles;

  const mockSeparator = "/";
  const mockHomeDir = "/mock/home/dir";
  const mockConfigFilepath = "/mock/file/path/config";
  const mockCredsFilepath = "/mock/file/path/credentials";

  beforeEach(() => {
    jest.mock("./getHomeDir", () => ({
      getHomeDir: jest.fn().mockReturnValue(mockHomeDir),
    }));
    jest.mock("path", () => ({
      join: jest.fn().mockImplementation((...args) => args.join(mockSeparator)),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  describe("no error is thrown", () => {
    let mockReadFile;
    const defaultConfigFilepath = `${mockHomeDir}/.aws/config`;
    const defaultCredsFilepath = `${mockHomeDir}/.aws/credentials`;

    const mockDefaultSharedConfigFiles = {
      configFile: { path: defaultConfigFilepath, options: "utf-8" },
      credentialsFile: { path: defaultCredsFilepath, options: "utf-8" },
    };
    const mockCustomSharedConfigFiles = {
      configFile: { path: mockConfigFilepath, options: "utf-8" },
      credentialsFile: { path: mockCredsFilepath, options: "utf-8" },
    };

    beforeEach(() => {
      mockReadFile = jest.fn().mockImplementation((path, options) => Promise.resolve({ path, options }));
      jest.mock("fs", () => ({ promises: { readFile: mockReadFile } }));

      jest.mock("./parseIni", () => ({
        parseIni: jest.fn().mockImplementation((args) => args),
      }));

      jest.mock("./normalizeConfigFile", () => ({
        normalizeConfigFile: jest.fn().mockImplementation((args) => args),
      }));

      // Using require as loadSharedConfigFiles contains local state.
      const loadSharedConfigFilesRequire = require("./loadSharedConfigFiles");
      ENV_CONFIG_PATH = loadSharedConfigFilesRequire.ENV_CONFIG_PATH;
      ENV_CREDENTIALS_PATH = loadSharedConfigFilesRequire.ENV_CREDENTIALS_PATH;
      loadSharedConfigFiles = loadSharedConfigFilesRequire.loadSharedConfigFiles;
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

    it("makes just two readFile calls with multiple parallel or series calls for same filepaths", async () => {
      const sharedConfigFilesArr = await Promise.all([loadSharedConfigFiles(), loadSharedConfigFiles()]);
      expect(sharedConfigFilesArr).toEqual([mockDefaultSharedConfigFiles, mockDefaultSharedConfigFiles]);

      // There are two readFile calls even through loadSharedConfigFiles is called in parallel twice.
      expect(mockReadFile).toHaveBeenCalledTimes(2);
      expect(mockReadFile).toHaveBeenNthCalledWith(1, defaultConfigFilepath, "utf-8");
      expect(mockReadFile).toHaveBeenNthCalledWith(2, defaultCredsFilepath, "utf-8");

      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual(mockDefaultSharedConfigFiles);
      // There are two readFile calls even through loadSharedConfigFiles is called for the third time.
      expect(mockReadFile).toHaveBeenCalledTimes(2);
    });

    describe("makes readFile calls based on filepaths", () => {
      afterEach(() => {
        expect(mockReadFile).toHaveBeenCalledTimes(4);
        expect(mockReadFile).toHaveBeenNthCalledWith(1, defaultConfigFilepath, "utf-8");
        expect(mockReadFile).toHaveBeenNthCalledWith(2, defaultCredsFilepath, "utf-8");
        expect(mockReadFile).toHaveBeenNthCalledWith(3, mockConfigFilepath, "utf-8");
        expect(mockReadFile).toHaveBeenNthCalledWith(4, mockCredsFilepath, "utf-8");
      });

      it("in parallel", async () => {
        const sharedConfigFilesArr = await Promise.all([
          loadSharedConfigFiles(),
          loadSharedConfigFiles({
            filepath: mockCredsFilepath,
            configFilepath: mockConfigFilepath,
          }),
        ]);
        expect(sharedConfigFilesArr).toEqual([mockDefaultSharedConfigFiles, mockCustomSharedConfigFiles]);
      });

      it("in series", async () => {
        const sharedConfigFilesDefault = await loadSharedConfigFiles();
        expect(sharedConfigFilesDefault).toStrictEqual(mockDefaultSharedConfigFiles);
        const sharedConfigFilesCustom = await loadSharedConfigFiles({
          filepath: mockCredsFilepath,
          configFilepath: mockConfigFilepath,
        });
        expect(sharedConfigFilesCustom).toStrictEqual(mockCustomSharedConfigFiles);
      });
    });
  });

  describe("swallows error and returns empty configuration", () => {
    it("when readFile throws error", async () => {
      jest.mock("fs", () => ({
        promises: {
          readFile: jest.fn().mockRejectedValue("error"),
        },
      }));
      // Using require as loadSharedConfigFiles contains local state.
      const loadSharedConfigFilesRequire = require("./loadSharedConfigFiles");
      loadSharedConfigFiles = loadSharedConfigFilesRequire.loadSharedConfigFiles;

      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual({ configFile: {}, credentialsFile: {} });
    });

    it("when parseIni throws error", async () => {
      jest.mock("fs", () => ({
        promises: {
          readFile: jest.fn().mockImplementation((path, options) => Promise.resolve({ path, options })),
        },
      }));

      jest.mock("./parseIni", () => ({
        parseIni: jest.fn().mockRejectedValue("error"),
      }));

      // Using require as loadSharedConfigFiles contains local state.
      const loadSharedConfigFilesRequire = require("./loadSharedConfigFiles");
      loadSharedConfigFiles = loadSharedConfigFilesRequire.loadSharedConfigFiles;

      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual({ configFile: {}, credentialsFile: {} });
    });

    it("when normalizeConfigFile throws error", async () => {
      const defaultCredsFilepath = `${mockHomeDir}/.aws/credentials`;
      jest.mock("fs", () => ({
        promises: {
          readFile: jest.fn().mockImplementation((path, options) => Promise.resolve({ path, options })),
        },
      }));

      jest.mock("./parseIni", () => ({
        parseIni: jest.fn().mockImplementation((args) => args),
      }));

      jest.mock("./normalizeConfigFile", () => ({
        normalizeConfigFile: jest.fn().mockRejectedValue("error"),
      }));

      // Using require as loadSharedConfigFiles contains local state.
      const loadSharedConfigFilesRequire = require("./loadSharedConfigFiles");
      loadSharedConfigFiles = loadSharedConfigFilesRequire.loadSharedConfigFiles;

      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual({
        configFile: {},
        credentialsFile: { path: defaultCredsFilepath, options: "utf-8" },
      });
    });
  });
});
