// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedAcceptWithPayloadOutput } from "../../models/models_0";
import {
  deserializeMalformedAcceptWithPayloadRequest,
  serializeMalformedAcceptWithPayloadResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedAcceptWithPayload<Context> = __Operation<
  MalformedAcceptWithPayloadServerInput,
  MalformedAcceptWithPayloadServerOutput,
  Context
>;

export interface MalformedAcceptWithPayloadServerInput {}
export namespace MalformedAcceptWithPayloadServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface MalformedAcceptWithPayloadServerOutput extends MalformedAcceptWithPayloadOutput {}

export type MalformedAcceptWithPayloadErrors = never;

export class MalformedAcceptWithPayloadSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "MalformedAcceptWithPayload", MalformedAcceptWithPayloadErrors>
{
  serialize = serializeMalformedAcceptWithPayloadResponse;
  deserialize = deserializeMalformedAcceptWithPayloadRequest;

  isOperationError(error: any): error is MalformedAcceptWithPayloadErrors {
    return false;
  }

  serializeError(error: MalformedAcceptWithPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
