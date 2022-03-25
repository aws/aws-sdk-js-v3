import { TokenProviderError } from "@aws-sdk/property-provider";
import {
  getProfileName,
  getSSOTokenFromFile,
  parseKnownFiles,
  SourceProfileInit,
  SSOToken,
} from "@aws-sdk/shared-ini-file-loader";
import { TokenProvider } from "@aws-sdk/types";

import { EXPIRE_WINDOW_MS, REFRESH_MESSAGE } from "./constants";
import { getNewSsoOidcToken } from "./getNewSsoOidcToken";
import { validateTokenExpiry } from "./validateTokenExpiry";
import { validateTokenKey } from "./validateTokenKey";
import { writeSSOTokenToFile } from "./writeSSOTokenToFile";

/**
 * Last refresh attempt time to ensure refresh is not attempted more than once every 30 seconds.
 */
const lastRefreshAttemptTime = new Date(0);

export interface FromSsoInit extends SourceProfileInit {}

/**
 * Creates a token provider that will read from SSO token cache or ssoOidc.createToken() call.
 */
export const fromSso =
  (init: FromSsoInit = {}): TokenProvider =>
  async () => {
    const profiles = await parseKnownFiles(init);
    const profileName = getProfileName(init);
    const profile = profiles[profileName];

    if (!profile) {
      // Profile not found. This is a terminal error.
      throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    } else if (!profile["sso_start_url"]) {
      // Profile found but it does not contain sso_start_url. Not a terminal error.
      throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_start_url'.`);
    } else if (!profile["sso_region"]) {
      // Profile found and contains sso_start_url, but no sso_region. This is a terminal error.
      throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_region'.`, false);
    }

    const ssoStartUrl = profile["sso_start_url"];
    const ssoRegion = profile["sso_region"];

    let ssoToken: SSOToken;
    try {
      ssoToken = await getSSOTokenFromFile(ssoStartUrl);
    } catch (e) {
      throw new TokenProviderError(
        `The SSO session associated with this profile is invalid. ${REFRESH_MESSAGE}`,
        false
      );
    }

    validateTokenKey("accessToken", ssoToken.accessToken);
    validateTokenKey("expiresAt", ssoToken.expiresAt);

    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
      // Token is valid and not expired.
      return existingToken;
    }

    // Skip new refresh, if last refresh was done within 30 seconds.
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
      /// return existing token if it's still valid.
      validateTokenExpiry(ssoToken);
      return existingToken;
    }

    validateTokenKey("clientId", ssoToken.clientId);
    validateTokenKey("clientSecret", ssoToken.clientSecret);
    validateTokenKey("refreshToken", ssoToken.refreshToken);

    try {
      lastRefreshAttemptTime.setTime(Date.now());
      const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
      validateTokenKey("accessToken", newSsoOidcToken.accessToken);
      validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
      const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn! * 1000);

      try {
        await writeSSOTokenToFile(ssoStartUrl, {
          ...ssoToken,
          accessToken: newSsoOidcToken.accessToken!,
          expiresAt: newTokenExpiration.toISOString(),
          refreshToken: newSsoOidcToken.refreshToken,
        });
      } catch (error) {
        // Swallow error if unable to write token to file.
      }

      return {
        token: newSsoOidcToken.accessToken!,
        expiration: newTokenExpiration,
      };
    } catch (error) {
      // return existing token if it's still valid.
      validateTokenExpiry(ssoToken);
      return existingToken;
    }
  };
