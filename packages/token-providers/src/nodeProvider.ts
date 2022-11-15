import { chain, memoize, TokenProviderError } from "@aws-sdk/property-provider";
import { ENV_PROFILE, loadSharedConfigFiles } from "@aws-sdk/shared-ini-file-loader";
import { TokenIdentityProvider } from "@aws-sdk/types";

import { fromSso, FromSsoInit } from "./fromSso";

/**
 * Creates a token provider that will attempt to find token from the
 * following sources (listed in order of precedence):
 *   * SSO token from SSO cache or ssoOidc.createToken() call
 *
 * The default token provider is designed to invoke one provider at a time and only
 * continue to the next if no token has been located. It currently has only SSO
 * Token Provider in the chain.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromSso                 The function used to source credentials from
 *                              SSO cache or ssoOidc.createToken() call
 */

export const nodeProvider = (init: FromSsoInit = {}): TokenIdentityProvider =>
  memoize(
    chain(fromSso(init), async () => {
      throw new TokenProviderError("Could not load token from any providers", false);
    }),
    (token) => token.expiration !== undefined && token.expiration.getTime() - Date.now() < 300000,
    (token) => token.expiration !== undefined
  );
