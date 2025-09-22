// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import {
  deserializeHostWithPathOperationRequest,
  serializeHostWithPathOperationResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HostWithPathOperation<Context> = __Operation<
  HostWithPathOperationServerInput,
  HostWithPathOperationServerOutput,
  Context
>;

export interface HostWithPathOperationServerInput {}
export namespace HostWithPathOperationServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface HostWithPathOperationServerOutput {}

export type HostWithPathOperationErrors = never;

export class HostWithPathOperationSerializer
  implements __OperationSerializer<RestJsonService<any>, "HostWithPathOperation", HostWithPathOperationErrors>
{
  serialize = serializeHostWithPathOperationResponse;
  deserialize = deserializeHostWithPathOperationRequest;

  isOperationError(error: any): error is HostWithPathOperationErrors {
    return false;
  }

  serializeError(error: HostWithPathOperationErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
