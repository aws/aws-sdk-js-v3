import { HostAddress, HostAddressType } from "@aws-sdk/types";

import { DnsCacheEntry, DnsCacheHostAddressEntry } from "../DnsCache";
import { HostAddressEntryCollection } from "./HostAddressEntryCollection";

/**
 * Interface used in {@link HostEntry} records
 * @internal
 */
export interface HostAddressEntry extends DnsCacheHostAddressEntry {}

/**
 * {@link DnsCacheEntry} implementation that uses {@link LinkedList} for
 * {@link DnsCacheEntryCollection}.
 * @internal
 */
export class HostEntry implements DnsCacheEntry {
  /**
   * {@link LinkedList} of good IPv6 records for an address
   */
  aaaaRecords: HostAddressEntryCollection;
  /**
   * {@link LinkedList} of good IPv4 records for an address
   */
  aRecords: HostAddressEntryCollection;
  /**
   * {@link LinkedList} of failed IPv6 records for an address
   */
  failedAaaaRecords: HostAddressEntryCollection;
  /**
   * {@link LinkedList} of failed IPv4 records for an address
   */
  failedARecords: HostAddressEntryCollection;
  /**
   * Timestamp for when to next process the entry
   */
  nextTimestampToUpdateMs: number;

  constructor(nextTimestampToProcessMs: number) {
    this.aaaaRecords = new HostAddressEntryCollection();
    this.aRecords = new HostAddressEntryCollection();
    this.failedAaaaRecords = new HostAddressEntryCollection();
    this.failedARecords = new HostAddressEntryCollection();
    this.nextTimestampToUpdateMs = nextTimestampToProcessMs;
  }

  /**
   * Updates the entry given the new set of addresses and a new expiration
   * timestamp:
   * - If an address is already in the entry, the expiration timestamp is updated.
   * - If an address is not in the entry, then it is added to the good records.
   * @param addresses list of addresses used to update entry records
   * @param expirationTtlMs expiration timestamp for new or updated addresses
   * @see https://github.com/awslabs/aws-c-io/blob/f2ff573c191e1c4ea0248af5c08161356be3bc78/source/host_resolver.c#L703
   */
  public updateRecords(addresses: HostAddress[], expirationTtlMs: number) {
    this.nextTimestampToUpdateMs = expirationTtlMs;
    const addressesToAppend: HostAddress[] = [];
    for (const freshAddress of addresses) {
      const hostAddressEntry = this.findAddress(freshAddress);
      // If address already exists, update the expiration TTL
      if (hostAddressEntry !== undefined) {
        hostAddressEntry.expirationTtlMs = expirationTtlMs;
        continue;
      }
      // If address doesn't exist, add the address to the good records
      addressesToAppend.push(freshAddress);
    }
    for (const addressToAppend of addressesToAppend) {
      const hostAddressEntry = this.findAddress(addressToAppend);
      if (hostAddressEntry !== undefined) {
        continue;
      }
      const successRecords = this.getGoodRecords(addressToAppend);
      successRecords.append(
        Object.assign(addressToAppend, {
          expirationTtlMs,
        })
      );
    }
  }

  /**
   * Removes expired records from records (except 1 in case of DNS outages).
   * In the case that good records are empty, should attempt to promote 1
   * non-expired failed address to the good records.
   * Uses {@link processRecordsAddressType} for each {@link HostAddressType}
   * @see https://github.com/awslabs/aws-c-io/blob/f2ff573c191e1c4ea0248af5c08161356be3bc78/source/host_resolver.c#L475
   */
  public processRecords(): void {
    this.processRecordsAddressType(this.aRecords, this.failedARecords);
    this.processRecordsAddressType(this.aaaaRecords, this.failedAaaaRecords);
  }

