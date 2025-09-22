// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedBooleanInput } from "../../models/models_0";
import { deserializeMalformedBooleanRequest, serializeMalformedBooleanResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedBoolean<Context> = __Operation<MalformedBooleanServerInput, MalformedBooleanServerOutput, Context>;

export interface MalformedBooleanServerInput extends MalformedBooleanInput {}
export namespace MalformedBooleanServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedBooleanInput.validate>[0]) => __ValidationFailure[] =
    MalformedBooleanInput.validate;
}
export interface MalformedBooleanServerOutput {}

export type MalformedBooleanErrors = never;

export class MalformedBooleanSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedBoolean", MalformedBooleanErrors>
{
  serialize = serializeMalformedBooleanResponse;
  deserialize = deserializeMalformedBooleanRequest;

  isOperationError(error: any): error is MalformedBooleanErrors {
    return false;
  }

  serializeError(error: MalformedBooleanErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
