import { deserializeEndpointOperationRequest, serializeEndpointOperationResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type EndpointOperation = __Operation<EndpointOperationServerInput, EndpointOperationServerOutput>;

export type EndpointOperationServerInput = {};
export type EndpointOperationServerOutput = __MetadataBearer;

export type EndpointOperationErrors = never;

export class EndpointOperationSerializer
  implements OperationSerializer<RestJsonService, "EndpointOperation", EndpointOperationErrors> {
  serialize = serializeEndpointOperationResponse;
  deserialize = deserializeEndpointOperationRequest;

  isOperationError(error: any): error is EndpointOperationErrors {
    return false;
  }

  serializeError(error: EndpointOperationErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
