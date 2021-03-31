import { InputAndOutputWithHeadersIO } from "../../models/models_0";
import {
  deserializeInputAndOutputWithHeadersRequest,
  serializeInputAndOutputWithHeadersResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type InputAndOutputWithHeaders = __Operation<
  InputAndOutputWithHeadersServerInput,
  InputAndOutputWithHeadersServerOutput
>;

export type InputAndOutputWithHeadersServerInput = InputAndOutputWithHeadersIO;
export type InputAndOutputWithHeadersServerOutput = InputAndOutputWithHeadersIO & __MetadataBearer;

export type InputAndOutputWithHeadersErrors = never;

export class InputAndOutputWithHeadersSerializer
  implements OperationSerializer<RestJsonService, "InputAndOutputWithHeaders", InputAndOutputWithHeadersErrors> {
  serialize = serializeInputAndOutputWithHeadersResponse;
  deserialize = deserializeInputAndOutputWithHeadersRequest;

  isOperationError(error: any): error is InputAndOutputWithHeadersErrors {
    return false;
  }

  serializeError(error: InputAndOutputWithHeadersErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
