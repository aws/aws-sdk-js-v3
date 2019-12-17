const { KNOWN_REGIONS } = require("./fixtures");
const { getRegionInfoProvider } = require("../util/regioninfo-provider");

describe("hostname for know regions", () => {
  for (const region of Object.keys(KNOWN_REGIONS)) {
    describe(region, () => {
      for (const [service, hostname] of Object.entries(KNOWN_REGIONS[region])) {
        it(`${service} should resolve to hostname ${hostname}`, async () => {
          expect.assertions(1);
          const regionInfoProvider = getRegionInfoProvider(service);
          expect((await regionInfoProvider(region)).hostname).toBe(hostname);
        });
      }
    });
  }
});
