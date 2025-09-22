// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpRequestWithRegexLiteralInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithRegexLiteralRequest,
  serializeHttpRequestWithRegexLiteralResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpRequestWithRegexLiteral<Context> = __Operation<
  HttpRequestWithRegexLiteralServerInput,
  HttpRequestWithRegexLiteralServerOutput,
  Context
>;

export interface HttpRequestWithRegexLiteralServerInput extends HttpRequestWithRegexLiteralInput {}
export namespace HttpRequestWithRegexLiteralServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpRequestWithRegexLiteralInput.validate>[0]
  ) => __ValidationFailure[] = HttpRequestWithRegexLiteralInput.validate;
}
export interface HttpRequestWithRegexLiteralServerOutput {}

export type HttpRequestWithRegexLiteralErrors = never;

export class HttpRequestWithRegexLiteralSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "HttpRequestWithRegexLiteral", HttpRequestWithRegexLiteralErrors>
{
  serialize = serializeHttpRequestWithRegexLiteralResponse;
  deserialize = deserializeHttpRequestWithRegexLiteralRequest;

  isOperationError(error: any): error is HttpRequestWithRegexLiteralErrors {
    return false;
  }

  serializeError(error: HttpRequestWithRegexLiteralErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
