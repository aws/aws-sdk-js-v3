import { TokenProviderError } from "@aws-sdk/property-provider";

import { REFRESH_MESSAGE } from "./constants";
import { validateTokenExpiry } from "./validateTokenExpiry";

describe(validateTokenExpiry.name, () => {
  const mockSsoToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date().toISOString(),
  };

  it("throws TokenProviderError if ssoToken is expired", () => {
    expect(() =>
      validateTokenExpiry({ ...mockSsoToken, expiresAt: new Date(Date.now() - 1000).toISOString() })
    ).toThrow(new TokenProviderError(`SSO Token is expired. ${REFRESH_MESSAGE}`, false));
  });

  it("does nothing if ssoToken is not expired", () => {
    expect(() =>
      validateTokenExpiry({ ...mockSsoToken, expiresAt: new Date(Date.now() + 1000).toISOString() })
    ).not.toThrow();
  });
});
