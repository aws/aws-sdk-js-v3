import { Provider, RetryErrorInfo, RetryErrorType, RetryStrategyV2, StandardRetryToken } from "@aws-sdk/types";

import { DEFAULT_MAX_ATTEMPTS, RETRY_MODES } from "./config";
import { DEFAULT_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS } from "./constants";
import { getDefaultRetryToken } from "./defaultRetryToken";

export class StandardRetryStrategy implements RetryStrategyV2 {
  private retryToken: StandardRetryToken;
  public readonly mode: string = RETRY_MODES.STANDARD;

  constructor(private readonly maxAttemptsProvider: Provider<number>) {
    this.retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
    this.maxAttemptsProvider = maxAttemptsProvider;
  }

  public async acquireInitialRetryToken(retryTokenScope: string): Promise<StandardRetryToken> {
    return this.retryToken;
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
    this.retryToken.releaseRetryTokens(token.getLastRetryCost());
  }

  private async getMaxAttempts() {
    let maxAttempts: number;
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
