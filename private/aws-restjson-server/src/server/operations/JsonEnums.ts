// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { JsonEnumsInputOutput } from "../../models/models_0";
import { deserializeJsonEnumsRequest, serializeJsonEnumsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type JsonEnums<Context> = __Operation<JsonEnumsServerInput, JsonEnumsServerOutput, Context>;

export interface JsonEnumsServerInput extends JsonEnumsInputOutput {}
export namespace JsonEnumsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof JsonEnumsInputOutput.validate>[0]) => __ValidationFailure[] =
    JsonEnumsInputOutput.validate;
}
export interface JsonEnumsServerOutput extends JsonEnumsInputOutput {}

export type JsonEnumsErrors = never;

export class JsonEnumsSerializer implements __OperationSerializer<RestJsonService<any>, "JsonEnums", JsonEnumsErrors> {
  serialize = serializeJsonEnumsResponse;
  deserialize = deserializeJsonEnumsRequest;

  isOperationError(error: any): error is JsonEnumsErrors {
    return false;
  }

  serializeError(error: JsonEnumsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
