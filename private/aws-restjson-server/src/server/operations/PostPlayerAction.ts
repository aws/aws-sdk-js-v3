// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { PostPlayerActionInput, PostPlayerActionOutput } from "../../models/models_0";
import { deserializePostPlayerActionRequest, serializePostPlayerActionResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type PostPlayerAction<Context> = __Operation<PostPlayerActionServerInput, PostPlayerActionServerOutput, Context>;

export interface PostPlayerActionServerInput extends PostPlayerActionInput {}
export namespace PostPlayerActionServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof PostPlayerActionInput.validate>[0]) => __ValidationFailure[] =
    PostPlayerActionInput.validate;
}
export interface PostPlayerActionServerOutput extends PostPlayerActionOutput {}

export type PostPlayerActionErrors = never;

export class PostPlayerActionSerializer
  implements __OperationSerializer<RestJsonService<any>, "PostPlayerAction", PostPlayerActionErrors>
{
  serialize = serializePostPlayerActionResponse;
  deserialize = deserializePostPlayerActionRequest;

  isOperationError(error: any): error is PostPlayerActionErrors {
    return false;
  }

  serializeError(error: PostPlayerActionErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
