// smithy-typescript generated code
import {
  AuthScheme as __AuthScheme,
  Caller as __Caller,
  ExecutionHook as __ExecutionHook,
  FrameworkSteps as __FrameworkSteps,
  httpbinding,
  InternalFailureException as __InternalFailureException,
  isFrameworkException as __isFrameworkException,
  Mux as __Mux,
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerInterceptor as __ServerInterceptor,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnauthenticatedException as __UnauthenticatedException,
  UnknownOperationException as __UnknownOperationException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/core/protocols";
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@smithy/core/serde";
import { NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";

import { serializeFrameworkException } from "../protocols/Aws_restJson1";
import {
  AllQueryStringTypes,
  AllQueryStringTypesSerializer,
  AllQueryStringTypesServerInput,
} from "./operations/AllQueryStringTypes";
import {
  ConstantAndVariableQueryString,
  ConstantAndVariableQueryStringSerializer,
  ConstantAndVariableQueryStringServerInput,
} from "./operations/ConstantAndVariableQueryString";
import {
  ConstantQueryString,
  ConstantQueryStringSerializer,
  ConstantQueryStringServerInput,
} from "./operations/ConstantQueryString";
import {
  ContentTypeParameters,
  ContentTypeParametersSerializer,
  ContentTypeParametersServerInput,
} from "./operations/ContentTypeParameters";
import { DatetimeOffsets, DatetimeOffsetsSerializer, DatetimeOffsetsServerInput } from "./operations/DatetimeOffsets";
import { DocumentType, DocumentTypeSerializer, DocumentTypeServerInput } from "./operations/DocumentType";
import {
  DocumentTypeAsMapValue,
  DocumentTypeAsMapValueSerializer,
  DocumentTypeAsMapValueServerInput,
} from "./operations/DocumentTypeAsMapValue";
import {
  DocumentTypeAsPayload,
  DocumentTypeAsPayloadSerializer,
  DocumentTypeAsPayloadServerInput,
} from "./operations/DocumentTypeAsPayload";
import { DuplexStream, DuplexStreamSerializer, DuplexStreamServerInput } from "./operations/DuplexStream";
import {
  DuplexStreamWithDistinctStreams,
  DuplexStreamWithDistinctStreamsSerializer,
  DuplexStreamWithDistinctStreamsServerInput,
} from "./operations/DuplexStreamWithDistinctStreams";
import {
  DuplexStreamWithInitialMessages,
  DuplexStreamWithInitialMessagesSerializer,
  DuplexStreamWithInitialMessagesServerInput,
} from "./operations/DuplexStreamWithInitialMessages";
import {
  EmptyInputAndEmptyOutput,
  EmptyInputAndEmptyOutputSerializer,
  EmptyInputAndEmptyOutputServerInput,
} from "./operations/EmptyInputAndEmptyOutput";
import {
  EndpointOperation,
  EndpointOperationSerializer,
  EndpointOperationServerInput,
} from "./operations/EndpointOperation";
import {
  EndpointWithHostLabelOperation,
  EndpointWithHostLabelOperationSerializer,
  EndpointWithHostLabelOperationServerInput,
} from "./operations/EndpointWithHostLabelOperation";
import {
  FractionalSeconds,
  FractionalSecondsSerializer,
  FractionalSecondsServerInput,
} from "./operations/FractionalSeconds";
import {
  GreetingWithErrors,
  GreetingWithErrorsSerializer,
  GreetingWithErrorsServerInput,
} from "./operations/GreetingWithErrors";
import {
  HostWithPathOperation,
  HostWithPathOperationSerializer,
  HostWithPathOperationServerInput,
} from "./operations/HostWithPathOperation";
import {
  HttpChecksumRequired,
  HttpChecksumRequiredSerializer,
  HttpChecksumRequiredServerInput,
} from "./operations/HttpChecksumRequired";
import {
  HttpEmptyPrefixHeaders,
  HttpEmptyPrefixHeadersSerializer,
  HttpEmptyPrefixHeadersServerInput,
} from "./operations/HttpEmptyPrefixHeaders";
import { HttpEnumPayload, HttpEnumPayloadSerializer, HttpEnumPayloadServerInput } from "./operations/HttpEnumPayload";
import {
  HttpPayloadTraits,
  HttpPayloadTraitsSerializer,
  HttpPayloadTraitsServerInput,
} from "./operations/HttpPayloadTraits";
import {
  HttpPayloadTraitsWithMediaType,
  HttpPayloadTraitsWithMediaTypeSerializer,
  HttpPayloadTraitsWithMediaTypeServerInput,
} from "./operations/HttpPayloadTraitsWithMediaType";
import {
  HttpPayloadWithStructure,
  HttpPayloadWithStructureSerializer,
  HttpPayloadWithStructureServerInput,
} from "./operations/HttpPayloadWithStructure";
import {
  HttpPayloadWithUnion,
  HttpPayloadWithUnionSerializer,
  HttpPayloadWithUnionServerInput,
} from "./operations/HttpPayloadWithUnion";
import {
  HttpPrefixHeaders,
  HttpPrefixHeadersSerializer,
  HttpPrefixHeadersServerInput,
} from "./operations/HttpPrefixHeaders";
import {
  HttpPrefixHeadersInResponse,
  HttpPrefixHeadersInResponseSerializer,
  HttpPrefixHeadersInResponseServerInput,
} from "./operations/HttpPrefixHeadersInResponse";
import {
  HttpQueryParamsOnlyOperation,
  HttpQueryParamsOnlyOperationSerializer,
  HttpQueryParamsOnlyOperationServerInput,
} from "./operations/HttpQueryParamsOnlyOperation";
import {
  HttpRequestWithFloatLabels,
  HttpRequestWithFloatLabelsSerializer,
  HttpRequestWithFloatLabelsServerInput,
} from "./operations/HttpRequestWithFloatLabels";
import {
  HttpRequestWithGreedyLabelInPath,
  HttpRequestWithGreedyLabelInPathSerializer,
  HttpRequestWithGreedyLabelInPathServerInput,
} from "./operations/HttpRequestWithGreedyLabelInPath";
import {
  HttpRequestWithLabels,
  HttpRequestWithLabelsSerializer,
  HttpRequestWithLabelsServerInput,
} from "./operations/HttpRequestWithLabels";
import {
  HttpRequestWithLabelsAndTimestampFormat,
  HttpRequestWithLabelsAndTimestampFormatSerializer,
  HttpRequestWithLabelsAndTimestampFormatServerInput,
} from "./operations/HttpRequestWithLabelsAndTimestampFormat";
import {
  HttpRequestWithRegexLiteral,
  HttpRequestWithRegexLiteralSerializer,
  HttpRequestWithRegexLiteralServerInput,
} from "./operations/HttpRequestWithRegexLiteral";
import {
  HttpResponseCode,
  HttpResponseCodeSerializer,
  HttpResponseCodeServerInput,
} from "./operations/HttpResponseCode";
import {
  HttpStringPayload,
  HttpStringPayloadSerializer,
  HttpStringPayloadServerInput,
} from "./operations/HttpStringPayload";
import {
  IgnoreQueryParamsInResponse,
  IgnoreQueryParamsInResponseSerializer,
  IgnoreQueryParamsInResponseServerInput,
} from "./operations/IgnoreQueryParamsInResponse";
import {
  InputAndOutputWithHeaders,
  InputAndOutputWithHeadersSerializer,
  InputAndOutputWithHeadersServerInput,
} from "./operations/InputAndOutputWithHeaders";
import { InputStream, InputStreamSerializer, InputStreamServerInput } from "./operations/InputStream";
import {
  InputStreamWithInitialRequest,
  InputStreamWithInitialRequestSerializer,
  InputStreamWithInitialRequestServerInput,
} from "./operations/InputStreamWithInitialRequest";
import { JsonBlobs, JsonBlobsSerializer, JsonBlobsServerInput } from "./operations/JsonBlobs";
import { JsonEnums, JsonEnumsSerializer, JsonEnumsServerInput } from "./operations/JsonEnums";
import { JsonIntEnums, JsonIntEnumsSerializer, JsonIntEnumsServerInput } from "./operations/JsonIntEnums";
import { JsonLists, JsonListsSerializer, JsonListsServerInput } from "./operations/JsonLists";
import { JsonMaps, JsonMapsSerializer, JsonMapsServerInput } from "./operations/JsonMaps";
import { JsonTimestamps, JsonTimestampsSerializer, JsonTimestampsServerInput } from "./operations/JsonTimestamps";
import { JsonUnions, JsonUnionsSerializer, JsonUnionsServerInput } from "./operations/JsonUnions";
import {
  MalformedAcceptWithBody,
  MalformedAcceptWithBodySerializer,
  MalformedAcceptWithBodyServerInput,
} from "./operations/MalformedAcceptWithBody";
import {
  MalformedAcceptWithGenericString,
  MalformedAcceptWithGenericStringSerializer,
  MalformedAcceptWithGenericStringServerInput,
} from "./operations/MalformedAcceptWithGenericString";
import {
  MalformedAcceptWithPayload,
  MalformedAcceptWithPayloadSerializer,
  MalformedAcceptWithPayloadServerInput,
} from "./operations/MalformedAcceptWithPayload";
import { MalformedBlob, MalformedBlobSerializer, MalformedBlobServerInput } from "./operations/MalformedBlob";
import {
  MalformedBoolean,
  MalformedBooleanSerializer,
  MalformedBooleanServerInput,
} from "./operations/MalformedBoolean";
import { MalformedByte, MalformedByteSerializer, MalformedByteServerInput } from "./operations/MalformedByte";
import {
  MalformedContentTypeWithBody,
  MalformedContentTypeWithBodySerializer,
  MalformedContentTypeWithBodyServerInput,
} from "./operations/MalformedContentTypeWithBody";
import {
  MalformedContentTypeWithGenericString,
  MalformedContentTypeWithGenericStringSerializer,
  MalformedContentTypeWithGenericStringServerInput,
} from "./operations/MalformedContentTypeWithGenericString";
import {
  MalformedContentTypeWithoutBody,
  MalformedContentTypeWithoutBodySerializer,
  MalformedContentTypeWithoutBodyServerInput,
} from "./operations/MalformedContentTypeWithoutBody";
import {
  MalformedContentTypeWithoutBodyEmptyInput,
  MalformedContentTypeWithoutBodyEmptyInputSerializer,
  MalformedContentTypeWithoutBodyEmptyInputServerInput,
} from "./operations/MalformedContentTypeWithoutBodyEmptyInput";
import {
  MalformedContentTypeWithPayload,
  MalformedContentTypeWithPayloadSerializer,
  MalformedContentTypeWithPayloadServerInput,
} from "./operations/MalformedContentTypeWithPayload";
import { MalformedDouble, MalformedDoubleSerializer, MalformedDoubleServerInput } from "./operations/MalformedDouble";
import { MalformedFloat, MalformedFloatSerializer, MalformedFloatServerInput } from "./operations/MalformedFloat";
import {
  MalformedInteger,
  MalformedIntegerSerializer,
  MalformedIntegerServerInput,
} from "./operations/MalformedInteger";
import { MalformedList, MalformedListSerializer, MalformedListServerInput } from "./operations/MalformedList";
import { MalformedLong, MalformedLongSerializer, MalformedLongServerInput } from "./operations/MalformedLong";
import { MalformedMap, MalformedMapSerializer, MalformedMapServerInput } from "./operations/MalformedMap";
import {
  MalformedRequestBody,
  MalformedRequestBodySerializer,
  MalformedRequestBodyServerInput,
} from "./operations/MalformedRequestBody";
import { MalformedShort, MalformedShortSerializer, MalformedShortServerInput } from "./operations/MalformedShort";
import { MalformedString, MalformedStringSerializer, MalformedStringServerInput } from "./operations/MalformedString";
import {
  MalformedTimestampBodyDateTime,
  MalformedTimestampBodyDateTimeSerializer,
  MalformedTimestampBodyDateTimeServerInput,
} from "./operations/MalformedTimestampBodyDateTime";
import {
  MalformedTimestampBodyDefault,
  MalformedTimestampBodyDefaultSerializer,
  MalformedTimestampBodyDefaultServerInput,
} from "./operations/MalformedTimestampBodyDefault";
import {
  MalformedTimestampBodyHttpDate,
  MalformedTimestampBodyHttpDateSerializer,
  MalformedTimestampBodyHttpDateServerInput,
} from "./operations/MalformedTimestampBodyHttpDate";
import {
  MalformedTimestampHeaderDateTime,
  MalformedTimestampHeaderDateTimeSerializer,
  MalformedTimestampHeaderDateTimeServerInput,
} from "./operations/MalformedTimestampHeaderDateTime";
import {
  MalformedTimestampHeaderDefault,
  MalformedTimestampHeaderDefaultSerializer,
  MalformedTimestampHeaderDefaultServerInput,
} from "./operations/MalformedTimestampHeaderDefault";
import {
  MalformedTimestampHeaderEpoch,
  MalformedTimestampHeaderEpochSerializer,
  MalformedTimestampHeaderEpochServerInput,
} from "./operations/MalformedTimestampHeaderEpoch";
import {
  MalformedTimestampPathDefault,
  MalformedTimestampPathDefaultSerializer,
  MalformedTimestampPathDefaultServerInput,
} from "./operations/MalformedTimestampPathDefault";
import {
  MalformedTimestampPathEpoch,
  MalformedTimestampPathEpochSerializer,
  MalformedTimestampPathEpochServerInput,
} from "./operations/MalformedTimestampPathEpoch";
import {
  MalformedTimestampPathHttpDate,
  MalformedTimestampPathHttpDateSerializer,
  MalformedTimestampPathHttpDateServerInput,
} from "./operations/MalformedTimestampPathHttpDate";
import {
  MalformedTimestampQueryDefault,
  MalformedTimestampQueryDefaultSerializer,
  MalformedTimestampQueryDefaultServerInput,
} from "./operations/MalformedTimestampQueryDefault";
import {
  MalformedTimestampQueryEpoch,
  MalformedTimestampQueryEpochSerializer,
  MalformedTimestampQueryEpochServerInput,
} from "./operations/MalformedTimestampQueryEpoch";
import {
  MalformedTimestampQueryHttpDate,
  MalformedTimestampQueryHttpDateSerializer,
  MalformedTimestampQueryHttpDateServerInput,
} from "./operations/MalformedTimestampQueryHttpDate";
import { MalformedUnion, MalformedUnionSerializer, MalformedUnionServerInput } from "./operations/MalformedUnion";
import { MediaTypeHeader, MediaTypeHeaderSerializer, MediaTypeHeaderServerInput } from "./operations/MediaTypeHeader";
import {
  NoInputAndNoOutput,
  NoInputAndNoOutputSerializer,
  NoInputAndNoOutputServerInput,
} from "./operations/NoInputAndNoOutput";
import {
  NoInputAndOutput,
  NoInputAndOutputSerializer,
  NoInputAndOutputServerInput,
} from "./operations/NoInputAndOutput";
import {
  NullAndEmptyHeadersClient,
  NullAndEmptyHeadersClientSerializer,
  NullAndEmptyHeadersClientServerInput,
} from "./operations/NullAndEmptyHeadersClient";
import {
  NullAndEmptyHeadersServer,
  NullAndEmptyHeadersServerSerializer,
  NullAndEmptyHeadersServerServerInput,
} from "./operations/NullAndEmptyHeadersServer";
import {
  OmitsNullSerializesEmptyString,
  OmitsNullSerializesEmptyStringSerializer,
  OmitsNullSerializesEmptyStringServerInput,
} from "./operations/OmitsNullSerializesEmptyString";
import {
  OmitsSerializingEmptyLists,
  OmitsSerializingEmptyListsSerializer,
  OmitsSerializingEmptyListsServerInput,
} from "./operations/OmitsSerializingEmptyLists";
import {
  OperationWithDefaults,
  OperationWithDefaultsSerializer,
  OperationWithDefaultsServerInput,
} from "./operations/OperationWithDefaults";
import {
  OperationWithNestedStructure,
  OperationWithNestedStructureSerializer,
  OperationWithNestedStructureServerInput,
} from "./operations/OperationWithNestedStructure";
import { OutputStream, OutputStreamSerializer, OutputStreamServerInput } from "./operations/OutputStream";
import {
  OutputStreamWithInitialResponse,
  OutputStreamWithInitialResponseSerializer,
  OutputStreamWithInitialResponseServerInput,
} from "./operations/OutputStreamWithInitialResponse";
import {
  PostPlayerAction,
  PostPlayerActionSerializer,
  PostPlayerActionServerInput,
} from "./operations/PostPlayerAction";
import {
  PostUnionWithJsonName,
  PostUnionWithJsonNameSerializer,
  PostUnionWithJsonNameServerInput,
} from "./operations/PostUnionWithJsonName";
import {
  PutWithContentEncoding,
  PutWithContentEncodingSerializer,
  PutWithContentEncodingServerInput,
} from "./operations/PutWithContentEncoding";
import {
  QueryIdempotencyTokenAutoFill,
  QueryIdempotencyTokenAutoFillSerializer,
  QueryIdempotencyTokenAutoFillServerInput,
} from "./operations/QueryIdempotencyTokenAutoFill";
import {
  QueryParamsAsStringListMap,
  QueryParamsAsStringListMapSerializer,
  QueryParamsAsStringListMapServerInput,
} from "./operations/QueryParamsAsStringListMap";
import { QueryPrecedence, QueryPrecedenceSerializer, QueryPrecedenceServerInput } from "./operations/QueryPrecedence";
import { RecursiveShapes, RecursiveShapesSerializer, RecursiveShapesServerInput } from "./operations/RecursiveShapes";
import {
  ResponseCodeHttpFallback,
  ResponseCodeHttpFallbackSerializer,
  ResponseCodeHttpFallbackServerInput,
} from "./operations/ResponseCodeHttpFallback";
import {
  ResponseCodeRequired,
  ResponseCodeRequiredSerializer,
  ResponseCodeRequiredServerInput,
} from "./operations/ResponseCodeRequired";
import {
  SimpleScalarProperties,
  SimpleScalarPropertiesSerializer,
  SimpleScalarPropertiesServerInput,
} from "./operations/SimpleScalarProperties";
import { SparseJsonLists, SparseJsonListsSerializer, SparseJsonListsServerInput } from "./operations/SparseJsonLists";
import { SparseJsonMaps, SparseJsonMapsSerializer, SparseJsonMapsServerInput } from "./operations/SparseJsonMaps";
import { StreamingTraits, StreamingTraitsSerializer, StreamingTraitsServerInput } from "./operations/StreamingTraits";
import {
  StreamingTraitsRequireLength,
  StreamingTraitsRequireLengthSerializer,
  StreamingTraitsRequireLengthServerInput,
} from "./operations/StreamingTraitsRequireLength";
import {
  StreamingTraitsWithMediaType,
  StreamingTraitsWithMediaTypeSerializer,
  StreamingTraitsWithMediaTypeServerInput,
} from "./operations/StreamingTraitsWithMediaType";
import {
  TestBodyStructure,
  TestBodyStructureSerializer,
  TestBodyStructureServerInput,
} from "./operations/TestBodyStructure";
import {
  TestGetNoInputNoPayload,
  TestGetNoInputNoPayloadSerializer,
  TestGetNoInputNoPayloadServerInput,
} from "./operations/TestGetNoInputNoPayload";
import {
  TestGetNoPayload,
  TestGetNoPayloadSerializer,
  TestGetNoPayloadServerInput,
} from "./operations/TestGetNoPayload";
import { TestPayloadBlob, TestPayloadBlobSerializer, TestPayloadBlobServerInput } from "./operations/TestPayloadBlob";
import {
  TestPayloadStructure,
  TestPayloadStructureSerializer,
  TestPayloadStructureServerInput,
} from "./operations/TestPayloadStructure";
import {
  TestPostNoInputNoPayload,
  TestPostNoInputNoPayloadSerializer,
  TestPostNoInputNoPayloadServerInput,
} from "./operations/TestPostNoInputNoPayload";
import {
  TestPostNoPayload,
  TestPostNoPayloadSerializer,
  TestPostNoPayloadServerInput,
} from "./operations/TestPostNoPayload";
import {
  TimestampFormatHeaders,
  TimestampFormatHeadersSerializer,
  TimestampFormatHeadersServerInput,
} from "./operations/TimestampFormatHeaders";
import {
  UnitInputAndOutput,
  UnitInputAndOutputSerializer,
  UnitInputAndOutputServerInput,
} from "./operations/UnitInputAndOutput";

export type RestJsonServiceOperations = "AllQueryStringTypes" | "ConstantAndVariableQueryString" | "ConstantQueryString" | "ContentTypeParameters" | "DatetimeOffsets" | "DocumentType" | "DocumentTypeAsMapValue" | "DocumentTypeAsPayload" | "DuplexStream" | "DuplexStreamWithDistinctStreams" | "DuplexStreamWithInitialMessages" | "EmptyInputAndEmptyOutput" | "EndpointOperation" | "EndpointWithHostLabelOperation" | "FractionalSeconds" | "GreetingWithErrors" | "HostWithPathOperation" | "HttpChecksumRequired" | "HttpEmptyPrefixHeaders" | "HttpEnumPayload" | "HttpPayloadTraits" | "HttpPayloadTraitsWithMediaType" | "HttpPayloadWithStructure" | "HttpPayloadWithUnion" | "HttpPrefixHeaders" | "HttpPrefixHeadersInResponse" | "HttpQueryParamsOnlyOperation" | "HttpRequestWithFloatLabels" | "HttpRequestWithGreedyLabelInPath" | "HttpRequestWithLabels" | "HttpRequestWithLabelsAndTimestampFormat" | "HttpRequestWithRegexLiteral" | "HttpResponseCode" | "HttpStringPayload" | "IgnoreQueryParamsInResponse" | "InputAndOutputWithHeaders" | "InputStream" | "InputStreamWithInitialRequest" | "JsonBlobs" | "JsonEnums" | "JsonIntEnums" | "JsonLists" | "JsonMaps" | "JsonTimestamps" | "JsonUnions" | "MalformedAcceptWithBody" | "MalformedAcceptWithGenericString" | "MalformedAcceptWithPayload" | "MalformedBlob" | "MalformedBoolean" | "MalformedByte" | "MalformedContentTypeWithBody" | "MalformedContentTypeWithGenericString" | "MalformedContentTypeWithoutBody" | "MalformedContentTypeWithoutBodyEmptyInput" | "MalformedContentTypeWithPayload" | "MalformedDouble" | "MalformedFloat" | "MalformedInteger" | "MalformedList" | "MalformedLong" | "MalformedMap" | "MalformedRequestBody" | "MalformedShort" | "MalformedString" | "MalformedTimestampBodyDateTime" | "MalformedTimestampBodyDefault" | "MalformedTimestampBodyHttpDate" | "MalformedTimestampHeaderDateTime" | "MalformedTimestampHeaderDefault" | "MalformedTimestampHeaderEpoch" | "MalformedTimestampPathDefault" | "MalformedTimestampPathEpoch" | "MalformedTimestampPathHttpDate" | "MalformedTimestampQueryDefault" | "MalformedTimestampQueryEpoch" | "MalformedTimestampQueryHttpDate" | "MalformedUnion" | "MediaTypeHeader" | "NoInputAndNoOutput" | "NoInputAndOutput" | "NullAndEmptyHeadersClient" | "NullAndEmptyHeadersServer" | "OmitsNullSerializesEmptyString" | "OmitsSerializingEmptyLists" | "OperationWithDefaults" | "OperationWithNestedStructure" | "OutputStream" | "OutputStreamWithInitialResponse" | "PostPlayerAction" | "PostUnionWithJsonName" | "PutWithContentEncoding" | "QueryIdempotencyTokenAutoFill" | "QueryParamsAsStringListMap" | "QueryPrecedence" | "RecursiveShapes" | "ResponseCodeHttpFallback" | "ResponseCodeRequired" | "SimpleScalarProperties" | "SparseJsonLists" | "SparseJsonMaps" | "StreamingTraits" | "StreamingTraitsRequireLength" | "StreamingTraitsWithMediaType" | "TestBodyStructure" | "TestGetNoInputNoPayload" | "TestGetNoPayload" | "TestPayloadBlob" | "TestPayloadStructure" | "TestPostNoInputNoPayload" | "TestPostNoPayload" | "TimestampFormatHeaders" | "UnitInputAndOutput";
export interface RestJsonService<Context> {
  AllQueryStringTypes: AllQueryStringTypes<Context>
  ConstantAndVariableQueryString: ConstantAndVariableQueryString<Context>
  ConstantQueryString: ConstantQueryString<Context>
  ContentTypeParameters: ContentTypeParameters<Context>
  DatetimeOffsets: DatetimeOffsets<Context>
  DocumentType: DocumentType<Context>
  DocumentTypeAsMapValue: DocumentTypeAsMapValue<Context>
  DocumentTypeAsPayload: DocumentTypeAsPayload<Context>
  DuplexStream: DuplexStream<Context>
  DuplexStreamWithDistinctStreams: DuplexStreamWithDistinctStreams<Context>
  DuplexStreamWithInitialMessages: DuplexStreamWithInitialMessages<Context>
  EmptyInputAndEmptyOutput: EmptyInputAndEmptyOutput<Context>
  EndpointOperation: EndpointOperation<Context>
  EndpointWithHostLabelOperation: EndpointWithHostLabelOperation<Context>
  FractionalSeconds: FractionalSeconds<Context>
  GreetingWithErrors: GreetingWithErrors<Context>
  HostWithPathOperation: HostWithPathOperation<Context>
  HttpChecksumRequired: HttpChecksumRequired<Context>
  HttpEmptyPrefixHeaders: HttpEmptyPrefixHeaders<Context>
  HttpEnumPayload: HttpEnumPayload<Context>
  HttpPayloadTraits: HttpPayloadTraits<Context>
  HttpPayloadTraitsWithMediaType: HttpPayloadTraitsWithMediaType<Context>
  HttpPayloadWithStructure: HttpPayloadWithStructure<Context>
  HttpPayloadWithUnion: HttpPayloadWithUnion<Context>
  HttpPrefixHeaders: HttpPrefixHeaders<Context>
  HttpPrefixHeadersInResponse: HttpPrefixHeadersInResponse<Context>
  HttpQueryParamsOnlyOperation: HttpQueryParamsOnlyOperation<Context>
  HttpRequestWithFloatLabels: HttpRequestWithFloatLabels<Context>
  HttpRequestWithGreedyLabelInPath: HttpRequestWithGreedyLabelInPath<Context>
  HttpRequestWithLabels: HttpRequestWithLabels<Context>
  HttpRequestWithLabelsAndTimestampFormat: HttpRequestWithLabelsAndTimestampFormat<Context>
  HttpRequestWithRegexLiteral: HttpRequestWithRegexLiteral<Context>
  HttpResponseCode: HttpResponseCode<Context>
  HttpStringPayload: HttpStringPayload<Context>
  IgnoreQueryParamsInResponse: IgnoreQueryParamsInResponse<Context>
  InputAndOutputWithHeaders: InputAndOutputWithHeaders<Context>
  InputStream: InputStream<Context>
  InputStreamWithInitialRequest: InputStreamWithInitialRequest<Context>
  JsonBlobs: JsonBlobs<Context>
  JsonEnums: JsonEnums<Context>
  JsonIntEnums: JsonIntEnums<Context>
  JsonLists: JsonLists<Context>
  JsonMaps: JsonMaps<Context>
  JsonTimestamps: JsonTimestamps<Context>
  JsonUnions: JsonUnions<Context>
  MalformedAcceptWithBody: MalformedAcceptWithBody<Context>
  MalformedAcceptWithGenericString: MalformedAcceptWithGenericString<Context>
  MalformedAcceptWithPayload: MalformedAcceptWithPayload<Context>
  MalformedBlob: MalformedBlob<Context>
  MalformedBoolean: MalformedBoolean<Context>
  MalformedByte: MalformedByte<Context>
  MalformedContentTypeWithBody: MalformedContentTypeWithBody<Context>
  MalformedContentTypeWithGenericString: MalformedContentTypeWithGenericString<Context>
  MalformedContentTypeWithoutBody: MalformedContentTypeWithoutBody<Context>
  MalformedContentTypeWithoutBodyEmptyInput: MalformedContentTypeWithoutBodyEmptyInput<Context>
  MalformedContentTypeWithPayload: MalformedContentTypeWithPayload<Context>
  MalformedDouble: MalformedDouble<Context>
  MalformedFloat: MalformedFloat<Context>
  MalformedInteger: MalformedInteger<Context>
  MalformedList: MalformedList<Context>
  MalformedLong: MalformedLong<Context>
  MalformedMap: MalformedMap<Context>
  MalformedRequestBody: MalformedRequestBody<Context>
  MalformedShort: MalformedShort<Context>
  MalformedString: MalformedString<Context>
  MalformedTimestampBodyDateTime: MalformedTimestampBodyDateTime<Context>
  MalformedTimestampBodyDefault: MalformedTimestampBodyDefault<Context>
  MalformedTimestampBodyHttpDate: MalformedTimestampBodyHttpDate<Context>
  MalformedTimestampHeaderDateTime: MalformedTimestampHeaderDateTime<Context>
  MalformedTimestampHeaderDefault: MalformedTimestampHeaderDefault<Context>
  MalformedTimestampHeaderEpoch: MalformedTimestampHeaderEpoch<Context>
  MalformedTimestampPathDefault: MalformedTimestampPathDefault<Context>
  MalformedTimestampPathEpoch: MalformedTimestampPathEpoch<Context>
  MalformedTimestampPathHttpDate: MalformedTimestampPathHttpDate<Context>
  MalformedTimestampQueryDefault: MalformedTimestampQueryDefault<Context>
  MalformedTimestampQueryEpoch: MalformedTimestampQueryEpoch<Context>
  MalformedTimestampQueryHttpDate: MalformedTimestampQueryHttpDate<Context>
  MalformedUnion: MalformedUnion<Context>
  MediaTypeHeader: MediaTypeHeader<Context>
  NoInputAndNoOutput: NoInputAndNoOutput<Context>
  NoInputAndOutput: NoInputAndOutput<Context>
  NullAndEmptyHeadersClient: NullAndEmptyHeadersClient<Context>
  NullAndEmptyHeadersServer: NullAndEmptyHeadersServer<Context>
  OmitsNullSerializesEmptyString: OmitsNullSerializesEmptyString<Context>
  OmitsSerializingEmptyLists: OmitsSerializingEmptyLists<Context>
  OperationWithDefaults: OperationWithDefaults<Context>
  OperationWithNestedStructure: OperationWithNestedStructure<Context>
  OutputStream: OutputStream<Context>
  OutputStreamWithInitialResponse: OutputStreamWithInitialResponse<Context>
  PostPlayerAction: PostPlayerAction<Context>
  PostUnionWithJsonName: PostUnionWithJsonName<Context>
  PutWithContentEncoding: PutWithContentEncoding<Context>
  QueryIdempotencyTokenAutoFill: QueryIdempotencyTokenAutoFill<Context>
  QueryParamsAsStringListMap: QueryParamsAsStringListMap<Context>
  QueryPrecedence: QueryPrecedence<Context>
  RecursiveShapes: RecursiveShapes<Context>
  ResponseCodeHttpFallback: ResponseCodeHttpFallback<Context>
  ResponseCodeRequired: ResponseCodeRequired<Context>
  SimpleScalarProperties: SimpleScalarProperties<Context>
  SparseJsonLists: SparseJsonLists<Context>
  SparseJsonMaps: SparseJsonMaps<Context>
  StreamingTraits: StreamingTraits<Context>
  StreamingTraitsRequireLength: StreamingTraitsRequireLength<Context>
  StreamingTraitsWithMediaType: StreamingTraitsWithMediaType<Context>
  TestBodyStructure: TestBodyStructure<Context>
  TestGetNoInputNoPayload: TestGetNoInputNoPayload<Context>
  TestGetNoPayload: TestGetNoPayload<Context>
  TestPayloadBlob: TestPayloadBlob<Context>
  TestPayloadStructure: TestPayloadStructure<Context>
  TestPostNoInputNoPayload: TestPostNoInputNoPayload<Context>
  TestPostNoPayload: TestPostNoPayload<Context>
  TimestampFormatHeaders: TimestampFormatHeaders<Context>
  UnitInputAndOutput: UnitInputAndOutput<Context>
}
const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true
};
const RestJsonServiceHandlerValidators: { [K in RestJsonServiceOperations]: (input: any) => __ValidationFailure[] } = {
  "AllQueryStringTypes": AllQueryStringTypesServerInput.validate,
  "ConstantAndVariableQueryString": ConstantAndVariableQueryStringServerInput.validate,
  "ConstantQueryString": ConstantQueryStringServerInput.validate,
  "ContentTypeParameters": ContentTypeParametersServerInput.validate,
  "DatetimeOffsets": DatetimeOffsetsServerInput.validate,
  "DocumentType": DocumentTypeServerInput.validate,
  "DocumentTypeAsMapValue": DocumentTypeAsMapValueServerInput.validate,
  "DocumentTypeAsPayload": DocumentTypeAsPayloadServerInput.validate,
  "DuplexStream": DuplexStreamServerInput.validate,
  "DuplexStreamWithDistinctStreams": DuplexStreamWithDistinctStreamsServerInput.validate,
  "DuplexStreamWithInitialMessages": DuplexStreamWithInitialMessagesServerInput.validate,
  "EmptyInputAndEmptyOutput": EmptyInputAndEmptyOutputServerInput.validate,
  "EndpointOperation": EndpointOperationServerInput.validate,
  "EndpointWithHostLabelOperation": EndpointWithHostLabelOperationServerInput.validate,
  "FractionalSeconds": FractionalSecondsServerInput.validate,
  "GreetingWithErrors": GreetingWithErrorsServerInput.validate,
  "HostWithPathOperation": HostWithPathOperationServerInput.validate,
  "HttpChecksumRequired": HttpChecksumRequiredServerInput.validate,
  "HttpEmptyPrefixHeaders": HttpEmptyPrefixHeadersServerInput.validate,
  "HttpEnumPayload": HttpEnumPayloadServerInput.validate,
  "HttpPayloadTraits": HttpPayloadTraitsServerInput.validate,
  "HttpPayloadTraitsWithMediaType": HttpPayloadTraitsWithMediaTypeServerInput.validate,
  "HttpPayloadWithStructure": HttpPayloadWithStructureServerInput.validate,
  "HttpPayloadWithUnion": HttpPayloadWithUnionServerInput.validate,
  "HttpPrefixHeaders": HttpPrefixHeadersServerInput.validate,
  "HttpPrefixHeadersInResponse": HttpPrefixHeadersInResponseServerInput.validate,
  "HttpQueryParamsOnlyOperation": HttpQueryParamsOnlyOperationServerInput.validate,
  "HttpRequestWithFloatLabels": HttpRequestWithFloatLabelsServerInput.validate,
  "HttpRequestWithGreedyLabelInPath": HttpRequestWithGreedyLabelInPathServerInput.validate,
  "HttpRequestWithLabels": HttpRequestWithLabelsServerInput.validate,
  "HttpRequestWithLabelsAndTimestampFormat": HttpRequestWithLabelsAndTimestampFormatServerInput.validate,
  "HttpRequestWithRegexLiteral": HttpRequestWithRegexLiteralServerInput.validate,
  "HttpResponseCode": HttpResponseCodeServerInput.validate,
  "HttpStringPayload": HttpStringPayloadServerInput.validate,
  "IgnoreQueryParamsInResponse": IgnoreQueryParamsInResponseServerInput.validate,
  "InputAndOutputWithHeaders": InputAndOutputWithHeadersServerInput.validate,
  "InputStream": InputStreamServerInput.validate,
  "InputStreamWithInitialRequest": InputStreamWithInitialRequestServerInput.validate,
  "JsonBlobs": JsonBlobsServerInput.validate,
  "JsonEnums": JsonEnumsServerInput.validate,
  "JsonIntEnums": JsonIntEnumsServerInput.validate,
  "JsonLists": JsonListsServerInput.validate,
  "JsonMaps": JsonMapsServerInput.validate,
  "JsonTimestamps": JsonTimestampsServerInput.validate,
  "JsonUnions": JsonUnionsServerInput.validate,
  "MalformedAcceptWithBody": MalformedAcceptWithBodyServerInput.validate,
  "MalformedAcceptWithGenericString": MalformedAcceptWithGenericStringServerInput.validate,
  "MalformedAcceptWithPayload": MalformedAcceptWithPayloadServerInput.validate,
  "MalformedBlob": MalformedBlobServerInput.validate,
  "MalformedBoolean": MalformedBooleanServerInput.validate,
  "MalformedByte": MalformedByteServerInput.validate,
  "MalformedContentTypeWithBody": MalformedContentTypeWithBodyServerInput.validate,
  "MalformedContentTypeWithGenericString": MalformedContentTypeWithGenericStringServerInput.validate,
  "MalformedContentTypeWithoutBody": MalformedContentTypeWithoutBodyServerInput.validate,
  "MalformedContentTypeWithoutBodyEmptyInput": MalformedContentTypeWithoutBodyEmptyInputServerInput.validate,
  "MalformedContentTypeWithPayload": MalformedContentTypeWithPayloadServerInput.validate,
  "MalformedDouble": MalformedDoubleServerInput.validate,
  "MalformedFloat": MalformedFloatServerInput.validate,
  "MalformedInteger": MalformedIntegerServerInput.validate,
  "MalformedList": MalformedListServerInput.validate,
  "MalformedLong": MalformedLongServerInput.validate,
  "MalformedMap": MalformedMapServerInput.validate,
  "MalformedRequestBody": MalformedRequestBodyServerInput.validate,
  "MalformedShort": MalformedShortServerInput.validate,
  "MalformedString": MalformedStringServerInput.validate,
  "MalformedTimestampBodyDateTime": MalformedTimestampBodyDateTimeServerInput.validate,
  "MalformedTimestampBodyDefault": MalformedTimestampBodyDefaultServerInput.validate,
  "MalformedTimestampBodyHttpDate": MalformedTimestampBodyHttpDateServerInput.validate,
  "MalformedTimestampHeaderDateTime": MalformedTimestampHeaderDateTimeServerInput.validate,
  "MalformedTimestampHeaderDefault": MalformedTimestampHeaderDefaultServerInput.validate,
  "MalformedTimestampHeaderEpoch": MalformedTimestampHeaderEpochServerInput.validate,
  "MalformedTimestampPathDefault": MalformedTimestampPathDefaultServerInput.validate,
  "MalformedTimestampPathEpoch": MalformedTimestampPathEpochServerInput.validate,
  "MalformedTimestampPathHttpDate": MalformedTimestampPathHttpDateServerInput.validate,
  "MalformedTimestampQueryDefault": MalformedTimestampQueryDefaultServerInput.validate,
  "MalformedTimestampQueryEpoch": MalformedTimestampQueryEpochServerInput.validate,
  "MalformedTimestampQueryHttpDate": MalformedTimestampQueryHttpDateServerInput.validate,
  "MalformedUnion": MalformedUnionServerInput.validate,
  "MediaTypeHeader": MediaTypeHeaderServerInput.validate,
  "NoInputAndNoOutput": NoInputAndNoOutputServerInput.validate,
  "NoInputAndOutput": NoInputAndOutputServerInput.validate,
  "NullAndEmptyHeadersClient": NullAndEmptyHeadersClientServerInput.validate,
  "NullAndEmptyHeadersServer": NullAndEmptyHeadersServerServerInput.validate,
  "OmitsNullSerializesEmptyString": OmitsNullSerializesEmptyStringServerInput.validate,
  "OmitsSerializingEmptyLists": OmitsSerializingEmptyListsServerInput.validate,
  "OperationWithDefaults": OperationWithDefaultsServerInput.validate,
  "OperationWithNestedStructure": OperationWithNestedStructureServerInput.validate,
  "OutputStream": OutputStreamServerInput.validate,
  "OutputStreamWithInitialResponse": OutputStreamWithInitialResponseServerInput.validate,
  "PostPlayerAction": PostPlayerActionServerInput.validate,
  "PostUnionWithJsonName": PostUnionWithJsonNameServerInput.validate,
  "PutWithContentEncoding": PutWithContentEncodingServerInput.validate,
  "QueryIdempotencyTokenAutoFill": QueryIdempotencyTokenAutoFillServerInput.validate,
  "QueryParamsAsStringListMap": QueryParamsAsStringListMapServerInput.validate,
  "QueryPrecedence": QueryPrecedenceServerInput.validate,
  "RecursiveShapes": RecursiveShapesServerInput.validate,
  "ResponseCodeHttpFallback": ResponseCodeHttpFallbackServerInput.validate,
  "ResponseCodeRequired": ResponseCodeRequiredServerInput.validate,
  "SimpleScalarProperties": SimpleScalarPropertiesServerInput.validate,
  "SparseJsonLists": SparseJsonListsServerInput.validate,
  "SparseJsonMaps": SparseJsonMapsServerInput.validate,
  "StreamingTraits": StreamingTraitsServerInput.validate,
  "StreamingTraitsRequireLength": StreamingTraitsRequireLengthServerInput.validate,
  "StreamingTraitsWithMediaType": StreamingTraitsWithMediaTypeServerInput.validate,
  "TestBodyStructure": TestBodyStructureServerInput.validate,
  "TestGetNoInputNoPayload": TestGetNoInputNoPayloadServerInput.validate,
  "TestGetNoPayload": TestGetNoPayloadServerInput.validate,
  "TestPayloadBlob": TestPayloadBlobServerInput.validate,
  "TestPayloadStructure": TestPayloadStructureServerInput.validate,
  "TestPostNoInputNoPayload": TestPostNoInputNoPayloadServerInput.validate,
  "TestPostNoPayload": TestPostNoPayloadServerInput.validate,
  "TimestampFormatHeaders": TimestampFormatHeadersServerInput.validate,
  "UnitInputAndOutput": UnitInputAndOutputServerInput.validate,
};
export class RestJsonServiceHandler<Context> implements __ServiceHandler<Context> {
  private readonly mux: __Mux<"RestJson", RestJsonServiceOperations>;
  private readonly service: RestJsonService<Context>;
  private readonly serializerFactory: <T extends RestJsonServiceOperations>(op: T) => __OperationSerializer<RestJsonService<Context>, T, __ServiceException>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<RestJsonServiceOperations>;
  private readonly interceptors: __ServerInterceptor<Context>[] = [];
  private readonly authSchemes: __AuthScheme<Context>[] = [];
  /**
   * Construct a RestJsonService handler.
   * @param service The {@link RestJsonService} implementation that supplies the business logic for RestJsonService
   * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in RestJsonService that
   *                          handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    service: RestJsonService<Context>,
    mux: __Mux<"RestJson", RestJsonServiceOperations>,
    serializerFactory:<T extends RestJsonServiceOperations>(op: T) => __OperationSerializer<RestJsonService<Context>, T, __ServiceException>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<RestJsonServiceOperations>
  ) {
    this.service = service;
    this.mux = mux;
    this.serializerFactory = serializerFactory;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  withAuth(...schemes: __AuthScheme<Context>[]): this {
    this.authSchemes.push(...schemes);
    return this;
  }
  addInterceptor(interceptor: __ServerInterceptor<Context>): this {
    this.interceptors.unshift(interceptor);
    return this;
  }
  addInterceptors(...interceptors: __ServerInterceptor<Context>[]): this {
    this.interceptors.unshift(...[...interceptors].reverse());
    return this;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const steps: __FrameworkSteps<Context> = {
      route: (request) => this.mux.match(request)?.operation,
      deserialize: async (operation, request) => {
        try {
          return await this.serializerFactory(operation as RestJsonServiceOperations).deserialize(request, { endpoint: () => Promise.resolve(request), ...serdeContextBase });
        } catch (error: unknown) {
          if (__isFrameworkException(error)) {
            throw error;
          }
          throw new __SerializationException();
        }
      },
      validate: (operation, input) => {
        const validationFailures = RestJsonServiceHandlerValidators[operation as RestJsonServiceOperations](input);
        if (validationFailures && validationFailures.length > 0) {
          const validationException = this.validationCustomizer({ operation: operation as RestJsonServiceOperations }, validationFailures);
          if (validationException) {
            throw validationException;
          }
        }
      },
      invoke: (operation, input, context) => (this.service[operation as RestJsonServiceOperations] as any)(input, context),
      serialize: (operation, output) => this.serializerFactory(operation as RestJsonServiceOperations).serialize(output as any, serdeContextBase),
      serializeError: (operation, error) => {
        if (operation === undefined) {
          return undefined;
        }
        const serializer = this.serializerFactory(operation as RestJsonServiceOperations);
        return serializer.isOperationError(error) ? serializer.serializeError(error, serdeContextBase) : undefined;
      },
      serializeFrameworkException: (e) => this.serializeFrameworkException(e, serdeContextBase),
    };

    const convertError = (op: string | undefined, caught: unknown): Promise<__HttpResponse> => {
      const modeled = steps.serializeError(op, caught);
      if (modeled) {
        return modeled;
      }
      if (__isFrameworkException(caught)) {
        return steps.serializeFrameworkException(caught);
      }
      return steps.serializeFrameworkException(new __InternalFailureException());
    };

    const base = { request, context };
    let operation: string | undefined;
    let input: unknown;
    let output: unknown;
    let response: __HttpResponse | undefined;
    let caller: __Caller | undefined;
    let error: unknown;

    const entered = new Set<__ServerInterceptor<Context>>();

    try {
      for (const interceptor of this.interceptors) {
        if (interceptor.readBeforeExecution) {
          interceptor.readBeforeExecution(base);
        }
        entered.add(interceptor);
      }

      let authScheme: string | undefined;
      if (this.authSchemes.length > 0) {
        for (const scheme of this.authSchemes) {
          const result = await scheme.authenticate(request, context);
          if (result) {
            caller = result;
            authScheme = scheme.name;
            break;
          }
        }
        if (!caller) {
          throw new __UnauthenticatedException();
        }
        this.fireRead("readAfterAuthentication", () => ({ ...base, authScheme: authScheme!, caller: caller! }));
      }

      const req = this.fireModify<__HttpRequest, typeof base>("modifyBeforeDeserialization", request, (r) => ({ ...base, request: r }));

      operation = steps.route(req);
      if (!operation) {
        throw new __UnknownOperationException();
      }

      input = await steps.deserialize(operation, req);
      const inputHook = () => ({ ...base, operation: operation!, input });
      this.fireRead("readAfterDeserialization", inputHook);
      input = this.fireModify("modifyBeforeValidation", input, (v) => ({ ...base, operation: operation!, input: v }));
      steps.validate(operation, input);
      this.fireRead("readAfterValidation", inputHook);
      this.fireRead("readBeforeInvocation", inputHook);
      output = await steps.invoke(operation, input, context);
      this.fireRead("readAfterInvocation", () => ({ ...base, operation: operation!, input, output }));
      output = this.fireModify("modifyBeforeSerialization", output, (v) => ({ ...base, operation: operation!, input, output: v }));
      response = await steps.serialize(operation, output);
      this.fireRead("readAfterSerialization", () => ({ ...base, operation: operation!, input, output, response: response! }));
    } catch (caught: unknown) {
      error = caught;
      response = await convertError(operation, caught);
    }

    try {
      response = this.fireModify("modifyBeforeCompletion", response!, (v) => ({ ...base, operation: operation!, input, output, response: v }));
    } catch (caught: unknown) {
      error = caught;
      response = await convertError(operation, caught);
    }

    const execHook: __ExecutionHook<Context> = { request, context, operation, input, output, response, error };
    for (const interceptor of this.interceptors) {
      if (entered.has(interceptor) && interceptor.readAfterExecution) {
        try {
          interceptor.readAfterExecution(execHook);
        } catch (e) {
          // readAfterExecution is best-effort and must not mask the response; ignore hook failures.
        }
      }
    }

    return response!;
  }
  private fireRead<H>(method: keyof __ServerInterceptor<Context>, buildHook: () => H): void {
    for (const interceptor of this.interceptors) {
      const fn = interceptor[method] as ((hook: H) => void) | undefined;
      if (fn) {
        fn.call(interceptor, buildHook());
      }
    }
  }
  private fireModify<V, H>(method: keyof __ServerInterceptor<Context>, initial: V, buildHook: (current: V) => H): V {
    let current = initial;
    for (const interceptor of this.interceptors) {
      const fn = interceptor[method] as ((hook: H) => V) | undefined;
      if (fn) {
        current = fn.call(interceptor, buildHook(current));
      }
    }
    return current;
  }
}

export const getRestJsonServiceHandler = <Context>(service: RestJsonService<Context>, customizer: __ValidationCustomizer<RestJsonServiceOperations>): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<Context>>([
    new httpbinding.UriSpec<"RestJson", "AllQueryStringTypes">(
      'GET',
      [
        { type: 'path_literal', value: "AllQueryStringTypesInput" },
      ],
      [
      ],
      { service: "RestJson", operation: "AllQueryStringTypes" }),
    new httpbinding.UriSpec<"RestJson", "ConstantAndVariableQueryString">(
      'GET',
      [
        { type: 'path_literal', value: "ConstantAndVariableQueryString" },
      ],
      [
        { type: 'query_literal', key: "foo", value: "bar" },
      ],
      { service: "RestJson", operation: "ConstantAndVariableQueryString" }),
    new httpbinding.UriSpec<"RestJson", "ConstantQueryString">(
      'GET',
      [
        { type: 'path_literal', value: "ConstantQueryString" },
        { type: 'path' },
      ],
      [
        { type: 'query_literal', key: "foo", value: "bar" },
        { type: 'query_literal', key: "hello", value: "" },
      ],
      { service: "RestJson", operation: "ConstantQueryString" }),
    new httpbinding.UriSpec<"RestJson", "ContentTypeParameters">(
      'POST',
      [
        { type: 'path_literal', value: "ContentTypeParameters" },
      ],
      [
      ],
      { service: "RestJson", operation: "ContentTypeParameters" }),
    new httpbinding.UriSpec<"RestJson", "DatetimeOffsets">(
      'POST',
      [
        { type: 'path_literal', value: "DatetimeOffsets" },
      ],
      [
      ],
      { service: "RestJson", operation: "DatetimeOffsets" }),
    new httpbinding.UriSpec<"RestJson", "DocumentType">(
      'PUT',
      [
        { type: 'path_literal', value: "DocumentType" },
      ],
      [
      ],
      { service: "RestJson", operation: "DocumentType" }),
    new httpbinding.UriSpec<"RestJson", "DocumentTypeAsMapValue">(
      'PUT',
      [
        { type: 'path_literal', value: "DocumentTypeAsMapValue" },
      ],
      [
      ],
      { service: "RestJson", operation: "DocumentTypeAsMapValue" }),
    new httpbinding.UriSpec<"RestJson", "DocumentTypeAsPayload">(
      'PUT',
      [
        { type: 'path_literal', value: "DocumentTypeAsPayload" },
      ],
      [
      ],
      { service: "RestJson", operation: "DocumentTypeAsPayload" }),
    new httpbinding.UriSpec<"RestJson", "DuplexStream">(
      'POST',
      [
        { type: 'path_literal', value: "DuplexStream" },
      ],
      [
      ],
      { service: "RestJson", operation: "DuplexStream" }),
    new httpbinding.UriSpec<"RestJson", "DuplexStreamWithDistinctStreams">(
      'POST',
      [
        { type: 'path_literal', value: "DuplexStreamWithDistinctStreams" },
      ],
      [
      ],
      { service: "RestJson", operation: "DuplexStreamWithDistinctStreams" }),
    new httpbinding.UriSpec<"RestJson", "DuplexStreamWithInitialMessages">(
      'POST',
      [
        { type: 'path_literal', value: "DuplexStreamWithInitialMessages" },
      ],
      [
      ],
      { service: "RestJson", operation: "DuplexStreamWithInitialMessages" }),
    new httpbinding.UriSpec<"RestJson", "EmptyInputAndEmptyOutput">(
      'POST',
      [
        { type: 'path_literal', value: "EmptyInputAndEmptyOutput" },
      ],
      [
      ],
      { service: "RestJson", operation: "EmptyInputAndEmptyOutput" }),
    new httpbinding.UriSpec<"RestJson", "EndpointOperation">(
      'POST',
      [
        { type: 'path_literal', value: "EndpointOperation" },
      ],
      [
      ],
      { service: "RestJson", operation: "EndpointOperation" }),
    new httpbinding.UriSpec<"RestJson", "EndpointWithHostLabelOperation">(
      'POST',
      [
        { type: 'path_literal', value: "EndpointWithHostLabelOperation" },
      ],
      [
      ],
      { service: "RestJson", operation: "EndpointWithHostLabelOperation" }),
    new httpbinding.UriSpec<"RestJson", "FractionalSeconds">(
      'POST',
      [
        { type: 'path_literal', value: "FractionalSeconds" },
      ],
      [
      ],
      { service: "RestJson", operation: "FractionalSeconds" }),
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">(
      'PUT',
      [
        { type: 'path_literal', value: "GreetingWithErrors" },
      ],
      [
      ],
      { service: "RestJson", operation: "GreetingWithErrors" }),
    new httpbinding.UriSpec<"RestJson", "HostWithPathOperation">(
      'GET',
      [
        { type: 'path_literal', value: "HostWithPathOperation" },
      ],
      [
      ],
      { service: "RestJson", operation: "HostWithPathOperation" }),
    new httpbinding.UriSpec<"RestJson", "HttpChecksumRequired">(
      'POST',
      [
        { type: 'path_literal', value: "HttpChecksumRequired" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpChecksumRequired" }),
    new httpbinding.UriSpec<"RestJson", "HttpEmptyPrefixHeaders">(
      'GET',
      [
        { type: 'path_literal', value: "HttpEmptyPrefixHeaders" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpEmptyPrefixHeaders" }),
    new httpbinding.UriSpec<"RestJson", "HttpEnumPayload">(
      'POST',
      [
        { type: 'path_literal', value: "EnumPayload" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpEnumPayload" }),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadTraits">(
      'POST',
      [
        { type: 'path_literal', value: "HttpPayloadTraits" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpPayloadTraits" }),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadTraitsWithMediaType">(
      'POST',
      [
        { type: 'path_literal', value: "HttpPayloadTraitsWithMediaType" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpPayloadTraitsWithMediaType" }),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadWithStructure">(
      'PUT',
      [
        { type: 'path_literal', value: "HttpPayloadWithStructure" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpPayloadWithStructure" }),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadWithUnion">(
      'PUT',
      [
        { type: 'path_literal', value: "HttpPayloadWithUnion" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpPayloadWithUnion" }),
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeaders">(
      'GET',
      [
        { type: 'path_literal', value: "HttpPrefixHeaders" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpPrefixHeaders" }),
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeadersInResponse">(
      'GET',
      [
        { type: 'path_literal', value: "HttpPrefixHeadersResponse" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpPrefixHeadersInResponse" }),
    new httpbinding.UriSpec<"RestJson", "HttpQueryParamsOnlyOperation">(
      'GET',
      [
        { type: 'path_literal', value: "http-query-params-only" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpQueryParamsOnlyOperation" }),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithFloatLabels">(
      'GET',
      [
        { type: 'path_literal', value: "FloatHttpLabels" },
        { type: 'path' },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpRequestWithFloatLabels" }),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithGreedyLabelInPath">(
      'GET',
      [
        { type: 'path_literal', value: "HttpRequestWithGreedyLabelInPath" },
        { type: 'path_literal', value: "foo" },
        { type: 'path' },
        { type: 'path_literal', value: "baz" },
        { type: 'greedy' },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpRequestWithGreedyLabelInPath" }),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithLabels">(
      'GET',
      [
        { type: 'path_literal', value: "HttpRequestWithLabels" },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpRequestWithLabels" }),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithLabelsAndTimestampFormat">(
      'GET',
      [
        { type: 'path_literal', value: "HttpRequestWithLabelsAndTimestampFormat" },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpRequestWithLabelsAndTimestampFormat" }),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithRegexLiteral">(
      'GET',
      [
        { type: 'path_literal', value: "ReDosLiteral" },
        { type: 'path' },
        { type: 'path_literal', value: "(a+)+" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpRequestWithRegexLiteral" }),
    new httpbinding.UriSpec<"RestJson", "HttpResponseCode">(
      'PUT',
      [
        { type: 'path_literal', value: "HttpResponseCode" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpResponseCode" }),
    new httpbinding.UriSpec<"RestJson", "HttpStringPayload">(
      'POST',
      [
        { type: 'path_literal', value: "StringPayload" },
      ],
      [
      ],
      { service: "RestJson", operation: "HttpStringPayload" }),
    new httpbinding.UriSpec<"RestJson", "IgnoreQueryParamsInResponse">(
      'GET',
      [
        { type: 'path_literal', value: "IgnoreQueryParamsInResponse" },
      ],
      [
      ],
      { service: "RestJson", operation: "IgnoreQueryParamsInResponse" }),
    new httpbinding.UriSpec<"RestJson", "InputAndOutputWithHeaders">(
      'POST',
      [
        { type: 'path_literal', value: "InputAndOutputWithHeaders" },
      ],
      [
      ],
      { service: "RestJson", operation: "InputAndOutputWithHeaders" }),
    new httpbinding.UriSpec<"RestJson", "InputStream">(
      'POST',
      [
        { type: 'path_literal', value: "InputStream" },
      ],
      [
      ],
      { service: "RestJson", operation: "InputStream" }),
    new httpbinding.UriSpec<"RestJson", "InputStreamWithInitialRequest">(
      'POST',
      [
        { type: 'path_literal', value: "InputStreamWithInitialRequest" },
      ],
      [
      ],
      { service: "RestJson", operation: "InputStreamWithInitialRequest" }),
    new httpbinding.UriSpec<"RestJson", "JsonBlobs">(
      'POST',
      [
        { type: 'path_literal', value: "JsonBlobs" },
      ],
      [
      ],
      { service: "RestJson", operation: "JsonBlobs" }),
    new httpbinding.UriSpec<"RestJson", "JsonEnums">(
      'PUT',
      [
        { type: 'path_literal', value: "JsonEnums" },
      ],
      [
      ],
      { service: "RestJson", operation: "JsonEnums" }),
    new httpbinding.UriSpec<"RestJson", "JsonIntEnums">(
      'PUT',
      [
        { type: 'path_literal', value: "JsonIntEnums" },
      ],
      [
      ],
      { service: "RestJson", operation: "JsonIntEnums" }),
    new httpbinding.UriSpec<"RestJson", "JsonLists">(
      'PUT',
      [
        { type: 'path_literal', value: "JsonLists" },
      ],
      [
      ],
      { service: "RestJson", operation: "JsonLists" }),
    new httpbinding.UriSpec<"RestJson", "JsonMaps">(
      'POST',
      [
        { type: 'path_literal', value: "JsonMaps" },
      ],
      [
      ],
      { service: "RestJson", operation: "JsonMaps" }),
    new httpbinding.UriSpec<"RestJson", "JsonTimestamps">(
      'POST',
      [
        { type: 'path_literal', value: "JsonTimestamps" },
      ],
      [
      ],
      { service: "RestJson", operation: "JsonTimestamps" }),
    new httpbinding.UriSpec<"RestJson", "JsonUnions">(
      'PUT',
      [
        { type: 'path_literal', value: "JsonUnions" },
      ],
      [
      ],
      { service: "RestJson", operation: "JsonUnions" }),
    new httpbinding.UriSpec<"RestJson", "MalformedAcceptWithBody">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedAcceptWithBody" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedAcceptWithBody" }),
    new httpbinding.UriSpec<"RestJson", "MalformedAcceptWithGenericString">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedAcceptWithGenericString" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedAcceptWithGenericString" }),
    new httpbinding.UriSpec<"RestJson", "MalformedAcceptWithPayload">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedAcceptWithPayload" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedAcceptWithPayload" }),
    new httpbinding.UriSpec<"RestJson", "MalformedBlob">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedBlob" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedBlob" }),
    new httpbinding.UriSpec<"RestJson", "MalformedBoolean">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedBoolean" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedBoolean" }),
    new httpbinding.UriSpec<"RestJson", "MalformedByte">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedByte" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedByte" }),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithBody">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedContentTypeWithBody" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedContentTypeWithBody" }),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithGenericString">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedContentTypeWithGenericString" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedContentTypeWithGenericString" }),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithoutBody">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedContentTypeWithoutBody" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedContentTypeWithoutBody" }),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithoutBodyEmptyInput">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedContentTypeWithoutBodyEmptyInput" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedContentTypeWithoutBodyEmptyInput" }),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithPayload">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedContentTypeWithPayload" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedContentTypeWithPayload" }),
    new httpbinding.UriSpec<"RestJson", "MalformedDouble">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedDouble" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedDouble" }),
    new httpbinding.UriSpec<"RestJson", "MalformedFloat">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedFloat" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedFloat" }),
    new httpbinding.UriSpec<"RestJson", "MalformedInteger">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedInteger" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedInteger" }),
    new httpbinding.UriSpec<"RestJson", "MalformedList">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedList" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedList" }),
    new httpbinding.UriSpec<"RestJson", "MalformedLong">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedLong" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedLong" }),
    new httpbinding.UriSpec<"RestJson", "MalformedMap">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedMap" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedMap" }),
    new httpbinding.UriSpec<"RestJson", "MalformedRequestBody">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedRequestBody" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedRequestBody" }),
    new httpbinding.UriSpec<"RestJson", "MalformedShort">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedShort" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedShort" }),
    new httpbinding.UriSpec<"RestJson", "MalformedString">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedString" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedString" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampBodyDateTime">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampBodyDateTime" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampBodyDateTime" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampBodyDefault">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampBodyDefault" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampBodyDefault" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampBodyHttpDate">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampBodyHttpDate" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampBodyHttpDate" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampHeaderDateTime">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampHeaderDateTime" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampHeaderDateTime" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampHeaderDefault">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampHeaderDefault" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampHeaderDefault" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampHeaderEpoch">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampHeaderEpoch" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampHeaderEpoch" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampPathDefault">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampPathDefault" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampPathDefault" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampPathEpoch">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampPathEpoch" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampPathEpoch" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampPathHttpDate">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampPathHttpDate" },
        { type: 'path' },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedTimestampPathHttpDate" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampQueryDefault">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampQueryDefault" },
      ],
      [
        { type: 'query', key: "timestamp" },
      ],
      { service: "RestJson", operation: "MalformedTimestampQueryDefault" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampQueryEpoch">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampQueryEpoch" },
      ],
      [
        { type: 'query', key: "timestamp" },
      ],
      { service: "RestJson", operation: "MalformedTimestampQueryEpoch" }),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampQueryHttpDate">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedTimestampQueryHttpDate" },
      ],
      [
        { type: 'query', key: "timestamp" },
      ],
      { service: "RestJson", operation: "MalformedTimestampQueryHttpDate" }),
    new httpbinding.UriSpec<"RestJson", "MalformedUnion">(
      'POST',
      [
        { type: 'path_literal', value: "MalformedUnion" },
      ],
      [
      ],
      { service: "RestJson", operation: "MalformedUnion" }),
    new httpbinding.UriSpec<"RestJson", "MediaTypeHeader">(
      'GET',
      [
        { type: 'path_literal', value: "MediaTypeHeader" },
      ],
      [
      ],
      { service: "RestJson", operation: "MediaTypeHeader" }),
    new httpbinding.UriSpec<"RestJson", "NoInputAndNoOutput">(
      'POST',
      [
        { type: 'path_literal', value: "NoInputAndNoOutput" },
      ],
      [
      ],
      { service: "RestJson", operation: "NoInputAndNoOutput" }),
    new httpbinding.UriSpec<"RestJson", "NoInputAndOutput">(
      'POST',
      [
        { type: 'path_literal', value: "NoInputAndOutputOutput" },
      ],
      [
      ],
      { service: "RestJson", operation: "NoInputAndOutput" }),
    new httpbinding.UriSpec<"RestJson", "NullAndEmptyHeadersClient">(
      'GET',
      [
        { type: 'path_literal', value: "NullAndEmptyHeadersClient" },
      ],
      [
      ],
      { service: "RestJson", operation: "NullAndEmptyHeadersClient" }),
    new httpbinding.UriSpec<"RestJson", "NullAndEmptyHeadersServer">(
      'GET',
      [
        { type: 'path_literal', value: "NullAndEmptyHeadersServer" },
      ],
      [
      ],
      { service: "RestJson", operation: "NullAndEmptyHeadersServer" }),
    new httpbinding.UriSpec<"RestJson", "OmitsNullSerializesEmptyString">(
      'GET',
      [
        { type: 'path_literal', value: "OmitsNullSerializesEmptyString" },
      ],
      [
      ],
      { service: "RestJson", operation: "OmitsNullSerializesEmptyString" }),
    new httpbinding.UriSpec<"RestJson", "OmitsSerializingEmptyLists">(
      'POST',
      [
        { type: 'path_literal', value: "OmitsSerializingEmptyLists" },
      ],
      [
      ],
      { service: "RestJson", operation: "OmitsSerializingEmptyLists" }),
    new httpbinding.UriSpec<"RestJson", "OperationWithDefaults">(
      'POST',
      [
        { type: 'path_literal', value: "OperationWithDefaults" },
      ],
      [
      ],
      { service: "RestJson", operation: "OperationWithDefaults" }),
    new httpbinding.UriSpec<"RestJson", "OperationWithNestedStructure">(
      'POST',
      [
        { type: 'path_literal', value: "OperationWithNestedStructure" },
      ],
      [
      ],
      { service: "RestJson", operation: "OperationWithNestedStructure" }),
    new httpbinding.UriSpec<"RestJson", "OutputStream">(
      'POST',
      [
        { type: 'path_literal', value: "OutputStream" },
      ],
      [
      ],
      { service: "RestJson", operation: "OutputStream" }),
    new httpbinding.UriSpec<"RestJson", "OutputStreamWithInitialResponse">(
      'POST',
      [
        { type: 'path_literal', value: "OutputStreamWithInitialResponse" },
      ],
      [
      ],
      { service: "RestJson", operation: "OutputStreamWithInitialResponse" }),
    new httpbinding.UriSpec<"RestJson", "PostPlayerAction">(
      'POST',
      [
        { type: 'path_literal', value: "PostPlayerAction" },
      ],
      [
      ],
      { service: "RestJson", operation: "PostPlayerAction" }),
    new httpbinding.UriSpec<"RestJson", "PostUnionWithJsonName">(
      'POST',
      [
        { type: 'path_literal', value: "PostUnionWithJsonName" },
      ],
      [
      ],
      { service: "RestJson", operation: "PostUnionWithJsonName" }),
    new httpbinding.UriSpec<"RestJson", "PutWithContentEncoding">(
      'POST',
      [
        { type: 'path_literal', value: "requestcompression" },
        { type: 'path_literal', value: "putcontentwithencoding" },
      ],
      [
      ],
      { service: "RestJson", operation: "PutWithContentEncoding" }),
    new httpbinding.UriSpec<"RestJson", "QueryIdempotencyTokenAutoFill">(
      'POST',
      [
        { type: 'path_literal', value: "QueryIdempotencyTokenAutoFill" },
      ],
      [
      ],
      { service: "RestJson", operation: "QueryIdempotencyTokenAutoFill" }),
    new httpbinding.UriSpec<"RestJson", "QueryParamsAsStringListMap">(
      'POST',
      [
        { type: 'path_literal', value: "StringListMap" },
      ],
      [
      ],
      { service: "RestJson", operation: "QueryParamsAsStringListMap" }),
    new httpbinding.UriSpec<"RestJson", "QueryPrecedence">(
      'POST',
      [
        { type: 'path_literal', value: "Precedence" },
      ],
      [
      ],
      { service: "RestJson", operation: "QueryPrecedence" }),
    new httpbinding.UriSpec<"RestJson", "RecursiveShapes">(
      'PUT',
      [
        { type: 'path_literal', value: "RecursiveShapes" },
      ],
      [
      ],
      { service: "RestJson", operation: "RecursiveShapes" }),
    new httpbinding.UriSpec<"RestJson", "ResponseCodeHttpFallback">(
      'GET',
      [
        { type: 'path_literal', value: "responseCodeHttpFallback" },
      ],
      [
      ],
      { service: "RestJson", operation: "ResponseCodeHttpFallback" }),
    new httpbinding.UriSpec<"RestJson", "ResponseCodeRequired">(
      'GET',
      [
        { type: 'path_literal', value: "responseCodeRequired" },
      ],
      [
      ],
      { service: "RestJson", operation: "ResponseCodeRequired" }),
    new httpbinding.UriSpec<"RestJson", "SimpleScalarProperties">(
      'PUT',
      [
        { type: 'path_literal', value: "SimpleScalarProperties" },
      ],
      [
      ],
      { service: "RestJson", operation: "SimpleScalarProperties" }),
    new httpbinding.UriSpec<"RestJson", "SparseJsonLists">(
      'PUT',
      [
        { type: 'path_literal', value: "SparseJsonLists" },
      ],
      [
      ],
      { service: "RestJson", operation: "SparseJsonLists" }),
    new httpbinding.UriSpec<"RestJson", "SparseJsonMaps">(
      'POST',
      [
        { type: 'path_literal', value: "SparseJsonMaps" },
      ],
      [
      ],
      { service: "RestJson", operation: "SparseJsonMaps" }),
    new httpbinding.UriSpec<"RestJson", "StreamingTraits">(
      'POST',
      [
        { type: 'path_literal', value: "StreamingTraits" },
      ],
      [
      ],
      { service: "RestJson", operation: "StreamingTraits" }),
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsRequireLength">(
      'POST',
      [
        { type: 'path_literal', value: "StreamingTraitsRequireLength" },
      ],
      [
      ],
      { service: "RestJson", operation: "StreamingTraitsRequireLength" }),
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsWithMediaType">(
      'POST',
      [
        { type: 'path_literal', value: "StreamingTraitsWithMediaType" },
      ],
      [
      ],
      { service: "RestJson", operation: "StreamingTraitsWithMediaType" }),
    new httpbinding.UriSpec<"RestJson", "TestBodyStructure">(
      'POST',
      [
        { type: 'path_literal', value: "body" },
      ],
      [
      ],
      { service: "RestJson", operation: "TestBodyStructure" }),
    new httpbinding.UriSpec<"RestJson", "TestGetNoInputNoPayload">(
      'GET',
      [
        { type: 'path_literal', value: "no_input_no_payload" },
      ],
      [
      ],
      { service: "RestJson", operation: "TestGetNoInputNoPayload" }),
    new httpbinding.UriSpec<"RestJson", "TestGetNoPayload">(
      'GET',
      [
        { type: 'path_literal', value: "no_payload" },
      ],
      [
      ],
      { service: "RestJson", operation: "TestGetNoPayload" }),
    new httpbinding.UriSpec<"RestJson", "TestPayloadBlob">(
      'POST',
      [
        { type: 'path_literal', value: "blob_payload" },
      ],
      [
      ],
      { service: "RestJson", operation: "TestPayloadBlob" }),
    new httpbinding.UriSpec<"RestJson", "TestPayloadStructure">(
      'POST',
      [
        { type: 'path_literal', value: "payload" },
      ],
      [
      ],
      { service: "RestJson", operation: "TestPayloadStructure" }),
    new httpbinding.UriSpec<"RestJson", "TestPostNoInputNoPayload">(
      'POST',
      [
        { type: 'path_literal', value: "no_input_no_payload" },
      ],
      [
      ],
      { service: "RestJson", operation: "TestPostNoInputNoPayload" }),
    new httpbinding.UriSpec<"RestJson", "TestPostNoPayload">(
      'POST',
      [
        { type: 'path_literal', value: "no_payload" },
      ],
      [
      ],
      { service: "RestJson", operation: "TestPostNoPayload" }),
    new httpbinding.UriSpec<"RestJson", "TimestampFormatHeaders">(
      'POST',
      [
        { type: 'path_literal', value: "TimestampFormatHeaders" },
      ],
      [
      ],
      { service: "RestJson", operation: "TimestampFormatHeaders" }),
    new httpbinding.UriSpec<"RestJson", "UnitInputAndOutput">(
      'POST',
      [
        { type: 'path_literal', value: "UnitInputAndOutput" },
      ],
      [
      ],
      { service: "RestJson", operation: "UnitInputAndOutput" }),
  ]);
  const serFn: (op: RestJsonServiceOperations) => __OperationSerializer<RestJsonService<Context>, RestJsonServiceOperations, __ServiceException> = (op) => {
    switch (op) {
      case "AllQueryStringTypes": return new AllQueryStringTypesSerializer();
      case "ConstantAndVariableQueryString": return new ConstantAndVariableQueryStringSerializer();
      case "ConstantQueryString": return new ConstantQueryStringSerializer();
      case "ContentTypeParameters": return new ContentTypeParametersSerializer();
      case "DatetimeOffsets": return new DatetimeOffsetsSerializer();
      case "DocumentType": return new DocumentTypeSerializer();
      case "DocumentTypeAsMapValue": return new DocumentTypeAsMapValueSerializer();
      case "DocumentTypeAsPayload": return new DocumentTypeAsPayloadSerializer();
      case "DuplexStream": return new DuplexStreamSerializer();
      case "DuplexStreamWithDistinctStreams": return new DuplexStreamWithDistinctStreamsSerializer();
      case "DuplexStreamWithInitialMessages": return new DuplexStreamWithInitialMessagesSerializer();
      case "EmptyInputAndEmptyOutput": return new EmptyInputAndEmptyOutputSerializer();
      case "EndpointOperation": return new EndpointOperationSerializer();
      case "EndpointWithHostLabelOperation": return new EndpointWithHostLabelOperationSerializer();
      case "FractionalSeconds": return new FractionalSecondsSerializer();
      case "GreetingWithErrors": return new GreetingWithErrorsSerializer();
      case "HostWithPathOperation": return new HostWithPathOperationSerializer();
      case "HttpChecksumRequired": return new HttpChecksumRequiredSerializer();
      case "HttpEmptyPrefixHeaders": return new HttpEmptyPrefixHeadersSerializer();
      case "HttpEnumPayload": return new HttpEnumPayloadSerializer();
      case "HttpPayloadTraits": return new HttpPayloadTraitsSerializer();
      case "HttpPayloadTraitsWithMediaType": return new HttpPayloadTraitsWithMediaTypeSerializer();
      case "HttpPayloadWithStructure": return new HttpPayloadWithStructureSerializer();
      case "HttpPayloadWithUnion": return new HttpPayloadWithUnionSerializer();
      case "HttpPrefixHeaders": return new HttpPrefixHeadersSerializer();
      case "HttpPrefixHeadersInResponse": return new HttpPrefixHeadersInResponseSerializer();
      case "HttpQueryParamsOnlyOperation": return new HttpQueryParamsOnlyOperationSerializer();
      case "HttpRequestWithFloatLabels": return new HttpRequestWithFloatLabelsSerializer();
      case "HttpRequestWithGreedyLabelInPath": return new HttpRequestWithGreedyLabelInPathSerializer();
      case "HttpRequestWithLabels": return new HttpRequestWithLabelsSerializer();
      case "HttpRequestWithLabelsAndTimestampFormat": return new HttpRequestWithLabelsAndTimestampFormatSerializer();
      case "HttpRequestWithRegexLiteral": return new HttpRequestWithRegexLiteralSerializer();
      case "HttpResponseCode": return new HttpResponseCodeSerializer();
      case "HttpStringPayload": return new HttpStringPayloadSerializer();
      case "IgnoreQueryParamsInResponse": return new IgnoreQueryParamsInResponseSerializer();
      case "InputAndOutputWithHeaders": return new InputAndOutputWithHeadersSerializer();
      case "InputStream": return new InputStreamSerializer();
      case "InputStreamWithInitialRequest": return new InputStreamWithInitialRequestSerializer();
      case "JsonBlobs": return new JsonBlobsSerializer();
      case "JsonEnums": return new JsonEnumsSerializer();
      case "JsonIntEnums": return new JsonIntEnumsSerializer();
      case "JsonLists": return new JsonListsSerializer();
      case "JsonMaps": return new JsonMapsSerializer();
      case "JsonTimestamps": return new JsonTimestampsSerializer();
      case "JsonUnions": return new JsonUnionsSerializer();
      case "MalformedAcceptWithBody": return new MalformedAcceptWithBodySerializer();
      case "MalformedAcceptWithGenericString": return new MalformedAcceptWithGenericStringSerializer();
      case "MalformedAcceptWithPayload": return new MalformedAcceptWithPayloadSerializer();
      case "MalformedBlob": return new MalformedBlobSerializer();
      case "MalformedBoolean": return new MalformedBooleanSerializer();
      case "MalformedByte": return new MalformedByteSerializer();
      case "MalformedContentTypeWithBody": return new MalformedContentTypeWithBodySerializer();
      case "MalformedContentTypeWithGenericString": return new MalformedContentTypeWithGenericStringSerializer();
      case "MalformedContentTypeWithoutBody": return new MalformedContentTypeWithoutBodySerializer();
      case "MalformedContentTypeWithoutBodyEmptyInput": return new MalformedContentTypeWithoutBodyEmptyInputSerializer();
      case "MalformedContentTypeWithPayload": return new MalformedContentTypeWithPayloadSerializer();
      case "MalformedDouble": return new MalformedDoubleSerializer();
      case "MalformedFloat": return new MalformedFloatSerializer();
      case "MalformedInteger": return new MalformedIntegerSerializer();
      case "MalformedList": return new MalformedListSerializer();
      case "MalformedLong": return new MalformedLongSerializer();
      case "MalformedMap": return new MalformedMapSerializer();
      case "MalformedRequestBody": return new MalformedRequestBodySerializer();
      case "MalformedShort": return new MalformedShortSerializer();
      case "MalformedString": return new MalformedStringSerializer();
      case "MalformedTimestampBodyDateTime": return new MalformedTimestampBodyDateTimeSerializer();
      case "MalformedTimestampBodyDefault": return new MalformedTimestampBodyDefaultSerializer();
      case "MalformedTimestampBodyHttpDate": return new MalformedTimestampBodyHttpDateSerializer();
      case "MalformedTimestampHeaderDateTime": return new MalformedTimestampHeaderDateTimeSerializer();
      case "MalformedTimestampHeaderDefault": return new MalformedTimestampHeaderDefaultSerializer();
      case "MalformedTimestampHeaderEpoch": return new MalformedTimestampHeaderEpochSerializer();
      case "MalformedTimestampPathDefault": return new MalformedTimestampPathDefaultSerializer();
      case "MalformedTimestampPathEpoch": return new MalformedTimestampPathEpochSerializer();
      case "MalformedTimestampPathHttpDate": return new MalformedTimestampPathHttpDateSerializer();
      case "MalformedTimestampQueryDefault": return new MalformedTimestampQueryDefaultSerializer();
      case "MalformedTimestampQueryEpoch": return new MalformedTimestampQueryEpochSerializer();
      case "MalformedTimestampQueryHttpDate": return new MalformedTimestampQueryHttpDateSerializer();
      case "MalformedUnion": return new MalformedUnionSerializer();
      case "MediaTypeHeader": return new MediaTypeHeaderSerializer();
      case "NoInputAndNoOutput": return new NoInputAndNoOutputSerializer();
      case "NoInputAndOutput": return new NoInputAndOutputSerializer();
      case "NullAndEmptyHeadersClient": return new NullAndEmptyHeadersClientSerializer();
      case "NullAndEmptyHeadersServer": return new NullAndEmptyHeadersServerSerializer();
      case "OmitsNullSerializesEmptyString": return new OmitsNullSerializesEmptyStringSerializer();
      case "OmitsSerializingEmptyLists": return new OmitsSerializingEmptyListsSerializer();
      case "OperationWithDefaults": return new OperationWithDefaultsSerializer();
      case "OperationWithNestedStructure": return new OperationWithNestedStructureSerializer();
      case "OutputStream": return new OutputStreamSerializer();
      case "OutputStreamWithInitialResponse": return new OutputStreamWithInitialResponseSerializer();
      case "PostPlayerAction": return new PostPlayerActionSerializer();
      case "PostUnionWithJsonName": return new PostUnionWithJsonNameSerializer();
      case "PutWithContentEncoding": return new PutWithContentEncodingSerializer();
      case "QueryIdempotencyTokenAutoFill": return new QueryIdempotencyTokenAutoFillSerializer();
      case "QueryParamsAsStringListMap": return new QueryParamsAsStringListMapSerializer();
      case "QueryPrecedence": return new QueryPrecedenceSerializer();
      case "RecursiveShapes": return new RecursiveShapesSerializer();
      case "ResponseCodeHttpFallback": return new ResponseCodeHttpFallbackSerializer();
      case "ResponseCodeRequired": return new ResponseCodeRequiredSerializer();
      case "SimpleScalarProperties": return new SimpleScalarPropertiesSerializer();
      case "SparseJsonLists": return new SparseJsonListsSerializer();
      case "SparseJsonMaps": return new SparseJsonMapsSerializer();
      case "StreamingTraits": return new StreamingTraitsSerializer();
      case "StreamingTraitsRequireLength": return new StreamingTraitsRequireLengthSerializer();
      case "StreamingTraitsWithMediaType": return new StreamingTraitsWithMediaTypeSerializer();
      case "TestBodyStructure": return new TestBodyStructureSerializer();
      case "TestGetNoInputNoPayload": return new TestGetNoInputNoPayloadSerializer();
      case "TestGetNoPayload": return new TestGetNoPayloadSerializer();
      case "TestPayloadBlob": return new TestPayloadBlobSerializer();
      case "TestPayloadStructure": return new TestPayloadStructureSerializer();
      case "TestPostNoInputNoPayload": return new TestPostNoInputNoPayloadSerializer();
      case "TestPostNoPayload": return new TestPostNoPayloadSerializer();
      case "TimestampFormatHeaders": return new TimestampFormatHeadersSerializer();
      case "UnitInputAndOutput": return new UnitInputAndOutputSerializer();
    }
  };
  return new RestJsonServiceHandler(service, mux, serFn, serializeFrameworkException, customizer);
}
