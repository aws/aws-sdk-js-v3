// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { DocumentTypeAsMapValueInputOutput } from "../../models/models_0";
import {
  deserializeDocumentTypeAsMapValueRequest,
  serializeDocumentTypeAsMapValueResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type DocumentTypeAsMapValue<Context> = __Operation<
  DocumentTypeAsMapValueServerInput,
  DocumentTypeAsMapValueServerOutput,
  Context
>;

export interface DocumentTypeAsMapValueServerInput extends DocumentTypeAsMapValueInputOutput {}
export namespace DocumentTypeAsMapValueServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof DocumentTypeAsMapValueInputOutput.validate>[0]
  ) => __ValidationFailure[] = DocumentTypeAsMapValueInputOutput.validate;
}
export interface DocumentTypeAsMapValueServerOutput extends DocumentTypeAsMapValueInputOutput {}

export type DocumentTypeAsMapValueErrors = never;

export class DocumentTypeAsMapValueSerializer
  implements __OperationSerializer<RestJsonService<any>, "DocumentTypeAsMapValue", DocumentTypeAsMapValueErrors>
{
  serialize = serializeDocumentTypeAsMapValueResponse;
  deserialize = deserializeDocumentTypeAsMapValueRequest;

  isOperationError(error: any): error is DocumentTypeAsMapValueErrors {
    return false;
  }

  serializeError(error: DocumentTypeAsMapValueErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
