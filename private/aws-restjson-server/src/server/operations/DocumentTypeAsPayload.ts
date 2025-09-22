// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { DocumentTypeAsPayloadInputOutput } from "../../models/models_0";
import {
  deserializeDocumentTypeAsPayloadRequest,
  serializeDocumentTypeAsPayloadResponse,
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
