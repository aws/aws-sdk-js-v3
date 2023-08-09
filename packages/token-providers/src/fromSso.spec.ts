import { TokenProviderError } from "@smithy/property-provider";
import {
  getProfileName,
  getSSOTokenFromFile,
  loadSsoSessionData,
  parseKnownFiles,
} from "@smithy/shared-ini-file-loader";

import { EXPIRE_WINDOW_MS, REFRESH_MESSAGE } from "./constants";
import { fromSso } from "./fromSso";
import { getNewSsoOidcToken } from "./getNewSsoOidcToken";
import { validateTokenExpiry } from "./validateTokenExpiry";
import { validateTokenKey } from "./validateTokenKey";
import { writeSSOTokenToFile } from "./writeSSOTokenToFile";

jest.mock("@smithy/shared-ini-file-loader");
jest.mock("./getNewSsoOidcToken");
jest.mock("./validateTokenExpiry");
jest.mock("./validateTokenKey");
jest.mock("./writeSSOTokenToFile");

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
  };
  const mockNewToken = {
    token: mockNewTokenFromService.accessToken,
    expiration: new Date(mockDateNow + mockNewTokenFromService.expiresIn * 1000),
  };

  beforeEach(() => {
    (parseKnownFiles as jest.Mock).mockResolvedValue(mockProfiles);
    (loadSsoSessionData as jest.Mock).mockResolvedValue({ [mockSsoSessionName]: mockSsoSession });
    (getProfileName as jest.Mock).mockReturnValue(mockProfileName);
    (getSSOTokenFromFile as jest.Mock).mockResolvedValue(mockSsoToken);
    (getNewSsoOidcToken as jest.Mock).mockResolvedValue(mockNewTokenFromService);
    (validateTokenKey as jest.Mock).mockImplementation(() => {});
    (validateTokenExpiry as jest.Mock).mockImplementation(() => {});
    jest.spyOn(Date, "now").mockReturnValue(mockDateNow);
  });

  afterEach(() => {
    expect(parseKnownFiles).toHaveBeenCalledWith(mockInit);
    expect(getProfileName).toHaveBeenCalledWith(mockInit);
    jest.clearAllMocks();
  });

  describe("throws validation error", () => {
    it("when profile is not found", async () => {
      (parseKnownFiles as jest.Mock).mockReturnValue({});
      const expectedError = new TokenProviderError(
        `Profile '${mockProfileName}' could not be found in shared credentials file.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when sso_session is not defined for profile", async () => {
      const { sso_session, ...mockSsoProfileWithoutSsoSession } = mockSsoProfile;
      (parseKnownFiles as jest.Mock).mockReturnValue({ [mockProfileName]: mockSsoProfileWithoutSsoSession });
      const expectedError = new TokenProviderError(
        `Profile '${mockProfileName}' is missing required property 'sso_session'.`
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when sso_session is not defined in configuration file", async () => {
      (loadSsoSessionData as jest.Mock).mockResolvedValue({});
      const expectedError = new TokenProviderError(
        `Sso session '${mockSsoSessionName}' could not be found in shared credentials file.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when sso-session does not contain sso_start_url", async () => {
      const { sso_start_url, ...mockSsoSessionWithoutSsoStartUrl } = mockSsoSession;
      (loadSsoSessionData as jest.Mock).mockResolvedValue({ [mockSsoSessionName]: mockSsoSessionWithoutSsoStartUrl });
      const expectedError = new TokenProviderError(
        `Sso session '${mockSsoSessionName}' is missing required property 'sso_start_url'.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });

    it("when profile contains sso_start_url, but no sso_region", async () => {
      const { sso_region, ...mockSsoSessionWithoutSsoStartUrl } = mockSsoSession;
      (loadSsoSessionData as jest.Mock).mockResolvedValue({ [mockSsoSessionName]: mockSsoSessionWithoutSsoStartUrl });
      const expectedError = new TokenProviderError(
        `Sso session '${mockSsoSessionName}' is missing required property 'sso_region'.`,
        false
      );
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
    });
  });

  it("throws error if reading SSO Token from file fails", async () => {
    const mockError = new Error("mockError");
    (getSSOTokenFromFile as jest.Mock).mockRejectedValue(mockError);
    const expectedError = new TokenProviderError(
      `The SSO session token associated with profile=mockProfileName was not found or is invalid. ` +
        `${REFRESH_MESSAGE}`,
      false
    );
    await expect(fromSso(mockInit)()).rejects.toStrictEqual(expectedError);
  });

  it.each(["accessToken", "expiresAt"])("throws error if %s is missing in SSO Token from file", async (key) => {
    const mockError = new Error("mockError");
    (validateTokenKey as jest.Mock).mockImplementation((validationKey) => {
      if (validationKey === key) {
        throw mockError;
      }
    });
    await expect(fromSso(mockInit)()).rejects.toStrictEqual(mockError);
    expect(validateTokenKey).toHaveBeenNthCalledWith(
      (validateTokenKey as jest.Mock).mock.calls.length,
      key,
      mockSsoToken[key]
    );
  });

  it("returns existing token if it's not expired", async () => {
    const mockValidSsoToken = {
      ...mockSsoToken,
      expiresAt: new Date(mockDateNow + EXPIRE_WINDOW_MS + 1000).toISOString(),
    };
    (getSSOTokenFromFile as jest.Mock).mockResolvedValueOnce(mockValidSsoToken);

    await expect(fromSso(mockInit)()).resolves.toStrictEqual({
      token: mockValidSsoToken.accessToken,
      expiration: new Date(mockValidSsoToken.expiresAt),
    });
  });

  describe("skips refresh attempt if last refresh was done within 30 seconds", () => {
    it("throw if existing token is expired", (done) => {
      jest.isolateModules(async () => {
        const { fromSso } = require("./fromSso");
        await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);
        expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
        expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region);

        // Simulate token expiration.
        const ssoTokenExpiryError = new TokenProviderError(`SSO Token is expired. ${REFRESH_MESSAGE}`, false);
        (validateTokenExpiry as jest.Mock).mockImplementation(() => {
          throw ssoTokenExpiryError;
        });
        await expect(fromSso(mockInit)()).rejects.toStrictEqual(ssoTokenExpiryError);
        // Verify that getNewSsoOidcToken is not called again.
        expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
        done();
      });
    });

    it("returns existing token if it's not expired", (done) => {
      jest.isolateModules(async () => {
        const { fromSso } = require("./fromSso");
        await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);
        expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
        expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region);

        // Return a valid token for second call.
        const mockValidSsoToken = {
          ...mockSsoToken,
          expiresAt: new Date(mockDateNow + EXPIRE_WINDOW_MS + 1000).toISOString(),
        };
        (getSSOTokenFromFile as jest.Mock).mockResolvedValueOnce(mockValidSsoToken);
        await expect(fromSso(mockInit)()).resolves.toStrictEqual({
          token: mockValidSsoToken.accessToken,
          expiration: new Date(mockValidSsoToken.expiresAt),
        });
        // Verify that getNewSsoOidcToken is not called again.
        expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });

  it.each(["clientId", "clientSecret", "refreshToken"])(
    "throws error if %s is missing in SSO Token from file",
    async (key) => {
      const mockError = new Error("mockError");
      (validateTokenKey as jest.Mock).mockImplementation((validationKey) => {
        if (validationKey === key) {
          throw mockError;
        }
      });
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(mockError);
      expect(validateTokenKey).toHaveBeenNthCalledWith(
        (validateTokenKey as jest.Mock).mock.calls.length,
        key,
        mockSsoToken[key],
        true
      );
    }
  );

  describe("failure wrt token from ssoOidc.createToken()", () => {
    const returnExistingValidTokenInExpiryWindowTest = async (fromSso) => {
      const mockValidSsoTokenInExpiryWindow = {
        ...mockSsoToken,
        expiresAt: new Date(mockDateNow + EXPIRE_WINDOW_MS - 1000).toISOString(),
      };
      (getSSOTokenFromFile as jest.Mock).mockResolvedValueOnce(mockValidSsoTokenInExpiryWindow);
      await expect(fromSso(mockInit)()).resolves.toStrictEqual({
        token: mockValidSsoTokenInExpiryWindow.accessToken,
        expiration: new Date(mockValidSsoTokenInExpiryWindow.expiresAt),
      });
      expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockValidSsoTokenInExpiryWindow, mockSsoSession.sso_region);
    };

    const throwErrorExpiredTokenTest = async (fromSso) => {
      const ssoTokenExpiryError = new TokenProviderError(`SSO Token is expired. ${REFRESH_MESSAGE}`, false);
      (validateTokenExpiry as jest.Mock).mockImplementation(() => {
        throw ssoTokenExpiryError;
      });
      await expect(fromSso(mockInit)()).rejects.toStrictEqual(ssoTokenExpiryError);
      expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region);
    };

    afterEach(() => {
      expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
    });

    describe("when getNewSsoOidcToken throws error", () => {
      it.each([returnExistingValidTokenInExpiryWindowTest, throwErrorExpiredTokenTest])("%p:", (testFn) => {
        jest.isolateModules(async () => {
          const { fromSso } = require("./fromSso");
          const mockError = new Error("mockError");
          (getNewSsoOidcToken as jest.Mock).mockImplementation(() => {
            throw mockError;
          });
          testFn(fromSso);
        });
      });
    });

    describe.each(["accessToken", "expiresIn"])("when newSsoOidcToken does not contain key '%s'", (key) => {
      it.each([returnExistingValidTokenInExpiryWindowTest, throwErrorExpiredTokenTest])("%p:", (testFn) => {
        jest.isolateModules(async () => {
          let accessTokenFirstCallSuccess = false;
          const { fromSso } = require("./fromSso");
          const mockError = new Error("mockError");
          (validateTokenKey as jest.Mock).mockImplementation((validationKey) => {
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
      });
    });
  });

  it("returns valid access token from ssoOidc.createToken()", async () => {
    jest.isolateModules(async () => {
      const { fromSso } = require("./fromSso");
      await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);
      expect(getNewSsoOidcToken).toHaveBeenCalledTimes(1);
      expect(getNewSsoOidcToken).toHaveBeenCalledWith(mockSsoToken, mockSsoSession.sso_region);

      expect(writeSSOTokenToFile).toHaveBeenCalledWith(mockSsoSessionName, {
        ...mockSsoToken,
        accessToken: mockNewTokenFromService.accessToken,
        expiresAt: mockNewToken.expiration.toISOString(),
        refreshToken: mockNewTokenFromService.refreshToken,
      });
    });
  });

  it("swallows error if writeSSOTokenToFile fails", async () => {
    jest.isolateModules(async () => {
      const mockError = new Error("mockError");
      (writeSSOTokenToFile as jest.Mock).mockImplementation(() => {
        throw mockError;
      });
      const { fromSso } = require("./fromSso");
      await expect(fromSso(mockInit)()).resolves.toStrictEqual(mockNewToken);

      expect(writeSSOTokenToFile).toHaveBeenCalledWith(mockSsoSessionName, {
        ...mockSsoToken,
        accessToken: mockNewTokenFromService.accessToken,
        expiresAt: mockNewToken.expiration.toISOString(),
        refreshToken: mockNewTokenFromService.refreshToken,
      });
    });
  });
});
