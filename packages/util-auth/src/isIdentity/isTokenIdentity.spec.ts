import { TokenIdentity } from "@aws-sdk/types";

import { isTokenIdentity } from "./isTokenIdentity";

describe(isTokenIdentity.name, () => {
  const MOCK_TOKEN = "token";

  const validIdentities: TokenIdentity[] = [{
    token: MOCK_TOKEN,
  }, {
    token: MOCK_TOKEN,
    expiration: new Date(),
  }];
  it.each(validIdentities)("is a token identity", (identity: any) => {
    expect(isTokenIdentity(identity)).toEqual(true);
  });

  const invalidIdentities: Object[] = [{
    // Empty
  }, {
    expiration: new Date(),
  }];
  it.each(invalidIdentities)("is not a token identity", (identity) => {
    expect(isTokenIdentity(identity)).toEqual(false);
  });
});
