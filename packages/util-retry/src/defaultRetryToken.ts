import { RetryErrorInfo, RetryErrorType, StandardRetryToken } from "@aws-sdk/types";

import { MAXIMUM_RETRY_DELAY, RETRY_COST, TIMEOUT_RETRY_COST } from "./constants";

/**
 * @internal
 */
export const createDefaultRetryToken = ({
  availableCapacity,
  retryDelay,
  retryCount,
  lastRetryCost,
}: {
  availableCapacity: number;
  retryDelay: number;
  retryCount: number;
  lastRetryCost?: number;
}): StandardRetryToken => {
  const getCapacityAmount = (errorType: RetryErrorType) =>
    errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;

  const getRetryCount = (): number => retryCount;
  const getRetryDelay = (): number => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
  const getLastRetryCost = (): number | undefined => lastRetryCost;

  /**
   * @deprecated managed by StandardRetryStrategy.
   */
  const hasRetryTokens = (errorType: RetryErrorType): boolean => {
    return getCapacityAmount(errorType) <= availableCapacity;
  };

  /**
   * @deprecated managed by StandardRetryStrategy.
   */
  const getRetryTokenCount = (errorInfo?: RetryErrorInfo) => {
    return availableCapacity;
  };

  /**
   * @deprecated this is done in StandardRetryStrategy.recordSuccess.
   */
  const releaseRetryTokens = (releaseAmount?: number) => {};

  return {
    getRetryCount,
    getRetryDelay,
    getLastRetryCost,
    hasRetryTokens,
    getRetryTokenCount,
    releaseRetryTokens,
  };
};
