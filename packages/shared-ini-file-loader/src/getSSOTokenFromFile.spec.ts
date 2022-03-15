import { createHash } from "crypto";
// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises } from "fs";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";
import { getSSOTokenFromFile } from "./getSSOTokenFromFile";

jest.mock("crypto");
jest.mock("fs", () => ({ promises: { readFile: jest.fn() } }));
jest.mock("./getHomeDir");

describe(getSSOTokenFromFile.name, () => {
  const mockCacheName = "mockCacheName";
  const mockDigest = jest.fn().mockReturnValue(mockCacheName);
  const mockUpdate = jest.fn().mockReturnValue({ digest: mockDigest });
  const mockHomeDir = "/home/dir";
  const mockSsoStartUrl = "mock_sso_start_url";

  const mockToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  beforeEach(() => {
    (createHash as jest.Mock).mockReturnValue({ update: mockUpdate });
    (getHomeDir as jest.Mock).mockReturnValue(mockHomeDir);
    (promises.readFile as jest.Mock).mockResolvedValue(JSON.stringify(mockToken));
  });

  afterEach(() => {
    expect(createHash).toHaveBeenCalledWith("sha1");
    expect(promises.readFile).toHaveBeenCalledWith(
      join(mockHomeDir, ".aws", "sso", "cache", `${mockCacheName}.json`),
      "utf8"
    );
    jest.clearAllMocks();
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
  });

  it("returns token when it's valid", async () => {
    const token = await getSSOTokenFromFile(mockSsoStartUrl);
    expect(token).toStrictEqual(mockToken);
  });
});
