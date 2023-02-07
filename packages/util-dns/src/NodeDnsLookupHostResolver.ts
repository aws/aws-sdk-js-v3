import { HostAddress, HostAddressType, HostResolver as IHostResolver, HostResolverArguments } from "@aws-sdk/types";
import { ALL, promises as dnsPromises, V4MAPPED } from "dns";

/**
 * Node.js DNS family to Smithy Host Address Type Mapping
 * @see https://nodejs.org/api/dns.html#dnspromiseslookuphostname-options
 */
const NODE_DNS_FAMILY_TO_HOST_ADDRESS_TYPE: Record<number, HostAddressType> = {
  4: HostAddressType.A,
  6: HostAddressType.AAAA,
} as const;

/**
 * lookUp() options that return a list of all IPv4 and IPv6 addresses
 * @see https://nodejs.org/api/dns.html#dnspromiseslookuphostname-options
 */
const DNS_LOOKUP_OPTIONS = {
  all: true,
  hints: V4MAPPED | ALL,
  verbatim: true,
} as const;

/**
 * {@link HostResolver} implementation that uses the Node.js dns.lookup() API.
 * TODO(dns): implement cache
 */
export class NodeDnsLookupHostResolver implements IHostResolver {
  /**
   * Node.js resolveAddress() using the dns.lookup() APIs.
   * @see https://nodejs.org/api/dns.html#dnspromiseslookuphostname-options
   * @param args arguments with host name query addresses for
   * @returns promise with a list of {@link HostAddress}
   */
  async resolveAddress(args: HostResolverArguments): Promise<HostAddress[]> {
    const addresses: HostAddress[] = [];
    const ipEntries = await dnsPromises.lookup(args.hostName, DNS_LOOKUP_OPTIONS);
    for (const { address, family } of ipEntries) {
      const addressType: HostAddressType | undefined = NODE_DNS_FAMILY_TO_HOST_ADDRESS_TYPE[family];
      if (addressType === undefined) {
        throw new Error(`dns.lookup() Node DNS family \`${family}\` is not supported`);
      }
      addresses.push({
        addressType,
        address,
        hostName: args.hostName,
        service: args.service,
      });
    }
    return addresses;
  }
  reportFailureOnAddress(addr: HostAddress): void {
    throw new Error("reportFailureOnAddress(addr) is not implemented");
  }
  purgeCache(args?: HostResolverArguments): void {
    throw new Error("purgeCache(args?) is not implemented");
  }
}
