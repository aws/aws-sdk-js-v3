// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedRequestBodyInput } from "../../models/models_0";
import {
  deserializeMalformedRequestBodyRequest,
  serializeMalformedRequestBodyResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedRequestBody<Context> = __Operation<
  MalformedRequestBodyServerInput,
  MalformedRequestBodyServerOutput,
  Context
>;

export interface MalformedRequestBodyServerInput extends MalformedRequestBodyInput {}
export namespace MalformedRequestBodyServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedRequestBodyInput.validate>[0]) => __ValidationFailure[] =
    MalformedRequestBodyInput.validate;
}
export interface MalformedRequestBodyServerOutput {}

export type MalformedRequestBodyErrors = never;

export class MalformedRequestBodySerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedRequestBody", MalformedRequestBodyErrors>
{
  serialize = serializeMalformedRequestBodyResponse;
  deserialize = deserializeMalformedRequestBodyRequest;

  isOperationError(error: any): error is MalformedRequestBodyErrors {
    return false;
  }

  serializeError(error: MalformedRequestBodyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
