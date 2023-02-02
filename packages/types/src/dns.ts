/**
 * DNS record types
 */
export enum HostAddressType {
  /**
   * IPv6
   */
  AAAA = "AAAA",
  /**
   * IPv4
   */
  A = "A",
}

export interface HostAddress {
  /**
   * The {@link HostAddressType} of the host address.
   */
  addressType: HostAddressType;
  /**
   * The resolved numerical address represented as a
   * string.
   */
  address: string;
  /**
   * The host name the {@link address} was resolved from.
   */
  hostName: string;
  /**
   * The service record of {@link hostName}.
   */
  service?: string;
}

export interface HostResolverArguments {
  /**
   * The host name to resolve.
   */
  hostName: string;
  /**
   * The service record of {@link hostName}.
   */
  service?: string;
}

/**
 * Host Resolver interface for DNS queries
 */
export interface HostResolver {
  /**
   * Resolves the address(es) for {@link HostResolverArguments}. Calls to this
   * function will likely alter the cache (if implemented) so that if there's
   * multiple addresses, a different set will be returned on the next call.
   * @param args arguments with host name query addresses for
   * @returns promise with a list of {@link HostAddress}
   */
  resolveAddress(args: HostResolverArguments): Promise<HostAddress[]>;
  /**
   * Reports a failure on a {@link HostAddress} so that the cache (if implemented)
   * can accomodate the failure and likely not return the address until it recovers.
   * @param addr host address to report a failure on
   */
  reportFailureOnAddress(addr: HostAddress): void;
  /**
   * Empties the cache (if implemented) for a {@link HostResolverArguments.hostName}.
   * If {@link HostResolverArguments.hostName} is not provided, the cache (if
   * implemented) is emptied for all host names.
   * @param args optional arguments to empty the cache for
   */
  purgeCache(args?: HostResolverArguments): void;
}
