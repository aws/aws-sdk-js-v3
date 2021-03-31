import { ConstantAndVariableQueryStringInput } from "../../models/models_0";
import {
  deserializeConstantAndVariableQueryStringRequest,
  serializeConstantAndVariableQueryStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type ConstantAndVariableQueryString = __Operation<
  ConstantAndVariableQueryStringServerInput,
  ConstantAndVariableQueryStringServerOutput
>;

export type ConstantAndVariableQueryStringServerInput = ConstantAndVariableQueryStringInput;
export type ConstantAndVariableQueryStringServerOutput = __MetadataBearer;

export type ConstantAndVariableQueryStringErrors = never;

export class ConstantAndVariableQueryStringSerializer
  implements
    OperationSerializer<RestJsonService, "ConstantAndVariableQueryString", ConstantAndVariableQueryStringErrors> {
  serialize = serializeConstantAndVariableQueryStringResponse;
  deserialize = deserializeConstantAndVariableQueryStringRequest;

  isOperationError(error: any): error is ConstantAndVariableQueryStringErrors {
    return false;
  }

  serializeError(
    error: ConstantAndVariableQueryStringErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
