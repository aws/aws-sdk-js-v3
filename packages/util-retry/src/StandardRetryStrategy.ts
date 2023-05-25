import { Provider, RetryErrorInfo, RetryErrorType, RetryStrategyV2, StandardRetryToken } from "@aws-sdk/types";

import { DEFAULT_MAX_ATTEMPTS, RETRY_MODES } from "./config";
import {
  DEFAULT_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  NO_RETRY_INCREMENT,
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
  private capacity: number = INITIAL_RETRY_TOKENS;
  private readonly retryBackoffStrategy = getDefaultRetryBackoffStrategy();
  private readonly maxAttemptsProvider: Provider<number>;

  constructor(maxAttempts: number);
  constructor(maxAttemptsProvider: Provider<number>);
  constructor(private readonly maxAttempts: number | Provider<number>) {
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }

  public async acquireInitialRetryToken(retryTokenScope: string): Promise<StandardRetryToken> {
    return createDefaultRetryToken({
      availableCapacity: this.capacity,
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0,
    });
  }

  public async refreshRetryTokenForRetry(
    token: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken> {
    const maxAttempts = await this.getMaxAttempts();

    const getCapacityCost = (errorType: RetryErrorType) =>
      errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;

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
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        availableCapacity: this.capacity,
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        lastRetryCost: capacityCost,
      });
    }

    throw new Error("No retry token available");
  }

  public recordSuccess(token: StandardRetryToken): void {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }

  /**
   * @returns the current available retry capacity.
   *
   * This number decreases when retries are executed and refills when requests or retries succeed.
   */
  public getCapacity(): number {
    return this.capacity;
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

    const getCapacityAmount = (errorType: RetryErrorType) =>
      errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;

    return (
      attempts < maxAttempts &&
      this.capacity >= getCapacityAmount(errorInfo.errorType) &&
      this.isRetryableError(errorInfo.errorType)
    );
  }

  private isRetryableError(errorType: RetryErrorType): boolean {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
}
