// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { StreamingTraitsRequireLengthInput } from "../../models/models_0";
import {
  deserializeStreamingTraitsRequireLengthRequest,
  serializeStreamingTraitsRequireLengthResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type StreamingTraitsRequireLength<Context> = __Operation<
  StreamingTraitsRequireLengthServerInput,
  StreamingTraitsRequireLengthServerOutput,
  Context
>;

export interface StreamingTraitsRequireLengthServerInput extends StreamingTraitsRequireLengthInput {}
export namespace StreamingTraitsRequireLengthServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof StreamingTraitsRequireLengthInput.validate>[0]
  ) => __ValidationFailure[] = StreamingTraitsRequireLengthInput.validate;
}
export interface StreamingTraitsRequireLengthServerOutput {}

export type StreamingTraitsRequireLengthErrors = never;

export class StreamingTraitsRequireLengthSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "StreamingTraitsRequireLength", StreamingTraitsRequireLengthErrors>
{
  serialize = serializeStreamingTraitsRequireLengthResponse;
  deserialize = deserializeStreamingTraitsRequireLengthRequest;

  isOperationError(error: any): error is StreamingTraitsRequireLengthErrors {
    return false;
  }

  serializeError(error: StreamingTraitsRequireLengthErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
