import { describe, expect, it } from "vitest";

import { OrderedPartQueue } from "./ordered-part-queue";

const buf = (byteLength: number): ArrayBuffer => new ArrayBuffer(byteLength);

/** Lets pending promise callbacks run. */
const flush = async () => {
  for (let i = 0; i < 5; i++) {
    await Promise.resolve();
  }
};

/** Starts reserveCapacity() and reports whether it has resolved. */
const reserve = (queue: OrderedPartQueue, partBytes: number) => {
  const state = { admitted: false };
  const promise = queue.reserveCapacity(partBytes).then(() => {
    state.admitted = true;
  });
  return { state, promise };
};

describe(OrderedPartQueue.name, () => {
  describe("in-order delivery", () => {
    it("delivers parts in sequential order even when they arrive out of order", async () => {
      const queue = new OrderedPartQueue(3, 1024);

      queue.enqueue(2, buf(30), 30);
      queue.enqueue(0, buf(10), 10);
      queue.enqueue(1, buf(20), 20);

      expect((await queue.dequeue())?.byteLength).toBe(10);
      expect((await queue.dequeue())?.byteLength).toBe(20);
      expect((await queue.dequeue())?.byteLength).toBe(30);
      expect(await queue.dequeue()).toBeNull();
    });

    it("delivers directly to a waiting consumer without buffering in pending", async () => {
      const queue = new OrderedPartQueue(1, 1024);

      const pending = queue.dequeue();
      queue.enqueue(0, buf(5), 5);

      expect((await pending)?.byteLength).toBe(5);
      expect(queue.pendingCount).toBe(0);
    });
  });

  describe("reserveCapacity", () => {
    it("admits a part larger than the limit when nothing is reserved", async () => {
      const queue = new OrderedPartQueue(1, 100);
      await expect(queue.reserveCapacity(500)).resolves.toBeUndefined();
    });

    it("admits parts that fit under the limit", async () => {
      const queue = new OrderedPartQueue(2, 100);
      await queue.reserveCapacity(40);
      await expect(queue.reserveCapacity(60)).resolves.toBeUndefined();
    });

    it("makes a part wait when it would exceed the limit", async () => {
      const queue = new OrderedPartQueue(2, 100);
      await queue.reserveCapacity(60);

      const second = reserve(queue, 60);
      await flush();

      expect(second.state.admitted).toBe(false);
    });

    it("admits the waiting part when dequeue() releases a part", async () => {
      const queue = new OrderedPartQueue(2, 100);
      await queue.reserveCapacity(100);
      queue.enqueue(0, buf(100), 100, 100);

      const second = reserve(queue, 100);
      await flush();
      expect(second.state.admitted).toBe(false);

      await queue.dequeue();
      await second.promise;

      expect(second.state.admitted).toBe(true);
    });

    it("admits the waiting part when a part is delivered to a waiting consumer", async () => {
      const queue = new OrderedPartQueue(2, 50);
      await queue.reserveCapacity(50);

      const consumer = queue.dequeue();
      const second = reserve(queue, 50);
      await flush();
      expect(second.state.admitted).toBe(false);

      queue.enqueue(0, buf(50), 50, 50);
      await consumer;
      await second.promise;

      expect(second.state.admitted).toBe(true);
    });

    it("reserves for the woken part before any later reservation can use the freed bytes", async () => {
      const queue = new OrderedPartQueue(3, 100);
      await queue.reserveCapacity(100);
      queue.enqueue(0, buf(100), 100, 100);

      const waiting = reserve(queue, 100);
      await flush();

      await queue.dequeue();
      // The waiter's 100 bytes were reserved at release, so this must wait.
      const later = reserve(queue, 100);
      await waiting.promise;
      await flush();

      expect(waiting.state.admitted).toBe(true);
      expect(later.state.admitted).toBe(false);
    });
  });

  describe("reconciling the estimate with the actual buffer size", () => {
    it("holds back later parts when the buffer is larger than the estimate", async () => {
      const queue = new OrderedPartQueue(3, 100);
      await queue.reserveCapacity(50);
      await queue.reserveCapacity(50);

      // The estimate was 50, the worker allocated 80, so 130 bytes are now held.
      queue.enqueue(1, buf(80), 80, 50);
      queue.enqueue(0, buf(50), 50, 50);

      const third = reserve(queue, 10);
      await flush();
      expect(third.state.admitted).toBe(false);

      // Releasing part 0 (50) leaves 80, so 80 + 10 <= 100 does fit.
      await queue.dequeue();
      await third.promise;
      expect(third.state.admitted).toBe(true);
    });

    it("keeps waiting after a release that does not cover the overage", async () => {
      const queue = new OrderedPartQueue(3, 100);
      await queue.reserveCapacity(50);
      await queue.reserveCapacity(50);

      queue.enqueue(0, buf(50), 50, 50);
      queue.enqueue(1, buf(90), 90, 50); // holds 140 in total

      const third = reserve(queue, 20);
      await flush();

      await queue.dequeue(); // 140 - 50 = 90, and 90 + 20 > 100
      await flush();
      expect(third.state.admitted).toBe(false);

      await queue.dequeue(); // 0 held
      await third.promise;
      expect(third.state.admitted).toBe(true);
    });

    it("admits a waiting part when the buffer is smaller than the estimate", async () => {
      const queue = new OrderedPartQueue(3, 100);
      await queue.reserveCapacity(100);

      const second = reserve(queue, 60);
      await flush();
      expect(second.state.admitted).toBe(false);

      // Part 1 was estimated at 100 but is 40, which frees 60 bytes.
      queue.enqueue(1, buf(40), 40, 100);
      await second.promise;

      expect(second.state.admitted).toBe(true);
    });

    it("counts the actual size, not the estimate, once the part is queued", async () => {
      const queue = new OrderedPartQueue(2, 100);
      await queue.reserveCapacity(100);
      queue.enqueue(0, buf(40), 40, 100);

      // 40 held, so 60 more fits and 61 does not.
      await expect(queue.reserveCapacity(60)).resolves.toBeUndefined();
      const over = reserve(queue, 1);
      await flush();
      expect(over.state.admitted).toBe(false);
    });
  });

  describe("setError", () => {
    it("wakes a waiting reservation without reserving", async () => {
      const queue = new OrderedPartQueue(2, 10);
      await queue.reserveCapacity(10);

      const second = reserve(queue, 10);
      await flush();
      queue.setError(new Error("boom"));
      await second.promise;

      expect(second.state.admitted).toBe(true);
      expect(queue.hasError()).toBe(true);
    });

    it("resolves reserveCapacity() immediately once the queue has an error", async () => {
      const queue = new OrderedPartQueue(1, 10);
      queue.setError(new Error("boom"));

      await expect(queue.reserveCapacity(1000)).resolves.toBeUndefined();
    });

    it("rejects dequeue() with the error", async () => {
      const queue = new OrderedPartQueue(1, 10);
      queue.setError(new Error("boom"));

      await expect(queue.dequeue()).rejects.toThrow("boom");
    });
  });
});
