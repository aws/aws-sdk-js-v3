import { Weather } from "@aws-sdk/weather";

import { requireRequestsFrom } from "../requests/test-http-handler";

describe(Weather.name, () => {
  it("should be able to make a request without errors", async () => {
    const client = new Weather({
      credentials: {
        accessKeyId: "",
        secretAccessKey: "",
      },
      endpoint: "https://localhost",
    });

    requireRequestsFrom(client).toMatch({
      body: /./,
    });

    await client.onlySigv4Auth({});

    expect.hasAssertions();
  });
});
