// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampQueryHttpDateInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampQueryHttpDateRequest,
  serializeMalformedTimestampQueryHttpDateResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampQueryHttpDate<Context> = __Operation<
  MalformedTimestampQueryHttpDateServerInput,
  MalformedTimestampQueryHttpDateServerOutput,
  Context
>;

export interface MalformedTimestampQueryHttpDateServerInput extends MalformedTimestampQueryHttpDateInput {}
export namespace MalformedTimestampQueryHttpDateServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampQueryHttpDateInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampQueryHttpDateInput.validate;
}
export interface MalformedTimestampQueryHttpDateServerOutput {}

export type MalformedTimestampQueryHttpDateErrors = never;

export class MalformedTimestampQueryHttpDateSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedTimestampQueryHttpDate",
      MalformedTimestampQueryHttpDateErrors
    >
{
  serialize = serializeMalformedTimestampQueryHttpDateResponse;
  deserialize = deserializeMalformedTimestampQueryHttpDateRequest;

  isOperationError(error: any): error is MalformedTimestampQueryHttpDateErrors {
    return false;
  }

  serializeError(error: MalformedTimestampQueryHttpDateErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
