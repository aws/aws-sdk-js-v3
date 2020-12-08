import { AbortController } from "@aws-sdk/abort-controller";

import { WaiterState } from "../waiter";
import { abortTimeout, sleep, waiterTimeout } from "./sleep";

jest.useFakeTimers();

describe("Sleep Module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  describe(sleep.name, () => {
    it("should call setTimeout with the proper number of milliseconds", () => {
      sleep(1);

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
  });

  describe(waiterTimeout.name, () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.clearAllTimers();
    });

    it("should call sleep with the proper number of seconds", () => {
      waiterTimeout(3);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });

    it("should call return state retry", async () => {
      const result = waiterTimeout(1);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      jest.advanceTimersByTime(1000);
      await expect(result).resolves.toEqual({ state: WaiterState.RETRY });
    });
  });

  describe(abortTimeout.name, () => {
    it("should listen to the abort control", async () => {
      const abortControl = new AbortController();
      const mockTimeout = 1000;
      const race = Promise.race([
        new Promise((resolve) => setTimeout(resolve, mockTimeout)),
        abortTimeout(abortControl.signal),
      ]);
      abortControl.abort();
      // jest.advanceTimersByTime(mockTimeout);
      const result = await race;

      await expect(result).toEqual({ state: WaiterState.ABORTED });
    });
  });
});
