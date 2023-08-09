import { existsSync, readdirSync } from "fs";
import { resolve } from "path";

import { resolveEndpoint } from "./resolveEndpoint";
import { EndpointError } from "./types";

describe(resolveEndpoint.name, () => {
  const mocksDir = resolve(__dirname, "__mocks__");
  const rulesDir = resolve(mocksDir, "valid-rules");
  const testCasesDir = resolve(mocksDir, "test-cases");

  const validRules = readdirSync(rulesDir)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => fileName.replace(".json", ""));

  describe.each(validRules)("%s", (ruleName) => {
    const rulesFile = resolve(rulesDir, `${ruleName}.json`);
    const testCasesFile = resolve(testCasesDir, `${ruleName}.json`);

    if (existsSync(testCasesFile)) {
      const ruleSetObject = require(rulesFile);
      const { testCases } = require(testCasesFile);

      for (const testCase of testCases) {
        const { documentation, params } = testCase;
        (testCase.skip ? xit : it)(documentation, () => {
          const _expect = testCase.expect;

          const { endpoint, error } = _expect;

          if (endpoint) {
            expect(resolveEndpoint(ruleSetObject, { endpointParams: params })).toStrictEqual({
              ...endpoint,
              url: new URL(endpoint.url),
            });
          }

          if (error) {
            expect(() => resolveEndpoint(ruleSetObject, { endpointParams: params })).toThrowError(
              new EndpointError(error)
            );
          }
        });
      }
    }
  });
});
