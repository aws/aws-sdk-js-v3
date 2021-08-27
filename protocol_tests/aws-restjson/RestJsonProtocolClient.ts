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
  HttpPrefixHeadersResponseCommandInput,
  HttpPrefixHeadersResponseCommandOutput,
} from "./commands/HttpPrefixHeadersResponseCommand";
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
import { JsonListsCommandInput, JsonListsCommandOutput } from "./commands/JsonListsCommand";
import { JsonMapsCommandInput, JsonMapsCommandOutput } from "./commands/JsonMapsCommand";
import { JsonTimestampsCommandInput, JsonTimestampsCommandOutput } from "./commands/JsonTimestampsCommand";
import { JsonUnionsCommandInput, JsonUnionsCommandOutput } from "./commands/JsonUnionsCommand";
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
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { Readable } from "stream";

export type ServiceInputTypes =
  | AllQueryStringTypesCommandInput
  | ConstantAndVariableQueryStringCommandInput
  | ConstantQueryStringCommandInput
  | DocumentTypeAsPayloadCommandInput
  | DocumentTypeCommandInput
  | EmptyInputAndEmptyOutputCommandInput
  | EndpointOperationCommandInput
  | EndpointWithHostLabelOperationCommandInput
  | GreetingWithErrorsCommandInput
  | HostWithPathOperationCommandInput
  | HttpChecksumRequiredCommandInput
  | HttpEnumPayloadCommandInput
  | HttpPayloadTraitsCommandInput
  | HttpPayloadTraitsWithMediaTypeCommandInput
  | HttpPayloadWithStructureCommandInput
  | HttpPrefixHeadersCommandInput
  | HttpPrefixHeadersResponseCommandInput
  | HttpRequestWithFloatLabelsCommandInput
  | HttpRequestWithGreedyLabelInPathCommandInput
  | HttpRequestWithLabelsAndTimestampFormatCommandInput
  | HttpRequestWithLabelsCommandInput
  | HttpResponseCodeCommandInput
  | HttpStringPayloadCommandInput
  | IgnoreQueryParamsInResponseCommandInput
  | InputAndOutputWithHeadersCommandInput
  | JsonBlobsCommandInput
  | JsonEnumsCommandInput
  | JsonListsCommandInput
  | JsonMapsCommandInput
  | JsonTimestampsCommandInput
  | JsonUnionsCommandInput
  | MediaTypeHeaderCommandInput
  | NoInputAndNoOutputCommandInput
  | NoInputAndOutputCommandInput
  | NullAndEmptyHeadersClientCommandInput
  | NullAndEmptyHeadersServerCommandInput
  | OmitsNullSerializesEmptyStringCommandInput
  | QueryIdempotencyTokenAutoFillCommandInput
  | QueryParamsAsStringListMapCommandInput
  | QueryPrecedenceCommandInput
  | RecursiveShapesCommandInput
  | SimpleScalarPropertiesCommandInput
  | StreamingTraitsCommandInput
  | StreamingTraitsRequireLengthCommandInput
  | StreamingTraitsWithMediaTypeCommandInput
  | TimestampFormatHeadersCommandInput;

export type ServiceOutputTypes =
  | AllQueryStringTypesCommandOutput
  | ConstantAndVariableQueryStringCommandOutput
  | ConstantQueryStringCommandOutput
  | DocumentTypeAsPayloadCommandOutput
  | DocumentTypeCommandOutput
  | EmptyInputAndEmptyOutputCommandOutput
  | EndpointOperationCommandOutput
  | EndpointWithHostLabelOperationCommandOutput
  | GreetingWithErrorsCommandOutput
  | HostWithPathOperationCommandOutput
  | HttpChecksumRequiredCommandOutput
  | HttpEnumPayloadCommandOutput
  | HttpPayloadTraitsCommandOutput
  | HttpPayloadTraitsWithMediaTypeCommandOutput
  | HttpPayloadWithStructureCommandOutput
  | HttpPrefixHeadersCommandOutput
  | HttpPrefixHeadersResponseCommandOutput
  | HttpRequestWithFloatLabelsCommandOutput
  | HttpRequestWithGreedyLabelInPathCommandOutput
  | HttpRequestWithLabelsAndTimestampFormatCommandOutput
  | HttpRequestWithLabelsCommandOutput
  | HttpResponseCodeCommandOutput
  | HttpStringPayloadCommandOutput
  | IgnoreQueryParamsInResponseCommandOutput
  | InputAndOutputWithHeadersCommandOutput
  | JsonBlobsCommandOutput
  | JsonEnumsCommandOutput
  | JsonListsCommandOutput
  | JsonMapsCommandOutput
  | JsonTimestampsCommandOutput
  | JsonUnionsCommandOutput
  | MediaTypeHeaderCommandOutput
  | NoInputAndNoOutputCommandOutput
  | NoInputAndOutputCommandOutput
  | NullAndEmptyHeadersClientCommandOutput
  | NullAndEmptyHeadersServerCommandOutput
  | OmitsNullSerializesEmptyStringCommandOutput
  | QueryIdempotencyTokenAutoFillCommandOutput
  | QueryParamsAsStringListMapCommandOutput
  | QueryPrecedenceCommandOutput
  | RecursiveShapesCommandOutput
  | SimpleScalarPropertiesCommandOutput
  | StreamingTraitsCommandOutput
  | StreamingTraitsRequireLengthCommandOutput
  | StreamingTraitsWithMediaTypeCommandOutput
  | TimestampFormatHeadersCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

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
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value.
   * @internal
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes MD5 hashes.
   * @internal
   */
  md5?: __HashConstructor;
}

type RestJsonProtocolClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of RestJsonProtocolClient class constructor that set the region, credentials and other options.
 */
export interface RestJsonProtocolClientConfig extends RestJsonProtocolClientConfigType {}

type RestJsonProtocolClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of RestJsonProtocolClient class. This is resolved and normalized from the {@link RestJsonProtocolClientConfig | constructor configuration interface}.
 */
export interface RestJsonProtocolClientResolvedConfig extends RestJsonProtocolClientResolvedConfigType {}

/**
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
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    super(_config_5);
    this.config = _config_5;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
