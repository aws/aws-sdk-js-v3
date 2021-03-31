import { HttpRequestWithLabelsAndTimestampFormatInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithLabelsAndTimestampFormatRequest,
  serializeHttpRequestWithLabelsAndTimestampFormatResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpRequestWithLabelsAndTimestampFormat = __Operation<
  HttpRequestWithLabelsAndTimestampFormatServerInput,
  HttpRequestWithLabelsAndTimestampFormatServerOutput
>;

export type HttpRequestWithLabelsAndTimestampFormatServerInput = HttpRequestWithLabelsAndTimestampFormatInput;
export type HttpRequestWithLabelsAndTimestampFormatServerOutput = __MetadataBearer;

export type HttpRequestWithLabelsAndTimestampFormatErrors = never;

export class HttpRequestWithLabelsAndTimestampFormatSerializer
  implements
    OperationSerializer<
      RestJsonService,
      "HttpRequestWithLabelsAndTimestampFormat",
      HttpRequestWithLabelsAndTimestampFormatErrors
    > {
  serialize = serializeHttpRequestWithLabelsAndTimestampFormatResponse;
  deserialize = deserializeHttpRequestWithLabelsAndTimestampFormatRequest;

  isOperationError(error: any): error is HttpRequestWithLabelsAndTimestampFormatErrors {
    return false;
  }

  serializeError(
    error: HttpRequestWithLabelsAndTimestampFormatErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
