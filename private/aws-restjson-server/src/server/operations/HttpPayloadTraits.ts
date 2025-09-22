// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpPayloadTraitsInputOutput } from "../../models/models_0";
import { deserializeHttpPayloadTraitsRequest, serializeHttpPayloadTraitsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpPayloadTraits<Context> = __Operation<
  HttpPayloadTraitsServerInput,
  HttpPayloadTraitsServerOutput,
  Context
>;

export interface HttpPayloadTraitsServerInput extends HttpPayloadTraitsInputOutput {}
export namespace HttpPayloadTraitsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof HttpPayloadTraitsInputOutput.validate>[0]) => __ValidationFailure[] =
    HttpPayloadTraitsInputOutput.validate;
}
export interface HttpPayloadTraitsServerOutput extends HttpPayloadTraitsInputOutput {}

export type HttpPayloadTraitsErrors = never;

export class HttpPayloadTraitsSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpPayloadTraits", HttpPayloadTraitsErrors>
{
  serialize = serializeHttpPayloadTraitsResponse;
  deserialize = deserializeHttpPayloadTraitsRequest;

  isOperationError(error: any): error is HttpPayloadTraitsErrors {
    return false;
  }

  serializeError(error: HttpPayloadTraitsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
