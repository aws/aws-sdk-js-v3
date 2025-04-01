import { resolveParams } from "@smithy/middleware-endpoint";
import { EndpointV2 } from "@smithy/types";
import { resolveEndpoint, EndpointParams } from "@smithy/util-endpoints";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

import { EndpointExpectation, ServiceModel, ServiceNamespace } from "./integration-test-types";

describe("client list", () => {
  const root = join(__dirname, "..", "..");
  const clientPackageNameList = readdirSync(join(root, "clients"));

  it("should be at least 300 clients", () => {
    expect(clientPackageNameList.length).toBeGreaterThan(300);
  });

  describe.each(clientPackageNameList)(`%s endpoint test cases`, (clientPackageName) => {
    const serviceName = clientPackageName.slice(7);

    // since client package name list is populated from clients folder, we know it exists.
    const namespace = require(`@aws-sdk/${clientPackageName}`);
    const modelPath = join(root, "codegen", "sdk-codegen", "aws-models", serviceName + ".json");

    if (existsSync(modelPath)) {
      const model = require(modelPath);
      for (const value of Object.values(model.shapes)) {
        if (typeof value === "object" && value !== null && "type" in value && value.type === "service") {
          const service = value as ServiceModel;
          runTestCases(service, namespace);
          break;
        }
      }
    }
  });
});

function runTestCases(service: ServiceModel, namespace: ServiceNamespace) {
  const serviceId = service.traits["aws.api#service"].serviceId;
  const testCases = service.traits["smithy.rules#endpointTests"]?.testCases;

  const ruleSet = service.traits["smithy.rules#endpointRuleSet"];
  const defaultEndpointResolver = (endpointParams: EndpointParams) => resolveEndpoint(ruleSet, { endpointParams });

  if (testCases) {
    for (const testCase of testCases) {
      const { documentation, params = {}, expect: expectation, operationInputs } = testCase;
      params.serviceId = serviceId;

      it(documentation || "undocumented testcase", async () => {
        if ("endpoint" in expectation) {
          const { endpoint } = expectation;
          if (operationInputs) {
            for (const operationInput of operationInputs) {
              const { operationName, operationParams = {} } = operationInput;
              const command = namespace[`${operationName}Command`];
              const endpointParams = await resolveParams(operationParams, command, params);
              const observed = defaultEndpointResolver(endpointParams as EndpointParams);
              assertEndpointResolvedCorrectly(endpoint, observed);
            }
          } else {
            const endpointParams = await resolveParams({}, {}, params);
            const observed = defaultEndpointResolver(endpointParams as EndpointParams);
            assertEndpointResolvedCorrectly(endpoint, observed);
          }
        }
        if ("error" in expectation) {
          const { error } = expectation;
          const pass = (err: any) => err;
          const normalizeQuotes = (s: string) => s.replace(/`/g, "");
          if (operationInputs) {
            for (const operationInput of operationInputs) {
              const { operationName, operationParams = {} } = operationInput;
              const command = namespace[`${operationName}Command`];
              const endpointParams = await resolveParams(operationParams, command, params);
              const observedError = await (async () => defaultEndpointResolver(endpointParams as any))().catch(pass);
              expect(observedError).not.toBeUndefined();
              expect(observedError?.url).toBeUndefined();
              expect(normalizeQuotes(String(observedError))).toContain(normalizeQuotes(error));
            }
          } else {
            const endpointParams = await resolveParams({}, {}, params).catch(pass);
            const observedError = await (async () => defaultEndpointResolver(endpointParams as any))().catch(pass);
            expect(observedError).not.toBeUndefined();
            expect(observedError?.url).toBeUndefined();
            expect(normalizeQuotes(String(observedError))).toContain(normalizeQuotes(error));
          }
        }
      });
    }
  } else {
    it.skip("has no test cases", () => {});
  }
}

function assertEndpointResolvedCorrectly(expected: EndpointExpectation["endpoint"], observed: EndpointV2) {
  const { url, headers, properties } = expected;
  const { authSchemes } = properties || {};
  if (url) {
    expect(observed.url.href).toContain(new URL(url).href);
    expect(Math.abs(observed.url.href.length - url.length)).toBeLessThan(2);
  }
  if (headers) {
    expect(observed.headers).toEqual(headers);
  }
  if (authSchemes) {
    expect(observed.properties?.authSchemes).toEqual(authSchemes);
  }
}
