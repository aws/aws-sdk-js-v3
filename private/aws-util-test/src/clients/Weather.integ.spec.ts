import { Weather } from "@aws-sdk/weather";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";

describe(Weather.name, () => {
  it("should be able to make a request without errors", async () => {
    const client = new Weather({
      credentials: {
        accessKeyId: "",
        secretAccessKey: "",
      },
      endpoint: "https://localhost",
      region: "us-west-2",
    });

    requireRequestsFrom(client).toMatch({
      body: /./,
    });

    await client.onlySigv4Auth({});

    expect.hasAssertions();
  });

  it("should be assigned a default credentials object for sigv4 auth", async () => {
    const client = new Weather({
      endpoint: "https://localhost",
    });

    expect(client.config.credentials).toBeDefined();
  });
});
