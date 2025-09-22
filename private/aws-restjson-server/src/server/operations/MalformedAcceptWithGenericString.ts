// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedAcceptWithGenericStringOutput } from "../../models/models_0";
import {
  deserializeMalformedAcceptWithGenericStringRequest,
  serializeMalformedAcceptWithGenericStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedAcceptWithGenericString<Context> = __Operation<
  MalformedAcceptWithGenericStringServerInput,
  MalformedAcceptWithGenericStringServerOutput,
  Context
>;

export interface MalformedAcceptWithGenericStringServerInput {}
export namespace MalformedAcceptWithGenericStringServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface MalformedAcceptWithGenericStringServerOutput extends MalformedAcceptWithGenericStringOutput {}

export type MalformedAcceptWithGenericStringErrors = never;

export class MalformedAcceptWithGenericStringSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedAcceptWithGenericString",
      MalformedAcceptWithGenericStringErrors
    >
{
  serialize = serializeMalformedAcceptWithGenericStringResponse;
  deserialize = deserializeMalformedAcceptWithGenericStringRequest;

  isOperationError(error: any): error is MalformedAcceptWithGenericStringErrors {
    return false;
  }

  serializeError(error: MalformedAcceptWithGenericStringErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
