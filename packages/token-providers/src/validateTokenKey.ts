import { TokenProviderError } from "@aws-sdk/property-provider";

import { REFRESH_MESSAGE } from "./constants";

/**
 * Throws TokenProviderError if value is undefined for key.
 */
export const validateTokenKey = (key: string, value: unknown) => {
  if (typeof value === "undefined") {
    throw new TokenProviderError(`Value not present for '${key}' in SSO Token'. ${REFRESH_MESSAGE}`, false);
  }
};
