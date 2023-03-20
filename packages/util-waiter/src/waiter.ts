import { WaiterConfiguration as WaiterConfiguration__ } from "@aws-sdk/types";

/**
 * @internal
 */
export interface WaiterConfiguration<T> extends WaiterConfiguration__<T> {}

/**
 * @internal
 */
export const waiterServiceDefaults = {
  minDelay: 2,
  maxDelay: 120,
};

/**
 * @internal
 */
export type WaiterOptions<Client> = WaiterConfiguration<Client> &
  Required<Pick<WaiterConfiguration<Client>, "minDelay" | "maxDelay">>;

/**
 * @internal
 */
export enum WaiterState {
  ABORTED = "ABORTED",
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
  RETRY = "RETRY",
  TIMEOUT = "TIMEOUT",
}

/**
 * @internal
 */
export type WaiterResult = {
  state: WaiterState;

  /**
   * (optional) Indicates a reason for why a waiter has reached its state.
   */
  reason?: any;
};

/**
 * @internal
 *
 * Handles and throws exceptions resulting from the waiterResult
 * @param result - WaiterResult
 */
export const checkExceptions = (result: WaiterResult): WaiterResult => {
  if (result.state === WaiterState.ABORTED) {
    const abortError = new Error(
      `${JSON.stringify({
        ...result,
        reason: "Request was aborted",
      })}`
    );
    abortError.name = "AbortError";
    throw abortError;
  } else if (result.state === WaiterState.TIMEOUT) {
    const timeoutError = new Error(
      `${JSON.stringify({
        ...result,
        reason: "Waiter has timed out",
      })}`
    );
    timeoutError.name = "TimeoutError";
    throw timeoutError;
  } else if (result.state !== WaiterState.SUCCESS) {
    throw new Error(`${JSON.stringify({ result })}`);
  }
  return result;
};
