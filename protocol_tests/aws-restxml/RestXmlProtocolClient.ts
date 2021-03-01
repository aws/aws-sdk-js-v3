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
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import { EndpointOperationCommandInput, EndpointOperationCommandOutput } from "./commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelHeaderOperationCommandInput,
  EndpointWithHostLabelHeaderOperationCommandOutput,
} from "./commands/EndpointWithHostLabelHeaderOperationCommand";
import {
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import { FlattenedXmlMapCommandInput, FlattenedXmlMapCommandOutput } from "./commands/FlattenedXmlMapCommand";
import {
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput,
} from "./commands/FlattenedXmlMapWithXmlNameCommand";
import {
  FlattenedXmlMapWithXmlNamespaceCommandInput,
  FlattenedXmlMapWithXmlNamespaceCommandOutput,
} from "./commands/FlattenedXmlMapWithXmlNamespaceCommand";
import { GreetingWithErrorsCommandInput, GreetingWithErrorsCommandOutput } from "./commands/GreetingWithErrorsCommand";
import { HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput } from "./commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "./commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
import {
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput,
} from "./commands/HttpPayloadWithXmlNameCommand";
import {
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput,
} from "./commands/HttpPayloadWithXmlNamespaceAndPrefixCommand";
import {
  HttpPayloadWithXmlNamespaceCommandInput,
  HttpPayloadWithXmlNamespaceCommandOutput,
} from "./commands/HttpPayloadWithXmlNamespaceCommand";
import { HttpPrefixHeadersCommandInput, HttpPrefixHeadersCommandOutput } from "./commands/HttpPrefixHeadersCommand";
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
import {
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "./commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "./commands/InputAndOutputWithHeadersCommand";
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
import { RecursiveShapesCommandInput, RecursiveShapesCommandOutput } from "./commands/RecursiveShapesCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import { XmlAttributesCommandInput, XmlAttributesCommandOutput } from "./commands/XmlAttributesCommand";
import {
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput,
} from "./commands/XmlAttributesOnPayloadCommand";
import { XmlBlobsCommandInput, XmlBlobsCommandOutput } from "./commands/XmlBlobsCommand";
import { XmlEmptyBlobsCommandInput, XmlEmptyBlobsCommandOutput } from "./commands/XmlEmptyBlobsCommand";
import { XmlEmptyListsCommandInput, XmlEmptyListsCommandOutput } from "./commands/XmlEmptyListsCommand";
import { XmlEmptyMapsCommandInput, XmlEmptyMapsCommandOutput } from "./commands/XmlEmptyMapsCommand";
import { XmlEmptyStringsCommandInput, XmlEmptyStringsCommandOutput } from "./commands/XmlEmptyStringsCommand";
import { XmlEnumsCommandInput, XmlEnumsCommandOutput } from "./commands/XmlEnumsCommand";
import { XmlListsCommandInput, XmlListsCommandOutput } from "./commands/XmlListsCommand";
import { XmlMapsCommandInput, XmlMapsCommandOutput } from "./commands/XmlMapsCommand";
import { XmlMapsXmlNameCommandInput, XmlMapsXmlNameCommandOutput } from "./commands/XmlMapsXmlNameCommand";
import { XmlNamespacesCommandInput, XmlNamespacesCommandOutput } from "./commands/XmlNamespacesCommand";
import { XmlTimestampsCommandInput, XmlTimestampsCommandOutput } from "./commands/XmlTimestampsCommand";
import { XmlUnionsCommandInput, XmlUnionsCommandOutput } from "./commands/XmlUnionsCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
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
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AllQueryStringTypesCommandInput
  | ConstantAndVariableQueryStringCommandInput
  | ConstantQueryStringCommandInput
  | EmptyInputAndEmptyOutputCommandInput
  | EndpointOperationCommandInput
  | EndpointWithHostLabelHeaderOperationCommandInput
  | EndpointWithHostLabelOperationCommandInput
  | FlattenedXmlMapCommandInput
  | FlattenedXmlMapWithXmlNameCommandInput
  | FlattenedXmlMapWithXmlNamespaceCommandInput
  | GreetingWithErrorsCommandInput
  | HttpPayloadTraitsCommandInput
  | HttpPayloadTraitsWithMediaTypeCommandInput
  | HttpPayloadWithStructureCommandInput
  | HttpPayloadWithXmlNameCommandInput
  | HttpPayloadWithXmlNamespaceAndPrefixCommandInput
  | HttpPayloadWithXmlNamespaceCommandInput
  | HttpPrefixHeadersCommandInput
  | HttpRequestWithGreedyLabelInPathCommandInput
  | HttpRequestWithLabelsAndTimestampFormatCommandInput
  | HttpRequestWithLabelsCommandInput
  | HttpResponseCodeCommandInput
  | IgnoreQueryParamsInResponseCommandInput
  | InputAndOutputWithHeadersCommandInput
  | NoInputAndNoOutputCommandInput
  | NoInputAndOutputCommandInput
  | NullAndEmptyHeadersClientCommandInput
  | NullAndEmptyHeadersServerCommandInput
  | OmitsNullSerializesEmptyStringCommandInput
  | QueryIdempotencyTokenAutoFillCommandInput
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
  | XmlListsCommandInput
  | XmlMapsCommandInput
  | XmlMapsXmlNameCommandInput
  | XmlNamespacesCommandInput
  | XmlTimestampsCommandInput
  | XmlUnionsCommandInput;

export type ServiceOutputTypes =
  | AllQueryStringTypesCommandOutput
  | ConstantAndVariableQueryStringCommandOutput
  | ConstantQueryStringCommandOutput
  | EmptyInputAndEmptyOutputCommandOutput
  | EndpointOperationCommandOutput
  | EndpointWithHostLabelHeaderOperationCommandOutput
  | EndpointWithHostLabelOperationCommandOutput
  | FlattenedXmlMapCommandOutput
  | FlattenedXmlMapWithXmlNameCommandOutput
  | FlattenedXmlMapWithXmlNamespaceCommandOutput
  | GreetingWithErrorsCommandOutput
  | HttpPayloadTraitsCommandOutput
  | HttpPayloadTraitsWithMediaTypeCommandOutput
  | HttpPayloadWithStructureCommandOutput
  | HttpPayloadWithXmlNameCommandOutput
  | HttpPayloadWithXmlNamespaceAndPrefixCommandOutput
  | HttpPayloadWithXmlNamespaceCommandOutput
  | HttpPrefixHeadersCommandOutput
  | HttpRequestWithGreedyLabelInPathCommandOutput
  | HttpRequestWithLabelsAndTimestampFormatCommandOutput
  | HttpRequestWithLabelsCommandOutput
  | HttpResponseCodeCommandOutput
  | IgnoreQueryParamsInResponseCommandOutput
  | InputAndOutputWithHeadersCommandOutput
  | NoInputAndNoOutputCommandOutput
  | NoInputAndOutputCommandOutput
  | NullAndEmptyHeadersClientCommandOutput
  | NullAndEmptyHeadersServerCommandOutput
  | OmitsNullSerializesEmptyStringCommandOutput
  | QueryIdempotencyTokenAutoFillCommandOutput
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
  | XmlListsCommandOutput
  | XmlMapsCommandOutput
  | XmlMapsXmlNameCommandOutput
  | XmlNamespacesCommandOutput
  | XmlTimestampsCommandOutput
  | XmlUnionsCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type RestXmlProtocolClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type RestXmlProtocolClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * A REST XML service that sends XML requests and responses.
 */
export class RestXmlProtocolClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RestXmlProtocolClientResolvedConfig
> {
  readonly config: RestXmlProtocolClientResolvedConfig;

  constructor(configuration: RestXmlProtocolClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
