// @ts-nocheck 
/* eslint-disable */
// ../../clients/client-sso-oidc/src/SSOOIDCClient.ts
import {
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig } from "@smithy/middleware-retry";
import {
  Client as __Client
} from "@smithy/smithy-client";

// ../../clients/client-sso-oidc/src/endpoint/EndpointParameters.ts
var resolveClientEndpointParameters = (options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "awsssooidc"
  };
};

// ../../clients/client-sso-oidc/package.json
var package_default = { version: "3.387.0" };

// ../../clients/client-sso-oidc/src/runtimeConfig.ts
import { Sha256 } from "@aws-crypto/sha256-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { DEFAULT_USE_DUALSTACK_ENDPOINT, DEFAULT_USE_FIPS_ENDPOINT } from "@smithy/config-resolver";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";
import { invalidProvider } from "@smithy/invalid-dependency";
import { calculateBodyLength } from "@smithy/util-body-length-browser";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/util-retry";

// ../../clients/client-sso-oidc/src/runtimeConfig.shared.ts
import { NoOpLogger } from "@smithy/smithy-client";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

// ../../clients/client-sso-oidc/src/endpoint/endpointResolver.ts
import { resolveEndpoint } from "@aws-sdk/util-endpoints";

// ../../clients/client-sso-oidc/src/endpoint/ruleset.ts
var p = "required";
var q = "fn";
var r = "argv";
var s = "ref";
var a = "PartitionResult";
var b = "tree";
var c = "error";
var d = "endpoint";
var e = { [p]: false, "type": "String" };
var f = { [p]: true, "default": false, "type": "Boolean" };
var g = { [s]: "Endpoint" };
var h = { [q]: "booleanEquals", [r]: [{ [s]: "UseFIPS" }, true] };
var i = { [q]: "booleanEquals", [r]: [{ [s]: "UseDualStack" }, true] };
var j = {};
var k = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsFIPS"] }] };
var l = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsDualStack"] }] };
var m = [g];
var n = [h];
var o = [i];
var _data = { version: "1.0", parameters: { Region: e, UseDualStack: f, UseFIPS: f, Endpoint: e }, rules: [{ conditions: [{ [q]: "aws.partition", [r]: [{ [s]: "Region" }], assign: a }], type: b, rules: [{ conditions: [{ [q]: "isSet", [r]: m }, { [q]: "parseURL", [r]: m, assign: "url" }], type: b, rules: [{ conditions: n, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c }, { type: b, rules: [{ conditions: o, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c }, { endpoint: { url: g, properties: j, headers: j }, type: d }] }] }, { conditions: [h, i], type: b, rules: [{ conditions: [k, l], type: b, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c }] }, { conditions: n, type: b, rules: [{ conditions: [k], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c }] }, { conditions: o, type: b, rules: [{ conditions: [l], type: b, rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c }] }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] };
var ruleSet = _data;

// ../../clients/client-sso-oidc/src/endpoint/endpointResolver.ts
var defaultEndpointResolver = (endpointParams, context = {}) => {
  return resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context.logger
  });
};

// ../../clients/client-sso-oidc/src/runtimeConfig.shared.ts
var getRuntimeConfig = (config) => ({
  apiVersion: "2019-06-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "SSO OIDC",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf8,
  utf8Encoder: config?.utf8Encoder ?? toUtf8
});

// ../../clients/client-sso-oidc/src/runtimeConfig.ts
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-browser";
var getRuntimeConfig2 = (config) => {
  const defaultsMode = resolveDefaultsModeConfig(config);
  const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
  const clientSharedValues = getRuntimeConfig(config);
  return {
    ...clientSharedValues,
    ...config,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
    defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config?.region ?? invalidProvider("Region is missing"),
    requestHandler: config?.requestHandler ?? new RequestHandler(defaultConfigProvider),
    retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config?.sha256 ?? Sha256,
    streamCollector: config?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
};

// ../../clients/client-sso-oidc/src/SSOOIDCClient.ts
var SSOOIDCClient = class extends __Client {
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }
  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy() {
    super.destroy();
  }
};

// ../../clients/client-sso-oidc/src/SSOOIDC.ts
import { createAggregatedClient } from "@smithy/smithy-client";

// ../../clients/client-sso-oidc/src/commands/CreateTokenCommand.ts
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import {
  MetadataBearer as __MetadataBearer
} from "@smithy/types";

// ../../clients/client-sso-oidc/src/protocols/Aws_restJson1.ts
import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  take,
  withBaseException
} from "@smithy/smithy-client";

