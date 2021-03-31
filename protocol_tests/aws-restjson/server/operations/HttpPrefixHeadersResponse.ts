import { HttpPrefixHeadersResponseOutput } from "../../models/models_0";
import {
  deserializeHttpPrefixHeadersResponseRequest,
  serializeHttpPrefixHeadersResponseResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type HttpPrefixHeadersResponse = __Operation<
  HttpPrefixHeadersResponseServerInput,
  HttpPrefixHeadersResponseServerOutput
>;

export type HttpPrefixHeadersResponseServerInput = {};
export type HttpPrefixHeadersResponseServerOutput = HttpPrefixHeadersResponseOutput & __MetadataBearer;

export type HttpPrefixHeadersResponseErrors = never;

export class HttpPrefixHeadersResponseSerializer
  implements OperationSerializer<RestJsonService, "HttpPrefixHeadersResponse", HttpPrefixHeadersResponseErrors> {
  serialize = serializeHttpPrefixHeadersResponseResponse;
  deserialize = deserializeHttpPrefixHeadersResponseRequest;

  isOperationError(error: any): error is HttpPrefixHeadersResponseErrors {
    return false;
  }

  serializeError(error: HttpPrefixHeadersResponseErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
