// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import {
  deserializeNoInputAndNoOutputRequest,
  serializeNoInputAndNoOutputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type NoInputAndNoOutput<Context> = __Operation<
  NoInputAndNoOutputServerInput,
  NoInputAndNoOutputServerOutput,
  Context
>;

export interface NoInputAndNoOutputServerInput {}
export namespace NoInputAndNoOutputServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface NoInputAndNoOutputServerOutput {}

export type NoInputAndNoOutputErrors = never;

export class NoInputAndNoOutputSerializer
  implements __OperationSerializer<RestJsonService<any>, "NoInputAndNoOutput", NoInputAndNoOutputErrors>
{
  serialize = serializeNoInputAndNoOutputResponse;
  deserialize = deserializeNoInputAndNoOutputRequest;

  isOperationError(error: any): error is NoInputAndNoOutputErrors {
    return false;
  }

  serializeError(error: NoInputAndNoOutputErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
