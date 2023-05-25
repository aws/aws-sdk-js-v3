import { RetryErrorType } from "@aws-sdk/types";

import {
  DEFAULT_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  MAXIMUM_RETRY_DELAY,
  NO_RETRY_INCREMENT,
  RETRY_COST,
} from "./constants";
import { createDefaultRetryToken } from "./defaultRetryToken";

jest.mock("./defaultRetryBackoffStrategy");

describe("defaultRetryToken", () => {
  const transientErrorType = "TRANSIENT" as RetryErrorType;
  const nonTransientErrorType = "THROTTLING" as RetryErrorType;

  const getDrainedRetryToken = (targetCapacity: number) => {
    const retryToken = createDefaultRetryToken({
      availableCapacity: targetCapacity,
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0,
    });
    return retryToken;
  };

  describe("custom initial retry tokens", () => {
    it("hasRetryTokens returns false if capacity is not available", () => {
      const customRetryTokens = 5;
      const retryToken = createDefaultRetryToken({
        availableCapacity: customRetryTokens,
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });

      expect(retryToken.hasRetryTokens(transientErrorType)).toBe(false);
    });
  });

  describe("hasRetryTokens", () => {
    describe("returns true if capacity is available", () => {
      it("when it's transient error", () => {
        const retryToken = createDefaultRetryToken({
          availableCapacity: INITIAL_RETRY_TOKENS,
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0,
        });
        expect(retryToken.hasRetryTokens(transientErrorType)).toBe(true);
      });

      it("when it's not transient error", () => {
        const retryToken = createDefaultRetryToken({
          availableCapacity: INITIAL_RETRY_TOKENS,
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0,
        });
        expect(retryToken.hasRetryTokens(nonTransientErrorType)).toBe(true);
      });
    });

    it("returns false if capacity is not available", () => {
      const retryToken = getDrainedRetryToken(0);
      expect(retryToken.hasRetryTokens(nonTransientErrorType)).toBe(false);
    });
  });

  describe("getRetryTokenCount", () => {
    it("returns retry tokens amount", () => {
      const retryToken = createDefaultRetryToken({
        availableCapacity: 123,
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getRetryTokenCount({ errorType: "TRANSIENT" })).toBe(123);
    });
  });

  describe("getLastRetryCost", () => {
    it("is undefined before an error is encountered", () => {
      const retryToken = createDefaultRetryToken({
        availableCapacity: INITIAL_RETRY_TOKENS,
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getLastRetryCost()).toBeUndefined();
    });

    it("returns set value", () => {
      const retryToken = createDefaultRetryToken({
        availableCapacity: INITIAL_RETRY_TOKENS,
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
        lastRetryCost: 25,
      });
      expect(retryToken.getLastRetryCost()).toBe(25);
    });
  });

  describe("getRetryCount", () => {
    it("returns amount set when token is created", () => {
      const retryCount = 3;
      const retryToken = createDefaultRetryToken({
        availableCapacity: INITIAL_RETRY_TOKENS,
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount,
      });
      expect(retryToken.getRetryCount()).toBe(retryCount);
    });
  });

  describe("getRetryDelay", () => {
    it("returns initial delay", () => {
      const retryToken = createDefaultRetryToken({
        availableCapacity: INITIAL_RETRY_TOKENS,
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getRetryDelay()).toBe(DEFAULT_RETRY_DELAY_BASE);
    });

    describe(`caps retry delay at ${MAXIMUM_RETRY_DELAY / 1000} seconds`, () => {
      it("when value exceeded because of high delayBase", () => {
        const retryToken = createDefaultRetryToken({
          availableCapacity: INITIAL_RETRY_TOKENS,
          retryDelay: DEFAULT_RETRY_DELAY_BASE * 1000,
          retryCount: 0,
        });
        expect(retryToken.getRetryDelay()).toBe(MAXIMUM_RETRY_DELAY);
      });
    });
  });

  describe("releaseRetryToken", () => {
    it("ensures availableCapacity is maxed at INITIAL_RETRY_TOKENS", () => {
      const retryToken = createDefaultRetryToken({
        availableCapacity: INITIAL_RETRY_TOKENS,
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });

      retryToken.releaseRetryTokens();

      expect(retryToken.getRetryTokenCount({ errorType: "TRANSIENT" })).toBe(INITIAL_RETRY_TOKENS);
    });
  });
});