  /**
   * Moves the address from good records to failed records
   * @param address address to move to failed records
   */
  public failAddressInRecords(address: HostAddress): void {
    const successRecords = this.getGoodRecords(address);
    const failedRecords = this.getFailedRecords(address);

    const recordsToRemove: HostAddressEntry[] = [];
    for (const hostAddressEntry of successRecords) {
      if (hostAddressEntry.address === address.address) {
        recordsToRemove.push(hostAddressEntry);
        failedRecords.append(hostAddressEntry);
      }
    }
    for (const recordToRemove of recordsToRemove) {
      successRecords.remove(recordToRemove);
    }
  }

  /**
   * Find the corresponding {@link HostAddressEntry} for a {@link HostAddress} in
   * a {@link HostEntry}'s records, or return undefined.
   * @param address address to search for
   * @returns host address entry if found, otherwise undefined
   */
  private findAddress(address: HostAddress): HostAddressEntry | undefined {
    const successRecords = this.getGoodRecords(address);
    for (const hostAddressEntry of successRecords) {
      if (address.address === hostAddressEntry.address) {
        return hostAddressEntry;
      }
    }
    const failedRecords = this.getFailedRecords(address);
    for (const hostAddressEntry of failedRecords) {
      if (address.address === hostAddressEntry.address) {
        return hostAddressEntry;
      }
    }
    return undefined;
  }

  /**
   * Removes expired records from records (except 1 in case of DNS outages).
   * In the case that good records are empty, should attempt to promote 1
   * non-expired failed address to the good records.
   * @param successRecords good records in cache to update
   * @param failedRecords bad records in cache to update
   */
  private processRecordsAddressType(
    successRecords: HostAddressEntryCollection,
    failedRecords: HostAddressEntryCollection
  ) {
    // Remove expired addresses
    const successRecordsToRemove: HostAddressEntry[] = [];
    let successIndex = 0;
    for (const hostAddressEntry of successRecords) {
      // Leave 1 address so we can keep trying in DNS outages
      if (successIndex === successRecords.length - 1) {
        break;
      }
      if (Date.now() >= hostAddressEntry.expirationTtlMs) {
        successRecordsToRemove.push(hostAddressEntry);
      }
      successIndex++;
    }
    for (const recordToRemove of successRecordsToRemove) {
      successRecords.remove(recordToRemove);
    }
    const failedRecordsToRemove: HostAddressEntry[] = [];
    let failedIndex = 0;
    for (const hostAddressEntry of failedRecords) {
      // Leave 1 address so we can keep trying in DNS outages
      if (failedIndex === failedRecords.length - 1) {
        break;
      }
      if (Date.now() >= hostAddressEntry.expirationTtlMs) {
        failedRecordsToRemove.push(hostAddressEntry);
      }
      failedIndex++;
    }
    for (const recordToRemove of failedRecordsToRemove) {
      failedRecords.remove(recordToRemove);
    }

    // If success records are empty, try promoting one failed record
    if (successRecords.length === 0) {
      let hostAddressEntryToPromote: HostAddressEntry | undefined = undefined;
      for (const hostAddressEntry of failedRecords) {
        // If failed record is expired, don't promote
        if (Date.now() >= hostAddressEntry.expirationTtlMs) {
          continue;
        }
        // Promote the current hostEntry
        hostAddressEntryToPromote = hostAddressEntry;
        break;
      }
      if (hostAddressEntryToPromote !== undefined) {
        failedRecords.remove(hostAddressEntryToPromote);
        successRecords.append(hostAddressEntryToPromote);
      }
    }
  }

  /**
   * Gets the good records for an address based on {@link HostAddressType}
   * @param address address used to get the {@link HostAddressType}
   * @returns good records for an address
   */
  private getGoodRecords(address: HostAddress): HostAddressEntryCollection {
    return address.addressType === HostAddressType.AAAA ? this.aaaaRecords : this.aRecords;
  }

  /**
   * Gets the failed records for an address based on {@link HostAddressType}
   * @param address address used to get the {@link HostAddressType}
   * @returns failed records for an address
   */
  private getFailedRecords(address: HostAddress): HostAddressEntryCollection {
    return address.addressType === HostAddressType.AAAA ? this.failedAaaaRecords : this.failedARecords;
  }
}
