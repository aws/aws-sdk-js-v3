import { Provider, RetryErrorInfo, RetryErrorType, RetryStrategyV2, StandardRetryToken } from "@aws-sdk/types";

import { DEFAULT_MAX_ATTEMPTS, RETRY_MODES } from "./config";
import {
  DEFAULT_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  RETRY_COST,
  THROTTLING_RETRY_DELAY_BASE,
  TIMEOUT_RETRY_COST,
} from "./constants";
import { getDefaultRetryBackoffStrategy } from "./defaultRetryBackoffStrategy";
import { createDefaultRetryToken } from "./defaultRetryToken";

/**
 * @public
 */
export class StandardRetryStrategy implements RetryStrategyV2 {
  public readonly mode: string = RETRY_MODES.STANDARD;
  private readonly capacityBucket = { availableCapacity: INITIAL_RETRY_TOKENS };
  private readonly retryBackoffStrategy = getDefaultRetryBackoffStrategy();
  private readonly maxAttemptsProvider: Provider<number>;

  constructor(maxAttempts: number);
  constructor(maxAttemptsProvider: Provider<number>);
  constructor(private readonly maxAttempts: number | Provider<number>) {
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }

  public async acquireInitialRetryToken(retryTokenScope: string): Promise<StandardRetryToken> {
    return createDefaultRetryToken({
      capacityBucket: this.capacityBucket,
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0,
    });
  }

  public async refreshRetryTokenForRetry(
    token: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken> {
    const maxAttempts = await this.getMaxAttempts();

    const retryCost = RETRY_COST;
    const timeoutRetryCost = TIMEOUT_RETRY_COST;
    const getCapacityCost = (errorType: RetryErrorType) => (errorType === "TRANSIENT" ? timeoutRetryCost : retryCost);

    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      const capacityCost = getCapacityCost(errorType);
      const delayBase = errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE;
      this.retryBackoffStrategy.setDelayBase(delayBase);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      let retryDelay: number;
      if (errorInfo.retryAfterHint) {
        const delayFromRetryAfterHint = errorInfo.retryAfterHint.getTime() - Date.now();
        retryDelay = Math.max(delayFromRetryAfterHint || 0, delayFromErrorType);
      } else {
        retryDelay = delayFromErrorType;
      }
      this.capacityBucket.availableCapacity -= capacityCost;
      return createDefaultRetryToken({
        capacityBucket: this.capacityBucket,
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        lastRetryCost: capacityCost,
      });
    }

    throw new Error("No retry token available");
  }

  public recordSuccess(token: StandardRetryToken): void {
    token.releaseRetryTokens(token.getLastRetryCost());
  }

  private async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }

  private shouldRetry(tokenToRenew: StandardRetryToken, errorInfo: RetryErrorInfo, maxAttempts: number): boolean {
    const attempts = tokenToRenew.getRetryCount();
    return (
      attempts < maxAttempts &&
      tokenToRenew.hasRetryTokens(errorInfo.errorType) &&
      this.isRetryableError(errorInfo.errorType)
    );
  }

  private isRetryableError(errorType: RetryErrorType): boolean {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
}
