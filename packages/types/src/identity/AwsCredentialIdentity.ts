import type { AwsCredentialIdentity } from "@smithy/types";

import type { AwsSdkCredentialsFeatures } from "../feature-ids";

export { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@smithy/types";

export type AttributedAwsCredentialIdentity = AwsCredentialIdentity & {
  $source?: AwsSdkCredentialsFeatures;
};
