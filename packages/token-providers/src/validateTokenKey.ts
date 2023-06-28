import { TokenProviderError } from "@smithy/property-provider";

import { REFRESH_MESSAGE } from "./constants";

/**
 * Throws TokenProviderError if value is undefined for key.
 */
export const validateTokenKey = (key: string, value: unknown, forRefresh = false) => {
  if (typeof value === "undefined") {
    throw new TokenProviderError(
      `Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`,
      false
    );
  }
};
