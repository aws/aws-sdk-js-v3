// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampPathDefaultInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampPathDefaultRequest,
  serializeMalformedTimestampPathDefaultResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampPathDefault<Context> = __Operation<
  MalformedTimestampPathDefaultServerInput,
  MalformedTimestampPathDefaultServerOutput,
  Context
>;

export interface MalformedTimestampPathDefaultServerInput extends MalformedTimestampPathDefaultInput {}
export namespace MalformedTimestampPathDefaultServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampPathDefaultInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampPathDefaultInput.validate;
}
export interface MalformedTimestampPathDefaultServerOutput {}

export type MalformedTimestampPathDefaultErrors = never;

export class MalformedTimestampPathDefaultSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampPathDefault", MalformedTimestampPathDefaultErrors>
{
  serialize = serializeMalformedTimestampPathDefaultResponse;
  deserialize = deserializeMalformedTimestampPathDefaultRequest;

  isOperationError(error: any): error is MalformedTimestampPathDefaultErrors {
    return false;
  }

  serializeError(error: MalformedTimestampPathDefaultErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
