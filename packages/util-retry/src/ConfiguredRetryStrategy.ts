import type {
  Provider,
  RetryBackoffStrategy,
  RetryErrorInfo,
  RetryStrategyV2,
  StandardRetryToken,
} from "@aws-sdk/types";

import { DEFAULT_RETRY_DELAY_BASE } from "./constants";
import { StandardRetryStrategy } from "./StandardRetryStrategy";

/**
 * @public
 *
 * This extension of the StandardRetryStrategy allows customizing the
 * backoff computation.
 */
export class ConfiguredRetryStrategy extends StandardRetryStrategy implements RetryStrategyV2 {
  private readonly computeNextBackoffDelay: (attempt: number) => number;
  /**
   * @param maxAttempts - the maximum number of retry attempts allowed.
   *                      e.g., if set to 3, then 4 total requests are possible.
   * @param computeNextBackoffDelay - a millisecond delay for each retry or a function that takes the retry attempt
   *                                  and returns the delay.
   *
   * @example exponential backoff.
   * ```js
   * new Client({
   *   retryStrategy: new ConfiguredRetryStrategy(3, (attempt) => attempt ** 2)
   * });
   * ```
   * @example constant delay.
   * ```js
   * new Client({
   *   retryStrategy: new ConfiguredRetryStrategy(3, 2000)
   * });
   * ```
   */
  public constructor(
    maxAttempts: number | Provider<number>,
    computeNextBackoffDelay: number | RetryBackoffStrategy["computeNextBackoffDelay"] = DEFAULT_RETRY_DELAY_BASE
  ) {
    super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
    if (typeof computeNextBackoffDelay === "number") {
      this.computeNextBackoffDelay = () => computeNextBackoffDelay;
    } else {
      this.computeNextBackoffDelay = computeNextBackoffDelay;
    }
  }

  public async refreshRetryTokenForRetry(
    tokenToRenew: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken> {
    const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
    return token;
  }
}
