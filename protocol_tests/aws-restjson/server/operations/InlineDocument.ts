import { InlineDocumentInputOutput } from "../../models/models_0";
import { deserializeInlineDocumentRequest, serializeInlineDocumentResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type InlineDocument = __Operation<InlineDocumentServerInput, InlineDocumentServerOutput>;

export type InlineDocumentServerInput = InlineDocumentInputOutput;
export type InlineDocumentServerOutput = InlineDocumentInputOutput & __MetadataBearer;

export type InlineDocumentErrors = never;

export class InlineDocumentSerializer
  implements OperationSerializer<RestJsonService, "InlineDocument", InlineDocumentErrors> {
  serialize = serializeInlineDocumentResponse;
  deserialize = deserializeInlineDocumentRequest;

  isOperationError(error: any): error is InlineDocumentErrors {
    return false;
  }

  serializeError(error: InlineDocumentErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
