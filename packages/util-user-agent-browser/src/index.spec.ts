import { defaultUserAgent } from ".";
import { HttpRequest } from "@aws-sdk/protocol-http";

it("should response basic node default user agent", () => {
  let originUserAgent = "";
  if (typeof navigator === "undefined") {
    navigator = {} as any;
    originUserAgent = "foo/1.0";
    (navigator.userAgent as any) = originUserAgent;
  } else {
    originUserAgent = navigator.userAgent;
  }

  expect(defaultUserAgent("client-s3-node", "0.1.0")).toBe(
    `aws-sdk-js-v3-client-s3-node/0.1.0 ${originUserAgent}`
  );
});
