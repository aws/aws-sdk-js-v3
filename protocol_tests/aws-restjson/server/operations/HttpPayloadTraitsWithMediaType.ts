import { HttpPayloadTraitsWithMediaTypeInputOutput } from "../../models/models_0";
import {
  deserializeHttpPayloadTraitsWithMediaTypeRequest,
  serializeHttpPayloadTraitsWithMediaTypeResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpPayloadTraitsWithMediaType = __Operation<
  HttpPayloadTraitsWithMediaTypeServerInput,
  HttpPayloadTraitsWithMediaTypeServerOutput
>;

export type HttpPayloadTraitsWithMediaTypeServerInput = HttpPayloadTraitsWithMediaTypeInputOutput;
export type HttpPayloadTraitsWithMediaTypeServerOutput = HttpPayloadTraitsWithMediaTypeInputOutput & __MetadataBearer;

export type HttpPayloadTraitsWithMediaTypeErrors = never;

export class HttpPayloadTraitsWithMediaTypeSerializer
  implements
    OperationSerializer<RestJsonService, "HttpPayloadTraitsWithMediaType", HttpPayloadTraitsWithMediaTypeErrors> {
  serialize = serializeHttpPayloadTraitsWithMediaTypeResponse;
  deserialize = deserializeHttpPayloadTraitsWithMediaTypeRequest;

  isOperationError(error: any): error is HttpPayloadTraitsWithMediaTypeErrors {
    return false;
  }

  serializeError(
    error: HttpPayloadTraitsWithMediaTypeErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
