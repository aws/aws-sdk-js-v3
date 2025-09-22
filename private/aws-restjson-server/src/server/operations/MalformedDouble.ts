// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedDoubleInput } from "../../models/models_0";
import { deserializeMalformedDoubleRequest, serializeMalformedDoubleResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedDouble<Context> = __Operation<MalformedDoubleServerInput, MalformedDoubleServerOutput, Context>;

export interface MalformedDoubleServerInput extends MalformedDoubleInput {}
export namespace MalformedDoubleServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedDoubleInput.validate>[0]) => __ValidationFailure[] =
    MalformedDoubleInput.validate;
}
export interface MalformedDoubleServerOutput {}

export type MalformedDoubleErrors = never;

export class MalformedDoubleSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedDouble", MalformedDoubleErrors>
{
  serialize = serializeMalformedDoubleResponse;
  deserialize = deserializeMalformedDoubleRequest;

  isOperationError(error: any): error is MalformedDoubleErrors {
    return false;
  }

  serializeError(error: MalformedDoubleErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
