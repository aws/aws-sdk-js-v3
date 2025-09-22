// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { StreamingTraitsInputOutput } from "../../models/models_0";
import { deserializeStreamingTraitsRequest, serializeStreamingTraitsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type StreamingTraits<Context> = __Operation<StreamingTraitsServerInput, StreamingTraitsServerOutput, Context>;

export interface StreamingTraitsServerInput extends StreamingTraitsInputOutput {}
export namespace StreamingTraitsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof StreamingTraitsInputOutput.validate>[0]) => __ValidationFailure[] =
    StreamingTraitsInputOutput.validate;
}
export interface StreamingTraitsServerOutput extends StreamingTraitsInputOutput {}

export type StreamingTraitsErrors = never;

export class StreamingTraitsSerializer
  implements __OperationSerializer<RestJsonService<any>, "StreamingTraits", StreamingTraitsErrors>
{
  serialize = serializeStreamingTraitsResponse;
  deserialize = deserializeStreamingTraitsRequest;

  isOperationError(error: any): error is StreamingTraitsErrors {
    return false;
  }

  serializeError(error: StreamingTraitsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
