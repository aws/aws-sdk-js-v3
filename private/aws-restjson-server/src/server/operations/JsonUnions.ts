// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { UnionInputOutput } from "../../models/models_0";
import { deserializeJsonUnionsRequest, serializeJsonUnionsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type JsonUnions<Context> = __Operation<JsonUnionsServerInput, JsonUnionsServerOutput, Context>;

export interface JsonUnionsServerInput extends UnionInputOutput {}
export namespace JsonUnionsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof UnionInputOutput.validate>[0]) => __ValidationFailure[] =
    UnionInputOutput.validate;
}
export interface JsonUnionsServerOutput extends UnionInputOutput {}

export type JsonUnionsErrors = never;

export class JsonUnionsSerializer
  implements __OperationSerializer<RestJsonService<any>, "JsonUnions", JsonUnionsErrors>
{
  serialize = serializeJsonUnionsResponse;
  deserialize = deserializeJsonUnionsRequest;

  isOperationError(error: any): error is JsonUnionsErrors {
    return false;
  }

  serializeError(error: JsonUnionsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
