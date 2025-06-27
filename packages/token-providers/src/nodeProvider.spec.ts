import { chain, memoize, TokenProviderError } from "@smithy/property-provider";
import { loadSharedConfigFiles } from "@smithy/shared-ini-file-loader";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromSso } from "./fromSso";
import { nodeProvider } from "./nodeProvider";

vi.mock("@smithy/property-provider");
vi.mock("@smithy/shared-ini-file-loader");
vi.mock("./fromSso");

describe(nodeProvider.name, () => {
  const mockToken = {
    token: "mockAccessToken",
    expiration: new Date(Date.now() + 3600 * 1000),
  };

  const mockInit = {
    profile: "mockProfile",
  };

  const mockSsoFn = vi.fn();
  const mockChainFn = vi.fn();
  const mockMemoizeFn = vi.fn().mockResolvedValue(mockToken);

  beforeEach(() => {
    [
      [fromSso, mockSsoFn],
      [chain, mockChainFn],
      [memoize, mockMemoizeFn],
    ].forEach(([fromFn, mockFn]) => {
      vi.mocked(fromFn).mockReturnValue(mockFn as any);
    });
  });

  afterEach(async () => {
    expect(chain).toHaveBeenCalledWith(mockSsoFn, expect.any(Function));

    const errorFnIndex = vi.mocked(chain).mock.calls[0].length;
    const errorFn = vi.mocked(chain).mock.calls[0][errorFnIndex - 1];
    const expectedError = new TokenProviderError("Could not load token from any providers", false);
    try {
      await errorFn();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error.toString()).toStrictEqual(expectedError.toString());
    }

    expect(memoize).toHaveBeenCalledWith(mockChainFn, expect.any(Function), expect.any(Function));

    vi.clearAllMocks();
  });

  it("creates provider chain and memoizes it", async () => {
    const receivedToken = await nodeProvider(mockInit)();
    expect(receivedToken).toStrictEqual(mockToken);

    for (const fromFn of [fromSso]) {
      expect(fromFn).toHaveBeenCalledWith(mockInit);
    }

    expect(loadSharedConfigFiles).not.toHaveBeenCalled();
  });

  describe("memoize isExpired", () => {
    const mockDateNow = Date.now();
    beforeEach(async () => {
      vi.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);
      await nodeProvider(mockInit)();
    });

    it("returns true if expiration is defined, and token has expired", () => {
      const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
      const expiration = new Date(mockDateNow - 24 * 60 * 60 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(true);
    });

    it("returns true if expiration is defined, and token expires in <5 mins", () => {
      const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
      const expiration = new Date(mockDateNow + 299 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(true);
    });

    it("returns false if expiration is defined, but token expires in >5 mins", () => {
      const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
      const expiration = new Date(mockDateNow + 301 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(false);
    });

    it("returns false if expiration is not defined", () => {
      const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
      expect(memoizeExpiredFn({})).toEqual(false);
    });
  });

  describe("memoize requiresRefresh", () => {
    beforeEach(async () => {
      await nodeProvider(mockInit)();
    });

    it("returns true if expiration is not defined", () => {
      const memoizeRefreshFn = vi.mocked(memoize).mock.calls[0][2]!;
      const expiration = Date.now();
      expect(memoizeRefreshFn({ expiration })).toEqual(true);
    });

    it("returns false if expiration is not defined", () => {
      const memoizeRefreshFn = vi.mocked(memoize).mock.calls[0][2]!;
      expect(memoizeRefreshFn({})).toEqual(false);
    });
  });
});
