import { QueryIdempotencyTokenAutoFillInput } from "../../models/models_0";
import {
  deserializeQueryIdempotencyTokenAutoFillRequest,
  serializeQueryIdempotencyTokenAutoFillResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type QueryIdempotencyTokenAutoFill = __Operation<
  QueryIdempotencyTokenAutoFillServerInput,
  QueryIdempotencyTokenAutoFillServerOutput
>;

export type QueryIdempotencyTokenAutoFillServerInput = QueryIdempotencyTokenAutoFillInput;
export type QueryIdempotencyTokenAutoFillServerOutput = __MetadataBearer;

export type QueryIdempotencyTokenAutoFillErrors = never;

export class QueryIdempotencyTokenAutoFillSerializer
  implements
    OperationSerializer<RestJsonService, "QueryIdempotencyTokenAutoFill", QueryIdempotencyTokenAutoFillErrors> {
  serialize = serializeQueryIdempotencyTokenAutoFillResponse;
  deserialize = deserializeQueryIdempotencyTokenAutoFillRequest;

  isOperationError(error: any): error is QueryIdempotencyTokenAutoFillErrors {
    return false;
  }

  serializeError(
    error: QueryIdempotencyTokenAutoFillErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
