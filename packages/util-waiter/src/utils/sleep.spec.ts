import { sleep } from "./sleep";

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
});
