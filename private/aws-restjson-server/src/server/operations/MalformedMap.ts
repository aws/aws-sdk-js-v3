// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedMapInput } from "../../models/models_0";
import { deserializeMalformedMapRequest, serializeMalformedMapResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedMap<Context> = __Operation<MalformedMapServerInput, MalformedMapServerOutput, Context>;

export interface MalformedMapServerInput extends MalformedMapInput {}
export namespace MalformedMapServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedMapInput.validate>[0]) => __ValidationFailure[] =
    MalformedMapInput.validate;
}
export interface MalformedMapServerOutput {}

export type MalformedMapErrors = never;

export class MalformedMapSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedMap", MalformedMapErrors>
{
  serialize = serializeMalformedMapResponse;
  deserialize = deserializeMalformedMapRequest;

  isOperationError(error: any): error is MalformedMapErrors {
    return false;
  }

  serializeError(error: MalformedMapErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
