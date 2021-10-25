import { join } from "path";

import testCases from "./test_cases_supported.json";

const getClientPackageName = (sdkId: string) =>
  `client-${sdkId
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")}`;

describe("endpoints.fips", () => {
  for (const { sdkId, region, signingRegion, hostname } of testCases) {
    const clientPackageName = getClientPackageName(sdkId);
    it(`testing "${clientPackageName}" with region: ${region}`, async () => {
      const { defaultRegionInfoProvider } = await import(
        join("..", "..", "..", "..", "clients", clientPackageName, "src", "endpoints")
      );
      const regionInfo = await defaultRegionInfoProvider(region);
      expect(regionInfo.signingRegion).toEqual(signingRegion);
      expect(regionInfo.hostname).toEqual(hostname);
    });
  }
});
