// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedIntegerInput } from "../../models/models_0";
import { deserializeMalformedIntegerRequest, serializeMalformedIntegerResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedInteger<Context> = __Operation<MalformedIntegerServerInput, MalformedIntegerServerOutput, Context>;

export interface MalformedIntegerServerInput extends MalformedIntegerInput {}
export namespace MalformedIntegerServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedIntegerInput.validate>[0]) => __ValidationFailure[] =
    MalformedIntegerInput.validate;
}
export interface MalformedIntegerServerOutput {}

export type MalformedIntegerErrors = never;

export class MalformedIntegerSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedInteger", MalformedIntegerErrors>
{
  serialize = serializeMalformedIntegerResponse;
  deserialize = deserializeMalformedIntegerRequest;

  isOperationError(error: any): error is MalformedIntegerErrors {
    return false;
  }

  serializeError(error: MalformedIntegerErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
