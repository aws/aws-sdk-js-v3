// smithy-typescript generated code
import { AwsSdkSigV4Signer } from "@aws-sdk/core/httpAuthSchemes";
import { AwsQueryProtocol } from "@aws-sdk/core/protocols";
import { NoOpLogger } from "@smithy/core/client";
import { parseUrl } from "@smithy/core/protocols";
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@smithy/core/serde";
import type { IdentityProviderConfig } from "@smithy/types";

import { defaultQueryProtocolHttpAuthSchemeProvider } from "./auth/httpAuthSchemeProvider";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import type { QueryProtocolClientConfig } from "./QueryProtocolClient";
import { errorTypeRegistries } from "./schemas/schemas_0";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QueryProtocolClientConfig) => {
  return {
    apiVersion: "2020-01-08",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
    extensions: config?.extensions ?? [],
    httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultQueryProtocolHttpAuthSchemeProvider,
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("aws.auth#sigv4"),
        signer: new AwsSdkSigV4Signer(),
      },
    ],
    logger: config?.logger ?? new NoOpLogger(),
    protocol: config?.protocol ?? AwsQueryProtocol,
    protocolSettings: config?.protocolSettings ?? {
      defaultNamespace: "aws.protocoltests.query",
      errorTypeRegistries,
      xmlNamespace: "https://example.com/",
      version: "2020-01-08",
      serviceTarget: "AwsQuery",
    },
    serviceId: config?.serviceId ?? "Query Protocol",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
  };
};
