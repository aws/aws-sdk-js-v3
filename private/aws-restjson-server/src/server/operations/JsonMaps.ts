// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { JsonMapsInputOutput } from "../../models/models_0";
import { deserializeJsonMapsRequest, serializeJsonMapsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type JsonMaps<Context> = __Operation<JsonMapsServerInput, JsonMapsServerOutput, Context>;

export interface JsonMapsServerInput extends JsonMapsInputOutput {}
export namespace JsonMapsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof JsonMapsInputOutput.validate>[0]) => __ValidationFailure[] =
    JsonMapsInputOutput.validate;
}
export interface JsonMapsServerOutput extends JsonMapsInputOutput {}

export type JsonMapsErrors = never;

export class JsonMapsSerializer implements __OperationSerializer<RestJsonService<any>, "JsonMaps", JsonMapsErrors> {
  serialize = serializeJsonMapsResponse;
  deserialize = deserializeJsonMapsRequest;

  isOperationError(error: any): error is JsonMapsErrors {
    return false;
  }

  serializeError(error: JsonMapsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
