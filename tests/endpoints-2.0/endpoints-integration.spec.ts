import { resolveParams } from "@smithy/middleware-endpoint";
import { EndpointV2, RelativeMiddlewareOptions } from "@smithy/types";
import { EndpointParams, resolveEndpoint } from "@smithy/util-endpoints";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

import { EndpointExpectation, ServiceModel, ServiceNamespace } from "./integration-test-types";
import { HttpRequest } from "@smithy/protocol-http";

describe("client list", () => {
  const root = join(__dirname, "..", "..");
  const clientPackageNameList = readdirSync(join(root, "clients")).filter((f) => f.startsWith("client-"));

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
  const Client: any = Object.entries(namespace).find(([k, v]) => k.match(/[A-Z][A-Za-z0-9]+Client$/))![1];

  const ruleSet = service.traits["smithy.rules#endpointRuleSet"];
  const defaultEndpointResolver = (endpointParams: EndpointParams) => resolveEndpoint(ruleSet, { endpointParams });

  if (testCases) {
    for (const testCase of testCases) {
      const { documentation, params = {}, expect: expectation, operationInputs } = testCase;

      params.serviceId = serviceId;

      let test = it;

      const focus = [] as string[];
      const skip = ["WriteGetObjectResponse"] as string[];

      if ((!focus.length || focus.includes(documentation!)) && !skip.includes(documentation!)) {
        test = it;
      } else {
        test = it.skip;
      }

      if (
        "endpoint" in expectation &&
        expectation.endpoint.url === "https://s3.us-west-2.amazonaws.com/example.com%23"
      ) {
        // todo(endpoints): fix upstream in endpoint resolver customization
        test = it.skip;
      }

      if ("endpoint" in expectation && (operationInputs ?? []).find((oi) => skip.includes(oi?.operationName))) {
        // todo(endpoints): hostPrefix not expressed correctly in test case, do not change
        // todo(endpoints): behavior to match the WriteGetObjectResponse test urls.
        test = it.skip;
      }

      test(documentation || "undocumented testcase", async () => {
        if ("endpoint" in expectation) {
          const { endpoint } = expectation;
          if (operationInputs) {
            for (const operationInput of operationInputs) {
              const { operationName, operationParams = {}, clientParams, builtInParams = {} } = operationInput;
              if (skip.includes(operationName)) {
                continue;
              }
              const Command = namespace[`${operationName}Command`] as any;
              const endpointParams = await resolveParams(
                operationParams,
                Command,
                mapClientConfig({
                  ...params,
                  ...builtInParams,
                })
              );
              const observed = await useClient(Client, Command, endpointParams, operationParams);
              // const observed = defaultEndpointResolver(endpointParams as EndpointParams);
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
              const Command = namespace[`${operationName}Command`] as any;
              const endpointParams = await resolveParams(
                operationParams,
                Command,
                mapClientConfig({
                  ...params,
                })
              );
              const observedError = await useClient(Client, Command, endpointParams, operationParams).catch(pass);
              // const observedError = await (async () => defaultEndpointResolver(endpointParams as any))().catch(pass);
              expect(observedError).not.toBeUndefined();
              expect(observedError?.url).toBeUndefined();

              if (
                observedError.toString() ===
                "Error: Invalid ARN: arn:aws:s3:us-west-2:123456789012: was an invalid ARN."
              ) {
                // This is a functionally equivalent error thrown by the endpoints library instead of the ruleset.
                expect(normalizeQuotes(error)).toEqual(
                  "Invalid ARN: arn:aws:s3:us-west-2:123456789012: was not a valid ARN"
                );
              } else {
                expect(normalizeQuotes(String(observedError))).toContain(normalizeQuotes(error));
              }
            }
          } else {
            const endpointParams = await resolveParams({}, {}, params).catch(pass);
            // no way to call an operation if operationName not present in operationInput.
            // we can only test this with the endpoint resolver and not the client.
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
    const expectedUrl = new URL(url);

    const expectedUrlWithoutPort = expectedUrl.port
      ? expectedUrl.href.replace(`:${expectedUrl.port}`, "")
      : expectedUrl.href;
    const observedUrlWithoutPort = observed.url.port
      ? observed.url.href.replace(`:${observed.url.port}`, "")
      : observed.url.href;

    expect(observedUrlWithoutPort).toContain(expectedUrlWithoutPort);
    if (expectedUrl.port) {
      expect(observed.url.port).toEqual(expectedUrl.port);
    }
  }
  if (headers) {
    expect(observed.headers).toEqual(headers);
  }
  if (authSchemes) {
    expect(observed.properties?.authSchemes).toEqual(authSchemes);
  }
}

/**
 * Makes a client operation return its EndpointV2 instead of making a request.
 */
const requestInterceptorMiddleware = (next: any, context: any) => async (args: any) => {
  const { request } = args;
  if (HttpRequest.isInstance(request)) {
    const endpoint = context.endpointV2;
    return {
      response: {
        statusCode: 200,
      },
      output: {
        ...endpoint,
        url: {
          protocol: request.protocol,
          hostname: request.hostname,
          pathname: request.path,
          href: `${request.protocol}//${request.hostname}${request.path}`,
          port: request.port ? String(request.port) : undefined,
        } as URL,
      },
    } as {
      output: EndpointV2;
    };
  }
  throw new Error("Request must not continue beyond serialization step.");
};
const requestInterceptorMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "requestInterceptorMiddleware",
  override: true,
  toMiddleware: "serializerMiddleware",
  relation: "after",
};

const paramMap = {
  Region: "region",
  "AWS::Region": "region",
  AccountIdEndpointMode: "accountIdEndpointMode",
  UseFIPS: "useFipsEndpoint",
  UseDualStack: "useDualstackEndpoint",
  ForcePathStyle: "forcePathStyle",
  Accelerate: "useAccelerateEndpoint",
  DisableMRAP: "disableMultiregionAccessPoints",
  DisableMultiRegionAccessPoints: "disableMultiregionAccessPoints",
  UseArnRegion: "useArnRegion",
  Endpoint: "endpoint",
  UseGlobalEndpoint: "useGlobalEndpoint",
  DisableS3ExpressSessionAuth: "disableS3ExpressSessionAuth",
};

async function useClient(Client: any, Command: any, clientConfig: any, input: any): Promise<EndpointV2> {
  const client = new Client({
    ...mapClientConfig(clientConfig),
    // logger: console,
  });
  client.middlewareStack.addRelativeTo(requestInterceptorMiddleware, requestInterceptorMiddlewareOptions);
  const command = new Command(input);
  const observed: EndpointV2 = await client.send(command);
  return observed;
}

function mapClientConfig(params: any) {
  const out = {
    credentials: {
      accessKeyId: "ENDPOINTS_TEST",
      secretAccessKey: "ENDPOINTS_TEST",
      accountId: undefined,
    },
  } as any;
  for (const [k, v] of Object.entries(params)) {
    if (k === "AccountId") {
      out.credentials.accountId = v;
    } else {
      out[paramMap[k as keyof typeof paramMap] ?? k] = v;
    }
  }
  return out;
}
