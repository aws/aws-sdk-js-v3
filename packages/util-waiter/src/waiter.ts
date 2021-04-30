import { AbortController } from "@aws-sdk/types";

export interface WaiterConfiguration<Client> {
  /**
   * Required service client
   */
  client: Client;

  /**
   * The amount of time in seconds a user is willing to wait for a waiter to complete.
   */
  maxWaitTime: number;

  /**
   * @deprecated Use abortSignal
   * Abort controller. Used for ending the waiter early.
   */
  abortController?: AbortController;

  /**
   * Abort Signal. Used for ending the waiter early.
   */
  abortSignal?: AbortController["signal"];

  /**
   * The minimum amount of time to delay between retries in seconds. This is the
   * floor of the exponential backoff. This value defaults to service default
   * if not specified. This value MUST be less than or equal to maxDelay and greater than 0.
   */
  minDelay?: number;

  /**
   * The maximum amount of time to delay between retries in seconds. This is the
   * ceiling of the exponential backoff. This value defaults to service default
   * if not specified. If specified, this value MUST be greater than or equal to 1.
   */
  maxDelay?: number;
}

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
