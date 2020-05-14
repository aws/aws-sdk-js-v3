import {
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput
} from "./commands/AllQueryStringTypesCommand";
import {
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput
} from "./commands/ConstantAndVariableQueryStringCommand";
import {
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput
} from "./commands/ConstantQueryStringCommand";
import {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput
} from "./commands/EmptyInputAndEmptyOutputCommand";
import {
  FlattenedXmlMapCommandInput,
  FlattenedXmlMapCommandOutput
} from "./commands/FlattenedXmlMapCommand";
import {
  FlattenedXmlMapWithXmlNameCommandInput,
  FlattenedXmlMapWithXmlNameCommandOutput
} from "./commands/FlattenedXmlMapWithXmlNameCommand";
import {
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput
} from "./commands/GreetingWithErrorsCommand";
import {
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput
} from "./commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput
} from "./commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput
} from "./commands/HttpPayloadWithStructureCommand";
import {
  HttpPayloadWithXmlNameCommandInput,
  HttpPayloadWithXmlNameCommandOutput
} from "./commands/HttpPayloadWithXmlNameCommand";
import {
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput
} from "./commands/HttpPayloadWithXmlNamespaceAndPrefixCommand";
import {
  HttpPayloadWithXmlNamespaceCommandInput,
  HttpPayloadWithXmlNamespaceCommandOutput
} from "./commands/HttpPayloadWithXmlNamespaceCommand";
import {
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput
} from "./commands/HttpPrefixHeadersCommand";
import {
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput
} from "./commands/HttpRequestWithGreedyLabelInPathCommand";
import {
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput
} from "./commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import {
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput
} from "./commands/HttpRequestWithLabelsCommand";
import {
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput
} from "./commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput
} from "./commands/InputAndOutputWithHeadersCommand";
import {
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput
} from "./commands/NoInputAndNoOutputCommand";
import {
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput
} from "./commands/NoInputAndOutputCommand";
import {
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput
} from "./commands/NullAndEmptyHeadersClientCommand";
import {
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput
} from "./commands/NullAndEmptyHeadersServerCommand";
import {
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput
} from "./commands/OmitsNullSerializesEmptyStringCommand";
import {
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import {
  RecursiveShapesCommandInput,
  RecursiveShapesCommandOutput
} from "./commands/RecursiveShapesCommand";
import {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput
} from "./commands/SimpleScalarPropertiesCommand";
import {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput
} from "./commands/TimestampFormatHeadersCommand";
import {
  XmlAttributesCommandInput,
  XmlAttributesCommandOutput
} from "./commands/XmlAttributesCommand";
import {
  XmlAttributesOnPayloadCommandInput,
  XmlAttributesOnPayloadCommandOutput
} from "./commands/XmlAttributesOnPayloadCommand";
import {
  XmlBlobsCommandInput,
  XmlBlobsCommandOutput
} from "./commands/XmlBlobsCommand";
import {
  XmlEnumsCommandInput,
  XmlEnumsCommandOutput
} from "./commands/XmlEnumsCommand";
import {
  XmlListsCommandInput,
  XmlListsCommandOutput
} from "./commands/XmlListsCommand";
import {
  XmlMapsCommandInput,
  XmlMapsCommandOutput
} from "./commands/XmlMapsCommand";
import {
  XmlMapsXmlNameCommandInput,
  XmlMapsXmlNameCommandOutput
} from "./commands/XmlMapsXmlNameCommand";
import {
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput
} from "./commands/XmlNamespacesCommand";
import {
  XmlTimestampsCommandInput,
  XmlTimestampsCommandOutput
} from "./commands/XmlTimestampsCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AllQueryStringTypesCommandInput
  | ConstantAndVariableQueryStringCommandInput
  | ConstantQueryStringCommandInput
  | EmptyInputAndEmptyOutputCommandInput
  | FlattenedXmlMapCommandInput
  | FlattenedXmlMapWithXmlNameCommandInput
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
  | XmlEnumsCommandInput
  | XmlListsCommandInput
  | XmlMapsCommandInput
  | XmlMapsXmlNameCommandInput
  | XmlNamespacesCommandInput
  | XmlTimestampsCommandInput;

export type ServiceOutputTypes =
  | AllQueryStringTypesCommandOutput
  | ConstantAndVariableQueryStringCommandOutput
  | ConstantQueryStringCommandOutput
  | EmptyInputAndEmptyOutputCommandOutput
  | FlattenedXmlMapCommandOutput
  | FlattenedXmlMapWithXmlNameCommandOutput
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
  | XmlEnumsCommandOutput
  | XmlListsCommandOutput
  | XmlMapsCommandOutput
  | XmlMapsXmlNameCommandOutput
  | XmlNamespacesCommandOutput
  | XmlTimestampsCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

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
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type RestXmlProtocolClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type RestXmlProtocolClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

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
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
