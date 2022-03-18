import { TokenProviderError } from "@aws-sdk/property-provider";
import { SSOToken } from "@aws-sdk/shared-ini-file-loader";

import { REFRESH_MESSAGE } from "./constants";

/**
 * Throws TokenProviderError is ssoToken is expired.
 */
export const validateTokenExpiry = (ssoToken: SSOToken) => {
  if (new Date(ssoToken.expiresAt).getTime() < Date.now()) {
    throw new TokenProviderError(`SSO Token is expired. ${REFRESH_MESSAGE}`, false);
  }
};
