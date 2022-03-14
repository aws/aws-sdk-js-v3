import { createHash } from "crypto";
// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";

/**
 * Cached SSO token retrieved from SSO login flow.
 */
export interface SSOToken {
  /**
   * A base64 encoded string returned by the sso-oidc service.
   */
  accessToken: string;

  /**
   * The expiration time of the accessToken as an RFC 3339 formatted timestamp.
   */
  expiresAt: string;

  /**
   * The token used to obtain an access token in the event that the accessToken is invalid or expired.
   */
  refreshToken?: string;

  /**
   * The unique identifier string for each client. The client ID generated when performing the registration
   * portion of the OIDC authorization flow. This is used to refresh the accessToken.
   */
  clientId?: string;

  /**
   * A secret string generated when performing the registration portion of the OIDC authorization flow.
   * This is used to refresh the accessToken.
   */
  clientSecret?: string;

  /**
   * The expiration time of the client registration (clientId and clientSecret) as an RFC 3339 formatted timestamp.
   */
  registrationExpiresAt?: string;

  /**
   * The configured sso_region for the profile that credentials are being resolved for.
   */
  region?: string;

  /**
   * The configured sso_start_url for the profile that credentials are being resolved for.
   */
  startUrl?: string;
}

const { readFile } = fsPromises;

export const getSSOTokenFromFile = async (ssoStartUrl: string) => {
  const hasher = createHash("sha1");
  const cacheName = hasher.update(ssoStartUrl).digest("hex");
  const tokenFile = join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);

  const tokenText = await readFile(tokenFile, "utf8");
  return JSON.parse(tokenText) as SSOToken;
};
