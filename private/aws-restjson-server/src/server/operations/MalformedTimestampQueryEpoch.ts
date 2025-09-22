// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampQueryEpochInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampQueryEpochRequest,
  serializeMalformedTimestampQueryEpochResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampQueryEpoch<Context> = __Operation<
  MalformedTimestampQueryEpochServerInput,
  MalformedTimestampQueryEpochServerOutput,
  Context
>;

export interface MalformedTimestampQueryEpochServerInput extends MalformedTimestampQueryEpochInput {}
export namespace MalformedTimestampQueryEpochServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampQueryEpochInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampQueryEpochInput.validate;
}
export interface MalformedTimestampQueryEpochServerOutput {}

export type MalformedTimestampQueryEpochErrors = never;

export class MalformedTimestampQueryEpochSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampQueryEpoch", MalformedTimestampQueryEpochErrors>
{
  serialize = serializeMalformedTimestampQueryEpochResponse;
  deserialize = deserializeMalformedTimestampQueryEpochRequest;

  isOperationError(error: any): error is MalformedTimestampQueryEpochErrors {
    return false;
  }

  serializeError(error: MalformedTimestampQueryEpochErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
