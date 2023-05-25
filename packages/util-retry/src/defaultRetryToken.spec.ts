import { DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY } from "./constants";
import { createDefaultRetryToken } from "./defaultRetryToken";

jest.mock("./defaultRetryBackoffStrategy");

describe("defaultRetryToken", () => {
  describe("getRetryCost", () => {
    it("is undefined before an error is encountered", () => {
      const retryToken = createDefaultRetryToken({
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getRetryCost()).toBeUndefined();
    });

    it("returns set value", () => {
      const retryToken = createDefaultRetryToken({
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
        retryCost: 25,
      });
      expect(retryToken.getRetryCost()).toBe(25);
    });
  });

  describe("getRetryCount", () => {
    it("returns amount set when token is created", () => {
      const retryCount = 3;
      const retryToken = createDefaultRetryToken({
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount,
      });
      expect(retryToken.getRetryCount()).toBe(retryCount);
    });
  });

  describe("getRetryDelay", () => {
    it("returns initial delay", () => {
      const retryToken = createDefaultRetryToken({
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getRetryDelay()).toBe(DEFAULT_RETRY_DELAY_BASE);
    });

    describe(`caps retry delay at ${MAXIMUM_RETRY_DELAY / 1000} seconds`, () => {
      it("when value exceeded because of high delayBase", () => {
        const retryToken = createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE * 1000,
          retryCount: 0,
        });
        expect(retryToken.getRetryDelay()).toBe(MAXIMUM_RETRY_DELAY);
      });
    });
  });
});
