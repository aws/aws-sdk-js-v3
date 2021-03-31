import { StreamingTraitsInputOutput } from "../../models/models_0";
import { deserializeStreamingTraitsRequest, serializeStreamingTraitsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type StreamingTraits = __Operation<StreamingTraitsServerInput, StreamingTraitsServerOutput>;

export type StreamingTraitsServerInput = Omit<StreamingTraitsInputOutput, "blob"> & {
  blob?: StreamingTraitsInputOutput["blob"] | string | Uint8Array | Buffer;
};
export type StreamingTraitsServerOutput = StreamingTraitsInputOutput & __MetadataBearer;

export type StreamingTraitsErrors = never;

export class StreamingTraitsSerializer
  implements OperationSerializer<RestJsonService, "StreamingTraits", StreamingTraitsErrors> {
  serialize = serializeStreamingTraitsResponse;
  deserialize = deserializeStreamingTraitsRequest;

  isOperationError(error: any): error is StreamingTraitsErrors {
    return false;
  }

  serializeError(error: StreamingTraitsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
