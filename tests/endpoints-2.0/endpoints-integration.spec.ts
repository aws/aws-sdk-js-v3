import { resolveParams } from "@smithy/middleware-endpoint";
import { EndpointParameters, EndpointV2 } from "@smithy/types";
import * as fs from "fs";
import * as path from "path";

import { EndpointExpectation, ServiceModel, ServiceNamespace } from "./integration-test-types";

describe("client list", () => {
  const root = path.join(__dirname, "..", "..");
  const clientList = fs.readdirSync(path.join(root, "clients"));

  it("should be at least 300 clients", () => {
    expect(clientList.length).toBeGreaterThan(300);
  });

  describe.each(clientList)(`%s endpoint test cases`, (client) => {
    const serviceName = client.slice(7);

    let defaultEndpointResolver: any;
    let namespace: any;
    let model: any;

    // this may also work with dynamic async import() in a beforeAll() block,
    // but needs more effort than using synchronous require().
    try {
      defaultEndpointResolver =
        require(`@aws-sdk/client-${serviceName}/src/endpoint/endpointResolver`).defaultEndpointResolver;
      namespace = require(`@aws-sdk/client-${serviceName}`);
      model = require(path.join(root, "codegen", "sdk-codegen", "aws-models", serviceName + ".json"));
    } catch (e) {
      defaultEndpointResolver = null;
      namespace = null;
      model = null;
      if (e.code !== "MODULE_NOT_FOUND") {
        console.error(e);
      }
    }

    if (defaultEndpointResolver && namespace && model) {
      for (const value of Object.values(model.shapes)) {
        if (typeof value === "object" && value !== null && "type" in value && value.type === "service") {
          const service = value as ServiceModel;
          runTestCases(service, namespace, defaultEndpointResolver);
          break;
        }
      }
    } else {
      it.skip("unable to load endpoint resolver, namespace, or test cases", () => {});
    }
  });
});

function runTestCases(
  service: ServiceModel,
  namespace: ServiceNamespace,
  defaultEndpointResolver: (endpointParams: EndpointParameters) => EndpointV2
) {
  const serviceId = service.traits["aws.api#service"].serviceId;
  const testCases = service.traits["smithy.rules#endpointTests"]?.testCases;
  if (testCases) {
    for (const testCase of testCases) {
      const { documentation, params = {}, expect: expectation, operationInputs } = testCase;

      for (const key of Object.keys(params)) {
        // e.g. S3Control::UseArnRegion as a param key indicates
        // an error with the test case, it will be ignored.
        if (key.includes(":")) {
          delete params[key];
        }
      }

      if (params.UseGlobalEndpoint || params.Region === "aws-global") {
        it.skip(documentation || "undocumented testcase", () => {});
        continue;
      }

      params.serviceId = serviceId;

      it(documentation || "undocumented testcase", async () => {
        if ("endpoint" in expectation) {
          const { endpoint } = expectation;
          if (operationInputs) {
            for (const operationInput of operationInputs) {
              const { operationName, operationParams = {} } = operationInput;
              const endpointParams = await resolveParams(operationParams, namespace[`${operationName}Command`], params);
              const observed = defaultEndpointResolver(endpointParams as any);
              assertEndpointResolvedCorrectly(endpoint, observed);
            }
          } else {
            const endpointParams = await resolveParams({}, {}, params);
            const observed = defaultEndpointResolver(endpointParams as any);
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
              const endpointParams = await resolveParams(operationParams, namespace[`${operationName}Command`], {
                ...params,
                endpointProvider: defaultEndpointResolver,
              }).catch(pass);
              const observedError = await (async () => defaultEndpointResolver(endpointParams as any))().catch(pass);
              expect(observedError).not.toBeUndefined();
              expect(observedError?.url).toBeUndefined();
              // expect(normalizeQuotes(String(observedError))).toContain(normalizeQuotes(error));
            }
          } else {
            const endpointParams = await resolveParams({}, {}, params).catch(pass);
            const observedError = await (async () => defaultEndpointResolver(endpointParams as any))().catch(pass);
            expect(observedError).not.toBeUndefined();
            expect(observedError?.url).toBeUndefined();
            // expect(normalizeQuotes(String(observedError))).toContain(normalizeQuotes(error));
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
