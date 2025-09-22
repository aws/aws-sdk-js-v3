// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpRequestWithLabelsAndTimestampFormatInput } from "../../models/models_0";
import {
  deserializeHttpRequestWithLabelsAndTimestampFormatRequest,
  serializeHttpRequestWithLabelsAndTimestampFormatResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpRequestWithLabelsAndTimestampFormat<Context> = __Operation<
  HttpRequestWithLabelsAndTimestampFormatServerInput,
  HttpRequestWithLabelsAndTimestampFormatServerOutput,
  Context
>;

export interface HttpRequestWithLabelsAndTimestampFormatServerInput
  extends HttpRequestWithLabelsAndTimestampFormatInput {}
export namespace HttpRequestWithLabelsAndTimestampFormatServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpRequestWithLabelsAndTimestampFormatInput.validate>[0]
  ) => __ValidationFailure[] = HttpRequestWithLabelsAndTimestampFormatInput.validate;
}
export interface HttpRequestWithLabelsAndTimestampFormatServerOutput {}

export type HttpRequestWithLabelsAndTimestampFormatErrors = never;

export class HttpRequestWithLabelsAndTimestampFormatSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "HttpRequestWithLabelsAndTimestampFormat",
      HttpRequestWithLabelsAndTimestampFormatErrors
    >
{
  serialize = serializeHttpRequestWithLabelsAndTimestampFormatResponse;
  deserialize = deserializeHttpRequestWithLabelsAndTimestampFormatRequest;

  isOperationError(error: any): error is HttpRequestWithLabelsAndTimestampFormatErrors {
    return false;
  }

  serializeError(
    error: HttpRequestWithLabelsAndTimestampFormatErrors,
    ctx: ServerSerdeContext
  ): Promise<__HttpResponse> {
    throw error;
  }
}
