import { getRegionInfoProvider } from "../util/getRegionInfoProvider";
import { SIGNING_NAMES } from "./fixtures";

describe("signing names for know regions", () => {
  for (const region of Object.keys(SIGNING_NAMES)) {
    describe(region, () => {
      for (const [service, signingName] of Object.entries(SIGNING_NAMES[region])) {
        it(`${service} should infer signing name ${signingName}`, () => {
          const regionInfoProvider = getRegionInfoProvider(service);
          expect(regionInfoProvider(region).signingService).toBe(signingName);
        });
      }
    });
  }
});
