// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampQueryDefaultInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampQueryDefaultRequest,
  serializeMalformedTimestampQueryDefaultResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampQueryDefault<Context> = __Operation<
  MalformedTimestampQueryDefaultServerInput,
  MalformedTimestampQueryDefaultServerOutput,
  Context
>;

export interface MalformedTimestampQueryDefaultServerInput extends MalformedTimestampQueryDefaultInput {}
export namespace MalformedTimestampQueryDefaultServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampQueryDefaultInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampQueryDefaultInput.validate;
}
export interface MalformedTimestampQueryDefaultServerOutput {}

export type MalformedTimestampQueryDefaultErrors = never;

export class MalformedTimestampQueryDefaultSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampQueryDefault", MalformedTimestampQueryDefaultErrors>
{
  serialize = serializeMalformedTimestampQueryDefaultResponse;
  deserialize = deserializeMalformedTimestampQueryDefaultRequest;

  isOperationError(error: any): error is MalformedTimestampQueryDefaultErrors {
    return false;
  }

  serializeError(error: MalformedTimestampQueryDefaultErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
