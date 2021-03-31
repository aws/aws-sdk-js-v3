import { JsonListsInputOutput } from "../../models/models_0";
import { deserializeJsonListsRequest, serializeJsonListsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type JsonLists = __Operation<JsonListsServerInput, JsonListsServerOutput>;

export type JsonListsServerInput = JsonListsInputOutput;
export type JsonListsServerOutput = JsonListsInputOutput & __MetadataBearer;

export type JsonListsErrors = never;

export class JsonListsSerializer implements OperationSerializer<RestJsonService, "JsonLists", JsonListsErrors> {
  serialize = serializeJsonListsResponse;
  deserialize = deserializeJsonListsRequest;

  isOperationError(error: any): error is JsonListsErrors {
    return false;
  }

  serializeError(error: JsonListsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
