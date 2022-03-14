import { loadSharedConfigFiles } from "./loadSharedConfigFiles";
import { parseKnownFiles } from "./parseKnownFiles";

jest.mock("./loadSharedConfigFiles");

describe(parseKnownFiles.name, () => {
  const mockConfigFile = {
    mockConfigProfileName1: { configKey1: "configValue1" },
    mockConfigProfileName2: { configKey2: "configValue2" },
  };
  const mockCredentialsFile = {
    mockCredentialsProfileName1: { credsKey1: "credsValue1" },
    mockCredentialsProfileName2: { credsKey2: "credsValue2" },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("gets parsedFiles from loadedConfig if provided in init", async () => {
    const parsedFiles = await parseKnownFiles({
      loadedConfig: Promise.resolve({
        configFile: mockConfigFile,
        credentialsFile: mockCredentialsFile,
      }),
    });

    expect(loadSharedConfigFiles).not.toHaveBeenCalled();
    expect(parsedFiles).toEqual({
      ...mockConfigFile,
      ...mockCredentialsFile,
    });
  });

  it("gets parsedFiles from loadSharedConfigFiles if not provided in init", async () => {
    (loadSharedConfigFiles as jest.Mock).mockReturnValue(
      Promise.resolve({
        configFile: mockConfigFile,
        credentialsFile: mockCredentialsFile,
      })
    );
    const mockInit = { profile: "mockProfile" };
    const parsedFiles = await parseKnownFiles(mockInit);

    expect(loadSharedConfigFiles).toHaveBeenCalledWith(mockInit);
    expect(parsedFiles).toEqual({
      ...mockConfigFile,
      ...mockCredentialsFile,
    });
  });
});
