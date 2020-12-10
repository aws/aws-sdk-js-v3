import * as exported from "./index";

describe("Waiter util module exports", () => {
  it("should export the proper functions", () => {
    expect(exported.createWaiter).toBeDefined();
  });
});
