// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  CustomEndpointsInputConfig,
  CustomEndpointsResolvedConfig,
  resolveCustomEndpointsConfig,
} from "@smithy/config-resolver";
import { DefaultIdentityProviderConfig, getHttpAuthSchemePlugin, getHttpSigningPlugin } from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultRpcV2ProtocolHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { EmptyInputOutputCommandInput, EmptyInputOutputCommandOutput } from "./commands/EmptyInputOutputCommand";
import { Float16CommandInput, Float16CommandOutput } from "./commands/Float16Command";
import { FractionalSecondsCommandInput, FractionalSecondsCommandOutput } from "./commands/FractionalSecondsCommand";
import { GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput } from "./commands/GreetingWithErrorsCommand";
import { NoInputOutputCommandInput, NoInputOutputCommandOutput } from "./commands/NoInputOutputCommand";
import {
  OperationWithDefaultsCommandInput,
  OperationWithDefaultsCommandOutput,
} from "./commands/OperationWithDefaultsCommand";
import {
  OptionalInputOutputCommandInput,
  OptionalInputOutputCommandOutput,
} from "./commands/OptionalInputOutputCommand";
import { RecursiveShapesCommandInput, RecursiveShapesCommandOutput } from "./commands/RecursiveShapesCommand";
import { RpcV2CborDenseMapsCommandInput, RpcV2CborDenseMapsCommandOutput } from "./commands/RpcV2CborDenseMapsCommand";
import { RpcV2CborListsCommandInput, RpcV2CborListsCommandOutput } from "./commands/RpcV2CborListsCommand";
import {
  RpcV2CborSparseMapsCommandInput,
  RpcV2CborSparseMapsCommandOutput,
} from "./commands/RpcV2CborSparseMapsCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import {
  SparseNullsOperationCommandInput,
  SparseNullsOperationCommandOutput,
} from "./commands/SparseNullsOperationCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | EmptyInputOutputCommandInput
  | Float16CommandInput
  | FractionalSecondsCommandInput
  | GreetingWithErrorsCommandInput
  | NoInputOutputCommandInput
  | OperationWithDefaultsCommandInput
  | OptionalInputOutputCommandInput
  | RecursiveShapesCommandInput
  | RpcV2CborDenseMapsCommandInput
  | RpcV2CborListsCommandInput
  | RpcV2CborSparseMapsCommandInput
  | SimpleScalarPropertiesCommandInput
  | SparseNullsOperationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | EmptyInputOutputCommandOutput
  | Float16CommandOutput
  | FractionalSecondsCommandOutput
  | GreetingWithErrorsCommandOutput
  | NoInputOutputCommandOutput
  | OperationWithDefaultsCommandOutput
  | OptionalInputOutputCommandOutput
  | RecursiveShapesCommandOutput
  | RpcV2CborDenseMapsCommandOutput
  | RpcV2CborListsCommandOutput
  | RpcV2CborSparseMapsCommandOutput
  | SimpleScalarPropertiesCommandOutput
  | SparseNullsOperationCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type RpcV2ProtocolClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  CustomEndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  HttpAuthSchemeInputConfig;
/**
 * @public
 *
 *  The configuration interface of RpcV2ProtocolClient class constructor that set the region, credentials and other options.
 */
export interface RpcV2ProtocolClientConfig extends RpcV2ProtocolClientConfigType {}

/**
 * @public
 */
export type RpcV2ProtocolClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  CustomEndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  HttpAuthSchemeResolvedConfig;
/**
 * @public
 *
 *  The resolved configuration interface of RpcV2ProtocolClient class. This is resolved and normalized from the {@link RpcV2ProtocolClientConfig | constructor configuration interface}.
 */
export interface RpcV2ProtocolClientResolvedConfig extends RpcV2ProtocolClientResolvedConfigType {}

/**
 * @public
 */
export class RpcV2ProtocolClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RpcV2ProtocolClientResolvedConfig
> {
  /**
   * The resolved configuration of RpcV2ProtocolClient class. This is resolved and normalized from the {@link RpcV2ProtocolClientConfig | constructor configuration interface}.
   */
  readonly config: RpcV2ProtocolClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RpcV2ProtocolClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveUserAgentConfig(_config_0);
    const _config_2 = resolveCustomEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveHttpAuthSchemeConfig(_config_4);
    const _config_6 = resolveRuntimeExtensions(_config_5, configuration?.extensions || []);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemePlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultRpcV2ProtocolHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RpcV2ProtocolClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({}),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
