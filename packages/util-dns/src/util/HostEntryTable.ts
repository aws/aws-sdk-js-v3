import { HostAddress, HostResolverArguments } from "@aws-sdk/types";

import { DnsCache } from "../DnsCache";
import { HostEntry } from "./HostEntry";

/**
 * Host entry table which implements {@link DnsCache}, mapping:
 * host name (string) -> {@link HostEntry}
 * @internal
 */
export class HostEntryTable implements DnsCache {
  /**
   * Internal map as the host name level cache
   */
  private map: Map<string /* hostName */, HostEntry>;

  constructor() {
    this.map = new Map<string, HostEntry>();
  }

  /**
   * Maps a host name to a {@link HostEntry} in the cache, and uses
   * {@link HostEntry.updateRecords} to initialize address records.
   * @param args host resolver arguments which include host name
   * @param addresses addresses to set into the cache entry
   * @param nextTimestampToProcessMs timestamp for both cache entry processed and addresses' expiration
   */
  public set(args: HostResolverArguments, addresses: HostAddress[], nextTimestampToProcessMs: number): void {
    const hostEntry: HostEntry = new HostEntry(nextTimestampToProcessMs);
    hostEntry.updateRecords(addresses, nextTimestampToProcessMs);
    this.map.set(args.hostName, hostEntry);
  }

  /**
   * Gets the corresponding {@link HostEntry} for hostName, otherwise undefined
   * @param hostName key to get cache entry
   */
  public get(hostName: string): HostEntry | undefined {
    return this.map.get(hostName);
  }

  /**
   * Deletes the corresponding {@link HostEntry} for hostName
   * @param hostName key to delete cache entry
   */
  public delete(hostName: string): void {
    this.map.delete(hostName);
  }

  /**
   * Deletes all {@link HostEntry} mappings
   */
  public clear(): void {
    this.map.clear();
  }

  /**
   * Gets the size of the cache
   */
  get size(): number {
    return this.map.size;
  }
}
