// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type AllQueryStringTypesCommandInput,
  type AllQueryStringTypesCommandOutput,
  AllQueryStringTypesCommand,
} from "./commands/AllQueryStringTypesCommand";
import {
  type ConstantAndVariableQueryStringCommandInput,
  type ConstantAndVariableQueryStringCommandOutput,
  ConstantAndVariableQueryStringCommand,
} from "./commands/ConstantAndVariableQueryStringCommand";
import {
  type ConstantQueryStringCommandInput,
  type ConstantQueryStringCommandOutput,
  ConstantQueryStringCommand,
} from "./commands/ConstantQueryStringCommand";
import {
  type ContentTypeParametersCommandInput,
  type ContentTypeParametersCommandOutput,
  ContentTypeParametersCommand,
} from "./commands/ContentTypeParametersCommand";
import {
  type DatetimeOffsetsCommandInput,
  type DatetimeOffsetsCommandOutput,
  DatetimeOffsetsCommand,
} from "./commands/DatetimeOffsetsCommand";
import {
  type DocumentTypeAsMapValueCommandInput,
  type DocumentTypeAsMapValueCommandOutput,
  DocumentTypeAsMapValueCommand,
} from "./commands/DocumentTypeAsMapValueCommand";
import {
  type DocumentTypeAsPayloadCommandInput,
  type DocumentTypeAsPayloadCommandOutput,
  DocumentTypeAsPayloadCommand,
} from "./commands/DocumentTypeAsPayloadCommand";
import {
  type DocumentTypeCommandInput,
  type DocumentTypeCommandOutput,
  DocumentTypeCommand,
} from "./commands/DocumentTypeCommand";
import {
  type DuplexStreamCommandInput,
  type DuplexStreamCommandOutput,
  DuplexStreamCommand,
} from "./commands/DuplexStreamCommand";
import {
  type DuplexStreamWithDistinctStreamsCommandInput,
  type DuplexStreamWithDistinctStreamsCommandOutput,
  DuplexStreamWithDistinctStreamsCommand,
} from "./commands/DuplexStreamWithDistinctStreamsCommand";
import {
  type DuplexStreamWithInitialMessagesCommandInput,
  type DuplexStreamWithInitialMessagesCommandOutput,
  DuplexStreamWithInitialMessagesCommand,
} from "./commands/DuplexStreamWithInitialMessagesCommand";
import {
  type EmptyInputAndEmptyOutputCommandInput,
  type EmptyInputAndEmptyOutputCommandOutput,
  EmptyInputAndEmptyOutputCommand,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import {
  type EndpointOperationCommandInput,
  type EndpointOperationCommandOutput,
  EndpointOperationCommand,
} from "./commands/EndpointOperationCommand";
import {
  type EndpointWithHostLabelOperationCommandInput,
  type EndpointWithHostLabelOperationCommandOutput,
  EndpointWithHostLabelOperationCommand,
} from "./commands/EndpointWithHostLabelOperationCommand";
import {
  type FractionalSecondsCommandInput,
  type FractionalSecondsCommandOutput,
  FractionalSecondsCommand,
} from "./commands/FractionalSecondsCommand";
import {
  type GreetingWithErrorsCommandInput,
  type GreetingWithErrorsCommandOutput,
  GreetingWithErrorsCommand,
} from "./commands/GreetingWithErrorsCommand";
import {
  type HostWithPathOperationCommandInput,
  type HostWithPathOperationCommandOutput,
  HostWithPathOperationCommand,
} from "./commands/HostWithPathOperationCommand";
import {
  type HttpChecksumRequiredCommandInput,
  type HttpChecksumRequiredCommandOutput,
  HttpChecksumRequiredCommand,
} from "./commands/HttpChecksumRequiredCommand";
import {
  type HttpEmptyPrefixHeadersCommandInput,
  type HttpEmptyPrefixHeadersCommandOutput,
  HttpEmptyPrefixHeadersCommand,
} from "./commands/HttpEmptyPrefixHeadersCommand";
import {
  type HttpEnumPayloadCommandInput,
  type HttpEnumPayloadCommandOutput,
  HttpEnumPayloadCommand,
} from "./commands/HttpEnumPayloadCommand";
import {
  type HttpPayloadTraitsCommandInput,
  type HttpPayloadTraitsCommandOutput,
  HttpPayloadTraitsCommand,
} from "./commands/HttpPayloadTraitsCommand";
import {
  type HttpPayloadTraitsWithMediaTypeCommandInput,
  type HttpPayloadTraitsWithMediaTypeCommandOutput,
  HttpPayloadTraitsWithMediaTypeCommand,
} from "./commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  type HttpPayloadWithStructureCommandInput,
  type HttpPayloadWithStructureCommandOutput,
  HttpPayloadWithStructureCommand,
} from "./commands/HttpPayloadWithStructureCommand";
import {
  type HttpPayloadWithUnionCommandInput,
  type HttpPayloadWithUnionCommandOutput,
  HttpPayloadWithUnionCommand,
} from "./commands/HttpPayloadWithUnionCommand";
import {
  type HttpPrefixHeadersCommandInput,
  type HttpPrefixHeadersCommandOutput,
  HttpPrefixHeadersCommand,
} from "./commands/HttpPrefixHeadersCommand";
import {
  type HttpPrefixHeadersInResponseCommandInput,
  type HttpPrefixHeadersInResponseCommandOutput,
  HttpPrefixHeadersInResponseCommand,
} from "./commands/HttpPrefixHeadersInResponseCommand";
import {
  type HttpQueryParamsOnlyOperationCommandInput,
  type HttpQueryParamsOnlyOperationCommandOutput,
  HttpQueryParamsOnlyOperationCommand,
} from "./commands/HttpQueryParamsOnlyOperationCommand";
import {
  type HttpRequestWithFloatLabelsCommandInput,
  type HttpRequestWithFloatLabelsCommandOutput,
  HttpRequestWithFloatLabelsCommand,
} from "./commands/HttpRequestWithFloatLabelsCommand";
import {
  type HttpRequestWithGreedyLabelInPathCommandInput,
  type HttpRequestWithGreedyLabelInPathCommandOutput,
  HttpRequestWithGreedyLabelInPathCommand,
} from "./commands/HttpRequestWithGreedyLabelInPathCommand";
import {
  type HttpRequestWithLabelsAndTimestampFormatCommandInput,
  type HttpRequestWithLabelsAndTimestampFormatCommandOutput,
  HttpRequestWithLabelsAndTimestampFormatCommand,
} from "./commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import {
  type HttpRequestWithLabelsCommandInput,
  type HttpRequestWithLabelsCommandOutput,
  HttpRequestWithLabelsCommand,
} from "./commands/HttpRequestWithLabelsCommand";
import {
  type HttpRequestWithRegexLiteralCommandInput,
  type HttpRequestWithRegexLiteralCommandOutput,
  HttpRequestWithRegexLiteralCommand,
} from "./commands/HttpRequestWithRegexLiteralCommand";
import {
  type HttpResponseCodeCommandInput,
  type HttpResponseCodeCommandOutput,
  HttpResponseCodeCommand,
} from "./commands/HttpResponseCodeCommand";
import {
  type HttpStringPayloadCommandInput,
  type HttpStringPayloadCommandOutput,
  HttpStringPayloadCommand,
} from "./commands/HttpStringPayloadCommand";
import {
  type IgnoreQueryParamsInResponseCommandInput,
  type IgnoreQueryParamsInResponseCommandOutput,
  IgnoreQueryParamsInResponseCommand,
} from "./commands/IgnoreQueryParamsInResponseCommand";
import {
  type InputAndOutputWithHeadersCommandInput,
  type InputAndOutputWithHeadersCommandOutput,
  InputAndOutputWithHeadersCommand,
} from "./commands/InputAndOutputWithHeadersCommand";
import {
  type InputStreamCommandInput,
  type InputStreamCommandOutput,
  InputStreamCommand,
} from "./commands/InputStreamCommand";
import {
  type InputStreamWithInitialRequestCommandInput,
  type InputStreamWithInitialRequestCommandOutput,
  InputStreamWithInitialRequestCommand,
} from "./commands/InputStreamWithInitialRequestCommand";
import { type JsonBlobsCommandInput, type JsonBlobsCommandOutput, JsonBlobsCommand } from "./commands/JsonBlobsCommand";
import { type JsonEnumsCommandInput, type JsonEnumsCommandOutput, JsonEnumsCommand } from "./commands/JsonEnumsCommand";
import {
  type JsonIntEnumsCommandInput,
  type JsonIntEnumsCommandOutput,
  JsonIntEnumsCommand,
} from "./commands/JsonIntEnumsCommand";
import { type JsonListsCommandInput, type JsonListsCommandOutput, JsonListsCommand } from "./commands/JsonListsCommand";
import { type JsonMapsCommandInput, type JsonMapsCommandOutput, JsonMapsCommand } from "./commands/JsonMapsCommand";
import {
  type JsonTimestampsCommandInput,
  type JsonTimestampsCommandOutput,
  JsonTimestampsCommand,
} from "./commands/JsonTimestampsCommand";
import {
  type JsonUnionsCommandInput,
  type JsonUnionsCommandOutput,
  JsonUnionsCommand,
} from "./commands/JsonUnionsCommand";
import {
  type MalformedAcceptWithBodyCommandInput,
  type MalformedAcceptWithBodyCommandOutput,
  MalformedAcceptWithBodyCommand,
} from "./commands/MalformedAcceptWithBodyCommand";
import {
  type MalformedAcceptWithGenericStringCommandInput,
  type MalformedAcceptWithGenericStringCommandOutput,
  MalformedAcceptWithGenericStringCommand,
} from "./commands/MalformedAcceptWithGenericStringCommand";
import {
  type MalformedAcceptWithPayloadCommandInput,
  type MalformedAcceptWithPayloadCommandOutput,
  MalformedAcceptWithPayloadCommand,
} from "./commands/MalformedAcceptWithPayloadCommand";
import {
  type MalformedBlobCommandInput,
  type MalformedBlobCommandOutput,
  MalformedBlobCommand,
} from "./commands/MalformedBlobCommand";
import {
  type MalformedBooleanCommandInput,
  type MalformedBooleanCommandOutput,
  MalformedBooleanCommand,
} from "./commands/MalformedBooleanCommand";
import {
  type MalformedByteCommandInput,
  type MalformedByteCommandOutput,
  MalformedByteCommand,
} from "./commands/MalformedByteCommand";
import {
  type MalformedContentTypeWithBodyCommandInput,
  type MalformedContentTypeWithBodyCommandOutput,
  MalformedContentTypeWithBodyCommand,
} from "./commands/MalformedContentTypeWithBodyCommand";
import {
  type MalformedContentTypeWithGenericStringCommandInput,
  type MalformedContentTypeWithGenericStringCommandOutput,
  MalformedContentTypeWithGenericStringCommand,
} from "./commands/MalformedContentTypeWithGenericStringCommand";
import {
  type MalformedContentTypeWithoutBodyCommandInput,
  type MalformedContentTypeWithoutBodyCommandOutput,
  MalformedContentTypeWithoutBodyCommand,
} from "./commands/MalformedContentTypeWithoutBodyCommand";
import {
  type MalformedContentTypeWithoutBodyEmptyInputCommandInput,
  type MalformedContentTypeWithoutBodyEmptyInputCommandOutput,
  MalformedContentTypeWithoutBodyEmptyInputCommand,
} from "./commands/MalformedContentTypeWithoutBodyEmptyInputCommand";
import {
  type MalformedContentTypeWithPayloadCommandInput,
  type MalformedContentTypeWithPayloadCommandOutput,
  MalformedContentTypeWithPayloadCommand,
} from "./commands/MalformedContentTypeWithPayloadCommand";
import {
  type MalformedDoubleCommandInput,
  type MalformedDoubleCommandOutput,
  MalformedDoubleCommand,
} from "./commands/MalformedDoubleCommand";
import {
  type MalformedFloatCommandInput,
  type MalformedFloatCommandOutput,
  MalformedFloatCommand,
} from "./commands/MalformedFloatCommand";
import {
  type MalformedIntegerCommandInput,
  type MalformedIntegerCommandOutput,
  MalformedIntegerCommand,
} from "./commands/MalformedIntegerCommand";
import {
  type MalformedListCommandInput,
  type MalformedListCommandOutput,
  MalformedListCommand,
} from "./commands/MalformedListCommand";
import {
  type MalformedLongCommandInput,
  type MalformedLongCommandOutput,
  MalformedLongCommand,
} from "./commands/MalformedLongCommand";
import {
  type MalformedMapCommandInput,
  type MalformedMapCommandOutput,
  MalformedMapCommand,
} from "./commands/MalformedMapCommand";
import {
  type MalformedRequestBodyCommandInput,
  type MalformedRequestBodyCommandOutput,
  MalformedRequestBodyCommand,
} from "./commands/MalformedRequestBodyCommand";
import {
  type MalformedShortCommandInput,
  type MalformedShortCommandOutput,
  MalformedShortCommand,
} from "./commands/MalformedShortCommand";
import {
  type MalformedStringCommandInput,
  type MalformedStringCommandOutput,
  MalformedStringCommand,
} from "./commands/MalformedStringCommand";
import {
  type MalformedTimestampBodyDateTimeCommandInput,
  type MalformedTimestampBodyDateTimeCommandOutput,
  MalformedTimestampBodyDateTimeCommand,
} from "./commands/MalformedTimestampBodyDateTimeCommand";
import {
  type MalformedTimestampBodyDefaultCommandInput,
  type MalformedTimestampBodyDefaultCommandOutput,
  MalformedTimestampBodyDefaultCommand,
} from "./commands/MalformedTimestampBodyDefaultCommand";
import {
  type MalformedTimestampBodyHttpDateCommandInput,
  type MalformedTimestampBodyHttpDateCommandOutput,
  MalformedTimestampBodyHttpDateCommand,
} from "./commands/MalformedTimestampBodyHttpDateCommand";
import {
  type MalformedTimestampHeaderDateTimeCommandInput,
  type MalformedTimestampHeaderDateTimeCommandOutput,
  MalformedTimestampHeaderDateTimeCommand,
} from "./commands/MalformedTimestampHeaderDateTimeCommand";
import {
  type MalformedTimestampHeaderDefaultCommandInput,
  type MalformedTimestampHeaderDefaultCommandOutput,
  MalformedTimestampHeaderDefaultCommand,
} from "./commands/MalformedTimestampHeaderDefaultCommand";
import {
  type MalformedTimestampHeaderEpochCommandInput,
  type MalformedTimestampHeaderEpochCommandOutput,
  MalformedTimestampHeaderEpochCommand,
} from "./commands/MalformedTimestampHeaderEpochCommand";
import {
  type MalformedTimestampPathDefaultCommandInput,
  type MalformedTimestampPathDefaultCommandOutput,
  MalformedTimestampPathDefaultCommand,
} from "./commands/MalformedTimestampPathDefaultCommand";
import {
  type MalformedTimestampPathEpochCommandInput,
  type MalformedTimestampPathEpochCommandOutput,
  MalformedTimestampPathEpochCommand,
} from "./commands/MalformedTimestampPathEpochCommand";
import {
  type MalformedTimestampPathHttpDateCommandInput,
  type MalformedTimestampPathHttpDateCommandOutput,
  MalformedTimestampPathHttpDateCommand,
} from "./commands/MalformedTimestampPathHttpDateCommand";
import {
  type MalformedTimestampQueryDefaultCommandInput,
  type MalformedTimestampQueryDefaultCommandOutput,
  MalformedTimestampQueryDefaultCommand,
} from "./commands/MalformedTimestampQueryDefaultCommand";
import {
  type MalformedTimestampQueryEpochCommandInput,
  type MalformedTimestampQueryEpochCommandOutput,
  MalformedTimestampQueryEpochCommand,
} from "./commands/MalformedTimestampQueryEpochCommand";
import {
  type MalformedTimestampQueryHttpDateCommandInput,
  type MalformedTimestampQueryHttpDateCommandOutput,
  MalformedTimestampQueryHttpDateCommand,
} from "./commands/MalformedTimestampQueryHttpDateCommand";
import {
  type MalformedUnionCommandInput,
  type MalformedUnionCommandOutput,
  MalformedUnionCommand,
} from "./commands/MalformedUnionCommand";
import {
  type MediaTypeHeaderCommandInput,
  type MediaTypeHeaderCommandOutput,
  MediaTypeHeaderCommand,
} from "./commands/MediaTypeHeaderCommand";
import {
  type NoInputAndNoOutputCommandInput,
  type NoInputAndNoOutputCommandOutput,
  NoInputAndNoOutputCommand,
} from "./commands/NoInputAndNoOutputCommand";
import {
  type NoInputAndOutputCommandInput,
  type NoInputAndOutputCommandOutput,
  NoInputAndOutputCommand,
} from "./commands/NoInputAndOutputCommand";
import {
  type NullAndEmptyHeadersClientCommandInput,
  type NullAndEmptyHeadersClientCommandOutput,
  NullAndEmptyHeadersClientCommand,
} from "./commands/NullAndEmptyHeadersClientCommand";
import {
  type NullAndEmptyHeadersServerCommandInput,
  type NullAndEmptyHeadersServerCommandOutput,
  NullAndEmptyHeadersServerCommand,
} from "./commands/NullAndEmptyHeadersServerCommand";
import {
  type OmitsNullSerializesEmptyStringCommandInput,
  type OmitsNullSerializesEmptyStringCommandOutput,
  OmitsNullSerializesEmptyStringCommand,
} from "./commands/OmitsNullSerializesEmptyStringCommand";
import {
  type OmitsSerializingEmptyListsCommandInput,
  type OmitsSerializingEmptyListsCommandOutput,
  OmitsSerializingEmptyListsCommand,
} from "./commands/OmitsSerializingEmptyListsCommand";
import {
  type OperationWithDefaultsCommandInput,
  type OperationWithDefaultsCommandOutput,
  OperationWithDefaultsCommand,
} from "./commands/OperationWithDefaultsCommand";
import {
  type OperationWithNestedStructureCommandInput,
  type OperationWithNestedStructureCommandOutput,
  OperationWithNestedStructureCommand,
} from "./commands/OperationWithNestedStructureCommand";
import {
  type OutputStreamCommandInput,
  type OutputStreamCommandOutput,
  OutputStreamCommand,
} from "./commands/OutputStreamCommand";
import {
  type OutputStreamWithInitialResponseCommandInput,
  type OutputStreamWithInitialResponseCommandOutput,
  OutputStreamWithInitialResponseCommand,
} from "./commands/OutputStreamWithInitialResponseCommand";
import {
  type PostPlayerActionCommandInput,
  type PostPlayerActionCommandOutput,
  PostPlayerActionCommand,
} from "./commands/PostPlayerActionCommand";
import {
  type PostUnionWithJsonNameCommandInput,
  type PostUnionWithJsonNameCommandOutput,
  PostUnionWithJsonNameCommand,
} from "./commands/PostUnionWithJsonNameCommand";
import {
  type PutWithContentEncodingCommandInput,
  type PutWithContentEncodingCommandOutput,
  PutWithContentEncodingCommand,
} from "./commands/PutWithContentEncodingCommand";
import {
  type QueryIdempotencyTokenAutoFillCommandInput,
  type QueryIdempotencyTokenAutoFillCommandOutput,
  QueryIdempotencyTokenAutoFillCommand,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import {
  type QueryParamsAsStringListMapCommandInput,
  type QueryParamsAsStringListMapCommandOutput,
  QueryParamsAsStringListMapCommand,
} from "./commands/QueryParamsAsStringListMapCommand";
import {
  type QueryPrecedenceCommandInput,
  type QueryPrecedenceCommandOutput,
  QueryPrecedenceCommand,
} from "./commands/QueryPrecedenceCommand";
import {
  type RecursiveShapesCommandInput,
  type RecursiveShapesCommandOutput,
  RecursiveShapesCommand,
} from "./commands/RecursiveShapesCommand";
import {
  type ResponseCodeHttpFallbackCommandInput,
  type ResponseCodeHttpFallbackCommandOutput,
  ResponseCodeHttpFallbackCommand,
} from "./commands/ResponseCodeHttpFallbackCommand";
import {
  type ResponseCodeRequiredCommandInput,
  type ResponseCodeRequiredCommandOutput,
  ResponseCodeRequiredCommand,
} from "./commands/ResponseCodeRequiredCommand";
import {
  type SimpleScalarPropertiesCommandInput,
  type SimpleScalarPropertiesCommandOutput,
  SimpleScalarPropertiesCommand,
} from "./commands/SimpleScalarPropertiesCommand";
import {
  type SparseJsonListsCommandInput,
  type SparseJsonListsCommandOutput,
  SparseJsonListsCommand,
} from "./commands/SparseJsonListsCommand";
import {
  type SparseJsonMapsCommandInput,
  type SparseJsonMapsCommandOutput,
  SparseJsonMapsCommand,
} from "./commands/SparseJsonMapsCommand";
import {
  type StreamingTraitsCommandInput,
  type StreamingTraitsCommandOutput,
  StreamingTraitsCommand,
} from "./commands/StreamingTraitsCommand";
import {
  type StreamingTraitsRequireLengthCommandInput,
  type StreamingTraitsRequireLengthCommandOutput,
  StreamingTraitsRequireLengthCommand,
} from "./commands/StreamingTraitsRequireLengthCommand";
import {
  type StreamingTraitsWithMediaTypeCommandInput,
  type StreamingTraitsWithMediaTypeCommandOutput,
  StreamingTraitsWithMediaTypeCommand,
} from "./commands/StreamingTraitsWithMediaTypeCommand";
import {
  type TestBodyStructureCommandInput,
  type TestBodyStructureCommandOutput,
  TestBodyStructureCommand,
} from "./commands/TestBodyStructureCommand";
import {
  type TestGetNoInputNoPayloadCommandInput,
  type TestGetNoInputNoPayloadCommandOutput,
  TestGetNoInputNoPayloadCommand,
} from "./commands/TestGetNoInputNoPayloadCommand";
import {
  type TestGetNoPayloadCommandInput,
  type TestGetNoPayloadCommandOutput,
  TestGetNoPayloadCommand,
} from "./commands/TestGetNoPayloadCommand";
import {
  type TestPayloadBlobCommandInput,
  type TestPayloadBlobCommandOutput,
  TestPayloadBlobCommand,
} from "./commands/TestPayloadBlobCommand";
import {
  type TestPayloadStructureCommandInput,
  type TestPayloadStructureCommandOutput,
  TestPayloadStructureCommand,
} from "./commands/TestPayloadStructureCommand";
import {
  type TestPostNoInputNoPayloadCommandInput,
  type TestPostNoInputNoPayloadCommandOutput,
  TestPostNoInputNoPayloadCommand,
} from "./commands/TestPostNoInputNoPayloadCommand";
import {
  type TestPostNoPayloadCommandInput,
  type TestPostNoPayloadCommandOutput,
  TestPostNoPayloadCommand,
} from "./commands/TestPostNoPayloadCommand";
import {
  type TimestampFormatHeadersCommandInput,
  type TimestampFormatHeadersCommandOutput,
  TimestampFormatHeadersCommand,
} from "./commands/TimestampFormatHeadersCommand";
import {
  type UnitInputAndOutputCommandInput,
  type UnitInputAndOutputCommandOutput,
  UnitInputAndOutputCommand,
} from "./commands/UnitInputAndOutputCommand";
import { RestJsonProtocolClient } from "./RestJsonProtocolClient";

const commands = {
  AllQueryStringTypesCommand,
  ConstantAndVariableQueryStringCommand,
  ConstantQueryStringCommand,
  ContentTypeParametersCommand,
  DatetimeOffsetsCommand,
  DocumentTypeCommand,
  DocumentTypeAsMapValueCommand,
  DocumentTypeAsPayloadCommand,
  DuplexStreamCommand,
  DuplexStreamWithDistinctStreamsCommand,
  DuplexStreamWithInitialMessagesCommand,
  EmptyInputAndEmptyOutputCommand,
  EndpointOperationCommand,
  EndpointWithHostLabelOperationCommand,
  FractionalSecondsCommand,
  GreetingWithErrorsCommand,
  HostWithPathOperationCommand,
  HttpChecksumRequiredCommand,
  HttpEmptyPrefixHeadersCommand,
  HttpEnumPayloadCommand,
  HttpPayloadTraitsCommand,
  HttpPayloadTraitsWithMediaTypeCommand,
  HttpPayloadWithStructureCommand,
  HttpPayloadWithUnionCommand,
  HttpPrefixHeadersCommand,
  HttpPrefixHeadersInResponseCommand,
  HttpQueryParamsOnlyOperationCommand,
  HttpRequestWithFloatLabelsCommand,
  HttpRequestWithGreedyLabelInPathCommand,
  HttpRequestWithLabelsCommand,
  HttpRequestWithLabelsAndTimestampFormatCommand,
  HttpRequestWithRegexLiteralCommand,
  HttpResponseCodeCommand,
  HttpStringPayloadCommand,
  IgnoreQueryParamsInResponseCommand,
  InputAndOutputWithHeadersCommand,
  InputStreamCommand,
  InputStreamWithInitialRequestCommand,
  JsonBlobsCommand,
  JsonEnumsCommand,
  JsonIntEnumsCommand,
  JsonListsCommand,
  JsonMapsCommand,
  JsonTimestampsCommand,
  JsonUnionsCommand,
  MalformedAcceptWithBodyCommand,
  MalformedAcceptWithGenericStringCommand,
  MalformedAcceptWithPayloadCommand,
  MalformedBlobCommand,
  MalformedBooleanCommand,
  MalformedByteCommand,
  MalformedContentTypeWithBodyCommand,
  MalformedContentTypeWithGenericStringCommand,
  MalformedContentTypeWithoutBodyCommand,
  MalformedContentTypeWithoutBodyEmptyInputCommand,
  MalformedContentTypeWithPayloadCommand,
  MalformedDoubleCommand,
  MalformedFloatCommand,
  MalformedIntegerCommand,
  MalformedListCommand,
  MalformedLongCommand,
  MalformedMapCommand,
  MalformedRequestBodyCommand,
  MalformedShortCommand,
  MalformedStringCommand,
  MalformedTimestampBodyDateTimeCommand,
  MalformedTimestampBodyDefaultCommand,
  MalformedTimestampBodyHttpDateCommand,
  MalformedTimestampHeaderDateTimeCommand,
  MalformedTimestampHeaderDefaultCommand,
  MalformedTimestampHeaderEpochCommand,
  MalformedTimestampPathDefaultCommand,
  MalformedTimestampPathEpochCommand,
  MalformedTimestampPathHttpDateCommand,
  MalformedTimestampQueryDefaultCommand,
  MalformedTimestampQueryEpochCommand,
  MalformedTimestampQueryHttpDateCommand,
  MalformedUnionCommand,
  MediaTypeHeaderCommand,
  NoInputAndNoOutputCommand,
  NoInputAndOutputCommand,
  NullAndEmptyHeadersClientCommand,
  NullAndEmptyHeadersServerCommand,
  OmitsNullSerializesEmptyStringCommand,
  OmitsSerializingEmptyListsCommand,
  OperationWithDefaultsCommand,
  OperationWithNestedStructureCommand,
  OutputStreamCommand,
  OutputStreamWithInitialResponseCommand,
  PostPlayerActionCommand,
  PostUnionWithJsonNameCommand,
  PutWithContentEncodingCommand,
  QueryIdempotencyTokenAutoFillCommand,
  QueryParamsAsStringListMapCommand,
  QueryPrecedenceCommand,
  RecursiveShapesCommand,
  ResponseCodeHttpFallbackCommand,
  ResponseCodeRequiredCommand,
  SimpleScalarPropertiesCommand,
  SparseJsonListsCommand,
  SparseJsonMapsCommand,
  StreamingTraitsCommand,
  StreamingTraitsRequireLengthCommand,
  StreamingTraitsWithMediaTypeCommand,
  TestBodyStructureCommand,
  TestGetNoInputNoPayloadCommand,
  TestGetNoPayloadCommand,
  TestPayloadBlobCommand,
  TestPayloadStructureCommand,
  TestPostNoInputNoPayloadCommand,
  TestPostNoPayloadCommand,
  TimestampFormatHeadersCommand,
  UnitInputAndOutputCommand,
};

export interface RestJsonProtocol {
  /**
   * @see {@link AllQueryStringTypesCommand}
   */
  allQueryStringTypes(): Promise<AllQueryStringTypesCommandOutput>;
  allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllQueryStringTypesCommandOutput>;
  allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    cb: (err: any, data?: AllQueryStringTypesCommandOutput) => void
  ): void;
  allQueryStringTypes(
    args: AllQueryStringTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllQueryStringTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ConstantAndVariableQueryStringCommand}
   */
  constantAndVariableQueryString(): Promise<ConstantAndVariableQueryStringCommandOutput>;
  constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConstantAndVariableQueryStringCommandOutput>;
  constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    cb: (err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void
  ): void;
  constantAndVariableQueryString(
    args: ConstantAndVariableQueryStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConstantAndVariableQueryStringCommandOutput) => void
  ): void;

  /**
   * @see {@link ConstantQueryStringCommand}
   */
  constantQueryString(
    args: ConstantQueryStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConstantQueryStringCommandOutput>;
  constantQueryString(
    args: ConstantQueryStringCommandInput,
    cb: (err: any, data?: ConstantQueryStringCommandOutput) => void
  ): void;
  constantQueryString(
    args: ConstantQueryStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConstantQueryStringCommandOutput) => void
  ): void;

  /**
   * @see {@link ContentTypeParametersCommand}
   */
  contentTypeParameters(): Promise<ContentTypeParametersCommandOutput>;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ContentTypeParametersCommandOutput>;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    cb: (err: any, data?: ContentTypeParametersCommandOutput) => void
  ): void;
  contentTypeParameters(
    args: ContentTypeParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ContentTypeParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DatetimeOffsetsCommand}
   */
  datetimeOffsets(): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DatetimeOffsetsCommandOutput>;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DocumentTypeCommand}
   */
  documentType(): Promise<DocumentTypeCommandOutput>;
  documentType(
    args: DocumentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DocumentTypeCommandOutput>;
  documentType(
    args: DocumentTypeCommandInput,
    cb: (err: any, data?: DocumentTypeCommandOutput) => void
  ): void;
  documentType(
    args: DocumentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DocumentTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DocumentTypeAsMapValueCommand}
   */
  documentTypeAsMapValue(): Promise<DocumentTypeAsMapValueCommandOutput>;
  documentTypeAsMapValue(
    args: DocumentTypeAsMapValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DocumentTypeAsMapValueCommandOutput>;
  documentTypeAsMapValue(
    args: DocumentTypeAsMapValueCommandInput,
    cb: (err: any, data?: DocumentTypeAsMapValueCommandOutput) => void
  ): void;
  documentTypeAsMapValue(
    args: DocumentTypeAsMapValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DocumentTypeAsMapValueCommandOutput) => void
  ): void;

  /**
   * @see {@link DocumentTypeAsPayloadCommand}
   */
  documentTypeAsPayload(): Promise<DocumentTypeAsPayloadCommandOutput>;
  documentTypeAsPayload(
    args: DocumentTypeAsPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DocumentTypeAsPayloadCommandOutput>;
  documentTypeAsPayload(
    args: DocumentTypeAsPayloadCommandInput,
    cb: (err: any, data?: DocumentTypeAsPayloadCommandOutput) => void
  ): void;
  documentTypeAsPayload(
    args: DocumentTypeAsPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DocumentTypeAsPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link DuplexStreamCommand}
   */
  duplexStream(): Promise<DuplexStreamCommandOutput>;
  duplexStream(
    args: DuplexStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DuplexStreamCommandOutput>;
  duplexStream(
    args: DuplexStreamCommandInput,
    cb: (err: any, data?: DuplexStreamCommandOutput) => void
  ): void;
  duplexStream(
    args: DuplexStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DuplexStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DuplexStreamWithDistinctStreamsCommand}
   */
  duplexStreamWithDistinctStreams(): Promise<DuplexStreamWithDistinctStreamsCommandOutput>;
  duplexStreamWithDistinctStreams(
    args: DuplexStreamWithDistinctStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DuplexStreamWithDistinctStreamsCommandOutput>;
  duplexStreamWithDistinctStreams(
    args: DuplexStreamWithDistinctStreamsCommandInput,
    cb: (err: any, data?: DuplexStreamWithDistinctStreamsCommandOutput) => void
  ): void;
  duplexStreamWithDistinctStreams(
    args: DuplexStreamWithDistinctStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DuplexStreamWithDistinctStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link DuplexStreamWithInitialMessagesCommand}
   */
  duplexStreamWithInitialMessages(
    args: DuplexStreamWithInitialMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DuplexStreamWithInitialMessagesCommandOutput>;
  duplexStreamWithInitialMessages(
    args: DuplexStreamWithInitialMessagesCommandInput,
    cb: (err: any, data?: DuplexStreamWithInitialMessagesCommandOutput) => void
  ): void;
  duplexStreamWithInitialMessages(
    args: DuplexStreamWithInitialMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DuplexStreamWithInitialMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link EmptyInputAndEmptyOutputCommand}
   */
  emptyInputAndEmptyOutput(): Promise<EmptyInputAndEmptyOutputCommandOutput>;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EmptyInputAndEmptyOutputCommandOutput>;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;
  emptyInputAndEmptyOutput(
    args: EmptyInputAndEmptyOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EmptyInputAndEmptyOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointOperationCommand}
   */
  endpointOperation(): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointOperationCommandOutput>;
  endpointOperation(
    args: EndpointOperationCommandInput,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;
  endpointOperation(
    args: EndpointOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link EndpointWithHostLabelOperationCommand}
   */
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EndpointWithHostLabelOperationCommandOutput>;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;
  endpointWithHostLabelOperation(
    args: EndpointWithHostLabelOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EndpointWithHostLabelOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link FractionalSecondsCommand}
   */
  fractionalSeconds(): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FractionalSecondsCommandOutput>;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;
  fractionalSeconds(
    args: FractionalSecondsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FractionalSecondsCommandOutput) => void
  ): void;

  /**
   * @see {@link GreetingWithErrorsCommand}
   */
  greetingWithErrors(): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GreetingWithErrorsCommandOutput>;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;
  greetingWithErrors(
    args: GreetingWithErrorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GreetingWithErrorsCommandOutput) => void
  ): void;

  /**
   * @see {@link HostWithPathOperationCommand}
   */
  hostWithPathOperation(): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HostWithPathOperationCommandOutput>;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;
  hostWithPathOperation(
    args: HostWithPathOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HostWithPathOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpChecksumRequiredCommand}
   */
  httpChecksumRequired(): Promise<HttpChecksumRequiredCommandOutput>;
  httpChecksumRequired(
    args: HttpChecksumRequiredCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpChecksumRequiredCommandOutput>;
  httpChecksumRequired(
    args: HttpChecksumRequiredCommandInput,
    cb: (err: any, data?: HttpChecksumRequiredCommandOutput) => void
  ): void;
  httpChecksumRequired(
    args: HttpChecksumRequiredCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpChecksumRequiredCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpEmptyPrefixHeadersCommand}
   */
  httpEmptyPrefixHeaders(): Promise<HttpEmptyPrefixHeadersCommandOutput>;
  httpEmptyPrefixHeaders(
    args: HttpEmptyPrefixHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpEmptyPrefixHeadersCommandOutput>;
  httpEmptyPrefixHeaders(
    args: HttpEmptyPrefixHeadersCommandInput,
    cb: (err: any, data?: HttpEmptyPrefixHeadersCommandOutput) => void
  ): void;
  httpEmptyPrefixHeaders(
    args: HttpEmptyPrefixHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpEmptyPrefixHeadersCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpEnumPayloadCommand}
   */
  httpEnumPayload(): Promise<HttpEnumPayloadCommandOutput>;
  httpEnumPayload(
    args: HttpEnumPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpEnumPayloadCommandOutput>;
  httpEnumPayload(
    args: HttpEnumPayloadCommandInput,
    cb: (err: any, data?: HttpEnumPayloadCommandOutput) => void
  ): void;
  httpEnumPayload(
    args: HttpEnumPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpEnumPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadTraitsCommand}
   */
  httpPayloadTraits(): Promise<HttpPayloadTraitsCommandOutput>;
  httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadTraitsCommandOutput>;
  httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    cb: (err: any, data?: HttpPayloadTraitsCommandOutput) => void
  ): void;
  httpPayloadTraits(
    args: HttpPayloadTraitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadTraitsCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadTraitsWithMediaTypeCommand}
   */
  httpPayloadTraitsWithMediaType(): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput>;
  httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput>;
  httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    cb: (err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void
  ): void;
  httpPayloadTraitsWithMediaType(
    args: HttpPayloadTraitsWithMediaTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadTraitsWithMediaTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithStructureCommand}
   */
  httpPayloadWithStructure(): Promise<HttpPayloadWithStructureCommandOutput>;
  httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithStructureCommandOutput>;
  httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    cb: (err: any, data?: HttpPayloadWithStructureCommandOutput) => void
  ): void;
  httpPayloadWithStructure(
    args: HttpPayloadWithStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPayloadWithUnionCommand}
   */
  httpPayloadWithUnion(): Promise<HttpPayloadWithUnionCommandOutput>;
  httpPayloadWithUnion(
    args: HttpPayloadWithUnionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPayloadWithUnionCommandOutput>;
  httpPayloadWithUnion(
    args: HttpPayloadWithUnionCommandInput,
    cb: (err: any, data?: HttpPayloadWithUnionCommandOutput) => void
  ): void;
  httpPayloadWithUnion(
    args: HttpPayloadWithUnionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPayloadWithUnionCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPrefixHeadersCommand}
   */
  httpPrefixHeaders(): Promise<HttpPrefixHeadersCommandOutput>;
  httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPrefixHeadersCommandOutput>;
  httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    cb: (err: any, data?: HttpPrefixHeadersCommandOutput) => void
  ): void;
  httpPrefixHeaders(
    args: HttpPrefixHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPrefixHeadersCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpPrefixHeadersInResponseCommand}
   */
  httpPrefixHeadersInResponse(): Promise<HttpPrefixHeadersInResponseCommandOutput>;
  httpPrefixHeadersInResponse(
    args: HttpPrefixHeadersInResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpPrefixHeadersInResponseCommandOutput>;
  httpPrefixHeadersInResponse(
    args: HttpPrefixHeadersInResponseCommandInput,
    cb: (err: any, data?: HttpPrefixHeadersInResponseCommandOutput) => void
  ): void;
  httpPrefixHeadersInResponse(
    args: HttpPrefixHeadersInResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpPrefixHeadersInResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpQueryParamsOnlyOperationCommand}
   */
  httpQueryParamsOnlyOperation(): Promise<HttpQueryParamsOnlyOperationCommandOutput>;
  httpQueryParamsOnlyOperation(
    args: HttpQueryParamsOnlyOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpQueryParamsOnlyOperationCommandOutput>;
  httpQueryParamsOnlyOperation(
    args: HttpQueryParamsOnlyOperationCommandInput,
    cb: (err: any, data?: HttpQueryParamsOnlyOperationCommandOutput) => void
  ): void;
  httpQueryParamsOnlyOperation(
    args: HttpQueryParamsOnlyOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpQueryParamsOnlyOperationCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithFloatLabelsCommand}
   */
  httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithFloatLabelsCommandOutput>;
  httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    cb: (err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void
  ): void;
  httpRequestWithFloatLabels(
    args: HttpRequestWithFloatLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithFloatLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithGreedyLabelInPathCommand}
   */
  httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithGreedyLabelInPathCommandOutput>;
  httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    cb: (err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void
  ): void;
  httpRequestWithGreedyLabelInPath(
    args: HttpRequestWithGreedyLabelInPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithGreedyLabelInPathCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithLabelsCommand}
   */
  httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithLabelsCommandOutput>;
  httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    cb: (err: any, data?: HttpRequestWithLabelsCommandOutput) => void
  ): void;
  httpRequestWithLabels(
    args: HttpRequestWithLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithLabelsAndTimestampFormatCommand}
   */
  httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithLabelsAndTimestampFormatCommandOutput>;
  httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    cb: (err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void
  ): void;
  httpRequestWithLabelsAndTimestampFormat(
    args: HttpRequestWithLabelsAndTimestampFormatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithLabelsAndTimestampFormatCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpRequestWithRegexLiteralCommand}
   */
  httpRequestWithRegexLiteral(
    args: HttpRequestWithRegexLiteralCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpRequestWithRegexLiteralCommandOutput>;
  httpRequestWithRegexLiteral(
    args: HttpRequestWithRegexLiteralCommandInput,
    cb: (err: any, data?: HttpRequestWithRegexLiteralCommandOutput) => void
  ): void;
  httpRequestWithRegexLiteral(
    args: HttpRequestWithRegexLiteralCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpRequestWithRegexLiteralCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpResponseCodeCommand}
   */
  httpResponseCode(): Promise<HttpResponseCodeCommandOutput>;
  httpResponseCode(
    args: HttpResponseCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpResponseCodeCommandOutput>;
  httpResponseCode(
    args: HttpResponseCodeCommandInput,
    cb: (err: any, data?: HttpResponseCodeCommandOutput) => void
  ): void;
  httpResponseCode(
    args: HttpResponseCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpResponseCodeCommandOutput) => void
  ): void;

  /**
   * @see {@link HttpStringPayloadCommand}
   */
  httpStringPayload(): Promise<HttpStringPayloadCommandOutput>;
  httpStringPayload(
    args: HttpStringPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<HttpStringPayloadCommandOutput>;
  httpStringPayload(
    args: HttpStringPayloadCommandInput,
    cb: (err: any, data?: HttpStringPayloadCommandOutput) => void
  ): void;
  httpStringPayload(
    args: HttpStringPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HttpStringPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link IgnoreQueryParamsInResponseCommand}
   */
  ignoreQueryParamsInResponse(): Promise<IgnoreQueryParamsInResponseCommandOutput>;
  ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IgnoreQueryParamsInResponseCommandOutput>;
  ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    cb: (err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void
  ): void;
  ignoreQueryParamsInResponse(
    args: IgnoreQueryParamsInResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IgnoreQueryParamsInResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link InputAndOutputWithHeadersCommand}
   */
  inputAndOutputWithHeaders(): Promise<InputAndOutputWithHeadersCommandOutput>;
  inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InputAndOutputWithHeadersCommandOutput>;
  inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    cb: (err: any, data?: InputAndOutputWithHeadersCommandOutput) => void
  ): void;
  inputAndOutputWithHeaders(
    args: InputAndOutputWithHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InputAndOutputWithHeadersCommandOutput) => void
  ): void;

  /**
   * @see {@link InputStreamCommand}
   */
  inputStream(): Promise<InputStreamCommandOutput>;
  inputStream(
    args: InputStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InputStreamCommandOutput>;
  inputStream(
    args: InputStreamCommandInput,
    cb: (err: any, data?: InputStreamCommandOutput) => void
  ): void;
  inputStream(
    args: InputStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InputStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link InputStreamWithInitialRequestCommand}
   */
  inputStreamWithInitialRequest(
    args: InputStreamWithInitialRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InputStreamWithInitialRequestCommandOutput>;
  inputStreamWithInitialRequest(
    args: InputStreamWithInitialRequestCommandInput,
    cb: (err: any, data?: InputStreamWithInitialRequestCommandOutput) => void
  ): void;
  inputStreamWithInitialRequest(
    args: InputStreamWithInitialRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InputStreamWithInitialRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonBlobsCommand}
   */
  jsonBlobs(): Promise<JsonBlobsCommandOutput>;
  jsonBlobs(
    args: JsonBlobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonBlobsCommandOutput>;
  jsonBlobs(
    args: JsonBlobsCommandInput,
    cb: (err: any, data?: JsonBlobsCommandOutput) => void
  ): void;
  jsonBlobs(
    args: JsonBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonEnumsCommand}
   */
  jsonEnums(): Promise<JsonEnumsCommandOutput>;
  jsonEnums(
    args: JsonEnumsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonEnumsCommandOutput>;
  jsonEnums(
    args: JsonEnumsCommandInput,
    cb: (err: any, data?: JsonEnumsCommandOutput) => void
  ): void;
  jsonEnums(
    args: JsonEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonIntEnumsCommand}
   */
  jsonIntEnums(): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    cb: (err: any, data?: JsonIntEnumsCommandOutput) => void
  ): void;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonIntEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonListsCommand}
   */
  jsonLists(): Promise<JsonListsCommandOutput>;
  jsonLists(
    args: JsonListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonListsCommandOutput>;
  jsonLists(
    args: JsonListsCommandInput,
    cb: (err: any, data?: JsonListsCommandOutput) => void
  ): void;
  jsonLists(
    args: JsonListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonListsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonMapsCommand}
   */
  jsonMaps(): Promise<JsonMapsCommandOutput>;
  jsonMaps(
    args: JsonMapsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonMapsCommandOutput>;
  jsonMaps(
    args: JsonMapsCommandInput,
    cb: (err: any, data?: JsonMapsCommandOutput) => void
  ): void;
  jsonMaps(
    args: JsonMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonMapsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonTimestampsCommand}
   */
  jsonTimestamps(): Promise<JsonTimestampsCommandOutput>;
  jsonTimestamps(
    args: JsonTimestampsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonTimestampsCommandOutput>;
  jsonTimestamps(
    args: JsonTimestampsCommandInput,
    cb: (err: any, data?: JsonTimestampsCommandOutput) => void
  ): void;
  jsonTimestamps(
    args: JsonTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonTimestampsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonUnionsCommand}
   */
  jsonUnions(): Promise<JsonUnionsCommandOutput>;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<JsonUnionsCommandOutput>;
  jsonUnions(
    args: JsonUnionsCommandInput,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;
  jsonUnions(
    args: JsonUnionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonUnionsCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedAcceptWithBodyCommand}
   */
  malformedAcceptWithBody(): Promise<MalformedAcceptWithBodyCommandOutput>;
  malformedAcceptWithBody(
    args: MalformedAcceptWithBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedAcceptWithBodyCommandOutput>;
  malformedAcceptWithBody(
    args: MalformedAcceptWithBodyCommandInput,
    cb: (err: any, data?: MalformedAcceptWithBodyCommandOutput) => void
  ): void;
  malformedAcceptWithBody(
    args: MalformedAcceptWithBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedAcceptWithBodyCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedAcceptWithGenericStringCommand}
   */
  malformedAcceptWithGenericString(): Promise<MalformedAcceptWithGenericStringCommandOutput>;
  malformedAcceptWithGenericString(
    args: MalformedAcceptWithGenericStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedAcceptWithGenericStringCommandOutput>;
  malformedAcceptWithGenericString(
    args: MalformedAcceptWithGenericStringCommandInput,
    cb: (err: any, data?: MalformedAcceptWithGenericStringCommandOutput) => void
  ): void;
  malformedAcceptWithGenericString(
    args: MalformedAcceptWithGenericStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedAcceptWithGenericStringCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedAcceptWithPayloadCommand}
   */
  malformedAcceptWithPayload(): Promise<MalformedAcceptWithPayloadCommandOutput>;
  malformedAcceptWithPayload(
    args: MalformedAcceptWithPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedAcceptWithPayloadCommandOutput>;
  malformedAcceptWithPayload(
    args: MalformedAcceptWithPayloadCommandInput,
    cb: (err: any, data?: MalformedAcceptWithPayloadCommandOutput) => void
  ): void;
  malformedAcceptWithPayload(
    args: MalformedAcceptWithPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedAcceptWithPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedBlobCommand}
   */
  malformedBlob(): Promise<MalformedBlobCommandOutput>;
  malformedBlob(
    args: MalformedBlobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedBlobCommandOutput>;
  malformedBlob(
    args: MalformedBlobCommandInput,
    cb: (err: any, data?: MalformedBlobCommandOutput) => void
  ): void;
  malformedBlob(
    args: MalformedBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedBlobCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedBooleanCommand}
   */
  malformedBoolean(
    args: MalformedBooleanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedBooleanCommandOutput>;
  malformedBoolean(
    args: MalformedBooleanCommandInput,
    cb: (err: any, data?: MalformedBooleanCommandOutput) => void
  ): void;
  malformedBoolean(
    args: MalformedBooleanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedBooleanCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedByteCommand}
   */
  malformedByte(
    args: MalformedByteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedByteCommandOutput>;
  malformedByte(
    args: MalformedByteCommandInput,
    cb: (err: any, data?: MalformedByteCommandOutput) => void
  ): void;
  malformedByte(
    args: MalformedByteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedByteCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedContentTypeWithBodyCommand}
   */
  malformedContentTypeWithBody(): Promise<MalformedContentTypeWithBodyCommandOutput>;
  malformedContentTypeWithBody(
    args: MalformedContentTypeWithBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithBodyCommandOutput>;
  malformedContentTypeWithBody(
    args: MalformedContentTypeWithBodyCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithBodyCommandOutput) => void
  ): void;
  malformedContentTypeWithBody(
    args: MalformedContentTypeWithBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithBodyCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedContentTypeWithGenericStringCommand}
   */
  malformedContentTypeWithGenericString(): Promise<MalformedContentTypeWithGenericStringCommandOutput>;
  malformedContentTypeWithGenericString(
    args: MalformedContentTypeWithGenericStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithGenericStringCommandOutput>;
  malformedContentTypeWithGenericString(
    args: MalformedContentTypeWithGenericStringCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithGenericStringCommandOutput) => void
  ): void;
  malformedContentTypeWithGenericString(
    args: MalformedContentTypeWithGenericStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithGenericStringCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedContentTypeWithoutBodyCommand}
   */
  malformedContentTypeWithoutBody(): Promise<MalformedContentTypeWithoutBodyCommandOutput>;
  malformedContentTypeWithoutBody(
    args: MalformedContentTypeWithoutBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithoutBodyCommandOutput>;
  malformedContentTypeWithoutBody(
    args: MalformedContentTypeWithoutBodyCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithoutBodyCommandOutput) => void
  ): void;
  malformedContentTypeWithoutBody(
    args: MalformedContentTypeWithoutBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithoutBodyCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedContentTypeWithoutBodyEmptyInputCommand}
   */
  malformedContentTypeWithoutBodyEmptyInput(): Promise<MalformedContentTypeWithoutBodyEmptyInputCommandOutput>;
  malformedContentTypeWithoutBodyEmptyInput(
    args: MalformedContentTypeWithoutBodyEmptyInputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithoutBodyEmptyInputCommandOutput>;
  malformedContentTypeWithoutBodyEmptyInput(
    args: MalformedContentTypeWithoutBodyEmptyInputCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithoutBodyEmptyInputCommandOutput) => void
  ): void;
  malformedContentTypeWithoutBodyEmptyInput(
    args: MalformedContentTypeWithoutBodyEmptyInputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithoutBodyEmptyInputCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedContentTypeWithPayloadCommand}
   */
  malformedContentTypeWithPayload(): Promise<MalformedContentTypeWithPayloadCommandOutput>;
  malformedContentTypeWithPayload(
    args: MalformedContentTypeWithPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedContentTypeWithPayloadCommandOutput>;
  malformedContentTypeWithPayload(
    args: MalformedContentTypeWithPayloadCommandInput,
    cb: (err: any, data?: MalformedContentTypeWithPayloadCommandOutput) => void
  ): void;
  malformedContentTypeWithPayload(
    args: MalformedContentTypeWithPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedContentTypeWithPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedDoubleCommand}
   */
  malformedDouble(
    args: MalformedDoubleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedDoubleCommandOutput>;
  malformedDouble(
    args: MalformedDoubleCommandInput,
    cb: (err: any, data?: MalformedDoubleCommandOutput) => void
  ): void;
  malformedDouble(
    args: MalformedDoubleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedDoubleCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedFloatCommand}
   */
  malformedFloat(
    args: MalformedFloatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedFloatCommandOutput>;
  malformedFloat(
    args: MalformedFloatCommandInput,
    cb: (err: any, data?: MalformedFloatCommandOutput) => void
  ): void;
  malformedFloat(
    args: MalformedFloatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedFloatCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedIntegerCommand}
   */
  malformedInteger(
    args: MalformedIntegerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedIntegerCommandOutput>;
  malformedInteger(
    args: MalformedIntegerCommandInput,
    cb: (err: any, data?: MalformedIntegerCommandOutput) => void
  ): void;
  malformedInteger(
    args: MalformedIntegerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedIntegerCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedListCommand}
   */
  malformedList(): Promise<MalformedListCommandOutput>;
  malformedList(
    args: MalformedListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedListCommandOutput>;
  malformedList(
    args: MalformedListCommandInput,
    cb: (err: any, data?: MalformedListCommandOutput) => void
  ): void;
  malformedList(
    args: MalformedListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedListCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedLongCommand}
   */
  malformedLong(
    args: MalformedLongCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedLongCommandOutput>;
  malformedLong(
    args: MalformedLongCommandInput,
    cb: (err: any, data?: MalformedLongCommandOutput) => void
  ): void;
  malformedLong(
    args: MalformedLongCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedLongCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedMapCommand}
   */
  malformedMap(): Promise<MalformedMapCommandOutput>;
  malformedMap(
    args: MalformedMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedMapCommandOutput>;
  malformedMap(
    args: MalformedMapCommandInput,
    cb: (err: any, data?: MalformedMapCommandOutput) => void
  ): void;
  malformedMap(
    args: MalformedMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedMapCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedRequestBodyCommand}
   */
  malformedRequestBody(): Promise<MalformedRequestBodyCommandOutput>;
  malformedRequestBody(
    args: MalformedRequestBodyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedRequestBodyCommandOutput>;
  malformedRequestBody(
    args: MalformedRequestBodyCommandInput,
    cb: (err: any, data?: MalformedRequestBodyCommandOutput) => void
  ): void;
  malformedRequestBody(
    args: MalformedRequestBodyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedRequestBodyCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedShortCommand}
   */
  malformedShort(
    args: MalformedShortCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedShortCommandOutput>;
  malformedShort(
    args: MalformedShortCommandInput,
    cb: (err: any, data?: MalformedShortCommandOutput) => void
  ): void;
  malformedShort(
    args: MalformedShortCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedShortCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedStringCommand}
   */
  malformedString(): Promise<MalformedStringCommandOutput>;
  malformedString(
    args: MalformedStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedStringCommandOutput>;
  malformedString(
    args: MalformedStringCommandInput,
    cb: (err: any, data?: MalformedStringCommandOutput) => void
  ): void;
  malformedString(
    args: MalformedStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedStringCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampBodyDateTimeCommand}
   */
  malformedTimestampBodyDateTime(
    args: MalformedTimestampBodyDateTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampBodyDateTimeCommandOutput>;
  malformedTimestampBodyDateTime(
    args: MalformedTimestampBodyDateTimeCommandInput,
    cb: (err: any, data?: MalformedTimestampBodyDateTimeCommandOutput) => void
  ): void;
  malformedTimestampBodyDateTime(
    args: MalformedTimestampBodyDateTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampBodyDateTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampBodyDefaultCommand}
   */
  malformedTimestampBodyDefault(
    args: MalformedTimestampBodyDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampBodyDefaultCommandOutput>;
  malformedTimestampBodyDefault(
    args: MalformedTimestampBodyDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampBodyDefaultCommandOutput) => void
  ): void;
  malformedTimestampBodyDefault(
    args: MalformedTimestampBodyDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampBodyDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampBodyHttpDateCommand}
   */
  malformedTimestampBodyHttpDate(
    args: MalformedTimestampBodyHttpDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampBodyHttpDateCommandOutput>;
  malformedTimestampBodyHttpDate(
    args: MalformedTimestampBodyHttpDateCommandInput,
    cb: (err: any, data?: MalformedTimestampBodyHttpDateCommandOutput) => void
  ): void;
  malformedTimestampBodyHttpDate(
    args: MalformedTimestampBodyHttpDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampBodyHttpDateCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampHeaderDateTimeCommand}
   */
  malformedTimestampHeaderDateTime(
    args: MalformedTimestampHeaderDateTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampHeaderDateTimeCommandOutput>;
  malformedTimestampHeaderDateTime(
    args: MalformedTimestampHeaderDateTimeCommandInput,
    cb: (err: any, data?: MalformedTimestampHeaderDateTimeCommandOutput) => void
  ): void;
  malformedTimestampHeaderDateTime(
    args: MalformedTimestampHeaderDateTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampHeaderDateTimeCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampHeaderDefaultCommand}
   */
  malformedTimestampHeaderDefault(
    args: MalformedTimestampHeaderDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampHeaderDefaultCommandOutput>;
  malformedTimestampHeaderDefault(
    args: MalformedTimestampHeaderDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampHeaderDefaultCommandOutput) => void
  ): void;
  malformedTimestampHeaderDefault(
    args: MalformedTimestampHeaderDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampHeaderDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampHeaderEpochCommand}
   */
  malformedTimestampHeaderEpoch(
    args: MalformedTimestampHeaderEpochCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampHeaderEpochCommandOutput>;
  malformedTimestampHeaderEpoch(
    args: MalformedTimestampHeaderEpochCommandInput,
    cb: (err: any, data?: MalformedTimestampHeaderEpochCommandOutput) => void
  ): void;
  malformedTimestampHeaderEpoch(
    args: MalformedTimestampHeaderEpochCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampHeaderEpochCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampPathDefaultCommand}
   */
  malformedTimestampPathDefault(
    args: MalformedTimestampPathDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampPathDefaultCommandOutput>;
  malformedTimestampPathDefault(
    args: MalformedTimestampPathDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampPathDefaultCommandOutput) => void
  ): void;
  malformedTimestampPathDefault(
    args: MalformedTimestampPathDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampPathDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampPathEpochCommand}
   */
  malformedTimestampPathEpoch(
    args: MalformedTimestampPathEpochCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampPathEpochCommandOutput>;
  malformedTimestampPathEpoch(
    args: MalformedTimestampPathEpochCommandInput,
    cb: (err: any, data?: MalformedTimestampPathEpochCommandOutput) => void
  ): void;
  malformedTimestampPathEpoch(
    args: MalformedTimestampPathEpochCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampPathEpochCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampPathHttpDateCommand}
   */
  malformedTimestampPathHttpDate(
    args: MalformedTimestampPathHttpDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampPathHttpDateCommandOutput>;
  malformedTimestampPathHttpDate(
    args: MalformedTimestampPathHttpDateCommandInput,
    cb: (err: any, data?: MalformedTimestampPathHttpDateCommandOutput) => void
  ): void;
  malformedTimestampPathHttpDate(
    args: MalformedTimestampPathHttpDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampPathHttpDateCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampQueryDefaultCommand}
   */
  malformedTimestampQueryDefault(
    args: MalformedTimestampQueryDefaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampQueryDefaultCommandOutput>;
  malformedTimestampQueryDefault(
    args: MalformedTimestampQueryDefaultCommandInput,
    cb: (err: any, data?: MalformedTimestampQueryDefaultCommandOutput) => void
  ): void;
  malformedTimestampQueryDefault(
    args: MalformedTimestampQueryDefaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampQueryDefaultCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampQueryEpochCommand}
   */
  malformedTimestampQueryEpoch(
    args: MalformedTimestampQueryEpochCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampQueryEpochCommandOutput>;
  malformedTimestampQueryEpoch(
    args: MalformedTimestampQueryEpochCommandInput,
    cb: (err: any, data?: MalformedTimestampQueryEpochCommandOutput) => void
  ): void;
  malformedTimestampQueryEpoch(
    args: MalformedTimestampQueryEpochCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampQueryEpochCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedTimestampQueryHttpDateCommand}
   */
  malformedTimestampQueryHttpDate(
    args: MalformedTimestampQueryHttpDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedTimestampQueryHttpDateCommandOutput>;
  malformedTimestampQueryHttpDate(
    args: MalformedTimestampQueryHttpDateCommandInput,
    cb: (err: any, data?: MalformedTimestampQueryHttpDateCommandOutput) => void
  ): void;
  malformedTimestampQueryHttpDate(
    args: MalformedTimestampQueryHttpDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedTimestampQueryHttpDateCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedUnionCommand}
   */
  malformedUnion(): Promise<MalformedUnionCommandOutput>;
  malformedUnion(
    args: MalformedUnionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MalformedUnionCommandOutput>;
  malformedUnion(
    args: MalformedUnionCommandInput,
    cb: (err: any, data?: MalformedUnionCommandOutput) => void
  ): void;
  malformedUnion(
    args: MalformedUnionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedUnionCommandOutput) => void
  ): void;

  /**
   * @see {@link MediaTypeHeaderCommand}
   */
  mediaTypeHeader(): Promise<MediaTypeHeaderCommandOutput>;
  mediaTypeHeader(
    args: MediaTypeHeaderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MediaTypeHeaderCommandOutput>;
  mediaTypeHeader(
    args: MediaTypeHeaderCommandInput,
    cb: (err: any, data?: MediaTypeHeaderCommandOutput) => void
  ): void;
  mediaTypeHeader(
    args: MediaTypeHeaderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MediaTypeHeaderCommandOutput) => void
  ): void;

  /**
   * @see {@link NoInputAndNoOutputCommand}
   */
  noInputAndNoOutput(): Promise<NoInputAndNoOutputCommandOutput>;
  noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputAndNoOutputCommandOutput>;
  noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    cb: (err: any, data?: NoInputAndNoOutputCommandOutput) => void
  ): void;
  noInputAndNoOutput(
    args: NoInputAndNoOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputAndNoOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link NoInputAndOutputCommand}
   */
  noInputAndOutput(): Promise<NoInputAndOutputCommandOutput>;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NoInputAndOutputCommandOutput>;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;
  noInputAndOutput(
    args: NoInputAndOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NoInputAndOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link NullAndEmptyHeadersClientCommand}
   */
  nullAndEmptyHeadersClient(): Promise<NullAndEmptyHeadersClientCommandOutput>;
  nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NullAndEmptyHeadersClientCommandOutput>;
  nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    cb: (err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void
  ): void;
  nullAndEmptyHeadersClient(
    args: NullAndEmptyHeadersClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullAndEmptyHeadersClientCommandOutput) => void
  ): void;

  /**
   * @see {@link NullAndEmptyHeadersServerCommand}
   */
  nullAndEmptyHeadersServer(): Promise<NullAndEmptyHeadersServerCommandOutput>;
  nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NullAndEmptyHeadersServerCommandOutput>;
  nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    cb: (err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void
  ): void;
  nullAndEmptyHeadersServer(
    args: NullAndEmptyHeadersServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NullAndEmptyHeadersServerCommandOutput) => void
  ): void;

  /**
   * @see {@link OmitsNullSerializesEmptyStringCommand}
   */
  omitsNullSerializesEmptyString(): Promise<OmitsNullSerializesEmptyStringCommandOutput>;
  omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OmitsNullSerializesEmptyStringCommandOutput>;
  omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    cb: (err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void
  ): void;
  omitsNullSerializesEmptyString(
    args: OmitsNullSerializesEmptyStringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OmitsNullSerializesEmptyStringCommandOutput) => void
  ): void;

  /**
   * @see {@link OmitsSerializingEmptyListsCommand}
   */
  omitsSerializingEmptyLists(): Promise<OmitsSerializingEmptyListsCommandOutput>;
  omitsSerializingEmptyLists(
    args: OmitsSerializingEmptyListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OmitsSerializingEmptyListsCommandOutput>;
  omitsSerializingEmptyLists(
    args: OmitsSerializingEmptyListsCommandInput,
    cb: (err: any, data?: OmitsSerializingEmptyListsCommandOutput) => void
  ): void;
  omitsSerializingEmptyLists(
    args: OmitsSerializingEmptyListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OmitsSerializingEmptyListsCommandOutput) => void
  ): void;

  /**
   * @see {@link OperationWithDefaultsCommand}
   */
  operationWithDefaults(): Promise<OperationWithDefaultsCommandOutput>;
  operationWithDefaults(
    args: OperationWithDefaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OperationWithDefaultsCommandOutput>;
  operationWithDefaults(
    args: OperationWithDefaultsCommandInput,
    cb: (err: any, data?: OperationWithDefaultsCommandOutput) => void
  ): void;
  operationWithDefaults(
    args: OperationWithDefaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithDefaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link OperationWithNestedStructureCommand}
   */
  operationWithNestedStructure(
    args: OperationWithNestedStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OperationWithNestedStructureCommandOutput>;
  operationWithNestedStructure(
    args: OperationWithNestedStructureCommandInput,
    cb: (err: any, data?: OperationWithNestedStructureCommandOutput) => void
  ): void;
  operationWithNestedStructure(
    args: OperationWithNestedStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OperationWithNestedStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link OutputStreamCommand}
   */
  outputStream(): Promise<OutputStreamCommandOutput>;
  outputStream(
    args: OutputStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OutputStreamCommandOutput>;
  outputStream(
    args: OutputStreamCommandInput,
    cb: (err: any, data?: OutputStreamCommandOutput) => void
  ): void;
  outputStream(
    args: OutputStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OutputStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link OutputStreamWithInitialResponseCommand}
   */
  outputStreamWithInitialResponse(): Promise<OutputStreamWithInitialResponseCommandOutput>;
  outputStreamWithInitialResponse(
    args: OutputStreamWithInitialResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OutputStreamWithInitialResponseCommandOutput>;
  outputStreamWithInitialResponse(
    args: OutputStreamWithInitialResponseCommandInput,
    cb: (err: any, data?: OutputStreamWithInitialResponseCommandOutput) => void
  ): void;
  outputStreamWithInitialResponse(
    args: OutputStreamWithInitialResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OutputStreamWithInitialResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link PostPlayerActionCommand}
   */
  postPlayerAction(): Promise<PostPlayerActionCommandOutput>;
  postPlayerAction(
    args: PostPlayerActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostPlayerActionCommandOutput>;
  postPlayerAction(
    args: PostPlayerActionCommandInput,
    cb: (err: any, data?: PostPlayerActionCommandOutput) => void
  ): void;
  postPlayerAction(
    args: PostPlayerActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostPlayerActionCommandOutput) => void
  ): void;

  /**
   * @see {@link PostUnionWithJsonNameCommand}
   */
  postUnionWithJsonName(): Promise<PostUnionWithJsonNameCommandOutput>;
  postUnionWithJsonName(
    args: PostUnionWithJsonNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostUnionWithJsonNameCommandOutput>;
  postUnionWithJsonName(
    args: PostUnionWithJsonNameCommandInput,
    cb: (err: any, data?: PostUnionWithJsonNameCommandOutput) => void
  ): void;
  postUnionWithJsonName(
    args: PostUnionWithJsonNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostUnionWithJsonNameCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWithContentEncodingCommand}
   */
  putWithContentEncoding(): Promise<PutWithContentEncodingCommandOutput>;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutWithContentEncodingCommandOutput>;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;
  putWithContentEncoding(
    args: PutWithContentEncodingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWithContentEncodingCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryIdempotencyTokenAutoFillCommand}
   */
  queryIdempotencyTokenAutoFill(): Promise<QueryIdempotencyTokenAutoFillCommandOutput>;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryIdempotencyTokenAutoFillCommandOutput>;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;
  queryIdempotencyTokenAutoFill(
    args: QueryIdempotencyTokenAutoFillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryIdempotencyTokenAutoFillCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryParamsAsStringListMapCommand}
   */
  queryParamsAsStringListMap(): Promise<QueryParamsAsStringListMapCommandOutput>;
  queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryParamsAsStringListMapCommandOutput>;
  queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    cb: (err: any, data?: QueryParamsAsStringListMapCommandOutput) => void
  ): void;
  queryParamsAsStringListMap(
    args: QueryParamsAsStringListMapCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryParamsAsStringListMapCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryPrecedenceCommand}
   */
  queryPrecedence(): Promise<QueryPrecedenceCommandOutput>;
  queryPrecedence(
    args: QueryPrecedenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryPrecedenceCommandOutput>;
  queryPrecedence(
    args: QueryPrecedenceCommandInput,
    cb: (err: any, data?: QueryPrecedenceCommandOutput) => void
  ): void;
  queryPrecedence(
    args: QueryPrecedenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryPrecedenceCommandOutput) => void
  ): void;

  /**
   * @see {@link RecursiveShapesCommand}
   */
  recursiveShapes(): Promise<RecursiveShapesCommandOutput>;
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecursiveShapesCommandOutput>;
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    cb: (err: any, data?: RecursiveShapesCommandOutput) => void
  ): void;
  recursiveShapes(
    args: RecursiveShapesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecursiveShapesCommandOutput) => void
  ): void;

  /**
   * @see {@link ResponseCodeHttpFallbackCommand}
   */
  responseCodeHttpFallback(): Promise<ResponseCodeHttpFallbackCommandOutput>;
  responseCodeHttpFallback(
    args: ResponseCodeHttpFallbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResponseCodeHttpFallbackCommandOutput>;
  responseCodeHttpFallback(
    args: ResponseCodeHttpFallbackCommandInput,
    cb: (err: any, data?: ResponseCodeHttpFallbackCommandOutput) => void
  ): void;
  responseCodeHttpFallback(
    args: ResponseCodeHttpFallbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResponseCodeHttpFallbackCommandOutput) => void
  ): void;

  /**
   * @see {@link ResponseCodeRequiredCommand}
   */
  responseCodeRequired(): Promise<ResponseCodeRequiredCommandOutput>;
  responseCodeRequired(
    args: ResponseCodeRequiredCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResponseCodeRequiredCommandOutput>;
  responseCodeRequired(
    args: ResponseCodeRequiredCommandInput,
    cb: (err: any, data?: ResponseCodeRequiredCommandOutput) => void
  ): void;
  responseCodeRequired(
    args: ResponseCodeRequiredCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResponseCodeRequiredCommandOutput) => void
  ): void;

  /**
   * @see {@link SimpleScalarPropertiesCommand}
   */
  simpleScalarProperties(): Promise<SimpleScalarPropertiesCommandOutput>;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimpleScalarPropertiesCommandOutput>;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;
  simpleScalarProperties(
    args: SimpleScalarPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimpleScalarPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SparseJsonListsCommand}
   */
  sparseJsonLists(): Promise<SparseJsonListsCommandOutput>;
  sparseJsonLists(
    args: SparseJsonListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SparseJsonListsCommandOutput>;
  sparseJsonLists(
    args: SparseJsonListsCommandInput,
    cb: (err: any, data?: SparseJsonListsCommandOutput) => void
  ): void;
  sparseJsonLists(
    args: SparseJsonListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SparseJsonListsCommandOutput) => void
  ): void;

  /**
   * @see {@link SparseJsonMapsCommand}
   */
  sparseJsonMaps(): Promise<SparseJsonMapsCommandOutput>;
  sparseJsonMaps(
    args: SparseJsonMapsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SparseJsonMapsCommandOutput>;
  sparseJsonMaps(
    args: SparseJsonMapsCommandInput,
    cb: (err: any, data?: SparseJsonMapsCommandOutput) => void
  ): void;
  sparseJsonMaps(
    args: SparseJsonMapsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SparseJsonMapsCommandOutput) => void
  ): void;

  /**
   * @see {@link StreamingTraitsCommand}
   */
  streamingTraits(): Promise<StreamingTraitsCommandOutput>;
  streamingTraits(
    args: StreamingTraitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StreamingTraitsCommandOutput>;
  streamingTraits(
    args: StreamingTraitsCommandInput,
    cb: (err: any, data?: StreamingTraitsCommandOutput) => void
  ): void;
  streamingTraits(
    args: StreamingTraitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StreamingTraitsCommandOutput) => void
  ): void;

  /**
   * @see {@link StreamingTraitsRequireLengthCommand}
   */
  streamingTraitsRequireLength(): Promise<StreamingTraitsRequireLengthCommandOutput>;
  streamingTraitsRequireLength(
    args: StreamingTraitsRequireLengthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StreamingTraitsRequireLengthCommandOutput>;
  streamingTraitsRequireLength(
    args: StreamingTraitsRequireLengthCommandInput,
    cb: (err: any, data?: StreamingTraitsRequireLengthCommandOutput) => void
  ): void;
  streamingTraitsRequireLength(
    args: StreamingTraitsRequireLengthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StreamingTraitsRequireLengthCommandOutput) => void
  ): void;

  /**
   * @see {@link StreamingTraitsWithMediaTypeCommand}
   */
  streamingTraitsWithMediaType(): Promise<StreamingTraitsWithMediaTypeCommandOutput>;
  streamingTraitsWithMediaType(
    args: StreamingTraitsWithMediaTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StreamingTraitsWithMediaTypeCommandOutput>;
  streamingTraitsWithMediaType(
    args: StreamingTraitsWithMediaTypeCommandInput,
    cb: (err: any, data?: StreamingTraitsWithMediaTypeCommandOutput) => void
  ): void;
  streamingTraitsWithMediaType(
    args: StreamingTraitsWithMediaTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StreamingTraitsWithMediaTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link TestBodyStructureCommand}
   */
  testBodyStructure(): Promise<TestBodyStructureCommandOutput>;
  testBodyStructure(
    args: TestBodyStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestBodyStructureCommandOutput>;
  testBodyStructure(
    args: TestBodyStructureCommandInput,
    cb: (err: any, data?: TestBodyStructureCommandOutput) => void
  ): void;
  testBodyStructure(
    args: TestBodyStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestBodyStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link TestGetNoInputNoPayloadCommand}
   */
  testGetNoInputNoPayload(): Promise<TestGetNoInputNoPayloadCommandOutput>;
  testGetNoInputNoPayload(
    args: TestGetNoInputNoPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestGetNoInputNoPayloadCommandOutput>;
  testGetNoInputNoPayload(
    args: TestGetNoInputNoPayloadCommandInput,
    cb: (err: any, data?: TestGetNoInputNoPayloadCommandOutput) => void
  ): void;
  testGetNoInputNoPayload(
    args: TestGetNoInputNoPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestGetNoInputNoPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link TestGetNoPayloadCommand}
   */
  testGetNoPayload(): Promise<TestGetNoPayloadCommandOutput>;
  testGetNoPayload(
    args: TestGetNoPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestGetNoPayloadCommandOutput>;
  testGetNoPayload(
    args: TestGetNoPayloadCommandInput,
    cb: (err: any, data?: TestGetNoPayloadCommandOutput) => void
  ): void;
  testGetNoPayload(
    args: TestGetNoPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestGetNoPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link TestPayloadBlobCommand}
   */
  testPayloadBlob(): Promise<TestPayloadBlobCommandOutput>;
  testPayloadBlob(
    args: TestPayloadBlobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestPayloadBlobCommandOutput>;
  testPayloadBlob(
    args: TestPayloadBlobCommandInput,
    cb: (err: any, data?: TestPayloadBlobCommandOutput) => void
  ): void;
  testPayloadBlob(
    args: TestPayloadBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestPayloadBlobCommandOutput) => void
  ): void;

  /**
   * @see {@link TestPayloadStructureCommand}
   */
  testPayloadStructure(): Promise<TestPayloadStructureCommandOutput>;
  testPayloadStructure(
    args: TestPayloadStructureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestPayloadStructureCommandOutput>;
  testPayloadStructure(
    args: TestPayloadStructureCommandInput,
    cb: (err: any, data?: TestPayloadStructureCommandOutput) => void
  ): void;
  testPayloadStructure(
    args: TestPayloadStructureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestPayloadStructureCommandOutput) => void
  ): void;

  /**
   * @see {@link TestPostNoInputNoPayloadCommand}
   */
  testPostNoInputNoPayload(): Promise<TestPostNoInputNoPayloadCommandOutput>;
  testPostNoInputNoPayload(
    args: TestPostNoInputNoPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestPostNoInputNoPayloadCommandOutput>;
  testPostNoInputNoPayload(
    args: TestPostNoInputNoPayloadCommandInput,
    cb: (err: any, data?: TestPostNoInputNoPayloadCommandOutput) => void
  ): void;
  testPostNoInputNoPayload(
    args: TestPostNoInputNoPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestPostNoInputNoPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link TestPostNoPayloadCommand}
   */
  testPostNoPayload(): Promise<TestPostNoPayloadCommandOutput>;
  testPostNoPayload(
    args: TestPostNoPayloadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestPostNoPayloadCommandOutput>;
  testPostNoPayload(
    args: TestPostNoPayloadCommandInput,
    cb: (err: any, data?: TestPostNoPayloadCommandOutput) => void
  ): void;
  testPostNoPayload(
    args: TestPostNoPayloadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestPostNoPayloadCommandOutput) => void
  ): void;

  /**
   * @see {@link TimestampFormatHeadersCommand}
   */
  timestampFormatHeaders(): Promise<TimestampFormatHeadersCommandOutput>;
  timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TimestampFormatHeadersCommandOutput>;
  timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    cb: (err: any, data?: TimestampFormatHeadersCommandOutput) => void
  ): void;
  timestampFormatHeaders(
    args: TimestampFormatHeadersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TimestampFormatHeadersCommandOutput) => void
  ): void;

  /**
   * @see {@link UnitInputAndOutputCommand}
   */
  unitInputAndOutput(): Promise<UnitInputAndOutputCommandOutput>;
  unitInputAndOutput(
    args: UnitInputAndOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnitInputAndOutputCommandOutput>;
  unitInputAndOutput(
    args: UnitInputAndOutputCommandInput,
    cb: (err: any, data?: UnitInputAndOutputCommandOutput) => void
  ): void;
  unitInputAndOutput(
    args: UnitInputAndOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnitInputAndOutputCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class RestJsonProtocol extends RestJsonProtocolClient implements RestJsonProtocol {}
createAggregatedClient(commands, RestJsonProtocol);
