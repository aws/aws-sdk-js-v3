// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { InputAndOutputWithHeadersIO } from "../../models/models_0";
import {
  deserializeInputAndOutputWithHeadersRequest,
  serializeInputAndOutputWithHeadersResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type InputAndOutputWithHeaders<Context> = __Operation<
  InputAndOutputWithHeadersServerInput,
  InputAndOutputWithHeadersServerOutput,
  Context
>;

export interface InputAndOutputWithHeadersServerInput extends InputAndOutputWithHeadersIO {}
export namespace InputAndOutputWithHeadersServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof InputAndOutputWithHeadersIO.validate>[0]) => __ValidationFailure[] =
    InputAndOutputWithHeadersIO.validate;
}
export interface InputAndOutputWithHeadersServerOutput extends InputAndOutputWithHeadersIO {}

export type InputAndOutputWithHeadersErrors = never;

export class InputAndOutputWithHeadersSerializer
  implements __OperationSerializer<RestJsonService<any>, "InputAndOutputWithHeaders", InputAndOutputWithHeadersErrors>
{
  serialize = serializeInputAndOutputWithHeadersResponse;
  deserialize = deserializeInputAndOutputWithHeadersRequest;

  isOperationError(error: any): error is InputAndOutputWithHeadersErrors {
    return false;
  }

  serializeError(error: InputAndOutputWithHeadersErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
