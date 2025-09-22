// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedShortInput } from "../../models/models_0";
import { deserializeMalformedShortRequest, serializeMalformedShortResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedShort<Context> = __Operation<MalformedShortServerInput, MalformedShortServerOutput, Context>;

export interface MalformedShortServerInput extends MalformedShortInput {}
export namespace MalformedShortServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedShortInput.validate>[0]) => __ValidationFailure[] =
    MalformedShortInput.validate;
}
export interface MalformedShortServerOutput {}

export type MalformedShortErrors = never;

export class MalformedShortSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedShort", MalformedShortErrors>
{
  serialize = serializeMalformedShortResponse;
  deserialize = deserializeMalformedShortRequest;

  isOperationError(error: any): error is MalformedShortErrors {
    return false;
  }

  serializeError(error: MalformedShortErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
