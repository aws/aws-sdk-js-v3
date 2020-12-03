import { sleep } from "./utils/sleep";
import { WaiterOptions, WaiterResult, WaiterState } from "./waiter";

function exponentialBackoff(floor: number, ciel: number, attempt: number): number {
  return Math.min(ciel, floor * 2 ** attempt);
}

/**
 * Function that runs indefinite polling as part of waiters.
 * @param params options passed to the waiter.
 * @param client AWS SDK Client
 * @param input client input
 * @param stateChecker function that checks the acceptor states on each poll.
 */
export async function runPolling<T, S>(
  params: WaiterOptions,
  client: T,
  input: S,
  acceptorChecks: (client: T, input: S) => Promise<WaiterResult>
): Promise<WaiterResult> {
  let currentAttempt = 1;
  let currentDelay = params.minDelay;

  while (true) {
    console.log("calling sleep (top of loop)", currentDelay);
    await sleep(currentDelay);
    const { state } = await acceptorChecks(client, input);
    if (state == WaiterState.SUCCESS || state == WaiterState.FAILURE) {
      return { state };
    }

    currentDelay = exponentialBackoff(params.minDelay, params.maxDelay, currentAttempt);
    currentAttempt += 1;
    console.log("bottom of loop");
  }
}
