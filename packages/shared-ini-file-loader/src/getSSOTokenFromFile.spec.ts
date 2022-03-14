import { CredentialsProviderError } from "@aws-sdk/property-provider";
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

  describe("throws error for invalid token", () => {
    afterEach(async () => {
      const expectedError = new CredentialsProviderError(
        `The SSO session associated with this profile is invalid.` +
          ` To refresh this SSO session run aws sso login with the corresponding profile.`,
        false
      );

      try {
        await getSSOTokenFromFile(mockSsoStartUrl);
        fail(`expected ${expectedError}`);
      } catch (error) {
        expect(error).toStrictEqual(expectedError);
      }
    });

    it("throws error if readFile fails", async () => {
      (promises.readFile as jest.Mock).mockRejectedValue(new Error("error"));
    });

    it("throws error if token is not a valid JSON", async () => {
      (promises.readFile as jest.Mock).mockReturnValue("invalid JSON");
    });
  });

  it("returns token when it's valid", async () => {
    const token = await getSSOTokenFromFile(mockSsoStartUrl);
    expect(token).toStrictEqual(mockToken);
  });
});
