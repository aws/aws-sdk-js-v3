import { AbortController } from "@aws-sdk/abort-controller";

import { WaiterState } from "../waiter";
import { abortTimeout, sleep, waiterTimeout } from "./sleep";

jest.useFakeTimers();

describe("Sleep Module", () => {
  describe(sleep.name, () => {
    beforeEach(() => {
      jest.clearAllMocks();
      jest.clearAllTimers();
    });

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

    it("should call return state retry", async (done) => {
      const result = waiterTimeout(1);
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      jest.advanceTimersByTime(1000);
      expect((await result).state).toBe(WaiterState.RETRY);
      done();
    });
  });

  describe(abortTimeout.name, () => {
    it("should listen to the abort control", async (done) => {
      const abortControl = new AbortController();
      const race = Promise.race([waiterTimeout(10000000), abortTimeout(abortControl.signal)]);
      abortControl.abort();
      const result = await race;

      expect(result.state).toBe(WaiterState.ABORTED);
      done();
    });
  });
});
