import { TokenProviderError } from "@smithy/property-provider";
import {
  getProfileName,
  getSSOTokenFromFile,
  loadSsoSessionData,
  parseKnownFiles,
} from "@smithy/shared-ini-file-loader";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { EXPIRE_WINDOW_MS, REFRESH_MESSAGE } from "./constants";
import { fromSso } from "./fromSso";
import { getNewSsoOidcToken } from "./getNewSsoOidcToken";
import { validateTokenExpiry } from "./validateTokenExpiry";
import { validateTokenKey } from "./validateTokenKey";
import { writeSSOTokenToFile } from "./writeSSOTokenToFile";

vi.mock("@smithy/shared-ini-file-loader");
vi.mock("./getNewSsoOidcToken");
vi.mock("./validateTokenExpiry");
vi.mock("./validateTokenKey");
vi.mock("./writeSSOTokenToFile");

describe(fromSso.name, () => {
  const mockDateNow = Date.now();

  const mockSsoSessionName = "mock_sso_session_name";
  const mockSsoProfile = {
    sso_session: mockSsoSessionName,
  };
  const mockSsoSession = {
    sso_start_url: "mock_sso_start_url",
    sso_region: "mock_sso_region",
  };

  const mockProfileName = "mockProfileName";
  const mockInit = { profile: mockProfileName };
  const mockProfiles = { [mockProfileName]: mockSsoProfile };

  const mockSsoToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date(mockDateNow - 1000).toISOString(),
    clientId: "clientId",
    clientSecret: "clientSecret",
    refreshToken: "refreshToken",
  };

  const mockNewTokenFromService = {
    accessToken: "mockNewAccessToken",
    expiresIn: 3600,
    refreshToken: "mockNewRefreshToken",
    $metadata: {},
  };
  const mockNewToken = {
    token: mockNewTokenFromService.accessToken,
    expiration: new Date(mockDateNow + mockNewTokenFromService.expiresIn * 1000),
  };

  beforeEach(() => {
    vi.resetModules();
    vi.mocked(parseKnownFiles).mockResolvedValue(mockProfiles);
    vi.mocked(loadSsoSessionData).mockResolvedValue({ [mockSsoSessionName]: mockSsoSession });
    vi.mocked(getProfileName).mockReturnValue(mockProfileName);
    vi.mocked(getSSOTokenFromFile).mockResolvedValue(mockSsoToken);
    vi.mocked(getNewSsoOidcToken).mockResolvedValue(mockNewTokenFromService);
    vi.mocked(validateTokenKey).mockImplementation(() => {});
    vi.mocked(validateTokenExpiry).mockImplementation(() => {});
    vi.spyOn(Date, "now").mockReturnValue(mockDateNow);
  });

  afterEach(() => {
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    vi.clearAllMocks();
  });

  describe("throws validation error", () => {
    it("when profile is not found", async () => {
      vi.mocked(parseKnownFiles as any).mockReturnValue({});
      const expectedError = new TokenProviderError(
        `Profile '${mockProfileName}' could not be found in shared credentials file.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when sso_session is not defined for profile", async () => {
      const { sso_session, ...mockSsoProfileWithoutSsoSession } = mockSsoProfile;
      vi.mocked(parseKnownFiles as any).mockReturnValue({ [mockProfileName]: mockSsoProfileWithoutSsoSession });
      const expectedError = new TokenProviderError(
        `Profile '${mockProfileName}' is missing required property 'sso_session'.`
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when sso_session is not defined in configuration file", async () => {
      vi.mocked(loadSsoSessionData).mockResolvedValue({});
      const expectedError = new TokenProviderError(
        `Sso session '${mockSsoSessionName}' could not be found in shared credentials file.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when sso-session does not contain sso_start_url", async () => {
      const { sso_start_url, ...mockSsoSessionWithoutSsoStartUrl } = mockSsoSession;
      vi.mocked(loadSsoSessionData).mockResolvedValue({ [mockSsoSessionName]: mockSsoSessionWithoutSsoStartUrl });
      const expectedError = new TokenProviderError(
        `Sso session '${mockSsoSessionName}' is missing required property 'sso_start_url'.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when profile contains sso_start_url, but no sso_region", async () => {
      const { sso_region, ...mockSsoSessionWithoutSsoStartUrl } = mockSsoSession;
      vi.mocked(loadSsoSessionData).mockResolvedValue({ [mockSsoSessionName]: mockSsoSessionWithoutSsoStartUrl });
      const expectedError = new TokenProviderError(
        `Sso session '${mockSsoSessionName}' is missing required property 'sso_region'.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });
  });

  it("throws error if reading SSO Token from file fails", async () => {
    const mockError = new Error("mockError");
    vi.mocked(getSSOTokenFromFile).mockRejectedValue(mockError);
    const expectedError = new TokenProviderError(
      `The SSO session token associated with profile=mockProfileName was not found or is invalid. ` +
        `${REFRESH_MESSAGE}`,
      false
    );
    await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
  });

  it.each(["accessToken", "expiresAt"])("throws error if %s is missing in SSO Token from file", async (key) => {
    const mockError = new Error("mockError");
    vi.mocked(validateTokenKey).mockImplementation((validationKey) => {
      if (validationKey === key) {
        throw mockError;
      }
    });
    await expect(fromSso(mockInit)()).rejects.toStrictEqual(mockError);
    expect(validateTokenKey).toHaveBeenNthCalledWith(
      vi.mocked(validateTokenKey).mock.calls.length,
      key,
      // @ts-ignore Element implicitly has an 'any' type
      mockSsoToken[key]
    );
  });

  it("returns existing token if it's not expired", async () => {
    const mockValidSsoToken = {
      ...mockSsoToken,
      expiresAt: new Date(mockDateNow + EXPIRE_WINDOW_MS + 1000).toISOString(),
    };
    vi.mocked(getSSOTokenFromFile).mockResolvedValueOnce(mockValidSsoToken);

    await expect(fromSso(mockInit)()).resolves.toStrictEqual({
      token: mockValidSsoToken.accessToken,
      expiration: new Date(mockValidSsoToken.expiresAt),
    });
  });

  describe("skips refresh attempt if last refresh was done within 30 seconds", () => {
    it("throw if existing token is expired", async () => {
      const { fromSso } = await import("./fromSso");
      await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);
      expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
      expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region, mockInit);

      // Simulate token expiration.
      const ssoTokenExpiryError = new TokenProviderError(`SSO Token is expired. ${REFRESH_MESSAGE}`, false);
      vi.mocked(validateTokenExpiry).mockImplementation(() => {
        throw ssoTokenExpiryError;
      });
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(ssoTokenExpiryError);
      // Verify that getNewSsoOidcToken is not called again.
      expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
    });

    it("returns existing token if it's not expired", async () => {
      const { fromSso } = await import("./fromSso");
      await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);
      expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
      expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region, mockInit);

      // Return a valid token for second call.
      const mockValidSsoToken = {
        ...mockSsoToken,
        expiresAt: new Date(mockDateNow + EXPIRE_WINDOW_MS + 1000).toISOString(),
      };
      vi.mocked(getSSOTokenFromFile).mockResolvedValueOnce(mockValidSsoToken);
      await expect(fromSso(mockInit)()).resolves.toStrictEqual({
        token: mockValidSsoToken.accessToken,
        expiration: new Date(mockValidSsoToken.expiresAt),
      });
      // Verify that getNewSsoOidcToken is not called again.
      expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
    });
  });

  it.each(["clientId", "clientSecret", "refreshToken"])(
    "throws error if %s is missing in SSO Token from file",
    async (key) => {
      const mockError = new Error("mockError");
      vi.mocked(validateTokenKey).mockImplementation((validationKey) => {
        if (validationKey === key) {
          throw mockError;
        }
      });
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(mockError);
      expect(validateTokenKey).toHaveBeenNthCalledWith(
        vi.mocked(validateTokenKey).mock.calls.length,
        key,
        // @ts-ignore Element implicitly has an 'any' type
        mockSsoToken[key],
        true
      );
    }
  );

  describe("failure wrt token from ssoOidc.createToken()", () => {
    const returnExistingValidTokenInExpiryWindowTest = async (fromSsoImpl: typeof fromSso) => {
      const mockValidSsoTokenInExpiryWindow = {
        ...mockSsoToken,
        expiresAt: new Date(mockDateNow + EXPIRE_WINDOW_MS - 1000).toISOString(),
      };
      vi.mocked(getSSOTokenFromFile).mockResolvedValueOnce(mockValidSsoTokenInExpiryWindow);
      await expect(fromSsoImpl(mockInit)()).resolves.toStrictEqual({
        token: mockValidSsoTokenInExpiryWindow.accessToken,
        expiration: new Date(mockValidSsoTokenInExpiryWindow.expiresAt),
      });
      expect(getNewSsoOidcToken).toHaveBeenCalledWith(
        mockValidSsoTokenInExpiryWindow,
        mockSsoSession.sso_region,
        mockInit
      );
    };

    const throwErrorExpiredTokenTest = async (fromSsoImpl: typeof fromSso) => {
      const ssoTokenExpiryError = new TokenProviderError(`SSO Token is expired. ${REFRESH_MESSAGE}`, false);
      vi.mocked(validateTokenExpiry).mockImplementation(() => {
        throw ssoTokenExpiryError;
      });
      await expect(fromSsoImpl(mockInit)()).rejects.toStrictEqual(ssoTokenExpiryError);
      expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region, mockInit);
    };

    afterEach(() => {
      expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
    });

    describe("when getNewSsoOidcToken throws error", () => {
      for (const testFn of [returnExistingValidTokenInExpiryWindowTest, throwErrorExpiredTokenTest]) {
        it(testFn.name, async () => {
          const { fromSso } = await import("./fromSso");
          const mockError = new Error("mockError");
          vi.mocked(getNewSsoOidcToken).mockImplementation(() => {
            throw mockError;
          });
          testFn(fromSso);
        });
      }
    });

    describe.each(["accessToken", "expiresIn"])("when newSsoOidcToken does not contain key '%s'", (key) => {
      for (const testFn of [returnExistingValidTokenInExpiryWindowTest, throwErrorExpiredTokenTest]) {
        it(testFn.name, async () => {
          let accessTokenFirstCallSuccess = false;
          const { fromSso } = await import("./fromSso");
          const mockError = new Error("mockError");
          vi.mocked(validateTokenKey).mockImplementation((validationKey) => {
            if (validationKey === key) {
              // Skip first call of "accessToken" verification from ssoToken
              if (key === "accessToken" && !accessTokenFirstCallSuccess) {
                accessTokenFirstCallSuccess = true;
                return;
              }
              throw mockError;
            }
          });
          testFn(fromSso);
        });
      }
    });
  });

  it("returns valid access token from ssoOidc.createToken()", async () => {
    const { fromSso } = await import("./fromSso");
    await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);
    expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
    expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region, mockInit);

    expect(writeSSOTokenToFile).toHaveBeenCalledWith(mockSsoSessionName, {
      ...mockSsoToken,
      accessToken: mockNewTokenFromService.accessToken,
      expiresAt: mockNewToken.expiration.toISOString(),
      refreshToken: mockNewTokenFromService.refreshToken,
    });
  });

  it("swallows error if writeSSOTokenToFile fails", async () => {
    const mockError = new Error("mockError");
    vi.mocked(writeSSOTokenToFile).mockImplementation(() => {
      throw mockError;
    });
    const { fromSso } = await import("./fromSso");
    await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);

    expect(writeSSOTokenToFile).toHaveBeenCalledWith(mockSsoSessionName, {
      ...mockSsoToken,
      accessToken: mockNewTokenFromService.accessToken,
      expiresAt: mockNewToken.expiration.toISOString(),
      refreshToken: mockNewTokenFromService.refreshToken,
    });
  });
});
