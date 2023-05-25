import { RetryErrorInfo, RetryErrorType } from "@aws-sdk/types";

import { RETRY_MODES } from "./config";
import { DEFAULT_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS } from "./constants";
import { createDefaultRetryToken } from "./defaultRetryToken";
import { StandardRetryStrategy } from "./StandardRetryStrategy";

jest.mock("./defaultRetryToken");

describe(StandardRetryStrategy.name, () => {
  const maxAttempts = 3;
  const retryTokenScope = "scope";
  const mockRetryToken = {
    getRetryCount: () => 1,
    getRetryTokenCount: (errorInfo: any) => 1,
  };
  const noRetryTokenAvailableError = new Error("No retry token available");
  const errorInfo = { errorType: "TRANSIENT" } as RetryErrorInfo;

  beforeEach(() => {
    (createDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
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

  describe("acquireInitialRetryToken", () => {
    it("returns default retryToken", async () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      const retryToken = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      expect(retryToken).toEqual(
        createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0,
        })
      );
    });
  });

  describe("refreshRetryTokenForRetry", () => {
    it("refreshes the token", async () => {
      const getRetryCount = jest.fn().mockReturnValue(0);
      const hasRetryTokens = jest.fn().mockReturnValue(true);
      const mockRetryToken = {
        getRetryCount,
        hasRetryTokens,
      };
      (createDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      await retryStrategy.refreshRetryTokenForRetry(token, errorInfo);
      expect(getRetryCount).toHaveBeenCalledTimes(3);
    });

    it("throws when attempts exceeds maxAttempts", async () => {
      const mockRetryToken = {
        getRetryCount: () => 2,
        getRetryTokenCount: (errorInfo: any) => 1,
      };
      (createDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
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
        getRetryTokenCount: (errorInfo: any) => 1,
      };
      (createDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
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
        getRetryTokenCount: (errorInfo: any) => 1,
        hasRetryTokens: (errorType: RetryErrorType) => false,
      };
      (createDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
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
        getRetryTokenCount: (errorInfo: any) => 1,
        hasRetryTokens: (errorType: RetryErrorType) => true,
      };
      (createDefaultRetryToken as jest.Mock).mockReturnValue(mockRetryToken);
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      const errorInfo = {
        errorType: "CLIENT_ERROR",
      } as RetryErrorInfo;
      try {
        await retryStrategy.refreshRetryTokenForRetry(token, errorInfo);
      } catch (error) {
        expect(error).toStrictEqual(noRetryTokenAvailableError);
      }
    });
  });
});
