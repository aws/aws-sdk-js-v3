// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedListInput } from "../../models/models_0";
import { deserializeMalformedListRequest, serializeMalformedListResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedList<Context> = __Operation<MalformedListServerInput, MalformedListServerOutput, Context>;

export interface MalformedListServerInput extends MalformedListInput {}
export namespace MalformedListServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedListInput.validate>[0]) => __ValidationFailure[] =
    MalformedListInput.validate;
}
export interface MalformedListServerOutput {}

export type MalformedListErrors = never;

export class MalformedListSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedList", MalformedListErrors>
{
  serialize = serializeMalformedListResponse;
  deserialize = deserializeMalformedListRequest;

  isOperationError(error: any): error is MalformedListErrors {
    return false;
  }

  serializeError(error: MalformedListErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
