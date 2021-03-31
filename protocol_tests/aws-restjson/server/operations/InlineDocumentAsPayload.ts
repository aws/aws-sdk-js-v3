import { InlineDocumentAsPayloadInputOutput } from "../../models/models_0";
import {
  deserializeInlineDocumentAsPayloadRequest,
  serializeInlineDocumentAsPayloadResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type InlineDocumentAsPayload = __Operation<
  InlineDocumentAsPayloadServerInput,
  InlineDocumentAsPayloadServerOutput
>;

export type InlineDocumentAsPayloadServerInput = InlineDocumentAsPayloadInputOutput;
export type InlineDocumentAsPayloadServerOutput = InlineDocumentAsPayloadInputOutput & __MetadataBearer;

export type InlineDocumentAsPayloadErrors = never;

export class InlineDocumentAsPayloadSerializer
  implements OperationSerializer<RestJsonService, "InlineDocumentAsPayload", InlineDocumentAsPayloadErrors> {
  serialize = serializeInlineDocumentAsPayloadResponse;
  deserialize = deserializeInlineDocumentAsPayloadRequest;

  isOperationError(error: any): error is InlineDocumentAsPayloadErrors {
    return false;
  }

  serializeError(error: InlineDocumentAsPayloadErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
