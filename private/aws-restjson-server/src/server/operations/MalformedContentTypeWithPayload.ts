// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedContentTypeWithPayloadInput } from "../../models/models_0";
import {
  deserializeMalformedContentTypeWithPayloadRequest,
  serializeMalformedContentTypeWithPayloadResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedContentTypeWithPayload<Context> = __Operation<
  MalformedContentTypeWithPayloadServerInput,
  MalformedContentTypeWithPayloadServerOutput,
  Context
>;

export interface MalformedContentTypeWithPayloadServerInput extends MalformedContentTypeWithPayloadInput {}
export namespace MalformedContentTypeWithPayloadServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedContentTypeWithPayloadInput.validate>[0]
  ) => __ValidationFailure[] = MalformedContentTypeWithPayloadInput.validate;
}
export interface MalformedContentTypeWithPayloadServerOutput {}

export type MalformedContentTypeWithPayloadErrors = never;

export class MalformedContentTypeWithPayloadSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedContentTypeWithPayload",
      MalformedContentTypeWithPayloadErrors
    >
{
  serialize = serializeMalformedContentTypeWithPayloadResponse;
  deserialize = deserializeMalformedContentTypeWithPayloadRequest;

  isOperationError(error: any): error is MalformedContentTypeWithPayloadErrors {
    return false;
  }

  serializeError(error: MalformedContentTypeWithPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
