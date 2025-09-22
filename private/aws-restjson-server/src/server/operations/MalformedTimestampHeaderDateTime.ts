// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampHeaderDateTimeInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampHeaderDateTimeRequest,
  serializeMalformedTimestampHeaderDateTimeResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampHeaderDateTime<Context> = __Operation<
  MalformedTimestampHeaderDateTimeServerInput,
  MalformedTimestampHeaderDateTimeServerOutput,
  Context
>;

export interface MalformedTimestampHeaderDateTimeServerInput extends MalformedTimestampHeaderDateTimeInput {}
export namespace MalformedTimestampHeaderDateTimeServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampHeaderDateTimeInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampHeaderDateTimeInput.validate;
}
export interface MalformedTimestampHeaderDateTimeServerOutput {}

export type MalformedTimestampHeaderDateTimeErrors = never;

export class MalformedTimestampHeaderDateTimeSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedTimestampHeaderDateTime",
      MalformedTimestampHeaderDateTimeErrors
    >
{
  serialize = serializeMalformedTimestampHeaderDateTimeResponse;
  deserialize = deserializeMalformedTimestampHeaderDateTimeRequest;

  isOperationError(error: any): error is MalformedTimestampHeaderDateTimeErrors {
    return false;
  }

  serializeError(error: MalformedTimestampHeaderDateTimeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
