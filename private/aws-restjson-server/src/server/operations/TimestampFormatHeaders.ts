// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { TimestampFormatHeadersIO } from "../../models/models_0";
import {
  deserializeTimestampFormatHeadersRequest,
  serializeTimestampFormatHeadersResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TimestampFormatHeaders<Context> = __Operation<
  TimestampFormatHeadersServerInput,
  TimestampFormatHeadersServerOutput,
  Context
>;

export interface TimestampFormatHeadersServerInput extends TimestampFormatHeadersIO {}
export namespace TimestampFormatHeadersServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof TimestampFormatHeadersIO.validate>[0]) => __ValidationFailure[] =
    TimestampFormatHeadersIO.validate;
}
export interface TimestampFormatHeadersServerOutput extends TimestampFormatHeadersIO {}

export type TimestampFormatHeadersErrors = never;

export class TimestampFormatHeadersSerializer
  implements __OperationSerializer<RestJsonService<any>, "TimestampFormatHeaders", TimestampFormatHeadersErrors>
{
  serialize = serializeTimestampFormatHeadersResponse;
  deserialize = deserializeTimestampFormatHeadersRequest;

  isOperationError(error: any): error is TimestampFormatHeadersErrors {
    return false;
  }

  serializeError(error: TimestampFormatHeadersErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
