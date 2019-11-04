import { defaultUserAgent, appendToUserAgent } from ".";

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

it("append to user agent", () => {
  const defaultValue = defaultUserAgent("client-s3-node", "0.1.0");
  const request = {
    headers: { "X-Amz-User-Agent": defaultValue },
    method: "GET",
    protocol: "json",
    hostname: "foo.amazonaws.com",
    path: "/"
  };
  appendToUserAgent(request, "http/2.0");
  expect(request.headers["X-Amz-User-Agent"]).toBe(`${defaultValue} http/2.0`);
});

it("append custom user agent when existing user agent was undefined", () => {
  const request = {
    headers: { "X-Amz-User-Agent": undefined as any },
    method: "GET",
    protocol: "json",
    hostname: "foo.amazonaws.com",
    path: "/"
  };
  appendToUserAgent(request, "http/2.0");
  expect(request.headers["X-Amz-User-Agent"]).toBe("http/2.0");
});
