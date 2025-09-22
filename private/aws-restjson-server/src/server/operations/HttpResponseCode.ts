// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpResponseCodeOutput } from "../../models/models_0";
import { deserializeHttpResponseCodeRequest, serializeHttpResponseCodeResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpResponseCode<Context> = __Operation<HttpResponseCodeServerInput, HttpResponseCodeServerOutput, Context>;

export interface HttpResponseCodeServerInput {}
export namespace HttpResponseCodeServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface HttpResponseCodeServerOutput extends HttpResponseCodeOutput {}

export type HttpResponseCodeErrors = never;

export class HttpResponseCodeSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpResponseCode", HttpResponseCodeErrors>
{
  serialize = serializeHttpResponseCodeResponse;
  deserialize = deserializeHttpResponseCodeRequest;

  isOperationError(error: any): error is HttpResponseCodeErrors {
    return false;
  }

  serializeError(error: HttpResponseCodeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
