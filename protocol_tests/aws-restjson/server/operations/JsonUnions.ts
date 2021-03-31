import { UnionInputOutput } from "../../models/models_0";
import { deserializeJsonUnionsRequest, serializeJsonUnionsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type JsonUnions = __Operation<JsonUnionsServerInput, JsonUnionsServerOutput>;

export type JsonUnionsServerInput = UnionInputOutput;
export type JsonUnionsServerOutput = UnionInputOutput & __MetadataBearer;

export type JsonUnionsErrors = never;

export class JsonUnionsSerializer implements OperationSerializer<RestJsonService, "JsonUnions", JsonUnionsErrors> {
  serialize = serializeJsonUnionsResponse;
  deserialize = deserializeJsonUnionsRequest;

  isOperationError(error: any): error is JsonUnionsErrors {
    return false;
  }

  serializeError(error: JsonUnionsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
