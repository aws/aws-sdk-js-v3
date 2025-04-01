import { HostAddress, HostAddressType, HostResolverArguments } from "@aws-sdk/types";
import { describe, expect, test } from "vitest";

import { HostResolver } from "./HostResolver.browser";

describe(HostResolver.name, () => {
  const TEST_HOST_RESOLVER = new HostResolver();
  const TEST_HOST_NAME = "TEST_HOST_NAME";
  const TEST_SERVICE = "TEST_SERVICE";
  const TEST_ADDRESS = "TEST_ADDRESS";
  const TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };
  const TEST_HOST_ADDRESS: HostAddress = {
    addressType: HostAddressType.AAAA,
    address: TEST_ADDRESS,
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };

  test("resolveAddress() should return an empty list", async () => {
    const RESOLVED_HOST_ADDRESSES = await TEST_HOST_RESOLVER.resolveAddress(TEST_HOST_RESOLVER_ARGUMENTS);
    expect(Array.isArray(RESOLVED_HOST_ADDRESSES)).toBe(true);
    expect(RESOLVED_HOST_ADDRESSES).toHaveLength(0);
  });

  test("reportFailureOnAddress() should no-op", async () => {
    await TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_HOST_ADDRESS);
  });

  test("purgeCache() should no-op", async () => {
    await TEST_HOST_RESOLVER.purgeCache();
  });

  test("purgeCache(args) should no-op", async () => {
    await TEST_HOST_RESOLVER.purgeCache(TEST_HOST_RESOLVER_ARGUMENTS);
  });
});
