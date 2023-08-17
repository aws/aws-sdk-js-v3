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
  ServerSerdeContext,
  ServiceException as __BaseException,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { NodeHttpHandler, streamCollector } from "@smithy/node-http-handler";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { MalformedLengthOverrideInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedLengthOverrideRequest,
  serializeFrameworkException,
  serializeMalformedLengthOverrideResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedLengthOverride<Context> = __Operation<
  MalformedLengthOverrideServerInput,
  MalformedLengthOverrideServerOutput,
  Context
>;

export interface MalformedLengthOverrideServerInput extends MalformedLengthOverrideInput {}
export namespace MalformedLengthOverrideServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedLengthOverrideInput.validate>[0]) => __ValidationFailure[] =
    MalformedLengthOverrideInput.validate;
}
export interface MalformedLengthOverrideServerOutput {}

export type MalformedLengthOverrideErrors = ValidationException;

export class MalformedLengthOverrideSerializer
  implements
    __OperationSerializer<RestJsonValidationService<any>, "MalformedLengthOverride", MalformedLengthOverrideErrors>
{
  serialize = serializeMalformedLengthOverrideResponse;
  deserialize = deserializeMalformedLengthOverrideRequest;

  isOperationError(error: any): error is MalformedLengthOverrideErrors {
    const names: MalformedLengthOverrideErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedLengthOverrideErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationException": {
        return serializeValidationExceptionError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }
}

export const getMalformedLengthOverrideHandler = <Context>(
  operation: __Operation<MalformedLengthOverrideServerInput, MalformedLengthOverrideServerOutput, Context>
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJsonValidation", "MalformedLengthOverride">([
    new httpbinding.UriSpec<"RestJsonValidation", "MalformedLengthOverride">(
      "POST",
      [{ type: "path_literal", value: "MalformedLengthOverride" }],
      [],
      { service: "RestJsonValidation", operation: "MalformedLengthOverride" }
    ),
  ]);
  const customizer: __ValidationCustomizer<"MalformedLengthOverride"> = (ctx, failures) => {
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
  return new MalformedLengthOverrideHandler(
    operation,
    mux,
    new MalformedLengthOverrideSerializer(),
    serializeFrameworkException,
    customizer
  );
};

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
export class MalformedLengthOverrideHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<
    MalformedLengthOverrideServerInput,
    MalformedLengthOverrideServerOutput,
    Context
  >;
  private readonly mux: __Mux<"RestJsonValidation", "MalformedLengthOverride">;
  private readonly serializer: __OperationSerializer<
    RestJsonValidationService<Context>,
    "MalformedLengthOverride",
    MalformedLengthOverrideErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"MalformedLengthOverride">;
  /**
   * Construct a MalformedLengthOverride handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for MalformedLengthOverride
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for MalformedLengthOverride that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<MalformedLengthOverrideServerInput, MalformedLengthOverrideServerOutput, Context>,
    mux: __Mux<"RestJsonValidation", "MalformedLengthOverride">,
    serializer: __OperationSerializer<
      RestJsonValidationService<Context>,
      "MalformedLengthOverride",
      MalformedLengthOverrideErrors
    >,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"MalformedLengthOverride">
  ) {
    this.operation = operation;
    this.mux = mux;
    this.serializer = serializer;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      console.log(
        "Received a request that did not match aws.protocoltests.restjson.validation#RestJsonValidation.MalformedLengthOverride. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "MalformedLengthOverride",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      MalformedLengthOverrideServerInput.validate,
      this.validationCustomizer
    );
  }
}
