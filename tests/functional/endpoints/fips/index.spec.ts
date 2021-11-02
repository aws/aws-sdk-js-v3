import { join } from "path";

import testCases from "./test_cases_supported.json";
import variantsTestCases from "./test_cases_supported_variants.json";

const getClientPackageName = (sdkId: string) =>
  `client-${sdkId
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-")}`;

describe("endpoints.fips", () => {
  describe("pseudo regions", () => {
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

  describe("real regions", () => {
    for (const { sdkId, signingRegion, hostname } of testCases.concat(variantsTestCases)) {
      const clientPackageName = getClientPackageName(sdkId);
      it(`testing "${clientPackageName}" with region: ${signingRegion}`, async () => {
        const { defaultRegionInfoProvider } = await import(
          join("..", "..", "..", "..", "clients", clientPackageName, "src", "endpoints")
        );
        const regionInfo = await defaultRegionInfoProvider(signingRegion, { isFipsEndpoint: true });
        expect(regionInfo.hostname).toEqual(hostname);
      });
    }
  });
});
