import type { AwsCredentialIdentity } from "@aws-sdk/types";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import { Browser } from "happy-dom";
import { beforeAll, expect } from "vitest";

import { testCredentials } from "./scripts/browser-testing/aws.testCredentials.browser";

type Writable<T extends object> = {
  -readonly [K in keyof T]: T[K];
};

const sourceIdentity = testCredentials as unknown as Writable<AwsCredentialIdentity>;

/**
 * This file sets up the testing environment for isomorphic e2e tests.
 *
 */
declare global {
  // eslint-disable-next-line no-var
  var aws: {
    testCredentials?: AwsCredentialIdentity | (() => Promise<AwsCredentialIdentity>);
  };
}

const browser = new Browser();
browser.settings.fetch.disableSameOriginPolicy = true;

const originalCreate = FetchHttpHandler.create.bind(FetchHttpHandler);
FetchHttpHandler.create = function () {
  // this tells happy-dom to include the authorization header in fetch.
  return originalCreate({
    ...this,
    credentials: "include",
  });
};

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

/**
 * Since these are static credentials we have no way of refreshing them anyway.
 * The test run must complete while the credentials are valid.
 */
delete sourceIdentity.expiration;

aws.testCredentials = sourceIdentity;

beforeAll(async () => {
  expect(aws?.testCredentials).toBeDefined();
});
