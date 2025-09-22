// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { PostUnionWithJsonNameInput, PostUnionWithJsonNameOutput } from "../../models/models_0";
import {
  deserializePostUnionWithJsonNameRequest,
  serializePostUnionWithJsonNameResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type PostUnionWithJsonName<Context> = __Operation<
  PostUnionWithJsonNameServerInput,
  PostUnionWithJsonNameServerOutput,
  Context
>;

export interface PostUnionWithJsonNameServerInput extends PostUnionWithJsonNameInput {}
export namespace PostUnionWithJsonNameServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof PostUnionWithJsonNameInput.validate>[0]) => __ValidationFailure[] =
    PostUnionWithJsonNameInput.validate;
}
export interface PostUnionWithJsonNameServerOutput extends PostUnionWithJsonNameOutput {}

export type PostUnionWithJsonNameErrors = never;

export class PostUnionWithJsonNameSerializer
  implements __OperationSerializer<RestJsonService<any>, "PostUnionWithJsonName", PostUnionWithJsonNameErrors>
{
  serialize = serializePostUnionWithJsonNameResponse;
  deserialize = deserializePostUnionWithJsonNameRequest;

  isOperationError(error: any): error is PostUnionWithJsonNameErrors {
    return false;
  }

  serializeError(error: PostUnionWithJsonNameErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
