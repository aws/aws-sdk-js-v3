// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { QueryIdempotencyTokenAutoFillInput } from "../../models/models_0";
import {
  deserializeQueryIdempotencyTokenAutoFillRequest,
  serializeQueryIdempotencyTokenAutoFillResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type QueryIdempotencyTokenAutoFill<Context> = __Operation<
  QueryIdempotencyTokenAutoFillServerInput,
  QueryIdempotencyTokenAutoFillServerOutput,
  Context
>;

export interface QueryIdempotencyTokenAutoFillServerInput extends QueryIdempotencyTokenAutoFillInput {}
export namespace QueryIdempotencyTokenAutoFillServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof QueryIdempotencyTokenAutoFillInput.validate>[0]
  ) => __ValidationFailure[] = QueryIdempotencyTokenAutoFillInput.validate;
}
export interface QueryIdempotencyTokenAutoFillServerOutput {}

export type QueryIdempotencyTokenAutoFillErrors = never;

export class QueryIdempotencyTokenAutoFillSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "QueryIdempotencyTokenAutoFill", QueryIdempotencyTokenAutoFillErrors>
{
  serialize = serializeQueryIdempotencyTokenAutoFillResponse;
  deserialize = deserializeQueryIdempotencyTokenAutoFillRequest;

  isOperationError(error: any): error is QueryIdempotencyTokenAutoFillErrors {
    return false;
  }

  serializeError(error: QueryIdempotencyTokenAutoFillErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
