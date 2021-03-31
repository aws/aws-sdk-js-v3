import { serializeFrameworkException } from "../protocols/Aws_restJson1";
import { AllQueryStringTypes, AllQueryStringTypesSerializer } from "./operations/AllQueryStringTypes";
import {
  ConstantAndVariableQueryString,
  ConstantAndVariableQueryStringSerializer,
} from "./operations/ConstantAndVariableQueryString";
import { ConstantQueryString, ConstantQueryStringSerializer } from "./operations/ConstantQueryString";
import { EmptyInputAndEmptyOutput, EmptyInputAndEmptyOutputSerializer } from "./operations/EmptyInputAndEmptyOutput";
import { EndpointOperation, EndpointOperationSerializer } from "./operations/EndpointOperation";
import {
  EndpointWithHostLabelOperation,
  EndpointWithHostLabelOperationSerializer,
} from "./operations/EndpointWithHostLabelOperation";
import { GreetingWithErrors, GreetingWithErrorsSerializer } from "./operations/GreetingWithErrors";
import { HttpPayloadTraits, HttpPayloadTraitsSerializer } from "./operations/HttpPayloadTraits";
import {
  HttpPayloadTraitsWithMediaType,
  HttpPayloadTraitsWithMediaTypeSerializer,
} from "./operations/HttpPayloadTraitsWithMediaType";
import { HttpPayloadWithStructure, HttpPayloadWithStructureSerializer } from "./operations/HttpPayloadWithStructure";
import { HttpPrefixHeaders, HttpPrefixHeadersSerializer } from "./operations/HttpPrefixHeaders";
import { HttpPrefixHeadersResponse, HttpPrefixHeadersResponseSerializer } from "./operations/HttpPrefixHeadersResponse";
import {
  HttpRequestWithGreedyLabelInPath,
  HttpRequestWithGreedyLabelInPathSerializer,
} from "./operations/HttpRequestWithGreedyLabelInPath";
import { HttpRequestWithLabels, HttpRequestWithLabelsSerializer } from "./operations/HttpRequestWithLabels";
import {
  HttpRequestWithLabelsAndTimestampFormat,
  HttpRequestWithLabelsAndTimestampFormatSerializer,
} from "./operations/HttpRequestWithLabelsAndTimestampFormat";
import { HttpResponseCode, HttpResponseCodeSerializer } from "./operations/HttpResponseCode";
import {
  IgnoreQueryParamsInResponse,
  IgnoreQueryParamsInResponseSerializer,
} from "./operations/IgnoreQueryParamsInResponse";
import { InlineDocument, InlineDocumentSerializer } from "./operations/InlineDocument";
import { InlineDocumentAsPayload, InlineDocumentAsPayloadSerializer } from "./operations/InlineDocumentAsPayload";
import { InputAndOutputWithHeaders, InputAndOutputWithHeadersSerializer } from "./operations/InputAndOutputWithHeaders";
import { JsonBlobs, JsonBlobsSerializer } from "./operations/JsonBlobs";
import { JsonEnums, JsonEnumsSerializer } from "./operations/JsonEnums";
import { JsonLists, JsonListsSerializer } from "./operations/JsonLists";
import { JsonMaps, JsonMapsSerializer } from "./operations/JsonMaps";
import { JsonTimestamps, JsonTimestampsSerializer } from "./operations/JsonTimestamps";
import { JsonUnions, JsonUnionsSerializer } from "./operations/JsonUnions";
import { MediaTypeHeader, MediaTypeHeaderSerializer } from "./operations/MediaTypeHeader";
import { NoInputAndNoOutput, NoInputAndNoOutputSerializer } from "./operations/NoInputAndNoOutput";
import { NoInputAndOutput, NoInputAndOutputSerializer } from "./operations/NoInputAndOutput";
import { NullAndEmptyHeadersClient, NullAndEmptyHeadersClientSerializer } from "./operations/NullAndEmptyHeadersClient";
import { NullAndEmptyHeadersServer, NullAndEmptyHeadersServerSerializer } from "./operations/NullAndEmptyHeadersServer";
import {
  OmitsNullSerializesEmptyString,
  OmitsNullSerializesEmptyStringSerializer,
} from "./operations/OmitsNullSerializesEmptyString";
import {
  QueryIdempotencyTokenAutoFill,
  QueryIdempotencyTokenAutoFillSerializer,
} from "./operations/QueryIdempotencyTokenAutoFill";
import { RecursiveShapes, RecursiveShapesSerializer } from "./operations/RecursiveShapes";
import { SimpleScalarProperties, SimpleScalarPropertiesSerializer } from "./operations/SimpleScalarProperties";
import { StreamingTraits, StreamingTraitsSerializer } from "./operations/StreamingTraits";
import {
  StreamingTraitsRequireLength,
  StreamingTraitsRequireLengthSerializer,
} from "./operations/StreamingTraitsRequireLength";
import {
  StreamingTraitsWithMediaType,
  StreamingTraitsWithMediaTypeSerializer,
} from "./operations/StreamingTraitsWithMediaType";
import { TimestampFormatHeaders, TimestampFormatHeadersSerializer } from "./operations/TimestampFormatHeaders";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { SerdeContext } from "@aws-sdk/types";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import {
  InternalFailureException,
  Mux,
  OperationSerializer,
  SerializationException,
  ServiceHandler,
  SmithyFrameworkException,
  UnknownOperationException,
  Operation as __Operation,
  httpbinding,
} from "@aws-smithy/server-common";

