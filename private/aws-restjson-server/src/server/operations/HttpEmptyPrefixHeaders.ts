// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpEmptyPrefixHeadersInput, HttpEmptyPrefixHeadersOutput } from "../../models/models_0";
import {
  deserializeHttpEmptyPrefixHeadersRequest,
  serializeHttpEmptyPrefixHeadersResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpEmptyPrefixHeaders<Context> = __Operation<
  HttpEmptyPrefixHeadersServerInput,
  HttpEmptyPrefixHeadersServerOutput,
  Context
>;

export interface HttpEmptyPrefixHeadersServerInput extends HttpEmptyPrefixHeadersInput {}
export namespace HttpEmptyPrefixHeadersServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof HttpEmptyPrefixHeadersInput.validate>[0]) => __ValidationFailure[] =
    HttpEmptyPrefixHeadersInput.validate;
}
export interface HttpEmptyPrefixHeadersServerOutput extends HttpEmptyPrefixHeadersOutput {}

export type HttpEmptyPrefixHeadersErrors = never;

export class HttpEmptyPrefixHeadersSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpEmptyPrefixHeaders", HttpEmptyPrefixHeadersErrors>
{
  serialize = serializeHttpEmptyPrefixHeadersResponse;
  deserialize = deserializeHttpEmptyPrefixHeadersRequest;

  isOperationError(error: any): error is HttpEmptyPrefixHeadersErrors {
    return false;
  }

  serializeError(error: HttpEmptyPrefixHeadersErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
