import { getConfigFilepath } from "./getConfigFilepath";
import { getSsoSessionData } from "./getSsoSessionData";
import { loadSsoSessionData } from "./loadSsoSessionData";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";

jest.mock("./getConfigFilepath");
jest.mock("./getSsoSessionData");
jest.mock("./parseIni");
jest.mock("./slurpFile");

describe(loadSsoSessionData.name, () => {
  const mockConfigFilepath = "/mock/file/path/config";
  const mockSsoSessionData = { test: { key: "value" } };

  beforeEach(() => {
    (getConfigFilepath as jest.Mock).mockReturnValue(mockConfigFilepath);
    (parseIni as jest.Mock).mockImplementation((args) => args);
    (getSsoSessionData as jest.Mock).mockReturnValue(mockSsoSessionData);
    (slurpFile as jest.Mock).mockImplementation((path) => Promise.resolve(path));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns configFile from default locations", async () => {
    const ssoSessionData = await loadSsoSessionData();
    expect(ssoSessionData).toStrictEqual(mockSsoSessionData);
    expect(getConfigFilepath).toHaveBeenCalledWith();
  });

  it("returns configFile from init if defined", async () => {
    const ssoSessionData = await loadSsoSessionData({
      configFilepath: mockConfigFilepath,
    });
    expect(ssoSessionData).toStrictEqual(mockSsoSessionData);
    expect(getConfigFilepath).not.toHaveBeenCalled();
  });

  describe("swallows error and returns empty configuration", () => {
    it("when readFile throws error", async () => {
      (slurpFile as jest.Mock).mockRejectedValue("error");
      const ssoSessionData = await loadSsoSessionData();
      expect(ssoSessionData).toStrictEqual({});
    });

    it("when parseIni throws error", async () => {
      (parseIni as jest.Mock).mockRejectedValue("error");
      const ssoSessionData = await loadSsoSessionData();
      expect(ssoSessionData).toStrictEqual({});
    });

    it("when normalizeConfigFile throws error", async () => {
      (getSsoSessionData as jest.Mock).mockRejectedValue("error");
      const ssoSessionData = await loadSsoSessionData();
      expect(ssoSessionData).toStrictEqual({});
    });
  });
});
