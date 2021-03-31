import { NullAndEmptyHeadersIO } from "../../models/models_0";
import {
  deserializeNullAndEmptyHeadersServerRequest,
  serializeNullAndEmptyHeadersServerResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type NullAndEmptyHeadersServer = __Operation<
  NullAndEmptyHeadersServerServerInput,
  NullAndEmptyHeadersServerServerOutput
>;

export type NullAndEmptyHeadersServerServerInput = NullAndEmptyHeadersIO;
export type NullAndEmptyHeadersServerServerOutput = NullAndEmptyHeadersIO & __MetadataBearer;

export type NullAndEmptyHeadersServerErrors = never;

export class NullAndEmptyHeadersServerSerializer
  implements OperationSerializer<RestJsonService, "NullAndEmptyHeadersServer", NullAndEmptyHeadersServerErrors> {
  serialize = serializeNullAndEmptyHeadersServerResponse;
  deserialize = deserializeNullAndEmptyHeadersServerRequest;

  isOperationError(error: any): error is NullAndEmptyHeadersServerErrors {
    return false;
  }

  serializeError(error: NullAndEmptyHeadersServerErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
