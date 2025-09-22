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

import { DocumentTypeAsPayloadInputOutput } from "../../models/models_0";
import {
  deserializeDocumentTypeAsPayloadRequest,
  serializeDocumentTypeAsPayloadResponse,
  serializeFrameworkException,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type DocumentTypeAsPayload<Context> = __Operation<
  DocumentTypeAsPayloadServerInput,
  DocumentTypeAsPayloadServerOutput,
  Context
>;

export interface DocumentTypeAsPayloadServerInput extends DocumentTypeAsPayloadInputOutput {}
export namespace DocumentTypeAsPayloadServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof DocumentTypeAsPayloadInputOutput.validate>[0]
  ) => __ValidationFailure[] = DocumentTypeAsPayloadInputOutput.validate;
}
export interface DocumentTypeAsPayloadServerOutput extends DocumentTypeAsPayloadInputOutput {}

export type DocumentTypeAsPayloadErrors = never;

export class DocumentTypeAsPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "DocumentTypeAsPayload", DocumentTypeAsPayloadErrors>
{
  serialize = serializeDocumentTypeAsPayloadResponse;
  deserialize = deserializeDocumentTypeAsPayloadRequest;

  isOperationError(error: any): error is DocumentTypeAsPayloadErrors {
    return false;
  }

  serializeError(error: DocumentTypeAsPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getDocumentTypeAsPayloadHandler = <Context>(
  operation: __Operation<DocumentTypeAsPayloadServerInput, DocumentTypeAsPayloadServerOutput, Context>,
  customizer: __ValidationCustomizer<"DocumentTypeAsPayload">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "DocumentTypeAsPayload">([
    new httpbinding.UriSpec<"RestJson", "DocumentTypeAsPayload">(
      "PUT",
      [{ type: "path_literal", value: "DocumentTypeAsPayload" }],
      [],
      { service: "RestJson", operation: "DocumentTypeAsPayload" }
    ),
  ]);
  return new DocumentTypeAsPayloadHandler(
    operation,
    mux,
    new DocumentTypeAsPayloadSerializer(),
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
export class DocumentTypeAsPayloadHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<DocumentTypeAsPayloadServerInput, DocumentTypeAsPayloadServerOutput, Context>;
  private readonly mux: __Mux<"RestJson", "DocumentTypeAsPayload">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "DocumentTypeAsPayload",
    DocumentTypeAsPayloadErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"DocumentTypeAsPayload">;
  /**
   * Construct a DocumentTypeAsPayload handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for DocumentTypeAsPayload
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for DocumentTypeAsPayload that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<DocumentTypeAsPayloadServerInput, DocumentTypeAsPayloadServerOutput, Context>,
    mux: __Mux<"RestJson", "DocumentTypeAsPayload">,
    serializer: __OperationSerializer<RestJsonService<Context>, "DocumentTypeAsPayload", DocumentTypeAsPayloadErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"DocumentTypeAsPayload">
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
        "Received a request that did not match aws.protocoltests.restjson#RestJson.DocumentTypeAsPayload. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "DocumentTypeAsPayload",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      DocumentTypeAsPayloadServerInput.validate,
      this.validationCustomizer
    );
  }
}
