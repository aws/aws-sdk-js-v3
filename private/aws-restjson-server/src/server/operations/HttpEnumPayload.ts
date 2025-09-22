// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { EnumPayloadInput } from "../../models/models_0";
import { deserializeHttpEnumPayloadRequest, serializeHttpEnumPayloadResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpEnumPayload<Context> = __Operation<HttpEnumPayloadServerInput, HttpEnumPayloadServerOutput, Context>;

export interface HttpEnumPayloadServerInput extends EnumPayloadInput {}
export namespace HttpEnumPayloadServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof EnumPayloadInput.validate>[0]) => __ValidationFailure[] =
    EnumPayloadInput.validate;
}
export interface HttpEnumPayloadServerOutput extends EnumPayloadInput {}

export type HttpEnumPayloadErrors = never;

export class HttpEnumPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpEnumPayload", HttpEnumPayloadErrors>
{
  serialize = serializeHttpEnumPayloadResponse;
  deserialize = deserializeHttpEnumPayloadRequest;

  isOperationError(error: any): error is HttpEnumPayloadErrors {
    return false;
  }

  serializeError(error: HttpEnumPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
