// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedByteInput } from "../../models/models_0";
import { deserializeMalformedByteRequest, serializeMalformedByteResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedByte<Context> = __Operation<MalformedByteServerInput, MalformedByteServerOutput, Context>;

export interface MalformedByteServerInput extends MalformedByteInput {}
export namespace MalformedByteServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedByteInput.validate>[0]) => __ValidationFailure[] =
    MalformedByteInput.validate;
}
export interface MalformedByteServerOutput {}

export type MalformedByteErrors = never;

export class MalformedByteSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedByte", MalformedByteErrors>
{
  serialize = serializeMalformedByteResponse;
  deserialize = deserializeMalformedByteRequest;

  isOperationError(error: any): error is MalformedByteErrors {
    return false;
  }

  serializeError(error: MalformedByteErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
