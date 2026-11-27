// @ts-check
// NPM requests are retried.

import { BACKOFF_SECONDS, REGISTRY_REQUEST_TIMEOUT_SECONDS } from "./tuning.mjs";

const REGISTRY = "https://registry.npmjs.org";

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Thrown from an attempt to end the retries at once.
 */
export class NonRetryableError extends Error {}

/**
 * No attempt limit: only the deadline, if any, bounds the retries.
 * A Retry-After from NPM replaces the backoff delay.
 *
 * @template T
 * @param {string} label
 * @param {() => Promise<{ ok: true, value: T } | { ok: false, reason: string, retryAfterSeconds?: number }>} attemptFn
 * @param {{ quiet?: boolean, deadline?: number }} [options] quiet suppresses the per-attempt log line; deadline is epoch milliseconds.
 * @returns {Promise<T>}
 */
export const retryWithBackoff = async (label, attemptFn, { quiet = false, deadline = Infinity } = {}) => {
  for (let attempt = 0; ; ++attempt) {
    let failure;
    let retryAfterSeconds;
    try {
      const result = await attemptFn();
      if (result.ok) {
        return result.value;
      }
      failure = result.reason;
      retryAfterSeconds = result.retryAfterSeconds;
    } catch (e) {
      if (e instanceof NonRetryableError) {
        throw e;
      }
      failure = e instanceof Error ? e.message : String(e);
    }
    const remaining = deadline - Date.now();
    if (remaining <= 0) {
      throw new Error(`${label}: gave up after deadline (${failure})`);
    }
    const delay = retryAfterSeconds ?? BACKOFF_SECONDS[Math.min(attempt, BACKOFF_SECONDS.length - 1)];
    if (!quiet) {
      console.warn(`${label} failed (${failure}). Retrying in ${delay}s${retryAfterSeconds ? " (Retry-After)" : ""}.`);
    }
    await sleep(Math.min(delay * 1000, remaining));
  }
};

/**
 * @param {string | null} header seconds or an HTTP date.
 * @returns {number | undefined}
 */
const parseRetryAfter = (header) => {
  if (!header) {
    return undefined;
  }
  const seconds = Number(header);
  if (Number.isFinite(seconds)) {
    return Math.max(1, seconds);
  }
  const date = Date.parse(header);
  return Number.isNaN(date) ? undefined : Math.max(1, Math.ceil((date - Date.now()) / 1000));
};

/**
 * @param {string} url
 * @returns {Promise<{ status: number, retryAfterSeconds: number | undefined }>}
 */
const getUrlStatus = async (url) => {
  const response = await fetch(url, {
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(REGISTRY_REQUEST_TIMEOUT_SECONDS * 1000),
  });
  return { status: response.status, retryAfterSeconds: parseRetryAfter(response.headers.get("retry-after")) };
};

/**
 * @param {{ name: string, version: string }} pkg
 * @returns {Promise<{ status: number, retryAfterSeconds: number | undefined }>}
 */
const getStatus = ({ name, version }) => getUrlStatus(`${REGISTRY}/${name.replace("/", "%2f")}/${version}`);

/**
 * @param {number} status
 * @returns {boolean}
 */
const is2xx = (status) => status >= 200 && status < 300;

/**
 * Only 404 confirms non-publication and only 2xx confirms publication.
 * A version held for scanning also returns 404.
 *
 * @param {{ name: string, version: string }} pkg
 * @returns {Promise<boolean>}
 */
export const isPublished = (pkg) =>
  retryWithBackoff(`NPM check for ${pkg.name}@${pkg.version}`, async () => {
    const { status, retryAfterSeconds } = await getStatus(pkg);
    if (is2xx(status)) {
      return { ok: true, value: true };
    }
    if (status === 404) {
      return { ok: true, value: false };
    }
    return { ok: false, reason: `status ${status}`, retryAfterSeconds };
  });

/**
 * Only 404 confirms that the package was never published. The dist-tags endpoint answers 401 for a missing package,
 * so the latest tag is read instead.
 *
 * @param {{ name: string }} pkg
 * @returns {Promise<boolean>}
 */
export const packageExists = ({ name }) =>
  retryWithBackoff(`NPM check for package ${name}`, async () => {
    const { status, retryAfterSeconds } = await getUrlStatus(`${REGISTRY}/${encodeURIComponent(name)}/latest`);
    if (is2xx(status)) {
      return { ok: true, value: true };
    }
    if (status === 404) {
      return { ok: true, value: false };
    }
    return { ok: false, reason: `status ${status}`, retryAfterSeconds };
  });

/**
 * Unlike isPublished, a 404 is not an answer here: it is the expected state until the scan releases the version.
 *
 * @param {{ name: string, version: string }} pkg
 * @param {number} deadline epoch milliseconds.
 * @returns {Promise<void>}
 */
export const confirmPublished = (pkg, deadline) =>
  retryWithBackoff(
    `NPM availability of ${pkg.name}@${pkg.version}`,
    async () => {
      const { status, retryAfterSeconds } = await getStatus(pkg);
      return is2xx(status)
        ? { ok: true, value: undefined }
        : { ok: false, reason: `status ${status}`, retryAfterSeconds };
    },
    { quiet: true, deadline }
  );
