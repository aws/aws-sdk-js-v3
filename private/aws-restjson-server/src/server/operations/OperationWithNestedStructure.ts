// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { OperationWithNestedStructureInput, OperationWithNestedStructureOutput } from "../../models/models_0";
import {
  deserializeOperationWithNestedStructureRequest,
  serializeOperationWithNestedStructureResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type OperationWithNestedStructure<Context> = __Operation<
  OperationWithNestedStructureServerInput,
  OperationWithNestedStructureServerOutput,
  Context
>;

export interface OperationWithNestedStructureServerInput extends OperationWithNestedStructureInput {}
export namespace OperationWithNestedStructureServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof OperationWithNestedStructureInput.validate>[0]
  ) => __ValidationFailure[] = OperationWithNestedStructureInput.validate;
}
export interface OperationWithNestedStructureServerOutput extends OperationWithNestedStructureOutput {}

export type OperationWithNestedStructureErrors = never;

export class OperationWithNestedStructureSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "OperationWithNestedStructure", OperationWithNestedStructureErrors>
{
  serialize = serializeOperationWithNestedStructureResponse;
  deserialize = deserializeOperationWithNestedStructureRequest;

  isOperationError(error: any): error is OperationWithNestedStructureErrors {
    return false;
  }

  serializeError(error: OperationWithNestedStructureErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
