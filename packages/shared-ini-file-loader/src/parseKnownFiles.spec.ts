import { loadSharedConfigFiles } from "./loadSharedConfigFiles";
import { parseKnownFiles } from "./parseKnownFiles";

jest.mock("./loadSharedConfigFiles");

describe(parseKnownFiles.name, () => {
  const mockConfigFile = {
    profileName1: { configKey1: "configValue1" },
    profileName2: { configKey2: "configValue2" },
  };
  const mockCredentialsFile = {
    profileName1: { credsKey1: "credsValue1" },
    profileName2: { credsKey2: "credsValue2" },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("gets parsedFiles from loadSharedConfigFiles", async () => {
    (loadSharedConfigFiles as jest.Mock).mockReturnValue(
      Promise.resolve({
        configFile: mockConfigFile,
        credentialsFile: mockCredentialsFile,
      })
    );
    const mockInit = { profile: "mockProfile" };
    const parsedFiles = await parseKnownFiles(mockInit);

    expect(loadSharedConfigFiles).toHaveBeenCalledWith(mockInit);
    expect(parsedFiles).toMatchInlineSnapshot(`
      Object {
        "profileName1": Object {
          "configKey1": "configValue1",
          "credsKey1": "credsValue1",
        },
        "profileName2": Object {
          "configKey2": "configValue2",
          "credsKey2": "credsValue2",
        },
      }
    `);
  });
});
