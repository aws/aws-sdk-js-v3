// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampBodyDefaultInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampBodyDefaultRequest,
  serializeMalformedTimestampBodyDefaultResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampBodyDefault<Context> = __Operation<
  MalformedTimestampBodyDefaultServerInput,
  MalformedTimestampBodyDefaultServerOutput,
  Context
>;

export interface MalformedTimestampBodyDefaultServerInput extends MalformedTimestampBodyDefaultInput {}
export namespace MalformedTimestampBodyDefaultServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampBodyDefaultInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampBodyDefaultInput.validate;
}
export interface MalformedTimestampBodyDefaultServerOutput {}

export type MalformedTimestampBodyDefaultErrors = never;

export class MalformedTimestampBodyDefaultSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampBodyDefault", MalformedTimestampBodyDefaultErrors>
{
  serialize = serializeMalformedTimestampBodyDefaultResponse;
  deserialize = deserializeMalformedTimestampBodyDefaultRequest;

  isOperationError(error: any): error is MalformedTimestampBodyDefaultErrors {
    return false;
  }

  serializeError(error: MalformedTimestampBodyDefaultErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
