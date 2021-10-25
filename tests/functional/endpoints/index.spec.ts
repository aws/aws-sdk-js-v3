import { getRegionInfoProvider } from "../util/getRegionInfoProvider";
import { KNOWN_REGIONS } from "./fixtures";

describe("hostname for know regions", () => {
  for (const region of Object.keys(KNOWN_REGIONS)) {
    describe(region, () => {
      for (const [service, expectedHostname] of Object.entries(KNOWN_REGIONS[region])) {
        it(`${service} should resolve to hostname ${expectedHostname}`, async () => {
          const regionInfoProvider = getRegionInfoProvider(service);
          const { hostname } = await regionInfoProvider(region);
          expect(hostname).toBe(expectedHostname);
        });
      }
    });
  }
});
