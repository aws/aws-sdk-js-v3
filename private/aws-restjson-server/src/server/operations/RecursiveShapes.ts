// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { RecursiveShapesInputOutput } from "../../models/models_0";
import { deserializeRecursiveShapesRequest, serializeRecursiveShapesResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type RecursiveShapes<Context> = __Operation<RecursiveShapesServerInput, RecursiveShapesServerOutput, Context>;

export interface RecursiveShapesServerInput extends RecursiveShapesInputOutput {}
export namespace RecursiveShapesServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof RecursiveShapesInputOutput.validate>[0]) => __ValidationFailure[] =
    RecursiveShapesInputOutput.validate;
}
export interface RecursiveShapesServerOutput extends RecursiveShapesInputOutput {}

export type RecursiveShapesErrors = never;

export class RecursiveShapesSerializer
  implements __OperationSerializer<RestJsonService<any>, "RecursiveShapes", RecursiveShapesErrors>
{
  serialize = serializeRecursiveShapesResponse;
  deserialize = deserializeRecursiveShapesRequest;

  isOperationError(error: any): error is RecursiveShapesErrors {
    return false;
  }

  serializeError(error: RecursiveShapesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
