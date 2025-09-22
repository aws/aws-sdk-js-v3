// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampBodyHttpDateInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampBodyHttpDateRequest,
  serializeMalformedTimestampBodyHttpDateResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampBodyHttpDate<Context> = __Operation<
  MalformedTimestampBodyHttpDateServerInput,
  MalformedTimestampBodyHttpDateServerOutput,
  Context
>;

export interface MalformedTimestampBodyHttpDateServerInput extends MalformedTimestampBodyHttpDateInput {}
export namespace MalformedTimestampBodyHttpDateServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampBodyHttpDateInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampBodyHttpDateInput.validate;
}
export interface MalformedTimestampBodyHttpDateServerOutput {}

export type MalformedTimestampBodyHttpDateErrors = never;

export class MalformedTimestampBodyHttpDateSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampBodyHttpDate", MalformedTimestampBodyHttpDateErrors>
{
  serialize = serializeMalformedTimestampBodyHttpDateResponse;
  deserialize = deserializeMalformedTimestampBodyHttpDateRequest;

  isOperationError(error: any): error is MalformedTimestampBodyHttpDateErrors {
    return false;
  }

  serializeError(error: MalformedTimestampBodyHttpDateErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
