import { RetryErrorType } from "@aws-sdk/types";

import { RETRY_MODES } from "./config";
import { DEFAULT_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS } from "./constants";
import { getDefaultRetryToken } from "./defaultRetryToken";
import { StandardRetryStrategy } from "./StandardRetryStrategy";

jest.mock("./defaultRetryToken");

describe(StandardRetryStrategy.name, () => {
  const maxAttempts = 3;
  const retryTokenScope = "scope";
  const mockRetryToken = {
    getRetryCount: () => 1,
    retrieveRetryTokens: (errorInfo: any) => 1,
  };
  const noRetryTokenAvailableError = new Error("No retry token available");
  const errorInfo = {
    errorType: RetryErrorType.TRANSIENT,
  };

  beforeEach(() => {
    (getDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
  });

  afterEach(() => {
    jest.clearAllMocks;
  });

  it("sets maxAttemptsProvider as a class member variable", () => {
    [1, 2, 3].forEach((maxAttempts) => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      expect(retryStrategy["maxAttemptsProvider"]()).resolves.toBe(maxAttempts);
    });
  });

  it(`sets mode=${RETRY_MODES.STANDARD}`, () => {
    const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
    expect(retryStrategy.mode).toStrictEqual(RETRY_MODES.STANDARD);
  });

  describe("retryToken init", () => {
    it("sets retryToken", () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      expect(retryStrategy["retryToken"]).toBe(getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE));
    });
  });

  describe("acquireInitialRetryToken", () => {
    it("returns default retryToken", async () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      const retryToken = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      expect(retryToken).toEqual(getDefaultRetryToken(INITIAL_RETRY_TOKENS, DEFAULT_RETRY_DELAY_BASE));
    });
  });

  describe("refreshRetryTokenForRetry", () => {
    it("refreshes the token", async () => {
      const retrieveRetryTokens = jest.fn().mockReturnValue(1);
      const getRetryCount = jest.fn().mockReturnValue(0);
      const hasRetryTokens = jest.fn().mockReturnValue(true);
      const mockRetryToken = {
        getRetryCount,
        retrieveRetryTokens,
        hasRetryTokens,
      };
      (getDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      const refreshedToken = await retryStrategy.refreshRetryTokenForRetry(token, errorInfo);
      expect(retrieveRetryTokens).toHaveBeenCalledTimes(1);
      expect(retrieveRetryTokens).toHaveBeenCalledWith(errorInfo);
      expect(getRetryCount).toHaveBeenCalledTimes(1);
      expect(hasRetryTokens).toHaveBeenCalledTimes(1);
      expect(hasRetryTokens).toHaveBeenCalledWith(errorInfo.errorType);
    });

    it("throws when attempts exceeds maxAttempts", async () => {
      const mockRetryToken = {
        getRetryCount: () => 2,
        retrieveRetryTokens: (errorInfo: any) => 1,
      };
      (getDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(1));
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      try {
        await retryStrategy.refreshRetryTokenForRetry(token, errorInfo);
      } catch (error) {
        expect(error).toStrictEqual(noRetryTokenAvailableError);
      }
    });

    it("throws when attempts exceeds default max attempts (3)", async () => {
      const mockRetryToken = {
        getRetryCount: () => 5,
        retrieveRetryTokens: (errorInfo: any) => 1,
      };
      (getDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(5));
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      try {
        await retryStrategy.refreshRetryTokenForRetry(token, errorInfo);
      } catch (error) {
        expect(error).toStrictEqual(noRetryTokenAvailableError);
      }
    });

    it("throws when no tokens are available", async () => {
      const mockRetryToken = {
        getRetryCount: () => 0,
        retrieveRetryTokens: (errorInfo: any) => 1,
        hasRetryTokens: (errorType: RetryErrorType) => false,
      };
      (getDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      try {
        await retryStrategy.refreshRetryTokenForRetry(token, errorInfo);
      } catch (error) {
        expect(error).toStrictEqual(noRetryTokenAvailableError);
      }
    });

    it("throws when error is non-retryable", async () => {
      const mockRetryToken = {
        getRetryCount: () => 0,
        retrieveRetryTokens: (errorInfo: any) => 1,
        hasRetryTokens: (errorType: RetryErrorType) => true,
      };
      (getDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      const errorInfo = {
        errorType: RetryErrorType.CLIENT_ERROR,
      };
      try {
        await retryStrategy.refreshRetryTokenForRetry(token, errorInfo);
      } catch (error) {
        expect(error).toStrictEqual(noRetryTokenAvailableError);
      }
    });

    describe("recordSuccess", () => {
      it("releases tokens", async () => {
        const retryCost = 1;
        const releaseRetryTokens = jest.fn();
        const getLastRetryCost = jest.fn().mockReturnValue(retryCost);
        const mockRetryToken = {
          releaseRetryTokens,
          getLastRetryCost,
        };
        (getDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
        const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
        const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
        retryStrategy.recordSuccess(token);
        expect(releaseRetryTokens).toHaveBeenCalledTimes(1);
        expect(releaseRetryTokens).toHaveBeenCalledWith(retryCost);
        expect(getLastRetryCost).toHaveBeenCalledTimes(1);
      });
    });
  });
});
