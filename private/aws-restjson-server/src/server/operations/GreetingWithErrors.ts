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

import { ComplexError, FooError, GreetingWithErrorsOutput, InvalidGreeting } from "../../models/models_0";
import {
  deserializeGreetingWithErrorsRequest,
  serializeComplexErrorError,
  serializeFooErrorError,
  serializeFrameworkException,
  serializeGreetingWithErrorsResponse,
  serializeInvalidGreetingError,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type GreetingWithErrors<Context> = __Operation<
  GreetingWithErrorsServerInput,
  GreetingWithErrorsServerOutput,
  Context
>;

export interface GreetingWithErrorsServerInput {}
export namespace GreetingWithErrorsServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface GreetingWithErrorsServerOutput extends GreetingWithErrorsOutput {}

export type GreetingWithErrorsErrors = FooError | ComplexError | InvalidGreeting;

export class GreetingWithErrorsSerializer
  implements __OperationSerializer<RestJsonService<any>, "GreetingWithErrors", GreetingWithErrorsErrors>
{
  serialize = serializeGreetingWithErrorsResponse;
  deserialize = deserializeGreetingWithErrorsRequest;

  isOperationError(error: any): error is GreetingWithErrorsErrors {
    const names: GreetingWithErrorsErrors["name"][] = ["FooError", "ComplexError", "InvalidGreeting"];
    return names.includes(error.name);
  }

  serializeError(error: GreetingWithErrorsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "FooError": {
        return serializeFooErrorError(error, ctx);
      }
      case "ComplexError": {
        return serializeComplexErrorError(error, ctx);
      }
      case "InvalidGreeting": {
        return serializeInvalidGreetingError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }
}

export const getGreetingWithErrorsHandler = <Context>(
  operation: __Operation<GreetingWithErrorsServerInput, GreetingWithErrorsServerOutput, Context>,
  customizer: __ValidationCustomizer<"GreetingWithErrors">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "GreetingWithErrors">([
    new httpbinding.UriSpec<"RestJson", "GreetingWithErrors">(
      "PUT",
      [{ type: "path_literal", value: "GreetingWithErrors" }],
      [],
      { service: "RestJson", operation: "GreetingWithErrors" }
    ),
  ]);
  return new GreetingWithErrorsHandler(
    operation,
    mux,
    new GreetingWithErrorsSerializer(),
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
export class GreetingWithErrorsHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<GreetingWithErrorsServerInput, GreetingWithErrorsServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "GreetingWithErrors">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "GreetingWithErrors",
    GreetingWithErrorsErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"GreetingWithErrors">;
  /**
   * Construct a GreetingWithErrors handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for GreetingWithErrors
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for GreetingWithErrors that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<GreetingWithErrorsServerInput, GreetingWithErrorsServerOutput, Context>,
    mux: __Mux<"RestJson", "GreetingWithErrors">,
    serializer: __OperationSerializer<RestJsonService<Context>, "GreetingWithErrors", GreetingWithErrorsErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"GreetingWithErrors">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.GreetingWithErrors. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "GreetingWithErrors",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      GreetingWithErrorsServerInput.validate,
      this.validationCustomizer
    );
  }
}
