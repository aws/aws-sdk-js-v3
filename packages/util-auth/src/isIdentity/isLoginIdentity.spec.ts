import { LoginIdentity } from "@aws-sdk/types";

import { isLoginIdentity } from "./isLoginIdentity";

describe(isLoginIdentity.name, () => {
  const MOCK_USERNAME = "username";
  const MOCK_PASSWORD = "password";

  const validIdentities: LoginIdentity[] = [{
    username: MOCK_USERNAME,
    password: MOCK_PASSWORD,
  }, {
    username: MOCK_USERNAME,
    password: MOCK_PASSWORD,
    expiration: new Date(),
  }];
  it.each(validIdentities)("is a login identity", (identity: any) => {
    expect(isLoginIdentity(identity)).toEqual(true);
  });

  const invalidIdentities: Object[] = [{
    // Empty
  }, {
    username: MOCK_USERNAME,
  }, {
    password: MOCK_PASSWORD,
  }, {
    expiration: new Date(),
  }, {
    username: MOCK_USERNAME,
    expiration: new Date(),
  }, {
    password: MOCK_PASSWORD,
    expiration: new Date(),
  }];
  it.each(invalidIdentities)("is not a login identity", (identity) => {
    expect(isLoginIdentity(identity)).toEqual(false);
  });
});
