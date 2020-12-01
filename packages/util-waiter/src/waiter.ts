import { AbortController } from "@aws-sdk/abort-controller";

export const DEFAULT_WAITER_OPTIONS: WaiterOptions = {
  minDelay: 2,
  maxDelay: 120,
  maxWaitTime: 300,
};

export interface WaiterOptions {
  /**
   * The minimum amount of time to delay between retries in seconds. This value defaults
   * to 2 if not specified. If specified, this value MUST be greater than or equal to 1
   * and less than or equal to maxDelay.
   */
  minDelay?: number;

  /**
   * The maximum amount of time to delay between retries in seconds. The maximum amount
   * of time in seconds to delay between each retry. This value defaults to 120 if not
   * specified (2 minutes). If specified, this value MUST be greater than or equal to 1.
   */
  maxDelay?: number;

  /**
   * The amount of time in seconds a user is willing to wait for a waiter to complete. This
   * defaults to 300 (5 minutes), and assuming that requests complete in 0 seconds.
   */
  maxWaitTime?: number;

  /**
   * Abort controller. Used for ending the waiter early.
   */
  abortController?: AbortController;
}

export enum WaiterState {
  SUCCESS = "SUCCESS",
  RETRY = "RETRY",
  FAILURE = "FAILURE",
}

export type WaiterResult = {
  state: WaiterState;
};
