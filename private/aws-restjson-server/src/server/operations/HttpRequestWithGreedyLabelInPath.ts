// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpRequestWithGreedyLabelInPathInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithGreedyLabelInPathRequest,
  serializeHttpRequestWithGreedyLabelInPathResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpRequestWithGreedyLabelInPath<Context> = __Operation<
  HttpRequestWithGreedyLabelInPathServerInput,
  HttpRequestWithGreedyLabelInPathServerOutput,
  Context
>;

export interface HttpRequestWithGreedyLabelInPathServerInput extends HttpRequestWithGreedyLabelInPathInput {}
export namespace HttpRequestWithGreedyLabelInPathServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpRequestWithGreedyLabelInPathInput.validate>[0]
  ) => __ValidationFailure[] = HttpRequestWithGreedyLabelInPathInput.validate;
}
export interface HttpRequestWithGreedyLabelInPathServerOutput {}

export type HttpRequestWithGreedyLabelInPathErrors = never;

export class HttpRequestWithGreedyLabelInPathSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "HttpRequestWithGreedyLabelInPath",
      HttpRequestWithGreedyLabelInPathErrors
    >
{
  serialize = serializeHttpRequestWithGreedyLabelInPathResponse;
  deserialize = deserializeHttpRequestWithGreedyLabelInPathRequest;

  isOperationError(error: any): error is HttpRequestWithGreedyLabelInPathErrors {
    return false;
  }

  serializeError(error: HttpRequestWithGreedyLabelInPathErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
