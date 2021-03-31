import { NullAndEmptyHeadersIO } from "../../models/models_0";
import {
  deserializeNullAndEmptyHeadersClientRequest,
  serializeNullAndEmptyHeadersClientResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type NullAndEmptyHeadersClient = __Operation<
  NullAndEmptyHeadersClientServerInput,
  NullAndEmptyHeadersClientServerOutput
>;

export type NullAndEmptyHeadersClientServerInput = NullAndEmptyHeadersIO;
export type NullAndEmptyHeadersClientServerOutput = NullAndEmptyHeadersIO & __MetadataBearer;

export type NullAndEmptyHeadersClientErrors = never;

export class NullAndEmptyHeadersClientSerializer
  implements OperationSerializer<RestJsonService, "NullAndEmptyHeadersClient", NullAndEmptyHeadersClientErrors> {
  serialize = serializeNullAndEmptyHeadersClientResponse;
  deserialize = deserializeNullAndEmptyHeadersClientRequest;

  isOperationError(error: any): error is NullAndEmptyHeadersClientErrors {
    return false;
  }

  serializeError(error: NullAndEmptyHeadersClientErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
