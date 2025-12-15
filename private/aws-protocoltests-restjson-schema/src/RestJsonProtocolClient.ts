// smithy-typescript generated code
import {
  type EventStreamInputConfig,
  type EventStreamResolvedConfig,
  resolveEventStreamConfig,
} from "@aws-sdk/middleware-eventstream";
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
import { EventStreamPayloadHandlerProvider as __EventStreamPayloadHandlerProvider } from "@aws-sdk/types";
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
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
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
  type Checksum as __Checksum,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type EventStreamSerdeProvider as __EventStreamSerdeProvider,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type SdkStreamMixinInjector as __SdkStreamMixinInjector,
  type StreamCollector as __StreamCollector,
  type StreamHasher as __StreamHasher,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";
import { Readable } from "stream";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultRestJsonProtocolHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "./commands/AllQueryStringTypesCommand";
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
  DocumentTypeAsMapValueCommandInput,
  DocumentTypeAsMapValueCommandOutput,
} from "./commands/DocumentTypeAsMapValueCommand";
import type {
  DocumentTypeAsPayloadCommandInput,
  DocumentTypeAsPayloadCommandOutput,
} from "./commands/DocumentTypeAsPayloadCommand";
import type { DocumentTypeCommandInput, DocumentTypeCommandOutput } from "./commands/DocumentTypeCommand";
import type { DuplexStreamCommandInput, DuplexStreamCommandOutput } from "./commands/DuplexStreamCommand";
import type {
  DuplexStreamWithDistinctStreamsCommandInput,
  DuplexStreamWithDistinctStreamsCommandOutput,
} from "./commands/DuplexStreamWithDistinctStreamsCommand";
import type {
  DuplexStreamWithInitialMessagesCommandInput,
  DuplexStreamWithInitialMessagesCommandOutput,
} from "./commands/DuplexStreamWithInitialMessagesCommand";
import type {
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import type {
  EndpointOperationCommandInput,
  EndpointOperationCommandOutput,
} from "./commands/EndpointOperationCommand";
import type {
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import type {
  FractionalSecondsCommandInput,
  FractionalSecondsCommandOutput,
} from "./commands/FractionalSecondsCommand";
import type {
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "./commands/GreetingWithErrorsCommand";
import type {
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
} from "./commands/HostWithPathOperationCommand";
import type {
  HttpChecksumRequiredCommandInput,
  HttpChecksumRequiredCommandOutput,
} from "./commands/HttpChecksumRequiredCommand";
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
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
import type {
  HttpPayloadWithUnionCommandInput,
  HttpPayloadWithUnionCommandOutput,
} from "./commands/HttpPayloadWithUnionCommand";
import type {
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
} from "./commands/HttpPrefixHeadersCommand";
import type {
  HttpPrefixHeadersInResponseCommandInput,
  HttpPrefixHeadersInResponseCommandOutput,
} from "./commands/HttpPrefixHeadersInResponseCommand";
import type {
  HttpQueryParamsOnlyOperationCommandInput,
  HttpQueryParamsOnlyOperationCommandOutput,
} from "./commands/HttpQueryParamsOnlyOperationCommand";
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
import type {
  HttpRequestWithRegexLiteralCommandInput,
  HttpRequestWithRegexLiteralCommandOutput,
} from "./commands/HttpRequestWithRegexLiteralCommand";
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
import type { InputStreamCommandInput, InputStreamCommandOutput } from "./commands/InputStreamCommand";
import type {
  InputStreamWithInitialRequestCommandInput,
  InputStreamWithInitialRequestCommandOutput,
} from "./commands/InputStreamWithInitialRequestCommand";
import type { JsonBlobsCommandInput, JsonBlobsCommandOutput } from "./commands/JsonBlobsCommand";
import type { JsonEnumsCommandInput, JsonEnumsCommandOutput } from "./commands/JsonEnumsCommand";
import type { JsonIntEnumsCommandInput, JsonIntEnumsCommandOutput } from "./commands/JsonIntEnumsCommand";
import type { JsonListsCommandInput, JsonListsCommandOutput } from "./commands/JsonListsCommand";
import type { JsonMapsCommandInput, JsonMapsCommandOutput } from "./commands/JsonMapsCommand";
import type { JsonTimestampsCommandInput, JsonTimestampsCommandOutput } from "./commands/JsonTimestampsCommand";
import type { JsonUnionsCommandInput, JsonUnionsCommandOutput } from "./commands/JsonUnionsCommand";
import type {
  MalformedAcceptWithBodyCommandInput,
  MalformedAcceptWithBodyCommandOutput,
} from "./commands/MalformedAcceptWithBodyCommand";
import type {
  MalformedAcceptWithGenericStringCommandInput,
  MalformedAcceptWithGenericStringCommandOutput,
} from "./commands/MalformedAcceptWithGenericStringCommand";
import type {
  MalformedAcceptWithPayloadCommandInput,
  MalformedAcceptWithPayloadCommandOutput,
} from "./commands/MalformedAcceptWithPayloadCommand";
import type { MalformedBlobCommandInput, MalformedBlobCommandOutput } from "./commands/MalformedBlobCommand";
import type { MalformedBooleanCommandInput, MalformedBooleanCommandOutput } from "./commands/MalformedBooleanCommand";
import type { MalformedByteCommandInput, MalformedByteCommandOutput } from "./commands/MalformedByteCommand";
import type {
  MalformedContentTypeWithBodyCommandInput,
  MalformedContentTypeWithBodyCommandOutput,
} from "./commands/MalformedContentTypeWithBodyCommand";
import type {
  MalformedContentTypeWithGenericStringCommandInput,
  MalformedContentTypeWithGenericStringCommandOutput,
} from "./commands/MalformedContentTypeWithGenericStringCommand";
import type {
  MalformedContentTypeWithoutBodyCommandInput,
  MalformedContentTypeWithoutBodyCommandOutput,
} from "./commands/MalformedContentTypeWithoutBodyCommand";
import type {
  MalformedContentTypeWithoutBodyEmptyInputCommandInput,
  MalformedContentTypeWithoutBodyEmptyInputCommandOutput,
} from "./commands/MalformedContentTypeWithoutBodyEmptyInputCommand";
import type {
  MalformedContentTypeWithPayloadCommandInput,
  MalformedContentTypeWithPayloadCommandOutput,
} from "./commands/MalformedContentTypeWithPayloadCommand";
import type { MalformedDoubleCommandInput, MalformedDoubleCommandOutput } from "./commands/MalformedDoubleCommand";
import type { MalformedFloatCommandInput, MalformedFloatCommandOutput } from "./commands/MalformedFloatCommand";
import type { MalformedIntegerCommandInput, MalformedIntegerCommandOutput } from "./commands/MalformedIntegerCommand";
import type { MalformedListCommandInput, MalformedListCommandOutput } from "./commands/MalformedListCommand";
import type { MalformedLongCommandInput, MalformedLongCommandOutput } from "./commands/MalformedLongCommand";
import type { MalformedMapCommandInput, MalformedMapCommandOutput } from "./commands/MalformedMapCommand";
import type {
  MalformedRequestBodyCommandInput,
  MalformedRequestBodyCommandOutput,
} from "./commands/MalformedRequestBodyCommand";
import type { MalformedShortCommandInput, MalformedShortCommandOutput } from "./commands/MalformedShortCommand";
import type { MalformedStringCommandInput, MalformedStringCommandOutput } from "./commands/MalformedStringCommand";
import type {
  MalformedTimestampBodyDateTimeCommandInput,
  MalformedTimestampBodyDateTimeCommandOutput,
} from "./commands/MalformedTimestampBodyDateTimeCommand";
import type {
  MalformedTimestampBodyDefaultCommandInput,
  MalformedTimestampBodyDefaultCommandOutput,
} from "./commands/MalformedTimestampBodyDefaultCommand";
import type {
  MalformedTimestampBodyHttpDateCommandInput,
  MalformedTimestampBodyHttpDateCommandOutput,
} from "./commands/MalformedTimestampBodyHttpDateCommand";
import type {
  MalformedTimestampHeaderDateTimeCommandInput,
  MalformedTimestampHeaderDateTimeCommandOutput,
} from "./commands/MalformedTimestampHeaderDateTimeCommand";
import type {
  MalformedTimestampHeaderDefaultCommandInput,
  MalformedTimestampHeaderDefaultCommandOutput,
} from "./commands/MalformedTimestampHeaderDefaultCommand";
import type {
  MalformedTimestampHeaderEpochCommandInput,
  MalformedTimestampHeaderEpochCommandOutput,
} from "./commands/MalformedTimestampHeaderEpochCommand";
import type {
  MalformedTimestampPathDefaultCommandInput,
  MalformedTimestampPathDefaultCommandOutput,
} from "./commands/MalformedTimestampPathDefaultCommand";
import type {
  MalformedTimestampPathEpochCommandInput,
  MalformedTimestampPathEpochCommandOutput,
} from "./commands/MalformedTimestampPathEpochCommand";
import type {
  MalformedTimestampPathHttpDateCommandInput,
  MalformedTimestampPathHttpDateCommandOutput,
} from "./commands/MalformedTimestampPathHttpDateCommand";
import type {
  MalformedTimestampQueryDefaultCommandInput,
  MalformedTimestampQueryDefaultCommandOutput,
} from "./commands/MalformedTimestampQueryDefaultCommand";
import type {
  MalformedTimestampQueryEpochCommandInput,
  MalformedTimestampQueryEpochCommandOutput,
} from "./commands/MalformedTimestampQueryEpochCommand";
import type {
  MalformedTimestampQueryHttpDateCommandInput,
  MalformedTimestampQueryHttpDateCommandOutput,
} from "./commands/MalformedTimestampQueryHttpDateCommand";
import type { MalformedUnionCommandInput, MalformedUnionCommandOutput } from "./commands/MalformedUnionCommand";
import type { MediaTypeHeaderCommandInput, MediaTypeHeaderCommandOutput } from "./commands/MediaTypeHeaderCommand";
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
  OmitsSerializingEmptyListsCommandInput,
  OmitsSerializingEmptyListsCommandOutput,
} from "./commands/OmitsSerializingEmptyListsCommand";
import type {
  OperationWithDefaultsCommandInput,
  OperationWithDefaultsCommandOutput,
} from "./commands/OperationWithDefaultsCommand";
import type {
  OperationWithNestedStructureCommandInput,
  OperationWithNestedStructureCommandOutput,
} from "./commands/OperationWithNestedStructureCommand";
import type { OutputStreamCommandInput, OutputStreamCommandOutput } from "./commands/OutputStreamCommand";
import type {
  OutputStreamWithInitialResponseCommandInput,
  OutputStreamWithInitialResponseCommandOutput,
} from "./commands/OutputStreamWithInitialResponseCommand";
import type { PostPlayerActionCommandInput, PostPlayerActionCommandOutput } from "./commands/PostPlayerActionCommand";
import type {
  PostUnionWithJsonNameCommandInput,
  PostUnionWithJsonNameCommandOutput,
} from "./commands/PostUnionWithJsonNameCommand";
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
  ResponseCodeHttpFallbackCommandInput,
  ResponseCodeHttpFallbackCommandOutput,
} from "./commands/ResponseCodeHttpFallbackCommand";
import type {
  ResponseCodeRequiredCommandInput,
  ResponseCodeRequiredCommandOutput,
} from "./commands/ResponseCodeRequiredCommand";
import type {
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import type { SparseJsonListsCommandInput, SparseJsonListsCommandOutput } from "./commands/SparseJsonListsCommand";
import type { SparseJsonMapsCommandInput, SparseJsonMapsCommandOutput } from "./commands/SparseJsonMapsCommand";
import type { StreamingTraitsCommandInput, StreamingTraitsCommandOutput } from "./commands/StreamingTraitsCommand";
import type {
  StreamingTraitsRequireLengthCommandInput,
  StreamingTraitsRequireLengthCommandOutput,
} from "./commands/StreamingTraitsRequireLengthCommand";
import type {
  StreamingTraitsWithMediaTypeCommandInput,
  StreamingTraitsWithMediaTypeCommandOutput,
} from "./commands/StreamingTraitsWithMediaTypeCommand";
import type {
  TestBodyStructureCommandInput,
  TestBodyStructureCommandOutput,
} from "./commands/TestBodyStructureCommand";
import type {
  TestGetNoInputNoPayloadCommandInput,
  TestGetNoInputNoPayloadCommandOutput,
} from "./commands/TestGetNoInputNoPayloadCommand";
import type { TestGetNoPayloadCommandInput, TestGetNoPayloadCommandOutput } from "./commands/TestGetNoPayloadCommand";
import type { TestPayloadBlobCommandInput, TestPayloadBlobCommandOutput } from "./commands/TestPayloadBlobCommand";
import type {
  TestPayloadStructureCommandInput,
  TestPayloadStructureCommandOutput,
} from "./commands/TestPayloadStructureCommand";
import type {
  TestPostNoInputNoPayloadCommandInput,
  TestPostNoInputNoPayloadCommandOutput,
} from "./commands/TestPostNoInputNoPayloadCommand";
import type {
  TestPostNoPayloadCommandInput,
  TestPostNoPayloadCommandOutput,
} from "./commands/TestPostNoPayloadCommand";
import type {
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import type {
  UnitInputAndOutputCommandInput,
  UnitInputAndOutputCommandOutput,
} from "./commands/UnitInputAndOutputCommand";
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
  | ConstantAndVariableQueryStringCommandInput
  | ConstantQueryStringCommandInput
  | ContentTypeParametersCommandInput
  | DatetimeOffsetsCommandInput
  | DocumentTypeAsMapValueCommandInput
  | DocumentTypeAsPayloadCommandInput
  | DocumentTypeCommandInput
  | DuplexStreamCommandInput
  | DuplexStreamWithDistinctStreamsCommandInput
  | DuplexStreamWithInitialMessagesCommandInput
  | EmptyInputAndEmptyOutputCommandInput
  | EndpointOperationCommandInput
  | EndpointWithHostLabelOperationCommandInput
  | FractionalSecondsCommandInput
  | GreetingWithErrorsCommandInput
  | HostWithPathOperationCommandInput
  | HttpChecksumRequiredCommandInput
  | HttpEmptyPrefixHeadersCommandInput
  | HttpEnumPayloadCommandInput
  | HttpPayloadTraitsCommandInput
  | HttpPayloadTraitsWithMediaTypeCommandInput
  | HttpPayloadWithStructureCommandInput
  | HttpPayloadWithUnionCommandInput
  | HttpPrefixHeadersCommandInput
  | HttpPrefixHeadersInResponseCommandInput
  | HttpQueryParamsOnlyOperationCommandInput
  | HttpRequestWithFloatLabelsCommandInput
  | HttpRequestWithGreedyLabelInPathCommandInput
  | HttpRequestWithLabelsAndTimestampFormatCommandInput
  | HttpRequestWithLabelsCommandInput
  | HttpRequestWithRegexLiteralCommandInput
  | HttpResponseCodeCommandInput
  | HttpStringPayloadCommandInput
  | IgnoreQueryParamsInResponseCommandInput
  | InputAndOutputWithHeadersCommandInput
  | InputStreamCommandInput
  | InputStreamWithInitialRequestCommandInput
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
  | MalformedContentTypeWithoutBodyEmptyInputCommandInput
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
  | OperationWithDefaultsCommandInput
  | OperationWithNestedStructureCommandInput
  | OutputStreamCommandInput
  | OutputStreamWithInitialResponseCommandInput
  | PostPlayerActionCommandInput
  | PostUnionWithJsonNameCommandInput
  | PutWithContentEncodingCommandInput
  | QueryIdempotencyTokenAutoFillCommandInput
  | QueryParamsAsStringListMapCommandInput
  | QueryPrecedenceCommandInput
  | RecursiveShapesCommandInput
  | ResponseCodeHttpFallbackCommandInput
  | ResponseCodeRequiredCommandInput
  | SimpleScalarPropertiesCommandInput
  | SparseJsonListsCommandInput
  | SparseJsonMapsCommandInput
  | StreamingTraitsCommandInput
  | StreamingTraitsRequireLengthCommandInput
  | StreamingTraitsWithMediaTypeCommandInput
  | TestBodyStructureCommandInput
  | TestGetNoInputNoPayloadCommandInput
  | TestGetNoPayloadCommandInput
  | TestPayloadBlobCommandInput
  | TestPayloadStructureCommandInput
  | TestPostNoInputNoPayloadCommandInput
  | TestPostNoPayloadCommandInput
  | TimestampFormatHeadersCommandInput
  | UnitInputAndOutputCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AllQueryStringTypesCommandOutput
  | ConstantAndVariableQueryStringCommandOutput
  | ConstantQueryStringCommandOutput
  | ContentTypeParametersCommandOutput
  | DatetimeOffsetsCommandOutput
  | DocumentTypeAsMapValueCommandOutput
  | DocumentTypeAsPayloadCommandOutput
  | DocumentTypeCommandOutput
  | DuplexStreamCommandOutput
  | DuplexStreamWithDistinctStreamsCommandOutput
  | DuplexStreamWithInitialMessagesCommandOutput
  | EmptyInputAndEmptyOutputCommandOutput
  | EndpointOperationCommandOutput
  | EndpointWithHostLabelOperationCommandOutput
  | FractionalSecondsCommandOutput
  | GreetingWithErrorsCommandOutput
  | HostWithPathOperationCommandOutput
  | HttpChecksumRequiredCommandOutput
  | HttpEmptyPrefixHeadersCommandOutput
  | HttpEnumPayloadCommandOutput
  | HttpPayloadTraitsCommandOutput
  | HttpPayloadTraitsWithMediaTypeCommandOutput
  | HttpPayloadWithStructureCommandOutput
  | HttpPayloadWithUnionCommandOutput
  | HttpPrefixHeadersCommandOutput
  | HttpPrefixHeadersInResponseCommandOutput
  | HttpQueryParamsOnlyOperationCommandOutput
  | HttpRequestWithFloatLabelsCommandOutput
  | HttpRequestWithGreedyLabelInPathCommandOutput
  | HttpRequestWithLabelsAndTimestampFormatCommandOutput
  | HttpRequestWithLabelsCommandOutput
  | HttpRequestWithRegexLiteralCommandOutput
  | HttpResponseCodeCommandOutput
  | HttpStringPayloadCommandOutput
  | IgnoreQueryParamsInResponseCommandOutput
  | InputAndOutputWithHeadersCommandOutput
  | InputStreamCommandOutput
  | InputStreamWithInitialRequestCommandOutput
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
  | MalformedContentTypeWithoutBodyEmptyInputCommandOutput
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
  | OperationWithDefaultsCommandOutput
  | OperationWithNestedStructureCommandOutput
  | OutputStreamCommandOutput
  | OutputStreamWithInitialResponseCommandOutput
  | PostPlayerActionCommandOutput
  | PostUnionWithJsonNameCommandOutput
  | PutWithContentEncodingCommandOutput
  | QueryIdempotencyTokenAutoFillCommandOutput
  | QueryParamsAsStringListMapCommandOutput
  | QueryPrecedenceCommandOutput
  | RecursiveShapesCommandOutput
  | ResponseCodeHttpFallbackCommandOutput
  | ResponseCodeRequiredCommandOutput
  | SimpleScalarPropertiesCommandOutput
  | SparseJsonListsCommandOutput
  | SparseJsonMapsCommandOutput
  | StreamingTraitsCommandOutput
  | StreamingTraitsRequireLengthCommandOutput
  | StreamingTraitsWithMediaTypeCommandOutput
  | TestBodyStructureCommandOutput
  | TestGetNoInputNoPayloadCommandOutput
  | TestGetNoPayloadCommandOutput
  | TestPayloadBlobCommandOutput
  | TestPayloadStructureCommandOutput
  | TestPostNoInputNoPayloadCommandOutput
  | TestPostNoPayloadCommandOutput
  | TimestampFormatHeadersCommandOutput
  | UnitInputAndOutputCommandOutput;

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
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value.
   * @internal
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes MD5 hashes.
   * @internal
   */
  md5?: __ChecksumConstructor | __HashConstructor;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
  /**
   * The function that provides necessary utilities for handling request event stream.
   * @internal
   */
  eventStreamPayloadHandlerProvider?: __EventStreamPayloadHandlerProvider;

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
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  DefaultAwsRegionalEndpointsInputConfig &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  EventStreamInputConfig &
  CompressionInputConfig &
  ClientInputEndpointParameters;
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
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  DefaultAwsRegionalEndpointsResolvedConfig &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  EventStreamResolvedConfig &
  CompressionResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of RestJsonProtocolClient class. This is resolved and normalized from the {@link RestJsonProtocolClientConfig | constructor configuration interface}.
 */
export interface RestJsonProtocolClientResolvedConfig extends RestJsonProtocolClientResolvedConfigType {}

/**
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<RestJsonProtocolClientConfig>) {
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
    const _config_8 = resolveEventStreamSerdeConfig(_config_7);
    const _config_9 = resolveHttpAuthSchemeConfig(_config_8);
    const _config_10 = resolveEventStreamConfig(_config_9);
    const _config_11 = resolveCompressionConfig(_config_10);
    const _config_12 = resolveRuntimeExtensions(_config_11, configuration?.extensions || []);
    this.config = _config_12;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultRestJsonProtocolHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: RestJsonProtocolClientResolvedConfig) =>
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
