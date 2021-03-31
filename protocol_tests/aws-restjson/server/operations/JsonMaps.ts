import { JsonMapsInputOutput } from "../../models/models_0";
import { deserializeJsonMapsRequest, serializeJsonMapsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type JsonMaps = __Operation<JsonMapsServerInput, JsonMapsServerOutput>;

export type JsonMapsServerInput = JsonMapsInputOutput;
export type JsonMapsServerOutput = JsonMapsInputOutput & __MetadataBearer;

export type JsonMapsErrors = never;

export class JsonMapsSerializer implements OperationSerializer<RestJsonService, "JsonMaps", JsonMapsErrors> {
  serialize = serializeJsonMapsResponse;
  deserialize = deserializeJsonMapsRequest;

  isOperationError(error: any): error is JsonMapsErrors {
    return false;
  }

  serializeError(error: JsonMapsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
