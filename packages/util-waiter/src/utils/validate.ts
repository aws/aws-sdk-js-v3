import { ResolvedWaiterOptions } from "../waiter";

/**
 * Validates that waiter options are passed correctly
 * @param options a waiter configuration object
 */
export const validateWaiterOptions = <Client>(options: ResolvedWaiterOptions<Client>): void => {
  if (options.maxWaitTime < 1) {
    throw `WaiterOptions.maxWaitTime must be greater than 0`;
  } else if (options.maxWaitTime <= options.minDelay) {
    throw `WaiterOptions.maxWaitTime [${options.maxWaitTime}] must be greater than WaiterOptions.minDelay [${options.minDelay}] for this waiter`;
  }
};
