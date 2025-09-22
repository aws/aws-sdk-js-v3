// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { deserializeEndpointOperationRequest, serializeEndpointOperationResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type EndpointOperation<Context> = __Operation<
  EndpointOperationServerInput,
  EndpointOperationServerOutput,
  Context
>;

export interface EndpointOperationServerInput {}
export namespace EndpointOperationServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface EndpointOperationServerOutput {}

export type EndpointOperationErrors = never;

export class EndpointOperationSerializer
  implements __OperationSerializer<RestJsonService<any>, "EndpointOperation", EndpointOperationErrors>
{
  serialize = serializeEndpointOperationResponse;
  deserialize = deserializeEndpointOperationRequest;

  isOperationError(error: any): error is EndpointOperationErrors {
    return false;
  }

  serializeError(error: EndpointOperationErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
