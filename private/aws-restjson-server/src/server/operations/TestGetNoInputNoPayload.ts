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

import { TestNoPayloadInputOutput } from "../../models/models_0";
import {
  deserializeTestGetNoInputNoPayloadRequest,
  serializeFrameworkException,
  serializeTestGetNoInputNoPayloadResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestGetNoInputNoPayload<Context> = __Operation<
  TestGetNoInputNoPayloadServerInput,
  TestGetNoInputNoPayloadServerOutput,
  Context
>;

export interface TestGetNoInputNoPayloadServerInput {}
export namespace TestGetNoInputNoPayloadServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface TestGetNoInputNoPayloadServerOutput extends TestNoPayloadInputOutput {}

export type TestGetNoInputNoPayloadErrors = never;

export class TestGetNoInputNoPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestGetNoInputNoPayload", TestGetNoInputNoPayloadErrors>
{
  serialize = serializeTestGetNoInputNoPayloadResponse;
  deserialize = deserializeTestGetNoInputNoPayloadRequest;

  isOperationError(error: any): error is TestGetNoInputNoPayloadErrors {
    return false;
  }

  serializeError(error: TestGetNoInputNoPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getTestGetNoInputNoPayloadHandler = <Context>(
  operation: __Operation<TestGetNoInputNoPayloadServerInput, TestGetNoInputNoPayloadServerOutput, Context>,
  customizer: __ValidationCustomizer<"TestGetNoInputNoPayload">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "TestGetNoInputNoPayload">([
    new httpbinding.UriSpec<"RestJson", "TestGetNoInputNoPayload">(
      "GET",
      [{ type: "path_literal", value: "no_input_no_payload" }],
      [],
      { service: "RestJson", operation: "TestGetNoInputNoPayload" }
    ),
  ]);
  return new TestGetNoInputNoPayloadHandler(
    operation,
    mux,
    new TestGetNoInputNoPayloadSerializer(),
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
export class TestGetNoInputNoPayloadHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<
    TestGetNoInputNoPayloadServerInput,
    TestGetNoInputNoPayloadServerOutput,
    Context
  >;
  private readonly mux: __Mux<"RestJson", "TestGetNoInputNoPayload">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "TestGetNoInputNoPayload",
    TestGetNoInputNoPayloadErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"TestGetNoInputNoPayload">;
  /**
   * Construct a TestGetNoInputNoPayload handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for TestGetNoInputNoPayload
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for TestGetNoInputNoPayload that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<TestGetNoInputNoPayloadServerInput, TestGetNoInputNoPayloadServerOutput, Context>,
    mux: __Mux<"RestJson", "TestGetNoInputNoPayload">,
    serializer: __OperationSerializer<
      RestJsonService<Context>,
      "TestGetNoInputNoPayload",
      TestGetNoInputNoPayloadErrors
    >,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"TestGetNoInputNoPayload">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.TestGetNoInputNoPayload. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "TestGetNoInputNoPayload",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      TestGetNoInputNoPayloadServerInput.validate,
      this.validationCustomizer
    );
  }
}
