import type { AwsCredentialIdentity } from "@smithy/types";

import type { AwsSdkCredentialsFeatures } from "../feature-ids";

export { AwsCredentialIdentity, AwsCredentialIdentityProvider, IdentityProvider } from "@smithy/types";

/**
 * @public
 */
export interface AwsIdentityProperties {
  contextClientConfig?: {
    region(): Promise<string>;
  };
}

/**
 * @public
 *
 * Variation of {@link IdentityProvider} which accepts a contextual
 * client configuration that includes an AWS region.
 *
 * Used to link a credential provider to a client region if it is being called
 * in the context of a client.
 */
export type RegionalIdentityProvider<T> = (awsIdentityProperties?: AwsIdentityProperties) => Promise<T>;

/**
 * @public
 *
 * Variation of {@link AwsCredentialIdentityProvider} which accepts a contextual
 * client configuration that includes an AWS region.
 *
 * Used to link a credential provider to a client region if it is being called
 * in the context of a client.
 */
export type RegionalAwsCredentialIdentityProvider = RegionalIdentityProvider<AwsCredentialIdentity>;

/**
 * @public
 *
 * AwsCredentialIdentity with source attribution metadata.
 */
export type AttributedAwsCredentialIdentity = AwsCredentialIdentity & {
  $source?: AwsSdkCredentialsFeatures;
};
