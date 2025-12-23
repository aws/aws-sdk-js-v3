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

import { OperationWithNestedStructureInput, OperationWithNestedStructureOutput } from "../../models/models_0";
import {
  deserializeOperationWithNestedStructureRequest,
  serializeFrameworkException,
  serializeOperationWithNestedStructureResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type OperationWithNestedStructure<Context> = __Operation<OperationWithNestedStructureServerInput, OperationWithNestedStructureServerOutput, Context>

export interface OperationWithNestedStructureServerInput extends OperationWithNestedStructureInput {}
export namespace OperationWithNestedStructureServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof OperationWithNestedStructureInput.validate>[0]) => __ValidationFailure[] = OperationWithNestedStructureInput.validate;
}
export interface OperationWithNestedStructureServerOutput extends OperationWithNestedStructureOutput {}

export type OperationWithNestedStructureErrors = never;

export class OperationWithNestedStructureSerializer implements __OperationSerializer<RestJsonService<any>, "OperationWithNestedStructure", OperationWithNestedStructureErrors> {
  serialize = serializeOperationWithNestedStructureResponse;
  deserialize = deserializeOperationWithNestedStructureRequest;

  isOperationError(error: any): error is OperationWithNestedStructureErrors {
    return false;
  };

  serializeError(error: OperationWithNestedStructureErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }

}

export const getOperationWithNestedStructureHandler = <Context>(operation: __Operation<OperationWithNestedStructureServerInput, OperationWithNestedStructureServerOutput, Context>, customizer: __ValidationCustomizer<"OperationWithNestedStructure">): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "OperationWithNestedStructure">([
    new httpbinding.UriSpec<"RestJson", "OperationWithNestedStructure">(
      'POST',
      [
        { type: 'path_literal', value: "OperationWithNestedStructure" },
      ],
      [
      ],
      { service: "RestJson", operation: "OperationWithNestedStructure" }),
  ]);
  return new OperationWithNestedStructureHandler(operation, mux, new OperationWithNestedStructureSerializer(), serializeFrameworkException, customizer);
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
export class OperationWithNestedStructureHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<OperationWithNestedStructureServerInput, OperationWithNestedStructureServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "OperationWithNestedStructure">;
  private readonly serializer: __OperationSerializer<RestJsonService<Context>, "OperationWithNestedStructure", OperationWithNestedStructureErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"OperationWithNestedStructure">;
  /**
   * Construct a OperationWithNestedStructure handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for OperationWithNestedStructure
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for OperationWithNestedStructure that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<OperationWithNestedStructureServerInput, OperationWithNestedStructureServerOutput, Context>,
    mux: __Mux<"RestJson", "OperationWithNestedStructure">,
    serializer: __OperationSerializer<RestJsonService<Context>, "OperationWithNestedStructure", OperationWithNestedStructureErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"OperationWithNestedStructure">
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
      console.log('Received a request that did not match aws.protocoltests.restjson#RestJson.OperationWithNestedStructure. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "OperationWithNestedStructure", this.serializer, this.operation, this.serializeFrameworkException, OperationWithNestedStructureServerInput.validate, this.validationCustomizer);
  }
}
