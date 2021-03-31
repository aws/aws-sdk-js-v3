import { HttpRequestWithLabelsInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithLabelsRequest,
  serializeHttpRequestWithLabelsResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpRequestWithLabels = __Operation<HttpRequestWithLabelsServerInput, HttpRequestWithLabelsServerOutput>;

export type HttpRequestWithLabelsServerInput = HttpRequestWithLabelsInput;
export type HttpRequestWithLabelsServerOutput = __MetadataBearer;

export type HttpRequestWithLabelsErrors = never;

export class HttpRequestWithLabelsSerializer
  implements OperationSerializer<RestJsonService, "HttpRequestWithLabels", HttpRequestWithLabelsErrors> {
  serialize = serializeHttpRequestWithLabelsResponse;
  deserialize = deserializeHttpRequestWithLabelsRequest;

  isOperationError(error: any): error is HttpRequestWithLabelsErrors {
    return false;
  }

  serializeError(error: HttpRequestWithLabelsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
