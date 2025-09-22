// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { SparseJsonListsInputOutput } from "../../models/models_0";
import { deserializeSparseJsonListsRequest, serializeSparseJsonListsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type SparseJsonLists<Context> = __Operation<SparseJsonListsServerInput, SparseJsonListsServerOutput, Context>;

export interface SparseJsonListsServerInput extends SparseJsonListsInputOutput {}
export namespace SparseJsonListsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof SparseJsonListsInputOutput.validate>[0]) => __ValidationFailure[] =
    SparseJsonListsInputOutput.validate;
}
export interface SparseJsonListsServerOutput extends SparseJsonListsInputOutput {}

export type SparseJsonListsErrors = never;

export class SparseJsonListsSerializer
  implements __OperationSerializer<RestJsonService<any>, "SparseJsonLists", SparseJsonListsErrors>
{
  serialize = serializeSparseJsonListsResponse;
  deserialize = deserializeSparseJsonListsRequest;

  isOperationError(error: any): error is SparseJsonListsErrors {
    return false;
  }

  serializeError(error: SparseJsonListsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