// ../../clients/client-sso-oidc/src/models/SSOOIDCServiceException.ts
import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions
} from "@smithy/smithy-client";
var SSOOIDCServiceException = class _SSOOIDCServiceException extends __ServiceException {
  /**
   * @internal
   */
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
  }
};

// ../../clients/client-sso-oidc/src/models/models_0.ts
var AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts
    });
    this.name = "AccessDeniedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _AccessDeniedException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "AuthorizationPendingException",
      $fault: "client",
      ...opts
    });
    this.name = "AuthorizationPendingException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "ExpiredTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts
    });
    this.name = "InternalServerException";
    this.$fault = "server";
    Object.setPrototypeOf(this, _InternalServerException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidGrantException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidGrantException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidGrantException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRequestException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidRequestException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidScopeException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidScopeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidScopeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "SlowDownException",
      $fault: "client",
      ...opts
    });
    this.name = "SlowDownException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _SlowDownException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts
    });
    this.name = "UnauthorizedClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "UnsupportedGrantTypeException",
      $fault: "client",
      ...opts
    });
    this.name = "UnsupportedGrantTypeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
var InvalidClientMetadataException = class _InvalidClientMetadataException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidClientMetadataException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidClientMetadataException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidClientMetadataException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};

// ../../clients/client-sso-oidc/src/protocols/Aws_restJson1.ts
var se_CreateTokenCommand = async (input, context) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers = {
    "content-type": "application/json"
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/token`;
  let body;
  body = JSON.stringify(
    take(input, {
      clientId: [],
      clientSecret: [],
      code: [],
      deviceCode: [],
      grantType: [],
      redirectUri: [],
      refreshToken: [],
      scope: (_) => _json(_)
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};
var se_RegisterClientCommand = async (input, context) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers = {
    "content-type": "application/json"
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/client/register`;
  let body;
  body = JSON.stringify(
    take(input, {
      clientName: [],
      clientType: [],
      scopes: (_) => _json(_)
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};
var se_StartDeviceAuthorizationCommand = async (input, context) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers = {
    "content-type": "application/json"
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/device_authorization`;
  let body;
  body = JSON.stringify(
    take(input, {
      clientId: [],
      clientSecret: [],
      startUrl: []
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};
var de_CreateTokenCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTokenCommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata(output)
  });
  const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessToken: __expectString,
    expiresIn: __expectInt32,
    idToken: __expectString,
    refreshToken: __expectString,
    tokenType: __expectString
  });
  Object.assign(contents, doc);
  return contents;
};
var de_CreateTokenCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssooidc#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationPendingException":
    case "com.amazonaws.ssooidc#AuthorizationPendingException":
      throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
    case "ExpiredTokenException":
    case "com.amazonaws.ssooidc#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidClientException":
    case "com.amazonaws.ssooidc#InvalidClientException":
      throw await de_InvalidClientExceptionRes(parsedOutput, context);
    case "InvalidGrantException":
    case "com.amazonaws.ssooidc#InvalidGrantException":
      throw await de_InvalidGrantExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidScopeException":
    case "com.amazonaws.ssooidc#InvalidScopeException":
      throw await de_InvalidScopeExceptionRes(parsedOutput, context);
    case "SlowDownException":
    case "com.amazonaws.ssooidc#SlowDownException":
      throw await de_SlowDownExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.ssooidc#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    case "UnsupportedGrantTypeException":
    case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
      throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
};
var de_RegisterClientCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterClientCommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata(output)
  });
  const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizationEndpoint: __expectString,
    clientId: __expectString,
    clientIdIssuedAt: __expectLong,
    clientSecret: __expectString,
    clientSecretExpiresAt: __expectLong,
    tokenEndpoint: __expectString
  });
  Object.assign(contents, doc);
  return contents;
};
var de_RegisterClientCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidClientMetadataException":
    case "com.amazonaws.ssooidc#InvalidClientMetadataException":
      throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidScopeException":
    case "com.amazonaws.ssooidc#InvalidScopeException":
      throw await de_InvalidScopeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
};
var de_StartDeviceAuthorizationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartDeviceAuthorizationCommandError(output, context);
  }
  const contents = map({
    $metadata: deserializeMetadata(output)
  });
  const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deviceCode: __expectString,
    expiresIn: __expectInt32,
    interval: __expectInt32,
    userCode: __expectString,
    verificationUri: __expectString,
    verificationUriComplete: __expectString
  });
  Object.assign(contents, doc);
  return contents;
};
var de_StartDeviceAuthorizationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidClientException":
    case "com.amazonaws.ssooidc#InvalidClientException":
      throw await de_InvalidClientExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "SlowDownException":
    case "com.amazonaws.ssooidc#SlowDownException":
      throw await de_SlowDownExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.ssooidc#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
};
var throwDefaultError = withBaseException(SSOOIDCServiceException);
var de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new AuthorizationPendingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_InternalServerExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidClientExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidClientMetadataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidGrantException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidScopeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_SlowDownExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new SlowDownException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
  const contents = map({});
  const data = parsedOutput.body;
  const doc = take(data, {
    error: __expectString,
    error_description: __expectString
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedGrantTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return __decorateServiceException(exception, parsedOutput.body);
};
var deserializeMetadata = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
var parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
});
var parseErrorBody = async (errorBody, context) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};
var loadRestJsonErrorCode = (output, data) => {
  const findKey = (object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase());
  const sanitizeErrorCode = (rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
};

// ../../clients/client-sso-oidc/src/commands/CreateTokenCommand.ts
var CreateTokenCommand = class _CreateTokenCommand extends $Command {
  /**
   * @public
   */
  constructor(input) {
    super();
    this.input = input;
  }
  // Start section: command_properties
  // End section: command_properties
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, _CreateTokenCommand.getEndpointParameterInstructions()));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "CreateTokenCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request) => requestHandler.handle(request.request, options || {}),
      handlerExecutionContext
    );
  }
  /**
   * @internal
   */
  serialize(input, context) {
    return se_CreateTokenCommand(input, context);
  }
  /**
   * @internal
   */
  deserialize(output, context) {
    return de_CreateTokenCommand(output, context);
  }
  // Start section: command_body_extra
  // End section: command_body_extra
};

// ../../clients/client-sso-oidc/src/commands/RegisterClientCommand.ts
import { getEndpointPlugin as getEndpointPlugin2 } from "@smithy/middleware-endpoint";
import { getSerdePlugin as getSerdePlugin2 } from "@smithy/middleware-serde";
import { Command as $Command2 } from "@smithy/smithy-client";
import {
  MetadataBearer as __MetadataBearer2
} from "@smithy/types";
var RegisterClientCommand = class _RegisterClientCommand extends $Command2 {
  /**
   * @public
   */
  constructor(input) {
    super();
    this.input = input;
  }
  // Start section: command_properties
  // End section: command_properties
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin2(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin2(configuration, _RegisterClientCommand.getEndpointParameterInstructions())
    );
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "RegisterClientCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request) => requestHandler.handle(request.request, options || {}),
      handlerExecutionContext
    );
  }
  /**
   * @internal
   */
  serialize(input, context) {
    return se_RegisterClientCommand(input, context);
  }
  /**
   * @internal
   */
  deserialize(output, context) {
    return de_RegisterClientCommand(output, context);
  }
  // Start section: command_body_extra
  // End section: command_body_extra
};

// ../../clients/client-sso-oidc/src/commands/StartDeviceAuthorizationCommand.ts
import { getEndpointPlugin as getEndpointPlugin3 } from "@smithy/middleware-endpoint";
import { getSerdePlugin as getSerdePlugin3 } from "@smithy/middleware-serde";
import { Command as $Command3 } from "@smithy/smithy-client";
import {
  MetadataBearer as __MetadataBearer3
} from "@smithy/types";
var StartDeviceAuthorizationCommand = class _StartDeviceAuthorizationCommand extends $Command3 {
  /**
   * @public
   */
  constructor(input) {
    super();
    this.input = input;
  }
  // Start section: command_properties
  // End section: command_properties
  static getEndpointParameterInstructions() {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin3(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin3(configuration, _StartDeviceAuthorizationCommand.getEndpointParameterInstructions())
    );
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "StartDeviceAuthorizationCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_) => _,
      outputFilterSensitiveLog: (_) => _
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request) => requestHandler.handle(request.request, options || {}),
      handlerExecutionContext
    );
  }
  /**
   * @internal
   */
  serialize(input, context) {
    return se_StartDeviceAuthorizationCommand(input, context);
  }
  /**
   * @internal
   */
  deserialize(output, context) {
    return de_StartDeviceAuthorizationCommand(output, context);
  }
  // Start section: command_body_extra
  // End section: command_body_extra
};

// ../../clients/client-sso-oidc/src/SSOOIDC.ts
var commands = {
  CreateTokenCommand,
  RegisterClientCommand,
  StartDeviceAuthorizationCommand
};
var SSOOIDC = class extends SSOOIDCClient {
};
createAggregatedClient(commands, SSOOIDC);
export {
  AccessDeniedException,
  AuthorizationPendingException,
  CreateTokenCommand,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidRequestException,
  InvalidScopeException,
  SSOOIDCClient,
  SlowDownException,
  UnauthorizedClientException,
  UnsupportedGrantTypeException
};
