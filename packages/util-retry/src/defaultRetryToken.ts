import { StandardRetryToken } from "@aws-sdk/types";

import { MAXIMUM_RETRY_DELAY } from "./constants";

/**
 * @internal
 */
export const createDefaultRetryToken = ({
  retryDelay,
  retryCount,
  retryCost,
}: {
  retryDelay: number;
  retryCount: number;
  retryCost?: number;
}): StandardRetryToken => {
  const getRetryCount = (): number => retryCount;
  const getRetryDelay = (): number => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
  const getRetryCost = (): number | undefined => retryCost;

  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost,
  };
};
