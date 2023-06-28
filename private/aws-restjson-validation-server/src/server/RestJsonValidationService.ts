// smithy-typescript generated code
import {
  generateValidationMessage as __generateValidationMessage,
  generateValidationSummary as __generateValidationSummary,
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
import { MalformedEnum, MalformedEnumSerializer, MalformedEnumServerInput } from "./operations/MalformedEnum";
import { MalformedLength, MalformedLengthSerializer, MalformedLengthServerInput } from "./operations/MalformedLength";
import {
  MalformedLengthOverride,
  MalformedLengthOverrideSerializer,
  MalformedLengthOverrideServerInput,
} from "./operations/MalformedLengthOverride";
import {
  MalformedLengthQueryString,
  MalformedLengthQueryStringSerializer,
  MalformedLengthQueryStringServerInput,
} from "./operations/MalformedLengthQueryString";
import {
  MalformedPattern,
  MalformedPatternSerializer,
  MalformedPatternServerInput,
} from "./operations/MalformedPattern";
import {
  MalformedPatternOverride,
  MalformedPatternOverrideSerializer,
  MalformedPatternOverrideServerInput,
} from "./operations/MalformedPatternOverride";
import { MalformedRange, MalformedRangeSerializer, MalformedRangeServerInput } from "./operations/MalformedRange";
import {
  MalformedRangeOverride,
  MalformedRangeOverrideSerializer,
  MalformedRangeOverrideServerInput,
} from "./operations/MalformedRangeOverride";
import {
  MalformedRequired,
  MalformedRequiredSerializer,
  MalformedRequiredServerInput,
} from "./operations/MalformedRequired";
import {
  MalformedUniqueItems,
  MalformedUniqueItemsSerializer,
  MalformedUniqueItemsServerInput,
} from "./operations/MalformedUniqueItems";
import {
  RecursiveStructures,
  RecursiveStructuresSerializer,
  RecursiveStructuresServerInput,
} from "./operations/RecursiveStructures";
import {
  SensitiveValidation,
  SensitiveValidationSerializer,
  SensitiveValidationServerInput,
} from "./operations/SensitiveValidation";

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

export const getRestJsonValidationServiceHandler = <Context>(
  service: RestJsonValidationService<Context>
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJsonValidation", keyof RestJsonValidationService<Context>>([
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedEnum">(
      "POST",
      [{ type: "path_literal", value: "MalformedEnum" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedEnum" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedLength">(
      "POST",
      [{ type: "path_literal", value: "MalformedLength" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedLength" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedLengthOverride">(
      "POST",
      [{ type: "path_literal", value: "MalformedLengthOverride" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedLengthOverride" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedLengthQueryString">(
      "POST",
      [{ type: "path_literal", value: "MalformedLengthQueryString" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedLengthQueryString" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedPattern">(
      "POST",
      [{ type: "path_literal", value: "MalformedPattern" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedPattern" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedPatternOverride">(
      "POST",
      [{ type: "path_literal", value: "MalformedPatternOverride" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedPatternOverride" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedRange">(
      "POST",
      [{ type: "path_literal", value: "MalformedRange" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedRange" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedRangeOverride">(
      "POST",
      [{ type: "path_literal", value: "MalformedRangeOverride" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedRangeOverride" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedRequired">(
      "POST",
      [{ type: "path_literal", value: "MalformedRequired" }],
      [{ type: "query", key: "stringInQuery" }],
      { service: "RestJsonValidation", operation: "MalformedRequired" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedUniqueItems">(
      "POST",
      [{ type: "path_literal", value: "MalformedUniqueItems" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedUniqueItems" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "RecursiveStructures">(
      "POST",
      [{ type: "path_literal", value: "RecursiveStructures" }],
      [],
      { service: "RestJsonValidation", operation: "RecursiveStructures" }
    ),
    new httpbinding.UriSpec<"RestJsonValidation", "SensitiveValidation">(
      "POST",
      [{ type: "path_literal", value: "SensitiveValidation" }],
      [],
      { service: "RestJsonValidation", operation: "SensitiveValidation" }
    ),
  ]);
  const serFn: (
    op: RestJsonValidationServiceOperations
  ) => __OperationSerializer<
    RestJsonValidationService<Context>,
    RestJsonValidationServiceOperations,
    __ServiceException
  > = (op) => {
    switch (op) {
      case "MalformedEnum":
        return new MalformedEnumSerializer();
      case "MalformedLength":
        return new MalformedLengthSerializer();
      case "MalformedLengthOverride":
        return new MalformedLengthOverrideSerializer();
      case "MalformedLengthQueryString":
        return new MalformedLengthQueryStringSerializer();
      case "MalformedPattern":
        return new MalformedPatternSerializer();
      case "MalformedPatternOverride":
        return new MalformedPatternOverrideSerializer();
      case "MalformedRange":
        return new MalformedRangeSerializer();
      case "MalformedRangeOverride":
        return new MalformedRangeOverrideSerializer();
      case "MalformedRequired":
        return new MalformedRequiredSerializer();
      case "MalformedUniqueItems":
        return new MalformedUniqueItemsSerializer();
      case "RecursiveStructures":
        return new RecursiveStructuresSerializer();
      case "SensitiveValidation":
        return new SensitiveValidationSerializer();
    }
  };
  const customizer: __ValidationCustomizer<RestJsonValidationServiceOperations> = (ctx, failures) => {
    if (!failures) {
      return undefined;
    }
    return {
      name: "ValidationException",
      $fault: "client",
      message: __generateValidationSummary(failures),
      fieldList: failures.map((failure) => ({
        path: failure.path,
        message: __generateValidationMessage(failure),
      })),
    };
  };
  return new RestJsonValidationServiceHandler(service, mux, serFn, serializeFrameworkException, customizer);
};
