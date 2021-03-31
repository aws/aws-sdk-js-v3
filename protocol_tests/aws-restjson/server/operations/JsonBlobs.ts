import { JsonBlobsInputOutput } from "../../models/models_0";
import { deserializeJsonBlobsRequest, serializeJsonBlobsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type JsonBlobs = __Operation<JsonBlobsServerInput, JsonBlobsServerOutput>;

export type JsonBlobsServerInput = JsonBlobsInputOutput;
export type JsonBlobsServerOutput = JsonBlobsInputOutput & __MetadataBearer;

export type JsonBlobsErrors = never;

export class JsonBlobsSerializer implements OperationSerializer<RestJsonService, "JsonBlobs", JsonBlobsErrors> {
  serialize = serializeJsonBlobsResponse;
  deserialize = deserializeJsonBlobsRequest;

  isOperationError(error: any): error is JsonBlobsErrors {
    return false;
  }

  serializeError(error: JsonBlobsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
