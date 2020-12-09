import { defaultUserAgent } from "./index.native";

it("should response basic browser default user agent", async () => {
  // RN doesn't have userAgent in window.navigator.
  //@ts-ignore mock no userAgent exists.
  jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(undefined);
  const userAgent = await defaultUserAgent("s3", "0.1.0")();
  expect(userAgent).toContainEqual(["aws-sdk-js", "0.1.0"]);
  expect(userAgent).toContainEqual(["api/s3", "0.1.0"]);
  expect(userAgent).toContainEqual(["os/other"]);
  expect(userAgent).toContainEqual(["md/rn"]);
  jest.clearAllMocks();
});
