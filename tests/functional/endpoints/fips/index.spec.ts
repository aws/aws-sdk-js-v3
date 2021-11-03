import { join } from "path";

import testCases from "./test_cases_supported.json";

const getClientPackageName = (sdkId: string) =>
  `client-${sdkId
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")}`;

describe("endpoints.fips", () => {
  describe("real regions", () => {
    for (const { sdkId, region, hostname } of testCases) {
      const clientPackageName = getClientPackageName(sdkId);
      it(`testing "${clientPackageName}" with region: ${region}`, async () => {
        const { defaultRegionInfoProvider } = await import(
          join("..", "..", "..", "..", "clients", clientPackageName, "src", "endpoints")
        );
        const regionInfo = await defaultRegionInfoProvider(region, { isFipsEndpoint: true });
        expect(regionInfo.hostname).toEqual(hostname);
      });
    }
  });
});
