// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises } from "fs";

import { getSSOTokenFilepath } from "./getSSOTokenFilepath";
import { getSSOTokenFromFile } from "./getSSOTokenFromFile";

jest.mock("fs", () => ({ promises: { readFile: jest.fn() } }));
jest.mock("./getSSOTokenFilepath");

describe(getSSOTokenFromFile.name, () => {
  const mockSsoStartUrl = "mock_sso_start_url";
  const mockSsoTokenFilepath = "/home/dir/.aws/sso/cache/mockCacheName.json";

  const mockToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  beforeEach(() => {
    (getSSOTokenFilepath as jest.Mock).mockReturnValue(mockSsoTokenFilepath);
    (promises.readFile as jest.Mock).mockResolvedValue(JSON.stringify(mockToken));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("re-throws if getting SSO Token filepath fails", async () => {
    const expectedError = new Error("error");
    (getSSOTokenFilepath as jest.Mock).mockImplementationOnce(() => {
      throw expectedError;
    });

    try {
      await getSSOTokenFromFile(mockSsoStartUrl);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(promises.readFile).not.toHaveBeenCalled();
  });

  it("re-throws if readFile fails", async () => {
    const expectedError = new Error("error");
    (promises.readFile as jest.Mock).mockRejectedValue(expectedError);

    try {
      await getSSOTokenFromFile(mockSsoStartUrl);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(promises.readFile).toHaveBeenCalledWith(mockSsoTokenFilepath, "utf8");
  });

  it("re-throws if token is not a valid JSON", async () => {
    const errMsg = "Unexpected token";
    (promises.readFile as jest.Mock).mockReturnValue("invalid JSON");

    try {
      await getSSOTokenFromFile(mockSsoStartUrl);
      fail(`expected '${errMsg}'`);
    } catch (error) {
      expect(error.message).toContain(errMsg);
    }
    expect(promises.readFile).toHaveBeenCalledWith(mockSsoTokenFilepath, "utf8");
  });

  it("returns token when it's valid", async () => {
    const token = await getSSOTokenFromFile(mockSsoStartUrl);
    expect(token).toStrictEqual(mockToken);
    expect(promises.readFile).toHaveBeenCalledWith(mockSsoTokenFilepath, "utf8");
  });
});
