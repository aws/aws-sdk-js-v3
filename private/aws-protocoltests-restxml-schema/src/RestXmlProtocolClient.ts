// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  type DefaultAwsRegionalEndpointsInputConfig,
  type DefaultAwsRegionalEndpointsResolvedConfig,
  resolveDefaultAwsRegionalEndpointsConfig,
} from "@aws-sdk/util-endpoints";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import {
  type CompressionInputConfig,
  type CompressionResolvedConfig,
  resolveCompressionConfig,
} from "@smithy/middleware-compression";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultRestXmlProtocolHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "./commands/AllQueryStringTypesCommand";
import type { BodyWithXmlNameCommandInput, BodyWithXmlNameCommandOutput } from "./commands/BodyWithXmlNameCommand";
import type {
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
} from "./commands/ConstantAndVariableQueryStringCommand";
import type {
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
} from "./commands/ConstantQueryStringCommand";
import type {
  ContentTypeParametersCommandInput,
  ContentTypeParametersCommandOutput,
} from "./commands/ContentTypeParametersCommand";
import type { DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput } from "./commands/DatetimeOffsetsCommand";
import type {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import type {
  EndpointOperationCommandInput,
  EndpointOperationCommandOutput,
} from "./commands/EndpointOperationCommand";
import type {
  EndpointWithHostLabelHeaderOperationCommandInput,
  EndpointWithHostLabelHeaderOperationCommandOutput,
} from "./commands/EndpointWithHostLabelHeaderOperationCommand";
import type {
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import type { FlattenedXmlMapCommandInput, FlattenedXmlMapCommandOutput } from "./commands/FlattenedXmlMapCommand";
import type {
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput,
} from "./commands/FlattenedXmlMapWithXmlNameCommand";
import type {
  FlattenedXmlMapWithXmlNamespaceCommandInput,
  FlattenedXmlMapWithXmlNamespaceCommandOutput,
} from "./commands/FlattenedXmlMapWithXmlNamespaceCommand";
import type {
  FractionalSecondsCommandInput,
  FractionalSecondsCommandOutput,
} from "./commands/FractionalSecondsCommand";
import type {
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "./commands/GreetingWithErrorsCommand";
import type {
  HttpEmptyPrefixHeadersCommandInput,
  HttpEmptyPrefixHeadersCommandOutput,
} from "./commands/HttpEmptyPrefixHeadersCommand";
import type { HttpEnumPayloadCommandInput, HttpEnumPayloadCommandOutput } from "./commands/HttpEnumPayloadCommand";
import type {
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
} from "./commands/HttpPayloadTraitsCommand";
import type {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "./commands/HttpPayloadTraitsWithMediaTypeCommand";
import type {
  HttpPayloadWithMemberXmlNameCommandInput,
  HttpPayloadWithMemberXmlNameCommandOutput,
} from "./commands/HttpPayloadWithMemberXmlNameCommand";
import type {
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
import type {
  HttpPayloadWithUnionCommandInput,
  HttpPayloadWithUnionCommandOutput,
} from "./commands/HttpPayloadWithUnionCommand";
import type {
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput,
} from "./commands/HttpPayloadWithXmlNameCommand";
import type {
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput,
} from "./commands/HttpPayloadWithXmlNamespaceAndPrefixCommand";
import type {
  HttpPayloadWithXmlNamespaceCommandInput,
  HttpPayloadWithXmlNamespaceCommandOutput,
} from "./commands/HttpPayloadWithXmlNamespaceCommand";
import type {
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
} from "./commands/HttpPrefixHeadersCommand";
import type {
  HttpRequestWithFloatLabelsCommandInput,
  HttpRequestWithFloatLabelsCommandOutput,
} from "./commands/HttpRequestWithFloatLabelsCommand";
import type {
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput,
} from "./commands/HttpRequestWithGreedyLabelInPathCommand";
import type {
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput,
} from "./commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import type {
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput,
} from "./commands/HttpRequestWithLabelsCommand";
import type { HttpResponseCodeCommandInput, HttpResponseCodeCommandOutput } from "./commands/HttpResponseCodeCommand";
import type {
  HttpStringPayloadCommandInput,
  HttpStringPayloadCommandOutput,
} from "./commands/HttpStringPayloadCommand";
import type {
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "./commands/IgnoreQueryParamsInResponseCommand";
import type {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "./commands/InputAndOutputWithHeadersCommand";
import type { NestedXmlMapsCommandInput, NestedXmlMapsCommandOutput } from "./commands/NestedXmlMapsCommand";
import type {
  NestedXmlMapWithXmlNameCommandInput,
  NestedXmlMapWithXmlNameCommandOutput,
} from "./commands/NestedXmlMapWithXmlNameCommand";
import type {
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput,
} from "./commands/NoInputAndNoOutputCommand";
import type { NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput } from "./commands/NoInputAndOutputCommand";
import type {
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
} from "./commands/NullAndEmptyHeadersClientCommand";
import type {
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
} from "./commands/NullAndEmptyHeadersServerCommand";
import type {
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
} from "./commands/OmitsNullSerializesEmptyStringCommand";
import type {
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "./commands/PutWithContentEncodingCommand";
import type {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import type {
  QueryParamsAsStringListMapCommandInput,
  QueryParamsAsStringListMapCommandOutput,
} from "./commands/QueryParamsAsStringListMapCommand";
import type { QueryPrecedenceCommandInput, QueryPrecedenceCommandOutput } from "./commands/QueryPrecedenceCommand";
import type { RecursiveShapesCommandInput, RecursiveShapesCommandOutput } from "./commands/RecursiveShapesCommand";
import type {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import type {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import type { XmlAttributesCommandInput, XmlAttributesCommandOutput } from "./commands/XmlAttributesCommand";
import type {
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput,
} from "./commands/XmlAttributesOnPayloadCommand";
import type { XmlBlobsCommandInput, XmlBlobsCommandOutput } from "./commands/XmlBlobsCommand";
import type { XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput } from "./commands/XmlEmptyBlobsCommand";
import type { XmlEmptyListsCommandInput, XmlEmptyListsCommandOutput } from "./commands/XmlEmptyListsCommand";
import type { XmlEmptyMapsCommandInput, XmlEmptyMapsCommandOutput } from "./commands/XmlEmptyMapsCommand";
import type { XmlEmptyStringsCommandInput, XmlEmptyStringsCommandOutput } from "./commands/XmlEmptyStringsCommand";
import type { XmlEnumsCommandInput, XmlEnumsCommandOutput } from "./commands/XmlEnumsCommand";
import type { XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput } from "./commands/XmlIntEnumsCommand";
import type { XmlListsCommandInput, XmlListsCommandOutput } from "./commands/XmlListsCommand";
import type { XmlMapsCommandInput, XmlMapsCommandOutput } from "./commands/XmlMapsCommand";
import type { XmlMapsXmlNameCommandInput, XmlMapsXmlNameCommandOutput } from "./commands/XmlMapsXmlNameCommand";
import type {
  XmlMapWithXmlNamespaceCommandInput,
  XmlMapWithXmlNamespaceCommandOutput,
} from "./commands/XmlMapWithXmlNamespaceCommand";
import type { XmlNamespacesCommandInput, XmlNamespacesCommandOutput } from "./commands/XmlNamespacesCommand";
import type { XmlTimestampsCommandInput, XmlTimestampsCommandOutput } from "./commands/XmlTimestampsCommand";
import type { XmlUnionsCommandInput, XmlUnionsCommandOutput } from "./commands/XmlUnionsCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AllQueryStringTypesCommandInput
  | BodyWithXmlNameCommandInput
  | ConstantAndVariableQueryStringCommandInput
  | ConstantQueryStringCommandInput
  | ContentTypeParametersCommandInput
  | DatetimeOffsetsCommandInput
  | EmptyInputAndEmptyOutputCommandInput
  | EndpointOperationCommandInput
  | EndpointWithHostLabelHeaderOperationCommandInput
  | EndpointWithHostLabelOperationCommandInput
  | FlattenedXmlMapCommandInput
  | FlattenedXmlMapWithXmlNameCommandInput
  | FlattenedXmlMapWithXmlNamespaceCommandInput
  | FractionalSecondsCommandInput
  | GreetingWithErrorsCommandInput
  | HttpEmptyPrefixHeadersCommandInput
  | HttpEnumPayloadCommandInput
  | HttpPayloadTraitsCommandInput
  | HttpPayloadTraitsWithMediaTypeCommandInput
  | HttpPayloadWithMemberXmlNameCommandInput
  | HttpPayloadWithStructureCommandInput
  | HttpPayloadWithUnionCommandInput
  | HttpPayloadWithXmlNameCommandInput
  | HttpPayloadWithXmlNamespaceAndPrefixCommandInput
  | HttpPayloadWithXmlNamespaceCommandInput
  | HttpPrefixHeadersCommandInput
  | HttpRequestWithFloatLabelsCommandInput
  | HttpRequestWithGreedyLabelInPathCommandInput
  | HttpRequestWithLabelsAndTimestampFormatCommandInput
  | HttpRequestWithLabelsCommandInput
  | HttpResponseCodeCommandInput
  | HttpStringPayloadCommandInput
  | IgnoreQueryParamsInResponseCommandInput
  | InputAndOutputWithHeadersCommandInput
  | NestedXmlMapWithXmlNameCommandInput
  | NestedXmlMapsCommandInput
  | NoInputAndNoOutputCommandInput
  | NoInputAndOutputCommandInput
  | NullAndEmptyHeadersClientCommandInput
  | NullAndEmptyHeadersServerCommandInput
  | OmitsNullSerializesEmptyStringCommandInput
  | PutWithContentEncodingCommandInput
  | QueryIdempotencyTokenAutoFillCommandInput
  | QueryParamsAsStringListMapCommandInput
  | QueryPrecedenceCommandInput
  | RecursiveShapesCommandInput
  | SimpleScalarPropertiesCommandInput
  | TimestampFormatHeadersCommandInput
  | XmlAttributesCommandInput
  | XmlAttributesOnPayloadCommandInput
  | XmlBlobsCommandInput
  | XmlEmptyBlobsCommandInput
  | XmlEmptyListsCommandInput
  | XmlEmptyMapsCommandInput
  | XmlEmptyStringsCommandInput
  | XmlEnumsCommandInput
  | XmlIntEnumsCommandInput
  | XmlListsCommandInput
  | XmlMapWithXmlNamespaceCommandInput
  | XmlMapsCommandInput
  | XmlMapsXmlNameCommandInput
  | XmlNamespacesCommandInput
  | XmlTimestampsCommandInput
  | XmlUnionsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AllQueryStringTypesCommandOutput
  | BodyWithXmlNameCommandOutput
  | ConstantAndVariableQueryStringCommandOutput
  | ConstantQueryStringCommandOutput
  | ContentTypeParametersCommandOutput
  | DatetimeOffsetsCommandOutput
  | EmptyInputAndEmptyOutputCommandOutput
  | EndpointOperationCommandOutput
  | EndpointWithHostLabelHeaderOperationCommandOutput
  | EndpointWithHostLabelOperationCommandOutput
  | FlattenedXmlMapCommandOutput
  | FlattenedXmlMapWithXmlNameCommandOutput
  | FlattenedXmlMapWithXmlNamespaceCommandOutput
  | FractionalSecondsCommandOutput
  | GreetingWithErrorsCommandOutput
  | HttpEmptyPrefixHeadersCommandOutput
  | HttpEnumPayloadCommandOutput
  | HttpPayloadTraitsCommandOutput
  | HttpPayloadTraitsWithMediaTypeCommandOutput
  | HttpPayloadWithMemberXmlNameCommandOutput
  | HttpPayloadWithStructureCommandOutput
  | HttpPayloadWithUnionCommandOutput
  | HttpPayloadWithXmlNameCommandOutput
  | HttpPayloadWithXmlNamespaceAndPrefixCommandOutput
  | HttpPayloadWithXmlNamespaceCommandOutput
  | HttpPrefixHeadersCommandOutput
  | HttpRequestWithFloatLabelsCommandOutput
  | HttpRequestWithGreedyLabelInPathCommandOutput
  | HttpRequestWithLabelsAndTimestampFormatCommandOutput
  | HttpRequestWithLabelsCommandOutput
  | HttpResponseCodeCommandOutput
  | HttpStringPayloadCommandOutput
  | IgnoreQueryParamsInResponseCommandOutput
  | InputAndOutputWithHeadersCommandOutput
  | NestedXmlMapWithXmlNameCommandOutput
  | NestedXmlMapsCommandOutput
  | NoInputAndNoOutputCommandOutput
  | NoInputAndOutputCommandOutput
  | NullAndEmptyHeadersClientCommandOutput
  | NullAndEmptyHeadersServerCommandOutput
  | OmitsNullSerializesEmptyStringCommandOutput
  | PutWithContentEncodingCommandOutput
  | QueryIdempotencyTokenAutoFillCommandOutput
  | QueryParamsAsStringListMapCommandOutput
  | QueryPrecedenceCommandOutput
  | RecursiveShapesCommandOutput
  | SimpleScalarPropertiesCommandOutput
  | TimestampFormatHeadersCommandOutput
  | XmlAttributesCommandOutput
  | XmlAttributesOnPayloadCommandOutput
  | XmlBlobsCommandOutput
  | XmlEmptyBlobsCommandOutput
  | XmlEmptyListsCommandOutput
  | XmlEmptyMapsCommandOutput
  | XmlEmptyStringsCommandOutput
  | XmlEnumsCommandOutput
  | XmlIntEnumsCommandOutput
  | XmlListsCommandOutput
  | XmlMapWithXmlNamespaceCommandOutput
  | XmlMapsCommandOutput
  | XmlMapsXmlNameCommandOutput
  | XmlNamespacesCommandOutput
  | XmlTimestampsCommandOutput
  | XmlUnionsCommandOutput;

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
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

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
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

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
export type RestXmlProtocolClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  DefaultAwsRegionalEndpointsInputConfig &
  HttpAuthSchemeInputConfig &
  CompressionInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of RestXmlProtocolClient class constructor that set the region, credentials and other options.
 */
export interface RestXmlProtocolClientConfig extends RestXmlProtocolClientConfigType {}

/**
 * @public
 */
export type RestXmlProtocolClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  DefaultAwsRegionalEndpointsResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  CompressionResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of RestXmlProtocolClient class. This is resolved and normalized from the {@link RestXmlProtocolClientConfig | constructor configuration interface}.
 */
export interface RestXmlProtocolClientResolvedConfig extends RestXmlProtocolClientResolvedConfigType {}

/**
 * A REST XML service that sends XML requests and responses.
 * @public
 */
export class RestXmlProtocolClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RestXmlProtocolClientResolvedConfig
> {
  /**
   * The resolved configuration of RestXmlProtocolClient class. This is resolved and normalized from the {@link RestXmlProtocolClientConfig | constructor configuration interface}.
   */
  readonly config: RestXmlProtocolClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<RestXmlProtocolClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveDefaultAwsRegionalEndpointsConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveCompressionConfig(_config_8);
    const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
    this.config = _config_10;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultRestXmlProtocolHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RestXmlProtocolClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
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
