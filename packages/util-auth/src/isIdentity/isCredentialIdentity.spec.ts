import { AwsCredentialIdentity } from "@aws-sdk/types";

import { isCredentialIdentity } from "./isCredentialIdentity";

describe(isCredentialIdentity.name, () => {
  const MOCK_ACCESS_KEY_ID = "accessKeyId";
  const MOCK_SECRET_ACCESS_KEY = "secretAccessKey";
  const MOCK_SESSION_TOKEN = "sessionToken";

  const validIdentities: AwsCredentialIdentity[] = [{
    accessKeyId: MOCK_ACCESS_KEY_ID,
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
  }, {
    accessKeyId: MOCK_ACCESS_KEY_ID,
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
    sessionToken: MOCK_SESSION_TOKEN,
  }, {
    accessKeyId: MOCK_ACCESS_KEY_ID,
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
    expiration: new Date(),
  }, {
    accessKeyId: MOCK_ACCESS_KEY_ID,
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
    sessionToken: MOCK_SESSION_TOKEN,
    expiration: new Date(),
  }];
  it.each(validIdentities)("is a credential identity", (identity: any) => {
    expect(isCredentialIdentity(identity)).toEqual(true);
  });

  const invalidIdentities: Object[] = [{
    // Empty
  }, {
    accessKeyId: MOCK_ACCESS_KEY_ID,
  }, {
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
  }, {
    sessionToken: MOCK_SESSION_TOKEN,
  }, {
    expiration: new Date(),
  }, {
    accessKeyId: MOCK_ACCESS_KEY_ID,
    sessionToken: MOCK_SESSION_TOKEN,
  }, {
    accessKeyId: MOCK_ACCESS_KEY_ID,
    expiration: new Date(),
  }, {
    accessKeyId: MOCK_ACCESS_KEY_ID,
    sessionToken: MOCK_SESSION_TOKEN,
    expiration: new Date(),
  }, {
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
    sessionToken: MOCK_SESSION_TOKEN,
  }, {
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
    expiration: new Date(),
  }, {
    secretAccessKey: MOCK_SECRET_ACCESS_KEY,
    sessionToken: MOCK_SESSION_TOKEN,
    expiration: new Date(),
  }, {
    sessionToken: MOCK_SESSION_TOKEN,
    expiration: new Date(),
  }];
  it.each(invalidIdentities)("is not a credential identity", (identity: any) => {
    expect(isCredentialIdentity(identity)).toEqual(false);
  });
});
