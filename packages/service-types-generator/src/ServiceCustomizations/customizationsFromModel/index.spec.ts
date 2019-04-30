import { customizationsFromModel } from "./index";
import { metadata } from "../../shapes.fixture";
import {
  TreeModel,
  MiddlewareCustomizationDefinition
} from "@aws-sdk/build-types";

const model: TreeModel = {
  name: "Foo Service",
  documentation: "A service which foos",
  metadata: {
    ...metadata,
    signatureVersion: "none"
  },
  operations: {},
  shapes: {}
};

const standardConfigurationProperties = [
  "endpoint",
  "endpointProvider",
  "maxRedirects",
  "maxRetries",
  "region",
  "sslEnabled",
  "base64Encoder",
  "base64Decoder",
  "utf8Encoder",
  "utf8Decoder",
  "serializer",
  "parser",
  "streamCollector"
];

const signatureConfigurationProperties = [
  "credentials",
  "sha256",
  "signingName",
  "signer"
];

describe("customizationsFromModel", () => {
  for (const property of standardConfigurationProperties) {
    it(`should return a property definition for ${property}`, () => {
      const {
        client: [config]
      } = customizationsFromModel(model, "universal");
      expect(config).toHaveProperty("configuration");
      expect((config as any).configuration).toHaveProperty(property);
    });
  }

  for (const property of signatureConfigurationProperties) {
    it(`should return a property definition for ${property} if the model uses request signatures`, () => {
      const v4Model = {
        ...model,
        metadata
      };
      const {
        client: [_0, _1, _2, _3, config]
      } = customizationsFromModel(v4Model, "universal");
      expect(config).toHaveProperty("configuration");
      expect((config as any).configuration).toHaveProperty(property);
    });
  }

  it(`should return a property definition for user-agent header`, () => {
    let { client } = customizationsFromModel(model, "node");
    let [customization, ...rest] = client.reverse();
    expect(customization).toHaveProperty("type");
    expect(customization.type).toBe("Middleware");
    expect(
      (customization as MiddlewareCustomizationDefinition).expression
    ).toContain("'User-Agent':");

    client = customizationsFromModel(model, "browser").client;
    [customization, ...rest] = client.reverse();
    expect(customization).toHaveProperty("type");
    expect(customization.type).toBe("Middleware");
    expect(
      (customization as MiddlewareCustomizationDefinition).expression
    ).toContain("'X-Amz-User-Agent':");
  });
});
