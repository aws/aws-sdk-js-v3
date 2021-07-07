import { ComplexError, ComplexNestedErrorData, FooError, InvalidGreeting } from "../models/models_0";
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
  GreetingWithErrors,
  GreetingWithErrorsSerializer,
  GreetingWithErrorsServerInput,
} from "./operations/GreetingWithErrors";
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
  HttpPrefixHeaders,
  HttpPrefixHeadersSerializer,
  HttpPrefixHeadersServerInput,
} from "./operations/HttpPrefixHeaders";
import {
  HttpPrefixHeadersResponse,
  HttpPrefixHeadersResponseSerializer,
  HttpPrefixHeadersResponseServerInput,
} from "./operations/HttpPrefixHeadersResponse";
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
import { JsonLists, JsonListsSerializer, JsonListsServerInput } from "./operations/JsonLists";
import { JsonMaps, JsonMapsSerializer, JsonMapsServerInput } from "./operations/JsonMaps";
import { JsonTimestamps, JsonTimestampsSerializer, JsonTimestampsServerInput } from "./operations/JsonTimestamps";
import { JsonUnions, JsonUnionsSerializer, JsonUnionsServerInput } from "./operations/JsonUnions";
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
  TimestampFormatHeaders,
  TimestampFormatHeadersSerializer,
  TimestampFormatHeadersServerInput,
} from "./operations/TimestampFormatHeaders";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import {
  InternalFailureException as __InternalFailureException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnknownOperationException as __UnknownOperationException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
  httpbinding,
} from "@aws-smithy/server-common";

export type RestJsonServiceOperations =
  | "AllQueryStringTypes"
  | "ConstantAndVariableQueryString"
  | "ConstantQueryString"
  | "DocumentType"
  | "DocumentTypeAsPayload"
  | "EmptyInputAndEmptyOutput"
  | "EndpointOperation"
  | "EndpointWithHostLabelOperation"
  | "GreetingWithErrors"
  | "HttpEnumPayload"
  | "HttpPayloadTraits"
  | "HttpPayloadTraitsWithMediaType"
  | "HttpPayloadWithStructure"
  | "HttpPrefixHeaders"
  | "HttpPrefixHeadersResponse"
  | "HttpRequestWithFloatLabels"
  | "HttpRequestWithGreedyLabelInPath"
  | "HttpRequestWithLabels"
  | "HttpRequestWithLabelsAndTimestampFormat"
  | "HttpResponseCode"
  | "HttpStringPayload"
  | "IgnoreQueryParamsInResponse"
  | "InputAndOutputWithHeaders"
  | "JsonBlobs"
  | "JsonEnums"
  | "JsonLists"
  | "JsonMaps"
  | "JsonTimestamps"
  | "JsonUnions"
  | "MediaTypeHeader"
  | "NoInputAndNoOutput"
  | "NoInputAndOutput"
  | "NullAndEmptyHeadersClient"
  | "NullAndEmptyHeadersServer"
  | "OmitsNullSerializesEmptyString"
  | "QueryIdempotencyTokenAutoFill"
  | "QueryParamsAsStringListMap"
  | "QueryPrecedence"
  | "RecursiveShapes"
  | "SimpleScalarProperties"
  | "StreamingTraits"
  | "StreamingTraitsRequireLength"
  | "StreamingTraitsWithMediaType"
  | "TimestampFormatHeaders";
export interface RestJsonService<Context> {
  AllQueryStringTypes: AllQueryStringTypes<Context>;
  ConstantAndVariableQueryString: ConstantAndVariableQueryString<Context>;
  ConstantQueryString: ConstantQueryString<Context>;
  DocumentType: DocumentType<Context>;
  DocumentTypeAsPayload: DocumentTypeAsPayload<Context>;
  EmptyInputAndEmptyOutput: EmptyInputAndEmptyOutput<Context>;
  EndpointOperation: EndpointOperation<Context>;
  EndpointWithHostLabelOperation: EndpointWithHostLabelOperation<Context>;
  GreetingWithErrors: GreetingWithErrors<Context>;
  HttpEnumPayload: HttpEnumPayload<Context>;
  HttpPayloadTraits: HttpPayloadTraits<Context>;
  HttpPayloadTraitsWithMediaType: HttpPayloadTraitsWithMediaType<Context>;
  HttpPayloadWithStructure: HttpPayloadWithStructure<Context>;
  HttpPrefixHeaders: HttpPrefixHeaders<Context>;
  HttpPrefixHeadersResponse: HttpPrefixHeadersResponse<Context>;
  HttpRequestWithFloatLabels: HttpRequestWithFloatLabels<Context>;
  HttpRequestWithGreedyLabelInPath: HttpRequestWithGreedyLabelInPath<Context>;
  HttpRequestWithLabels: HttpRequestWithLabels<Context>;
  HttpRequestWithLabelsAndTimestampFormat: HttpRequestWithLabelsAndTimestampFormat<Context>;
  HttpResponseCode: HttpResponseCode<Context>;
  HttpStringPayload: HttpStringPayload<Context>;
  IgnoreQueryParamsInResponse: IgnoreQueryParamsInResponse<Context>;
  InputAndOutputWithHeaders: InputAndOutputWithHeaders<Context>;
  JsonBlobs: JsonBlobs<Context>;
  JsonEnums: JsonEnums<Context>;
  JsonLists: JsonLists<Context>;
  JsonMaps: JsonMaps<Context>;
  JsonTimestamps: JsonTimestamps<Context>;
  JsonUnions: JsonUnions<Context>;
  MediaTypeHeader: MediaTypeHeader<Context>;
  NoInputAndNoOutput: NoInputAndNoOutput<Context>;
  NoInputAndOutput: NoInputAndOutput<Context>;
  NullAndEmptyHeadersClient: NullAndEmptyHeadersClient<Context>;
  NullAndEmptyHeadersServer: NullAndEmptyHeadersServer<Context>;
  OmitsNullSerializesEmptyString: OmitsNullSerializesEmptyString<Context>;
  QueryIdempotencyTokenAutoFill: QueryIdempotencyTokenAutoFill<Context>;
  QueryParamsAsStringListMap: QueryParamsAsStringListMap<Context>;
  QueryPrecedence: QueryPrecedence<Context>;
  RecursiveShapes: RecursiveShapes<Context>;
  SimpleScalarProperties: SimpleScalarProperties<Context>;
  StreamingTraits: StreamingTraits<Context>;
  StreamingTraitsRequireLength: StreamingTraitsRequireLength<Context>;
  StreamingTraitsWithMediaType: StreamingTraitsWithMediaType<Context>;
  TimestampFormatHeaders: TimestampFormatHeaders<Context>;
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
  serializer: __OperationSerializer<S, O, __SmithyException>,
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
    return serializeFrameworkException(new __SerializationException(), serdeContextBase);
  }
  try {
    let validationFailures = validationFn(input);
    if (validationFailures && validationFailures.length > 0) {
      let validationException = validationCustomizer({ operation: operationName }, validationFailures);
      if (validationException) {
        return serializer.serializeError(validationException, serdeContextBase);
      }
    }
    let output = await operation(input, context);
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
  ) => __OperationSerializer<RestJsonService<Context>, T, __SmithyException>;
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
    ) => __OperationSerializer<RestJsonService<Context>, T, __SmithyException>,
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
      case "HttpPrefixHeadersResponse": {
        return handle(
          request,
          context,
          "HttpPrefixHeadersResponse",
          this.serializerFactory("HttpPrefixHeadersResponse"),
          this.service.HttpPrefixHeadersResponse,
          this.serializeFrameworkException,
          HttpPrefixHeadersResponseServerInput.validate,
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
    }
  }
}

