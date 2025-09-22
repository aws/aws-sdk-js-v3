// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { ResponseCodeHttpFallbackInputOutput } from "../../models/models_0";
import {
  deserializeResponseCodeHttpFallbackRequest,
  serializeResponseCodeHttpFallbackResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type ResponseCodeHttpFallback<Context> = __Operation<
  ResponseCodeHttpFallbackServerInput,
  ResponseCodeHttpFallbackServerOutput,
  Context
>;

export interface ResponseCodeHttpFallbackServerInput extends ResponseCodeHttpFallbackInputOutput {}
export namespace ResponseCodeHttpFallbackServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof ResponseCodeHttpFallbackInputOutput.validate>[0]
  ) => __ValidationFailure[] = ResponseCodeHttpFallbackInputOutput.validate;
}
export interface ResponseCodeHttpFallbackServerOutput extends ResponseCodeHttpFallbackInputOutput {}

export type ResponseCodeHttpFallbackErrors = never;

export class ResponseCodeHttpFallbackSerializer
  implements __OperationSerializer<RestJsonService<any>, "ResponseCodeHttpFallback", ResponseCodeHttpFallbackErrors>
{
  serialize = serializeResponseCodeHttpFallbackResponse;
  deserialize = deserializeResponseCodeHttpFallbackRequest;

  isOperationError(error: any): error is ResponseCodeHttpFallbackErrors {
    return false;
  }

  serializeError(error: ResponseCodeHttpFallbackErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
