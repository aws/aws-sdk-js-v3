import {
  deserializeNoInputAndNoOutputRequest,
  serializeNoInputAndNoOutputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type NoInputAndNoOutput = __Operation<NoInputAndNoOutputServerInput, NoInputAndNoOutputServerOutput>;

export type NoInputAndNoOutputServerInput = {};
export type NoInputAndNoOutputServerOutput = __MetadataBearer;

export type NoInputAndNoOutputErrors = never;

export class NoInputAndNoOutputSerializer
  implements OperationSerializer<RestJsonService, "NoInputAndNoOutput", NoInputAndNoOutputErrors> {
  serialize = serializeNoInputAndNoOutputResponse;
  deserialize = deserializeNoInputAndNoOutputRequest;

  isOperationError(error: any): error is NoInputAndNoOutputErrors {
    return false;
  }

  serializeError(error: NoInputAndNoOutputErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
