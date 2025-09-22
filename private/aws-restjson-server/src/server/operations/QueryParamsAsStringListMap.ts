// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { QueryParamsAsStringListMapInput } from "../../models/models_0";
import {
  deserializeQueryParamsAsStringListMapRequest,
  serializeQueryParamsAsStringListMapResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type QueryParamsAsStringListMap<Context> = __Operation<
  QueryParamsAsStringListMapServerInput,
  QueryParamsAsStringListMapServerOutput,
  Context
>;

export interface QueryParamsAsStringListMapServerInput extends QueryParamsAsStringListMapInput {}
export namespace QueryParamsAsStringListMapServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof QueryParamsAsStringListMapInput.validate>[0]
  ) => __ValidationFailure[] = QueryParamsAsStringListMapInput.validate;
}
export interface QueryParamsAsStringListMapServerOutput {}

export type QueryParamsAsStringListMapErrors = never;

export class QueryParamsAsStringListMapSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "QueryParamsAsStringListMap", QueryParamsAsStringListMapErrors>
{
  serialize = serializeQueryParamsAsStringListMapResponse;
  deserialize = deserializeQueryParamsAsStringListMapRequest;

  isOperationError(error: any): error is QueryParamsAsStringListMapErrors {
    return false;
  }

  serializeError(error: QueryParamsAsStringListMapErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
