// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import {
  deserializeUnitInputAndOutputRequest,
  serializeUnitInputAndOutputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type UnitInputAndOutput<Context> = __Operation<
  UnitInputAndOutputServerInput,
  UnitInputAndOutputServerOutput,
  Context
>;

export interface UnitInputAndOutputServerInput {}
export namespace UnitInputAndOutputServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface UnitInputAndOutputServerOutput {}

export type UnitInputAndOutputErrors = never;

export class UnitInputAndOutputSerializer
  implements __OperationSerializer<RestJsonService<any>, "UnitInputAndOutput", UnitInputAndOutputErrors>
{
  serialize = serializeUnitInputAndOutputResponse;
  deserialize = deserializeUnitInputAndOutputRequest;

  isOperationError(error: any): error is UnitInputAndOutputErrors {
    return false;
  }

  serializeError(error: UnitInputAndOutputErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
