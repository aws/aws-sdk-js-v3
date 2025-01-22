import type { AwsCredentialIdentity, AwsCredentialIdentityProvider, Logger, RequestHandler } from "@smithy/types";

import type { AwsSdkCredentialsFeatures } from "../feature-ids";
export { AwsCredentialIdentity, AwsCredentialIdentityProvider, IdentityProvider } from "@smithy/types";

/**
 * @public
 */
export interface AwsIdentityProperties {
  /**
   * These are resolved client config values, and may be async providers.
   */
  callerClientConfig?: {
    credentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
    /**
     * @internal
     * @deprecated
     */
    credentialDefaultProvider?: (input?: any) => AwsCredentialIdentityProvider;
    logger?: Logger;
    profile?: string;
    region(): Promise<string>;
    requestHandler?: RequestHandler<any, any>;
  };
}

/**
 * @public
 *
 * Variation of {@link IdentityProvider} which accepts a contextual
 * client configuration that includes an AWS region and potentially other
 * configurable fields.
 *
 * Used to link a credential provider to a client if it is being called
 * in the context of a client.
 */
export type RuntimeConfigIdentityProvider<T> = (awsIdentityProperties?: AwsIdentityProperties) => Promise<T>;

/**
 * @public
 *
 * Variation of {@link AwsCredentialIdentityProvider} which accepts a contextual
 * client configuration that includes an AWS region and potentially other
 * configurable fields.
 *
 * Used to link a credential provider to a client if it is being called
 * in the context of a client.
 */
export type RuntimeConfigAwsCredentialIdentityProvider = RuntimeConfigIdentityProvider<AwsCredentialIdentity>;

/**
 * @public
 *
 * AwsCredentialIdentity with source attribution metadata.
 */
export type AttributedAwsCredentialIdentity = AwsCredentialIdentity & {
  $source?: AwsSdkCredentialsFeatures;
};
