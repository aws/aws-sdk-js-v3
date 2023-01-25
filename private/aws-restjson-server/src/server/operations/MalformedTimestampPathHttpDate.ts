// smithy-typescript generated code
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8";
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

import { MalformedTimestampPathHttpDateInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampPathHttpDateRequest,
  serializeFrameworkException,
  serializeMalformedTimestampPathHttpDateResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampPathHttpDate<Context> = __Operation<
  MalformedTimestampPathHttpDateServerInput,
  MalformedTimestampPathHttpDateServerOutput,
  Context
>;

export interface MalformedTimestampPathHttpDateServerInput extends MalformedTimestampPathHttpDateInput {}
export namespace MalformedTimestampPathHttpDateServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampPathHttpDateInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampPathHttpDateInput.validate;
}
export interface MalformedTimestampPathHttpDateServerOutput {}

export type MalformedTimestampPathHttpDateErrors = never;

export class MalformedTimestampPathHttpDateSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampPathHttpDate", MalformedTimestampPathHttpDateErrors>
{
  serialize = serializeMalformedTimestampPathHttpDateResponse;
  deserialize = deserializeMalformedTimestampPathHttpDateRequest;

  isOperationError(error: any): error is MalformedTimestampPathHttpDateErrors {
    return false;
  }

  serializeError(error: MalformedTimestampPathHttpDateErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getMalformedTimestampPathHttpDateHandler = <Context>(
  operation: __Operation<
    MalformedTimestampPathHttpDateServerInput,
    MalformedTimestampPathHttpDateServerOutput,
    Context
  >,
  customizer: __ValidationCustomizer<"MalformedTimestampPathHttpDate">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "MalformedTimestampPathHttpDate">([
    new httpbinding.UriSpec<"RestJson", "MalformedTimestampPathHttpDate">(
      "POST",
      [{ type: "path_literal", value: "MalformedTimestampPathHttpDate" }, { type: "path" }],
      [],
      { service: "RestJson", operation: "MalformedTimestampPathHttpDate" }
    ),
  ]);
  return new MalformedTimestampPathHttpDateHandler(
    operation,
    mux,
    new MalformedTimestampPathHttpDateSerializer(),
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
export class MalformedTimestampPathHttpDateHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<
    MalformedTimestampPathHttpDateServerInput,
    MalformedTimestampPathHttpDateServerOutput,
    Context
  >;
  private readonly mux: __Mux<"RestJson", "MalformedTimestampPathHttpDate">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "MalformedTimestampPathHttpDate",
    MalformedTimestampPathHttpDateErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"MalformedTimestampPathHttpDate">;
  /**
   * Construct a MalformedTimestampPathHttpDate handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for MalformedTimestampPathHttpDate
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for MalformedTimestampPathHttpDate that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<
      MalformedTimestampPathHttpDateServerInput,
      MalformedTimestampPathHttpDateServerOutput,
      Context
    >,
    mux: __Mux<"RestJson", "MalformedTimestampPathHttpDate">,
    serializer: __OperationSerializer<
      RestJsonService<Context>,
      "MalformedTimestampPathHttpDate",
      MalformedTimestampPathHttpDateErrors
    >,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"MalformedTimestampPathHttpDate">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.MalformedTimestampPathHttpDate. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "MalformedTimestampPathHttpDate",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      MalformedTimestampPathHttpDateServerInput.validate,
      this.validationCustomizer
    );
  }
}
