import { StandardRetryBackoffStrategy } from "@aws-sdk/types";

import { DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY } from "./constants";

export const getDefaultRetryBackoffStrategy = (): StandardRetryBackoffStrategy => {
  let delayBase: number = DEFAULT_RETRY_DELAY_BASE;

  const computeNextBackoffDelay = (attempts: number) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  };

  const setDelayBase = (delay: number) => {
    delayBase = delay;
  };

  return {
    computeNextBackoffDelay,
    setDelayBase,
  };
};
