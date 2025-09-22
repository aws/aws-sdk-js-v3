// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpChecksumRequiredInputOutput } from "../../models/models_0";
import {
  deserializeHttpChecksumRequiredRequest,
  serializeHttpChecksumRequiredResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpChecksumRequired<Context> = __Operation<
  HttpChecksumRequiredServerInput,
  HttpChecksumRequiredServerOutput,
  Context
>;

export interface HttpChecksumRequiredServerInput extends HttpChecksumRequiredInputOutput {}
export namespace HttpChecksumRequiredServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpChecksumRequiredInputOutput.validate>[0]
  ) => __ValidationFailure[] = HttpChecksumRequiredInputOutput.validate;
}
export interface HttpChecksumRequiredServerOutput extends HttpChecksumRequiredInputOutput {}

export type HttpChecksumRequiredErrors = never;

export class HttpChecksumRequiredSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpChecksumRequired", HttpChecksumRequiredErrors>
{
  serialize = serializeHttpChecksumRequiredResponse;
  deserialize = deserializeHttpChecksumRequiredRequest;

  isOperationError(error: any): error is HttpChecksumRequiredErrors {
    return false;
  }

  serializeError(error: HttpChecksumRequiredErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
