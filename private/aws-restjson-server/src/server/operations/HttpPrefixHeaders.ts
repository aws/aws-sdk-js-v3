// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpPrefixHeadersInput, HttpPrefixHeadersOutput } from "../../models/models_0";
import { deserializeHttpPrefixHeadersRequest, serializeHttpPrefixHeadersResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpPrefixHeaders<Context> = __Operation<
  HttpPrefixHeadersServerInput,
  HttpPrefixHeadersServerOutput,
  Context
>;

export interface HttpPrefixHeadersServerInput extends HttpPrefixHeadersInput {}
export namespace HttpPrefixHeadersServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof HttpPrefixHeadersInput.validate>[0]) => __ValidationFailure[] =
    HttpPrefixHeadersInput.validate;
}
export interface HttpPrefixHeadersServerOutput extends HttpPrefixHeadersOutput {}

export type HttpPrefixHeadersErrors = never;

export class HttpPrefixHeadersSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpPrefixHeaders", HttpPrefixHeadersErrors>
{
  serialize = serializeHttpPrefixHeadersResponse;
  deserialize = deserializeHttpPrefixHeadersRequest;

  isOperationError(error: any): error is HttpPrefixHeadersErrors {
    return false;
  }

  serializeError(error: HttpPrefixHeadersErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
