// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpRequestWithFloatLabelsInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithFloatLabelsRequest,
  serializeHttpRequestWithFloatLabelsResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpRequestWithFloatLabels<Context> = __Operation<
  HttpRequestWithFloatLabelsServerInput,
  HttpRequestWithFloatLabelsServerOutput,
  Context
>;

export interface HttpRequestWithFloatLabelsServerInput extends HttpRequestWithFloatLabelsInput {}
export namespace HttpRequestWithFloatLabelsServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpRequestWithFloatLabelsInput.validate>[0]
  ) => __ValidationFailure[] = HttpRequestWithFloatLabelsInput.validate;
}
export interface HttpRequestWithFloatLabelsServerOutput {}

export type HttpRequestWithFloatLabelsErrors = never;

export class HttpRequestWithFloatLabelsSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "HttpRequestWithFloatLabels", HttpRequestWithFloatLabelsErrors>
{
  serialize = serializeHttpRequestWithFloatLabelsResponse;
  deserialize = deserializeHttpRequestWithFloatLabelsRequest;

  isOperationError(error: any): error is HttpRequestWithFloatLabelsErrors {
    return false;
  }

  serializeError(error: HttpRequestWithFloatLabelsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
