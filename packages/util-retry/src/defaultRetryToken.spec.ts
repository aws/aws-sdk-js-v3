import { RetryErrorType } from "@aws-sdk/types";

import {
  DEFAULT_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  MAXIMUM_RETRY_DELAY,
  NO_RETRY_INCREMENT,
  RETRY_COST,
} from "./constants";
import { getDefaultRetryBackoffStrategy } from "./defaultRetryBackoffStrategy";
import { createDefaultRetryToken } from "./defaultRetryToken";

jest.mock("./defaultRetryBackoffStrategy");

describe("defaultRetryToken", () => {
  const transientErrorType = "TRANSIENT" as RetryErrorType;
  const nonTransientErrorType = "THROTTLING" as RetryErrorType;

  const getDrainedRetryToken = (targetCapacity: number) => {
    const retryToken = createDefaultRetryToken({
      capacityBucket: { availableCapacity: targetCapacity },
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0,
    });
    return retryToken;
  };
  const mathDotRandom = Math.random;
  const setDelayBase = jest.fn();
  const mockRetryBackoffStrategy = {
    computeNextBackoffDelay: (attempts: number) => 100,
    setDelayBase,
  };

  beforeEach(() => {
    Math.random = jest.fn().mockReturnValue(1);
    (getDefaultRetryBackoffStrategy as jest.Mock).mockReturnValue(mockRetryBackoffStrategy);
  });

  afterEach(() => {
    Math.random = mathDotRandom;
  });

  describe("custom initial retry tokens", () => {
    it("hasRetryTokens returns false if capacity is not available", () => {
      const customRetryTokens = 5;
      const retryToken = createDefaultRetryToken({
        capacityBucket: { availableCapacity: customRetryTokens },
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
          capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS },
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0,
        });
        expect(retryToken.hasRetryTokens(transientErrorType)).toBe(true);
      });

      it("when it's not transient error", () => {
        const retryToken = createDefaultRetryToken({
          capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS },
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
        capacityBucket: { availableCapacity: 123 },
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getRetryTokenCount()).toBe(123);
    });
  });

  describe("getLastRetryCost", () => {
    it("is undefined before an error is encountered", () => {
      const retryToken = createDefaultRetryToken({
        capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS },
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getLastRetryCost()).toBeUndefined();
    });

    it("returns set value", () => {
      const retryToken = createDefaultRetryToken({
        capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS },
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
        capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS },
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount,
      });
      expect(retryToken.getRetryCount()).toBe(retryCount);
    });
  });

  describe("getRetryDelay", () => {
    it("returns initial delay", () => {
      const retryToken = createDefaultRetryToken({
        capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS },
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });
      expect(retryToken.getRetryDelay()).toBe(DEFAULT_RETRY_DELAY_BASE);
    });

    describe(`caps retry delay at ${MAXIMUM_RETRY_DELAY / 1000} seconds`, () => {
      it("when value exceeded because of high delayBase", () => {
        const retryToken = createDefaultRetryToken({
          capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS },
          retryDelay: DEFAULT_RETRY_DELAY_BASE * 1000,
          retryCount: 0,
        });
        expect(retryToken.getRetryDelay()).toBe(MAXIMUM_RETRY_DELAY);
      });
    });
  });

  describe("releaseRetryToken", () => {
    it("adds capacityReleaseAmount if passed", () => {
      const { errorType } = { errorType: nonTransientErrorType };
      const retryToken = getDrainedRetryToken(0);

      // Ensure that retry tokens are not available.
      expect(retryToken.hasRetryTokens(errorType)).toBe(false);

      // Release RETRY_COST tokens.
      retryToken.releaseRetryTokens(RETRY_COST);
      expect(retryToken.hasRetryTokens(errorType)).toBe(true);
      expect(retryToken.getRetryTokenCount({ errorType: nonTransientErrorType })).toBe(RETRY_COST);
    });

    it("adds NO_RETRY_INCREMENT if capacityReleaseAmount not passed", () => {
      const { errorType } = { errorType: nonTransientErrorType };
      const retryToken = getDrainedRetryToken(0);

      // retry tokens will not be available till NO_RETRY_INCREMENT is added
      // till it's equal to RETRY_COST - (INITIAL_RETRY_TOKENS % RETRY_COST)
      let tokensReleased = 0;
      const tokensToBeReleased = RETRY_COST - (INITIAL_RETRY_TOKENS % RETRY_COST);
      while (tokensReleased < tokensToBeReleased) {
        expect(retryToken.hasRetryTokens(errorType)).toBe(false);
        retryToken.releaseRetryTokens();
        tokensReleased += NO_RETRY_INCREMENT;
      }
      expect(retryToken.hasRetryTokens(errorType)).toBe(true);
    });

    it("ensures availableCapacity is maxed at INITIAL_RETRY_TOKENS", () => {
      const retryToken = createDefaultRetryToken({
        capacityBucket: { availableCapacity: INITIAL_RETRY_TOKENS * 1000 },
        retryDelay: DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0,
      });

      expect(retryToken.getRetryTokenCount()).toBe(INITIAL_RETRY_TOKENS);
    });
  });
});
