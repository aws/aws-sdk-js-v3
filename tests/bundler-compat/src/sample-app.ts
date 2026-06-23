// @aws-sdk/client-s3, @aws-sdk/client-dynamodb, @aws-sdk/lib-dynamodb, @aws-sdk/lib-storage
export { S3, S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
export { DynamoDB } from "@aws-sdk/client-dynamodb";
export { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
export { Upload } from "@aws-sdk/lib-storage";

// @smithy/types
export type { Provider } from "@smithy/types";

// @aws-sdk/config submodules
export type { AwsCredentialIdentity } from "@aws-sdk/config/credentials";
export { NoOpLogger, LogLevel } from "@aws-sdk/config/logger";
export type {
  AwsRestJsonProtocol,
  AwsRestXmlProtocol,
  AwsJson1_0Protocol,
  AwsJson1_1Protocol,
  AwsQueryProtocol,
  AwsSmithyRpcV2CborProtocol,
} from "@aws-sdk/config/protocol";
export {
  FetchHttpHandler,
  type FetchHttpHandlerOptions,
  NodeHttpHandler,
  type NodeHttpHandlerOptions,
  NodeHttp2Handler,
  type NodeHttp2HandlerOptions,
} from "@aws-sdk/config/requestHandler";
export { RETRY_MODES } from "@aws-sdk/config/retryStrategy";
export type { AssertiveClient } from "@aws-sdk/config/typecheck";

// @aws-sdk/core submodules
export { emitWarningIfUnsupportedVersion } from "@aws-sdk/core/client";
export { DEFAULT_ACCOUNT_ID_ENDPOINT_MODE } from "@aws-sdk/core/account-id-endpoint";
export { ARN } from "@aws-sdk/core/util";

// @aws-sdk/middleware-sdk-s3 submodules
export { checkContentLengthHeader } from "@aws-sdk/middleware-sdk-s3/s3";
export { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3/s3-control";

// @aws-sdk/nested-clients submodules
export type { SSOOIDCExtensionConfiguration } from "@aws-sdk/nested-clients/sso-oidc";
export type { STSExtensionConfiguration } from "@aws-sdk/nested-clients/sts";
export type { SigninExtensionConfiguration } from "@aws-sdk/nested-clients/signin";
export type { CognitoIdentityExtensionConfiguration } from "@aws-sdk/nested-clients/cognito-identity";
export type { SSOExtensionConfiguration } from "@aws-sdk/nested-clients/sso";
