import { ResolvedWaiterOptions } from "../waiter";
import { validateWaiterOptions } from "./validate";

describe(validateWaiterOptions.name, () => {
  let waiterOptions: ResolvedWaiterOptions<any>;

  beforeEach(() => {
    waiterOptions = {
      maxWaitTime: 120,
      minDelay: 20,
      maxDelay: 120,
      client: "client",
    };
  });

  it("should not throw an error when maxWaitTime is proper", (done) => {
    waiterOptions.maxWaitTime = 300;
    waiterOptions.minDelay = 200;
    try {
      validateWaiterOptions(waiterOptions);
      expect(1).toBe(1);
      done();
    } catch (e) {
      expect(e).toBe("SHOULD NOT ERROR HERE");
    }
  });

  it("should throw when maxWaitTime is less than 0", (done) => {
    waiterOptions.maxWaitTime = -2;
    waiterOptions.minDelay = -1;
    try {
      validateWaiterOptions(waiterOptions);
    } catch (e) {
      expect(e).toBe("WaiterOptions.maxWaitTime must be greater than 0");
      done();
    }
  });

  it("should throw when maxWaitTime is less than minDelay", (done) => {
    waiterOptions.maxWaitTime = 150;
    waiterOptions.minDelay = 200;
    try {
      validateWaiterOptions(waiterOptions);
    } catch (e) {
      expect(e).toBe(
        "WaiterOptions.maxWaitTime [150] must be greater than WaiterOptions.minDelay [200] for this waiter"
      );
      done();
    }
  });

  it("should throw when maxWaitTime is equal tominDelay", () => {
    waiterOptions.maxWaitTime = 200;
    waiterOptions.minDelay = 200;
    try {
      validateWaiterOptions(waiterOptions);
    } catch (e) {
      expect(e).toBe(
        "WaiterOptions.maxWaitTime [200] must be greater than WaiterOptions.minDelay [200] for this waiter"
      );
    }
  });
});
