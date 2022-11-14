import { RetryErrorInfo, RetryErrorType, SdkError } from "@aws-sdk/types";

import {
  DEFAULT_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  MAXIMUM_RETRY_DELAY,
  NO_RETRY_INCREMENT,
  RETRY_COST,
  TIMEOUT_RETRY_COST,
} from "./constants";
import { getDefaultRetryToken } from "./defaultRetryToken";

describe("defaultRetryToken", () => {
  const transientErrorInfo = {
    errorType: RetryErrorType.TRANSIENT,
  };
  const nonTransientErrorInfo = {
    errorType: RetryErrorType.THROTTLING,
  };
  const getDrainedRetryToken = (
    targetCapacity: number,
    error: RetryErrorInfo,
    initialRetryTokens: number = INITIAL_RETRY_TOKENS
  ) => {
    const retryToken = getDefaultRetryToken(initialRetryTokens, DEFAULT_RETRY_DELAY_BASE);
    let availableCapacity = initialRetryTokens;
    while (availableCapacity >= targetCapacity) {
      retryToken.retrieveRetryTokens(error);
      availableCapacity -= targetCapacity;
    }
    return retryToken;
  };
  const mathDotRandom = Math.random;

  beforeEach(() => {
    Math.random = jest.fn().mockReturnValue(1);
  });

  afterEach(() => {
    Math.random = mathDotRandom;
  });

  describe("custom initial retry tokens", () => {
    it("hasRetryTokens returns false if capacity is not available", () => {
      const customRetryTokens = 5;
      const retryToken = getDefaultRetryToken(customRetryTokens, DEFAULT_RETRY_DELAY_BASE);
      expect(retryToken.hasRetryTokens(transientErrorInfo.errorType)).toBe(false);
    });

    it("retrieveRetryToken throws error if retry tokens not available", () => {
      const customRetryTokens = 5;
      const retryToken = getDefaultRetryToken(customRetryTokens, DEFAULT_RETRY_DELAY_BASE);
      expect(() => {
        retryToken.retrieveRetryTokens(transientErrorInfo);
      }).toThrowError(new Error("No retry token available"));
    });
  });

  describe("hasRetryTokens", () => {
    describe("returns true if capacity is available", () => {
      it("when it's transient error", () => {
        const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
        expect(retryToken.hasRetryTokens(transientErrorInfo.errorType)).toBe(true);
      });

      it("when it's not transient error", () => {
        const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
        expect(retryToken.hasRetryTokens(nonTransientErrorInfo.errorType)).toBe(true);
      });
    });

    describe("returns false if capacity is not available", () => {
      it("when it's transient error", () => {
        const retryToken = getDrainedRetryToken(TIMEOUT_RETRY_COST, transientErrorInfo);
        expect(retryToken.hasRetryTokens(transientErrorInfo.errorType)).toBe(false);
      });

      it("when it's not transient error", () => {
        const retryToken = getDrainedRetryToken(RETRY_COST, nonTransientErrorInfo);
        expect(retryToken.hasRetryTokens(nonTransientErrorInfo.errorType)).toBe(false);
      });
    });
  });

  describe("retrieveRetryToken", () => {
    describe("returns retry tokens amount if available", () => {
      it("when it's transient error", () => {
        const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
        expect(retryToken.retrieveRetryTokens(transientErrorInfo)).toBe(TIMEOUT_RETRY_COST);
        expect(retryToken.getLastRetryCost()).toBe(TIMEOUT_RETRY_COST);
      });

      it("when it's not transient error", () => {
        const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
        expect(retryToken.retrieveRetryTokens(nonTransientErrorInfo)).toBe(RETRY_COST);
        expect(retryToken.getLastRetryCost()).toBe(RETRY_COST);
      });
    });

    describe("throws error if retry tokens not available", () => {
      it("when it's transient error", () => {
        const retryToken = getDrainedRetryToken(TIMEOUT_RETRY_COST, transientErrorInfo);
        expect(() => {
          retryToken.retrieveRetryTokens(transientErrorInfo);
        }).toThrowError(new Error("No retry token available"));
      });

      it("when it's not transient error", () => {
        const retryToken = getDrainedRetryToken(RETRY_COST, nonTransientErrorInfo);
        expect(() => {
          retryToken.retrieveRetryTokens(nonTransientErrorInfo);
        }).toThrowError(new Error("No retry token available"));
      });
    });
  });

  describe("getLastRetryCost", () => {
    it("is undefined before an error is encountered", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      expect(retryToken.getLastRetryCost()).toBeUndefined();
    });

    it("is updated with successive errors", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      retryToken.retrieveRetryTokens(transientErrorInfo);
      expect(retryToken.getLastRetryCost()).toBe(TIMEOUT_RETRY_COST);
      retryToken.retrieveRetryTokens(nonTransientErrorInfo);
      expect(retryToken.getLastRetryCost()).toBe(RETRY_COST);
    });
  });

  describe("getRetryCount", () => {
    it("returns 0 when count is not set", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      expect(retryToken.getRetryCount()).toBe(0);
    });

    it("returns amount set when token is created", () => {
      const retryCount = 3;
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE, retryCount);
      expect(retryToken.getRetryCount()).toBe(retryCount);
    });

    it("increments when retries occur", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE, 1);
      expect(retryToken.getRetryCount()).toBe(1);
      retryToken.retrieveRetryTokens(transientErrorInfo);
      expect(retryToken.getRetryCount()).toBe(2);
      retryToken.retrieveRetryTokens(nonTransientErrorInfo);
      expect(retryToken.getRetryCount()).toBe(3);
    });
  });

  describe("getRetryDelay", () => {
    it("returns initial delay", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      expect(retryToken.getRetryDelay()).toBe(DEFAULT_RETRY_DELAY_BASE);
    });

    describe("retry delay increases exponentially with attempt number for non-throttling error", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      [0, 1, 2, 3].forEach((attempts) => {
        const mockDelayBase = 100;
        const expectedDelay = Math.floor(2 ** attempts * mockDelayBase);
        it(`(${mockDelayBase}, ${attempts}) returns ${expectedDelay}`, () => {
          retryToken.retrieveRetryTokens(transientErrorInfo);
          expect(retryToken.getRetryDelay()).toBe(expectedDelay);
        });
      });
    });

    describe("retry delay increases exponentially with attempt number for throttling error", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      [0, 1, 2, 3].forEach((attempts) => {
        const mockDelayBase = 500;
        const expectedDelay = Math.floor(2 ** attempts * mockDelayBase);
        it(`(${mockDelayBase}, ${attempts}) returns ${expectedDelay}`, () => {
          retryToken.retrieveRetryTokens(nonTransientErrorInfo);
          expect(retryToken.getRetryDelay()).toBe(expectedDelay);
        });
      });
    });

    describe(`caps retry delay at ${MAXIMUM_RETRY_DELAY / 1000} seconds`, () => {
      it("when value exceeded because of high delayBase", () => {
        const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE * 1000);
        expect(retryToken.getRetryDelay()).toBe(MAXIMUM_RETRY_DELAY);
      });

      it("when value exceeded because of high attempts number", () => {
        const largeAttemptsNumber = Math.ceil(Math.log2(MAXIMUM_RETRY_DELAY));
        const retryToken = getDefaultRetryToken(
          INITIAL_RETRY_TOKENS * largeAttemptsNumber,
          DEFAULT_RETRY_DELAY_BASE,
          largeAttemptsNumber
        );
        retryToken.retrieveRetryTokens(transientErrorInfo);
        expect(retryToken.getRetryDelay()).toBe(MAXIMUM_RETRY_DELAY);
      });
    });

    it("uses retry-after hint", () => {
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      // 5 minutes, greater than maximum allowed for normal retry
      const expectedDelay = 5 * 60 * 1000;
      const retryAfterHint = new Date(Date.now() + expectedDelay);
      const errorInfo: RetryErrorInfo = {
        errorType: RetryErrorType.TRANSIENT,
        retryAfterHint,
      };
      retryToken.retrieveRetryTokens(errorInfo);
      expect(retryToken.getRetryDelay()).toBe(expectedDelay);
    });
  });

  describe("releaseRetryToken", () => {
    it("adds capacityReleaseAmount if passed", () => {
      const { errorType } = nonTransientErrorInfo;
      const retryToken = getDrainedRetryToken(RETRY_COST, nonTransientErrorInfo);

      // Ensure that retry tokens are not available.
      expect(retryToken.hasRetryTokens(errorType)).toBe(false);

      // Release RETRY_COST tokens.
      retryToken.releaseRetryTokens(RETRY_COST);
      expect(retryToken.hasRetryTokens(errorType)).toBe(true);
      expect(retryToken.retrieveRetryTokens(nonTransientErrorInfo)).toBe(RETRY_COST);
      expect(retryToken.hasRetryTokens(errorType)).toBe(false);
    });

    it("adds NO_RETRY_INCREMENT if capacityReleaseAmount not passed", () => {
      const { errorType } = nonTransientErrorInfo;
      const retryToken = getDrainedRetryToken(RETRY_COST, nonTransientErrorInfo);

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
      const retryToken = getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE);
      const { errorType } = nonTransientErrorInfo;

      // release 100 tokens.
      [...Array(100).keys()].forEach(() => {
        retryToken.releaseRetryTokens();
      });

      // availableCapacity is still maxed at INITIAL_RETRY_TOKENS
      // hasRetryTokens would be true only till INITIAL_RETRY_TOKENS/RETRY_COST times
      [...Array(Math.floor(INITIAL_RETRY_TOKENS / RETRY_COST)).keys()].forEach(() => {
        expect(retryToken.hasRetryTokens(errorType)).toBe(true);
        retryToken.retrieveRetryTokens(nonTransientErrorInfo);
      });
      expect(retryToken.hasRetryTokens(errorType)).toBe(false);
    });
  });
});
