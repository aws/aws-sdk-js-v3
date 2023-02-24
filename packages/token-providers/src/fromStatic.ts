import { TokenProviderError } from "@aws-sdk/property-provider";
import { TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";

export interface FromStaticInit {
  token?: TokenIdentity;
}

/**
 * Creates a token provider that will read from static token.
 */
export const fromStatic =
  ({ token }: FromStaticInit): TokenIdentityProvider =>
  async () => {
    if (!token || !token.token) {
      throw new TokenProviderError(`Please pass a valid token to fromStatic`, false);
    }
    return token;
  };
