// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { JsonBlobsInputOutput } from "../../models/models_0";
import { deserializeJsonBlobsRequest, serializeJsonBlobsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type JsonBlobs<Context> = __Operation<JsonBlobsServerInput, JsonBlobsServerOutput, Context>;

export interface JsonBlobsServerInput extends JsonBlobsInputOutput {}
export namespace JsonBlobsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof JsonBlobsInputOutput.validate>[0]) => __ValidationFailure[] =
    JsonBlobsInputOutput.validate;
}
export interface JsonBlobsServerOutput extends JsonBlobsInputOutput {}

export type JsonBlobsErrors = never;

export class JsonBlobsSerializer implements __OperationSerializer<RestJsonService<any>, "JsonBlobs", JsonBlobsErrors> {
  serialize = serializeJsonBlobsResponse;
  deserialize = deserializeJsonBlobsRequest;

  isOperationError(error: any): error is JsonBlobsErrors {
    return false;
  }

  serializeError(error: JsonBlobsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
