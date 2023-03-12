import { Identity, LoginIdentity } from "@aws-sdk/types";

/**
 * @internal
 * @param identity identity to check
 * @returns whether an identity is a LoginIdentity
 */
export const isLoginIdentity = (identity: Identity) =>
  identity &&
  (identity as LoginIdentity).username !== undefined &&
  (identity as LoginIdentity).password !== undefined;
