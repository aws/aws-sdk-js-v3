// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { DatetimeOffsetsOutput } from "../../models/models_0";
import { deserializeDatetimeOffsetsRequest, serializeDatetimeOffsetsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type DatetimeOffsets<Context> = __Operation<DatetimeOffsetsServerInput, DatetimeOffsetsServerOutput, Context>;

export interface DatetimeOffsetsServerInput {}
export namespace DatetimeOffsetsServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface DatetimeOffsetsServerOutput extends DatetimeOffsetsOutput {}

export type DatetimeOffsetsErrors = never;

export class DatetimeOffsetsSerializer
  implements __OperationSerializer<RestJsonService<any>, "DatetimeOffsets", DatetimeOffsetsErrors>
{
  serialize = serializeDatetimeOffsetsResponse;
  deserialize = deserializeDatetimeOffsetsRequest;

  isOperationError(error: any): error is DatetimeOffsetsErrors {
    return false;
  }

  serializeError(error: DatetimeOffsetsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
