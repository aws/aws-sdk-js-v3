import { Provider, RetryErrorInfo, RetryErrorType, RetryStrategyV2, StandardRetryToken } from "@aws-sdk/types";

import { DEFAULT_MAX_ATTEMPTS, RETRY_MODES } from "./config";
import { DEFAULT_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS } from "./constants";
import { getDefaultRetryToken } from "./defaultRetryToken";

/**
 * @public
 */
export class StandardRetryStrategy implements RetryStrategyV2 {
  public readonly mode: string = RETRY_MODES.STANDARD;
  private availableCapacityRef = { availableCapacity: INITIAL_RETRY_TOKENS };
  private readonly maxAttemptsProvider: Provider<number>;

  constructor(maxAttempts: number);
  constructor(maxAttemptsProvider: Provider<number>);
  constructor(private readonly maxAttempts: number | Provider<number>) {
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }

  public async acquireInitialRetryToken(retryTokenScope: string): Promise<StandardRetryToken> {
    return getDefaultRetryToken(this.availableCapacityRef, DEFAULT_RETRY_DELAY_BASE);
  }

  public async refreshRetryTokenForRetry(
    tokenToRenew: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken> {
    const maxAttempts = await this.getMaxAttempts();

    if (this.shouldRetry(tokenToRenew, errorInfo, maxAttempts)) {
      tokenToRenew.getRetryTokenCount(errorInfo);
      return tokenToRenew;
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
