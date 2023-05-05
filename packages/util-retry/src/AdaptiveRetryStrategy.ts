import { Provider, RetryErrorInfo, RetryStrategyV2, RetryToken, StandardRetryToken } from "@aws-sdk/types";

import { RETRY_MODES } from "./config";
import { DefaultRateLimiter } from "./DefaultRateLimiter";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
import { RateLimiter } from "./types";

/**
 * @public
 *
 * Strategy options to be passed to AdaptiveRetryStrategy
 */
export interface AdaptiveRetryStrategyOptions {
  rateLimiter?: RateLimiter;
}

/**
 * @public
 *
 * The AdaptiveRetryStrategy is a retry strategy for executing against a very
 * resource constrained set of resources. Care should be taken when using this
 * retry strategy. By default, it uses a dynamic backoff delay based on load
 * currently perceived against the downstream resource and performs circuit
 * breaking to disable retries in the event of high downstream failures using
 * the DefaultRateLimiter.
 *
 * @see {@link StandardRetryStrategy}
 * @see {@link DefaultRateLimiter }
 */
export class AdaptiveRetryStrategy implements RetryStrategyV2 {
  private rateLimiter: RateLimiter;
  private standardRetryStrategy: StandardRetryStrategy;
  public readonly mode: string = RETRY_MODES.ADAPTIVE;

  constructor(private readonly maxAttemptsProvider: Provider<number>, options?: AdaptiveRetryStrategyOptions) {
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }

  public async acquireInitialRetryToken(retryTokenScope: string): Promise<RetryToken> {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }

  public async refreshRetryTokenForRetry(
    tokenToRenew: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<RetryToken> {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }

  public recordSuccess(token: StandardRetryToken): void {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
}
