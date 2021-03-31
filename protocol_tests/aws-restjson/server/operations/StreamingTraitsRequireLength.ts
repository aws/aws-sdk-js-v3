import { StreamingTraitsRequireLengthInputOutput } from "../../models/models_0";
import {
  deserializeStreamingTraitsRequireLengthRequest,
  serializeStreamingTraitsRequireLengthResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type StreamingTraitsRequireLength = __Operation<
  StreamingTraitsRequireLengthServerInput,
  StreamingTraitsRequireLengthServerOutput
>;

export type StreamingTraitsRequireLengthServerInput = Omit<StreamingTraitsRequireLengthInputOutput, "blob"> & {
  blob?: StreamingTraitsRequireLengthInputOutput["blob"] | string | Uint8Array | Buffer;
};
export type StreamingTraitsRequireLengthServerOutput = StreamingTraitsRequireLengthInputOutput & __MetadataBearer;

export type StreamingTraitsRequireLengthErrors = never;

export class StreamingTraitsRequireLengthSerializer
  implements OperationSerializer<RestJsonService, "StreamingTraitsRequireLength", StreamingTraitsRequireLengthErrors> {
  serialize = serializeStreamingTraitsRequireLengthResponse;
  deserialize = deserializeStreamingTraitsRequireLengthRequest;

  isOperationError(error: any): error is StreamingTraitsRequireLengthErrors {
    return false;
  }

  serializeError(
    error: StreamingTraitsRequireLengthErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
