import { TokenProviderError } from "@smithy/property-provider";

import { fromStatic } from "./fromStatic";

describe(fromStatic.name, () => {
  const errorMessage = "Please pass a valid token to fromStatic";

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("throws error", () => {
    it("when token object is not provided", async () => {
      expect.assertions(1);
      try {
        await fromStatic({})();
      } catch (error) {
        expect(error).toStrictEqual(new TokenProviderError(errorMessage, false));
      }
    });

    it("when token object is missing token literal", async () => {
      expect.assertions(1);
      try {
        // @ts-ignore Property 'token' is missing in type '{}' but required in type 'Token'
        await fromStatic({ token: {} })();
      } catch (error) {
        expect(error).toStrictEqual(new TokenProviderError(errorMessage, false));
      }
    });
  });

  it("returns token", async () => {
    const token = { token: "token", expiration: new Date() };
    const resultToken = await fromStatic({ token })();
    expect(resultToken).toStrictEqual(token);
  });
});
