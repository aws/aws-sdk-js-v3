import { defaultUserAgent } from "./index.native";

it("should response basic browser default user agent", async () => {
  // RN doesn't have userAgent in window.navigator.
  //@ts-ignore mock no userAgent exists.
  jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue(undefined);
  const userAgent = await defaultUserAgent({ serviceId: "s3", clientVersion: "0.1.0" })();
  expect(userAgent[0]).toEqual(["aws-sdk-js", "0.1.0"]);
  expect(userAgent[1]).toEqual(["ua", "2.0"]);
  expect(userAgent[2]).toEqual(["os/other"]);
  expect(userAgent[3]).toEqual(["lang/js"]);
  expect(userAgent[4]).toEqual(["md/rn"]);
  expect(userAgent[5]).toEqual(["api/s3", "0.1.0"]);
  jest.clearAllMocks();
});
