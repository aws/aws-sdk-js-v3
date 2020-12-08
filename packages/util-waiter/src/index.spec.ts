import * as exported from "./index";

describe("Waiter util module exports", () => {
  it("should export the proper functions", () => {
    expect(exported.sleep).toBeDefined();
    expect(exported.waiterTimeout).toBeDefined();
    expect(exported.abortTimeout).toBeDefined();
    expect(exported.validateWaiterOptions).toBeDefined();
    expect(exported.runPolling).toBeDefined();
  });
});
