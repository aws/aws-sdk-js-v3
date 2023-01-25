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

import { AllQueryStringTypesInput } from "../../models/models_0";
import {
  deserializeAllQueryStringTypesRequest,
  serializeAllQueryStringTypesResponse,
  serializeFrameworkException,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type AllQueryStringTypes<Context> = __Operation<
  AllQueryStringTypesServerInput,
  AllQueryStringTypesServerOutput,
  Context
>;

export interface AllQueryStringTypesServerInput extends AllQueryStringTypesInput {}
export namespace AllQueryStringTypesServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof AllQueryStringTypesInput.validate>[0]) => __ValidationFailure[] =
    AllQueryStringTypesInput.validate;
}
export interface AllQueryStringTypesServerOutput {}

export type AllQueryStringTypesErrors = never;

export class AllQueryStringTypesSerializer
  implements __OperationSerializer<RestJsonService<any>, "AllQueryStringTypes", AllQueryStringTypesErrors>
{
  serialize = serializeAllQueryStringTypesResponse;
  deserialize = deserializeAllQueryStringTypesRequest;

  isOperationError(error: any): error is AllQueryStringTypesErrors {
    return false;
  }

  serializeError(error: AllQueryStringTypesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getAllQueryStringTypesHandler = <Context>(
  operation: __Operation<AllQueryStringTypesServerInput, AllQueryStringTypesServerOutput, Context>,
  customizer: __ValidationCustomizer<"AllQueryStringTypes">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "AllQueryStringTypes">([
    new httpbinding.UriSpec<"RestJson", "AllQueryStringTypes">(
      "GET",
      [{ type: "path_literal", value: "AllQueryStringTypesInput" }],
      [],
      { service: "RestJson", operation: "AllQueryStringTypes" }
    ),
  ]);
  return new AllQueryStringTypesHandler(
    operation,
    mux,
    new AllQueryStringTypesSerializer(),
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
export class AllQueryStringTypesHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<AllQueryStringTypesServerInput, AllQueryStringTypesServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "AllQueryStringTypes">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "AllQueryStringTypes",
    AllQueryStringTypesErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"AllQueryStringTypes">;
  /**
   * Construct a AllQueryStringTypes handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for AllQueryStringTypes
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for AllQueryStringTypes that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<AllQueryStringTypesServerInput, AllQueryStringTypesServerOutput, Context>,
    mux: __Mux<"RestJson", "AllQueryStringTypes">,
    serializer: __OperationSerializer<RestJsonService<Context>, "AllQueryStringTypes", AllQueryStringTypesErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"AllQueryStringTypes">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.AllQueryStringTypes. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "AllQueryStringTypes",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      AllQueryStringTypesServerInput.validate,
      this.validationCustomizer
    );
  }
}
