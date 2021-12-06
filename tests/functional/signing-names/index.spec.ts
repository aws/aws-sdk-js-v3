import { join } from "path";

import { SIGNING_NAMES } from "./fixtures";

describe("signing names for know regions", () => {
  for (const region of Object.keys(SIGNING_NAMES)) {
    describe(region, () => {
      for (const [service, signingName] of Object.entries(SIGNING_NAMES[region])) {
        it(`${service} should infer signing name ${signingName}`, async () => {
          const { defaultRegionInfoProvider } = await import(
            join("..", "..", "..", "clients", `client-${service}`, "src", "endpoints")
          );
          expect(defaultRegionInfoProvider(region).signingService).toBe(signingName);
        });
      }
    });
  }
});
