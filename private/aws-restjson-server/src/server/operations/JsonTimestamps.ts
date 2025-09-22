// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { JsonTimestampsInputOutput } from "../../models/models_0";
import { deserializeJsonTimestampsRequest, serializeJsonTimestampsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type JsonTimestamps<Context> = __Operation<JsonTimestampsServerInput, JsonTimestampsServerOutput, Context>;

export interface JsonTimestampsServerInput extends JsonTimestampsInputOutput {}
export namespace JsonTimestampsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof JsonTimestampsInputOutput.validate>[0]) => __ValidationFailure[] =
    JsonTimestampsInputOutput.validate;
}
export interface JsonTimestampsServerOutput extends JsonTimestampsInputOutput {}

export type JsonTimestampsErrors = never;

export class JsonTimestampsSerializer
  implements __OperationSerializer<RestJsonService<any>, "JsonTimestamps", JsonTimestampsErrors>
{
  serialize = serializeJsonTimestampsResponse;
  deserialize = deserializeJsonTimestampsRequest;

  isOperationError(error: any): error is JsonTimestampsErrors {
    return false;
  }

  serializeError(error: JsonTimestampsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
