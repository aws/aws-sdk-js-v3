// @ts-check
import assert from "node:assert/strict";
import { afterEach, describe, it, mock } from "node:test";

import { isPublished, NonRetryableError, retryWithBackoff } from "./registry.mjs";

const pkg = { name: "@aws-sdk/core", version: "1.0.0" };

describe("registry requests", () => {
  afterEach(() => {
    mock.restoreAll();
    mock.timers.reset();
  });

  it("gives each request a timeout signal", async () => {
    /** @type {RequestInit | undefined} */
    let init;
    mock.method(globalThis, "fetch", async (/** @type {string} */ _url, /** @type {RequestInit} */ options) => {
      init = options;
      return new Response(null, { status: 200 });
    });

    assert.equal(await isPublished(pkg), true);
    assert.ok(init?.signal instanceof AbortSignal);
  });

  it("retries a request that timed out", async () => {
    mock.timers.enable({ apis: ["setTimeout"] });
    let calls = 0;
    mock.method(globalThis, "fetch", async () => {
      if (++calls === 1) {
        throw new DOMException("The operation timed out", "TimeoutError");
      }
      return new Response(null, { status: 404 });
    });

    const result = isPublished(pkg);
    await new Promise((resolve) => setImmediate(resolve));
    mock.timers.tick(5000);

    assert.equal(await result, false);
    assert.equal(calls, 2);
  });
});

describe("retryWithBackoff", () => {
  afterEach(() => mock.timers.reset());

  it("stops at once on a non-retryable error", async () => {
    let calls = 0;

    await assert.rejects(
      retryWithBackoff("label", async () => {
        ++calls;
        throw new NonRetryableError("permanent");
      }),
      /permanent/
    );
    assert.equal(calls, 1);
  });

  it("retries an ordinary error", async () => {
    mock.timers.enable({ apis: ["setTimeout"] });
    let calls = 0;

    const result = retryWithBackoff("label", async () => {
      if (++calls === 1) {
        throw new Error("transient");
      }
      return { ok: true, value: "done" };
    });
    await new Promise((resolve) => setImmediate(resolve));
    mock.timers.tick(5000);

    assert.equal(await result, "done");
  });
});
