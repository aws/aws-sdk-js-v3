import { AbortSignal } from "@aws-sdk/abort-controller";

import { WaiterResult, WaiterState } from "../waiter";

export const sleep = (seconds: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      // console.log("done with sleep");
      resolve();
    }, seconds * 1000)
  );
};

export const waiterTimeout = async (seconds: number): Promise<WaiterResult> => {
  await sleep(seconds);
  return { state: WaiterState.RETRY };
};

export const abortTimeout = async (abortSignal: AbortSignal): Promise<WaiterResult> => {
  await new Promise((resolve, reject) => {
    abortSignal.onabort = () => resolve();
  });
  return { state: WaiterState.ABORTED };
};
