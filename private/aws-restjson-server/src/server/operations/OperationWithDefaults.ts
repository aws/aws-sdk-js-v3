// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { OperationWithDefaultsInput, OperationWithDefaultsOutput } from "../../models/models_0";
import {
  deserializeOperationWithDefaultsRequest,
  serializeOperationWithDefaultsResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type OperationWithDefaults<Context> = __Operation<
  OperationWithDefaultsServerInput,
  OperationWithDefaultsServerOutput,
  Context
>;

export interface OperationWithDefaultsServerInput extends OperationWithDefaultsInput {}
export namespace OperationWithDefaultsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof OperationWithDefaultsInput.validate>[0]) => __ValidationFailure[] =
    OperationWithDefaultsInput.validate;
}
export interface OperationWithDefaultsServerOutput extends OperationWithDefaultsOutput {}

export type OperationWithDefaultsErrors = never;

export class OperationWithDefaultsSerializer
  implements __OperationSerializer<RestJsonService<any>, "OperationWithDefaults", OperationWithDefaultsErrors>
{
  serialize = serializeOperationWithDefaultsResponse;
  deserialize = deserializeOperationWithDefaultsRequest;

  isOperationError(error: any): error is OperationWithDefaultsErrors {
    return false;
  }

  serializeError(error: OperationWithDefaultsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
