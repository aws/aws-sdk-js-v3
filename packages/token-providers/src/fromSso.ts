import { TokenProviderError } from "@aws-sdk/property-provider";
import {
  getProfileName,
  getSSOTokenFromFile,
  loadSsoSessionData,
  parseKnownFiles,
  SourceProfileInit,
  SSOToken,
} from "@aws-sdk/shared-ini-file-loader";
import { TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";

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
  (init: FromSsoInit = {}): TokenIdentityProvider =>
  async () => {
    const profiles = await parseKnownFiles(init);
    const profileName = getProfileName(init);
    const profile = profiles[profileName];

    if (!profile) {
      // Profile not found. This is a terminal error.
      throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    } else if (!profile["sso_session"]) {
      // Profile found but it does not contain sso_session. Not a terminal error.
      throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }

    // read sso-session from config file.
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await loadSsoSessionData(init);
    const ssoSession = ssoSessions[ssoSessionName];

    if (!ssoSession) {
      // Sso Session not found. This is a terminal error.
      throw new TokenProviderError(
        `Sso session '${ssoSessionName}' could not be found in shared credentials file.`,
        false
      );
    }

    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
      if (!ssoSession[ssoSessionRequiredKey]) {
        // Sso session found but it does not contain ssoSessionRequiredKey. This is a terminal error.
        throw new TokenProviderError(
          `Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`,
          false
        );
      }
    }

    const ssoStartUrl = ssoSession["sso_start_url"] as string;
    const ssoRegion = ssoSession["sso_region"] as string;

    let ssoToken: SSOToken;
    try {
      ssoToken = await getSSOTokenFromFile(ssoSessionName);
    } catch (e) {
      throw new TokenProviderError(
        `The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`,
        false
      );
    }

    validateTokenKey("accessToken", ssoToken.accessToken);
    validateTokenKey("expiresAt", ssoToken.expiresAt);

    const { accessToken, expiresAt } = ssoToken;
    const existingToken: TokenIdentity = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration!.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
      // Token is valid and not expired.
      return existingToken;
    }

    // Skip new refresh, if last refresh was done within 30 seconds.
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
      /// return existing token if it's still valid.
      validateTokenExpiry(existingToken);
      return existingToken;
    }

    validateTokenKey("clientId", ssoToken.clientId, true);
    validateTokenKey("clientSecret", ssoToken.clientSecret, true);
    validateTokenKey("refreshToken", ssoToken.refreshToken, true);

    try {
      lastRefreshAttemptTime.setTime(Date.now());
      const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
      validateTokenKey("accessToken", newSsoOidcToken.accessToken);
      validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
      const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn! * 1000);

      try {
        await writeSSOTokenToFile(ssoSessionName, {
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
      validateTokenExpiry(existingToken);
      return existingToken;
    }
  };
