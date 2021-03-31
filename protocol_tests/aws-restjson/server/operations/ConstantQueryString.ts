import { ConstantQueryStringInput } from "../../models/models_0";
import {
  deserializeConstantQueryStringRequest,
  serializeConstantQueryStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type ConstantQueryString = __Operation<ConstantQueryStringServerInput, ConstantQueryStringServerOutput>;

export type ConstantQueryStringServerInput = ConstantQueryStringInput;
export type ConstantQueryStringServerOutput = __MetadataBearer;

export type ConstantQueryStringErrors = never;

export class ConstantQueryStringSerializer
  implements OperationSerializer<RestJsonService, "ConstantQueryString", ConstantQueryStringErrors> {
  serialize = serializeConstantQueryStringResponse;
  deserialize = deserializeConstantQueryStringRequest;

  isOperationError(error: any): error is ConstantQueryStringErrors {
    return false;
  }

  serializeError(error: ConstantQueryStringErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
