// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { OmitsSerializingEmptyListsInput } from "../../models/models_0";
import {
  deserializeOmitsSerializingEmptyListsRequest,
  serializeOmitsSerializingEmptyListsResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type OmitsSerializingEmptyLists<Context> = __Operation<
  OmitsSerializingEmptyListsServerInput,
  OmitsSerializingEmptyListsServerOutput,
  Context
>;

export interface OmitsSerializingEmptyListsServerInput extends OmitsSerializingEmptyListsInput {}
export namespace OmitsSerializingEmptyListsServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof OmitsSerializingEmptyListsInput.validate>[0]
  ) => __ValidationFailure[] = OmitsSerializingEmptyListsInput.validate;
}
export interface OmitsSerializingEmptyListsServerOutput {}

export type OmitsSerializingEmptyListsErrors = never;

export class OmitsSerializingEmptyListsSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "OmitsSerializingEmptyLists", OmitsSerializingEmptyListsErrors>
{
  serialize = serializeOmitsSerializingEmptyListsResponse;
  deserialize = deserializeOmitsSerializingEmptyListsRequest;

  isOperationError(error: any): error is OmitsSerializingEmptyListsErrors {
    return false;
  }

  serializeError(error: OmitsSerializingEmptyListsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
