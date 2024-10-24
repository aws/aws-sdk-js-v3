import { getSSOTokenFilepath } from "@smithy/shared-ini-file-loader";
// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises } from "fs";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { writeSSOTokenToFile } from "./writeSSOTokenToFile";

vi.mock("fs", () => ({ promises: { writeFile: vi.fn() } }));
vi.mock("@smithy/shared-ini-file-loader");

describe(writeSSOTokenToFile.name, () => {
  const mockSsoStartUrl = "mock_sso_start_url";
  const mockSsoTokenFilepath = "/home/dir/.aws/sso/cache/mockCacheName.json";

  const mockSsoToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  beforeEach(() => {
    vi.mocked(getSSOTokenFilepath).mockReturnValue(mockSsoTokenFilepath);
  });

  afterEach(() => {
    expect(getSSOTokenFilepath).toHaveBeenCalledWith(mockSsoStartUrl);
    vi.clearAllMocks();
  });

  it("re-throws if getting SSO Token filepath fails", async () => {
    const expectedError = new Error("error");
    vi.mocked(getSSOTokenFilepath).mockImplementationOnce(() => {
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
    (promises.writeFile as any).mockRejectedValueOnce(expectedError);

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
