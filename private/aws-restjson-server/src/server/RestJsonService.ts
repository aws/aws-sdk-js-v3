// smithy-typescript generated code
import {
  httpbinding,
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
import { DatetimeOffsets, DatetimeOffsetsSerializer, DatetimeOffsetsServerInput } from "./operations/DatetimeOffsets";
import { DocumentType, DocumentTypeSerializer, DocumentTypeServerInput } from "./operations/DocumentType";
import {
  DocumentTypeAsPayload,
  DocumentTypeAsPayloadSerializer,
  DocumentTypeAsPayloadServerInput,
} from "./operations/DocumentTypeAsPayload";
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
  SimpleScalarProperties,
  SimpleScalarPropertiesSerializer,
  SimpleScalarPropertiesServerInput,
} from "./operations/SimpleScalarProperties";
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
import { TestNoPayload, TestNoPayloadSerializer, TestNoPayloadServerInput } from "./operations/TestNoPayload";
import { TestPayloadBlob, TestPayloadBlobSerializer, TestPayloadBlobServerInput } from "./operations/TestPayloadBlob";
import {
  TestPayloadStructure,
  TestPayloadStructureSerializer,
  TestPayloadStructureServerInput,
} from "./operations/TestPayloadStructure";
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

export type RestJsonServiceOperations =
  | "AllQueryStringTypes"
  | "ConstantAndVariableQueryString"
  | "ConstantQueryString"
  | "DatetimeOffsets"
  | "DocumentType"
  | "DocumentTypeAsPayload"
  | "EmptyInputAndEmptyOutput"
  | "EndpointOperation"
  | "EndpointWithHostLabelOperation"
  | "FractionalSeconds"
  | "GreetingWithErrors"
  | "HostWithPathOperation"
  | "HttpChecksumRequired"
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
  | "PostPlayerAction"
  | "PostUnionWithJsonName"
  | "PutWithContentEncoding"
  | "QueryIdempotencyTokenAutoFill"
  | "QueryParamsAsStringListMap"
  | "QueryPrecedence"
  | "RecursiveShapes"
  | "SimpleScalarProperties"
  | "StreamingTraits"
  | "StreamingTraitsRequireLength"
  | "StreamingTraitsWithMediaType"
  | "TestBodyStructure"
  | "TestNoPayload"
  | "TestPayloadBlob"
  | "TestPayloadStructure"
  | "TimestampFormatHeaders"
  | "UnitInputAndOutput";
