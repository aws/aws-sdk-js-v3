import { DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY } from "./constants";
import { getDefaultRetryBackoffStrategy } from "./defaultRetryBackoffStrategy";

describe("defaultRetryBackoffStrategy", () => {
  const mathDotRandom = Math.random;

  beforeEach(() => {
    Math.random = jest.fn().mockReturnValue(1);
  });

  afterEach(() => {
    Math.random = mathDotRandom;
  });

  describe(`uses ${DEFAULT_RETRY_DELAY_BASE} by default`, () => {
    [0, 1, 2, 3].forEach((attempts) => {
      const expectedDelay = Math.floor(2 ** attempts * DEFAULT_RETRY_DELAY_BASE);
      const retryBackoffStrategy = getDefaultRetryBackoffStrategy();
      it(`(${attempts}) returns ${expectedDelay}`, () => {
        expect(retryBackoffStrategy.computeNextBackoffDelay(attempts)).toBe(expectedDelay);
      });
    });
  });

  describe("retry delay increases exponentially with attempt number", () => {
    [0, 1, 2, 3].forEach((attempts) => {
      const mockDelayBase = 50;
      const expectedDelay = Math.floor(2 ** attempts * mockDelayBase);
      const retryBackoffStrategy = getDefaultRetryBackoffStrategy();
      retryBackoffStrategy.setDelayBase(mockDelayBase);
      it(`(${attempts}) returns ${expectedDelay}`, () => {
        expect(retryBackoffStrategy.computeNextBackoffDelay(attempts)).toBe(expectedDelay);
      });
    });
  });

  describe(`caps retry delay at ${MAXIMUM_RETRY_DELAY / 1000} seconds`, () => {
    const retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    it("when value exceeded because of high delayBase", () => {
      retryBackoffStrategy.setDelayBase(MAXIMUM_RETRY_DELAY + 1);
      expect(retryBackoffStrategy.computeNextBackoffDelay(0)).toBe(MAXIMUM_RETRY_DELAY);
      retryBackoffStrategy.setDelayBase(MAXIMUM_RETRY_DELAY + 2);
      expect(retryBackoffStrategy.computeNextBackoffDelay(0)).toBe(MAXIMUM_RETRY_DELAY);
    });

    it("when value exceeded because of high attempts number", () => {
      const largeAttemptsNumber = Math.ceil(Math.log2(MAXIMUM_RETRY_DELAY));
      retryBackoffStrategy.setDelayBase(1);
      expect(retryBackoffStrategy.computeNextBackoffDelay(largeAttemptsNumber)).toBe(MAXIMUM_RETRY_DELAY);
      expect(retryBackoffStrategy.computeNextBackoffDelay(largeAttemptsNumber + 1)).toBe(MAXIMUM_RETRY_DELAY);
    });
  });

  describe("randomizes the retry delay value", () => {
    const retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    Array.from({ length: 3 }, () => Math.random()).forEach((mockRandomValue) => {
      const attempts = 0;
      const delayBase = 100;
      const expectedDelay = Math.floor(mockRandomValue * 2 ** attempts * delayBase);
      retryBackoffStrategy.setDelayBase(delayBase);
      it(`(${delayBase}, ${attempts}) with mock Math.random=${mockRandomValue} returns ${expectedDelay}`, () => {
        Math.random = jest.fn().mockReturnValue(mockRandomValue);
        expect(retryBackoffStrategy.computeNextBackoffDelay(attempts)).toBe(expectedDelay);
      });
    });
  });
});
