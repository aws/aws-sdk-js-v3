// smithy-typescript generated code
import {
  InternalFailureException as __InternalFailureException,
  isFrameworkException as __isFrameworkException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnknownOperationException as __UnknownOperationException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { AllQueryStringTypes, AllQueryStringTypesServerInput } from "./operations/AllQueryStringTypes";
import {
  ConstantAndVariableQueryString,
  ConstantAndVariableQueryStringServerInput,
} from "./operations/ConstantAndVariableQueryString";
import { ConstantQueryString, ConstantQueryStringServerInput } from "./operations/ConstantQueryString";
import { ContentTypeParameters, ContentTypeParametersServerInput } from "./operations/ContentTypeParameters";
import { DatetimeOffsets, DatetimeOffsetsServerInput } from "./operations/DatetimeOffsets";
import { DocumentType, DocumentTypeServerInput } from "./operations/DocumentType";
import { DocumentTypeAsMapValue, DocumentTypeAsMapValueServerInput } from "./operations/DocumentTypeAsMapValue";
import { DocumentTypeAsPayload, DocumentTypeAsPayloadServerInput } from "./operations/DocumentTypeAsPayload";
import { EmptyInputAndEmptyOutput, EmptyInputAndEmptyOutputServerInput } from "./operations/EmptyInputAndEmptyOutput";
import { EndpointOperation, EndpointOperationServerInput } from "./operations/EndpointOperation";
import {
  EndpointWithHostLabelOperation,
  EndpointWithHostLabelOperationServerInput,
} from "./operations/EndpointWithHostLabelOperation";
import { FractionalSeconds, FractionalSecondsServerInput } from "./operations/FractionalSeconds";
import { GreetingWithErrors, GreetingWithErrorsServerInput } from "./operations/GreetingWithErrors";
import { HostWithPathOperation, HostWithPathOperationServerInput } from "./operations/HostWithPathOperation";
import { HttpChecksumRequired, HttpChecksumRequiredServerInput } from "./operations/HttpChecksumRequired";
import { HttpEmptyPrefixHeaders, HttpEmptyPrefixHeadersServerInput } from "./operations/HttpEmptyPrefixHeaders";
import { HttpEnumPayload, HttpEnumPayloadServerInput } from "./operations/HttpEnumPayload";
import { HttpPayloadTraits, HttpPayloadTraitsServerInput } from "./operations/HttpPayloadTraits";
import {
  HttpPayloadTraitsWithMediaType,
  HttpPayloadTraitsWithMediaTypeServerInput,
} from "./operations/HttpPayloadTraitsWithMediaType";
import { HttpPayloadWithStructure, HttpPayloadWithStructureServerInput } from "./operations/HttpPayloadWithStructure";
import { HttpPayloadWithUnion, HttpPayloadWithUnionServerInput } from "./operations/HttpPayloadWithUnion";
import { HttpPrefixHeaders, HttpPrefixHeadersServerInput } from "./operations/HttpPrefixHeaders";
import {
  HttpPrefixHeadersInResponse,
  HttpPrefixHeadersInResponseServerInput,
} from "./operations/HttpPrefixHeadersInResponse";
import {
  HttpRequestWithFloatLabels,
  HttpRequestWithFloatLabelsServerInput,
} from "./operations/HttpRequestWithFloatLabels";
import {
  HttpRequestWithGreedyLabelInPath,
  HttpRequestWithGreedyLabelInPathServerInput,
} from "./operations/HttpRequestWithGreedyLabelInPath";
import { HttpRequestWithLabels, HttpRequestWithLabelsServerInput } from "./operations/HttpRequestWithLabels";
import {
  HttpRequestWithLabelsAndTimestampFormat,
  HttpRequestWithLabelsAndTimestampFormatServerInput,
} from "./operations/HttpRequestWithLabelsAndTimestampFormat";
import {
  HttpRequestWithRegexLiteral,
  HttpRequestWithRegexLiteralServerInput,
} from "./operations/HttpRequestWithRegexLiteral";
import { HttpResponseCode, HttpResponseCodeServerInput } from "./operations/HttpResponseCode";
import { HttpStringPayload, HttpStringPayloadServerInput } from "./operations/HttpStringPayload";
import {
  IgnoreQueryParamsInResponse,
  IgnoreQueryParamsInResponseServerInput,
} from "./operations/IgnoreQueryParamsInResponse";
import {
  InputAndOutputWithHeaders,
  InputAndOutputWithHeadersServerInput,
} from "./operations/InputAndOutputWithHeaders";
import { JsonBlobs, JsonBlobsServerInput } from "./operations/JsonBlobs";
import { JsonEnums, JsonEnumsServerInput } from "./operations/JsonEnums";
import { JsonIntEnums, JsonIntEnumsServerInput } from "./operations/JsonIntEnums";
import { JsonLists, JsonListsServerInput } from "./operations/JsonLists";
import { JsonMaps, JsonMapsServerInput } from "./operations/JsonMaps";
import { JsonTimestamps, JsonTimestampsServerInput } from "./operations/JsonTimestamps";
import { JsonUnions, JsonUnionsServerInput } from "./operations/JsonUnions";
import { MalformedAcceptWithBody, MalformedAcceptWithBodyServerInput } from "./operations/MalformedAcceptWithBody";
import {
  MalformedAcceptWithGenericString,
  MalformedAcceptWithGenericStringServerInput,
} from "./operations/MalformedAcceptWithGenericString";
import {
  MalformedAcceptWithPayload,
  MalformedAcceptWithPayloadServerInput,
} from "./operations/MalformedAcceptWithPayload";
import { MalformedBlob, MalformedBlobServerInput } from "./operations/MalformedBlob";
import { MalformedBoolean, MalformedBooleanServerInput } from "./operations/MalformedBoolean";
import { MalformedByte, MalformedByteServerInput } from "./operations/MalformedByte";
import {
  MalformedContentTypeWithBody,
  MalformedContentTypeWithBodyServerInput,
} from "./operations/MalformedContentTypeWithBody";
import {
  MalformedContentTypeWithGenericString,
  MalformedContentTypeWithGenericStringServerInput,
} from "./operations/MalformedContentTypeWithGenericString";
import {
  MalformedContentTypeWithoutBody,
  MalformedContentTypeWithoutBodyServerInput,
} from "./operations/MalformedContentTypeWithoutBody";
import {
  MalformedContentTypeWithoutBodyEmptyInput,
  MalformedContentTypeWithoutBodyEmptyInputServerInput,
} from "./operations/MalformedContentTypeWithoutBodyEmptyInput";
import {
  MalformedContentTypeWithPayload,
  MalformedContentTypeWithPayloadServerInput,
} from "./operations/MalformedContentTypeWithPayload";
import { MalformedDouble, MalformedDoubleServerInput } from "./operations/MalformedDouble";
import { MalformedFloat, MalformedFloatServerInput } from "./operations/MalformedFloat";
import { MalformedInteger, MalformedIntegerServerInput } from "./operations/MalformedInteger";
import { MalformedList, MalformedListServerInput } from "./operations/MalformedList";
import { MalformedLong, MalformedLongServerInput } from "./operations/MalformedLong";
import { MalformedMap, MalformedMapServerInput } from "./operations/MalformedMap";
import { MalformedRequestBody, MalformedRequestBodyServerInput } from "./operations/MalformedRequestBody";
import { MalformedShort, MalformedShortServerInput } from "./operations/MalformedShort";
import { MalformedString, MalformedStringServerInput } from "./operations/MalformedString";
import {
  MalformedTimestampBodyDateTime,
  MalformedTimestampBodyDateTimeServerInput,
} from "./operations/MalformedTimestampBodyDateTime";
import {
  MalformedTimestampBodyDefault,
  MalformedTimestampBodyDefaultServerInput,
} from "./operations/MalformedTimestampBodyDefault";
import {
  MalformedTimestampBodyHttpDate,
  MalformedTimestampBodyHttpDateServerInput,
} from "./operations/MalformedTimestampBodyHttpDate";
import {
  MalformedTimestampHeaderDateTime,
  MalformedTimestampHeaderDateTimeServerInput,
} from "./operations/MalformedTimestampHeaderDateTime";
import {
  MalformedTimestampHeaderDefault,
  MalformedTimestampHeaderDefaultServerInput,
} from "./operations/MalformedTimestampHeaderDefault";
import {
  MalformedTimestampHeaderEpoch,
  MalformedTimestampHeaderEpochServerInput,
} from "./operations/MalformedTimestampHeaderEpoch";
import {
  MalformedTimestampPathDefault,
  MalformedTimestampPathDefaultServerInput,
} from "./operations/MalformedTimestampPathDefault";
import {
  MalformedTimestampPathEpoch,
  MalformedTimestampPathEpochServerInput,
} from "./operations/MalformedTimestampPathEpoch";
import {
  MalformedTimestampPathHttpDate,
  MalformedTimestampPathHttpDateServerInput,
} from "./operations/MalformedTimestampPathHttpDate";
import {
  MalformedTimestampQueryDefault,
  MalformedTimestampQueryDefaultServerInput,
} from "./operations/MalformedTimestampQueryDefault";
import {
  MalformedTimestampQueryEpoch,
  MalformedTimestampQueryEpochServerInput,
} from "./operations/MalformedTimestampQueryEpoch";
import {
  MalformedTimestampQueryHttpDate,
  MalformedTimestampQueryHttpDateServerInput,
} from "./operations/MalformedTimestampQueryHttpDate";
import { MalformedUnion, MalformedUnionServerInput } from "./operations/MalformedUnion";
import { MediaTypeHeader, MediaTypeHeaderServerInput } from "./operations/MediaTypeHeader";
import { NoInputAndNoOutput, NoInputAndNoOutputServerInput } from "./operations/NoInputAndNoOutput";
import { NoInputAndOutput, NoInputAndOutputServerInput } from "./operations/NoInputAndOutput";
import {
  NullAndEmptyHeadersClient,
  NullAndEmptyHeadersClientServerInput,
} from "./operations/NullAndEmptyHeadersClient";
import {
  NullAndEmptyHeadersServer,
  NullAndEmptyHeadersServerServerInput,
} from "./operations/NullAndEmptyHeadersServer";
import {
  OmitsNullSerializesEmptyString,
  OmitsNullSerializesEmptyStringServerInput,
} from "./operations/OmitsNullSerializesEmptyString";
import {
  OmitsSerializingEmptyLists,
  OmitsSerializingEmptyListsServerInput,
} from "./operations/OmitsSerializingEmptyLists";
import { OperationWithDefaults, OperationWithDefaultsServerInput } from "./operations/OperationWithDefaults";
import {
  OperationWithNestedStructure,
  OperationWithNestedStructureServerInput,
} from "./operations/OperationWithNestedStructure";
import { PostPlayerAction, PostPlayerActionServerInput } from "./operations/PostPlayerAction";
import { PostUnionWithJsonName, PostUnionWithJsonNameServerInput } from "./operations/PostUnionWithJsonName";
import { PutWithContentEncoding, PutWithContentEncodingServerInput } from "./operations/PutWithContentEncoding";
import {
  QueryIdempotencyTokenAutoFill,
  QueryIdempotencyTokenAutoFillServerInput,
} from "./operations/QueryIdempotencyTokenAutoFill";
import {
  QueryParamsAsStringListMap,
  QueryParamsAsStringListMapServerInput,
} from "./operations/QueryParamsAsStringListMap";
import { QueryPrecedence, QueryPrecedenceServerInput } from "./operations/QueryPrecedence";
import { RecursiveShapes, RecursiveShapesServerInput } from "./operations/RecursiveShapes";
import { ResponseCodeHttpFallback, ResponseCodeHttpFallbackServerInput } from "./operations/ResponseCodeHttpFallback";
import { ResponseCodeRequired, ResponseCodeRequiredServerInput } from "./operations/ResponseCodeRequired";
import { SimpleScalarProperties, SimpleScalarPropertiesServerInput } from "./operations/SimpleScalarProperties";
import { SparseJsonLists, SparseJsonListsServerInput } from "./operations/SparseJsonLists";
import { SparseJsonMaps, SparseJsonMapsServerInput } from "./operations/SparseJsonMaps";
import { StreamingTraits, StreamingTraitsServerInput } from "./operations/StreamingTraits";
import {
  StreamingTraitsRequireLength,
  StreamingTraitsRequireLengthServerInput,
} from "./operations/StreamingTraitsRequireLength";
import {
  StreamingTraitsWithMediaType,
  StreamingTraitsWithMediaTypeServerInput,
} from "./operations/StreamingTraitsWithMediaType";
import { TestBodyStructure, TestBodyStructureServerInput } from "./operations/TestBodyStructure";
import { TestGetNoInputNoPayload, TestGetNoInputNoPayloadServerInput } from "./operations/TestGetNoInputNoPayload";
import { TestGetNoPayload, TestGetNoPayloadServerInput } from "./operations/TestGetNoPayload";
import { TestPayloadBlob, TestPayloadBlobServerInput } from "./operations/TestPayloadBlob";
import { TestPayloadStructure, TestPayloadStructureServerInput } from "./operations/TestPayloadStructure";
import { TestPostNoInputNoPayload, TestPostNoInputNoPayloadServerInput } from "./operations/TestPostNoInputNoPayload";
import { TestPostNoPayload, TestPostNoPayloadServerInput } from "./operations/TestPostNoPayload";
import { TimestampFormatHeaders, TimestampFormatHeadersServerInput } from "./operations/TimestampFormatHeaders";
import { UnitInputAndOutput, UnitInputAndOutputServerInput } from "./operations/UnitInputAndOutput";

export type RestJsonServiceOperations =
  | "AllQueryStringTypes"
  | "ConstantAndVariableQueryString"
  | "ConstantQueryString"
  | "ContentTypeParameters"
  | "DatetimeOffsets"
  | "DocumentType"
  | "DocumentTypeAsMapValue"
  | "DocumentTypeAsPayload"
  | "EmptyInputAndEmptyOutput"
  | "EndpointOperation"
  | "EndpointWithHostLabelOperation"
  | "FractionalSeconds"
  | "GreetingWithErrors"
  | "HostWithPathOperation"
  | "HttpChecksumRequired"
  | "HttpEmptyPrefixHeaders"
  | "HttpEnumPayload"
  | "HttpPayloadTraits"
  | "HttpPayloadTraitsWithMediaType"
  | "HttpPayloadWithStructure"
  | "HttpPayloadWithUnion"
  | "HttpPrefixHeaders"
  | "HttpPrefixHeadersInResponse"
  | "HttpRequestWithFloatLabels"
  | "HttpRequestWithGreedyLabelInPath"
  | "HttpRequestWithLabels"
  | "HttpRequestWithLabelsAndTimestampFormat"
  | "HttpRequestWithRegexLiteral"
  | "HttpResponseCode"
  | "HttpStringPayload"
  | "IgnoreQueryParamsInResponse"
  | "InputAndOutputWithHeaders"
  | "JsonBlobs"
  | "JsonEnums"
  | "JsonIntEnums"
  | "JsonLists"
  | "JsonMaps"
  | "JsonTimestamps"
  | "JsonUnions"
  | "MalformedAcceptWithBody"
  | "MalformedAcceptWithGenericString"
  | "MalformedAcceptWithPayload"
  | "MalformedBlob"
  | "MalformedBoolean"
  | "MalformedByte"
  | "MalformedContentTypeWithBody"
  | "MalformedContentTypeWithGenericString"
  | "MalformedContentTypeWithoutBody"
  | "MalformedContentTypeWithoutBodyEmptyInput"
  | "MalformedContentTypeWithPayload"
  | "MalformedDouble"
  | "MalformedFloat"
  | "MalformedInteger"
  | "MalformedList"
  | "MalformedLong"
  | "MalformedMap"
  | "MalformedRequestBody"
  | "MalformedShort"
  | "MalformedString"
  | "MalformedTimestampBodyDateTime"
  | "MalformedTimestampBodyDefault"
  | "MalformedTimestampBodyHttpDate"
  | "MalformedTimestampHeaderDateTime"
  | "MalformedTimestampHeaderDefault"
  | "MalformedTimestampHeaderEpoch"
  | "MalformedTimestampPathDefault"
  | "MalformedTimestampPathEpoch"
  | "MalformedTimestampPathHttpDate"
  | "MalformedTimestampQueryDefault"
  | "MalformedTimestampQueryEpoch"
  | "MalformedTimestampQueryHttpDate"
  | "MalformedUnion"
  | "MediaTypeHeader"
  | "NoInputAndNoOutput"
  | "NoInputAndOutput"
  | "NullAndEmptyHeadersClient"
  | "NullAndEmptyHeadersServer"
  | "OmitsNullSerializesEmptyString"
  | "OmitsSerializingEmptyLists"
  | "OperationWithDefaults"
  | "OperationWithNestedStructure"
  | "PostPlayerAction"
  | "PostUnionWithJsonName"
  | "PutWithContentEncoding"
  | "QueryIdempotencyTokenAutoFill"
  | "QueryParamsAsStringListMap"
  | "QueryPrecedence"
  | "RecursiveShapes"
  | "ResponseCodeHttpFallback"
  | "ResponseCodeRequired"
  | "SimpleScalarProperties"
  | "SparseJsonLists"
  | "SparseJsonMaps"
  | "StreamingTraits"
  | "StreamingTraitsRequireLength"
  | "StreamingTraitsWithMediaType"
  | "TestBodyStructure"
  | "TestGetNoInputNoPayload"
  | "TestGetNoPayload"
  | "TestPayloadBlob"
  | "TestPayloadStructure"
  | "TestPostNoInputNoPayload"
  | "TestPostNoPayload"
  | "TimestampFormatHeaders"
  | "UnitInputAndOutput";
export interface RestJsonService<Context> {
  AllQueryStringTypes: AllQueryStringTypes<Context>;
  ConstantAndVariableQueryString: ConstantAndVariableQueryString<Context>;
  ConstantQueryString: ConstantQueryString<Context>;
  ContentTypeParameters: ContentTypeParameters<Context>;
  DatetimeOffsets: DatetimeOffsets<Context>;
  DocumentType: DocumentType<Context>;
  DocumentTypeAsMapValue: DocumentTypeAsMapValue<Context>;
  DocumentTypeAsPayload: DocumentTypeAsPayload<Context>;
  EmptyInputAndEmptyOutput: EmptyInputAndEmptyOutput<Context>;
  EndpointOperation: EndpointOperation<Context>;
  EndpointWithHostLabelOperation: EndpointWithHostLabelOperation<Context>;
  FractionalSeconds: FractionalSeconds<Context>;
  GreetingWithErrors: GreetingWithErrors<Context>;
  HostWithPathOperation: HostWithPathOperation<Context>;
  HttpChecksumRequired: HttpChecksumRequired<Context>;
  HttpEmptyPrefixHeaders: HttpEmptyPrefixHeaders<Context>;
  HttpEnumPayload: HttpEnumPayload<Context>;
  HttpPayloadTraits: HttpPayloadTraits<Context>;
  HttpPayloadTraitsWithMediaType: HttpPayloadTraitsWithMediaType<Context>;
  HttpPayloadWithStructure: HttpPayloadWithStructure<Context>;
  HttpPayloadWithUnion: HttpPayloadWithUnion<Context>;
  HttpPrefixHeaders: HttpPrefixHeaders<Context>;
  HttpPrefixHeadersInResponse: HttpPrefixHeadersInResponse<Context>;
  HttpRequestWithFloatLabels: HttpRequestWithFloatLabels<Context>;
  HttpRequestWithGreedyLabelInPath: HttpRequestWithGreedyLabelInPath<Context>;
  HttpRequestWithLabels: HttpRequestWithLabels<Context>;
  HttpRequestWithLabelsAndTimestampFormat: HttpRequestWithLabelsAndTimestampFormat<Context>;
  HttpRequestWithRegexLiteral: HttpRequestWithRegexLiteral<Context>;
  HttpResponseCode: HttpResponseCode<Context>;
  HttpStringPayload: HttpStringPayload<Context>;
  IgnoreQueryParamsInResponse: IgnoreQueryParamsInResponse<Context>;
  InputAndOutputWithHeaders: InputAndOutputWithHeaders<Context>;
  JsonBlobs: JsonBlobs<Context>;
  JsonEnums: JsonEnums<Context>;
  JsonIntEnums: JsonIntEnums<Context>;
  JsonLists: JsonLists<Context>;
  JsonMaps: JsonMaps<Context>;
  JsonTimestamps: JsonTimestamps<Context>;
  JsonUnions: JsonUnions<Context>;
  MalformedAcceptWithBody: MalformedAcceptWithBody<Context>;
  MalformedAcceptWithGenericString: MalformedAcceptWithGenericString<Context>;
  MalformedAcceptWithPayload: MalformedAcceptWithPayload<Context>;
  MalformedBlob: MalformedBlob<Context>;
  MalformedBoolean: MalformedBoolean<Context>;
  MalformedByte: MalformedByte<Context>;
  MalformedContentTypeWithBody: MalformedContentTypeWithBody<Context>;
  MalformedContentTypeWithGenericString: MalformedContentTypeWithGenericString<Context>;
  MalformedContentTypeWithoutBody: MalformedContentTypeWithoutBody<Context>;
  MalformedContentTypeWithoutBodyEmptyInput: MalformedContentTypeWithoutBodyEmptyInput<Context>;
  MalformedContentTypeWithPayload: MalformedContentTypeWithPayload<Context>;
  MalformedDouble: MalformedDouble<Context>;
  MalformedFloat: MalformedFloat<Context>;
  MalformedInteger: MalformedInteger<Context>;
  MalformedList: MalformedList<Context>;
  MalformedLong: MalformedLong<Context>;
  MalformedMap: MalformedMap<Context>;
  MalformedRequestBody: MalformedRequestBody<Context>;
  MalformedShort: MalformedShort<Context>;
  MalformedString: MalformedString<Context>;
  MalformedTimestampBodyDateTime: MalformedTimestampBodyDateTime<Context>;
  MalformedTimestampBodyDefault: MalformedTimestampBodyDefault<Context>;
  MalformedTimestampBodyHttpDate: MalformedTimestampBodyHttpDate<Context>;
  MalformedTimestampHeaderDateTime: MalformedTimestampHeaderDateTime<Context>;
  MalformedTimestampHeaderDefault: MalformedTimestampHeaderDefault<Context>;
  MalformedTimestampHeaderEpoch: MalformedTimestampHeaderEpoch<Context>;
  MalformedTimestampPathDefault: MalformedTimestampPathDefault<Context>;
  MalformedTimestampPathEpoch: MalformedTimestampPathEpoch<Context>;
  MalformedTimestampPathHttpDate: MalformedTimestampPathHttpDate<Context>;
  MalformedTimestampQueryDefault: MalformedTimestampQueryDefault<Context>;
  MalformedTimestampQueryEpoch: MalformedTimestampQueryEpoch<Context>;
  MalformedTimestampQueryHttpDate: MalformedTimestampQueryHttpDate<Context>;
  MalformedUnion: MalformedUnion<Context>;
  MediaTypeHeader: MediaTypeHeader<Context>;
  NoInputAndNoOutput: NoInputAndNoOutput<Context>;
  NoInputAndOutput: NoInputAndOutput<Context>;
  NullAndEmptyHeadersClient: NullAndEmptyHeadersClient<Context>;
  NullAndEmptyHeadersServer: NullAndEmptyHeadersServer<Context>;
  OmitsNullSerializesEmptyString: OmitsNullSerializesEmptyString<Context>;
  OmitsSerializingEmptyLists: OmitsSerializingEmptyLists<Context>;
  OperationWithDefaults: OperationWithDefaults<Context>;
  OperationWithNestedStructure: OperationWithNestedStructure<Context>;
  PostPlayerAction: PostPlayerAction<Context>;
  PostUnionWithJsonName: PostUnionWithJsonName<Context>;
  PutWithContentEncoding: PutWithContentEncoding<Context>;
  QueryIdempotencyTokenAutoFill: QueryIdempotencyTokenAutoFill<Context>;
  QueryParamsAsStringListMap: QueryParamsAsStringListMap<Context>;
  QueryPrecedence: QueryPrecedence<Context>;
  RecursiveShapes: RecursiveShapes<Context>;
  ResponseCodeHttpFallback: ResponseCodeHttpFallback<Context>;
  ResponseCodeRequired: ResponseCodeRequired<Context>;
  SimpleScalarProperties: SimpleScalarProperties<Context>;
  SparseJsonLists: SparseJsonLists<Context>;
  SparseJsonMaps: SparseJsonMaps<Context>;
  StreamingTraits: StreamingTraits<Context>;
  StreamingTraitsRequireLength: StreamingTraitsRequireLength<Context>;
  StreamingTraitsWithMediaType: StreamingTraitsWithMediaType<Context>;
  TestBodyStructure: TestBodyStructure<Context>;
  TestGetNoInputNoPayload: TestGetNoInputNoPayload<Context>;
  TestGetNoPayload: TestGetNoPayload<Context>;
  TestPayloadBlob: TestPayloadBlob<Context>;
  TestPayloadStructure: TestPayloadStructure<Context>;
  TestPostNoInputNoPayload: TestPostNoInputNoPayload<Context>;
  TestPostNoPayload: TestPostNoPayload<Context>;
  TimestampFormatHeaders: TimestampFormatHeaders<Context>;
  UnitInputAndOutput: UnitInputAndOutput<Context>;
}
const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true,
};
async function handle<S, O extends keyof S & string, Context>(
  request: __HttpRequest,
  context: Context,
  operationName: O,
  serializer: __OperationSerializer<S, O, __ServiceException>,
  operation: __Operation<__OperationInput<S[O]>, __OperationOutput<S[O]>, Context>,
  serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
  validationFn: (input: __OperationInput<S[O]>) => __ValidationFailure[],
  validationCustomizer: __ValidationCustomizer<O>
): Promise<__HttpResponse> {
  let input;
  try {
    input = await serializer.deserialize(request, {
      endpoint: () => Promise.resolve(request),
      ...serdeContextBase,
    });
  } catch (error: unknown) {
    if (__isFrameworkException(error)) {
      return serializeFrameworkException(error, serdeContextBase);
    }
    return serializeFrameworkException(new __SerializationException(), serdeContextBase);
  }
  try {
    const validationFailures = validationFn(input);
    if (validationFailures && validationFailures.length > 0) {
      const validationException = validationCustomizer({ operation: operationName }, validationFailures);
      if (validationException) {
        return serializer.serializeError(validationException, serdeContextBase);
      }
    }
    const output = await operation(input, context);
    return serializer.serialize(output, serdeContextBase);
  } catch (error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log("Received an unexpected error", error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class RestJsonServiceHandler<Context> implements __ServiceHandler<Context> {
  private readonly service: RestJsonService<Context>;
  private readonly mux: __Mux<"RestJson", RestJsonServiceOperations>;
  private readonly serializerFactory: <T extends RestJsonServiceOperations>(
    operation: T
  ) => __OperationSerializer<RestJsonService<Context>, T, __ServiceException>;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<RestJsonServiceOperations>;
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
    serializerFactory: <T extends RestJsonServiceOperations>(
      op: T
    ) => __OperationSerializer<RestJsonService<Context>, T, __ServiceException>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<RestJsonServiceOperations>
  ) {
    this.service = service;
    this.mux = mux;
    this.serializerFactory = serializerFactory;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      return this.serializeFrameworkException(new __UnknownOperationException(), serdeContextBase);
    }
    switch (target.operation) {
      case "AllQueryStringTypes": {
        return handle(
          request,
          context,
          "AllQueryStringTypes",
          this.serializerFactory("AllQueryStringTypes"),
          this.service.AllQueryStringTypes,
          this.serializeFrameworkException,
          AllQueryStringTypesServerInput.validate,
          this.validationCustomizer
        );
      }
      case "ConstantAndVariableQueryString": {
        return handle(
          request,
          context,
          "ConstantAndVariableQueryString",
          this.serializerFactory("ConstantAndVariableQueryString"),
          this.service.ConstantAndVariableQueryString,
          this.serializeFrameworkException,
          ConstantAndVariableQueryStringServerInput.validate,
          this.validationCustomizer
        );
      }
      case "ConstantQueryString": {
        return handle(
          request,
          context,
          "ConstantQueryString",
          this.serializerFactory("ConstantQueryString"),
          this.service.ConstantQueryString,
          this.serializeFrameworkException,
          ConstantQueryStringServerInput.validate,
          this.validationCustomizer
        );
      }
      case "ContentTypeParameters": {
        return handle(
          request,
          context,
          "ContentTypeParameters",
          this.serializerFactory("ContentTypeParameters"),
          this.service.ContentTypeParameters,
          this.serializeFrameworkException,
          ContentTypeParametersServerInput.validate,
          this.validationCustomizer
        );
      }
      case "DatetimeOffsets": {
        return handle(
          request,
          context,
          "DatetimeOffsets",
          this.serializerFactory("DatetimeOffsets"),
          this.service.DatetimeOffsets,
          this.serializeFrameworkException,
          DatetimeOffsetsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "DocumentType": {
        return handle(
          request,
          context,
          "DocumentType",
          this.serializerFactory("DocumentType"),
          this.service.DocumentType,
          this.serializeFrameworkException,
          DocumentTypeServerInput.validate,
          this.validationCustomizer
        );
      }
      case "DocumentTypeAsMapValue": {
        return handle(
          request,
          context,
          "DocumentTypeAsMapValue",
          this.serializerFactory("DocumentTypeAsMapValue"),
          this.service.DocumentTypeAsMapValue,
          this.serializeFrameworkException,
          DocumentTypeAsMapValueServerInput.validate,
          this.validationCustomizer
        );
      }
      case "DocumentTypeAsPayload": {
        return handle(
          request,
          context,
          "DocumentTypeAsPayload",
          this.serializerFactory("DocumentTypeAsPayload"),
          this.service.DocumentTypeAsPayload,
          this.serializeFrameworkException,
          DocumentTypeAsPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "EmptyInputAndEmptyOutput": {
        return handle(
          request,
          context,
          "EmptyInputAndEmptyOutput",
          this.serializerFactory("EmptyInputAndEmptyOutput"),
          this.service.EmptyInputAndEmptyOutput,
          this.serializeFrameworkException,
          EmptyInputAndEmptyOutputServerInput.validate,
          this.validationCustomizer
        );
      }
      case "EndpointOperation": {
        return handle(
          request,
          context,
          "EndpointOperation",
          this.serializerFactory("EndpointOperation"),
          this.service.EndpointOperation,
          this.serializeFrameworkException,
          EndpointOperationServerInput.validate,
          this.validationCustomizer
        );
      }
      case "EndpointWithHostLabelOperation": {
        return handle(
          request,
          context,
          "EndpointWithHostLabelOperation",
          this.serializerFactory("EndpointWithHostLabelOperation"),
          this.service.EndpointWithHostLabelOperation,
          this.serializeFrameworkException,
          EndpointWithHostLabelOperationServerInput.validate,
          this.validationCustomizer
        );
      }
      case "FractionalSeconds": {
        return handle(
          request,
          context,
          "FractionalSeconds",
          this.serializerFactory("FractionalSeconds"),
          this.service.FractionalSeconds,
          this.serializeFrameworkException,
          FractionalSecondsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "GreetingWithErrors": {
        return handle(
          request,
          context,
          "GreetingWithErrors",
          this.serializerFactory("GreetingWithErrors"),
          this.service.GreetingWithErrors,
          this.serializeFrameworkException,
          GreetingWithErrorsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HostWithPathOperation": {
        return handle(
          request,
          context,
          "HostWithPathOperation",
          this.serializerFactory("HostWithPathOperation"),
          this.service.HostWithPathOperation,
          this.serializeFrameworkException,
          HostWithPathOperationServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpChecksumRequired": {
        return handle(
          request,
          context,
          "HttpChecksumRequired",
          this.serializerFactory("HttpChecksumRequired"),
          this.service.HttpChecksumRequired,
          this.serializeFrameworkException,
          HttpChecksumRequiredServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpEmptyPrefixHeaders": {
        return handle(
          request,
          context,
          "HttpEmptyPrefixHeaders",
          this.serializerFactory("HttpEmptyPrefixHeaders"),
          this.service.HttpEmptyPrefixHeaders,
          this.serializeFrameworkException,
          HttpEmptyPrefixHeadersServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpEnumPayload": {
        return handle(
          request,
          context,
          "HttpEnumPayload",
          this.serializerFactory("HttpEnumPayload"),
          this.service.HttpEnumPayload,
          this.serializeFrameworkException,
          HttpEnumPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpPayloadTraits": {
        return handle(
          request,
          context,
          "HttpPayloadTraits",
          this.serializerFactory("HttpPayloadTraits"),
          this.service.HttpPayloadTraits,
          this.serializeFrameworkException,
          HttpPayloadTraitsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpPayloadTraitsWithMediaType": {
        return handle(
          request,
          context,
          "HttpPayloadTraitsWithMediaType",
          this.serializerFactory("HttpPayloadTraitsWithMediaType"),
          this.service.HttpPayloadTraitsWithMediaType,
          this.serializeFrameworkException,
          HttpPayloadTraitsWithMediaTypeServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpPayloadWithStructure": {
        return handle(
          request,
          context,
          "HttpPayloadWithStructure",
          this.serializerFactory("HttpPayloadWithStructure"),
          this.service.HttpPayloadWithStructure,
          this.serializeFrameworkException,
          HttpPayloadWithStructureServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpPayloadWithUnion": {
        return handle(
          request,
          context,
          "HttpPayloadWithUnion",
          this.serializerFactory("HttpPayloadWithUnion"),
          this.service.HttpPayloadWithUnion,
          this.serializeFrameworkException,
          HttpPayloadWithUnionServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpPrefixHeaders": {
        return handle(
          request,
          context,
          "HttpPrefixHeaders",
          this.serializerFactory("HttpPrefixHeaders"),
          this.service.HttpPrefixHeaders,
          this.serializeFrameworkException,
          HttpPrefixHeadersServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpPrefixHeadersInResponse": {
        return handle(
          request,
          context,
          "HttpPrefixHeadersInResponse",
          this.serializerFactory("HttpPrefixHeadersInResponse"),
          this.service.HttpPrefixHeadersInResponse,
          this.serializeFrameworkException,
          HttpPrefixHeadersInResponseServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpRequestWithFloatLabels": {
        return handle(
          request,
          context,
          "HttpRequestWithFloatLabels",
          this.serializerFactory("HttpRequestWithFloatLabels"),
          this.service.HttpRequestWithFloatLabels,
          this.serializeFrameworkException,
          HttpRequestWithFloatLabelsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpRequestWithGreedyLabelInPath": {
        return handle(
          request,
          context,
          "HttpRequestWithGreedyLabelInPath",
          this.serializerFactory("HttpRequestWithGreedyLabelInPath"),
          this.service.HttpRequestWithGreedyLabelInPath,
          this.serializeFrameworkException,
          HttpRequestWithGreedyLabelInPathServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpRequestWithLabels": {
        return handle(
          request,
          context,
          "HttpRequestWithLabels",
          this.serializerFactory("HttpRequestWithLabels"),
          this.service.HttpRequestWithLabels,
          this.serializeFrameworkException,
          HttpRequestWithLabelsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpRequestWithLabelsAndTimestampFormat": {
        return handle(
          request,
          context,
          "HttpRequestWithLabelsAndTimestampFormat",
          this.serializerFactory("HttpRequestWithLabelsAndTimestampFormat"),
          this.service.HttpRequestWithLabelsAndTimestampFormat,
          this.serializeFrameworkException,
          HttpRequestWithLabelsAndTimestampFormatServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpRequestWithRegexLiteral": {
        return handle(
          request,
          context,
          "HttpRequestWithRegexLiteral",
          this.serializerFactory("HttpRequestWithRegexLiteral"),
          this.service.HttpRequestWithRegexLiteral,
          this.serializeFrameworkException,
          HttpRequestWithRegexLiteralServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpResponseCode": {
        return handle(
          request,
          context,
          "HttpResponseCode",
          this.serializerFactory("HttpResponseCode"),
          this.service.HttpResponseCode,
          this.serializeFrameworkException,
          HttpResponseCodeServerInput.validate,
          this.validationCustomizer
        );
      }
      case "HttpStringPayload": {
        return handle(
          request,
          context,
          "HttpStringPayload",
          this.serializerFactory("HttpStringPayload"),
          this.service.HttpStringPayload,
          this.serializeFrameworkException,
          HttpStringPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "IgnoreQueryParamsInResponse": {
        return handle(
          request,
          context,
          "IgnoreQueryParamsInResponse",
          this.serializerFactory("IgnoreQueryParamsInResponse"),
          this.service.IgnoreQueryParamsInResponse,
          this.serializeFrameworkException,
          IgnoreQueryParamsInResponseServerInput.validate,
          this.validationCustomizer
        );
      }
      case "InputAndOutputWithHeaders": {
        return handle(
          request,
          context,
          "InputAndOutputWithHeaders",
          this.serializerFactory("InputAndOutputWithHeaders"),
          this.service.InputAndOutputWithHeaders,
          this.serializeFrameworkException,
          InputAndOutputWithHeadersServerInput.validate,
          this.validationCustomizer
        );
      }
      case "JsonBlobs": {
        return handle(
          request,
          context,
          "JsonBlobs",
          this.serializerFactory("JsonBlobs"),
          this.service.JsonBlobs,
          this.serializeFrameworkException,
          JsonBlobsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "JsonEnums": {
        return handle(
          request,
          context,
          "JsonEnums",
          this.serializerFactory("JsonEnums"),
          this.service.JsonEnums,
          this.serializeFrameworkException,
          JsonEnumsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "JsonIntEnums": {
        return handle(
          request,
          context,
          "JsonIntEnums",
          this.serializerFactory("JsonIntEnums"),
          this.service.JsonIntEnums,
          this.serializeFrameworkException,
          JsonIntEnumsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "JsonLists": {
        return handle(
          request,
          context,
          "JsonLists",
          this.serializerFactory("JsonLists"),
          this.service.JsonLists,
          this.serializeFrameworkException,
          JsonListsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "JsonMaps": {
        return handle(
          request,
          context,
          "JsonMaps",
          this.serializerFactory("JsonMaps"),
          this.service.JsonMaps,
          this.serializeFrameworkException,
          JsonMapsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "JsonTimestamps": {
        return handle(
          request,
          context,
          "JsonTimestamps",
          this.serializerFactory("JsonTimestamps"),
          this.service.JsonTimestamps,
          this.serializeFrameworkException,
          JsonTimestampsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "JsonUnions": {
        return handle(
          request,
          context,
          "JsonUnions",
          this.serializerFactory("JsonUnions"),
          this.service.JsonUnions,
          this.serializeFrameworkException,
          JsonUnionsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedAcceptWithBody": {
        return handle(
          request,
          context,
          "MalformedAcceptWithBody",
          this.serializerFactory("MalformedAcceptWithBody"),
          this.service.MalformedAcceptWithBody,
          this.serializeFrameworkException,
          MalformedAcceptWithBodyServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedAcceptWithGenericString": {
        return handle(
          request,
          context,
          "MalformedAcceptWithGenericString",
          this.serializerFactory("MalformedAcceptWithGenericString"),
          this.service.MalformedAcceptWithGenericString,
          this.serializeFrameworkException,
          MalformedAcceptWithGenericStringServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedAcceptWithPayload": {
        return handle(
          request,
          context,
          "MalformedAcceptWithPayload",
          this.serializerFactory("MalformedAcceptWithPayload"),
          this.service.MalformedAcceptWithPayload,
          this.serializeFrameworkException,
          MalformedAcceptWithPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedBlob": {
        return handle(
          request,
          context,
          "MalformedBlob",
          this.serializerFactory("MalformedBlob"),
          this.service.MalformedBlob,
          this.serializeFrameworkException,
          MalformedBlobServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedBoolean": {
        return handle(
          request,
          context,
          "MalformedBoolean",
          this.serializerFactory("MalformedBoolean"),
          this.service.MalformedBoolean,
          this.serializeFrameworkException,
          MalformedBooleanServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedByte": {
        return handle(
          request,
          context,
          "MalformedByte",
          this.serializerFactory("MalformedByte"),
          this.service.MalformedByte,
          this.serializeFrameworkException,
          MalformedByteServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedContentTypeWithBody": {
        return handle(
          request,
          context,
          "MalformedContentTypeWithBody",
          this.serializerFactory("MalformedContentTypeWithBody"),
          this.service.MalformedContentTypeWithBody,
          this.serializeFrameworkException,
          MalformedContentTypeWithBodyServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedContentTypeWithGenericString": {
        return handle(
          request,
          context,
          "MalformedContentTypeWithGenericString",
          this.serializerFactory("MalformedContentTypeWithGenericString"),
          this.service.MalformedContentTypeWithGenericString,
          this.serializeFrameworkException,
          MalformedContentTypeWithGenericStringServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedContentTypeWithoutBody": {
        return handle(
          request,
          context,
          "MalformedContentTypeWithoutBody",
          this.serializerFactory("MalformedContentTypeWithoutBody"),
          this.service.MalformedContentTypeWithoutBody,
          this.serializeFrameworkException,
          MalformedContentTypeWithoutBodyServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedContentTypeWithoutBodyEmptyInput": {
        return handle(
          request,
          context,
          "MalformedContentTypeWithoutBodyEmptyInput",
          this.serializerFactory("MalformedContentTypeWithoutBodyEmptyInput"),
          this.service.MalformedContentTypeWithoutBodyEmptyInput,
          this.serializeFrameworkException,
          MalformedContentTypeWithoutBodyEmptyInputServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedContentTypeWithPayload": {
        return handle(
          request,
          context,
          "MalformedContentTypeWithPayload",
          this.serializerFactory("MalformedContentTypeWithPayload"),
          this.service.MalformedContentTypeWithPayload,
          this.serializeFrameworkException,
          MalformedContentTypeWithPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedDouble": {
        return handle(
          request,
          context,
          "MalformedDouble",
          this.serializerFactory("MalformedDouble"),
          this.service.MalformedDouble,
          this.serializeFrameworkException,
          MalformedDoubleServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedFloat": {
        return handle(
          request,
          context,
          "MalformedFloat",
          this.serializerFactory("MalformedFloat"),
          this.service.MalformedFloat,
          this.serializeFrameworkException,
          MalformedFloatServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedInteger": {
        return handle(
          request,
          context,
          "MalformedInteger",
          this.serializerFactory("MalformedInteger"),
          this.service.MalformedInteger,
          this.serializeFrameworkException,
          MalformedIntegerServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedList": {
        return handle(
          request,
          context,
          "MalformedList",
          this.serializerFactory("MalformedList"),
          this.service.MalformedList,
          this.serializeFrameworkException,
          MalformedListServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedLong": {
        return handle(
          request,
          context,
          "MalformedLong",
          this.serializerFactory("MalformedLong"),
          this.service.MalformedLong,
          this.serializeFrameworkException,
          MalformedLongServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedMap": {
        return handle(
          request,
          context,
          "MalformedMap",
          this.serializerFactory("MalformedMap"),
          this.service.MalformedMap,
          this.serializeFrameworkException,
          MalformedMapServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedRequestBody": {
        return handle(
          request,
          context,
          "MalformedRequestBody",
          this.serializerFactory("MalformedRequestBody"),
          this.service.MalformedRequestBody,
          this.serializeFrameworkException,
          MalformedRequestBodyServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedShort": {
        return handle(
          request,
          context,
          "MalformedShort",
          this.serializerFactory("MalformedShort"),
          this.service.MalformedShort,
          this.serializeFrameworkException,
          MalformedShortServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedString": {
        return handle(
          request,
          context,
          "MalformedString",
          this.serializerFactory("MalformedString"),
          this.service.MalformedString,
          this.serializeFrameworkException,
          MalformedStringServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampBodyDateTime": {
        return handle(
          request,
          context,
          "MalformedTimestampBodyDateTime",
          this.serializerFactory("MalformedTimestampBodyDateTime"),
          this.service.MalformedTimestampBodyDateTime,
          this.serializeFrameworkException,
          MalformedTimestampBodyDateTimeServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampBodyDefault": {
        return handle(
          request,
          context,
          "MalformedTimestampBodyDefault",
          this.serializerFactory("MalformedTimestampBodyDefault"),
          this.service.MalformedTimestampBodyDefault,
          this.serializeFrameworkException,
          MalformedTimestampBodyDefaultServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampBodyHttpDate": {
        return handle(
          request,
          context,
          "MalformedTimestampBodyHttpDate",
          this.serializerFactory("MalformedTimestampBodyHttpDate"),
          this.service.MalformedTimestampBodyHttpDate,
          this.serializeFrameworkException,
          MalformedTimestampBodyHttpDateServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampHeaderDateTime": {
        return handle(
          request,
          context,
          "MalformedTimestampHeaderDateTime",
          this.serializerFactory("MalformedTimestampHeaderDateTime"),
          this.service.MalformedTimestampHeaderDateTime,
          this.serializeFrameworkException,
          MalformedTimestampHeaderDateTimeServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampHeaderDefault": {
        return handle(
          request,
          context,
          "MalformedTimestampHeaderDefault",
          this.serializerFactory("MalformedTimestampHeaderDefault"),
          this.service.MalformedTimestampHeaderDefault,
          this.serializeFrameworkException,
          MalformedTimestampHeaderDefaultServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampHeaderEpoch": {
        return handle(
          request,
          context,
          "MalformedTimestampHeaderEpoch",
          this.serializerFactory("MalformedTimestampHeaderEpoch"),
          this.service.MalformedTimestampHeaderEpoch,
          this.serializeFrameworkException,
          MalformedTimestampHeaderEpochServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampPathDefault": {
        return handle(
          request,
          context,
          "MalformedTimestampPathDefault",
          this.serializerFactory("MalformedTimestampPathDefault"),
          this.service.MalformedTimestampPathDefault,
          this.serializeFrameworkException,
          MalformedTimestampPathDefaultServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampPathEpoch": {
        return handle(
          request,
          context,
          "MalformedTimestampPathEpoch",
          this.serializerFactory("MalformedTimestampPathEpoch"),
          this.service.MalformedTimestampPathEpoch,
          this.serializeFrameworkException,
          MalformedTimestampPathEpochServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampPathHttpDate": {
        return handle(
          request,
          context,
          "MalformedTimestampPathHttpDate",
          this.serializerFactory("MalformedTimestampPathHttpDate"),
          this.service.MalformedTimestampPathHttpDate,
          this.serializeFrameworkException,
          MalformedTimestampPathHttpDateServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampQueryDefault": {
        return handle(
          request,
          context,
          "MalformedTimestampQueryDefault",
          this.serializerFactory("MalformedTimestampQueryDefault"),
          this.service.MalformedTimestampQueryDefault,
          this.serializeFrameworkException,
          MalformedTimestampQueryDefaultServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampQueryEpoch": {
        return handle(
          request,
          context,
          "MalformedTimestampQueryEpoch",
          this.serializerFactory("MalformedTimestampQueryEpoch"),
          this.service.MalformedTimestampQueryEpoch,
          this.serializeFrameworkException,
          MalformedTimestampQueryEpochServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedTimestampQueryHttpDate": {
        return handle(
          request,
          context,
          "MalformedTimestampQueryHttpDate",
          this.serializerFactory("MalformedTimestampQueryHttpDate"),
          this.service.MalformedTimestampQueryHttpDate,
          this.serializeFrameworkException,
          MalformedTimestampQueryHttpDateServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedUnion": {
        return handle(
          request,
          context,
          "MalformedUnion",
          this.serializerFactory("MalformedUnion"),
          this.service.MalformedUnion,
          this.serializeFrameworkException,
          MalformedUnionServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MediaTypeHeader": {
        return handle(
          request,
          context,
          "MediaTypeHeader",
          this.serializerFactory("MediaTypeHeader"),
          this.service.MediaTypeHeader,
          this.serializeFrameworkException,
          MediaTypeHeaderServerInput.validate,
          this.validationCustomizer
        );
      }
      case "NoInputAndNoOutput": {
        return handle(
          request,
          context,
          "NoInputAndNoOutput",
          this.serializerFactory("NoInputAndNoOutput"),
          this.service.NoInputAndNoOutput,
          this.serializeFrameworkException,
          NoInputAndNoOutputServerInput.validate,
          this.validationCustomizer
        );
      }
      case "NoInputAndOutput": {
        return handle(
          request,
          context,
          "NoInputAndOutput",
          this.serializerFactory("NoInputAndOutput"),
          this.service.NoInputAndOutput,
          this.serializeFrameworkException,
          NoInputAndOutputServerInput.validate,
          this.validationCustomizer
        );
      }
      case "NullAndEmptyHeadersClient": {
        return handle(
          request,
          context,
          "NullAndEmptyHeadersClient",
          this.serializerFactory("NullAndEmptyHeadersClient"),
          this.service.NullAndEmptyHeadersClient,
          this.serializeFrameworkException,
          NullAndEmptyHeadersClientServerInput.validate,
          this.validationCustomizer
        );
      }
      case "NullAndEmptyHeadersServer": {
        return handle(
          request,
          context,
          "NullAndEmptyHeadersServer",
          this.serializerFactory("NullAndEmptyHeadersServer"),
          this.service.NullAndEmptyHeadersServer,
          this.serializeFrameworkException,
          NullAndEmptyHeadersServerServerInput.validate,
          this.validationCustomizer
        );
      }
      case "OmitsNullSerializesEmptyString": {
        return handle(
          request,
          context,
          "OmitsNullSerializesEmptyString",
          this.serializerFactory("OmitsNullSerializesEmptyString"),
          this.service.OmitsNullSerializesEmptyString,
          this.serializeFrameworkException,
          OmitsNullSerializesEmptyStringServerInput.validate,
          this.validationCustomizer
        );
      }
      case "OmitsSerializingEmptyLists": {
        return handle(
          request,
          context,
          "OmitsSerializingEmptyLists",
          this.serializerFactory("OmitsSerializingEmptyLists"),
          this.service.OmitsSerializingEmptyLists,
          this.serializeFrameworkException,
          OmitsSerializingEmptyListsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "OperationWithDefaults": {
        return handle(
          request,
          context,
          "OperationWithDefaults",
          this.serializerFactory("OperationWithDefaults"),
          this.service.OperationWithDefaults,
          this.serializeFrameworkException,
          OperationWithDefaultsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "OperationWithNestedStructure": {
        return handle(
          request,
          context,
          "OperationWithNestedStructure",
          this.serializerFactory("OperationWithNestedStructure"),
          this.service.OperationWithNestedStructure,
          this.serializeFrameworkException,
          OperationWithNestedStructureServerInput.validate,
          this.validationCustomizer
        );
      }
      case "PostPlayerAction": {
        return handle(
          request,
          context,
          "PostPlayerAction",
          this.serializerFactory("PostPlayerAction"),
          this.service.PostPlayerAction,
          this.serializeFrameworkException,
          PostPlayerActionServerInput.validate,
          this.validationCustomizer
        );
      }
      case "PostUnionWithJsonName": {
        return handle(
          request,
          context,
          "PostUnionWithJsonName",
          this.serializerFactory("PostUnionWithJsonName"),
          this.service.PostUnionWithJsonName,
          this.serializeFrameworkException,
          PostUnionWithJsonNameServerInput.validate,
          this.validationCustomizer
        );
      }
      case "PutWithContentEncoding": {
        return handle(
          request,
          context,
          "PutWithContentEncoding",
          this.serializerFactory("PutWithContentEncoding"),
          this.service.PutWithContentEncoding,
          this.serializeFrameworkException,
          PutWithContentEncodingServerInput.validate,
          this.validationCustomizer
        );
      }
      case "QueryIdempotencyTokenAutoFill": {
        return handle(
          request,
          context,
          "QueryIdempotencyTokenAutoFill",
          this.serializerFactory("QueryIdempotencyTokenAutoFill"),
          this.service.QueryIdempotencyTokenAutoFill,
          this.serializeFrameworkException,
          QueryIdempotencyTokenAutoFillServerInput.validate,
          this.validationCustomizer
        );
      }
      case "QueryParamsAsStringListMap": {
        return handle(
          request,
          context,
          "QueryParamsAsStringListMap",
          this.serializerFactory("QueryParamsAsStringListMap"),
          this.service.QueryParamsAsStringListMap,
          this.serializeFrameworkException,
          QueryParamsAsStringListMapServerInput.validate,
          this.validationCustomizer
        );
      }
      case "QueryPrecedence": {
        return handle(
          request,
          context,
          "QueryPrecedence",
          this.serializerFactory("QueryPrecedence"),
          this.service.QueryPrecedence,
          this.serializeFrameworkException,
          QueryPrecedenceServerInput.validate,
          this.validationCustomizer
        );
      }
      case "RecursiveShapes": {
        return handle(
          request,
          context,
          "RecursiveShapes",
          this.serializerFactory("RecursiveShapes"),
          this.service.RecursiveShapes,
          this.serializeFrameworkException,
          RecursiveShapesServerInput.validate,
          this.validationCustomizer
        );
      }
      case "ResponseCodeHttpFallback": {
        return handle(
          request,
          context,
          "ResponseCodeHttpFallback",
          this.serializerFactory("ResponseCodeHttpFallback"),
          this.service.ResponseCodeHttpFallback,
          this.serializeFrameworkException,
          ResponseCodeHttpFallbackServerInput.validate,
          this.validationCustomizer
        );
      }
      case "ResponseCodeRequired": {
        return handle(
          request,
          context,
          "ResponseCodeRequired",
          this.serializerFactory("ResponseCodeRequired"),
          this.service.ResponseCodeRequired,
          this.serializeFrameworkException,
          ResponseCodeRequiredServerInput.validate,
          this.validationCustomizer
        );
      }
      case "SimpleScalarProperties": {
        return handle(
          request,
          context,
          "SimpleScalarProperties",
          this.serializerFactory("SimpleScalarProperties"),
          this.service.SimpleScalarProperties,
          this.serializeFrameworkException,
          SimpleScalarPropertiesServerInput.validate,
          this.validationCustomizer
        );
      }
      case "SparseJsonLists": {
        return handle(
          request,
          context,
          "SparseJsonLists",
          this.serializerFactory("SparseJsonLists"),
          this.service.SparseJsonLists,
          this.serializeFrameworkException,
          SparseJsonListsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "SparseJsonMaps": {
        return handle(
          request,
          context,
          "SparseJsonMaps",
          this.serializerFactory("SparseJsonMaps"),
          this.service.SparseJsonMaps,
          this.serializeFrameworkException,
          SparseJsonMapsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "StreamingTraits": {
        return handle(
          request,
          context,
          "StreamingTraits",
          this.serializerFactory("StreamingTraits"),
          this.service.StreamingTraits,
          this.serializeFrameworkException,
          StreamingTraitsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "StreamingTraitsRequireLength": {
        return handle(
          request,
          context,
          "StreamingTraitsRequireLength",
          this.serializerFactory("StreamingTraitsRequireLength"),
          this.service.StreamingTraitsRequireLength,
          this.serializeFrameworkException,
          StreamingTraitsRequireLengthServerInput.validate,
          this.validationCustomizer
        );
      }
      case "StreamingTraitsWithMediaType": {
        return handle(
          request,
          context,
          "StreamingTraitsWithMediaType",
          this.serializerFactory("StreamingTraitsWithMediaType"),
          this.service.StreamingTraitsWithMediaType,
          this.serializeFrameworkException,
          StreamingTraitsWithMediaTypeServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TestBodyStructure": {
        return handle(
          request,
          context,
          "TestBodyStructure",
          this.serializerFactory("TestBodyStructure"),
          this.service.TestBodyStructure,
          this.serializeFrameworkException,
          TestBodyStructureServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TestGetNoInputNoPayload": {
        return handle(
          request,
          context,
          "TestGetNoInputNoPayload",
          this.serializerFactory("TestGetNoInputNoPayload"),
          this.service.TestGetNoInputNoPayload,
          this.serializeFrameworkException,
          TestGetNoInputNoPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TestGetNoPayload": {
        return handle(
          request,
          context,
          "TestGetNoPayload",
          this.serializerFactory("TestGetNoPayload"),
          this.service.TestGetNoPayload,
          this.serializeFrameworkException,
          TestGetNoPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TestPayloadBlob": {
        return handle(
          request,
          context,
          "TestPayloadBlob",
          this.serializerFactory("TestPayloadBlob"),
          this.service.TestPayloadBlob,
          this.serializeFrameworkException,
          TestPayloadBlobServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TestPayloadStructure": {
        return handle(
          request,
          context,
          "TestPayloadStructure",
          this.serializerFactory("TestPayloadStructure"),
          this.service.TestPayloadStructure,
          this.serializeFrameworkException,
          TestPayloadStructureServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TestPostNoInputNoPayload": {
        return handle(
          request,
          context,
          "TestPostNoInputNoPayload",
          this.serializerFactory("TestPostNoInputNoPayload"),
          this.service.TestPostNoInputNoPayload,
          this.serializeFrameworkException,
          TestPostNoInputNoPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TestPostNoPayload": {
        return handle(
          request,
          context,
          "TestPostNoPayload",
          this.serializerFactory("TestPostNoPayload"),
          this.service.TestPostNoPayload,
          this.serializeFrameworkException,
          TestPostNoPayloadServerInput.validate,
          this.validationCustomizer
        );
      }
      case "TimestampFormatHeaders": {
        return handle(
          request,
          context,
          "TimestampFormatHeaders",
          this.serializerFactory("TimestampFormatHeaders"),
          this.service.TimestampFormatHeaders,
          this.serializeFrameworkException,
          TimestampFormatHeadersServerInput.validate,
          this.validationCustomizer
        );
      }
      case "UnitInputAndOutput": {
        return handle(
          request,
          context,
          "UnitInputAndOutput",
          this.serializerFactory("UnitInputAndOutput"),
          this.service.UnitInputAndOutput,
          this.serializeFrameworkException,
          UnitInputAndOutputServerInput.validate,
          this.validationCustomizer
        );
      }
    }
  }
}
