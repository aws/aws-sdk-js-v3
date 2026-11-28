// @ts-check
import { NonRetryableError } from "./registry.mjs";

// A retry cannot fix a configuration or permission failure, so only these are retried until the publish deadline.
const TRANSIENT_CODES = new Set([
  "E429",
  "ECONNABORTED",
  "ECONNREFUSED",
  "ECONNRESET",
  "EAI_AGAIN",
  "EHOSTUNREACH",
  "ENETUNREACH",
  "ENOTFOUND",
  "EPIPE",
  "ETIMEDOUT",
]);

/**
 * Thrown when a publish failed in a way that a retry cannot fix.
 */
export class PermanentPublishError extends NonRetryableError {
  /**
   * @param {string} id package name and version.
   * @param {string} output npm output of the failed attempt.
   */
  constructor(id, output) {
    super(`${id} failed to publish:\n${output}`);
    this.id = id;
    this.output = output;
  }
}

/**
 * @param {string} output
 * @returns {string | undefined}
 */
export const parseNpmErrorCode = (output) => output.match(/^npm (?:error|ERR!) code (\S+)/m)?.[1];

/**
 * An unrecognized failure is permanent, so a configuration problem is reported at once.
 *
 * @param {{ output: string, timedOut: boolean }} failure
 * @returns {boolean}
 */
export const isTransientPublishFailure = ({ output, timedOut }) => {
  if (timedOut) {
    return true;
  }
  const code = parseNpmErrorCode(output);
  if (code === undefined) {
    return /socket hang up/i.test(output);
  }
  return TRANSIENT_CODES.has(code) || /^E5\d\d$/.test(code);
};
