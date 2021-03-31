import { HttpPayloadWithStructureInputOutput } from "../../models/models_0";
import {
  deserializeHttpPayloadWithStructureRequest,
  serializeHttpPayloadWithStructureResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpPayloadWithStructure = __Operation<
  HttpPayloadWithStructureServerInput,
  HttpPayloadWithStructureServerOutput
>;

export type HttpPayloadWithStructureServerInput = HttpPayloadWithStructureInputOutput;
export type HttpPayloadWithStructureServerOutput = HttpPayloadWithStructureInputOutput & __MetadataBearer;

export type HttpPayloadWithStructureErrors = never;

export class HttpPayloadWithStructureSerializer
  implements OperationSerializer<RestJsonService, "HttpPayloadWithStructure", HttpPayloadWithStructureErrors> {
  serialize = serializeHttpPayloadWithStructureResponse;
  deserialize = deserializeHttpPayloadWithStructureRequest;

  isOperationError(error: any): error is HttpPayloadWithStructureErrors {
    return false;
  }

  serializeError(error: HttpPayloadWithStructureErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
