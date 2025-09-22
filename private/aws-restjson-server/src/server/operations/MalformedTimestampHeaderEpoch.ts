// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedTimestampHeaderEpochInput } from "../../models/models_0";
import {
  deserializeMalformedTimestampHeaderEpochRequest,
  serializeMalformedTimestampHeaderEpochResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedTimestampHeaderEpoch<Context> = __Operation<
  MalformedTimestampHeaderEpochServerInput,
  MalformedTimestampHeaderEpochServerOutput,
  Context
>;

export interface MalformedTimestampHeaderEpochServerInput extends MalformedTimestampHeaderEpochInput {}
export namespace MalformedTimestampHeaderEpochServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedTimestampHeaderEpochInput.validate>[0]
  ) => __ValidationFailure[] = MalformedTimestampHeaderEpochInput.validate;
}
export interface MalformedTimestampHeaderEpochServerOutput {}

export type MalformedTimestampHeaderEpochErrors = never;

export class MalformedTimestampHeaderEpochSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedTimestampHeaderEpoch", MalformedTimestampHeaderEpochErrors>
{
  serialize = serializeMalformedTimestampHeaderEpochResponse;
  deserialize = deserializeMalformedTimestampHeaderEpochRequest;

  isOperationError(error: any): error is MalformedTimestampHeaderEpochErrors {
    return false;
  }

  serializeError(error: MalformedTimestampHeaderEpochErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
