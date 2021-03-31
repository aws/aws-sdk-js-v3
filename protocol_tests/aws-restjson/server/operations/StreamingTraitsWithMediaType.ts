import { StreamingTraitsWithMediaTypeInputOutput } from "../../models/models_0";
import {
  deserializeStreamingTraitsWithMediaTypeRequest,
  serializeStreamingTraitsWithMediaTypeResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type StreamingTraitsWithMediaType = __Operation<
  StreamingTraitsWithMediaTypeServerInput,
  StreamingTraitsWithMediaTypeServerOutput
>;

export type StreamingTraitsWithMediaTypeServerInput = Omit<StreamingTraitsWithMediaTypeInputOutput, "blob"> & {
  blob?: StreamingTraitsWithMediaTypeInputOutput["blob"] | string | Uint8Array | Buffer;
};
export type StreamingTraitsWithMediaTypeServerOutput = StreamingTraitsWithMediaTypeInputOutput & __MetadataBearer;

export type StreamingTraitsWithMediaTypeErrors = never;

export class StreamingTraitsWithMediaTypeSerializer
  implements OperationSerializer<RestJsonService, "StreamingTraitsWithMediaType", StreamingTraitsWithMediaTypeErrors> {
  serialize = serializeStreamingTraitsWithMediaTypeResponse;
  deserialize = deserializeStreamingTraitsWithMediaTypeRequest;

  isOperationError(error: any): error is StreamingTraitsWithMediaTypeErrors {
    return false;
  }

  serializeError(
    error: StreamingTraitsWithMediaTypeErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
