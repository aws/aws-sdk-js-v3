import { HostLabelInput } from "../../models/models_0";
import {
  deserializeEndpointWithHostLabelOperationRequest,
  serializeEndpointWithHostLabelOperationResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type EndpointWithHostLabelOperation = __Operation<
  EndpointWithHostLabelOperationServerInput,
  EndpointWithHostLabelOperationServerOutput
>;

export type EndpointWithHostLabelOperationServerInput = HostLabelInput;
export type EndpointWithHostLabelOperationServerOutput = __MetadataBearer;

export type EndpointWithHostLabelOperationErrors = never;

export class EndpointWithHostLabelOperationSerializer
  implements
    OperationSerializer<RestJsonService, "EndpointWithHostLabelOperation", EndpointWithHostLabelOperationErrors> {
  serialize = serializeEndpointWithHostLabelOperationResponse;
  deserialize = deserializeEndpointWithHostLabelOperationRequest;

  isOperationError(error: any): error is EndpointWithHostLabelOperationErrors {
    return false;
  }

  serializeError(
    error: EndpointWithHostLabelOperationErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
