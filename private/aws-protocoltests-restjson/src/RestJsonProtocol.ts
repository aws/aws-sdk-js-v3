// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AllQueryStringTypesCommand,
  AllQueryStringTypesCommandInput,
  AllQueryStringTypesCommandOutput,
} from "./commands/AllQueryStringTypesCommand";
import {
  ConstantAndVariableQueryStringCommand,
  ConstantAndVariableQueryStringCommandInput,
  ConstantAndVariableQueryStringCommandOutput,
} from "./commands/ConstantAndVariableQueryStringCommand";
import {
  ConstantQueryStringCommand,
  ConstantQueryStringCommandInput,
  ConstantQueryStringCommandOutput,
} from "./commands/ConstantQueryStringCommand";
import {
  ContentTypeParametersCommand,
  ContentTypeParametersCommandInput,
  ContentTypeParametersCommandOutput,
} from "./commands/ContentTypeParametersCommand";
import {
  DatetimeOffsetsCommand,
  DatetimeOffsetsCommandInput,
  DatetimeOffsetsCommandOutput,
} from "./commands/DatetimeOffsetsCommand";
import {
  DocumentTypeAsMapValueCommand,
  DocumentTypeAsMapValueCommandInput,
  DocumentTypeAsMapValueCommandOutput,
} from "./commands/DocumentTypeAsMapValueCommand";
import {
  DocumentTypeAsPayloadCommand,
  DocumentTypeAsPayloadCommandInput,
  DocumentTypeAsPayloadCommandOutput,
} from "./commands/DocumentTypeAsPayloadCommand";
import {
  DocumentTypeCommand,
  DocumentTypeCommandInput,
  DocumentTypeCommandOutput,
} from "./commands/DocumentTypeCommand";
import {
  DuplexStreamCommand,
  DuplexStreamCommandInput,
  DuplexStreamCommandOutput,
} from "./commands/DuplexStreamCommand";
import {
  DuplexStreamWithDistinctStreamsCommand,
  DuplexStreamWithDistinctStreamsCommandInput,
  DuplexStreamWithDistinctStreamsCommandOutput,
} from "./commands/DuplexStreamWithDistinctStreamsCommand";
import {
  DuplexStreamWithInitialMessagesCommand,
  DuplexStreamWithInitialMessagesCommandInput,
  DuplexStreamWithInitialMessagesCommandOutput,
} from "./commands/DuplexStreamWithInitialMessagesCommand";
import {
  EmptyInputAndEmptyOutputCommand,
  EmptyInputAndEmptyOutputCommandInput,
  EmptyInputAndEmptyOutputCommandOutput,
} from "./commands/EmptyInputAndEmptyOutputCommand";
import {
  EndpointOperationCommand,
  EndpointOperationCommandInput,
  EndpointOperationCommandOutput,
} from "./commands/EndpointOperationCommand";
import {
  EndpointWithHostLabelOperationCommand,
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
} from "./commands/EndpointWithHostLabelOperationCommand";
import {
  FractionalSecondsCommand,
  FractionalSecondsCommandInput,
  FractionalSecondsCommandOutput,
} from "./commands/FractionalSecondsCommand";
import {
  GreetingWithErrorsCommand,
  GreetingWithErrorsCommandInput,
  GreetingWithErrorsCommandOutput,
} from "./commands/GreetingWithErrorsCommand";
import {
  HostWithPathOperationCommand,
  HostWithPathOperationCommandInput,
  HostWithPathOperationCommandOutput,
} from "./commands/HostWithPathOperationCommand";
import {
  HttpChecksumRequiredCommand,
  HttpChecksumRequiredCommandInput,
  HttpChecksumRequiredCommandOutput,
} from "./commands/HttpChecksumRequiredCommand";
import {
  HttpEmptyPrefixHeadersCommand,
  HttpEmptyPrefixHeadersCommandInput,
  HttpEmptyPrefixHeadersCommandOutput,
} from "./commands/HttpEmptyPrefixHeadersCommand";
import {
  HttpEnumPayloadCommand,
  HttpEnumPayloadCommandInput,
  HttpEnumPayloadCommandOutput,
} from "./commands/HttpEnumPayloadCommand";
import {
  HttpPayloadTraitsCommand,
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
} from "./commands/HttpPayloadTraitsCommand";
import {
  HttpPayloadTraitsWithMediaTypeCommand,
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
} from "./commands/HttpPayloadTraitsWithMediaTypeCommand";
import {
  HttpPayloadWithStructureCommand,
  HttpPayloadWithStructureCommandInput,
  HttpPayloadWithStructureCommandOutput,
} from "./commands/HttpPayloadWithStructureCommand";
import {
  HttpPayloadWithUnionCommand,
  HttpPayloadWithUnionCommandInput,
  HttpPayloadWithUnionCommandOutput,
} from "./commands/HttpPayloadWithUnionCommand";
import {
  HttpPrefixHeadersCommand,
  HttpPrefixHeadersCommandInput,
  HttpPrefixHeadersCommandOutput,
} from "./commands/HttpPrefixHeadersCommand";
import {
  HttpPrefixHeadersInResponseCommand,
  HttpPrefixHeadersInResponseCommandInput,
  HttpPrefixHeadersInResponseCommandOutput,
} from "./commands/HttpPrefixHeadersInResponseCommand";
import {
  HttpQueryParamsOnlyOperationCommand,
  HttpQueryParamsOnlyOperationCommandInput,
  HttpQueryParamsOnlyOperationCommandOutput,
} from "./commands/HttpQueryParamsOnlyOperationCommand";
import {
  HttpRequestWithFloatLabelsCommand,
  HttpRequestWithFloatLabelsCommandInput,
  HttpRequestWithFloatLabelsCommandOutput,
} from "./commands/HttpRequestWithFloatLabelsCommand";
import {
  HttpRequestWithGreedyLabelInPathCommand,
  HttpRequestWithGreedyLabelInPathCommandInput,
  HttpRequestWithGreedyLabelInPathCommandOutput,
} from "./commands/HttpRequestWithGreedyLabelInPathCommand";
import {
  HttpRequestWithLabelsAndTimestampFormatCommand,
  HttpRequestWithLabelsAndTimestampFormatCommandInput,
  HttpRequestWithLabelsAndTimestampFormatCommandOutput,
} from "./commands/HttpRequestWithLabelsAndTimestampFormatCommand";
import {
  HttpRequestWithLabelsCommand,
  HttpRequestWithLabelsCommandInput,
  HttpRequestWithLabelsCommandOutput,
} from "./commands/HttpRequestWithLabelsCommand";
import {
  HttpRequestWithRegexLiteralCommand,
  HttpRequestWithRegexLiteralCommandInput,
  HttpRequestWithRegexLiteralCommandOutput,
} from "./commands/HttpRequestWithRegexLiteralCommand";
import {
  HttpResponseCodeCommand,
  HttpResponseCodeCommandInput,
  HttpResponseCodeCommandOutput,
} from "./commands/HttpResponseCodeCommand";
import {
  HttpStringPayloadCommand,
  HttpStringPayloadCommandInput,
  HttpStringPayloadCommandOutput,
} from "./commands/HttpStringPayloadCommand";
import {
  IgnoreQueryParamsInResponseCommand,
  IgnoreQueryParamsInResponseCommandInput,
  IgnoreQueryParamsInResponseCommandOutput,
} from "./commands/IgnoreQueryParamsInResponseCommand";
import {
  InputAndOutputWithHeadersCommand,
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
} from "./commands/InputAndOutputWithHeadersCommand";
import { InputStreamCommand, InputStreamCommandInput, InputStreamCommandOutput } from "./commands/InputStreamCommand";
import {
  InputStreamWithInitialRequestCommand,
  InputStreamWithInitialRequestCommandInput,
  InputStreamWithInitialRequestCommandOutput,
} from "./commands/InputStreamWithInitialRequestCommand";
import { JsonBlobsCommand, JsonBlobsCommandInput, JsonBlobsCommandOutput } from "./commands/JsonBlobsCommand";
import { JsonEnumsCommand, JsonEnumsCommandInput, JsonEnumsCommandOutput } from "./commands/JsonEnumsCommand";
import {
  JsonIntEnumsCommand,
  JsonIntEnumsCommandInput,
  JsonIntEnumsCommandOutput,
} from "./commands/JsonIntEnumsCommand";
import { JsonListsCommand, JsonListsCommandInput, JsonListsCommandOutput } from "./commands/JsonListsCommand";
import { JsonMapsCommand, JsonMapsCommandInput, JsonMapsCommandOutput } from "./commands/JsonMapsCommand";
import {
  JsonTimestampsCommand,
  JsonTimestampsCommandInput,
  JsonTimestampsCommandOutput,
} from "./commands/JsonTimestampsCommand";
import { JsonUnionsCommand, JsonUnionsCommandInput, JsonUnionsCommandOutput } from "./commands/JsonUnionsCommand";
import {
  MalformedAcceptWithBodyCommand,
  MalformedAcceptWithBodyCommandInput,
  MalformedAcceptWithBodyCommandOutput,
} from "./commands/MalformedAcceptWithBodyCommand";
import {
  MalformedAcceptWithGenericStringCommand,
  MalformedAcceptWithGenericStringCommandInput,
  MalformedAcceptWithGenericStringCommandOutput,
} from "./commands/MalformedAcceptWithGenericStringCommand";
import {
  MalformedAcceptWithPayloadCommand,
  MalformedAcceptWithPayloadCommandInput,
  MalformedAcceptWithPayloadCommandOutput,
} from "./commands/MalformedAcceptWithPayloadCommand";
import {
  MalformedBlobCommand,
  MalformedBlobCommandInput,
  MalformedBlobCommandOutput,
} from "./commands/MalformedBlobCommand";
import {
  MalformedBooleanCommand,
  MalformedBooleanCommandInput,
  MalformedBooleanCommandOutput,
} from "./commands/MalformedBooleanCommand";
import {
  MalformedByteCommand,
  MalformedByteCommandInput,
  MalformedByteCommandOutput,
} from "./commands/MalformedByteCommand";
import {
  MalformedContentTypeWithBodyCommand,
  MalformedContentTypeWithBodyCommandInput,
  MalformedContentTypeWithBodyCommandOutput,
} from "./commands/MalformedContentTypeWithBodyCommand";
import {
  MalformedContentTypeWithGenericStringCommand,
  MalformedContentTypeWithGenericStringCommandInput,
  MalformedContentTypeWithGenericStringCommandOutput,
} from "./commands/MalformedContentTypeWithGenericStringCommand";
import {
  MalformedContentTypeWithoutBodyCommand,
  MalformedContentTypeWithoutBodyCommandInput,
  MalformedContentTypeWithoutBodyCommandOutput,
} from "./commands/MalformedContentTypeWithoutBodyCommand";
import {
  MalformedContentTypeWithoutBodyEmptyInputCommand,
  MalformedContentTypeWithoutBodyEmptyInputCommandInput,
  MalformedContentTypeWithoutBodyEmptyInputCommandOutput,
} from "./commands/MalformedContentTypeWithoutBodyEmptyInputCommand";
import {
  MalformedContentTypeWithPayloadCommand,
  MalformedContentTypeWithPayloadCommandInput,
  MalformedContentTypeWithPayloadCommandOutput,
} from "./commands/MalformedContentTypeWithPayloadCommand";
import {
  MalformedDoubleCommand,
  MalformedDoubleCommandInput,
  MalformedDoubleCommandOutput,
} from "./commands/MalformedDoubleCommand";
import {
  MalformedFloatCommand,
  MalformedFloatCommandInput,
  MalformedFloatCommandOutput,
} from "./commands/MalformedFloatCommand";
import {
  MalformedIntegerCommand,
  MalformedIntegerCommandInput,
  MalformedIntegerCommandOutput,
} from "./commands/MalformedIntegerCommand";
import {
  MalformedListCommand,
  MalformedListCommandInput,
  MalformedListCommandOutput,
} from "./commands/MalformedListCommand";
import {
  MalformedLongCommand,
  MalformedLongCommandInput,
  MalformedLongCommandOutput,
} from "./commands/MalformedLongCommand";
import {
  MalformedMapCommand,
  MalformedMapCommandInput,
  MalformedMapCommandOutput,
} from "./commands/MalformedMapCommand";
import {
  MalformedRequestBodyCommand,
  MalformedRequestBodyCommandInput,
  MalformedRequestBodyCommandOutput,
} from "./commands/MalformedRequestBodyCommand";
import {
  MalformedShortCommand,
  MalformedShortCommandInput,
  MalformedShortCommandOutput,
} from "./commands/MalformedShortCommand";
import {
  MalformedStringCommand,
  MalformedStringCommandInput,
  MalformedStringCommandOutput,
} from "./commands/MalformedStringCommand";
import {
  MalformedTimestampBodyDateTimeCommand,
  MalformedTimestampBodyDateTimeCommandInput,
  MalformedTimestampBodyDateTimeCommandOutput,
} from "./commands/MalformedTimestampBodyDateTimeCommand";
import {
  MalformedTimestampBodyDefaultCommand,
  MalformedTimestampBodyDefaultCommandInput,
  MalformedTimestampBodyDefaultCommandOutput,
} from "./commands/MalformedTimestampBodyDefaultCommand";
import {
  MalformedTimestampBodyHttpDateCommand,
  MalformedTimestampBodyHttpDateCommandInput,
  MalformedTimestampBodyHttpDateCommandOutput,
} from "./commands/MalformedTimestampBodyHttpDateCommand";
import {
  MalformedTimestampHeaderDateTimeCommand,
  MalformedTimestampHeaderDateTimeCommandInput,
  MalformedTimestampHeaderDateTimeCommandOutput,
} from "./commands/MalformedTimestampHeaderDateTimeCommand";
import {
  MalformedTimestampHeaderDefaultCommand,
  MalformedTimestampHeaderDefaultCommandInput,
  MalformedTimestampHeaderDefaultCommandOutput,
} from "./commands/MalformedTimestampHeaderDefaultCommand";
import {
  MalformedTimestampHeaderEpochCommand,
  MalformedTimestampHeaderEpochCommandInput,
  MalformedTimestampHeaderEpochCommandOutput,
} from "./commands/MalformedTimestampHeaderEpochCommand";
import {
  MalformedTimestampPathDefaultCommand,
  MalformedTimestampPathDefaultCommandInput,
  MalformedTimestampPathDefaultCommandOutput,
} from "./commands/MalformedTimestampPathDefaultCommand";
import {
  MalformedTimestampPathEpochCommand,
  MalformedTimestampPathEpochCommandInput,
  MalformedTimestampPathEpochCommandOutput,
} from "./commands/MalformedTimestampPathEpochCommand";
import {
  MalformedTimestampPathHttpDateCommand,
  MalformedTimestampPathHttpDateCommandInput,
  MalformedTimestampPathHttpDateCommandOutput,
} from "./commands/MalformedTimestampPathHttpDateCommand";
import {
  MalformedTimestampQueryDefaultCommand,
  MalformedTimestampQueryDefaultCommandInput,
  MalformedTimestampQueryDefaultCommandOutput,
} from "./commands/MalformedTimestampQueryDefaultCommand";
import {
  MalformedTimestampQueryEpochCommand,
  MalformedTimestampQueryEpochCommandInput,
  MalformedTimestampQueryEpochCommandOutput,
} from "./commands/MalformedTimestampQueryEpochCommand";
import {
  MalformedTimestampQueryHttpDateCommand,
  MalformedTimestampQueryHttpDateCommandInput,
  MalformedTimestampQueryHttpDateCommandOutput,
} from "./commands/MalformedTimestampQueryHttpDateCommand";
import {
  MalformedUnionCommand,
  MalformedUnionCommandInput,
  MalformedUnionCommandOutput,
} from "./commands/MalformedUnionCommand";
import {
  MediaTypeHeaderCommand,
  MediaTypeHeaderCommandInput,
  MediaTypeHeaderCommandOutput,
} from "./commands/MediaTypeHeaderCommand";
import {
  NoInputAndNoOutputCommand,
  NoInputAndNoOutputCommandInput,
  NoInputAndNoOutputCommandOutput,
} from "./commands/NoInputAndNoOutputCommand";
import {
  NoInputAndOutputCommand,
  NoInputAndOutputCommandInput,
  NoInputAndOutputCommandOutput,
} from "./commands/NoInputAndOutputCommand";
import {
  NullAndEmptyHeadersClientCommand,
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
} from "./commands/NullAndEmptyHeadersClientCommand";
import {
  NullAndEmptyHeadersServerCommand,
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
} from "./commands/NullAndEmptyHeadersServerCommand";
import {
  OmitsNullSerializesEmptyStringCommand,
  OmitsNullSerializesEmptyStringCommandInput,
  OmitsNullSerializesEmptyStringCommandOutput,
} from "./commands/OmitsNullSerializesEmptyStringCommand";
import {
  OmitsSerializingEmptyListsCommand,
  OmitsSerializingEmptyListsCommandInput,
  OmitsSerializingEmptyListsCommandOutput,
} from "./commands/OmitsSerializingEmptyListsCommand";
import {
  OperationWithDefaultsCommand,
  OperationWithDefaultsCommandInput,
  OperationWithDefaultsCommandOutput,
} from "./commands/OperationWithDefaultsCommand";
import {
  OperationWithNestedStructureCommand,
  OperationWithNestedStructureCommandInput,
  OperationWithNestedStructureCommandOutput,
} from "./commands/OperationWithNestedStructureCommand";
import {
  OutputStreamCommand,
  OutputStreamCommandInput,
  OutputStreamCommandOutput,
} from "./commands/OutputStreamCommand";
import {
  OutputStreamWithInitialResponseCommand,
  OutputStreamWithInitialResponseCommandInput,
  OutputStreamWithInitialResponseCommandOutput,
} from "./commands/OutputStreamWithInitialResponseCommand";
import {
  PostPlayerActionCommand,
  PostPlayerActionCommandInput,
  PostPlayerActionCommandOutput,
} from "./commands/PostPlayerActionCommand";
import {
  PostUnionWithJsonNameCommand,
  PostUnionWithJsonNameCommandInput,
  PostUnionWithJsonNameCommandOutput,
} from "./commands/PostUnionWithJsonNameCommand";
import {
  PutWithContentEncodingCommand,
  PutWithContentEncodingCommandInput,
  PutWithContentEncodingCommandOutput,
} from "./commands/PutWithContentEncodingCommand";
import {
  QueryIdempotencyTokenAutoFillCommand,
  QueryIdempotencyTokenAutoFillCommandInput,
  QueryIdempotencyTokenAutoFillCommandOutput,
} from "./commands/QueryIdempotencyTokenAutoFillCommand";
import {
  QueryParamsAsStringListMapCommand,
  QueryParamsAsStringListMapCommandInput,
  QueryParamsAsStringListMapCommandOutput,
} from "./commands/QueryParamsAsStringListMapCommand";
import {
  QueryPrecedenceCommand,
  QueryPrecedenceCommandInput,
  QueryPrecedenceCommandOutput,
} from "./commands/QueryPrecedenceCommand";
import {
  RecursiveShapesCommand,
  RecursiveShapesCommandInput,
  RecursiveShapesCommandOutput,
} from "./commands/RecursiveShapesCommand";
import {
  ResponseCodeHttpFallbackCommand,
  ResponseCodeHttpFallbackCommandInput,
  ResponseCodeHttpFallbackCommandOutput,
} from "./commands/ResponseCodeHttpFallbackCommand";
import {
  ResponseCodeRequiredCommand,
  ResponseCodeRequiredCommandInput,
  ResponseCodeRequiredCommandOutput,
} from "./commands/ResponseCodeRequiredCommand";
import {
  SimpleScalarPropertiesCommand,
  SimpleScalarPropertiesCommandInput,
  SimpleScalarPropertiesCommandOutput,
} from "./commands/SimpleScalarPropertiesCommand";
import {
  SparseJsonListsCommand,
  SparseJsonListsCommandInput,
  SparseJsonListsCommandOutput,
} from "./commands/SparseJsonListsCommand";
import {
  SparseJsonMapsCommand,
  SparseJsonMapsCommandInput,
  SparseJsonMapsCommandOutput,
} from "./commands/SparseJsonMapsCommand";
import {
  StreamingTraitsCommand,
  StreamingTraitsCommandInput,
  StreamingTraitsCommandOutput,
} from "./commands/StreamingTraitsCommand";
import {
  StreamingTraitsRequireLengthCommand,
  StreamingTraitsRequireLengthCommandInput,
  StreamingTraitsRequireLengthCommandOutput,
} from "./commands/StreamingTraitsRequireLengthCommand";
import {
  StreamingTraitsWithMediaTypeCommand,
  StreamingTraitsWithMediaTypeCommandInput,
  StreamingTraitsWithMediaTypeCommandOutput,
} from "./commands/StreamingTraitsWithMediaTypeCommand";
import {
  TestBodyStructureCommand,
  TestBodyStructureCommandInput,
  TestBodyStructureCommandOutput,
} from "./commands/TestBodyStructureCommand";
import {
  TestGetNoInputNoPayloadCommand,
  TestGetNoInputNoPayloadCommandInput,
  TestGetNoInputNoPayloadCommandOutput,
} from "./commands/TestGetNoInputNoPayloadCommand";
import {
  TestGetNoPayloadCommand,
  TestGetNoPayloadCommandInput,
  TestGetNoPayloadCommandOutput,
} from "./commands/TestGetNoPayloadCommand";
import {
  TestPayloadBlobCommand,
  TestPayloadBlobCommandInput,
  TestPayloadBlobCommandOutput,
} from "./commands/TestPayloadBlobCommand";
import {
  TestPayloadStructureCommand,
  TestPayloadStructureCommandInput,
  TestPayloadStructureCommandOutput,
} from "./commands/TestPayloadStructureCommand";
import {
  TestPostNoInputNoPayloadCommand,
  TestPostNoInputNoPayloadCommandInput,
  TestPostNoInputNoPayloadCommandOutput,
} from "./commands/TestPostNoInputNoPayloadCommand";
import {
  TestPostNoPayloadCommand,
  TestPostNoPayloadCommandInput,
  TestPostNoPayloadCommandOutput,
} from "./commands/TestPostNoPayloadCommand";
import {
  TimestampFormatHeadersCommand,
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
} from "./commands/TimestampFormatHeadersCommand";
import {
  UnitInputAndOutputCommand,
  UnitInputAndOutputCommandInput,
  UnitInputAndOutputCommandOutput,
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
  datetimeOffsets(args: DatetimeOffsetsCommandInput, cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void): void;
  datetimeOffsets(
    args: DatetimeOffsetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DatetimeOffsetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DocumentTypeCommand}
   */
  documentType(): Promise<DocumentTypeCommandOutput>;
  documentType(args: DocumentTypeCommandInput, options?: __HttpHandlerOptions): Promise<DocumentTypeCommandOutput>;
  documentType(args: DocumentTypeCommandInput, cb: (err: any, data?: DocumentTypeCommandOutput) => void): void;
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
  duplexStream(args: DuplexStreamCommandInput, options?: __HttpHandlerOptions): Promise<DuplexStreamCommandOutput>;
  duplexStream(args: DuplexStreamCommandInput, cb: (err: any, data?: DuplexStreamCommandOutput) => void): void;
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
  httpEnumPayload(args: HttpEnumPayloadCommandInput, cb: (err: any, data?: HttpEnumPayloadCommandOutput) => void): void;
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
  inputStream(args: InputStreamCommandInput, options?: __HttpHandlerOptions): Promise<InputStreamCommandOutput>;
  inputStream(args: InputStreamCommandInput, cb: (err: any, data?: InputStreamCommandOutput) => void): void;
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
  jsonBlobs(args: JsonBlobsCommandInput, options?: __HttpHandlerOptions): Promise<JsonBlobsCommandOutput>;
  jsonBlobs(args: JsonBlobsCommandInput, cb: (err: any, data?: JsonBlobsCommandOutput) => void): void;
  jsonBlobs(
    args: JsonBlobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonBlobsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonEnumsCommand}
   */
  jsonEnums(): Promise<JsonEnumsCommandOutput>;
  jsonEnums(args: JsonEnumsCommandInput, options?: __HttpHandlerOptions): Promise<JsonEnumsCommandOutput>;
  jsonEnums(args: JsonEnumsCommandInput, cb: (err: any, data?: JsonEnumsCommandOutput) => void): void;
  jsonEnums(
    args: JsonEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonIntEnumsCommand}
   */
  jsonIntEnums(): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(args: JsonIntEnumsCommandInput, options?: __HttpHandlerOptions): Promise<JsonIntEnumsCommandOutput>;
  jsonIntEnums(args: JsonIntEnumsCommandInput, cb: (err: any, data?: JsonIntEnumsCommandOutput) => void): void;
  jsonIntEnums(
    args: JsonIntEnumsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonIntEnumsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonListsCommand}
   */
  jsonLists(): Promise<JsonListsCommandOutput>;
  jsonLists(args: JsonListsCommandInput, options?: __HttpHandlerOptions): Promise<JsonListsCommandOutput>;
  jsonLists(args: JsonListsCommandInput, cb: (err: any, data?: JsonListsCommandOutput) => void): void;
  jsonLists(
    args: JsonListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonListsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonMapsCommand}
   */
  jsonMaps(): Promise<JsonMapsCommandOutput>;
  jsonMaps(args: JsonMapsCommandInput, options?: __HttpHandlerOptions): Promise<JsonMapsCommandOutput>;
  jsonMaps(args: JsonMapsCommandInput, cb: (err: any, data?: JsonMapsCommandOutput) => void): void;
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
  jsonTimestamps(args: JsonTimestampsCommandInput, cb: (err: any, data?: JsonTimestampsCommandOutput) => void): void;
  jsonTimestamps(
    args: JsonTimestampsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JsonTimestampsCommandOutput) => void
  ): void;

  /**
   * @see {@link JsonUnionsCommand}
   */
  jsonUnions(): Promise<JsonUnionsCommandOutput>;
  jsonUnions(args: JsonUnionsCommandInput, options?: __HttpHandlerOptions): Promise<JsonUnionsCommandOutput>;
  jsonUnions(args: JsonUnionsCommandInput, cb: (err: any, data?: JsonUnionsCommandOutput) => void): void;
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
  malformedBlob(args: MalformedBlobCommandInput, options?: __HttpHandlerOptions): Promise<MalformedBlobCommandOutput>;
  malformedBlob(args: MalformedBlobCommandInput, cb: (err: any, data?: MalformedBlobCommandOutput) => void): void;
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
  malformedByte(args: MalformedByteCommandInput, options?: __HttpHandlerOptions): Promise<MalformedByteCommandOutput>;
  malformedByte(args: MalformedByteCommandInput, cb: (err: any, data?: MalformedByteCommandOutput) => void): void;
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
  malformedDouble(args: MalformedDoubleCommandInput, cb: (err: any, data?: MalformedDoubleCommandOutput) => void): void;
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
  malformedFloat(args: MalformedFloatCommandInput, cb: (err: any, data?: MalformedFloatCommandOutput) => void): void;
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
  malformedList(args: MalformedListCommandInput, options?: __HttpHandlerOptions): Promise<MalformedListCommandOutput>;
  malformedList(args: MalformedListCommandInput, cb: (err: any, data?: MalformedListCommandOutput) => void): void;
  malformedList(
    args: MalformedListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedListCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedLongCommand}
   */
  malformedLong(args: MalformedLongCommandInput, options?: __HttpHandlerOptions): Promise<MalformedLongCommandOutput>;
  malformedLong(args: MalformedLongCommandInput, cb: (err: any, data?: MalformedLongCommandOutput) => void): void;
  malformedLong(
    args: MalformedLongCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MalformedLongCommandOutput) => void
  ): void;

  /**
   * @see {@link MalformedMapCommand}
   */
  malformedMap(): Promise<MalformedMapCommandOutput>;
  malformedMap(args: MalformedMapCommandInput, options?: __HttpHandlerOptions): Promise<MalformedMapCommandOutput>;
  malformedMap(args: MalformedMapCommandInput, cb: (err: any, data?: MalformedMapCommandOutput) => void): void;
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
  malformedShort(args: MalformedShortCommandInput, cb: (err: any, data?: MalformedShortCommandOutput) => void): void;
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
  malformedString(args: MalformedStringCommandInput, cb: (err: any, data?: MalformedStringCommandOutput) => void): void;
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
  malformedUnion(args: MalformedUnionCommandInput, cb: (err: any, data?: MalformedUnionCommandOutput) => void): void;
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
  mediaTypeHeader(args: MediaTypeHeaderCommandInput, cb: (err: any, data?: MediaTypeHeaderCommandOutput) => void): void;
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
  outputStream(args: OutputStreamCommandInput, options?: __HttpHandlerOptions): Promise<OutputStreamCommandOutput>;
  outputStream(args: OutputStreamCommandInput, cb: (err: any, data?: OutputStreamCommandOutput) => void): void;
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
  queryPrecedence(args: QueryPrecedenceCommandInput, cb: (err: any, data?: QueryPrecedenceCommandOutput) => void): void;
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
  recursiveShapes(args: RecursiveShapesCommandInput, cb: (err: any, data?: RecursiveShapesCommandOutput) => void): void;
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
  sparseJsonLists(args: SparseJsonListsCommandInput, cb: (err: any, data?: SparseJsonListsCommandOutput) => void): void;
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
  sparseJsonMaps(args: SparseJsonMapsCommandInput, cb: (err: any, data?: SparseJsonMapsCommandOutput) => void): void;
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
  streamingTraits(args: StreamingTraitsCommandInput, cb: (err: any, data?: StreamingTraitsCommandOutput) => void): void;
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
  testPayloadBlob(args: TestPayloadBlobCommandInput, cb: (err: any, data?: TestPayloadBlobCommandOutput) => void): void;
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
