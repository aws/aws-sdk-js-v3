// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedStringInput } from "../../models/models_0";
import { deserializeMalformedStringRequest, serializeMalformedStringResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedString<Context> = __Operation<MalformedStringServerInput, MalformedStringServerOutput, Context>;

export interface MalformedStringServerInput extends MalformedStringInput {}
export namespace MalformedStringServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedStringInput.validate>[0]) => __ValidationFailure[] =
    MalformedStringInput.validate;
}
export interface MalformedStringServerOutput {}

export type MalformedStringErrors = never;

export class MalformedStringSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedString", MalformedStringErrors>
{
  serialize = serializeMalformedStringResponse;
  deserialize = deserializeMalformedStringRequest;

  isOperationError(error: any): error is MalformedStringErrors {
    return false;
  }

  serializeError(error: MalformedStringErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
