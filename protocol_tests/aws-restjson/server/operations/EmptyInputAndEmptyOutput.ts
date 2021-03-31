import { EmptyInputAndEmptyOutputInput, EmptyInputAndEmptyOutputOutput } from "../../models/models_0";
import {
  deserializeEmptyInputAndEmptyOutputRequest,
  serializeEmptyInputAndEmptyOutputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type EmptyInputAndEmptyOutput = __Operation<
  EmptyInputAndEmptyOutputServerInput,
  EmptyInputAndEmptyOutputServerOutput
>;

export type EmptyInputAndEmptyOutputServerInput = EmptyInputAndEmptyOutputInput;
export type EmptyInputAndEmptyOutputServerOutput = EmptyInputAndEmptyOutputOutput & __MetadataBearer;

export type EmptyInputAndEmptyOutputErrors = never;

export class EmptyInputAndEmptyOutputSerializer
  implements OperationSerializer<RestJsonService, "EmptyInputAndEmptyOutput", EmptyInputAndEmptyOutputErrors> {
  serialize = serializeEmptyInputAndEmptyOutputResponse;
  deserialize = deserializeEmptyInputAndEmptyOutputRequest;

  isOperationError(error: any): error is EmptyInputAndEmptyOutputErrors {
    return false;
  }

  serializeError(error: EmptyInputAndEmptyOutputErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