export interface RestJsonService<Context> {
  AllQueryStringTypes: AllQueryStringTypes<Context>;
  ConstantAndVariableQueryString: ConstantAndVariableQueryString<Context>;
  ConstantQueryString: ConstantQueryString<Context>;
  DatetimeOffsets: DatetimeOffsets<Context>;
  DocumentType: DocumentType<Context>;
  DocumentTypeAsPayload: DocumentTypeAsPayload<Context>;
  EmptyInputAndEmptyOutput: EmptyInputAndEmptyOutput<Context>;
  EndpointOperation: EndpointOperation<Context>;
  EndpointWithHostLabelOperation: EndpointWithHostLabelOperation<Context>;
  FractionalSeconds: FractionalSeconds<Context>;
  GreetingWithErrors: GreetingWithErrors<Context>;
  HostWithPathOperation: HostWithPathOperation<Context>;
  HttpChecksumRequired: HttpChecksumRequired<Context>;
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
  PostPlayerAction: PostPlayerAction<Context>;
  PostUnionWithJsonName: PostUnionWithJsonName<Context>;
  PutWithContentEncoding: PutWithContentEncoding<Context>;
  QueryIdempotencyTokenAutoFill: QueryIdempotencyTokenAutoFill<Context>;
  QueryParamsAsStringListMap: QueryParamsAsStringListMap<Context>;
  QueryPrecedence: QueryPrecedence<Context>;
  RecursiveShapes: RecursiveShapes<Context>;
  SimpleScalarProperties: SimpleScalarProperties<Context>;
  StreamingTraits: StreamingTraits<Context>;
  StreamingTraitsRequireLength: StreamingTraitsRequireLength<Context>;
  StreamingTraitsWithMediaType: StreamingTraitsWithMediaType<Context>;
  TestBodyStructure: TestBodyStructure<Context>;
  TestNoPayload: TestNoPayload<Context>;
  TestPayloadBlob: TestPayloadBlob<Context>;
  TestPayloadStructure: TestPayloadStructure<Context>;
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
      case "TestNoPayload": {
        return handle(
          request,
          context,
          "TestNoPayload",
          this.serializerFactory("TestNoPayload"),
          this.service.TestNoPayload,
          this.serializeFrameworkException,
          TestNoPayloadServerInput.validate,
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

export const getRestJsonServiceHandler = <Context>(
  service: RestJsonService<Context>,
  customizer: __ValidationCustomizer<RestJsonServiceOperations>
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService<Context>>([
    new httpbinding.UriSpec<"RestJson", "AllQueryStringTypes">(
      "GET",
      [{ type: "path_literal", value: "AllQueryStringTypesInput" }],
      [],
      { service: "RestJson", operation: "AllQueryStringTypes" }
    ),
    new httpbinding.UriSpec<"RestJson", "ConstantAndVariableQueryString">(
      "GET",
      [{ type: "path_literal", value: "ConstantAndVariableQueryString" }],
      [{ type: "query_literal", key: "foo", value: "bar" }],
      { service: "RestJson", operation: "ConstantAndVariableQueryString" }
    ),
    new httpbinding.UriSpec<"RestJson", "ConstantQueryString">(
      "GET",
      [{ type: "path_literal", value: "ConstantQueryString" }, { type: "path" }],
      [
        { type: "query_literal", key: "foo", value: "bar" },
        { type: "query_literal", key: "hello", value: "" },
      ],
      { service: "RestJson", operation: "ConstantQueryString" }
    ),
    new httpbinding.UriSpec<"RestJson", "DatetimeOffsets">(
      "POST",
      [{ type: "path_literal", value: "DatetimeOffsets" }],
      [],
      { service: "RestJson", operation: "DatetimeOffsets" }
    ),
    new httpbinding.UriSpec<"RestJson", "DocumentType">("PUT", [{ type: "path_literal", value: "DocumentType" }], [], {
      service: "RestJson",
      operation: "DocumentType",
    }),
    new httpbinding.UriSpec<"RestJson", "DocumentTypeAsPayload">(
      "PUT",
      [{ type: "path_literal", value: "DocumentTypeAsPayload" }],
      [],
      { service: "RestJson", operation: "DocumentTypeAsPayload" }
    ),
    new httpbinding.UriSpec<"RestJson", "EmptyInputAndEmptyOutput">(
      "POST",
      [{ type: "path_literal", value: "EmptyInputAndEmptyOutput" }],
      [],
      { service: "RestJson", operation: "EmptyInputAndEmptyOutput" }
    ),
    new httpbinding.UriSpec<"RestJson", "EndpointOperation">(
      "POST",
      [{ type: "path_literal", value: "EndpointOperation" }],
      [],
      { service: "RestJson", operation: "EndpointOperation" }
    ),
    new httpbinding.UriSpec<"RestJson", "EndpointWithHostLabelOperation">(
      "POST",
      [{ type: "path_literal", value: "EndpointWithHostLabelOperation" }],
      [],
      { service: "RestJson", operation: "EndpointWithHostLabelOperation" }
    ),
    new httpbinding.UriSpec<"RestJson", "FractionalSeconds">(
      "POST",
      [{ type: "path_literal", value: "FractionalSeconds" }],
      [],
      { service: "RestJson", operation: "FractionalSeconds" }
    ),
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">(
      "PUT",
      [{ type: "path_literal", value: "GreetingWithErrors" }],
      [],
      { service: "RestJson", operation: "GreetingWithErrors" }
    ),
    new httpbinding.UriSpec<"RestJson", "HostWithPathOperation">(
      "GET",
      [{ type: "path_literal", value: "HostWithPathOperation" }],
      [],
      { service: "RestJson", operation: "HostWithPathOperation" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpChecksumRequired">(
      "POST",
      [{ type: "path_literal", value: "HttpChecksumRequired" }],
      [],
      { service: "RestJson", operation: "HttpChecksumRequired" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpEnumPayload">(
      "POST",
      [{ type: "path_literal", value: "EnumPayload" }],
      [],
      { service: "RestJson", operation: "HttpEnumPayload" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadTraits">(
      "POST",
      [{ type: "path_literal", value: "HttpPayloadTraits" }],
      [],
      { service: "RestJson", operation: "HttpPayloadTraits" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadTraitsWithMediaType">(
      "POST",
      [{ type: "path_literal", value: "HttpPayloadTraitsWithMediaType" }],
      [],
      { service: "RestJson", operation: "HttpPayloadTraitsWithMediaType" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadWithStructure">(
      "PUT",
      [{ type: "path_literal", value: "HttpPayloadWithStructure" }],
      [],
      { service: "RestJson", operation: "HttpPayloadWithStructure" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpPayloadWithUnion">(
      "PUT",
      [{ type: "path_literal", value: "HttpPayloadWithUnion" }],
      [],
      { service: "RestJson", operation: "HttpPayloadWithUnion" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeaders">(
      "GET",
      [{ type: "path_literal", value: "HttpPrefixHeaders" }],
      [],
      { service: "RestJson", operation: "HttpPrefixHeaders" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeadersInResponse">(
      "GET",
      [{ type: "path_literal", value: "HttpPrefixHeadersResponse" }],
      [],
      { service: "RestJson", operation: "HttpPrefixHeadersInResponse" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithFloatLabels">(
      "GET",
      [{ type: "path_literal", value: "FloatHttpLabels" }, { type: "path" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "HttpRequestWithFloatLabels" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithGreedyLabelInPath">(
      "GET",
      [
        { type: "path_literal", value: "HttpRequestWithGreedyLabelInPath" },
        { type: "path_literal", value: "foo" },
        { type: "path" },
        { type: "path_literal", value: "baz" },
        { type: "greedy" },
      ],
      [],
      { service: "RestJson", operation: "HttpRequestWithGreedyLabelInPath" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithLabels">(
      "GET",
      [
        { type: "path_literal", value: "HttpRequestWithLabels" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
      ],
      [],
      { service: "RestJson", operation: "HttpRequestWithLabels" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithLabelsAndTimestampFormat">(
      "GET",
      [
        { type: "path_literal", value: "HttpRequestWithLabelsAndTimestampFormat" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
        { type: "path" },
      ],
      [],
      { service: "RestJson", operation: "HttpRequestWithLabelsAndTimestampFormat" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpRequestWithRegexLiteral">(
      "GET",
      [{ type: "path_literal", value: "ReDosLiteral" }, { type: "path" }, { type: "path_literal", value: "(a+)+" }],
      [],
      { service: "RestJson", operation: "HttpRequestWithRegexLiteral" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpResponseCode">(
      "PUT",
      [{ type: "path_literal", value: "HttpResponseCode" }],
      [],
      { service: "RestJson", operation: "HttpResponseCode" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpStringPayload">(
      "POST",
      [{ type: "path_literal", value: "StringPayload" }],
      [],
      { service: "RestJson", operation: "HttpStringPayload" }
    ),
    new httpbinding.UriSpec<"RestJson", "IgnoreQueryParamsInResponse">(
      "GET",
      [{ type: "path_literal", value: "IgnoreQueryParamsInResponse" }],
      [],
      { service: "RestJson", operation: "IgnoreQueryParamsInResponse" }
    ),
    new httpbinding.UriSpec<"RestJson", "InputAndOutputWithHeaders">(
      "POST",
      [{ type: "path_literal", value: "InputAndOutputWithHeaders" }],
      [],
      { service: "RestJson", operation: "InputAndOutputWithHeaders" }
    ),
    new httpbinding.UriSpec<"RestJson", "JsonBlobs">("POST", [{ type: "path_literal", value: "JsonBlobs" }], [], {
      service: "RestJson",
      operation: "JsonBlobs",
    }),
    new httpbinding.UriSpec<"RestJson", "JsonEnums">("PUT", [{ type: "path_literal", value: "JsonEnums" }], [], {
      service: "RestJson",
      operation: "JsonEnums",
    }),
    new httpbinding.UriSpec<"RestJson", "JsonIntEnums">("PUT", [{ type: "path_literal", value: "JsonIntEnums" }], [], {
      service: "RestJson",
      operation: "JsonIntEnums",
    }),
    new httpbinding.UriSpec<"RestJson", "JsonLists">("PUT", [{ type: "path_literal", value: "JsonLists" }], [], {
      service: "RestJson",
      operation: "JsonLists",
    }),
    new httpbinding.UriSpec<"RestJson", "JsonMaps">("POST", [{ type: "path_literal", value: "JsonMaps" }], [], {
      service: "RestJson",
      operation: "JsonMaps",
    }),
    new httpbinding.UriSpec<"RestJson", "JsonTimestamps">(
      "POST",
      [{ type: "path_literal", value: "JsonTimestamps" }],
      [],
      { service: "RestJson", operation: "JsonTimestamps" }
    ),
    new httpbinding.UriSpec<"RestJson", "JsonUnions">("PUT", [{ type: "path_literal", value: "JsonUnions" }], [], {
      service: "RestJson",
      operation: "JsonUnions",
    }),
    new httpbinding.UriSpec<"RestJson", "MalformedAcceptWithBody">(
      "POST",
      [{ type: "path_literal", value: "MalformedAcceptWithBody" }],
      [],
      { service: "RestJson", operation: "MalformedAcceptWithBody" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedAcceptWithGenericString">(
      "POST",
      [{ type: "path_literal", value: "MalformedAcceptWithGenericString" }],
      [],
      { service: "RestJson", operation: "MalformedAcceptWithGenericString" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedAcceptWithPayload">(
      "POST",
      [{ type: "path_literal", value: "MalformedAcceptWithPayload" }],
      [],
      { service: "RestJson", operation: "MalformedAcceptWithPayload" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedBlob">(
      "POST",
      [{ type: "path_literal", value: "MalformedBlob" }],
      [],
      { service: "RestJson", operation: "MalformedBlob" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedBoolean">(
      "POST",
      [{ type: "path_literal", value: "MalformedBoolean" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedBoolean" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedByte">(
      "POST",
      [{ type: "path_literal", value: "MalformedByte" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedByte" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithBody">(
      "POST",
      [{ type: "path_literal", value: "MalformedContentTypeWithBody" }],
      [],
      { service: "RestJson", operation: "MalformedContentTypeWithBody" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithGenericString">(
      "POST",
      [{ type: "path_literal", value: "MalformedContentTypeWithGenericString" }],
      [],
      { service: "RestJson", operation: "MalformedContentTypeWithGenericString" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithoutBody">(
      "POST",
      [{ type: "path_literal", value: "MalformedContentTypeWithoutBody" }],
      [],
      { service: "RestJson", operation: "MalformedContentTypeWithoutBody" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedContentTypeWithPayload">(
      "POST",
      [{ type: "path_literal", value: "MalformedContentTypeWithPayload" }],
      [],
      { service: "RestJson", operation: "MalformedContentTypeWithPayload" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedDouble">(
      "POST",
      [{ type: "path_literal", value: "MalformedDouble" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedDouble" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedFloat">(
      "POST",
      [{ type: "path_literal", value: "MalformedFloat" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedFloat" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedInteger">(
      "POST",
      [{ type: "path_literal", value: "MalformedInteger" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedInteger" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedList">(
      "POST",
      [{ type: "path_literal", value: "MalformedList" }],
      [],
      { service: "RestJson", operation: "MalformedList" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedLong">(
      "POST",
      [{ type: "path_literal", value: "MalformedLong" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedLong" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedMap">("POST", [{ type: "path_literal", value: "MalformedMap" }], [], {
      service: "RestJson",
      operation: "MalformedMap",
    }),
    new httpbinding.UriSpec<"RestJson", "MalformedRequestBody">(
      "POST",
      [{ type: "path_literal", value: "MalformedRequestBody" }],
      [],
      { service: "RestJson", operation: "MalformedRequestBody" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedShort">(
      "POST",
      [{ type: "path_literal", value: "MalformedShort" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedShort" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedString">(
      "POST",
      [{ type: "path_literal", value: "MalformedString" }],
      [],
      { service: "RestJson", operation: "MalformedString" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampBodyDateTime">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampBodyDateTime" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampBodyDateTime" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampBodyDefault">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampBodyDefault" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampBodyDefault" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampBodyHttpDate">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampBodyHttpDate" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampBodyHttpDate" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampHeaderDateTime">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampHeaderDateTime" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampHeaderDateTime" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampHeaderDefault">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampHeaderDefault" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampHeaderDefault" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampHeaderEpoch">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampHeaderEpoch" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampHeaderEpoch" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampPathDefault">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampPathDefault" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampPathDefault" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampPathEpoch">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampPathEpoch" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampPathEpoch" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampPathHttpDate">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampPathHttpDate" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampPathHttpDate" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampQueryDefault">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampQueryDefault" }],
      [{ type: "query", key: "timestamp" }],
      { service: "RestJson", operation: "MalformedTimestampQueryDefault" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampQueryEpoch">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampQueryEpoch" }],
      [{ type: "query", key: "timestamp" }],
      { service: "RestJson", operation: "MalformedTimestampQueryEpoch" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampQueryHttpDate">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampQueryHttpDate" }],
      [{ type: "query", key: "timestamp" }],
      { service: "RestJson", operation: "MalformedTimestampQueryHttpDate" }
    ),
    new httpbinding.UriSpec<"RestJson", "MalformedUnion">(
      "POST",
      [{ type: "path_literal", value: "MalformedUnion" }],
      [],
      { service: "RestJson", operation: "MalformedUnion" }
    ),
    new httpbinding.UriSpec<"RestJson", "MediaTypeHeader">(
      "GET",
      [{ type: "path_literal", value: "MediaTypeHeader" }],
      [],
      { service: "RestJson", operation: "MediaTypeHeader" }
    ),
    new httpbinding.UriSpec<"RestJson", "NoInputAndNoOutput">(
      "POST",
      [{ type: "path_literal", value: "NoInputAndNoOutput" }],
      [],
      { service: "RestJson", operation: "NoInputAndNoOutput" }
    ),
    new httpbinding.UriSpec<"RestJson", "NoInputAndOutput">(
      "POST",
      [{ type: "path_literal", value: "NoInputAndOutputOutput" }],
      [],
      { service: "RestJson", operation: "NoInputAndOutput" }
    ),
    new httpbinding.UriSpec<"RestJson", "NullAndEmptyHeadersClient">(
      "GET",
      [{ type: "path_literal", value: "NullAndEmptyHeadersClient" }],
      [],
      { service: "RestJson", operation: "NullAndEmptyHeadersClient" }
    ),
    new httpbinding.UriSpec<"RestJson", "NullAndEmptyHeadersServer">(
      "GET",
      [{ type: "path_literal", value: "NullAndEmptyHeadersServer" }],
      [],
      { service: "RestJson", operation: "NullAndEmptyHeadersServer" }
    ),
    new httpbinding.UriSpec<"RestJson", "OmitsNullSerializesEmptyString">(
      "GET",
      [{ type: "path_literal", value: "OmitsNullSerializesEmptyString" }],
      [],
      { service: "RestJson", operation: "OmitsNullSerializesEmptyString" }
    ),
    new httpbinding.UriSpec<"RestJson", "OmitsSerializingEmptyLists">(
      "POST",
      [{ type: "path_literal", value: "OmitsSerializingEmptyLists" }],
      [],
      { service: "RestJson", operation: "OmitsSerializingEmptyLists" }
    ),
    new httpbinding.UriSpec<"RestJson", "PostPlayerAction">(
      "POST",
      [{ type: "path_literal", value: "PostPlayerAction" }],
      [],
      { service: "RestJson", operation: "PostPlayerAction" }
    ),
    new httpbinding.UriSpec<"RestJson", "PostUnionWithJsonName">(
      "POST",
      [{ type: "path_literal", value: "PostUnionWithJsonName" }],
      [],
      { service: "RestJson", operation: "PostUnionWithJsonName" }
    ),
    new httpbinding.UriSpec<"RestJson", "PutWithContentEncoding">(
      "POST",
      [
        { type: "path_literal", value: "requestcompression" },
        { type: "path_literal", value: "putcontentwithencoding" },
      ],
      [],
      { service: "RestJson", operation: "PutWithContentEncoding" }
    ),
    new httpbinding.UriSpec<"RestJson", "QueryIdempotencyTokenAutoFill">(
      "POST",
      [{ type: "path_literal", value: "QueryIdempotencyTokenAutoFill" }],
      [],
      { service: "RestJson", operation: "QueryIdempotencyTokenAutoFill" }
    ),
    new httpbinding.UriSpec<"RestJson", "QueryParamsAsStringListMap">(
      "POST",
      [{ type: "path_literal", value: "StringListMap" }],
      [],
      { service: "RestJson", operation: "QueryParamsAsStringListMap" }
    ),
    new httpbinding.UriSpec<"RestJson", "QueryPrecedence">(
      "POST",
      [{ type: "path_literal", value: "Precedence" }],
      [],
      { service: "RestJson", operation: "QueryPrecedence" }
    ),
    new httpbinding.UriSpec<"RestJson", "RecursiveShapes">(
      "PUT",
      [{ type: "path_literal", value: "RecursiveShapes" }],
      [],
      { service: "RestJson", operation: "RecursiveShapes" }
    ),
    new httpbinding.UriSpec<"RestJson", "SimpleScalarProperties">(
      "PUT",
      [{ type: "path_literal", value: "SimpleScalarProperties" }],
      [],
      { service: "RestJson", operation: "SimpleScalarProperties" }
    ),
    new httpbinding.UriSpec<"RestJson", "StreamingTraits">(
      "POST",
      [{ type: "path_literal", value: "StreamingTraits" }],
      [],
      { service: "RestJson", operation: "StreamingTraits" }
    ),
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsRequireLength">(
      "POST",
      [{ type: "path_literal", value: "StreamingTraitsRequireLength" }],
      [],
      { service: "RestJson", operation: "StreamingTraitsRequireLength" }
    ),
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsWithMediaType">(
      "POST",
      [{ type: "path_literal", value: "StreamingTraitsWithMediaType" }],
      [],
      { service: "RestJson", operation: "StreamingTraitsWithMediaType" }
    ),
    new httpbinding.UriSpec<"RestJson", "TestBodyStructure">("POST", [{ type: "path_literal", value: "body" }], [], {
      service: "RestJson",
      operation: "TestBodyStructure",
    }),
    new httpbinding.UriSpec<"RestJson", "TestNoPayload">("GET", [{ type: "path_literal", value: "no_payload" }], [], {
      service: "RestJson",
      operation: "TestNoPayload",
    }),
    new httpbinding.UriSpec<"RestJson", "TestPayloadBlob">(
      "POST",
      [{ type: "path_literal", value: "blob_payload" }],
      [],
      { service: "RestJson", operation: "TestPayloadBlob" }
    ),
    new httpbinding.UriSpec<"RestJson", "TestPayloadStructure">(
      "POST",
      [{ type: "path_literal", value: "payload" }],
      [],
      { service: "RestJson", operation: "TestPayloadStructure" }
    ),
    new httpbinding.UriSpec<"RestJson", "TimestampFormatHeaders">(
      "POST",
      [{ type: "path_literal", value: "TimestampFormatHeaders" }],
      [],
      { service: "RestJson", operation: "TimestampFormatHeaders" }
    ),
    new httpbinding.UriSpec<"RestJson", "UnitInputAndOutput">(
      "POST",
      [{ type: "path_literal", value: "UnitInputAndOutput" }],
      [],
      { service: "RestJson", operation: "UnitInputAndOutput" }
    ),
  ]);
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<Context>, RestJsonServiceOperations, __ServiceException> = (op) => {
    switch (op) {
      case "AllQueryStringTypes":
        return new AllQueryStringTypesSerializer();
      case "ConstantAndVariableQueryString":
        return new ConstantAndVariableQueryStringSerializer();
      case "ConstantQueryString":
        return new ConstantQueryStringSerializer();
      case "DatetimeOffsets":
        return new DatetimeOffsetsSerializer();
      case "DocumentType":
        return new DocumentTypeSerializer();
      case "DocumentTypeAsPayload":
        return new DocumentTypeAsPayloadSerializer();
      case "EmptyInputAndEmptyOutput":
        return new EmptyInputAndEmptyOutputSerializer();
      case "EndpointOperation":
        return new EndpointOperationSerializer();
      case "EndpointWithHostLabelOperation":
        return new EndpointWithHostLabelOperationSerializer();
      case "FractionalSeconds":
        return new FractionalSecondsSerializer();
      case "GreetingWithErrors":
        return new GreetingWithErrorsSerializer();
      case "HostWithPathOperation":
        return new HostWithPathOperationSerializer();
      case "HttpChecksumRequired":
        return new HttpChecksumRequiredSerializer();
      case "HttpEnumPayload":
        return new HttpEnumPayloadSerializer();
      case "HttpPayloadTraits":
        return new HttpPayloadTraitsSerializer();
      case "HttpPayloadTraitsWithMediaType":
        return new HttpPayloadTraitsWithMediaTypeSerializer();
      case "HttpPayloadWithStructure":
        return new HttpPayloadWithStructureSerializer();
      case "HttpPayloadWithUnion":
        return new HttpPayloadWithUnionSerializer();
      case "HttpPrefixHeaders":
        return new HttpPrefixHeadersSerializer();
      case "HttpPrefixHeadersInResponse":
        return new HttpPrefixHeadersInResponseSerializer();
      case "HttpRequestWithFloatLabels":
        return new HttpRequestWithFloatLabelsSerializer();
      case "HttpRequestWithGreedyLabelInPath":
        return new HttpRequestWithGreedyLabelInPathSerializer();
      case "HttpRequestWithLabels":
        return new HttpRequestWithLabelsSerializer();
      case "HttpRequestWithLabelsAndTimestampFormat":
        return new HttpRequestWithLabelsAndTimestampFormatSerializer();
      case "HttpRequestWithRegexLiteral":
        return new HttpRequestWithRegexLiteralSerializer();
      case "HttpResponseCode":
        return new HttpResponseCodeSerializer();
      case "HttpStringPayload":
        return new HttpStringPayloadSerializer();
      case "IgnoreQueryParamsInResponse":
        return new IgnoreQueryParamsInResponseSerializer();
      case "InputAndOutputWithHeaders":
        return new InputAndOutputWithHeadersSerializer();
      case "JsonBlobs":
        return new JsonBlobsSerializer();
      case "JsonEnums":
        return new JsonEnumsSerializer();
      case "JsonIntEnums":
        return new JsonIntEnumsSerializer();
      case "JsonLists":
        return new JsonListsSerializer();
      case "JsonMaps":
        return new JsonMapsSerializer();
      case "JsonTimestamps":
        return new JsonTimestampsSerializer();
      case "JsonUnions":
        return new JsonUnionsSerializer();
      case "MalformedAcceptWithBody":
        return new MalformedAcceptWithBodySerializer();
      case "MalformedAcceptWithGenericString":
        return new MalformedAcceptWithGenericStringSerializer();
      case "MalformedAcceptWithPayload":
        return new MalformedAcceptWithPayloadSerializer();
      case "MalformedBlob":
        return new MalformedBlobSerializer();
      case "MalformedBoolean":
        return new MalformedBooleanSerializer();
      case "MalformedByte":
        return new MalformedByteSerializer();
      case "MalformedContentTypeWithBody":
        return new MalformedContentTypeWithBodySerializer();
      case "MalformedContentTypeWithGenericString":
        return new MalformedContentTypeWithGenericStringSerializer();
      case "MalformedContentTypeWithoutBody":
        return new MalformedContentTypeWithoutBodySerializer();
      case "MalformedContentTypeWithPayload":
        return new MalformedContentTypeWithPayloadSerializer();
      case "MalformedDouble":
        return new MalformedDoubleSerializer();
      case "MalformedFloat":
        return new MalformedFloatSerializer();
      case "MalformedInteger":
        return new MalformedIntegerSerializer();
      case "MalformedList":
        return new MalformedListSerializer();
      case "MalformedLong":
        return new MalformedLongSerializer();
      case "MalformedMap":
        return new MalformedMapSerializer();
      case "MalformedRequestBody":
        return new MalformedRequestBodySerializer();
      case "MalformedShort":
        return new MalformedShortSerializer();
      case "MalformedString":
        return new MalformedStringSerializer();
      case "MalformedTimestampBodyDateTime":
        return new MalformedTimestampBodyDateTimeSerializer();
      case "MalformedTimestampBodyDefault":
        return new MalformedTimestampBodyDefaultSerializer();
      case "MalformedTimestampBodyHttpDate":
        return new MalformedTimestampBodyHttpDateSerializer();
      case "MalformedTimestampHeaderDateTime":
        return new MalformedTimestampHeaderDateTimeSerializer();
      case "MalformedTimestampHeaderDefault":
        return new MalformedTimestampHeaderDefaultSerializer();
      case "MalformedTimestampHeaderEpoch":
        return new MalformedTimestampHeaderEpochSerializer();
      case "MalformedTimestampPathDefault":
        return new MalformedTimestampPathDefaultSerializer();
      case "MalformedTimestampPathEpoch":
        return new MalformedTimestampPathEpochSerializer();
      case "MalformedTimestampPathHttpDate":
        return new MalformedTimestampPathHttpDateSerializer();
      case "MalformedTimestampQueryDefault":
        return new MalformedTimestampQueryDefaultSerializer();
      case "MalformedTimestampQueryEpoch":
        return new MalformedTimestampQueryEpochSerializer();
      case "MalformedTimestampQueryHttpDate":
        return new MalformedTimestampQueryHttpDateSerializer();
      case "MalformedUnion":
        return new MalformedUnionSerializer();
      case "MediaTypeHeader":
        return new MediaTypeHeaderSerializer();
      case "NoInputAndNoOutput":
        return new NoInputAndNoOutputSerializer();
      case "NoInputAndOutput":
        return new NoInputAndOutputSerializer();
      case "NullAndEmptyHeadersClient":
        return new NullAndEmptyHeadersClientSerializer();
      case "NullAndEmptyHeadersServer":
        return new NullAndEmptyHeadersServerSerializer();
      case "OmitsNullSerializesEmptyString":
        return new OmitsNullSerializesEmptyStringSerializer();
      case "OmitsSerializingEmptyLists":
        return new OmitsSerializingEmptyListsSerializer();
      case "PostPlayerAction":
        return new PostPlayerActionSerializer();
      case "PostUnionWithJsonName":
        return new PostUnionWithJsonNameSerializer();
      case "PutWithContentEncoding":
        return new PutWithContentEncodingSerializer();
      case "QueryIdempotencyTokenAutoFill":
        return new QueryIdempotencyTokenAutoFillSerializer();
      case "QueryParamsAsStringListMap":
        return new QueryParamsAsStringListMapSerializer();
      case "QueryPrecedence":
        return new QueryPrecedenceSerializer();
      case "RecursiveShapes":
        return new RecursiveShapesSerializer();
      case "SimpleScalarProperties":
        return new SimpleScalarPropertiesSerializer();
      case "StreamingTraits":
        return new StreamingTraitsSerializer();
      case "StreamingTraitsRequireLength":
        return new StreamingTraitsRequireLengthSerializer();
      case "StreamingTraitsWithMediaType":
        return new StreamingTraitsWithMediaTypeSerializer();
      case "TestBodyStructure":
        return new TestBodyStructureSerializer();
      case "TestNoPayload":
        return new TestNoPayloadSerializer();
      case "TestPayloadBlob":
        return new TestPayloadBlobSerializer();
      case "TestPayloadStructure":
        return new TestPayloadStructureSerializer();
      case "TimestampFormatHeaders":
        return new TimestampFormatHeadersSerializer();
      case "UnitInputAndOutput":
        return new UnitInputAndOutputSerializer();
    }
  };
  return new RestJsonServiceHandler(service, mux, serFn, serializeFrameworkException, customizer);
};
