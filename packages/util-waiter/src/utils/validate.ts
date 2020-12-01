import { WaiterOptions } from "../waiter";

/**
 * Validates that waiter options are passed correctly
 * @param options a waiter configuration object
 */
export const validateWaiterOptions = (options: WaiterOptions): void => {
  if (options.maxWaitTime < 1) throw "WaiterOptions.maxWaitTime must be greater than or equal to 1";
  else if (options.minDelay < 1) throw "WaiterOptions.minDelay must be more than 1";
  else if (options.maxDelay < 1) throw "WaiterOptions.maxDelay must be more than 1";
  else if (options.maxDelay >= options.maxWaitTime)
    throw "WaiterOptions.maxWaitTime must be more than WaiterOptions.maxDelay";
  else if (options.minDelay > options.maxDelay)
    throw "WaiterOptions.minDelay must be greater than or equal to than WaiterOptions.maxDelay";
};
