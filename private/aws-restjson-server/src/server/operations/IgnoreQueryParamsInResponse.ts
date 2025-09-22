// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { IgnoreQueryParamsInResponseOutput } from "../../models/models_0";
import {
  deserializeIgnoreQueryParamsInResponseRequest,
  serializeIgnoreQueryParamsInResponseResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type IgnoreQueryParamsInResponse<Context> = __Operation<
  IgnoreQueryParamsInResponseServerInput,
  IgnoreQueryParamsInResponseServerOutput,
  Context
>;

export interface IgnoreQueryParamsInResponseServerInput {}
export namespace IgnoreQueryParamsInResponseServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface IgnoreQueryParamsInResponseServerOutput extends IgnoreQueryParamsInResponseOutput {}

export type IgnoreQueryParamsInResponseErrors = never;

export class IgnoreQueryParamsInResponseSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "IgnoreQueryParamsInResponse", IgnoreQueryParamsInResponseErrors>
{
  serialize = serializeIgnoreQueryParamsInResponseResponse;
  deserialize = deserializeIgnoreQueryParamsInResponseRequest;

  isOperationError(error: any): error is IgnoreQueryParamsInResponseErrors {
    return false;
  }

  serializeError(error: IgnoreQueryParamsInResponseErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
