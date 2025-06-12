import { resolveParams } from "@smithy/middleware-endpoint";
import { EndpointV2, RelativeMiddlewareOptions } from "@smithy/types";
import { EndpointParams, resolveEndpoint } from "@smithy/util-endpoints";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

import { EndpointExpectation, ServiceModel, ServiceNamespace } from "./integration-test-types";
import { HttpRequest } from "@smithy/protocol-http";

describe("client list", () => {
  const root = join(__dirname, "..", "..");
  const clientPackageNameList = readdirSync(join(root, "clients")).filter((f) => f.startsWith("client"));

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
      if (Client.name === "DynamoDBClient") {
        test = it.skip;
      } else if (Client.name === "S3ControlClient") {
        test = it.skip;
      } else if (Client.name === "S3Client") {
        test = it.skip;
      }

      test(documentation || "undocumented testcase", async () => {
        if ("endpoint" in expectation) {
          const { endpoint } = expectation;
          if (operationInputs) {
            for (const operationInput of operationInputs) {
              const { operationName, operationParams = {}, clientParams, builtInParams = {} } = operationInput;

              const Command = namespace[`${operationName}Command`] as any;
              const endpointParams = await resolveParams(
                operationParams,
                Command,
                mapClientConfig({
                  ...params,
                  ...builtInParams,
                })
              );

              console.log({
                client: Client.name,
                command: Command.name,
                config: mapClientConfig(params),
                params: operationParams,
              });
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
    // expect(Math.abs(observed.url.href.length - url.length)).toBeLessThan(2);
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
    logger: console,
    credentials: {
      accessKeyId: "ENDPOINTS_TEST",
      secretAccessKey: "ENDPOINTS_TEST",
    },
  });
  client.middlewareStack.addRelativeTo(requestInterceptorMiddleware, requestInterceptorMiddlewareOptions);
  const command = new Command(input);
  const observed: EndpointV2 = await client.send(command);
  return observed;
}

function mapClientConfig(params: any) {
  const out = {} as any;
  for (const [k, v] of Object.entries(params)) {
    out[paramMap[k as keyof typeof paramMap] ?? k] = v;
  }
  return out;
}
