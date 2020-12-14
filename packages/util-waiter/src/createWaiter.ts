import { AbortSignal } from "@aws-sdk/types";

import { runPolling } from "./poller";
import { sleep, validateWaiterOptions } from "./utils";
import { SmithyClient, WaiterOptions, WaiterResult, waiterServiceDefaults, WaiterState } from "./waiter";

const waiterTimeout = async (seconds: number): Promise<WaiterResult> => {
  await sleep(seconds);
  return { state: WaiterState.TIMEOUT };
};

const abortTimeout = async (abortSignal: AbortSignal): Promise<WaiterResult> => {
  return new Promise((resolve) => {
    abortSignal.onabort = () => resolve({ state: WaiterState.ABORTED });
  });
};

/**
 * Create a waiter promise that only resolves when:
 * 1. Abort controller is signaled
 * 2. Max wait time is reached
 * 3. `acceptorChecks` succeeds, or fails
 * Otherwise, it invokes `acceptorChecks` with exponential-backoff delay.
 *
 * @internal
 */
export const createWaiter = async <Client extends SmithyClient, Input>(
  options: WaiterOptions<Client>,
  input: Input,
  acceptorChecks: (client: Client, input: Input) => Promise<WaiterResult>
): Promise<WaiterResult> => {
  const params = {
    ...waiterServiceDefaults,
    ...options,
  };
  validateWaiterOptions(params);

  const exitConditions = [runPolling<Client, Input>(params, input, acceptorChecks)];
  if (options.abortController) {
    exitConditions.push(abortTimeout(options.abortController.signal));
  }
  return Promise.race(exitConditions);
};
