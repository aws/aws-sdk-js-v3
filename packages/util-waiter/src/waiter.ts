import { WaiterConfiguration as WaiterConfiguration__ } from "@aws-sdk/types";

export interface WaiterConfiguration<T> extends WaiterConfiguration__<T> {}

/**
 * @private
 */
export const waiterServiceDefaults = {
  minDelay: 2,
  maxDelay: 120,
};

/**
 * @private
 */
export type WaiterOptions<Client> = WaiterConfiguration<Client> &
  Required<Pick<WaiterConfiguration<Client>, "minDelay" | "maxDelay">>;

export enum WaiterState {
  ABORTED = "ABORTED",
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
  RETRY = "RETRY",
  TIMEOUT = "TIMEOUT",
}

export type WaiterResult = {
  state: WaiterState;

  /**
   * (optional) Indicates a reason for why a waiter has reached its state.
   */
  reason?: any;
};

/**
 * Handles and throws exceptions resulting from the waiterResult
 * @param result WaiterResult
 */
export const checkExceptions = (result: WaiterResult): WaiterResult => {
  if (result.state === WaiterState.ABORTED) {
    throw new Error(
      `${JSON.stringify({
        ...result,
        name: "AbortError",
        reason: "Request was aborted",
      })}`
    );
  } else if (result.state !== WaiterState.SUCCESS) {
    throw new Error(`${JSON.stringify({ result })}`);
  }
  return result;
};
