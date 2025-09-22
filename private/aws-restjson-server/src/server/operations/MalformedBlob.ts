// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedBlobInput } from "../../models/models_0";
import { deserializeMalformedBlobRequest, serializeMalformedBlobResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedBlob<Context> = __Operation<MalformedBlobServerInput, MalformedBlobServerOutput, Context>;

export interface MalformedBlobServerInput extends MalformedBlobInput {}
export namespace MalformedBlobServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedBlobInput.validate>[0]) => __ValidationFailure[] =
    MalformedBlobInput.validate;
}
export interface MalformedBlobServerOutput {}

export type MalformedBlobErrors = never;

export class MalformedBlobSerializer
  implements __OperationSerializer<RestJsonService<any>, "MalformedBlob", MalformedBlobErrors>
{
  serialize = serializeMalformedBlobResponse;
  deserialize = deserializeMalformedBlobRequest;

  isOperationError(error: any): error is MalformedBlobErrors {
    return false;
  }

  serializeError(error: MalformedBlobErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
