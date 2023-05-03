import { RetryErrorInfo, RetryErrorType, StandardRetryBackoffStrategy, StandardRetryToken } from "@aws-sdk/types";

import {
  DEFAULT_RETRY_DELAY_BASE,
  MAXIMUM_RETRY_DELAY,
  NO_RETRY_INCREMENT,
  RETRY_COST,
  THROTTLING_RETRY_DELAY_BASE,
  TIMEOUT_RETRY_COST,
} from "./constants";
import { getDefaultRetryBackoffStrategy } from "./defaultRetryBackoffStrategy";

/**
 * @public
 */
export interface DefaultRetryTokenOptions {
  /**
   * The total amount of retry tokens to be decremented from retry token balance.
   */
  retryCost?: number;

  /**
   * The total amount of retry tokens to be decremented from retry token balance
   * when a throttling error is encountered.
   */
  timeoutRetryCost?: number;

  /**
   *
   */
  retryBackoffStrategy?: StandardRetryBackoffStrategy;
}

/**
 * @internal
 */
export const getDefaultRetryToken = (
  initialRetryTokens: number,
  initialRetryDelay: number,
  initialRetryCount?: number,
  options?: DefaultRetryTokenOptions
): StandardRetryToken => {
  const MAX_CAPACITY = initialRetryTokens;
  const retryCost = options?.retryCost ?? RETRY_COST;
  const timeoutRetryCost = options?.timeoutRetryCost ?? TIMEOUT_RETRY_COST;
  const retryBackoffStrategy = options?.retryBackoffStrategy ?? getDefaultRetryBackoffStrategy();

  let availableCapacity = initialRetryTokens;
  let retryDelay = Math.min(MAXIMUM_RETRY_DELAY, initialRetryDelay);
  let lastRetryCost: number | undefined = undefined;
  let retryCount = initialRetryCount ?? 0;

  const getCapacityAmount = (errorType: RetryErrorType) => (errorType === "TRANSIENT" ? timeoutRetryCost : retryCost);

  const getRetryCount = (): number => retryCount;

  const getRetryDelay = (): number => retryDelay;

  const getLastRetryCost = (): number | undefined => lastRetryCost;

  const hasRetryTokens = (errorType: RetryErrorType): boolean => getCapacityAmount(errorType) <= availableCapacity;

  const getRetryTokenCount = (errorInfo: RetryErrorInfo) => {
    const errorType = errorInfo.errorType;
    if (!hasRetryTokens(errorType)) {
      throw new Error("No retry token available");
    }
    const capacityAmount = getCapacityAmount(errorType);
    const delayBase = errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE;
    retryBackoffStrategy.setDelayBase(delayBase);
    const delayFromErrorType = retryBackoffStrategy.computeNextBackoffDelay(retryCount);
    if (errorInfo.retryAfterHint) {
      const delayFromRetryAfterHint = errorInfo.retryAfterHint.getTime() - Date.now();
      retryDelay = Math.max(delayFromRetryAfterHint || 0, delayFromErrorType);
    } else {
      retryDelay = delayFromErrorType;
    }
    retryCount++;
    lastRetryCost = capacityAmount;
    availableCapacity -= capacityAmount;
    return capacityAmount;
  };

  const releaseRetryTokens = (releaseAmount?: number) => {
    availableCapacity += releaseAmount ?? NO_RETRY_INCREMENT;
    availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
  };

  return {
    getRetryCount,
    getRetryDelay,
    getLastRetryCost,
    hasRetryTokens,
    getRetryTokenCount,
    releaseRetryTokens,
  };
};
