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
  deserializeUnitInputAndOutputRequest,
  serializeFrameworkException,
  serializeUnitInputAndOutputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type UnitInputAndOutput<Context> = __Operation<
  UnitInputAndOutputServerInput,
  UnitInputAndOutputServerOutput,
  Context
>;

export interface UnitInputAndOutputServerInput {}
export namespace UnitInputAndOutputServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface UnitInputAndOutputServerOutput {}

export type UnitInputAndOutputErrors = never;

export class UnitInputAndOutputSerializer
  implements __OperationSerializer<RestJsonService<any>, "UnitInputAndOutput", UnitInputAndOutputErrors>
{
  serialize = serializeUnitInputAndOutputResponse;
  deserialize = deserializeUnitInputAndOutputRequest;

  isOperationError(error: any): error is UnitInputAndOutputErrors {
    return false;
  }

  serializeError(error: UnitInputAndOutputErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getUnitInputAndOutputHandler = <Context>(
  operation: __Operation<UnitInputAndOutputServerInput, UnitInputAndOutputServerOutput, Context>,
  customizer: __ValidationCustomizer<"UnitInputAndOutput">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "UnitInputAndOutput">([
    new httpbinding.UriSpec<"RestJson", "UnitInputAndOutput">(
      "POST",
      [{ type: "path_literal", value: "UnitInputAndOutput" }],
      [],
      { service: "RestJson", operation: "UnitInputAndOutput" }
    ),
  ]);
  return new UnitInputAndOutputHandler(
    operation,
    mux,
    new UnitInputAndOutputSerializer(),
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
export class UnitInputAndOutputHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<UnitInputAndOutputServerInput, UnitInputAndOutputServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "UnitInputAndOutput">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "UnitInputAndOutput",
    UnitInputAndOutputErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"UnitInputAndOutput">;
  /**
   * Construct a UnitInputAndOutput handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for UnitInputAndOutput
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for UnitInputAndOutput that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<UnitInputAndOutputServerInput, UnitInputAndOutputServerOutput, Context>,
    mux: __Mux<"RestJson", "UnitInputAndOutput">,
    serializer: __OperationSerializer<RestJsonService<Context>, "UnitInputAndOutput", UnitInputAndOutputErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"UnitInputAndOutput">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.UnitInputAndOutput. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "UnitInputAndOutput",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      UnitInputAndOutputServerInput.validate,
      this.validationCustomizer
    );
  }
}
