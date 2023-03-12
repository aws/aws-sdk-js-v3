import { normalizeProvider } from "@aws-sdk/util-middleware";

import { memoizeIdentity } from "./memoizeIdentity";
import { normalizeIdentityProvider } from "./normalizeIdentityProvider";

jest.mock("./memoizeIdentity");
jest.mock("@aws-sdk/util-middleware");

const ONE_SECOND_IN_MS = 1000;
const ONE_HOUR_IN_MS = 3600 * ONE_SECOND_IN_MS;

describe(normalizeIdentityProvider.name, () => {
  const mockIdentity = {
    expiration: new Date(Date.now() + ONE_HOUR_IN_MS),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("if identity is a function", () => {
    const mockInputIdentity = jest.fn();
    const mockMemoizeFn = jest.fn().mockResolvedValue(mockIdentity);
    (memoizeIdentity as jest.Mock).mockReturnValue(mockMemoizeFn);

    afterEach(() => {
      expect(memoizeIdentity).toHaveBeenCalledWith(mockInputIdentity, expect.any(Function), expect.any(Function));
    });

    it("returns memoized function", async () => {
      const normalizedIdentityProvider = normalizeIdentityProvider(mockInputIdentity);
      expect(normalizedIdentityProvider).toEqual(mockMemoizeFn);
      expect(mockMemoizeFn()).resolves.toEqual(mockIdentity);
    });

    describe("memoize isExpired", () => {
      const mockDateNow = Date.now();

      beforeEach(async () => {
        jest.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);
        normalizeIdentityProvider(mockInputIdentity);
      });

      it("returns true if expiration is defined, and identity has expired", () => {
        const memoizeExpiredFn = (memoizeIdentity as jest.Mock).mock.calls[0][1];
        const expiration = new Date(mockDateNow - 24 * ONE_HOUR_IN_MS);
        expect(memoizeExpiredFn({ expiration })).toEqual(true);
      });

      it("returns true if expiration is defined, and identity expires in <5 mins", () => {
        const memoizeExpiredFn = (memoizeIdentity as jest.Mock).mock.calls[0][1];
        const expiration = new Date(mockDateNow + 299 * ONE_SECOND_IN_MS);
        expect(memoizeExpiredFn({ expiration })).toEqual(true);
      });

      it("returns false if expiration is defined, but identity expires in >5 mins", () => {
        const memoizeExpiredFn = (memoizeIdentity as jest.Mock).mock.calls[0][1];
        const expiration = new Date(mockDateNow + 301 * ONE_SECOND_IN_MS);
        expect(memoizeExpiredFn({ expiration })).toEqual(false);
      });

      it("returns false if expiration is not defined", () => {
        const memoizeExpiredFn = (memoizeIdentity as jest.Mock).mock.calls[0][1];
        expect(memoizeExpiredFn({})).toEqual(false);
      });
    });

    describe("memoize requiresRefresh", () => {
      beforeEach(async () => {
        normalizeIdentityProvider(mockInputIdentity);
      });

      it("returns true if expiration is not defined", () => {
        const memoizeRefreshFn = (memoizeIdentity as jest.Mock).mock.calls[0][2];
        const expiration = Date.now();
        expect(memoizeRefreshFn({ expiration })).toEqual(true);
      });

      it("returns false if expiration is not defined", () => {
        const memoizeRefreshFn = (memoizeIdentity as jest.Mock).mock.calls[0][2];
        expect(memoizeRefreshFn({})).toEqual(false);
      });
    });
  });

  it("returns normalized identity if identity is not a function", () => {
    const normalizedIdentityProvider = normalizeIdentityProvider(mockIdentity);
    expect(normalizedIdentityProvider).toBe(normalizeProvider(mockIdentity));
    expect(memoizeIdentity).not.toHaveBeenCalled();
  });
});
