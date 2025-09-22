// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { JsonIntEnumsInputOutput } from "../../models/models_0";
import { deserializeJsonIntEnumsRequest, serializeJsonIntEnumsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type JsonIntEnums<Context> = __Operation<JsonIntEnumsServerInput, JsonIntEnumsServerOutput, Context>;

export interface JsonIntEnumsServerInput extends JsonIntEnumsInputOutput {}
export namespace JsonIntEnumsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof JsonIntEnumsInputOutput.validate>[0]) => __ValidationFailure[] =
    JsonIntEnumsInputOutput.validate;
}
export interface JsonIntEnumsServerOutput extends JsonIntEnumsInputOutput {}

export type JsonIntEnumsErrors = never;

export class JsonIntEnumsSerializer
  implements __OperationSerializer<RestJsonService<any>, "JsonIntEnums", JsonIntEnumsErrors>
{
  serialize = serializeJsonIntEnumsResponse;
  deserialize = deserializeJsonIntEnumsRequest;

  isOperationError(error: any): error is JsonIntEnumsErrors {
    return false;
  }

  serializeError(error: JsonIntEnumsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
