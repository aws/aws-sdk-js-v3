import { HostAddressType } from "@aws-sdk/types";
import { beforeEach, describe, expect, test as it } from "vitest";

import { HostAddressEntryCollection } from "./HostAddressEntryCollection";
import { HostAddressEntry } from "./HostEntry";

describe(HostAddressEntryCollection.name, () => {
  let collection: HostAddressEntryCollection;
  const FIRST_HOST_ADDRESS_ENTRY: HostAddressEntry = {
    address: "first",
    addressType: HostAddressType.A,
    expirationTtlMs: 0,
    hostName: "hostname",
    service: "service",
  };
  const SECOND_HOST_ADDRESS_ENTRY: HostAddressEntry = {
    ...FIRST_HOST_ADDRESS_ENTRY,
    address: "second",
  };
  const THIRD_HOST_ADDRESS_ENTRY: HostAddressEntry = {
    ...FIRST_HOST_ADDRESS_ENTRY,
    address: "third",
  };
  const OTHER_HOST_ADDRESS_ENTRY: HostAddressEntry = {
    ...FIRST_HOST_ADDRESS_ENTRY,
    address: "other list",
  };

  beforeEach(() => {
    collection = new HostAddressEntryCollection();
  });

  describe("append(entry)", () => {
    it("should append entry", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      expect(collection.length).toEqual(1);
      expect(collection.data[0]).toEqual(FIRST_HOST_ADDRESS_ENTRY);
    });

    it("should append entries", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.append(SECOND_HOST_ADDRESS_ENTRY);
      expect(collection.length).toEqual(2);
      expect(collection.data[0]).toEqual(FIRST_HOST_ADDRESS_ENTRY);
      expect(collection.data[1]).toEqual(SECOND_HOST_ADDRESS_ENTRY);
    });
  });

  describe("cycle(collection?)", () => {
    it("should throw error when cycling an empty collection", () => {
      expect(() => collection.cycle()).toThrowError("Cannot cycle an empty collection");
    });

    it("should cycle a one-entry collection ", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.cycle();
      expect(collection.length).toEqual(1);
      expect(collection.data[0]).toEqual(FIRST_HOST_ADDRESS_ENTRY);
    });

    it("should cycle a multi-entry collection", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.append(SECOND_HOST_ADDRESS_ENTRY);
      collection.append(THIRD_HOST_ADDRESS_ENTRY);
      collection.cycle();
      expect(collection.length).toEqual(3);
      expect(collection.data[0]).toEqual(SECOND_HOST_ADDRESS_ENTRY);
      expect(collection.data[1]).toEqual(THIRD_HOST_ADDRESS_ENTRY);
      expect(collection.data[2]).toEqual(FIRST_HOST_ADDRESS_ENTRY);
    });

    it("should cycle a multi-entry collection to another collection", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.append(SECOND_HOST_ADDRESS_ENTRY);
      collection.append(THIRD_HOST_ADDRESS_ENTRY);
      const toCycleToCollection = new HostAddressEntryCollection();
      toCycleToCollection.append(OTHER_HOST_ADDRESS_ENTRY);
      collection.cycle(toCycleToCollection);
      expect(collection.length).toEqual(2);
      expect(collection.data[0]).toEqual(SECOND_HOST_ADDRESS_ENTRY);
      expect(collection.data[1]).toEqual(THIRD_HOST_ADDRESS_ENTRY);
      expect(toCycleToCollection.length).toEqual(2);
      expect(toCycleToCollection.data[0]).toEqual(OTHER_HOST_ADDRESS_ENTRY);
      expect(toCycleToCollection.data[1]).toEqual(FIRST_HOST_ADDRESS_ENTRY);
    });
  });

  describe("remove(entry)", () => {
    it("should throw error when removing from an empty collection", () => {
      expect(() => collection.remove(FIRST_HOST_ADDRESS_ENTRY)).toThrowError("Cannot remove from an empty collection");
    });

    it("should remove an entry correctly from the beginning", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.append(SECOND_HOST_ADDRESS_ENTRY);
      collection.append(THIRD_HOST_ADDRESS_ENTRY);
      expect(collection.remove(FIRST_HOST_ADDRESS_ENTRY)).toEqual(FIRST_HOST_ADDRESS_ENTRY);
      expect(collection.length).toEqual(2);
      expect(collection.data[0]).toEqual(SECOND_HOST_ADDRESS_ENTRY);
      expect(collection.data[1]).toEqual(THIRD_HOST_ADDRESS_ENTRY);
    });

    it("should remove an entry correctly from the middle", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.append(SECOND_HOST_ADDRESS_ENTRY);
      collection.append(THIRD_HOST_ADDRESS_ENTRY);
      expect(collection.remove(SECOND_HOST_ADDRESS_ENTRY)).toEqual(SECOND_HOST_ADDRESS_ENTRY);
      expect(collection.length).toEqual(2);
      expect(collection.data[0]).toEqual(FIRST_HOST_ADDRESS_ENTRY);
      expect(collection.data[1]).toEqual(THIRD_HOST_ADDRESS_ENTRY);
    });

    it("should remove an entry correctly from the end", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.append(SECOND_HOST_ADDRESS_ENTRY);
      collection.append(THIRD_HOST_ADDRESS_ENTRY);
      expect(collection.remove(THIRD_HOST_ADDRESS_ENTRY)).toEqual(THIRD_HOST_ADDRESS_ENTRY);
      expect(collection.length).toEqual(2);
      expect(collection.data[0]).toEqual(FIRST_HOST_ADDRESS_ENTRY);
      expect(collection.data[1]).toEqual(SECOND_HOST_ADDRESS_ENTRY);
    });
  });

  describe("iteration", () => {
    it("should be able to iterate an empty collection", () => {
      for (const _ of collection) {
      }
    });

    it("should be able to iterate a collection", () => {
      collection.append(FIRST_HOST_ADDRESS_ENTRY);
      collection.append(SECOND_HOST_ADDRESS_ENTRY);
      collection.append(THIRD_HOST_ADDRESS_ENTRY);
      for (const _ of collection) {
      }
    });
  });
});
