// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampPathEpochInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampPathEpochRequest,
  serializeMalformedTimestampPathEpochResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampPathEpoch<Context> = __Operation<
  MalformedTimestampPathEpochServerInput,
  MalformedTimestampPathEpochServerOutput,
  Context
>;

export interface MalformedTimestampPathEpochServerInput extends MalformedTimestampPathEpochInput {}
export namespace MalformedTimestampPathEpochServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampPathEpochInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampPathEpochInput.validate;
}
export interface MalformedTimestampPathEpochServerOutput {}

export type MalformedTimestampPathEpochErrors = never;

export class MalformedTimestampPathEpochSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampPathEpoch", MalformedTimestampPathEpochErrors>
{
  serialize = serializeMalformedTimestampPathEpochResponse;
  deserialize = deserializeMalformedTimestampPathEpochRequest;

  isOperationError(error: any): error is MalformedTimestampPathEpochErrors {
    return false;
  }

  serializeError(error: MalformedTimestampPathEpochErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
