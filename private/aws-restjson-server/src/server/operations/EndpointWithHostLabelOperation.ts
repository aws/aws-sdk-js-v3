// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HostLabelInput } from "../../models/models_0";
import {
  deserializeEndpointWithHostLabelOperationRequest,
  serializeEndpointWithHostLabelOperationResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type EndpointWithHostLabelOperation<Context> = __Operation<
  EndpointWithHostLabelOperationServerInput,
  EndpointWithHostLabelOperationServerOutput,
  Context
>;

export interface EndpointWithHostLabelOperationServerInput extends HostLabelInput {}
export namespace EndpointWithHostLabelOperationServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof HostLabelInput.validate>[0]) => __ValidationFailure[] =
    HostLabelInput.validate;
}
export interface EndpointWithHostLabelOperationServerOutput {}

export type EndpointWithHostLabelOperationErrors = never;

export class EndpointWithHostLabelOperationSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "EndpointWithHostLabelOperation", EndpointWithHostLabelOperationErrors>
{
  serialize = serializeEndpointWithHostLabelOperationResponse;
  deserialize = deserializeEndpointWithHostLabelOperationRequest;

  isOperationError(error: any): error is EndpointWithHostLabelOperationErrors {
    return false;
  }

  serializeError(error: EndpointWithHostLabelOperationErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
