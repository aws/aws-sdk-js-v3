import { getBearerTokenEnvKey } from "@aws-sdk/core";
import type { CredentialProviderOptions, TokenIdentityProvider } from "@aws-sdk/types";
import { TokenProviderError } from "@smithy/property-provider";

/**
 * @public
 */
export interface FromEnvSigningNameInit extends CredentialProviderOptions {
  signingName?: string;
}

/**
 * Creates a TokenIdentityProvider that retrieves bearer token from environment variable
 *
 * @param options - Configuration options for the token provider
 * @param options.logger - Optional logger for debug messages
 * @param options.signingName - Service signing name used to determine environment variable key
 * @returns TokenIdentityProvider that provides bearer token from environment variable
 *
 * @public
 */
export const fromEnvSigningName =
  ({ logger, signingName }: FromEnvSigningNameInit = {}): TokenIdentityProvider =>
  async () => {
    logger?.debug?.("@aws-sdk/token-providers - fromEnvSigningName");

    if (!signingName) {
      throw new TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger });
    }

    const bearerTokenKey = getBearerTokenEnvKey(signingName);
    if (!(bearerTokenKey in process.env)) {
      throw new TokenProviderError(`Token not present in '${bearerTokenKey}' environment variable`, { logger });
    }

    return { token: process.env[bearerTokenKey]! };
  };
