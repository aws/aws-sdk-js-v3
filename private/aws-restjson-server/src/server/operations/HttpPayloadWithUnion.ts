// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpPayloadWithUnionInputOutput } from "../../models/models_0";
import {
  deserializeHttpPayloadWithUnionRequest,
  serializeHttpPayloadWithUnionResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpPayloadWithUnion<Context> = __Operation<
  HttpPayloadWithUnionServerInput,
  HttpPayloadWithUnionServerOutput,
  Context
>;

export interface HttpPayloadWithUnionServerInput extends HttpPayloadWithUnionInputOutput {}
export namespace HttpPayloadWithUnionServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpPayloadWithUnionInputOutput.validate>[0]
  ) => __ValidationFailure[] = HttpPayloadWithUnionInputOutput.validate;
}
export interface HttpPayloadWithUnionServerOutput extends HttpPayloadWithUnionInputOutput {}

export type HttpPayloadWithUnionErrors = never;

export class HttpPayloadWithUnionSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpPayloadWithUnion", HttpPayloadWithUnionErrors>
{
  serialize = serializeHttpPayloadWithUnionResponse;
  deserialize = deserializeHttpPayloadWithUnionRequest;

  isOperationError(error: any): error is HttpPayloadWithUnionErrors {
    return false;
  }

  serializeError(error: HttpPayloadWithUnionErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
