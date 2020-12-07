import { sleep } from "./utils/sleep";
import { WaiterOptions, WaiterResult, WaiterState } from "./waiter";

/**
 * Reference: https://github.com/awslabs/smithy/pull/656
 * The theoretical limit to the attempt is max delay cannot be > Number.MAX_VALUE, but it's unlikely because of
 * `maxWaitTime`
 */
const exponentialBackoff = (floor: number, ciel: number, attempt: number) =>
  Math.floor(Math.min(ciel, randomInRange(floor, floor * 2 ** (attempt - 1))));
const randomInRange = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Function that runs indefinite polling as part of waiters.
 * @param params options passed to the waiter.
 * @param client AWS SDK Client
 * @param input client input
 * @param stateChecker function that checks the acceptor states on each poll.
 */
export const runPolling = async <T, S>(
  { minDelay, maxDelay }: WaiterOptions,
  client: T,
  input: S,
  acceptorChecks: (client: T, input: S) => Promise<WaiterResult>
): Promise<WaiterResult> => {
  let currentAttempt = 1;

  while (true) {
    await sleep(exponentialBackoff(minDelay, maxDelay, currentAttempt));
    const { state } = await acceptorChecks(client, input);
    if (state === WaiterState.SUCCESS || state === WaiterState.FAILURE) {
      return { state };
    }
    currentAttempt += 1;
  }
};
