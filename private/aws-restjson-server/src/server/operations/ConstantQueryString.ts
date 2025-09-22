// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { ConstantQueryStringInput } from "../../models/models_0";
import {
  deserializeConstantQueryStringRequest,
  serializeConstantQueryStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type ConstantQueryString<Context> = __Operation<
  ConstantQueryStringServerInput,
  ConstantQueryStringServerOutput,
  Context
>;

export interface ConstantQueryStringServerInput extends ConstantQueryStringInput {}
export namespace ConstantQueryStringServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof ConstantQueryStringInput.validate>[0]) => __ValidationFailure[] =
    ConstantQueryStringInput.validate;
}
export interface ConstantQueryStringServerOutput {}

export type ConstantQueryStringErrors = never;

export class ConstantQueryStringSerializer
  implements __OperationSerializer<RestJsonService<any>, "ConstantQueryString", ConstantQueryStringErrors>
{
  serialize = serializeConstantQueryStringResponse;
  deserialize = deserializeConstantQueryStringRequest;

  isOperationError(error: any): error is ConstantQueryStringErrors {
    return false;
  }

  serializeError(error: ConstantQueryStringErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
