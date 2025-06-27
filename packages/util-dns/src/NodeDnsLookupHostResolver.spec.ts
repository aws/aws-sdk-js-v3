import { HostAddress, HostAddressType, HostResolverArguments } from "@aws-sdk/types";
import { LookupAddress } from "dns";
import { beforeEach, describe, expect, test, vi } from "vitest";

import { NodeDnsLookupHostResolver } from "./NodeDnsLookupHostResolver";
import { HostEntryTable } from "./util/HostEntryTable";

describe(NodeDnsLookupHostResolver.name, () => {
  // Test Data
  const TEST_HOST_NAME = "TEST_HOST_NAME";
  const TEST_SERVICE = "TEST_SERVICE";
  const TEST_ADDRESS = "TEST_ADDRESS";
  const TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };
  const TEST_AAAA_HOST_ADDRESS_0: HostAddress = {
    addressType: HostAddressType.AAAA,
    address: `${TEST_ADDRESS}_0`,
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };
  const TEST_AAAA_HOST_ADDRESS_1: HostAddress = {
    ...TEST_AAAA_HOST_ADDRESS_0,
    address: `${TEST_ADDRESS}_1`,
  };
  const TEST_A_HOST_ADDRESS_0: HostAddress = {
    addressType: HostAddressType.A,
    address: `${TEST_ADDRESS}_0`,
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };
  const TEST_A_HOST_ADDRESS_1: HostAddress = {
    ...TEST_A_HOST_ADDRESS_0,
    address: `${TEST_ADDRESS}_1`,
  };

  // Host Resolver and Cache
  let TEST_HOST_RESOLVER_TABLE: HostEntryTable;
  let TEST_HOST_RESOLVER: NodeDnsLookupHostResolver;
  beforeEach(() => {
    vi.useFakeTimers();
    TEST_HOST_RESOLVER_TABLE = new HostEntryTable();
    TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
      cache: TEST_HOST_RESOLVER_TABLE,
    });
  });

  describe("is configurable", () => {
    test("constructors", () => {
      new NodeDnsLookupHostResolver();
      new NodeDnsLookupHostResolver({});
      new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
      });
      new NodeDnsLookupHostResolver({
        ttlMs: 0,
      });
      new NodeDnsLookupHostResolver({
        nodeDnsLookup: async () => [],
      });
    });
  });

  describe("resolveAddress(args)", () => {
    test("resolveAddress(args) should return itself with a valid IPv4 address", async () => {
      // Resolve existing valid IPv4 address
      const TEST_VALID_IPV4_ADDRESS = "127.0.0.1";
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: TEST_VALID_IPV4_ADDRESS,
      };
      const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
        CURRENT_TEST_HOST_RESOLVER_ARGUMENTS
      );
      expect(Array.isArray(RESOLVED_HOST_ADDRESSES)).toBe(true);
      expect(RESOLVED_HOST_ADDRESSES).toHaveLength(1);
      expect(RESOLVED_HOST_ADDRESSES[0]).toMatchObject({
        address: TEST_VALID_IPV4_ADDRESS,
        addressType: HostAddressType.A,
        hostName: TEST_VALID_IPV4_ADDRESS,
        service: TEST_SERVICE,
      });
    });

    test("resolveAddress(args) should return itself with a valid IPv6 address", async () => {
      // Resolve existing valid IPv6 address
      const TEST_VALID_IPV6_ADDRESS = "::1";
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: TEST_VALID_IPV6_ADDRESS,
      };
      const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
        CURRENT_TEST_HOST_RESOLVER_ARGUMENTS
      );
      expect(Array.isArray(RESOLVED_HOST_ADDRESSES)).toBe(true);
      expect(RESOLVED_HOST_ADDRESSES).toHaveLength(1);
      expect(RESOLVED_HOST_ADDRESSES[0]).toMatchObject({
        address: TEST_VALID_IPV6_ADDRESS,
        addressType: HostAddressType.AAAA,
        hostName: TEST_VALID_IPV6_ADDRESS,
        service: TEST_SERVICE,
      });
    });

    test("resolveAddress(args) should throw an ENOTFOUND error on an invalid host name", async () => {
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
      };
      await expect(TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS)).rejects.toThrowError(
        `getaddrinfo ENOTFOUND TEST_HOST_NAME`
      );
    });

    test("resolveAddress(args) should throw an error on an unsupported Node DNS family", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        return [
          {
            address: TEST_AAAA_HOST_ADDRESS_0.address,
            family: 0,
          },
        ];
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // Resolve address
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
      };
      await expect(TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS)).rejects.toThrowError(
        "dns.lookup() Node DNS family `0` is not supported"
      );
    });

    test("resolveAddress(args) should throw an error for an empty list", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        return [];
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // Resolve address
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
      };
      await expect(TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS)).rejects.toThrowError(
        'Could not resolve addresses for "TEST_HOST_NAME"'
      );
    });

    test("resolveAddress(args) should throw an error if initial resolution fails", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        throw new Error("Resolution failed");
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // Resolve address
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
      };
      await expect(TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS)).rejects.toThrowError(
        "Resolution failed"
      );
    });

    test("resolveAddress(args) should return a pair of IPv4 and IPv6 addresses for a valid host name", async () => {
      // Resolve address
      const HOST_NAME = "www.amazon.com";
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: HOST_NAME,
      };
      const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
        CURRENT_TEST_HOST_RESOLVER_ARGUMENTS
      );
      expect(RESOLVED_HOST_ADDRESSES).toHaveLength(2);
      for (const hostAddress of RESOLVED_HOST_ADDRESSES) {
        expect(hostAddress.hostName).toBe(HOST_NAME);
        expect(hostAddress.service).toBe(TEST_SERVICE);
        expect(hostAddress.address).toBeDefined();
        expect(hostAddress.address.length).toBeGreaterThan(0);
      }
      expect(RESOLVED_HOST_ADDRESSES[0].addressType).toEqual(HostAddressType.A);
      expect(RESOLVED_HOST_ADDRESSES[1].addressType).toEqual(HostAddressType.AAAA);
    });

    test("resolveAddress(args) should return only one IPv4 address for a valid host name if only IPv4 is available", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        return [
          {
            address: TEST_A_HOST_ADDRESS_0.address,
            family: 4,
          },
        ];
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // Resolve address
      const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
        TEST_HOST_RESOLVER_ARGUMENTS
      );
      expect(RESOLVED_HOST_ADDRESSES).toHaveLength(1);
      const [hostAddress] = RESOLVED_HOST_ADDRESSES;
      expect(hostAddress.hostName).toBe(TEST_HOST_NAME);
      expect(hostAddress.service).toBe(TEST_SERVICE);
      expect(hostAddress.address).toBe(TEST_A_HOST_ADDRESS_0.address);
      expect(hostAddress.addressType === HostAddressType.A).toBe(true);
    });

    test("resolveAddress(args) should return only one IPv6 address for a valid host name if only IPv6 is available", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        return [
          {
            address: TEST_AAAA_HOST_ADDRESS_0.address,
            family: 6,
          },
        ];
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // Resolve address
      const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
        TEST_HOST_RESOLVER_ARGUMENTS
      );
      expect(RESOLVED_HOST_ADDRESSES).toHaveLength(1);
      const [hostAddress] = RESOLVED_HOST_ADDRESSES;
      expect(hostAddress.hostName).toBe(TEST_HOST_NAME);
      expect(hostAddress.service).toBe(TEST_SERVICE);
      expect(hostAddress.address).toBe(TEST_AAAA_HOST_ADDRESS_0.address);
      expect(hostAddress.addressType === HostAddressType.AAAA).toBe(true);
    });

    /**
     * Helper function to wrap around an invocation of resolveAddress()
     * @param opts for input and expected outputs
     */
    const testResolveAddressOnce = async (opts: {
      hostResolver?: NodeDnsLookupHostResolver;
      hostEntryTable?: HostEntryTable;
      args?: HostResolverArguments;
      expectedCacheSize?: number;
      expectedIpV4Address: HostAddress;
      expectedIpV6Address: HostAddress;
      expectedNextIpV4Address: HostAddress;
      expectedNextIpV6Address: HostAddress;
      expectedIpV4Size: number;
      expectedIpV6Size: number;
      expectedFailedIpV4Size?: number;
      expectedFailedIpV6Size?: number;
    }) => {
      const {
        hostResolver = TEST_HOST_RESOLVER,
        hostEntryTable = TEST_HOST_RESOLVER_TABLE,
        args = TEST_HOST_RESOLVER_ARGUMENTS,
        expectedCacheSize = 1,
        expectedIpV4Address,
        expectedIpV6Address,
        expectedNextIpV4Address,
        expectedNextIpV6Address,
        expectedIpV4Size,
        expectedIpV6Size,
        expectedFailedIpV4Size = 0,
        expectedFailedIpV6Size = 0,
      } = opts;
      // Resolve Address
      const RESOLVED_HOST_ADDRESSES: HostAddress[] = await hostResolver.resolveAddress(args);

      // Assert host addresses
      expect(RESOLVED_HOST_ADDRESSES).toHaveLength(2);
      const [hostAddressIpV4, hostAddressIpV6] = RESOLVED_HOST_ADDRESSES;
      // IPv4
      expect(hostAddressIpV4.hostName).toBe(expectedIpV4Address.hostName);
      expect(hostAddressIpV4.service).toBe(expectedIpV4Address.service);
      expect(hostAddressIpV4.address).toBe(expectedIpV4Address.address);
      expect(hostAddressIpV4.addressType).toBe(expectedIpV4Address.addressType);
      expect(hostAddressIpV4.addressType === HostAddressType.A).toBe(true);
      // IPv6
      expect(hostAddressIpV6.hostName).toBe(expectedIpV6Address.hostName);
      expect(hostAddressIpV6.service).toBe(expectedIpV6Address.service);
      expect(hostAddressIpV6.address).toBe(expectedIpV6Address.address);
      expect(hostAddressIpV6.addressType).toBe(expectedIpV6Address.addressType);
      expect(hostAddressIpV6.addressType === HostAddressType.AAAA).toBe(true);

      // Assert cache
      expect(hostEntryTable.size).toBe(expectedCacheSize);
      const hostEntryResolveAddress = hostEntryTable.get(args.hostName);
      expect(hostEntryResolveAddress).toBeDefined();
      // Next IPv4
      expect(hostEntryResolveAddress?.aRecords.length === expectedIpV4Size);
      expect(hostEntryResolveAddress?.aRecords.data[0].address).toBe(expectedNextIpV4Address.address);
      expect(hostEntryResolveAddress?.aRecords.data[hostEntryResolveAddress?.aRecords.data.length - 1].address).toBe(
        expectedIpV4Address.address
      );
      // Next IPv6
      expect(hostEntryResolveAddress?.aaaaRecords.length === expectedIpV6Size);
      expect(hostEntryResolveAddress?.aaaaRecords.data[0].address).toBe(expectedNextIpV6Address.address);
      expect(
        hostEntryResolveAddress?.aaaaRecords.data[hostEntryResolveAddress?.aaaaRecords.data.length - 1].address
      ).toBe(expectedIpV6Address.address);
      // Failed IPv4
      expect(hostEntryResolveAddress?.failedARecords.length === expectedFailedIpV4Size);
      // Failed IPv6
      expect(hostEntryResolveAddress?.failedAaaaRecords.length === expectedFailedIpV6Size);
    };

    test("resolveAddress(args) should return the next available pair of IPv4 and IPv6 address in the cache", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        return [
          {
            address: TEST_AAAA_HOST_ADDRESS_0.address,
            family: 6,
          },
          {
            address: TEST_AAAA_HOST_ADDRESS_1.address,
            family: 6,
          },
          {
            address: TEST_A_HOST_ADDRESS_0.address,
            family: 4,
          },
        ];
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // First resolveAddress() call
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedIpV4Size: 1,
        expectedIpV6Size: 2,
      });
      // Second resolveAddress() call
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedIpV4Size: 1,
        expectedIpV6Size: 2,
      });
      // Third resolveAddress() call (1 complete cycle)
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedIpV4Size: 1,
        expectedIpV6Size: 2,
      });
    });

    test("resolveAddress(args) should return next pair even when updating addresses fails and is not expired", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = (() => {
        let first = true;
        return async (): Promise<LookupAddress[]> => {
          if (first) {
            first = false;
            return [
              {
                address: TEST_AAAA_HOST_ADDRESS_0.address,
                family: 6,
              },
              {
                address: TEST_AAAA_HOST_ADDRESS_1.address,
                family: 6,
              },
              {
                address: TEST_A_HOST_ADDRESS_0.address,
                family: 4,
              },
            ];
          } else {
            throw new Error("Resolution failed");
          }
        };
      })();
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // First resolveAddress() call
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedIpV4Size: 1,
        expectedIpV6Size: 2,
      });
      vi.advanceTimersByTime(30_000);
      // Second resolveAddress() call which fails to update
      await TEST_HOST_RESOLVER.resolveAddress(TEST_HOST_RESOLVER_ARGUMENTS);
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedIpV4Size: 1,
        expectedIpV6Size: 1,
      });
      // Third resolveAddress() call (1 complete cycle) which fails to update
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedIpV4Size: 1,
        expectedIpV6Size: 1,
      });
    });

    test("resolveAddress(args) should return next pair even when updating addresses and is not expired", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = (() => {
        let first = true;
        return async (): Promise<LookupAddress[]> => {
          if (first) {
            first = false;
            return [
              {
                address: TEST_AAAA_HOST_ADDRESS_0.address,
                family: 6,
              },
              {
                address: TEST_A_HOST_ADDRESS_0.address,
                family: 4,
              },
            ];
          } else {
            return [
              {
                address: TEST_AAAA_HOST_ADDRESS_0.address,
                family: 6,
              },
              {
                address: TEST_AAAA_HOST_ADDRESS_1.address,
                family: 6,
              },
              {
                address: TEST_A_HOST_ADDRESS_0.address,
                family: 4,
              },
              {
                address: TEST_A_HOST_ADDRESS_1.address,
                family: 4,
              },
            ];
          }
        };
      })();
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // First resolveAddress() call
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedIpV4Size: 1,
        expectedIpV6Size: 1,
      });
      vi.advanceTimersByTime(30_000);
      // Second resolveAddress() call with an update
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_1,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedIpV4Size: 2,
        expectedIpV6Size: 2,
      });
      // Third resolveAddress() call
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_1,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedIpV4Size: 2,
        expectedIpV6Size: 2,
      });
    });

    test("resolveAddress(args) should return a pair by upgrading one non-expired bad record if there are no good records", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        return [
          {
            address: TEST_AAAA_HOST_ADDRESS_0.address,
            family: 6,
          },
          {
            address: TEST_AAAA_HOST_ADDRESS_1.address,
            family: 6,
          },
          {
            address: TEST_A_HOST_ADDRESS_0.address,
            family: 4,
          },
        ];
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // First resolveAddress() call
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedIpV4Size: 1,
        expectedIpV6Size: 2,
      });
      // Report failures
      TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_A_HOST_ADDRESS_0);
      TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_AAAA_HOST_ADDRESS_0);
      TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_AAAA_HOST_ADDRESS_1);
      // Second resolveAddress() call with expected upgrades
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedIpV4Size: 1,
        expectedIpV6Size: 1,
        expectedFailedIpV6Size: 1,
      });
    });

    test("resolveAddress(args) should fail if there are no good records and the bad records are expired", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = (() => {
        let first = true;
        return async (): Promise<LookupAddress[]> => {
          if (first) {
            first = false;
            return [
              {
                address: TEST_AAAA_HOST_ADDRESS_0.address,
                family: 6,
              },
              {
                address: TEST_AAAA_HOST_ADDRESS_1.address,
                family: 6,
              },
              {
                address: TEST_A_HOST_ADDRESS_0.address,
                family: 4,
              },
            ];
          } else {
            throw new Error("Resolution failed");
          }
        };
      })();
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });
      // First resolveAddress() call
      await testResolveAddressOnce({
        expectedIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedIpV6Address: TEST_AAAA_HOST_ADDRESS_0,
        expectedNextIpV4Address: TEST_A_HOST_ADDRESS_0,
        expectedNextIpV6Address: TEST_AAAA_HOST_ADDRESS_1,
        expectedIpV4Size: 1,
        expectedIpV6Size: 2,
      });
      // Report failures
      TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_A_HOST_ADDRESS_0);
      TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_AAAA_HOST_ADDRESS_0);
      TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_AAAA_HOST_ADDRESS_1);
      vi.advanceTimersByTime(30_000);
      // Second resolveAddress() call with no upgrades
      await expect(TEST_HOST_RESOLVER.resolveAddress(TEST_HOST_RESOLVER_ARGUMENTS)).rejects.toThrowError(
        'Could not resolve addresses for "TEST_HOST_NAME"'
      );
    });
  });

  describe("reportFailureOnAddress(addr)", () => {
    test("reportFailureOnAddress(addr) should throw when host name is not in cache", async () => {
      // Report failure on unavailable address
      expect(() => TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_AAAA_HOST_ADDRESS_0)).toThrowError(
        'Could not find cached host name "TEST_HOST_NAME"'
      );
    });

    test("reportFailureOnAddress(addr) should move reported addresses to failure cache", async () => {
      // Create Host Resolver with mock dns.lookup() function
      const MOCK_NODE_DNS_LOOKUP = async (): Promise<LookupAddress[]> => {
        return [
          {
            address: TEST_AAAA_HOST_ADDRESS_0.address,
            family: 6,
          },
          {
            address: TEST_A_HOST_ADDRESS_0.address,
            family: 4,
          },
        ];
      };
      TEST_HOST_RESOLVER = new NodeDnsLookupHostResolver({
        cache: TEST_HOST_RESOLVER_TABLE,
        nodeDnsLookup: MOCK_NODE_DNS_LOOKUP as any,
      });

      // Resolve address
      await TEST_HOST_RESOLVER.resolveAddress(TEST_HOST_RESOLVER_ARGUMENTS);

      // Report failure on address
      await TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_AAAA_HOST_ADDRESS_0);
      const hostEntryPostReportFailure = TEST_HOST_RESOLVER_TABLE.get(TEST_HOST_NAME)!;
      expect(hostEntryPostReportFailure.aRecords.length === 1);
      expect(hostEntryPostReportFailure.aaaaRecords.length === 0);
      expect(hostEntryPostReportFailure.failedARecords.length === 0);
      expect(hostEntryPostReportFailure.failedAaaaRecords.length === 1);
      expect(hostEntryPostReportFailure.failedAaaaRecords.data[0]).toMatchObject(TEST_AAAA_HOST_ADDRESS_0);
    });
  });

  describe("purgeCache(args?)", () => {
    test("purgeCache(args) should noop for a non-cached host name", async () => {
      // Resolve address
      const HOST_NAME = "www.amazon.com";
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: HOST_NAME,
      };
      await TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS);
      expect(TEST_HOST_RESOLVER_TABLE.size).toEqual(1);
      // Purge cache for a different unavailable address
      const ADDITIONAL_HOST_NAME = "www.google.com";
      const ADDITIONAL_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: ADDITIONAL_HOST_NAME,
      };
      await TEST_HOST_RESOLVER.purgeCache(ADDITIONAL_TEST_HOST_RESOLVER_ARGUMENTS);
      expect(TEST_HOST_RESOLVER_TABLE.size).toEqual(1);
      expect(TEST_HOST_RESOLVER_TABLE.get(HOST_NAME)).toBeDefined();
      expect(TEST_HOST_RESOLVER_TABLE.get(ADDITIONAL_HOST_NAME)).toBeUndefined();
    });

    test("purgeCache(args) should clear the cache for a host name if provided", async () => {
      // Resolve address
      const HOST_NAME = "www.amazon.com";
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: HOST_NAME,
      };
      await TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS);
      expect(TEST_HOST_RESOLVER_TABLE.size).toEqual(1);
      // Resolve another address
      const ADDITIONAL_HOST_NAME = "www.google.com";
      const ADDITIONAL_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: ADDITIONAL_HOST_NAME,
      };
      await TEST_HOST_RESOLVER.resolveAddress(ADDITIONAL_TEST_HOST_RESOLVER_ARGUMENTS);
      expect(TEST_HOST_RESOLVER_TABLE.size).toEqual(2);
      // Purge cache for first address
      await TEST_HOST_RESOLVER.purgeCache(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS);
      expect(TEST_HOST_RESOLVER_TABLE.size).toEqual(1);
      expect(TEST_HOST_RESOLVER_TABLE.get(HOST_NAME)).toBeUndefined();
      expect(TEST_HOST_RESOLVER_TABLE.get(ADDITIONAL_HOST_NAME)).toBeDefined();
    });

    test("purgeCache() should clear the cache if no args are provided", async () => {
      // Resolve address
      const HOST_NAME = "www.amazon.com";
      const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
        ...TEST_HOST_RESOLVER_ARGUMENTS,
        hostName: HOST_NAME,
      };
      await TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS);
      // Purge entire cache
      await TEST_HOST_RESOLVER.purgeCache();
      expect(TEST_HOST_RESOLVER_TABLE.size).toEqual(0);
      expect(TEST_HOST_RESOLVER_TABLE.get(HOST_NAME)).toBeUndefined();
    });
  });
});
