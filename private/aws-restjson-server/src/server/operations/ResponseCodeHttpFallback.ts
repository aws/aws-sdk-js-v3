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
  ServerSerdeContext,
  ServerSerdeContext as __ServerSerdeContext,
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

import { ResponseCodeHttpFallbackInputOutput } from "../../models/models_0";
import {
  deserializeResponseCodeHttpFallbackRequest,
  serializeFrameworkException,
  serializeResponseCodeHttpFallbackResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type ResponseCodeHttpFallback<Context> = __Operation<ResponseCodeHttpFallbackServerInput, ResponseCodeHttpFallbackServerOutput, Context>

export interface ResponseCodeHttpFallbackServerInput extends ResponseCodeHttpFallbackInputOutput {}
export namespace ResponseCodeHttpFallbackServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof ResponseCodeHttpFallbackInputOutput.validate>[0]) => __ValidationFailure[] = ResponseCodeHttpFallbackInputOutput.validate;
}
export interface ResponseCodeHttpFallbackServerOutput extends ResponseCodeHttpFallbackInputOutput {}

export type ResponseCodeHttpFallbackErrors = never;

export class ResponseCodeHttpFallbackSerializer implements __OperationSerializer<RestJsonService<any>, "ResponseCodeHttpFallback", ResponseCodeHttpFallbackErrors> {
  serialize = serializeResponseCodeHttpFallbackResponse;
  deserialize = deserializeResponseCodeHttpFallbackRequest;

  isOperationError(error: any): error is ResponseCodeHttpFallbackErrors {
    return false;
  };

  serializeError(error: ResponseCodeHttpFallbackErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }

}

export const getResponseCodeHttpFallbackHandler = <Context>(operation: __Operation<ResponseCodeHttpFallbackServerInput, ResponseCodeHttpFallbackServerOutput, Context>, customizer: __ValidationCustomizer<"ResponseCodeHttpFallback">): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "ResponseCodeHttpFallback">([
    new httpbinding.UriSpec<"RestJson", "ResponseCodeHttpFallback">(
      'GET',
      [
        { type: 'path_literal', value: "responseCodeHttpFallback" },
      ],
      [
      ],
      { service: "RestJson", operation: "ResponseCodeHttpFallback" }),
  ]);
  return new ResponseCodeHttpFallbackHandler(operation, mux, new ResponseCodeHttpFallbackSerializer(), serializeFrameworkException, customizer);
}

const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true
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
      endpoint: () => Promise.resolve(request), ...serdeContextBase
    });
  } catch (error: unknown) {
    if (__isFrameworkException(error)) {
      return serializeFrameworkException(error, serdeContextBase);
    };
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
  } catch(error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log('Received an unexpected error', error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class ResponseCodeHttpFallbackHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<ResponseCodeHttpFallbackServerInput, ResponseCodeHttpFallbackServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "ResponseCodeHttpFallback">;
  private readonly serializer: __OperationSerializer<RestJsonService<Context>, "ResponseCodeHttpFallback", ResponseCodeHttpFallbackErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"ResponseCodeHttpFallback">;
  /**
   * Construct a ResponseCodeHttpFallback handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for ResponseCodeHttpFallback
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for ResponseCodeHttpFallback that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<ResponseCodeHttpFallbackServerInput, ResponseCodeHttpFallbackServerOutput, Context>,
    mux: __Mux<"RestJson", "ResponseCodeHttpFallback">,
    serializer: __OperationSerializer<RestJsonService<Context>, "ResponseCodeHttpFallback", ResponseCodeHttpFallbackErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"ResponseCodeHttpFallback">
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
      console.log('Received a request that did not match aws.protocoltests.restjson#RestJson.ResponseCodeHttpFallback. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "ResponseCodeHttpFallback", this.serializer, this.operation, this.serializeFrameworkException, ResponseCodeHttpFallbackServerInput.validate, this.validationCustomizer);
  }
}
