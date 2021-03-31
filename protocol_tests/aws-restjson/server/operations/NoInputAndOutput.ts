import { NoInputAndOutputOutput } from "../../models/models_0";
import { deserializeNoInputAndOutputRequest, serializeNoInputAndOutputResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type NoInputAndOutput = __Operation<NoInputAndOutputServerInput, NoInputAndOutputServerOutput>;

export type NoInputAndOutputServerInput = {};
export type NoInputAndOutputServerOutput = NoInputAndOutputOutput & __MetadataBearer;

export type NoInputAndOutputErrors = never;

export class NoInputAndOutputSerializer
  implements OperationSerializer<RestJsonService, "NoInputAndOutput", NoInputAndOutputErrors> {
  serialize = serializeNoInputAndOutputResponse;
  deserialize = deserializeNoInputAndOutputRequest;

  isOperationError(error: any): error is NoInputAndOutputErrors {
    return false;
  }

  serializeError(error: NoInputAndOutputErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
