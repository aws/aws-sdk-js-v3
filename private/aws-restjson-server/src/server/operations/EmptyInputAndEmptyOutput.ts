// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { EmptyInputAndEmptyOutputInput, EmptyInputAndEmptyOutputOutput } from "../../models/models_0";
import {
  deserializeEmptyInputAndEmptyOutputRequest,
  serializeEmptyInputAndEmptyOutputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type EmptyInputAndEmptyOutput<Context> = __Operation<
  EmptyInputAndEmptyOutputServerInput,
  EmptyInputAndEmptyOutputServerOutput,
  Context
>;

export interface EmptyInputAndEmptyOutputServerInput extends EmptyInputAndEmptyOutputInput {}
export namespace EmptyInputAndEmptyOutputServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof EmptyInputAndEmptyOutputInput.validate>[0]) => __ValidationFailure[] =
    EmptyInputAndEmptyOutputInput.validate;
}
export interface EmptyInputAndEmptyOutputServerOutput extends EmptyInputAndEmptyOutputOutput {}

export type EmptyInputAndEmptyOutputErrors = never;

export class EmptyInputAndEmptyOutputSerializer
  implements __OperationSerializer<RestJsonService<any>, "EmptyInputAndEmptyOutput", EmptyInputAndEmptyOutputErrors>
{
  serialize = serializeEmptyInputAndEmptyOutputResponse;
  deserialize = deserializeEmptyInputAndEmptyOutputRequest;

  isOperationError(error: any): error is EmptyInputAndEmptyOutputErrors {
    return false;
  }

  serializeError(error: EmptyInputAndEmptyOutputErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
