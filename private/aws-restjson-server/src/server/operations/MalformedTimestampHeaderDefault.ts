// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampHeaderDefaultInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampHeaderDefaultRequest,
  serializeMalformedTimestampHeaderDefaultResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampHeaderDefault<Context> = __Operation<
  MalformedTimestampHeaderDefaultServerInput,
  MalformedTimestampHeaderDefaultServerOutput,
  Context
>;

export interface MalformedTimestampHeaderDefaultServerInput extends MalformedTimestampHeaderDefaultInput {}
export namespace MalformedTimestampHeaderDefaultServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampHeaderDefaultInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampHeaderDefaultInput.validate;
}
export interface MalformedTimestampHeaderDefaultServerOutput {}

export type MalformedTimestampHeaderDefaultErrors = never;

export class MalformedTimestampHeaderDefaultSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedTimestampHeaderDefault",
      MalformedTimestampHeaderDefaultErrors
    >
{
  serialize = serializeMalformedTimestampHeaderDefaultResponse;
  deserialize = deserializeMalformedTimestampHeaderDefaultRequest;

  isOperationError(error: any): error is MalformedTimestampHeaderDefaultErrors {
    return false;
  }

  serializeError(error: MalformedTimestampHeaderDefaultErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
