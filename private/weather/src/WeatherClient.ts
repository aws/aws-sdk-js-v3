// smithy-typescript generated code
import { OnlyCustomAuthCommandInput, OnlyCustomAuthCommandOutput } from "./commands/OnlyCustomAuthCommand";
import {
  OnlyCustomAuthOptionalCommandInput,
  OnlyCustomAuthOptionalCommandOutput,
} from "./commands/OnlyCustomAuthOptionalCommand";
import {
  OnlyHttpApiKeyAndBearerAuthCommandInput,
  OnlyHttpApiKeyAndBearerAuthCommandOutput,
} from "./commands/OnlyHttpApiKeyAndBearerAuthCommand";
import {
  OnlyHttpApiKeyAndBearerAuthReversedCommandInput,
  OnlyHttpApiKeyAndBearerAuthReversedCommandOutput,
} from "./commands/OnlyHttpApiKeyAndBearerAuthReversedCommand";
import { OnlyHttpApiKeyAuthCommandInput, OnlyHttpApiKeyAuthCommandOutput } from "./commands/OnlyHttpApiKeyAuthCommand";
import {
  OnlyHttpApiKeyAuthOptionalCommandInput,
  OnlyHttpApiKeyAuthOptionalCommandOutput,
} from "./commands/OnlyHttpApiKeyAuthOptionalCommand";
import { OnlyHttpBearerAuthCommandInput, OnlyHttpBearerAuthCommandOutput } from "./commands/OnlyHttpBearerAuthCommand";
import {
  OnlyHttpBearerAuthOptionalCommandInput,
  OnlyHttpBearerAuthOptionalCommandOutput,
} from "./commands/OnlyHttpBearerAuthOptionalCommand";
import { OnlySigv4AuthCommandInput, OnlySigv4AuthCommandOutput } from "./commands/OnlySigv4AuthCommand";
import {
  OnlySigv4AuthOptionalCommandInput,
  OnlySigv4AuthOptionalCommandOutput,
} from "./commands/OnlySigv4AuthOptionalCommand";
import { SameAsServiceCommandInput, SameAsServiceCommandOutput } from "./commands/SameAsServiceCommand";
import {
  HttpApiKeyAuthInputConfig,
  HttpApiKeyAuthResolvedConfig,
  resolveHttpApiKeyAuthConfig,
} from "./middleware/HttpApiKeyAuth";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { RuntimeExtension, RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { SigV4AuthInputConfig, SigV4AuthResolvedConfig, resolveSigV4AuthConfig } from "@aws-sdk/middleware-signing";
import { TokenInputConfig, TokenResolvedConfig, getTokenPlugin, resolveTokenConfig } from "@aws-sdk/middleware-token";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import {
  CustomEndpointsInputConfig,
  CustomEndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveCustomEndpointsConfig,
  resolveRegionConfig,
} from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  Provider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | OnlyCustomAuthCommandInput
  | OnlyCustomAuthOptionalCommandInput
  | OnlyHttpApiKeyAndBearerAuthCommandInput
  | OnlyHttpApiKeyAndBearerAuthReversedCommandInput
  | OnlyHttpApiKeyAuthCommandInput
  | OnlyHttpApiKeyAuthOptionalCommandInput
  | OnlyHttpBearerAuthCommandInput
  | OnlyHttpBearerAuthOptionalCommandInput
  | OnlySigv4AuthCommandInput
  | OnlySigv4AuthOptionalCommandInput
  | SameAsServiceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | OnlyCustomAuthCommandOutput
  | OnlyCustomAuthOptionalCommandOutput
  | OnlyHttpApiKeyAndBearerAuthCommandOutput
  | OnlyHttpApiKeyAndBearerAuthReversedCommandOutput
  | OnlyHttpApiKeyAuthCommandOutput
  | OnlyHttpApiKeyAuthOptionalCommandOutput
  | OnlyHttpBearerAuthCommandOutput
  | OnlyHttpBearerAuthOptionalCommandOutput
  | OnlySigv4AuthCommandOutput
  | OnlySigv4AuthOptionalCommandOutput
  | SameAsServiceCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
   * The AWS region to use as signing region for AWS Auth
   */
  region?: string | __Provider<string>;

  /**
   * The service name to use as the signing service for AWS Auth
   * @internal
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

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
export type WeatherClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  CustomEndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  SigV4AuthInputConfig &
  TokenInputConfig &
  UserAgentInputConfig &
  HttpApiKeyAuthInputConfig;
/**
 * @public
 *
 *  The configuration interface of WeatherClient class constructor that set the region, credentials and other options.
 */
export interface WeatherClientConfig extends WeatherClientConfigType {}

/**
 * @public
 */
export type WeatherClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  CustomEndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  SigV4AuthResolvedConfig &
  TokenResolvedConfig &
  UserAgentResolvedConfig &
  HttpApiKeyAuthResolvedConfig;
/**
 * @public
 *
 *  The resolved configuration interface of WeatherClient class. This is resolved and normalized from the {@link WeatherClientConfig | constructor configuration interface}.
 */
export interface WeatherClientResolvedConfig extends WeatherClientResolvedConfigType {}

/**
 * @public
 */
export class WeatherClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WeatherClientResolvedConfig
> {
  /**
   * The resolved configuration of WeatherClient class. This is resolved and normalized from the {@link WeatherClientConfig | constructor configuration interface}.
   */
  readonly config: WeatherClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<WeatherClientConfig>) {
    let _config_0 = __getRuntimeConfig(configuration || {});
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveCustomEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveSigV4AuthConfig(_config_4);
    let _config_6 = resolveTokenConfig(_config_5);
    let _config_7 = resolveUserAgentConfig(_config_6);
    let _config_8 = resolveHttpApiKeyAuthConfig(_config_7);
    let _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    super(_config_9);
    this.config = _config_9;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getTokenPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
