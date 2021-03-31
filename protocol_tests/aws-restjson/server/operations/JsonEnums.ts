import { JsonEnumsInputOutput } from "../../models/models_0";
import { deserializeJsonEnumsRequest, serializeJsonEnumsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type JsonEnums = __Operation<JsonEnumsServerInput, JsonEnumsServerOutput>;

export type JsonEnumsServerInput = JsonEnumsInputOutput;
export type JsonEnumsServerOutput = JsonEnumsInputOutput & __MetadataBearer;

export type JsonEnumsErrors = never;

export class JsonEnumsSerializer implements OperationSerializer<RestJsonService, "JsonEnums", JsonEnumsErrors> {
  serialize = serializeJsonEnumsResponse;
  deserialize = deserializeJsonEnumsRequest;

  isOperationError(error: any): error is JsonEnumsErrors {
    return false;
  }

  serializeError(error: JsonEnumsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
