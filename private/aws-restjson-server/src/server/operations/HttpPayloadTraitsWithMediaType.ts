// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpPayloadTraitsWithMediaTypeInputOutput } from "../../models/models_0";
import {
  deserializeHttpPayloadTraitsWithMediaTypeRequest,
  serializeHttpPayloadTraitsWithMediaTypeResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpPayloadTraitsWithMediaType<Context> = __Operation<
  HttpPayloadTraitsWithMediaTypeServerInput,
  HttpPayloadTraitsWithMediaTypeServerOutput,
  Context
>;

export interface HttpPayloadTraitsWithMediaTypeServerInput extends HttpPayloadTraitsWithMediaTypeInputOutput {}
export namespace HttpPayloadTraitsWithMediaTypeServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpPayloadTraitsWithMediaTypeInputOutput.validate>[0]
  ) => __ValidationFailure[] = HttpPayloadTraitsWithMediaTypeInputOutput.validate;
}
export interface HttpPayloadTraitsWithMediaTypeServerOutput extends HttpPayloadTraitsWithMediaTypeInputOutput {}

export type HttpPayloadTraitsWithMediaTypeErrors = never;

export class HttpPayloadTraitsWithMediaTypeSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "HttpPayloadTraitsWithMediaType", HttpPayloadTraitsWithMediaTypeErrors>
{
  serialize = serializeHttpPayloadTraitsWithMediaTypeResponse;
  deserialize = deserializeHttpPayloadTraitsWithMediaTypeRequest;

  isOperationError(error: any): error is HttpPayloadTraitsWithMediaTypeErrors {
    return false;
  }

  serializeError(error: HttpPayloadTraitsWithMediaTypeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
