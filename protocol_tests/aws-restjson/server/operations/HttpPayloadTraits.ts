import { HttpPayloadTraitsInputOutput } from "../../models/models_0";
import { deserializeHttpPayloadTraitsRequest, serializeHttpPayloadTraitsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpPayloadTraits = __Operation<HttpPayloadTraitsServerInput, HttpPayloadTraitsServerOutput>;

export type HttpPayloadTraitsServerInput = HttpPayloadTraitsInputOutput;
export type HttpPayloadTraitsServerOutput = HttpPayloadTraitsInputOutput & __MetadataBearer;

export type HttpPayloadTraitsErrors = never;

export class HttpPayloadTraitsSerializer
  implements OperationSerializer<RestJsonService, "HttpPayloadTraits", HttpPayloadTraitsErrors> {
  serialize = serializeHttpPayloadTraitsResponse;
  deserialize = deserializeHttpPayloadTraitsRequest;

  isOperationError(error: any): error is HttpPayloadTraitsErrors {
    return false;
  }

  serializeError(error: HttpPayloadTraitsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
