// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedContentTypeWithGenericStringInput } from "../../models/models_0";
import {
  deserializeMalformedContentTypeWithGenericStringRequest,
  serializeMalformedContentTypeWithGenericStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedContentTypeWithGenericString<Context> = __Operation<
  MalformedContentTypeWithGenericStringServerInput,
  MalformedContentTypeWithGenericStringServerOutput,
  Context
>;

export interface MalformedContentTypeWithGenericStringServerInput extends MalformedContentTypeWithGenericStringInput {}
export namespace MalformedContentTypeWithGenericStringServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedContentTypeWithGenericStringInput.validate>[0]
  ) => __ValidationFailure[] = MalformedContentTypeWithGenericStringInput.validate;
}
export interface MalformedContentTypeWithGenericStringServerOutput {}

export type MalformedContentTypeWithGenericStringErrors = never;

export class MalformedContentTypeWithGenericStringSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedContentTypeWithGenericString",
      MalformedContentTypeWithGenericStringErrors
    >
{
  serialize = serializeMalformedContentTypeWithGenericStringResponse;
  deserialize = deserializeMalformedContentTypeWithGenericStringRequest;

  isOperationError(error: any): error is MalformedContentTypeWithGenericStringErrors {
    return false;
  }

  serializeError(error: MalformedContentTypeWithGenericStringErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
