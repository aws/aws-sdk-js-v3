// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { ConstantAndVariableQueryStringInput } from "../../models/models_0";
import {
  deserializeConstantAndVariableQueryStringRequest,
  serializeConstantAndVariableQueryStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type ConstantAndVariableQueryString<Context> = __Operation<
  ConstantAndVariableQueryStringServerInput,
  ConstantAndVariableQueryStringServerOutput,
  Context
>;

export interface ConstantAndVariableQueryStringServerInput extends ConstantAndVariableQueryStringInput {}
export namespace ConstantAndVariableQueryStringServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof ConstantAndVariableQueryStringInput.validate>[0]
  ) => __ValidationFailure[] = ConstantAndVariableQueryStringInput.validate;
}
export interface ConstantAndVariableQueryStringServerOutput {}

export type ConstantAndVariableQueryStringErrors = never;

export class ConstantAndVariableQueryStringSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "ConstantAndVariableQueryString", ConstantAndVariableQueryStringErrors>
{
  serialize = serializeConstantAndVariableQueryStringResponse;
  deserialize = deserializeConstantAndVariableQueryStringRequest;

  isOperationError(error: any): error is ConstantAndVariableQueryStringErrors {
    return false;
  }

  serializeError(error: ConstantAndVariableQueryStringErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
