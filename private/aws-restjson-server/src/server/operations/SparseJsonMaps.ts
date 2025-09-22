// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { SparseJsonMapsInputOutput } from "../../models/models_0";
import { deserializeSparseJsonMapsRequest, serializeSparseJsonMapsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type SparseJsonMaps<Context> = __Operation<SparseJsonMapsServerInput, SparseJsonMapsServerOutput, Context>;

export interface SparseJsonMapsServerInput extends SparseJsonMapsInputOutput {}
export namespace SparseJsonMapsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof SparseJsonMapsInputOutput.validate>[0]) => __ValidationFailure[] =
    SparseJsonMapsInputOutput.validate;
}
export interface SparseJsonMapsServerOutput extends SparseJsonMapsInputOutput {}

export type SparseJsonMapsErrors = never;

export class SparseJsonMapsSerializer
  implements __OperationSerializer<RestJsonService<any>, "SparseJsonMaps", SparseJsonMapsErrors>
{
  serialize = serializeSparseJsonMapsResponse;
  deserialize = deserializeSparseJsonMapsRequest;

  isOperationError(error: any): error is SparseJsonMapsErrors {
    return false;
  }

  serializeError(error: SparseJsonMapsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
