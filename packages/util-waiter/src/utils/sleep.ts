import { WaiterResult, WaiterState } from "../waiter";

export const sleep = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const waiterTimeout = async (seconds: number): Promise<WaiterResult> => {
  await sleep(seconds);
  return { state: WaiterState.RETRY };
};
