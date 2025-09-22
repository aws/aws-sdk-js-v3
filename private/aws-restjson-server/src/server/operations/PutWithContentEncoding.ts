// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { PutWithContentEncodingInput } from "../../models/models_0";
import {
  deserializePutWithContentEncodingRequest,
  serializePutWithContentEncodingResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type PutWithContentEncoding<Context> = __Operation<
  PutWithContentEncodingServerInput,
  PutWithContentEncodingServerOutput,
  Context
>;

export interface PutWithContentEncodingServerInput extends PutWithContentEncodingInput {}
export namespace PutWithContentEncodingServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof PutWithContentEncodingInput.validate>[0]) => __ValidationFailure[] =
    PutWithContentEncodingInput.validate;
}
export interface PutWithContentEncodingServerOutput {}

export type PutWithContentEncodingErrors = never;

export class PutWithContentEncodingSerializer
  implements __OperationSerializer<RestJsonService<any>, "PutWithContentEncoding", PutWithContentEncodingErrors>
{
  serialize = serializePutWithContentEncodingResponse;
  deserialize = deserializePutWithContentEncodingRequest;

  isOperationError(error: any): error is PutWithContentEncodingErrors {
    return false;
  }

  serializeError(error: PutWithContentEncodingErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
