import { AwsCredentialIdentity, Identity } from "@aws-sdk/types";

/**
 * @internal
 * @param identity identity to check
 * @returns whether an identity is an AwsCredentialIdentity
 */
export const isCredentialIdentity = (identity: Identity) =>
  identity &&
  (identity as AwsCredentialIdentity).accessKeyId !== undefined &&
  (identity as AwsCredentialIdentity).secretAccessKey !== undefined;
