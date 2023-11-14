// smithy-typescript generated code
// @ts-ignore: package.json will be imported from dist folders
import packageInfo from "../package.json"; // eslint-disable-line

import { decorateDefaultCredentialProvider } from "@aws-sdk/client-sts";
import { emitWarningIfUnsupportedVersion as awsCheckVersion } from "@aws-sdk/core";
import { defaultProvider as credentialDefaultProvider } from "@aws-sdk/credential-provider-node";
import { nodeProvider } from "@aws-sdk/token-providers";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { HttpApiKeyAuthSigner, HttpBearerAuthSigner, NoAuthSigner } from "@smithy/core";
import { SigV4Signer } from "@smithy/experimental-identity-and-auth";
import { Hash } from "@smithy/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@smithy/middleware-retry";
import { loadConfig as loadNodeConfig } from "@smithy/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@smithy/node-http-handler";
import { IdentityProviderConfig } from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-node";
import { DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { WeatherClientConfig } from "./WeatherClient";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@smithy/smithy-client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WeatherClientConfig) => {
  emitWarningIfUnsupportedVersion(process.version);
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getSharedRuntimeConfig(config);
  awsCheckVersion(process.version);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "node",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider:
      config?.defaultUserAgentProvider ?? defaultUserAgent({ clientVersion: packageInfo.version }),
    httpAuthSchemes: config?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("aws.auth#sigv4") ||
          (async (idProps) =>
            await decorateDefaultCredentialProvider(credentialDefaultProvider)(idProps?.__config || {})()),
        signer: new SigV4Signer(),
      },
      {
        schemeId: "smithy.api#httpApiKeyAuth",
        identityProvider: (ipc: IdentityProviderConfig) => ipc.getIdentityProvider("smithy.api#httpApiKeyAuth"),
        signer: new HttpApiKeyAuthSigner(),
      },
      {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("smithy.api#httpBearerAuth") ||
          (async (idProps) => await nodeProvider(idProps?.__config || {})(idProps)),
        signer: new HttpBearerAuthSigner(),
      },
      {
        schemeId: "smithy.api#noAuth",
        identityProvider: (ipc: IdentityProviderConfig) =>
          ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new NoAuthSigner(),
      },
    ],
    maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
    requestHandler: config?.requestHandler ?? new RequestHandler(defaultConfigProvider),
    retryMode:
      config?.retryMode ??
      loadNodeConfig({
        ...NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
      }),
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    streamCollector: config?.streamCollector ?? streamCollector,
  };
};
