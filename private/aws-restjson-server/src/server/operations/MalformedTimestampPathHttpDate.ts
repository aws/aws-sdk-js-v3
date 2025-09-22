// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampPathHttpDateInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampPathHttpDateRequest,
  serializeMalformedTimestampPathHttpDateResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampPathHttpDate<Context> = __Operation<
  MalformedTimestampPathHttpDateServerInput,
  MalformedTimestampPathHttpDateServerOutput,
  Context
>;

export interface MalformedTimestampPathHttpDateServerInput extends MalformedTimestampPathHttpDateInput {}
export namespace MalformedTimestampPathHttpDateServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampPathHttpDateInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampPathHttpDateInput.validate;
}
export interface MalformedTimestampPathHttpDateServerOutput {}

export type MalformedTimestampPathHttpDateErrors = never;

export class MalformedTimestampPathHttpDateSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampPathHttpDate", MalformedTimestampPathHttpDateErrors>
{
  serialize = serializeMalformedTimestampPathHttpDateResponse;
  deserialize = deserializeMalformedTimestampPathHttpDateRequest;

  isOperationError(error: any): error is MalformedTimestampPathHttpDateErrors {
    return false;
  }

  serializeError(error: MalformedTimestampPathHttpDateErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
