import { chain, memoize, TokenProviderError } from "@smithy/property-provider";
import { loadSharedConfigFiles } from "@smithy/shared-ini-file-loader";

import { fromSso } from "./fromSso";
import { nodeProvider } from "./nodeProvider";

jest.mock("@smithy/property-provider");
jest.mock("@smithy/shared-ini-file-loader");
jest.mock("./fromSso");

describe(nodeProvider.name, () => {
  const mockToken = {
    token: "mockAccessToken",
    expiration: new Date(Date.now() + 3600 * 1000),
  };

  const mockInit = {
    profile: "mockProfile",
  };

  const mockSsoFn = jest.fn();
  const mockChainFn = jest.fn();
  const mockMemoizeFn = jest.fn().mockResolvedValue(mockToken);

  beforeEach(() => {
    [
      [fromSso, mockSsoFn],
      [chain, mockChainFn],
      [memoize, mockMemoizeFn],
    ].forEach(([fromFn, mockFn]) => {
      (fromFn as jest.Mock).mockReturnValue(mockFn);
    });
  });

  afterEach(async () => {
    expect(chain).toHaveBeenCalledWith(mockSsoFn, expect.any(Function));

    const errorFnIndex = (chain as jest.Mock).mock.calls[0].length;
    const errorFn = (chain as jest.Mock).mock.calls[0][errorFnIndex - 1];
    const expectedError = new TokenProviderError("Could not load token from any providers", false);
    try {
      await errorFn();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error.toString()).toStrictEqual(expectedError.toString());
    }

    expect(memoize).toHaveBeenCalledWith(mockChainFn, expect.any(Function), expect.any(Function));

    jest.clearAllMocks();
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
      jest.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);
      await nodeProvider(mockInit)();
    });

    it("returns true if expiration is defined, and token has expired", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      const expiration = new Date(mockDateNow - 24 * 60 * 60 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(true);
    });

    it("returns true if expiration is defined, and token expires in <5 mins", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      const expiration = new Date(mockDateNow + 299 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(true);
    });

    it("returns false if expiration is defined, but token expires in >5 mins", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      const expiration = new Date(mockDateNow + 301 * 1000);
      expect(memoizeExpiredFn({ expiration })).toEqual(false);
    });

    it("returns false if expiration is not defined", () => {
      const memoizeExpiredFn = (memoize as jest.Mock).mock.calls[0][1];
      expect(memoizeExpiredFn({})).toEqual(false);
    });
  });

  describe("memoize requiresRefresh", () => {
    beforeEach(async () => {
      await nodeProvider(mockInit)();
    });

    it("returns true if expiration is not defined", () => {
      const memoizeRefreshFn = (memoize as jest.Mock).mock.calls[0][2];
      const expiration = Date.now();
      expect(memoizeRefreshFn({ expiration })).toEqual(true);
    });

    it("returns false if expiration is not defined", () => {
      const memoizeRefreshFn = (memoize as jest.Mock).mock.calls[0][2];
      expect(memoizeRefreshFn({})).toEqual(false);
    });
  });
});
