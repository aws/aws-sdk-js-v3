import { TokenProviderError } from "@smithy/property-provider";

import { REFRESH_MESSAGE } from "./constants";
import { validateTokenKey } from "./validateTokenKey";

describe(validateTokenKey.name, () => {
  it("throws error if value is undefined", () => {
    const key = "key";
    const value = undefined;

    expect(() => validateTokenKey(key, value)).toThrow(
      new TokenProviderError(`Value not present for '${key}' in SSO Token. ${REFRESH_MESSAGE}`, false)
    );
  });

  it("specifies whether validation was for refresh", () => {
    const key = "key";
    const value = undefined;

    expect(() => validateTokenKey(key, value, true)).toThrow(
      new TokenProviderError(`Value not present for '${key}' in SSO Token. Cannot refresh. ${REFRESH_MESSAGE}`, false)
    );
  });

  it("does nothing is value if defined", () => {
    const key = "key";
    const value = "value";

    expect(() => validateTokenKey(key, value)).not.toThrow();
  });
});
