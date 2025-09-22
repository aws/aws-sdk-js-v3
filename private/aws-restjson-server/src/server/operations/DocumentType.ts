// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { DocumentTypeInputOutput } from "../../models/models_0";
import { deserializeDocumentTypeRequest, serializeDocumentTypeResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type DocumentType<Context> = __Operation<DocumentTypeServerInput, DocumentTypeServerOutput, Context>;

export interface DocumentTypeServerInput extends DocumentTypeInputOutput {}
export namespace DocumentTypeServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof DocumentTypeInputOutput.validate>[0]) => __ValidationFailure[] =
    DocumentTypeInputOutput.validate;
}
export interface DocumentTypeServerOutput extends DocumentTypeInputOutput {}

export type DocumentTypeErrors = never;

export class DocumentTypeSerializer
  implements __OperationSerializer<RestJsonService<any>, "DocumentType", DocumentTypeErrors>
{
  serialize = serializeDocumentTypeResponse;
  deserialize = deserializeDocumentTypeRequest;

  isOperationError(error: any): error is DocumentTypeErrors {
    return false;
  }

  serializeError(error: DocumentTypeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
