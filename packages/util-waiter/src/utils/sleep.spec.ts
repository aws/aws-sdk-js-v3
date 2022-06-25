import { sleep } from "./sleep";

describe("Sleep Module", () => {
  beforeEach(() => {
    jest.useFakeTimers({ legacyFakeTimers: true });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe(sleep.name, () => {
    it("should call setTimeout with the proper number of milliseconds", () => {
      sleep(1);

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
  });
});
