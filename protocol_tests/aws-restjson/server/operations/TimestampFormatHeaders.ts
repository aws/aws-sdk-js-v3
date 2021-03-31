import { TimestampFormatHeadersIO } from "../../models/models_0";
import {
  deserializeTimestampFormatHeadersRequest,
  serializeTimestampFormatHeadersResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type TimestampFormatHeaders = __Operation<TimestampFormatHeadersServerInput, TimestampFormatHeadersServerOutput>;

export type TimestampFormatHeadersServerInput = TimestampFormatHeadersIO;
export type TimestampFormatHeadersServerOutput = TimestampFormatHeadersIO & __MetadataBearer;

export type TimestampFormatHeadersErrors = never;

export class TimestampFormatHeadersSerializer
  implements OperationSerializer<RestJsonService, "TimestampFormatHeaders", TimestampFormatHeadersErrors> {
  serialize = serializeTimestampFormatHeadersResponse;
  deserialize = deserializeTimestampFormatHeadersRequest;

  isOperationError(error: any): error is TimestampFormatHeadersErrors {
    return false;
  }

  serializeError(error: TimestampFormatHeadersErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
