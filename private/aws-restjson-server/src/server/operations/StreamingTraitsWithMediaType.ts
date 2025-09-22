// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { StreamingTraitsWithMediaTypeInputOutput } from "../../models/models_0";
import {
  deserializeStreamingTraitsWithMediaTypeRequest,
  serializeStreamingTraitsWithMediaTypeResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type StreamingTraitsWithMediaType<Context> = __Operation<
  StreamingTraitsWithMediaTypeServerInput,
  StreamingTraitsWithMediaTypeServerOutput,
  Context
>;

export interface StreamingTraitsWithMediaTypeServerInput extends StreamingTraitsWithMediaTypeInputOutput {}
export namespace StreamingTraitsWithMediaTypeServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof StreamingTraitsWithMediaTypeInputOutput.validate>[0]
  ) => __ValidationFailure[] = StreamingTraitsWithMediaTypeInputOutput.validate;
}
export interface StreamingTraitsWithMediaTypeServerOutput extends StreamingTraitsWithMediaTypeInputOutput {}

export type StreamingTraitsWithMediaTypeErrors = never;

export class StreamingTraitsWithMediaTypeSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "StreamingTraitsWithMediaType", StreamingTraitsWithMediaTypeErrors>
{
  serialize = serializeStreamingTraitsWithMediaTypeResponse;
  deserialize = deserializeStreamingTraitsWithMediaTypeRequest;

  isOperationError(error: any): error is StreamingTraitsWithMediaTypeErrors {
    return false;
  }

  serializeError(error: StreamingTraitsWithMediaTypeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
