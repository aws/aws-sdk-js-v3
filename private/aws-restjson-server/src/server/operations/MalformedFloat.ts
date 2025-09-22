// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedFloatInput } from "../../models/models_0";
import { deserializeMalformedFloatRequest, serializeMalformedFloatResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedFloat<Context> = __Operation<MalformedFloatServerInput, MalformedFloatServerOutput, Context>;

export interface MalformedFloatServerInput extends MalformedFloatInput {}
export namespace MalformedFloatServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedFloatInput.validate>[0]) => __ValidationFailure[] =
    MalformedFloatInput.validate;
}
export interface MalformedFloatServerOutput {}

export type MalformedFloatErrors = never;

export class MalformedFloatSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedFloat", MalformedFloatErrors>
{
  serialize = serializeMalformedFloatResponse;
  deserialize = deserializeMalformedFloatRequest;

  isOperationError(error: any): error is MalformedFloatErrors {
    return false;
  }

  serializeError(error: MalformedFloatErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
