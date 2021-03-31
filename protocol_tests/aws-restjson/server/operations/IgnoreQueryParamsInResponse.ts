import { IgnoreQueryParamsInResponseOutput } from "../../models/models_0";
import {
  deserializeIgnoreQueryParamsInResponseRequest,
  serializeIgnoreQueryParamsInResponseResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type IgnoreQueryParamsInResponse = __Operation<
  IgnoreQueryParamsInResponseServerInput,
  IgnoreQueryParamsInResponseServerOutput
>;

export type IgnoreQueryParamsInResponseServerInput = {};
export type IgnoreQueryParamsInResponseServerOutput = IgnoreQueryParamsInResponseOutput & __MetadataBearer;

export type IgnoreQueryParamsInResponseErrors = never;

export class IgnoreQueryParamsInResponseSerializer
  implements OperationSerializer<RestJsonService, "IgnoreQueryParamsInResponse", IgnoreQueryParamsInResponseErrors> {
  serialize = serializeIgnoreQueryParamsInResponseResponse;
  deserialize = deserializeIgnoreQueryParamsInResponseRequest;

  isOperationError(error: any): error is IgnoreQueryParamsInResponseErrors {
    return false;
  }

  serializeError(
    error: IgnoreQueryParamsInResponseErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
