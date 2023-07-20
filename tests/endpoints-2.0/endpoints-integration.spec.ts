import { resolveParams } from "@smithy/middleware-endpoint";
import { EndpointParameters, EndpointV2 } from "@smithy/types";
import * as fs from "fs";
import * as path from "path";

import { EndpointExpectation, EndpointTestCase, ErrorExpectation, ServiceNamespace } from "./integration-test-types";

const clientList: string[] = [];
const root = path.join(__dirname, "..", "..");
const clients = fs.readdirSync(path.join(root, "clients"));
clientList.push(...clients);

describe("client list", () => {
  it("should be at least 300 clients", () => {
    expect(clientList.length).toBeGreaterThan(300);
  });
});

for (const client of clientList) {
  const serviceName = client.slice(7);

  let defaultEndpointResolver;
  let namespace;
  let model;

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

  describe(`client-${serviceName} endpoint test cases`, () => {
    if (defaultEndpointResolver && namespace && model) {
      const [, service] = Object.entries(model.shapes).find(([k, v]) => v?.["type"] === "service") as any;
      const [, tests] = Object.entries(service.traits).find(([k, v]) => k === "smithy.rules#endpointTests") as any;
      if (tests?.testCases) {
        runTestCases(tests, service, defaultEndpointResolver, "");
      } else {
        it.skip("has no test cases", () => {});
      }
    } else {
      it.skip("unable to load endpoint resolver, namespace, or test cases", () => {});
    }
  });
}

function runTestCases(
  { testCases }: { testCases: EndpointTestCase[] },
  service: ServiceNamespace,
  defaultEndpointResolver: (endpointParams: EndpointParameters) => EndpointV2,
  serviceId: string
) {
  for (const testCase of testCases) {
    runTestCase(testCase, service, defaultEndpointResolver, serviceId);
  }
}

async function runTestCase(
  testCase: EndpointTestCase,
  service: ServiceNamespace,
  defaultEndpointResolver: (endpointParams: EndpointParameters) => EndpointV2,
  serviceId: string
) {
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
    return;
  }

  params.serviceId = serviceId;

  it(documentation || "undocumented testcase", async () => {
    if (isEndpointExpectation(expectation)) {
      const { endpoint } = expectation;
      if (operationInputs) {
        for (const operationInput of operationInputs) {
          const { operationName, operationParams = {} } = operationInput;
          const endpointParams = await resolveParams(operationParams, service[`${operationName}Command`], params);
          const observed = defaultEndpointResolver(endpointParams as any);
          assertEndpointResolvedCorrectly(endpoint, observed);
        }
      } else {
        const endpointParams = await resolveParams({}, {}, params);
        const observed = defaultEndpointResolver(endpointParams as any);
        assertEndpointResolvedCorrectly(endpoint, observed);
      }
    }
    if (isErrorExpectation(expectation)) {
      const { error } = expectation;
      const pass = (err) => err;
      const normalizeQuotes = (s) => s.replace(/`/g, "");
      if (operationInputs) {
        for (const operationInput of operationInputs) {
          const { operationName, operationParams = {} } = operationInput;
          const endpointParams = await resolveParams(operationParams, service[`${operationName}Command`], {
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

function isEndpointExpectation(expectation: object): expectation is EndpointExpectation {
  return "endpoint" in expectation;
}

function isErrorExpectation(expectation: object): expectation is ErrorExpectation {
  return "error" in expectation;
}
