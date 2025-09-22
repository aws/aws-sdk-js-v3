// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { ResponseCodeRequiredOutput } from "../../models/models_0";
import {
  deserializeResponseCodeRequiredRequest,
  serializeResponseCodeRequiredResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type ResponseCodeRequired<Context> = __Operation<
  ResponseCodeRequiredServerInput,
  ResponseCodeRequiredServerOutput,
  Context
>;

export interface ResponseCodeRequiredServerInput {}
export namespace ResponseCodeRequiredServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface ResponseCodeRequiredServerOutput extends ResponseCodeRequiredOutput {}

export type ResponseCodeRequiredErrors = never;

export class ResponseCodeRequiredSerializer
  implements __OperationSerializer<RestJsonService<any>, "ResponseCodeRequired", ResponseCodeRequiredErrors>
{
  serialize = serializeResponseCodeRequiredResponse;
  deserialize = deserializeResponseCodeRequiredRequest;

  isOperationError(error: any): error is ResponseCodeRequiredErrors {
    return false;
  }

  serializeError(error: ResponseCodeRequiredErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
