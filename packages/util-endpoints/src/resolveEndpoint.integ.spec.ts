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

      const jestTestCases: Array<[string, any, any]> = testCases.map((testCase) => Object.values(testCase));

      it.each(jestTestCases)("%s", (documentation: string, endpointParams: any, expected: any) => {
        const { endpoint, error } = expected;

        if (endpoint) {
          expect(resolveEndpoint(ruleSetObject, { endpointParams })).toStrictEqual({
            ...endpoint,
            url: new URL(endpoint.url),
          });
        }

        if (error) {
          expect(() => resolveEndpoint(ruleSetObject, { endpointParams })).toThrowError(new EndpointError(error));
        }
      });
    }
  });
});
