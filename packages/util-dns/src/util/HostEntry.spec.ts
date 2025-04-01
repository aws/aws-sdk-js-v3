import { HostAddress, HostAddressType } from "@aws-sdk/types";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { HostAddressEntry, HostEntry } from "./HostEntry";

describe(HostEntry.name, () => {
  const HOST_ADDRESS_A_0 = {
    hostName: "www.host.com",
    address: "10.0.0.0",
    addressType: HostAddressType.A,
    service: "service0",
  };
  const HOST_ADDRESS_A_1 = {
    hostName: "www.host.com",
    address: "10.0.0.1",
    addressType: HostAddressType.A,
    service: "service1",
  };
  const HOST_ADDRESS_AAAA_0 = {
    hostName: "www.host.com",
    address: "::0",
    addressType: HostAddressType.AAAA,
    service: "service0",
  };
  const HOST_ADDRESS_AAAA_1 = {
    hostName: "www.host.com",
    address: "::1",
    addressType: HostAddressType.AAAA,
    service: "service1",
  };
  const EXPIRATION_OFFSET_MS = 1000;

  let hostEntry: HostEntry;
  let addresses: HostAddress[];
  let expirationTtlMs: number;

  beforeEach(() => {
    vi.useFakeTimers();
    hostEntry = new HostEntry(Date.now());
    expirationTtlMs = Date.now() + EXPIRATION_OFFSET_MS;
    addresses = [HOST_ADDRESS_A_0, HOST_ADDRESS_A_1, HOST_ADDRESS_AAAA_0, HOST_ADDRESS_AAAA_1];
  });

  describe("updateRecords(addresses, expirationTtlMs)", () => {
    it("updates the nextTimestampToProcessMs and expirationTtlMs", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      expect(hostEntry.nextTimestampToUpdateMs).toEqual(expirationTtlMs);
      for (const hostAddressEntry of hostEntry.aRecords) {
        expect(hostAddressEntry.expirationTtlMs).toEqual(expirationTtlMs);
      }
      for (const hostAddressEntry of hostEntry.aaaaRecords) {
        expect(hostAddressEntry.expirationTtlMs).toEqual(expirationTtlMs);
      }
    });

    it("adds new addresses to success records", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      expect(hostEntry.aRecords).toHaveLength(2);
      expect(hostEntry.failedARecords).toHaveLength(0);
      expect(hostEntry.aaaaRecords).toHaveLength(2);
      expect(hostEntry.failedAaaaRecords).toHaveLength(0);
    });

    it("dedupes addresses to success records", () => {
      addresses = [HOST_ADDRESS_A_0, HOST_ADDRESS_A_0, HOST_ADDRESS_AAAA_0, HOST_ADDRESS_AAAA_0];
      hostEntry.updateRecords(addresses, expirationTtlMs);
      expect(hostEntry.aRecords).toHaveLength(1);
      expect(hostEntry.failedARecords).toHaveLength(0);
      expect(hostEntry.aaaaRecords).toHaveLength(1);
      expect(hostEntry.failedAaaaRecords).toHaveLength(0);
    });

    it("updates the expirationTtlMs of an existing good address", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      const newExpirationTtlMs = expirationTtlMs + EXPIRATION_OFFSET_MS;
      hostEntry.updateRecords([HOST_ADDRESS_AAAA_1], newExpirationTtlMs);
      expect((HOST_ADDRESS_AAAA_1 as HostAddressEntry).expirationTtlMs).toEqual(newExpirationTtlMs);
    });

    it("updates the expirationTtlMs of an existing failed address", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      const newExpirationTtlMs = expirationTtlMs + EXPIRATION_OFFSET_MS;
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_1);
      hostEntry.updateRecords([HOST_ADDRESS_AAAA_1], newExpirationTtlMs);
      expect((HOST_ADDRESS_AAAA_1 as HostAddressEntry).expirationTtlMs).toEqual(newExpirationTtlMs);
    });
  });

  describe("processRecords()", () => {
    it("removes expired records from good records except 1 good record", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      vi.advanceTimersByTime(EXPIRATION_OFFSET_MS);
      hostEntry.processRecords();
      expect(hostEntry.aRecords.length).toEqual(1);
      expect(hostEntry.failedARecords.length).toEqual(0);
      expect(hostEntry.aaaaRecords.length).toEqual(1);
      expect(hostEntry.failedAaaaRecords.length).toEqual(0);
    });

    it("removes expired records from failed records except 1 failed record", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_1);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_1);
      vi.advanceTimersByTime(EXPIRATION_OFFSET_MS);
      hostEntry.processRecords();
      expect(hostEntry.aRecords.length).toEqual(0);
      expect(hostEntry.failedARecords.length).toEqual(1);
      expect(hostEntry.aaaaRecords.length).toEqual(0);
      expect(hostEntry.failedAaaaRecords.length).toEqual(1);
    });

    it("promotes a failed address if there are no good addresses and not expired", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_1);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_1);
      hostEntry.processRecords();
      expect(hostEntry.aRecords.length).toEqual(1);
      expect(hostEntry.failedARecords.length).toEqual(1);
      expect(hostEntry.aaaaRecords.length).toEqual(1);
      expect(hostEntry.failedAaaaRecords.length).toEqual(1);
    });

    it("does not promote any expired failed addresses if there are no good addresses", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_1);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_1);
      vi.advanceTimersByTime(EXPIRATION_OFFSET_MS);
      hostEntry.processRecords();
      expect(hostEntry.aRecords.length).toEqual(0);
      expect(hostEntry.failedARecords.length).toEqual(1);
      expect(hostEntry.aaaaRecords.length).toEqual(0);
      expect(hostEntry.failedAaaaRecords.length).toEqual(1);
    });
  });

  describe("failAddressInRecords(address)", () => {
    it("moves failed addresses to failed records", () => {
      hostEntry.updateRecords(addresses, expirationTtlMs);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_1);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_AAAA_1);
      expect(hostEntry.aRecords.length).toEqual(0);
      expect(hostEntry.failedARecords.length).toEqual(2);
      expect(hostEntry.aaaaRecords.length).toEqual(0);
      expect(hostEntry.failedAaaaRecords.length).toEqual(2);
    });

    it("noop if failed address is not in good records", () => {
      hostEntry.updateRecords([HOST_ADDRESS_A_0], expirationTtlMs);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_1);
      expect(hostEntry.aRecords.length).toEqual(1);
      expect(hostEntry.failedARecords.length).toEqual(0);
      expect(hostEntry.aaaaRecords.length).toEqual(0);
      expect(hostEntry.failedAaaaRecords.length).toEqual(0);
    });

    it("noop if failed address is already in bad records", () => {
      hostEntry.updateRecords([HOST_ADDRESS_A_0], expirationTtlMs);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_0);
      hostEntry.failAddressInRecords(HOST_ADDRESS_A_0);
      expect(hostEntry.aRecords.length).toEqual(0);
      expect(hostEntry.failedARecords.length).toEqual(1);
      expect(hostEntry.aaaaRecords.length).toEqual(0);
      expect(hostEntry.failedAaaaRecords.length).toEqual(0);
    });
  });
});
