// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedUnionInput } from "../../models/models_0";
import { deserializeMalformedUnionRequest, serializeMalformedUnionResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedUnion<Context> = __Operation<MalformedUnionServerInput, MalformedUnionServerOutput, Context>;

export interface MalformedUnionServerInput extends MalformedUnionInput {}
export namespace MalformedUnionServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedUnionInput.validate>[0]) => __ValidationFailure[] =
    MalformedUnionInput.validate;
}
export interface MalformedUnionServerOutput {}

export type MalformedUnionErrors = never;

export class MalformedUnionSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedUnion", MalformedUnionErrors>
{
  serialize = serializeMalformedUnionResponse;
  deserialize = deserializeMalformedUnionRequest;

  isOperationError(error: any): error is MalformedUnionErrors {
    return false;
  }

  serializeError(error: MalformedUnionErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