export type RestJsonServiceOperations =
  | "AllQueryStringTypes"
  | "ConstantAndVariableQueryString"
  | "ConstantQueryString"
  | "EmptyInputAndEmptyOutput"
  | "EndpointOperation"
  | "EndpointWithHostLabelOperation"
  | "GreetingWithErrors"
  | "HttpPayloadTraits"
  | "HttpPayloadTraitsWithMediaType"
  | "HttpPayloadWithStructure"
  | "HttpPrefixHeaders"
  | "HttpPrefixHeadersResponse"
  | "HttpRequestWithGreedyLabelInPath"
  | "HttpRequestWithLabels"
  | "HttpRequestWithLabelsAndTimestampFormat"
  | "HttpResponseCode"
  | "IgnoreQueryParamsInResponse"
  | "InlineDocument"
  | "InlineDocumentAsPayload"
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
  | "RecursiveShapes"
  | "SimpleScalarProperties"
  | "StreamingTraits"
  | "StreamingTraitsRequireLength"
  | "StreamingTraitsWithMediaType"
  | "TimestampFormatHeaders";
export interface RestJsonService {
  AllQueryStringTypes: AllQueryStringTypes;
  ConstantAndVariableQueryString: ConstantAndVariableQueryString;
  ConstantQueryString: ConstantQueryString;
  EmptyInputAndEmptyOutput: EmptyInputAndEmptyOutput;
  EndpointOperation: EndpointOperation;
  EndpointWithHostLabelOperation: EndpointWithHostLabelOperation;
  GreetingWithErrors: GreetingWithErrors;
  HttpPayloadTraits: HttpPayloadTraits;
  HttpPayloadTraitsWithMediaType: HttpPayloadTraitsWithMediaType;
  HttpPayloadWithStructure: HttpPayloadWithStructure;
  HttpPrefixHeaders: HttpPrefixHeaders;
  HttpPrefixHeadersResponse: HttpPrefixHeadersResponse;
  HttpRequestWithGreedyLabelInPath: HttpRequestWithGreedyLabelInPath;
  HttpRequestWithLabels: HttpRequestWithLabels;
  HttpRequestWithLabelsAndTimestampFormat: HttpRequestWithLabelsAndTimestampFormat;
  HttpResponseCode: HttpResponseCode;
  IgnoreQueryParamsInResponse: IgnoreQueryParamsInResponse;
  InlineDocument: InlineDocument;
  InlineDocumentAsPayload: InlineDocumentAsPayload;
  InputAndOutputWithHeaders: InputAndOutputWithHeaders;
  JsonBlobs: JsonBlobs;
  JsonEnums: JsonEnums;
  JsonLists: JsonLists;
  JsonMaps: JsonMaps;
  JsonTimestamps: JsonTimestamps;
  JsonUnions: JsonUnions;
  MediaTypeHeader: MediaTypeHeader;
  NoInputAndNoOutput: NoInputAndNoOutput;
  NoInputAndOutput: NoInputAndOutput;
  NullAndEmptyHeadersClient: NullAndEmptyHeadersClient;
  NullAndEmptyHeadersServer: NullAndEmptyHeadersServer;
  OmitsNullSerializesEmptyString: OmitsNullSerializesEmptyString;
  QueryIdempotencyTokenAutoFill: QueryIdempotencyTokenAutoFill;
  RecursiveShapes: RecursiveShapes;
  SimpleScalarProperties: SimpleScalarProperties;
  StreamingTraits: StreamingTraits;
  StreamingTraitsRequireLength: StreamingTraitsRequireLength;
  StreamingTraitsWithMediaType: StreamingTraitsWithMediaType;
  TimestampFormatHeaders: TimestampFormatHeaders;
}
export class RestJsonServiceHandler implements ServiceHandler {
  private service: RestJsonService;
  private mux: Mux<"RestJson", RestJsonServiceOperations>;
  private serializerFactory: <T extends RestJsonServiceOperations>(
    operation: T
  ) => OperationSerializer<RestJsonService, T, SmithyException>;
  private serializeFrameworkException: (
    e: SmithyFrameworkException,
    ctx: Omit<SerdeContext, "endpoint">
  ) => Promise<HttpResponse>;
  private serdeContextBase = {
    base64Encoder: toBase64,
    base64Decoder: fromBase64,
    utf8Encoder: toUtf8,
    utf8Decoder: fromUtf8,
    streamCollector: streamCollector,
    requestHandler: new NodeHttpHandler(),
    disableHostPrefix: true,
  };
  /**
   * Construct a RestJsonService handler.
   * @param service The {@link RestJsonService} implementation that supplies the business logic for RestJsonService
   * @param mux The {@link Mux} that determines which service and operation are being invoked by a given {@link HttpRequest}
   * @param serializerFactory A factory for an {@link OperationSerializer} for each operation in RestJsonService that
   *                          handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link SmithyFrameworkException}s
   */
  constructor(
    service: RestJsonService,
    mux: Mux<"RestJson", RestJsonServiceOperations>,
    serializerFactory: <T extends RestJsonServiceOperations>(
      op: T
    ) => OperationSerializer<RestJsonService, T, SmithyException>,
    serializeFrameworkException: (
      e: SmithyFrameworkException,
      ctx: Omit<SerdeContext, "endpoint">
    ) => Promise<HttpResponse>
  ) {
    this.service = service;
    this.mux = mux;
    this.serializerFactory = serializerFactory;
    this.serializeFrameworkException = serializeFrameworkException;
  }
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      return serializeFrameworkException(new UnknownOperationException(), this.serdeContextBase);
    }
    switch (target.operation) {
      case "AllQueryStringTypes": {
        let serializer = this.serializerFactory("AllQueryStringTypes");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.AllQueryStringTypes(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "ConstantAndVariableQueryString": {
        let serializer = this.serializerFactory("ConstantAndVariableQueryString");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.ConstantAndVariableQueryString(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "ConstantQueryString": {
        let serializer = this.serializerFactory("ConstantQueryString");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.ConstantQueryString(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "EmptyInputAndEmptyOutput": {
        let serializer = this.serializerFactory("EmptyInputAndEmptyOutput");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.EmptyInputAndEmptyOutput(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "EndpointOperation": {
        let serializer = this.serializerFactory("EndpointOperation");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.EndpointOperation(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "EndpointWithHostLabelOperation": {
        let serializer = this.serializerFactory("EndpointWithHostLabelOperation");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.EndpointWithHostLabelOperation(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "GreetingWithErrors": {
        let serializer = this.serializerFactory("GreetingWithErrors");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.GreetingWithErrors(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpPayloadTraits": {
        let serializer = this.serializerFactory("HttpPayloadTraits");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpPayloadTraits(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpPayloadTraitsWithMediaType": {
        let serializer = this.serializerFactory("HttpPayloadTraitsWithMediaType");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpPayloadTraitsWithMediaType(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpPayloadWithStructure": {
        let serializer = this.serializerFactory("HttpPayloadWithStructure");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpPayloadWithStructure(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpPrefixHeaders": {
        let serializer = this.serializerFactory("HttpPrefixHeaders");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpPrefixHeaders(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpPrefixHeadersResponse": {
        let serializer = this.serializerFactory("HttpPrefixHeadersResponse");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpPrefixHeadersResponse(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpRequestWithGreedyLabelInPath": {
        let serializer = this.serializerFactory("HttpRequestWithGreedyLabelInPath");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpRequestWithGreedyLabelInPath(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpRequestWithLabels": {
        let serializer = this.serializerFactory("HttpRequestWithLabels");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpRequestWithLabels(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpRequestWithLabelsAndTimestampFormat": {
        let serializer = this.serializerFactory("HttpRequestWithLabelsAndTimestampFormat");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpRequestWithLabelsAndTimestampFormat(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "HttpResponseCode": {
        let serializer = this.serializerFactory("HttpResponseCode");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.HttpResponseCode(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "IgnoreQueryParamsInResponse": {
        let serializer = this.serializerFactory("IgnoreQueryParamsInResponse");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.IgnoreQueryParamsInResponse(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "InlineDocument": {
        let serializer = this.serializerFactory("InlineDocument");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.InlineDocument(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "InlineDocumentAsPayload": {
        let serializer = this.serializerFactory("InlineDocumentAsPayload");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.InlineDocumentAsPayload(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "InputAndOutputWithHeaders": {
        let serializer = this.serializerFactory("InputAndOutputWithHeaders");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.InputAndOutputWithHeaders(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "JsonBlobs": {
        let serializer = this.serializerFactory("JsonBlobs");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.JsonBlobs(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "JsonEnums": {
        let serializer = this.serializerFactory("JsonEnums");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.JsonEnums(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "JsonLists": {
        let serializer = this.serializerFactory("JsonLists");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.JsonLists(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "JsonMaps": {
        let serializer = this.serializerFactory("JsonMaps");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.JsonMaps(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "JsonTimestamps": {
        let serializer = this.serializerFactory("JsonTimestamps");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.JsonTimestamps(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "JsonUnions": {
        let serializer = this.serializerFactory("JsonUnions");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.JsonUnions(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "MediaTypeHeader": {
        let serializer = this.serializerFactory("MediaTypeHeader");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.MediaTypeHeader(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "NoInputAndNoOutput": {
        let serializer = this.serializerFactory("NoInputAndNoOutput");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.NoInputAndNoOutput(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "NoInputAndOutput": {
        let serializer = this.serializerFactory("NoInputAndOutput");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.NoInputAndOutput(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "NullAndEmptyHeadersClient": {
        let serializer = this.serializerFactory("NullAndEmptyHeadersClient");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.NullAndEmptyHeadersClient(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "NullAndEmptyHeadersServer": {
        let serializer = this.serializerFactory("NullAndEmptyHeadersServer");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.NullAndEmptyHeadersServer(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "OmitsNullSerializesEmptyString": {
        let serializer = this.serializerFactory("OmitsNullSerializesEmptyString");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.OmitsNullSerializesEmptyString(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "QueryIdempotencyTokenAutoFill": {
        let serializer = this.serializerFactory("QueryIdempotencyTokenAutoFill");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.QueryIdempotencyTokenAutoFill(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "RecursiveShapes": {
        let serializer = this.serializerFactory("RecursiveShapes");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.RecursiveShapes(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "SimpleScalarProperties": {
        let serializer = this.serializerFactory("SimpleScalarProperties");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.SimpleScalarProperties(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "StreamingTraits": {
        let serializer = this.serializerFactory("StreamingTraits");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.StreamingTraits(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "StreamingTraitsRequireLength": {
        let serializer = this.serializerFactory("StreamingTraitsRequireLength");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.StreamingTraitsRequireLength(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "StreamingTraitsWithMediaType": {
        let serializer = this.serializerFactory("StreamingTraitsWithMediaType");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.StreamingTraitsWithMediaType(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
      case "TimestampFormatHeaders": {
        let serializer = this.serializerFactory("TimestampFormatHeaders");
        let input;
        try {
          input = await serializer.deserialize(request, {
            endpoint: () => Promise.resolve(request),
            ...this.serdeContextBase,
          });
        } catch (error: unknown) {
          return this.serializeFrameworkException(new SerializationException(), this.serdeContextBase);
        }
        try {
          let output = await this.service.TimestampFormatHeaders(input, request);
          return serializer.serialize(output, this.serdeContextBase);
        } catch (error: unknown) {
          if (serializer.isOperationError(error)) {
            return serializer.serializeError(error, this.serdeContextBase);
          }
          console.log("Received an unexpected error", error);
          return this.serializeFrameworkException(new InternalFailureException(), this.serdeContextBase);
        }
      }
    }
  }
}

export const getRestJsonServiceHandler = (service: RestJsonService): ServiceHandler => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", keyof RestJsonService>([
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
    new httpbinding.UriSpec<"RestJson", "IgnoreQueryParamsInResponse">(
      "GET",
      [{ type: "path_literal", value: "IgnoreQueryParamsInResponse" }],
      [],
      { service: "RestJson", operation: "IgnoreQueryParamsInResponse" }
    ),
    new httpbinding.UriSpec<"RestJson", "InlineDocument">(
      "PUT",
      [{ type: "path_literal", value: "InlineDocument" }],
      [],
      { service: "RestJson", operation: "InlineDocument" }
    ),
    new httpbinding.UriSpec<"RestJson", "InlineDocumentAsPayload">(
      "PUT",
      [{ type: "path_literal", value: "InlineDocumentAsPayload" }],
      [],
      { service: "RestJson", operation: "InlineDocumentAsPayload" }
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
  ) => OperationSerializer<RestJsonService, RestJsonServiceOperations, __SmithyException> = (op) => {
    switch (op) {
      case "AllQueryStringTypes":
        return new AllQueryStringTypesSerializer();
      case "ConstantAndVariableQueryString":
        return new ConstantAndVariableQueryStringSerializer();
      case "ConstantQueryString":
        return new ConstantQueryStringSerializer();
      case "EmptyInputAndEmptyOutput":
        return new EmptyInputAndEmptyOutputSerializer();
      case "EndpointOperation":
        return new EndpointOperationSerializer();
      case "EndpointWithHostLabelOperation":
        return new EndpointWithHostLabelOperationSerializer();
      case "GreetingWithErrors":
        return new GreetingWithErrorsSerializer();
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
      case "HttpRequestWithGreedyLabelInPath":
        return new HttpRequestWithGreedyLabelInPathSerializer();
      case "HttpRequestWithLabels":
        return new HttpRequestWithLabelsSerializer();
      case "HttpRequestWithLabelsAndTimestampFormat":
        return new HttpRequestWithLabelsAndTimestampFormatSerializer();
      case "HttpResponseCode":
        return new HttpResponseCodeSerializer();
      case "IgnoreQueryParamsInResponse":
        return new IgnoreQueryParamsInResponseSerializer();
      case "InlineDocument":
        return new InlineDocumentSerializer();
      case "InlineDocumentAsPayload":
        return new InlineDocumentAsPayloadSerializer();
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
  return new RestJsonServiceHandler(service, mux, serFn, serializeFrameworkException);
};
