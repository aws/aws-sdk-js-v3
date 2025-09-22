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
  deserializeMalformedAcceptWithBodyRequest,
  serializeMalformedAcceptWithBodyResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedAcceptWithBody<Context> = __Operation<
  MalformedAcceptWithBodyServerInput,
  MalformedAcceptWithBodyServerOutput,
  Context
>;

export interface MalformedAcceptWithBodyServerInput {}
export namespace MalformedAcceptWithBodyServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface MalformedAcceptWithBodyServerOutput extends GreetingStruct {}

export type MalformedAcceptWithBodyErrors = never;

export class MalformedAcceptWithBodySerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedAcceptWithBody", MalformedAcceptWithBodyErrors>
{
  serialize = serializeMalformedAcceptWithBodyResponse;
  deserialize = deserializeMalformedAcceptWithBodyRequest;

  isOperationError(error: any): error is MalformedAcceptWithBodyErrors {
    return false;
  }

  serializeError(error: MalformedAcceptWithBodyErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
