import { Identity, TokenIdentity } from "@aws-sdk/types";

/**
 * @internal
 * @param identity identity to check
 * @returns whether an identity is a TokenIdentity
 */
export const isTokenIdentity = (identity: Identity) =>
  identity &&
  (identity as TokenIdentity).token !== undefined;
