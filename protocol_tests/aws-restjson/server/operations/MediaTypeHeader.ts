import { MediaTypeHeaderInput, MediaTypeHeaderOutput } from "../../models/models_0";
import { deserializeMediaTypeHeaderRequest, serializeMediaTypeHeaderResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type MediaTypeHeader = __Operation<MediaTypeHeaderServerInput, MediaTypeHeaderServerOutput>;

export type MediaTypeHeaderServerInput = MediaTypeHeaderInput;
export type MediaTypeHeaderServerOutput = MediaTypeHeaderOutput & __MetadataBearer;

export type MediaTypeHeaderErrors = never;

export class MediaTypeHeaderSerializer
  implements OperationSerializer<RestJsonService, "MediaTypeHeader", MediaTypeHeaderErrors> {
  serialize = serializeMediaTypeHeaderResponse;
  deserialize = deserializeMediaTypeHeaderRequest;

  isOperationError(error: any): error is MediaTypeHeaderErrors {
    return false;
  }

  serializeError(error: MediaTypeHeaderErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
