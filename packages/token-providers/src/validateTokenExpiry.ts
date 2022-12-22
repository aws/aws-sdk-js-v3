import { TokenProviderError } from "@aws-sdk/property-provider";
import { TokenIdentity } from "@aws-sdk/types";

import { REFRESH_MESSAGE } from "./constants";

/**
 * Throws TokenProviderError is token is expired.
 */
export const validateTokenExpiry = (token: TokenIdentity) => {
  if (token.expiration && token.expiration.getTime() < Date.now()) {
    throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
  }
};
