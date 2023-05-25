import { RetryErrorInfo, RetryErrorType, StandardRetryToken } from "@aws-sdk/types";

import {
  INITIAL_RETRY_TOKENS,
  MAXIMUM_RETRY_DELAY,
  NO_RETRY_INCREMENT,
  RETRY_COST,
  TIMEOUT_RETRY_COST,
} from "./constants";

/**
 * @internal
 */
export const createDefaultRetryToken = ({
  capacityBucket,
  retryDelay,
  retryCount,
  lastRetryCost,
}: {
  capacityBucket: {
    availableCapacity: number;
  };
  retryDelay: number;
  retryCount: number;
  lastRetryCost?: number;
}): StandardRetryToken => {
  const MAX_CAPACITY = INITIAL_RETRY_TOKENS;

  const getCapacityAmount = (errorType: RetryErrorType) =>
    errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;

  const getRetryCount = (): number => retryCount;

  const getRetryDelay = (): number => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);

  const getLastRetryCost = (): number | undefined => lastRetryCost;

  const hasRetryTokens = (errorType: RetryErrorType): boolean => {
    capacityBucket.availableCapacity = Math.min(capacityBucket.availableCapacity, MAX_CAPACITY);
    return getCapacityAmount(errorType) <= capacityBucket.availableCapacity;
  };

  const getRetryTokenCount = (errorInfo?: RetryErrorInfo) => {
    capacityBucket.availableCapacity = Math.min(capacityBucket.availableCapacity, MAX_CAPACITY);
    return capacityBucket.availableCapacity;
  };

  const releaseRetryTokens = (releaseAmount?: number) => {
    capacityBucket.availableCapacity += releaseAmount ?? NO_RETRY_INCREMENT;
    capacityBucket.availableCapacity = Math.min(capacityBucket.availableCapacity, MAX_CAPACITY);
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
