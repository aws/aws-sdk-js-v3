import { DnsCacheEntryCollection } from "../DnsCache";
import { HostAddressEntry } from "./HostEntry";

/**
 * @internal
 */
export class HostAddressEntryCollection implements DnsCacheEntryCollection {
  public data: HostAddressEntry[] = [];

  public get length(): number {
    return this.data.length;
  }

  /**
   * Removes and appends the first entry to the end, e.g. 2 cycles:
   * [A, B, C] -> [B, C, A] -> [C, A, B]
   * @param collection optional collection to append the cycled entry to
   * @returns entry cycled
   */
  public cycle(collection?: HostAddressEntryCollection): HostAddressEntry {
    if (this.data.length === 0) {
      throw new Error("Cannot cycle an empty collection");
    }
    const entry = this.data.shift()!;
    (collection || this).append(entry);
    return entry;
  }

  public append(entry: HostAddressEntry): void {
    this.data.push(entry);
  }

  public remove(entry: HostAddressEntry): HostAddressEntry {
    if (this.length === 0) {
      throw new Error("Cannot remove from an empty collection");
    }
    const index = this.data.findIndex((e) => e.address === entry.address);
    const removedEntry = this.data[index];
    this.data.splice(index, 1);
    return removedEntry;
  }

  public [Symbol.iterator](): Iterator<HostAddressEntry> {
    return this.data[Symbol.iterator]();
  }
}
