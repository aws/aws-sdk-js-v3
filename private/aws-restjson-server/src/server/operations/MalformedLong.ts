// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedLongInput } from "../../models/models_0";
import { deserializeMalformedLongRequest, serializeMalformedLongResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedLong<Context> = __Operation<MalformedLongServerInput, MalformedLongServerOutput, Context>;

export interface MalformedLongServerInput extends MalformedLongInput {}
export namespace MalformedLongServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedLongInput.validate>[0]) => __ValidationFailure[] =
    MalformedLongInput.validate;
}
export interface MalformedLongServerOutput {}

export type MalformedLongErrors = never;

export class MalformedLongSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedLong", MalformedLongErrors>
{
  serialize = serializeMalformedLongResponse;
  deserialize = deserializeMalformedLongRequest;

  isOperationError(error: any): error is MalformedLongErrors {
    return false;
  }

  serializeError(error: MalformedLongErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
