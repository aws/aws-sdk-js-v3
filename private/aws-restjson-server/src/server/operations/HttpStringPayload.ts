// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { StringPayloadInput } from "../../models/models_0";
import { deserializeHttpStringPayloadRequest, serializeHttpStringPayloadResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpStringPayload<Context> = __Operation<
  HttpStringPayloadServerInput,
  HttpStringPayloadServerOutput,
  Context
>;

export interface HttpStringPayloadServerInput extends StringPayloadInput {}
export namespace HttpStringPayloadServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof StringPayloadInput.validate>[0]) => __ValidationFailure[] =
    StringPayloadInput.validate;
}
export interface HttpStringPayloadServerOutput extends StringPayloadInput {}

export type HttpStringPayloadErrors = never;

export class HttpStringPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpStringPayload", HttpStringPayloadErrors>
{
  serialize = serializeHttpStringPayloadResponse;
  deserialize = deserializeHttpStringPayloadRequest;

  isOperationError(error: any): error is HttpStringPayloadErrors {
    return false;
  }

  serializeError(error: HttpStringPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
