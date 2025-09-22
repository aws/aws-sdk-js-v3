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

import { MalformedEnum, MalformedEnumServerInput } from "./operations/MalformedEnum";
import { MalformedLength, MalformedLengthServerInput } from "./operations/MalformedLength";
import { MalformedLengthOverride, MalformedLengthOverrideServerInput } from "./operations/MalformedLengthOverride";
import {
  MalformedLengthQueryString,
  MalformedLengthQueryStringServerInput,
} from "./operations/MalformedLengthQueryString";
import { MalformedPattern, MalformedPatternServerInput } from "./operations/MalformedPattern";
import { MalformedPatternOverride, MalformedPatternOverrideServerInput } from "./operations/MalformedPatternOverride";
import { MalformedRange, MalformedRangeServerInput } from "./operations/MalformedRange";
import { MalformedRangeOverride, MalformedRangeOverrideServerInput } from "./operations/MalformedRangeOverride";
import { MalformedRequired, MalformedRequiredServerInput } from "./operations/MalformedRequired";
import { MalformedUniqueItems, MalformedUniqueItemsServerInput } from "./operations/MalformedUniqueItems";
import { RecursiveStructures, RecursiveStructuresServerInput } from "./operations/RecursiveStructures";
import { SensitiveValidation, SensitiveValidationServerInput } from "./operations/SensitiveValidation";

export type RestJsonValidationServiceOperations =
  | "MalformedEnum"
  | "MalformedLength"
  | "MalformedLengthOverride"
  | "MalformedLengthQueryString"
  | "MalformedPattern"
  | "MalformedPatternOverride"
  | "MalformedRange"
  | "MalformedRangeOverride"
  | "MalformedRequired"
  | "MalformedUniqueItems"
  | "RecursiveStructures"
  | "SensitiveValidation";
export interface RestJsonValidationService<Context> {
  MalformedEnum: MalformedEnum<Context>;
  MalformedLength: MalformedLength<Context>;
  MalformedLengthOverride: MalformedLengthOverride<Context>;
  MalformedLengthQueryString: MalformedLengthQueryString<Context>;
  MalformedPattern: MalformedPattern<Context>;
  MalformedPatternOverride: MalformedPatternOverride<Context>;
  MalformedRange: MalformedRange<Context>;
  MalformedRangeOverride: MalformedRangeOverride<Context>;
  MalformedRequired: MalformedRequired<Context>;
  MalformedUniqueItems: MalformedUniqueItems<Context>;
  RecursiveStructures: RecursiveStructures<Context>;
  SensitiveValidation: SensitiveValidation<Context>;
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
export class RestJsonValidationServiceHandler<Context> implements __ServiceHandler<Context> {
  private readonly service: RestJsonValidationService<Context>;
  private readonly mux: __Mux<"RestJsonValidation", RestJsonValidationServiceOperations>;
  private readonly serializerFactory: <T extends RestJsonValidationServiceOperations>(
    operation: T
  ) => __OperationSerializer<RestJsonValidationService<Context>, T, __ServiceException>;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<RestJsonValidationServiceOperations>;
  /**
   * Construct a RestJsonValidationService handler.
   * @param service The {@link RestJsonValidationService} implementation that supplies the business logic for RestJsonValidationService
   * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in RestJsonValidationService that
   *                          handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    service: RestJsonValidationService<Context>,
    mux: __Mux<"RestJsonValidation", RestJsonValidationServiceOperations>,
    serializerFactory: <T extends RestJsonValidationServiceOperations>(
      op: T
    ) => __OperationSerializer<RestJsonValidationService<Context>, T, __ServiceException>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<RestJsonValidationServiceOperations>
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
      case "MalformedEnum": {
        return handle(
          request,
          context,
          "MalformedEnum",
          this.serializerFactory("MalformedEnum"),
          this.service.MalformedEnum,
          this.serializeFrameworkException,
          MalformedEnumServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedLength": {
        return handle(
          request,
          context,
          "MalformedLength",
          this.serializerFactory("MalformedLength"),
          this.service.MalformedLength,
          this.serializeFrameworkException,
          MalformedLengthServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedLengthOverride": {
        return handle(
          request,
          context,
          "MalformedLengthOverride",
          this.serializerFactory("MalformedLengthOverride"),
          this.service.MalformedLengthOverride,
          this.serializeFrameworkException,
          MalformedLengthOverrideServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedLengthQueryString": {
        return handle(
          request,
          context,
          "MalformedLengthQueryString",
          this.serializerFactory("MalformedLengthQueryString"),
          this.service.MalformedLengthQueryString,
          this.serializeFrameworkException,
          MalformedLengthQueryStringServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedPattern": {
        return handle(
          request,
          context,
          "MalformedPattern",
          this.serializerFactory("MalformedPattern"),
          this.service.MalformedPattern,
          this.serializeFrameworkException,
          MalformedPatternServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedPatternOverride": {
        return handle(
          request,
          context,
          "MalformedPatternOverride",
          this.serializerFactory("MalformedPatternOverride"),
          this.service.MalformedPatternOverride,
          this.serializeFrameworkException,
          MalformedPatternOverrideServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedRange": {
        return handle(
          request,
          context,
          "MalformedRange",
          this.serializerFactory("MalformedRange"),
          this.service.MalformedRange,
          this.serializeFrameworkException,
          MalformedRangeServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedRangeOverride": {
        return handle(
          request,
          context,
          "MalformedRangeOverride",
          this.serializerFactory("MalformedRangeOverride"),
          this.service.MalformedRangeOverride,
          this.serializeFrameworkException,
          MalformedRangeOverrideServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedRequired": {
        return handle(
          request,
          context,
          "MalformedRequired",
          this.serializerFactory("MalformedRequired"),
          this.service.MalformedRequired,
          this.serializeFrameworkException,
          MalformedRequiredServerInput.validate,
          this.validationCustomizer
        );
      }
      case "MalformedUniqueItems": {
        return handle(
          request,
          context,
          "MalformedUniqueItems",
          this.serializerFactory("MalformedUniqueItems"),
          this.service.MalformedUniqueItems,
          this.serializeFrameworkException,
          MalformedUniqueItemsServerInput.validate,
          this.validationCustomizer
        );
      }
      case "RecursiveStructures": {
        return handle(
          request,
          context,
          "RecursiveStructures",
          this.serializerFactory("RecursiveStructures"),
          this.service.RecursiveStructures,
          this.serializeFrameworkException,
          RecursiveStructuresServerInput.validate,
          this.validationCustomizer
        );
      }
      case "SensitiveValidation": {
        return handle(
          request,
          context,
          "SensitiveValidation",
          this.serializerFactory("SensitiveValidation"),
          this.service.SensitiveValidation,
          this.serializeFrameworkException,
          SensitiveValidationServerInput.validate,
          this.validationCustomizer
        );
      }
    }
  }
}
