// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpRequestWithLabelsInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithLabelsRequest,
  serializeHttpRequestWithLabelsResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpRequestWithLabels<Context> = __Operation<
  HttpRequestWithLabelsServerInput,
  HttpRequestWithLabelsServerOutput,
  Context
>;

export interface HttpRequestWithLabelsServerInput extends HttpRequestWithLabelsInput {}
export namespace HttpRequestWithLabelsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof HttpRequestWithLabelsInput.validate>[0]) => __ValidationFailure[] =
    HttpRequestWithLabelsInput.validate;
}
export interface HttpRequestWithLabelsServerOutput {}

export type HttpRequestWithLabelsErrors = never;

export class HttpRequestWithLabelsSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpRequestWithLabels", HttpRequestWithLabelsErrors>
{
  serialize = serializeHttpRequestWithLabelsResponse;
  deserialize = deserializeHttpRequestWithLabelsRequest;

  isOperationError(error: any): error is HttpRequestWithLabelsErrors {
    return false;
  }

  serializeError(error: HttpRequestWithLabelsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