export class ComplexErrorError implements ComplexError {
  readonly name = "ComplexError";
  readonly $fault = "client";
  readonly $metadata = {};

  Header?: string;
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;

  constructor(opts: { Header?: string; TopLevel?: string; Nested?: ComplexNestedErrorData }) {
    this.Header = opts.Header;
    this.TopLevel = opts.TopLevel;
    this.Nested = opts.Nested;
  }
}

export class FooErrorError implements FooError {
  readonly name = "FooError";
  readonly $fault = "server";
  readonly $metadata = {};
}

export class InvalidGreetingError implements InvalidGreeting {
  readonly name = "InvalidGreeting";
  readonly $fault = "client";
  readonly $metadata = {};

  Message?: string;

  constructor(opts: { Message?: string }) {
    this.Message = opts.Message;
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
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">(
      "PUT",
      [{ type: "path_literal", value: "GreetingWithErrors" }],
      [],
      { service: "RestJson", operation: "GreetingWithErrors" }
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
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeaders">(
      "GET",
      [{ type: "path_literal", value: "HttpPrefixHeaders" }],
      [],
      { service: "RestJson", operation: "HttpPrefixHeaders" }
    ),
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeadersResponse">(
      "GET",
      [{ type: "path_literal", value: "HttpPrefixHeadersResponse" }],
      [],
      { service: "RestJson", operation: "HttpPrefixHeadersResponse" }
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
    new httpbinding.UriSpec<"RestJson", "TimestampFormatHeaders">(
      "POST",
      [{ type: "path_literal", value: "TimestampFormatHeaders" }],
      [],
      { service: "RestJson", operation: "TimestampFormatHeaders" }
    ),
  ]);
  const serFn: (
    op: RestJsonServiceOperations
  ) => __OperationSerializer<RestJsonService<Context>, RestJsonServiceOperations, __SmithyException> = (op) => {
    switch (op) {
      case "AllQueryStringTypes":
        return new AllQueryStringTypesSerializer();
      case "ConstantAndVariableQueryString":
        return new ConstantAndVariableQueryStringSerializer();
      case "ConstantQueryString":
        return new ConstantQueryStringSerializer();
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
      case "GreetingWithErrors":
        return new GreetingWithErrorsSerializer();
      case "HttpEnumPayload":
        return new HttpEnumPayloadSerializer();
      case "HttpPayloadTraits":
        return new HttpPayloadTraitsSerializer();
      case "HttpPayloadTraitsWithMediaType":
        return new HttpPayloadTraitsWithMediaTypeSerializer();
      case "HttpPayloadWithStructure":
        return new HttpPayloadWithStructureSerializer();
      case "HttpPrefixHeaders":
        return new HttpPrefixHeadersSerializer();
      case "HttpPrefixHeadersResponse":
        return new HttpPrefixHeadersResponseSerializer();
      case "HttpRequestWithFloatLabels":
        return new HttpRequestWithFloatLabelsSerializer();
      case "HttpRequestWithGreedyLabelInPath":
        return new HttpRequestWithGreedyLabelInPathSerializer();
      case "HttpRequestWithLabels":
        return new HttpRequestWithLabelsSerializer();
      case "HttpRequestWithLabelsAndTimestampFormat":
        return new HttpRequestWithLabelsAndTimestampFormatSerializer();
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
      case "JsonLists":
        return new JsonListsSerializer();
      case "JsonMaps":
        return new JsonMapsSerializer();
      case "JsonTimestamps":
        return new JsonTimestampsSerializer();
      case "JsonUnions":
        return new JsonUnionsSerializer();
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
      case "TimestampFormatHeaders":
        return new TimestampFormatHeadersSerializer();
    }
  };
  return new RestJsonServiceHandler(service, mux, serFn, serializeFrameworkException, customizer);
};
