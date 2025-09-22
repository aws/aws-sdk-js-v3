// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { QueryPrecedenceInput } from "../../models/models_0";
import { deserializeQueryPrecedenceRequest, serializeQueryPrecedenceResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type QueryPrecedence<Context> = __Operation<QueryPrecedenceServerInput, QueryPrecedenceServerOutput, Context>;

export interface QueryPrecedenceServerInput extends QueryPrecedenceInput {}
export namespace QueryPrecedenceServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof QueryPrecedenceInput.validate>[0]) => __ValidationFailure[] =
    QueryPrecedenceInput.validate;
}
export interface QueryPrecedenceServerOutput {}

export type QueryPrecedenceErrors = never;

export class QueryPrecedenceSerializer
  implements __OperationSerializer<RestJsonService<any>, "QueryPrecedence", QueryPrecedenceErrors>
{
  serialize = serializeQueryPrecedenceResponse;
  deserialize = deserializeQueryPrecedenceRequest;

  isOperationError(error: any): error is QueryPrecedenceErrors {
    return false;
  }

  serializeError(error: QueryPrecedenceErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
