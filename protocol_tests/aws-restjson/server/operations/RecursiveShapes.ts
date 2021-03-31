import { RecursiveShapesInputOutput } from "../../models/models_0";
import { deserializeRecursiveShapesRequest, serializeRecursiveShapesResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type RecursiveShapes = __Operation<RecursiveShapesServerInput, RecursiveShapesServerOutput>;

export type RecursiveShapesServerInput = RecursiveShapesInputOutput;
export type RecursiveShapesServerOutput = RecursiveShapesInputOutput & __MetadataBearer;

export type RecursiveShapesErrors = never;

export class RecursiveShapesSerializer
  implements OperationSerializer<RestJsonService, "RecursiveShapes", RecursiveShapesErrors> {
  serialize = serializeRecursiveShapesResponse;
  deserialize = deserializeRecursiveShapesRequest;

  isOperationError(error: any): error is RecursiveShapesErrors {
    return false;
  }

  serializeError(error: RecursiveShapesErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
