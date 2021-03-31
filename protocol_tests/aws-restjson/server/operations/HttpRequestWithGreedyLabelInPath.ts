import { HttpRequestWithGreedyLabelInPathInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithGreedyLabelInPathRequest,
  serializeHttpRequestWithGreedyLabelInPathResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpRequestWithGreedyLabelInPath = __Operation<
  HttpRequestWithGreedyLabelInPathServerInput,
  HttpRequestWithGreedyLabelInPathServerOutput
>;

export type HttpRequestWithGreedyLabelInPathServerInput = HttpRequestWithGreedyLabelInPathInput;
export type HttpRequestWithGreedyLabelInPathServerOutput = __MetadataBearer;

export type HttpRequestWithGreedyLabelInPathErrors = never;

export class HttpRequestWithGreedyLabelInPathSerializer
  implements
    OperationSerializer<RestJsonService, "HttpRequestWithGreedyLabelInPath", HttpRequestWithGreedyLabelInPathErrors> {
  serialize = serializeHttpRequestWithGreedyLabelInPathResponse;
  deserialize = deserializeHttpRequestWithGreedyLabelInPathRequest;

  isOperationError(error: any): error is HttpRequestWithGreedyLabelInPathErrors {
    return false;
  }

  serializeError(
    error: HttpRequestWithGreedyLabelInPathErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
