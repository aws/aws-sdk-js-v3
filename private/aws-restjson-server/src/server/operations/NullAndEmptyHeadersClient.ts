// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { NullAndEmptyHeadersIO } from "../../models/models_0";
import {
  deserializeNullAndEmptyHeadersClientRequest,
  serializeNullAndEmptyHeadersClientResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type NullAndEmptyHeadersClient<Context> = __Operation<
  NullAndEmptyHeadersClientServerInput,
  NullAndEmptyHeadersClientServerOutput,
  Context
>;

export interface NullAndEmptyHeadersClientServerInput extends NullAndEmptyHeadersIO {}
export namespace NullAndEmptyHeadersClientServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof NullAndEmptyHeadersIO.validate>[0]) => __ValidationFailure[] =
    NullAndEmptyHeadersIO.validate;
}
export interface NullAndEmptyHeadersClientServerOutput extends NullAndEmptyHeadersIO {}

export type NullAndEmptyHeadersClientErrors = never;

export class NullAndEmptyHeadersClientSerializer
  implements __OperationSerializer<RestJsonService<any>, "NullAndEmptyHeadersClient", NullAndEmptyHeadersClientErrors>
{
  serialize = serializeNullAndEmptyHeadersClientResponse;
  deserialize = deserializeNullAndEmptyHeadersClientRequest;

  isOperationError(error: any): error is NullAndEmptyHeadersClientErrors {
    return false;
  }

  serializeError(error: NullAndEmptyHeadersClientErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
