import { RetryErrorInfo, StandardRetryToken } from "@aws-sdk/types";

import { AdaptiveRetryStrategy } from "./AdaptiveRetryStrategy";
import { RETRY_MODES } from "./config";
import { DefaultRateLimiter } from "./DefaultRateLimiter";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
import { RateLimiter } from "./types";

jest.mock("./StandardRetryStrategy");
jest.mock("./DefaultRateLimiter");

describe(AdaptiveRetryStrategy.name, () => {
  const maxAttemptsProvider = jest.fn();
  const retryTokenScope = "scope";
  const mockDefaultRateLimiter = {
    getSendToken: jest.fn(),
    updateClientSendingRate: jest.fn(),
  };
  const mockRetryToken: StandardRetryToken = {
    getRetryCost: () => 1,
    getRetryCount: () => 1,
    getRetryDelay: () => 1,
  };
  const errorInfo = {
    errorType: "TRANSIENT",
  } as RetryErrorInfo;

  beforeEach(() => {
    (DefaultRateLimiter as jest.Mock).mockReturnValue(mockDefaultRateLimiter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`sets mode=${RETRY_MODES.ADAPTIVE}`, () => {
    const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
    expect(retryStrategy.mode).toStrictEqual(RETRY_MODES.ADAPTIVE);
  });

  describe("rateLimiter init", () => {
    it("sets getDefaultrateLimiter if options is undefined", () => {
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider);
      expect(retryStrategy["rateLimiter"]).toBe(mockDefaultRateLimiter);
    });

    it("sets DefaultRateLimiter if options.rateLimiter undefined", () => {
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider, {});
      expect(retryStrategy["rateLimiter"]).toBe(mockDefaultRateLimiter);
    });

    it("sets options.rateLimiter if defined", () => {
      const rateLimiter = {} as RateLimiter;
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider, {
        rateLimiter,
      });
      expect(retryStrategy["rateLimiter"]).toBe(rateLimiter);
    });
  });

  describe("acquireInitialRetryToken", () => {
    it("calls rateLimiter.getSendToken and returns initial retry token ", async () => {
      const mockedStandardRetryStrategy = jest.spyOn(StandardRetryStrategy.prototype, "acquireInitialRetryToken");
      mockedStandardRetryStrategy.mockResolvedValue(mockRetryToken);
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider, {
        rateLimiter: mockDefaultRateLimiter,
      });
      const token = await retryStrategy.acquireInitialRetryToken(retryTokenScope);
      expect(mockDefaultRateLimiter.getSendToken).toHaveBeenCalledTimes(1);
      expect(mockedStandardRetryStrategy).toHaveBeenCalledTimes(1);
      expect(token).toStrictEqual(mockRetryToken);
    });
  });
  describe("refreshRetryTokenForRetry", () => {
    it("calls rateLimiter.updateCientSendingRate and refreshes retry token", async () => {
      const mockedStandardRetryStrategy = jest.spyOn(StandardRetryStrategy.prototype, "refreshRetryTokenForRetry");
      mockedStandardRetryStrategy.mockResolvedValue(mockRetryToken);
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider, {
        rateLimiter: mockDefaultRateLimiter,
      });
      const token = await retryStrategy.refreshRetryTokenForRetry(mockRetryToken, errorInfo);
      expect(mockDefaultRateLimiter.updateClientSendingRate).toHaveBeenCalledTimes(1);
      expect(mockDefaultRateLimiter.updateClientSendingRate).toHaveBeenCalledWith(errorInfo);
      expect(mockedStandardRetryStrategy).toHaveBeenCalledTimes(1);
      expect(mockedStandardRetryStrategy).toHaveBeenCalledWith(mockRetryToken, errorInfo);
      expect(token).toStrictEqual(mockRetryToken);
    });
  });
  describe("recordSuccess", () => {
    it("rateLimiter.updateCientSendingRate and records success on token", async () => {
      const mockedStandardRetryStrategy = jest.spyOn(StandardRetryStrategy.prototype, "recordSuccess");
      const retryStrategy = new AdaptiveRetryStrategy(maxAttemptsProvider, {
        rateLimiter: mockDefaultRateLimiter,
      });
      retryStrategy.recordSuccess(mockRetryToken);
      expect(mockDefaultRateLimiter.updateClientSendingRate).toHaveBeenCalledTimes(1);
      expect(mockDefaultRateLimiter.updateClientSendingRate).toHaveBeenCalledWith({});
      expect(mockedStandardRetryStrategy).toHaveBeenCalledTimes(1);
      expect(mockedStandardRetryStrategy).toHaveBeenCalledWith(mockRetryToken);
    });
  });
});
