import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { beforeAll, expect } from "vitest";

declare global {
  // eslint-disable-next-line no-var
  var aws: {
    testCredentials?: AwsCredentialIdentity | (() => Promise<AwsCredentialIdentity>);
  };
}

if (typeof aws === "undefined") {
  if (typeof global !== "undefined") {
    // @ts-ignore
    global.aws = {};
  }
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.aws = {};
  }
}

aws.testCredentials = undefined;

beforeAll(async () => {
  expect(aws).toBeDefined();
  expect(aws.testCredentials).toBeUndefined();
});
