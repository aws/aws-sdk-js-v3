import { JsonTimestampsInputOutput } from "../../models/models_0";
import { deserializeJsonTimestampsRequest, serializeJsonTimestampsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type JsonTimestamps = __Operation<JsonTimestampsServerInput, JsonTimestampsServerOutput>;

export type JsonTimestampsServerInput = JsonTimestampsInputOutput;
export type JsonTimestampsServerOutput = JsonTimestampsInputOutput & __MetadataBearer;

export type JsonTimestampsErrors = never;

export class JsonTimestampsSerializer
  implements OperationSerializer<RestJsonService, "JsonTimestamps", JsonTimestampsErrors> {
  serialize = serializeJsonTimestampsResponse;
  deserialize = deserializeJsonTimestampsRequest;

  isOperationError(error: any): error is JsonTimestampsErrors {
    return false;
  }

  serializeError(error: JsonTimestampsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
