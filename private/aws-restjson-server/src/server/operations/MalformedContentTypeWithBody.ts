// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { GreetingStruct } from "../../models/models_0";
import {
  deserializeMalformedContentTypeWithBodyRequest,
  serializeMalformedContentTypeWithBodyResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedContentTypeWithBody<Context> = __Operation<
  MalformedContentTypeWithBodyServerInput,
  MalformedContentTypeWithBodyServerOutput,
  Context
>;

export interface MalformedContentTypeWithBodyServerInput extends GreetingStruct {}
export namespace MalformedContentTypeWithBodyServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof GreetingStruct.validate>[0]) => __ValidationFailure[] =
    GreetingStruct.validate;
}
export interface MalformedContentTypeWithBodyServerOutput {}

export type MalformedContentTypeWithBodyErrors = never;

export class MalformedContentTypeWithBodySerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedContentTypeWithBody", MalformedContentTypeWithBodyErrors>
{
  serialize = serializeMalformedContentTypeWithBodyResponse;
  deserialize = deserializeMalformedContentTypeWithBodyRequest;

  isOperationError(error: any): error is MalformedContentTypeWithBodyErrors {
    return false;
  }

  serializeError(error: MalformedContentTypeWithBodyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
