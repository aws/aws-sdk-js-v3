// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampBodyDateTimeInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampBodyDateTimeRequest,
  serializeMalformedTimestampBodyDateTimeResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampBodyDateTime<Context> = __Operation<
  MalformedTimestampBodyDateTimeServerInput,
  MalformedTimestampBodyDateTimeServerOutput,
  Context
>;

export interface MalformedTimestampBodyDateTimeServerInput extends MalformedTimestampBodyDateTimeInput {}
export namespace MalformedTimestampBodyDateTimeServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampBodyDateTimeInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampBodyDateTimeInput.validate;
}
export interface MalformedTimestampBodyDateTimeServerOutput {}

export type MalformedTimestampBodyDateTimeErrors = never;

export class MalformedTimestampBodyDateTimeSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampBodyDateTime", MalformedTimestampBodyDateTimeErrors>
{
  serialize = serializeMalformedTimestampBodyDateTimeResponse;
  deserialize = deserializeMalformedTimestampBodyDateTimeRequest;

  isOperationError(error: any): error is MalformedTimestampBodyDateTimeErrors {
    return false;
  }

  serializeError(error: MalformedTimestampBodyDateTimeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
