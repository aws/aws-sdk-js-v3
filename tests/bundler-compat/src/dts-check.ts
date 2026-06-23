/**
 * DTS inlining test.
 *
 * Exercises tsup's rollup-plugin-dts type resolution across
 * @aws-sdk/core and @aws-sdk/config submodule carriers.
 * Mimics a library that re-exports SDK infrastructure types.
 *
 * This is the regression test for #8112.
 */

// @aws-sdk/core/client
export { emitWarningIfUnsupportedVersion, setCredentialFeature, setFeature } from "@aws-sdk/core/client";
export type { HostHeaderInputConfig } from "@aws-sdk/core/client";

// @aws-sdk/core/httpAuthSchemes — the primary regression target
export { getBearerTokenEnvKey } from "@aws-sdk/core/httpAuthSchemes";
export type { AwsSdkSigV4AuthInputConfig, AwsSdkSigV4AAuthInputConfig } from "@aws-sdk/core/httpAuthSchemes";

// @aws-sdk/core/protocols
export { AwsSmithyRpcV2CborProtocol } from "@aws-sdk/core/protocols";

// @aws-sdk/core/account-id-endpoint
export {
  DEFAULT_ACCOUNT_ID_ENDPOINT_MODE,
  resolveAccountIdEndpointModeConfig,
} from "@aws-sdk/core/account-id-endpoint";
export type { AccountIdEndpointMode } from "@aws-sdk/core/account-id-endpoint";

// @aws-sdk/core/util
export { formatUrl } from "@aws-sdk/core/util";
export type { ARN } from "@aws-sdk/core/util";

// @aws-sdk/config — one representative from each submodule
export type { AwsCredentialIdentity } from "@aws-sdk/config/credentials";
export { NoOpLogger } from "@aws-sdk/config/logger";
export type { AwsRestJsonProtocol } from "@aws-sdk/config/protocol";
export { FetchHttpHandler } from "@aws-sdk/config/requestHandler";
export { RETRY_MODES } from "@aws-sdk/config/retryStrategy";
export type { AssertiveClient } from "@aws-sdk/config/typecheck";
