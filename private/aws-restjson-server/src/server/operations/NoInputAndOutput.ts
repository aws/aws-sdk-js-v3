// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { NoInputAndOutputOutput } from "../../models/models_0";
import { deserializeNoInputAndOutputRequest, serializeNoInputAndOutputResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type NoInputAndOutput<Context> = __Operation<NoInputAndOutputServerInput, NoInputAndOutputServerOutput, Context>;

export interface NoInputAndOutputServerInput {}
export namespace NoInputAndOutputServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface NoInputAndOutputServerOutput extends NoInputAndOutputOutput {}

export type NoInputAndOutputErrors = never;

export class NoInputAndOutputSerializer
  implements __OperationSerializer<RestJsonService<any>, "NoInputAndOutput", NoInputAndOutputErrors>
{
  serialize = serializeNoInputAndOutputResponse;
  deserialize = deserializeNoInputAndOutputRequest;

  isOperationError(error: any): error is NoInputAndOutputErrors {
    return false;
  }

  serializeError(error: NoInputAndOutputErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
