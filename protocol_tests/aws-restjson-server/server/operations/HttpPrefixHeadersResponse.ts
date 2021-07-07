import { HttpPrefixHeadersResponseOutput } from "../../models/models_0";
import {
  deserializeHttpPrefixHeadersResponseRequest,
  serializeFrameworkException,
  serializeHttpPrefixHeadersResponseResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import {
  ServerSerdeContext,
  InternalFailureException as __InternalFailureException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
  httpbinding,
} from "@aws-smithy/server-common";

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
  serializer: __OperationSerializer<S, O, __SmithyException>,
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
  } catch (error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log("Received an unexpected error", error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class HttpPrefixHeadersResponseHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<
    HttpPrefixHeadersResponseServerInput,
    HttpPrefixHeadersResponseServerOutput,
    Context
  >;
  private readonly mux: __Mux<"RestJson", "HttpPrefixHeadersResponse">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "HttpPrefixHeadersResponse",
    HttpPrefixHeadersResponseErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"HttpPrefixHeadersResponse">;
  /**
   * Construct a HttpPrefixHeadersResponse handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for HttpPrefixHeadersResponse
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for HttpPrefixHeadersResponse that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<HttpPrefixHeadersResponseServerInput, HttpPrefixHeadersResponseServerOutput, Context>,
    mux: __Mux<"RestJson", "HttpPrefixHeadersResponse">,
    serializer: __OperationSerializer<
      RestJsonService<Context>,
      "HttpPrefixHeadersResponse",
      HttpPrefixHeadersResponseErrors
    >,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"HttpPrefixHeadersResponse">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.HttpPrefixHeadersResponse. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "HttpPrefixHeadersResponse",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      HttpPrefixHeadersResponseServerInput.validate,
      this.validationCustomizer
    );
  }
}

export type HttpPrefixHeadersResponse<Context> = __Operation<
  HttpPrefixHeadersResponseServerInput,
  HttpPrefixHeadersResponseServerOutput,
  Context
>;

export interface HttpPrefixHeadersResponseServerInput {}
export namespace HttpPrefixHeadersResponseServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface HttpPrefixHeadersResponseServerOutput extends HttpPrefixHeadersResponseOutput, __MetadataBearer {}

export type HttpPrefixHeadersResponseErrors = never;

export class HttpPrefixHeadersResponseSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpPrefixHeadersResponse", HttpPrefixHeadersResponseErrors>
{
  serialize = serializeHttpPrefixHeadersResponseResponse;
  deserialize = deserializeHttpPrefixHeadersResponseRequest;

  isOperationError(error: any): error is HttpPrefixHeadersResponseErrors {
    return false;
  }

  serializeError(error: HttpPrefixHeadersResponseErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getHttpPrefixHeadersResponseHandler = <Context>(
  operation: __Operation<HttpPrefixHeadersResponseServerInput, HttpPrefixHeadersResponseServerOutput, Context>,
  customizer: __ValidationCustomizer<"HttpPrefixHeadersResponse">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "HttpPrefixHeadersResponse">([
    new httpbinding.UriSpec<"RestJson", "HttpPrefixHeadersResponse">(
      "GET",
      [{ type: "path_literal", value: "HttpPrefixHeadersResponse" }],
      [],
      { service: "RestJson", operation: "HttpPrefixHeadersResponse" }
    ),
  ]);
  return new HttpPrefixHeadersResponseHandler(
    operation,
    mux,
    new HttpPrefixHeadersResponseSerializer(),
    serializeFrameworkException,
    customizer
  );
};
