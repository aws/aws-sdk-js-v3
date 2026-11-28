// This module provides an ordered delivery queue for parallel stream downloads.

export interface QueuedPart {
  /**
   * The transferred ArrayBuffer containing the part data.
   */
  buffer: ArrayBuffer;
  /**
   * Actual bytes written (may be less than buffer.byteLength for the last part).
   */
  byteLength: number;
}

interface PendingPart extends QueuedPart {
  /**
   * Bytes this part holds in {@link OrderedPartQueue.bufferedBytes}.
   */
  chargedBytes: number;
}

/**
 * Reorder buffer that accepts out-of-order part arrivals from parallel download
 * workers and delivers them sequentially to a Readable stream consumer.
 *
 * @internal
 */
export class OrderedPartQueue {
  /**
   * Out-of-order parts waiting for their turn. Keyed by rangeIndex.
   */
  private pending = new Map<number, PendingPart>();

  /**
   * Next sequential rangeIndex the consumer expects.
   */
  private nextExpected = 0;

  /**
   * Total number of parts to deliver.
   */
  private readonly totalParts: number;

  /**
   * Resolve callback for the consumer waiting for the next part.
   */
  private waitingConsumer: ((value: QueuedPart | null) => void) | null = null;

  /**
   * Error from a failed download.
   */
  private error: unknown = undefined;

  /**
   * Limit on {@link bufferedBytes} for this download.
   */
  private readonly maxBufferedBytes: number;

  /**
   * Bytes reserved for parts whose request was sent but has not finished,
   * plus parts waiting in `pending`.
   */
  private bufferedBytes = 0;

  /**
   * Reservation requests that did not fit yet. No HTTP request has started
   * for these. The dispatch loop waits for each reservation before asking
   * for the next, so this holds at most one entry.
   */
  private capacityWaiters: Array<{ partBytes: number; resolve: () => void }> = [];

  constructor(totalParts: number, maxBufferedBytes: number) {
    this.totalParts = totalParts;
    this.maxBufferedBytes = maxBufferedBytes;
  }

  /**
   * Called by the dispatch loop before sending a request. Resolves once
   * `partBytes` is reserved, or without reserving if the queue has an error.
   */
  public async reserveCapacity(partBytes: number): Promise<void> {
    if (this.error) {
      return;
    }

    if (this.canAdmit(partBytes)) {
      this.bufferedBytes += partBytes;
      return;
    }

    await new Promise<void>((resolve) => {
      this.capacityWaiters.push({ partBytes, resolve });
    });
  }

  /**
   * Called when a worker delivers a part (may arrive out of order).
   * Replaces the `reservedBytes` estimate with the size of the buffer the
   * worker allocated. If the consumer is waiting for this exact part,
   * delivers immediately. Otherwise stores it until its turn.
   *
   * `reservedBytes` defaults to 0 for parts that were never reserved.
   */
  public enqueue(rangeIndex: number, buffer: ArrayBuffer, byteLength: number, reservedBytes = 0): void {
    if (this.error) {
      return;
    }

    const chargedBytes = buffer.byteLength;
    this.bufferedBytes += chargedBytes - reservedBytes;

    if (rangeIndex === this.nextExpected && this.waitingConsumer) {
      // Consumer is already waiting for this exact part, so deliver immediately.
      const consumer = this.waitingConsumer;
      this.waitingConsumer = null;
      this.nextExpected++;
      this.releaseCapacity(chargedBytes);
      consumer({ buffer, byteLength });
    } else {
      // Out of order, hold until it's this part's turn.
      this.pending.set(rangeIndex, { buffer, byteLength, chargedBytes });
      // A buffer smaller than its estimate frees capacity.
      this.admitWaiters();
    }
  }

  /**
   * Called by the Readable stream's read() to get the next sequential part.
   * Returns null when all parts have been consumed.
   * Waits asynchronously if the next part hasn't arrived yet.
   */
  public async dequeue(): Promise<QueuedPart | null> {
    if (this.error) {
      throw this.error;
    }

    if (this.nextExpected >= this.totalParts) {
      return null; // All parts consumed
    }

    // Check if the next expected part already arrived out of order
    const ready = this.pending.get(this.nextExpected);
    if (ready) {
      this.pending.delete(this.nextExpected);
      this.nextExpected++;
      this.releaseCapacity(ready.chargedBytes);
      return { buffer: ready.buffer, byteLength: ready.byteLength };
    }

    // Wait for it to arrive
    return new Promise<QueuedPart | null>((resolve) => {
      this.waitingConsumer = resolve;
    });
  }

  /**
   * A part may be reserved when this download has nothing reserved, so one
   * part larger than the limit cannot block forever, or when it fits.
   */
  private canAdmit(partBytes: number): boolean {
    return this.bufferedBytes === 0 || this.bufferedBytes + partBytes <= this.maxBufferedBytes;
  }

  /**
   * Called when a part leaves the queue for the output stream.
   */
  private releaseCapacity(bytes: number): void {
    this.bufferedBytes -= bytes;
    this.admitWaiters();
  }

  /**
   * Reserves bytes for each waiting request that now fits, before waking it.
   */
  private admitWaiters(): void {
    while (this.capacityWaiters.length > 0 && this.canAdmit(this.capacityWaiters[0].partBytes)) {
      const waiter = this.capacityWaiters.shift()!;
      this.bufferedBytes += waiter.partBytes;
      waiter.resolve();
    }
  }

  /**
   * Called when a worker part fails, when the dispatch loop throws
   * or when the stream is destroyed. Unblocks the consumer
   * if it's waiting so the stream can surface the error instead of hanging.
   */
  public setError(error: unknown): void {
    this.error = error;

    if (this.waitingConsumer) {
      const consumer = this.waitingConsumer;
      this.waitingConsumer = null;
      consumer(null);
    }

    // Wake the dispatch loop without reserving. It sees hasError() and stops.
    const waiters = this.capacityWaiters;
    this.capacityWaiters = [];
    waiters.forEach(({ resolve }) => resolve());
  }

  /**
   * The dispatch loop
   * checks this to stop launching new part requests,
   * and the Readable stream checks it to distinguish completion from failure
   * when dequeue() returns null.
   */
  public hasError(): boolean {
    return this.error !== undefined;
  }

  /**
   * Called by the Readable stream's read() to pass the error to stream.destroy(err).
   */
  public getError(): unknown {
    return this.error;
  }

  /**
   * Returns the number of parts currently held (arrived but not yet delivered).
   * Useful for monitoring reorder buffer depth.
   */
  public get pendingCount(): number {
    return this.pending.size;
  }
}
