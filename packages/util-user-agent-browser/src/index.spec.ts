import { defaultUserAgent } from ".";

it("should response basic browser default user agent", () => {
  let originUserAgent = "";
  if (typeof navigator === "undefined") {
    navigator = {} as any;
    originUserAgent =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36";
    (navigator.userAgent as any) = originUserAgent;
  } else {
    originUserAgent = navigator.userAgent;
  }
  const userAgent = defaultUserAgent("client-s3", "0.1.0");
  expect(userAgent).toEqual(expect.stringContaining("aws-sdk-js/0.1.0"));
  expect(userAgent).toEqual(expect.stringContaining(originUserAgent));
  expect(userAgent).toEqual(expect.stringContaining("sdk-client/client-s3"));
});
