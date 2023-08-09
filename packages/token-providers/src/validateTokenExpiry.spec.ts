import { TokenProviderError } from "@smithy/property-provider";

import { REFRESH_MESSAGE } from "./constants";
import { validateTokenExpiry } from "./validateTokenExpiry";

describe(validateTokenExpiry.name, () => {
  const mockToken = "mockToken";

  it("throws TokenProviderError if token is expired", () => {
    expect(() => validateTokenExpiry({ token: mockToken, expiration: new Date(Date.now() - 1000) })).toThrow(
      new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false)
    );
  });

  it("does not throw if token is not expired", () => {
    expect(() => validateTokenExpiry({ token: mockToken, expiration: new Date(Date.now() + 1000) })).not.toThrow();
  });

  it("does not throw if expiration is not provided", () => {
    expect(() => validateTokenExpiry({ token: mockToken })).not.toThrow();
  });
});
