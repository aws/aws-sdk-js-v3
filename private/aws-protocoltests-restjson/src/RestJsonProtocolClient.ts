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
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";
import { Readable } from "stream";

import {
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "./commands/AllQueryStringTypesCommand";
import {
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
} from "./commands/ConstantAndVariableQueryStringCommand";
import {
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
} from "./commands/ConstantQueryStringCommand";
import { DatetimeOffsetsCommandInput, DatetimeOffsetsCommandOutput } from "./commands/DatetimeOffsetsCommand";
import {
  DocumentTypeAsPayloadCommandInput,
  DocumentTypeAsPayloadCommandOutput,
} from "./commands/DocumentTypeAsPayloadCommand";
import { DocumentTypeCommandInput, DocumentTypeCommandOutput } from "./commands/DocumentTypeCommand";
import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommandInput, EndpointOperationCommandOutput } from "./commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import { FractionalSecondsCommandInput, FractionalSecondsCommandOutput } from "./commands/FractionalSecondsCommand";
import { GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput } from "./commands/GreetingWithErrorsCommand";
import {
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
} from "./commands/HostWithPathOperationCommand";
import {
  HttpChecksumRequiredCommandInput,
  HttpChecksumRequiredCommandOutput,
} from "./commands/HttpChecksumRequiredCommand";
import { HttpEnumPayloadCommandInput, HttpEnumPayloadCommandOutput } from "./commands/HttpEnumPayloadCommand";
import { HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput } from "./commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "./commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
import { HttpPrefixHeadersCommandInput, HttpPrefixHeadersCommandOutput } from "./commands/HttpPrefixHeadersCommand";
import {
  HttpPrefixHeadersInResponseCommandInput,
  HttpPrefixHeadersInResponseCommandOutput,
} from "./commands/HttpPrefixHeadersInResponseCommand";
import {
  HttpRequestWithFloatLabelsCommandInput,
  HttpRequestWithFloatLabelsCommandOutput,
} from "./commands/HttpRequestWithFloatLabelsCommand";
import {
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput,
} from "./commands/HttpRequestWithGreedyLabelInPathCommand";
import {
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput,
} from "./commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import {
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput,
} from "./commands/HttpRequestWithLabelsCommand";
import {
  HttpRequestWithRegexLiteralCommandInput,
  HttpRequestWithRegexLiteralCommandOutput,
} from "./commands/HttpRequestWithRegexLiteralCommand";
import { HttpResponseCodeCommandInput, HttpResponseCodeCommandOutput } from "./commands/HttpResponseCodeCommand";
import { HttpStringPayloadCommandInput, HttpStringPayloadCommandOutput } from "./commands/HttpStringPayloadCommand";
import {
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "./commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "./commands/InputAndOutputWithHeadersCommand";
import { JsonBlobsCommandInput, JsonBlobsCommandOutput } from "./commands/JsonBlobsCommand";
import { JsonEnumsCommandInput, JsonEnumsCommandOutput } from "./commands/JsonEnumsCommand";
import { JsonIntEnumsCommandInput, JsonIntEnumsCommandOutput } from "./commands/JsonIntEnumsCommand";
import { JsonListsCommandInput, JsonListsCommandOutput } from "./commands/JsonListsCommand";
import { JsonMapsCommandInput, JsonMapsCommandOutput } from "./commands/JsonMapsCommand";
import { JsonTimestampsCommandInput, JsonTimestampsCommandOutput } from "./commands/JsonTimestampsCommand";
import { JsonUnionsCommandInput, JsonUnionsCommandOutput } from "./commands/JsonUnionsCommand";
import {
  MalformedAcceptWithBodyCommandInput,
  MalformedAcceptWithBodyCommandOutput,
} from "./commands/MalformedAcceptWithBodyCommand";
import {
  MalformedAcceptWithGenericStringCommandInput,
  MalformedAcceptWithGenericStringCommandOutput,
} from "./commands/MalformedAcceptWithGenericStringCommand";
import {
  MalformedAcceptWithPayloadCommandInput,
  MalformedAcceptWithPayloadCommandOutput,
} from "./commands/MalformedAcceptWithPayloadCommand";
import { MalformedBlobCommandInput, MalformedBlobCommandOutput } from "./commands/MalformedBlobCommand";
import { MalformedBooleanCommandInput, MalformedBooleanCommandOutput } from "./commands/MalformedBooleanCommand";
import { MalformedByteCommandInput, MalformedByteCommandOutput } from "./commands/MalformedByteCommand";
import {
  MalformedContentTypeWithBodyCommandInput,
  MalformedContentTypeWithBodyCommandOutput,
} from "./commands/MalformedContentTypeWithBodyCommand";
import {
  MalformedContentTypeWithGenericStringCommandInput,
  MalformedContentTypeWithGenericStringCommandOutput,
} from "./commands/MalformedContentTypeWithGenericStringCommand";
import {
  MalformedContentTypeWithoutBodyCommandInput,
  MalformedContentTypeWithoutBodyCommandOutput,
} from "./commands/MalformedContentTypeWithoutBodyCommand";
import {
  MalformedContentTypeWithPayloadCommandInput,
  MalformedContentTypeWithPayloadCommandOutput,
} from "./commands/MalformedContentTypeWithPayloadCommand";
import { MalformedDoubleCommandInput, MalformedDoubleCommandOutput } from "./commands/MalformedDoubleCommand";
import { MalformedFloatCommandInput, MalformedFloatCommandOutput } from "./commands/MalformedFloatCommand";
import { MalformedIntegerCommandInput, MalformedIntegerCommandOutput } from "./commands/MalformedIntegerCommand";
import { MalformedListCommandInput, MalformedListCommandOutput } from "./commands/MalformedListCommand";
import { MalformedLongCommandInput, MalformedLongCommandOutput } from "./commands/MalformedLongCommand";
import { MalformedMapCommandInput, MalformedMapCommandOutput } from "./commands/MalformedMapCommand";
import {
  MalformedRequestBodyCommandInput,
  MalformedRequestBodyCommandOutput,
} from "./commands/MalformedRequestBodyCommand";
import { MalformedShortCommandInput, MalformedShortCommandOutput } from "./commands/MalformedShortCommand";
import { MalformedStringCommandInput, MalformedStringCommandOutput } from "./commands/MalformedStringCommand";
import {
  MalformedTimestampBodyDateTimeCommandInput,
  MalformedTimestampBodyDateTimeCommandOutput,
} from "./commands/MalformedTimestampBodyDateTimeCommand";
import {
  MalformedTimestampBodyDefaultCommandInput,
  MalformedTimestampBodyDefaultCommandOutput,
} from "./commands/MalformedTimestampBodyDefaultCommand";
import {
  MalformedTimestampBodyHttpDateCommandInput,
  MalformedTimestampBodyHttpDateCommandOutput,
} from "./commands/MalformedTimestampBodyHttpDateCommand";
import {
  MalformedTimestampHeaderDateTimeCommandInput,
  MalformedTimestampHeaderDateTimeCommandOutput,
} from "./commands/MalformedTimestampHeaderDateTimeCommand";
import {
  MalformedTimestampHeaderDefaultCommandInput,
  MalformedTimestampHeaderDefaultCommandOutput,
} from "./commands/MalformedTimestampHeaderDefaultCommand";
import {
  MalformedTimestampHeaderEpochCommandInput,
  MalformedTimestampHeaderEpochCommandOutput,
} from "./commands/MalformedTimestampHeaderEpochCommand";
import {
  MalformedTimestampPathDefaultCommandInput,
  MalformedTimestampPathDefaultCommandOutput,
} from "./commands/MalformedTimestampPathDefaultCommand";
import {
  MalformedTimestampPathEpochCommandInput,
  MalformedTimestampPathEpochCommandOutput,
} from "./commands/MalformedTimestampPathEpochCommand";
import {
  MalformedTimestampPathHttpDateCommandInput,
  MalformedTimestampPathHttpDateCommandOutput,
} from "./commands/MalformedTimestampPathHttpDateCommand";
import {
  MalformedTimestampQueryDefaultCommandInput,
  MalformedTimestampQueryDefaultCommandOutput,
} from "./commands/MalformedTimestampQueryDefaultCommand";
import {
  MalformedTimestampQueryEpochCommandInput,
  MalformedTimestampQueryEpochCommandOutput,
} from "./commands/MalformedTimestampQueryEpochCommand";
import {
  MalformedTimestampQueryHttpDateCommandInput,
  MalformedTimestampQueryHttpDateCommandOutput,
} from "./commands/MalformedTimestampQueryHttpDateCommand";
import { MalformedUnionCommandInput, MalformedUnionCommandOutput } from "./commands/MalformedUnionCommand";
import { MediaTypeHeaderCommandInput, MediaTypeHeaderCommandOutput } from "./commands/MediaTypeHeaderCommand";
import { NoInputAndNoOutputCommandInput, NoInputAndNoOutputCommandOutput } from "./commands/NoInputAndNoOutputCommand";
import { NoInputAndOutputCommandInput, NoInputAndOutputCommandOutput } from "./commands/NoInputAndOutputCommand";
import {
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
} from "./commands/NullAndEmptyHeadersClientCommand";
import {
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
} from "./commands/NullAndEmptyHeadersServerCommand";
import {
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
} from "./commands/OmitsNullSerializesEmptyStringCommand";
import {
  OmitsSerializingEmptyListsCommandInput,
  OmitsSerializingEmptyListsCommandOutput,
} from "./commands/OmitsSerializingEmptyListsCommand";
import { PostPlayerActionCommandInput, PostPlayerActionCommandOutput } from "./commands/PostPlayerActionCommand";
import {
  PostUnionWithJsonNameCommandInput,
  PostUnionWithJsonNameCommandOutput,
} from "./commands/PostUnionWithJsonNameCommand";
import {
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "./commands/PutWithContentEncodingCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import {
  QueryParamsAsStringListMapCommandInput,
  QueryParamsAsStringListMapCommandOutput,
} from "./commands/QueryParamsAsStringListMapCommand";
import { QueryPrecedenceCommandInput, QueryPrecedenceCommandOutput } from "./commands/QueryPrecedenceCommand";
import { RecursiveShapesCommandInput, RecursiveShapesCommandOutput } from "./commands/RecursiveShapesCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import { StreamingTraitsCommandInput, StreamingTraitsCommandOutput } from "./commands/StreamingTraitsCommand";
import {
  StreamingTraitsRequireLengthCommandInput,
  StreamingTraitsRequireLengthCommandOutput,
} from "./commands/StreamingTraitsRequireLengthCommand";
import {
  StreamingTraitsWithMediaTypeCommandInput,
  StreamingTraitsWithMediaTypeCommandOutput,
} from "./commands/StreamingTraitsWithMediaTypeCommand";
import { TestBodyStructureCommandInput, TestBodyStructureCommandOutput } from "./commands/TestBodyStructureCommand";
import { TestNoPayloadCommandInput, TestNoPayloadCommandOutput } from "./commands/TestNoPayloadCommand";
import { TestPayloadBlobCommandInput, TestPayloadBlobCommandOutput } from "./commands/TestPayloadBlobCommand";
import {
  TestPayloadStructureCommandInput,
  TestPayloadStructureCommandOutput,
} from "./commands/TestPayloadStructureCommand";
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import { UnitInputAndOutputCommandInput, UnitInputAndOutputCommandOutput } from "./commands/UnitInputAndOutputCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AllQueryStringTypesCommandInput
  | ConstantAndVariableQueryStringCommandInput
  | ConstantQueryStringCommandInput
  | DatetimeOffsetsCommandInput
  | DocumentTypeAsPayloadCommandInput
  | DocumentTypeCommandInput
  | EmptyInputAndEmptyOutputCommandInput
  | EndpointOperationCommandInput
  | EndpointWithHostLabelOperationCommandInput
  | FractionalSecondsCommandInput
  | GreetingWithErrorsCommandInput
  | HostWithPathOperationCommandInput
  | HttpChecksumRequiredCommandInput
  | HttpEnumPayloadCommandInput
  | HttpPayloadTraitsCommandInput
  | HttpPayloadTraitsWithMediaTypeCommandInput
  | HttpPayloadWithStructureCommandInput
  | HttpPrefixHeadersCommandInput
  | HttpPrefixHeadersInResponseCommandInput
  | HttpRequestWithFloatLabelsCommandInput
  | HttpRequestWithGreedyLabelInPathCommandInput
  | HttpRequestWithLabelsAndTimestampFormatCommandInput
  | HttpRequestWithLabelsCommandInput
  | HttpRequestWithRegexLiteralCommandInput
  | HttpResponseCodeCommandInput
  | HttpStringPayloadCommandInput
  | IgnoreQueryParamsInResponseCommandInput
  | InputAndOutputWithHeadersCommandInput
  | JsonBlobsCommandInput
  | JsonEnumsCommandInput
  | JsonIntEnumsCommandInput
  | JsonListsCommandInput
  | JsonMapsCommandInput
  | JsonTimestampsCommandInput
  | JsonUnionsCommandInput
  | MalformedAcceptWithBodyCommandInput
  | MalformedAcceptWithGenericStringCommandInput
  | MalformedAcceptWithPayloadCommandInput
  | MalformedBlobCommandInput
  | MalformedBooleanCommandInput
  | MalformedByteCommandInput
  | MalformedContentTypeWithBodyCommandInput
  | MalformedContentTypeWithGenericStringCommandInput
  | MalformedContentTypeWithPayloadCommandInput
  | MalformedContentTypeWithoutBodyCommandInput
  | MalformedDoubleCommandInput
  | MalformedFloatCommandInput
  | MalformedIntegerCommandInput
  | MalformedListCommandInput
  | MalformedLongCommandInput
  | MalformedMapCommandInput
  | MalformedRequestBodyCommandInput
  | MalformedShortCommandInput
  | MalformedStringCommandInput
  | MalformedTimestampBodyDateTimeCommandInput
  | MalformedTimestampBodyDefaultCommandInput
  | MalformedTimestampBodyHttpDateCommandInput
  | MalformedTimestampHeaderDateTimeCommandInput
  | MalformedTimestampHeaderDefaultCommandInput
  | MalformedTimestampHeaderEpochCommandInput
  | MalformedTimestampPathDefaultCommandInput
  | MalformedTimestampPathEpochCommandInput
  | MalformedTimestampPathHttpDateCommandInput
  | MalformedTimestampQueryDefaultCommandInput
  | MalformedTimestampQueryEpochCommandInput
  | MalformedTimestampQueryHttpDateCommandInput
  | MalformedUnionCommandInput
  | MediaTypeHeaderCommandInput
  | NoInputAndNoOutputCommandInput
  | NoInputAndOutputCommandInput
  | NullAndEmptyHeadersClientCommandInput
  | NullAndEmptyHeadersServerCommandInput
  | OmitsNullSerializesEmptyStringCommandInput
  | OmitsSerializingEmptyListsCommandInput
  | PostPlayerActionCommandInput
  | PostUnionWithJsonNameCommandInput
  | PutWithContentEncodingCommandInput
  | QueryIdempotencyTokenAutoFillCommandInput
  | QueryParamsAsStringListMapCommandInput
  | QueryPrecedenceCommandInput
  | RecursiveShapesCommandInput
  | SimpleScalarPropertiesCommandInput
  | StreamingTraitsCommandInput
  | StreamingTraitsRequireLengthCommandInput
  | StreamingTraitsWithMediaTypeCommandInput
  | TestBodyStructureCommandInput
  | TestNoPayloadCommandInput
  | TestPayloadBlobCommandInput
  | TestPayloadStructureCommandInput
  | TimestampFormatHeadersCommandInput
  | UnitInputAndOutputCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AllQueryStringTypesCommandOutput
  | ConstantAndVariableQueryStringCommandOutput
  | ConstantQueryStringCommandOutput
  | DatetimeOffsetsCommandOutput
  | DocumentTypeAsPayloadCommandOutput
  | DocumentTypeCommandOutput
  | EmptyInputAndEmptyOutputCommandOutput
  | EndpointOperationCommandOutput
  | EndpointWithHostLabelOperationCommandOutput
  | FractionalSecondsCommandOutput
  | GreetingWithErrorsCommandOutput
  | HostWithPathOperationCommandOutput
  | HttpChecksumRequiredCommandOutput
  | HttpEnumPayloadCommandOutput
  | HttpPayloadTraitsCommandOutput
  | HttpPayloadTraitsWithMediaTypeCommandOutput
  | HttpPayloadWithStructureCommandOutput
  | HttpPrefixHeadersCommandOutput
  | HttpPrefixHeadersInResponseCommandOutput
  | HttpRequestWithFloatLabelsCommandOutput
  | HttpRequestWithGreedyLabelInPathCommandOutput
  | HttpRequestWithLabelsAndTimestampFormatCommandOutput
  | HttpRequestWithLabelsCommandOutput
  | HttpRequestWithRegexLiteralCommandOutput
  | HttpResponseCodeCommandOutput
  | HttpStringPayloadCommandOutput
  | IgnoreQueryParamsInResponseCommandOutput
  | InputAndOutputWithHeadersCommandOutput
  | JsonBlobsCommandOutput
  | JsonEnumsCommandOutput
  | JsonIntEnumsCommandOutput
  | JsonListsCommandOutput
  | JsonMapsCommandOutput
  | JsonTimestampsCommandOutput
  | JsonUnionsCommandOutput
  | MalformedAcceptWithBodyCommandOutput
  | MalformedAcceptWithGenericStringCommandOutput
  | MalformedAcceptWithPayloadCommandOutput
  | MalformedBlobCommandOutput
  | MalformedBooleanCommandOutput
  | MalformedByteCommandOutput
  | MalformedContentTypeWithBodyCommandOutput
  | MalformedContentTypeWithGenericStringCommandOutput
  | MalformedContentTypeWithPayloadCommandOutput
  | MalformedContentTypeWithoutBodyCommandOutput
  | MalformedDoubleCommandOutput
  | MalformedFloatCommandOutput
  | MalformedIntegerCommandOutput
  | MalformedListCommandOutput
  | MalformedLongCommandOutput
  | MalformedMapCommandOutput
  | MalformedRequestBodyCommandOutput
  | MalformedShortCommandOutput
  | MalformedStringCommandOutput
  | MalformedTimestampBodyDateTimeCommandOutput
  | MalformedTimestampBodyDefaultCommandOutput
  | MalformedTimestampBodyHttpDateCommandOutput
  | MalformedTimestampHeaderDateTimeCommandOutput
  | MalformedTimestampHeaderDefaultCommandOutput
  | MalformedTimestampHeaderEpochCommandOutput
  | MalformedTimestampPathDefaultCommandOutput
  | MalformedTimestampPathEpochCommandOutput
  | MalformedTimestampPathHttpDateCommandOutput
  | MalformedTimestampQueryDefaultCommandOutput
  | MalformedTimestampQueryEpochCommandOutput
  | MalformedTimestampQueryHttpDateCommandOutput
  | MalformedUnionCommandOutput
  | MediaTypeHeaderCommandOutput
  | NoInputAndNoOutputCommandOutput
  | NoInputAndOutputCommandOutput
  | NullAndEmptyHeadersClientCommandOutput
  | NullAndEmptyHeadersServerCommandOutput
  | OmitsNullSerializesEmptyStringCommandOutput
  | OmitsSerializingEmptyListsCommandOutput
  | PostPlayerActionCommandOutput
  | PostUnionWithJsonNameCommandOutput
  | PutWithContentEncodingCommandOutput
  | QueryIdempotencyTokenAutoFillCommandOutput
  | QueryParamsAsStringListMapCommandOutput
  | QueryPrecedenceCommandOutput
  | RecursiveShapesCommandOutput
  | SimpleScalarPropertiesCommandOutput
  | StreamingTraitsCommandOutput
  | StreamingTraitsRequireLengthCommandOutput
  | StreamingTraitsWithMediaTypeCommandOutput
  | TestBodyStructureCommandOutput
  | TestNoPayloadCommandOutput
  | TestPayloadBlobCommandOutput
  | TestPayloadStructureCommandOutput
  | TimestampFormatHeadersCommandOutput
  | UnitInputAndOutputCommandOutput;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

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
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value.
   * @internal
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;

  /**
   * A constructor for a class implementing the {@link __checksum} interface
   * that computes MD5 hashes.
   * @internal
   */
  md5?: __ChecksumConstructor | __HashConstructor;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

/**
 * @public
 */
export type RestJsonProtocolClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;
/**
 * @public
 *
 *  The configuration interface of RestJsonProtocolClient class constructor that set the region, credentials and other options.
 */
export interface RestJsonProtocolClientConfig extends RestJsonProtocolClientConfigType {}

/**
 * @public
 */
export type RestJsonProtocolClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;
/**
 * @public
 *
 *  The resolved configuration interface of RestJsonProtocolClient class. This is resolved and normalized from the {@link RestJsonProtocolClientConfig | constructor configuration interface}.
 */
export interface RestJsonProtocolClientResolvedConfig extends RestJsonProtocolClientResolvedConfigType {}

/**
 * @public
 * A REST JSON service that sends JSON requests and responses.
 */
export class RestJsonProtocolClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RestJsonProtocolClientResolvedConfig
> {
  /**
   * The resolved configuration of RestJsonProtocolClient class. This is resolved and normalized from the {@link RestJsonProtocolClientConfig | constructor configuration interface}.
   */
  readonly config: RestJsonProtocolClientResolvedConfig;

  constructor(configuration: RestJsonProtocolClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveUserAgentConfig(_config_4);
    super(_config_5);
    this.config = _config_5;
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
  destroy(): void {
    super.destroy();
  }
}
