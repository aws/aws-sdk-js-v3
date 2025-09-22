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

import {
  deserializeNoInputAndNoOutputRequest,
  serializeFrameworkException,
  serializeNoInputAndNoOutputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type NoInputAndNoOutput<Context> = __Operation<
  NoInputAndNoOutputServerInput,
  NoInputAndNoOutputServerOutput,
  Context
>;

export interface NoInputAndNoOutputServerInput {}
export namespace NoInputAndNoOutputServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface NoInputAndNoOutputServerOutput {}

export type NoInputAndNoOutputErrors = never;

export class NoInputAndNoOutputSerializer
  implements __OperationSerializer<RestJsonService<any>, "NoInputAndNoOutput", NoInputAndNoOutputErrors>
{
  serialize = serializeNoInputAndNoOutputResponse;
  deserialize = deserializeNoInputAndNoOutputRequest;

  isOperationError(error: any): error is NoInputAndNoOutputErrors {
    return false;
  }

  serializeError(error: NoInputAndNoOutputErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getNoInputAndNoOutputHandler = <Context>(
  operation: __Operation<NoInputAndNoOutputServerInput, NoInputAndNoOutputServerOutput, Context>,
  customizer: __ValidationCustomizer<"NoInputAndNoOutput">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "NoInputAndNoOutput">([
    new httpbinding.UriSpec<"RestJson", "NoInputAndNoOutput">(
      "POST",
      [{ type: "path_literal", value: "NoInputAndNoOutput" }],
      [],
      { service: "RestJson", operation: "NoInputAndNoOutput" }
    ),
  ]);
  return new NoInputAndNoOutputHandler(
    operation,
    mux,
    new NoInputAndNoOutputSerializer(),
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
export class NoInputAndNoOutputHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<NoInputAndNoOutputServerInput, NoInputAndNoOutputServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "NoInputAndNoOutput">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "NoInputAndNoOutput",
    NoInputAndNoOutputErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"NoInputAndNoOutput">;
  /**
   * Construct a NoInputAndNoOutput handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for NoInputAndNoOutput
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for NoInputAndNoOutput that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<NoInputAndNoOutputServerInput, NoInputAndNoOutputServerOutput, Context>,
    mux: __Mux<"RestJson", "NoInputAndNoOutput">,
    serializer: __OperationSerializer<RestJsonService<Context>, "NoInputAndNoOutput", NoInputAndNoOutputErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"NoInputAndNoOutput">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.NoInputAndNoOutput. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "NoInputAndNoOutput",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      NoInputAndNoOutputServerInput.validate,
      this.validationCustomizer
    );
  }
}
