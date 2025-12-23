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

import { SparseJsonMapsInputOutput } from "../../models/models_0";
import {
  deserializeSparseJsonMapsRequest,
  serializeFrameworkException,
  serializeSparseJsonMapsResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type SparseJsonMaps<Context> = __Operation<SparseJsonMapsServerInput, SparseJsonMapsServerOutput, Context>

export interface SparseJsonMapsServerInput extends SparseJsonMapsInputOutput {}
export namespace SparseJsonMapsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof SparseJsonMapsInputOutput.validate>[0]) => __ValidationFailure[] = SparseJsonMapsInputOutput.validate;
}
export interface SparseJsonMapsServerOutput extends SparseJsonMapsInputOutput {}

export type SparseJsonMapsErrors = never;

export class SparseJsonMapsSerializer implements __OperationSerializer<RestJsonService<any>, "SparseJsonMaps", SparseJsonMapsErrors> {
  serialize = serializeSparseJsonMapsResponse;
  deserialize = deserializeSparseJsonMapsRequest;

  isOperationError(error: any): error is SparseJsonMapsErrors {
    return false;
  };

  serializeError(error: SparseJsonMapsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }

}

export const getSparseJsonMapsHandler = <Context>(operation: __Operation<SparseJsonMapsServerInput, SparseJsonMapsServerOutput, Context>, customizer: __ValidationCustomizer<"SparseJsonMaps">): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "SparseJsonMaps">([
    new httpbinding.UriSpec<"RestJson", "SparseJsonMaps">(
      'POST',
      [
        { type: 'path_literal', value: "SparseJsonMaps" },
      ],
      [
      ],
      { service: "RestJson", operation: "SparseJsonMaps" }),
  ]);
  return new SparseJsonMapsHandler(operation, mux, new SparseJsonMapsSerializer(), serializeFrameworkException, customizer);
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
export class SparseJsonMapsHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<SparseJsonMapsServerInput, SparseJsonMapsServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "SparseJsonMaps">;
  private readonly serializer: __OperationSerializer<RestJsonService<Context>, "SparseJsonMaps", SparseJsonMapsErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"SparseJsonMaps">;
  /**
   * Construct a SparseJsonMaps handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for SparseJsonMaps
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for SparseJsonMaps that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<SparseJsonMapsServerInput, SparseJsonMapsServerOutput, Context>,
    mux: __Mux<"RestJson", "SparseJsonMaps">,
    serializer: __OperationSerializer<RestJsonService<Context>, "SparseJsonMaps", SparseJsonMapsErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"SparseJsonMaps">
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
      console.log('Received a request that did not match aws.protocoltests.restjson#RestJson.SparseJsonMaps. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "SparseJsonMaps", this.serializer, this.operation, this.serializeFrameworkException, SparseJsonMapsServerInput.validate, this.validationCustomizer);
  }
}
