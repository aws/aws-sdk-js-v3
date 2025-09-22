// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { JsonListsInputOutput } from "../../models/models_0";
import { deserializeJsonListsRequest, serializeJsonListsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type JsonLists<Context> = __Operation<JsonListsServerInput, JsonListsServerOutput, Context>;

export interface JsonListsServerInput extends JsonListsInputOutput {}
export namespace JsonListsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof JsonListsInputOutput.validate>[0]) => __ValidationFailure[] =
    JsonListsInputOutput.validate;
}
export interface JsonListsServerOutput extends JsonListsInputOutput {}

export type JsonListsErrors = never;

export class JsonListsSerializer implements __OperationSerializer<RestJsonService<any>, "JsonLists", JsonListsErrors> {
  serialize = serializeJsonListsResponse;
  deserialize = deserializeJsonListsRequest;

  isOperationError(error: any): error is JsonListsErrors {
    return false;
  }

  serializeError(error: JsonListsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
