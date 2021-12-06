import { join } from "path";

import testCases from "./test_cases_supported.json";

const getClientPackageName = (sdkId: string) =>
  `client-${sdkId
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")}`;

describe("endpoints", () => {
  for (const { sdkId, region, useFipsEndpoint, useDualstackEndpoint, hostname } of testCases) {
    const clientPackageName = getClientPackageName(sdkId);
    const testSetup = JSON.stringify({ region, useFipsEndpoint, useDualstackEndpoint });
    it(`testing "${clientPackageName}" with ${testSetup}`, async () => {
      const { defaultRegionInfoProvider } = await import(
        join("..", "..", "..", "clients", clientPackageName, "src", "endpoints")
      );
      const regionInfo = await defaultRegionInfoProvider(region, { useFipsEndpoint, useDualstackEndpoint });
      expect(regionInfo.hostname).toEqual(hostname);
    });
  }
});
