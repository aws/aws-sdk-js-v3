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
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0,
    });
  }

  public async refreshRetryTokenForRetry(
    token: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken> {
    const maxAttempts = await this.getMaxAttempts();

    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(
        errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE
      );

      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint
        ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
        : delayFromErrorType;

      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost,
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

    return (
      attempts < maxAttempts &&
      this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
      this.isRetryableError(errorInfo.errorType)
    );
  }

  private getCapacityCost(errorType: RetryErrorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }

  private isRetryableError(errorType: RetryErrorType): boolean {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
}
