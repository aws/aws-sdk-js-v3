/**
 * @public
 */
export enum RETRY_MODES {
  STANDARD = "standard",
  ADAPTIVE = "adaptive",
}

/**
 * @public
 *
 * The default value for how many HTTP requests an SDK should make for a
 * single SDK operation invocation before giving up
 */
export const DEFAULT_MAX_ATTEMPTS = 3;

/**
 * @public
 *
 * The default retry algorithm to use.
 */
export const DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
