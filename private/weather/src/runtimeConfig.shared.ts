// smithy-typescript generated code
import { AwsRestJsonProtocol } from "@aws-sdk/core/protocols";
import { HttpApiKeyAuthSigner, HttpBearerAuthSigner, NoAuthSigner } from "@smithy/core";
import { Sha256 } from "@smithy/core/checksum";
import { NoOpLogger } from "@smithy/core/client";
import { parseUrl } from "@smithy/core/protocols";
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@smithy/core/serde";
import { SigV4Signer } from "@smithy/experimental-identity-and-auth";
import type { IdentityProviderConfig } from "@smithy/types";

import { defaultWeatherHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { errorTypeRegistries } from "./schemas/schemas_0";
import type { WeatherClientConfig } from "./WeatherClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WeatherClientConfig) => {
  return {
    apiVersion: "2006-03-01",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultWeatherHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new SigV4Signer(),
      },
      {
        schemeId: "smithy.api#httpApiKeyAuth",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("smithy.api#httpApiKeyAuth"),
        signer: new HttpApiKeyAuthSigner(),
      },
      {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("smithy.api#httpBearerAuth"),
        signer: new HttpBearerAuthSigner(),
      },
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new NoAuthSigner(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? AwsRestJsonProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "example.weather",
      errorTypeRegistries,
      version: "2006-03-01",
      serviceTarget: "Weather",
    },
    sha256: config?.sha256 ?? Sha256,
    signingName: config?.signingName ?? "weather",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
