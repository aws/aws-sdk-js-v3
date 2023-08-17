import { getSSOTokenFilepath } from "@smithy/shared-ini-file-loader";
// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises } from "fs";

import { writeSSOTokenToFile } from "./writeSSOTokenToFile";

jest.mock("fs", () => ({ promises: { writeFile: jest.fn() } }));
jest.mock("@smithy/shared-ini-file-loader");

describe(writeSSOTokenToFile.name, () => {
  const mockSsoStartUrl = "mock_sso_start_url";
  const mockSsoTokenFilepath = "/home/dir/.aws/sso/cache/mockCacheName.json";

  const mockSsoToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  beforeEach(() => {
    (getSSOTokenFilepath as jest.Mock).mockReturnValue(mockSsoTokenFilepath);
  });

  afterEach(() => {
    expect(getSSOTokenFilepath).toHaveBeenCalledWith(mockSsoStartUrl);
    jest.clearAllMocks();
  });

  it("re-throws if getting SSO Token filepath fails", async () => {
    const expectedError = new Error("error");
    (getSSOTokenFilepath as jest.Mock).mockImplementationOnce(() => {
      throw expectedError;
    });

    try {
      await writeSSOTokenToFile(mockSsoStartUrl, mockSsoToken);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(promises.writeFile).not.toHaveBeenCalled();
  });

  it("re-throws if writeFile fails", async () => {
    const expectedError = new Error("error");
    (promises.writeFile as jest.Mock).mockRejectedValueOnce(expectedError);

    try {
      await writeSSOTokenToFile(mockSsoStartUrl, mockSsoToken);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(promises.writeFile).toHaveBeenCalledWith(mockSsoTokenFilepath, JSON.stringify(mockSsoToken, null, 2));
  });

  it("writes token to SSO Token filepath", async () => {
    await writeSSOTokenToFile(mockSsoStartUrl, mockSsoToken);
    expect(promises.writeFile).toHaveBeenCalledWith(mockSsoTokenFilepath, JSON.stringify(mockSsoToken, null, 2));
  });
});
