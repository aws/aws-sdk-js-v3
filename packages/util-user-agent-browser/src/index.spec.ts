import { defaultUserAgent } from ".";

const ua =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36";

it("should populate metrics", async () => {
  jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(ua);
  const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
  expect(userAgent[0]).toEqual(["aws-sdk-js", "0.1.0"]);
  expect(userAgent[1]).toEqual(["ua", "2.0"]);
  expect(userAgent[2]).toEqual(["os/macOS", "10.15.7"]);
  expect(userAgent[3]).toEqual(["lang/js"]);
  expect(userAgent[4]).toEqual(["md/browser", "Chrome_86.0.4240.111"]);
  expect(userAgent[5]).toEqual(["api/s3", "0.1.0"]);
  jest.clearAllMocks();
});

it("should populate metrics when service id not available", async () => {
  jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(ua);
  const userAgent = await defaultUserAgent({ serviceId: undefined, clientVersion: "0.1.0" })();
  expect(userAgent).not.toContainEqual(["api/s3", "0.1.0"]);
  jest.clearAllMocks();
});
