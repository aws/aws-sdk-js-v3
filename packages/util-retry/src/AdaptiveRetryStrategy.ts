import { Provider, RetryErrorInfo, RetryStrategyV2, RetryToken, StandardRetryToken } from "@aws-sdk/types";

import { RETRY_MODES } from "./config";
import { DefaultRateLimiter } from "./DefaultRateLimiter";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
import { RateLimiter } from "./types";

/**
 * Strategy options to be passed to AdaptiveRetryStrategy
 */
export interface AdaptiveRetryStrategyOptions {
  rateLimiter?: RateLimiter;
}

export class AdaptiveRetryStrategy implements RetryStrategyV2 {
  private rateLimiter: RateLimiter;
  private standardRetryStrategy: StandardRetryStrategy;
  public mode: string = RETRY_MODES.ADAPTIVE;

  constructor(private readonly maxAttemptsProvider: Provider<number>, options?: AdaptiveRetryStrategyOptions) {
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }

  async acquireInitialRetryToken(retryTokenScope: string): Promise<RetryToken> {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }

  async refreshRetryTokenForRetry(tokenToRenew: StandardRetryToken, errorInfo: RetryErrorInfo): Promise<RetryToken> {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }

  recordSuccess(token: StandardRetryToken): void {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
}
