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
  deserializeNullAndEmptyHeadersServerRequest,
  serializeNullAndEmptyHeadersServerResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type NullAndEmptyHeadersServer<Context> = __Operation<
  NullAndEmptyHeadersServerServerInput,
  NullAndEmptyHeadersServerServerOutput,
  Context
>;

export interface NullAndEmptyHeadersServerServerInput extends NullAndEmptyHeadersIO {}
export namespace NullAndEmptyHeadersServerServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof NullAndEmptyHeadersIO.validate>[0]) => __ValidationFailure[] =
    NullAndEmptyHeadersIO.validate;
}
export interface NullAndEmptyHeadersServerServerOutput extends NullAndEmptyHeadersIO {}

export type NullAndEmptyHeadersServerErrors = never;

export class NullAndEmptyHeadersServerSerializer
  implements __OperationSerializer<RestJsonService<any>, "NullAndEmptyHeadersServer", NullAndEmptyHeadersServerErrors>
{
  serialize = serializeNullAndEmptyHeadersServerResponse;
  deserialize = deserializeNullAndEmptyHeadersServerRequest;

  isOperationError(error: any): error is NullAndEmptyHeadersServerErrors {
    return false;
  }

  serializeError(error: NullAndEmptyHeadersServerErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
