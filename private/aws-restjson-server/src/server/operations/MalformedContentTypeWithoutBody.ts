// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import {
  deserializeMalformedContentTypeWithoutBodyRequest,
  serializeMalformedContentTypeWithoutBodyResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedContentTypeWithoutBody<Context> = __Operation<
  MalformedContentTypeWithoutBodyServerInput,
  MalformedContentTypeWithoutBodyServerOutput,
  Context
>;

export interface MalformedContentTypeWithoutBodyServerInput {}
export namespace MalformedContentTypeWithoutBodyServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface MalformedContentTypeWithoutBodyServerOutput {}

export type MalformedContentTypeWithoutBodyErrors = never;

export class MalformedContentTypeWithoutBodySerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedContentTypeWithoutBody",
      MalformedContentTypeWithoutBodyErrors
    >
{
  serialize = serializeMalformedContentTypeWithoutBodyResponse;
  deserialize = deserializeMalformedContentTypeWithoutBodyRequest;

  isOperationError(error: any): error is MalformedContentTypeWithoutBodyErrors {
    return false;
  }

  serializeError(error: MalformedContentTypeWithoutBodyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
