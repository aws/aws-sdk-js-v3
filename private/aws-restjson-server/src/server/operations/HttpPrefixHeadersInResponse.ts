// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpPrefixHeadersInResponseInput, HttpPrefixHeadersInResponseOutput } from "../../models/models_0";
import {
  deserializeHttpPrefixHeadersInResponseRequest,
  serializeHttpPrefixHeadersInResponseResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpPrefixHeadersInResponse<Context> = __Operation<
  HttpPrefixHeadersInResponseServerInput,
  HttpPrefixHeadersInResponseServerOutput,
  Context
>;

export interface HttpPrefixHeadersInResponseServerInput extends HttpPrefixHeadersInResponseInput {}
export namespace HttpPrefixHeadersInResponseServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpPrefixHeadersInResponseInput.validate>[0]
  ) => __ValidationFailure[] = HttpPrefixHeadersInResponseInput.validate;
}
export interface HttpPrefixHeadersInResponseServerOutput extends HttpPrefixHeadersInResponseOutput {}

export type HttpPrefixHeadersInResponseErrors = never;

export class HttpPrefixHeadersInResponseSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "HttpPrefixHeadersInResponse", HttpPrefixHeadersInResponseErrors>
{
  serialize = serializeHttpPrefixHeadersInResponseResponse;
  deserialize = deserializeHttpPrefixHeadersInResponseRequest;

  isOperationError(error: any): error is HttpPrefixHeadersInResponseErrors {
    return false;
  }

  serializeError(error: HttpPrefixHeadersInResponseErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
