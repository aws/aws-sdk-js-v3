import { getConfigFilepath } from "./getConfigFilepath";
import { getCredentialsFilepath } from "./getCredentialsFilepath";
import { getProfileData } from "./getProfileData";
import { loadSharedConfigFiles } from "./loadSharedConfigFiles";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";

jest.mock("./getConfigFilepath");
jest.mock("./getCredentialsFilepath");
jest.mock("./getProfileData");
jest.mock("./parseIni");
jest.mock("./slurpFile");

describe("loadSharedConfigFiles", () => {
  const mockConfigFilepath = "/mock/file/path/config";
  const mockCredsFilepath = "/mock/file/path/credentials";
  const mockSharedConfigFiles = {
    configFile: mockConfigFilepath,
    credentialsFile: mockCredsFilepath,
  };

  beforeEach(() => {
    (getConfigFilepath as jest.Mock).mockReturnValue(mockConfigFilepath);
    (getCredentialsFilepath as jest.Mock).mockReturnValue(mockCredsFilepath);
    (parseIni as jest.Mock).mockImplementation((args) => args);
    (getProfileData as jest.Mock).mockImplementation((args) => args);
    (slurpFile as jest.Mock).mockImplementation((path) => Promise.resolve(path));
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("returns configFile and credentialsFile from default locations", async () => {
    const sharedConfigFiles = await loadSharedConfigFiles();
    expect(sharedConfigFiles).toStrictEqual(mockSharedConfigFiles);
    expect(getConfigFilepath).toHaveBeenCalledWith();
    expect(getCredentialsFilepath).toHaveBeenCalledWith();
  });

  it("returns configFile and credentialsFile from init if defined", async () => {
    const sharedConfigFiles = await loadSharedConfigFiles({
      filepath: mockCredsFilepath,
      configFilepath: mockConfigFilepath,
    });
    expect(sharedConfigFiles).toStrictEqual(mockSharedConfigFiles);
    expect(getConfigFilepath).not.toHaveBeenCalled();
    expect(getCredentialsFilepath).not.toHaveBeenCalled();
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
      (getProfileData as jest.Mock).mockRejectedValue("error");
      const sharedConfigFiles = await loadSharedConfigFiles();
      expect(sharedConfigFiles).toStrictEqual({
        configFile: {},
        credentialsFile: mockCredsFilepath,
      });
    });
  });
});
