import { defaultUserAgent } from ".";

it("should response basic browser default user agent", async () => {
  const ua =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36";
  jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(ua);
  const userAgent = await defaultUserAgent("s3", "0.1.0")();
  expect(userAgent).toContainEqual(["aws-sdk-js", "0.1.0"]);
  expect(userAgent).toContainEqual(["api/s3", "0.1.0"]);
  expect(userAgent).toContainEqual(["os/macOS", "10.15.7"]);
  expect(userAgent).toContainEqual(["md/browser", "Chrome_86.0.4240.111"]);
  jest.clearAllMocks();
});
