import { HttpResponseCodeOutput } from "../../models/models_0";
import { deserializeHttpResponseCodeRequest, serializeHttpResponseCodeResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpResponseCode = __Operation<HttpResponseCodeServerInput, HttpResponseCodeServerOutput>;

export type HttpResponseCodeServerInput = {};
export type HttpResponseCodeServerOutput = HttpResponseCodeOutput & __MetadataBearer;

export type HttpResponseCodeErrors = never;

export class HttpResponseCodeSerializer
  implements OperationSerializer<RestJsonService, "HttpResponseCode", HttpResponseCodeErrors> {
  serialize = serializeHttpResponseCodeResponse;
  deserialize = deserializeHttpResponseCodeRequest;

  isOperationError(error: any): error is HttpResponseCodeErrors {
    return false;
  }

  serializeError(error: HttpResponseCodeErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
