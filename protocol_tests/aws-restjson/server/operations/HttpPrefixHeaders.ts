import { HttpPrefixHeadersInputOutput } from "../../models/models_0";
import { deserializeHttpPrefixHeadersRequest, serializeHttpPrefixHeadersResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpPrefixHeaders = __Operation<HttpPrefixHeadersServerInput, HttpPrefixHeadersServerOutput>;

export type HttpPrefixHeadersServerInput = HttpPrefixHeadersInputOutput;
export type HttpPrefixHeadersServerOutput = HttpPrefixHeadersInputOutput & __MetadataBearer;

export type HttpPrefixHeadersErrors = never;

export class HttpPrefixHeadersSerializer
  implements OperationSerializer<RestJsonService, "HttpPrefixHeaders", HttpPrefixHeadersErrors> {
  serialize = serializeHttpPrefixHeadersResponse;
  deserialize = deserializeHttpPrefixHeadersRequest;

  isOperationError(error: any): error is HttpPrefixHeadersErrors {
    return false;
  }

  serializeError(error: HttpPrefixHeadersErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
