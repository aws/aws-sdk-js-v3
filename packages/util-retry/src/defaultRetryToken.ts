import { StandardRetryToken } from "@aws-sdk/types";

import { MAXIMUM_RETRY_DELAY } from "./constants";

/**
 * @internal
 */
export const createDefaultRetryToken = ({
  retryDelay,
  retryCount,
  lastRetryCost,
}: {
  availableCapacity: number;
  retryDelay: number;
  retryCount: number;
  lastRetryCost?: number;
}): StandardRetryToken => {
  const getRetryCount = (): number => retryCount;
  const getRetryDelay = (): number => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
  const getRetryCost = (): number | undefined => lastRetryCost;

  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost,
  };
};
