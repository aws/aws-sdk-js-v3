import { Identity, IdentityProvider } from "@aws-sdk/types";

/**
 * @internal
 */
export interface MemoizedIdentityProvider<IdentityT extends Identity> extends IdentityProvider<IdentityT> {
  (options?: { forceRefresh?: boolean; } & Record<string, any>): Promise<IdentityT>;
}

/**
 * @internal
 * @param provider identity provider to memoize
 * @param isExpired function to test expiration on a resolved identity
 * @param requiresRefresh function to whether a resolved identity is refreshable
 * @returns memoized identity provider
 */
export const memoizeIdentity = <IdentityT extends Identity>(
  provider: IdentityProvider<IdentityT>,
  isExpired?: (resolved: IdentityT) => boolean,
  requiresRefresh?: (resolved: IdentityT) => boolean
): MemoizedIdentityProvider<IdentityT> => {
  let resolved: IdentityT;
  let pending: Promise<IdentityT> | undefined;
  let hasResult: boolean;
  let isConstant = false;
  // Wrapper over supplied provider with side effect to handle concurrent invocation.
  const coalesceProvider: IdentityProvider<IdentityT> = async (args?: Record<string, any>) => {
    if (pending === undefined) {
      pending = provider(args);
    }
    try {
      resolved = await (pending as Promise<IdentityT>);
      hasResult = true;
      isConstant = false;
    } finally {
      pending = undefined;
    }
    return resolved;
  };

  if (isExpired === undefined) {
    // This is a static memoization; no need to incorporate refreshing unless using forceRefresh;
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }

  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }

    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
};
