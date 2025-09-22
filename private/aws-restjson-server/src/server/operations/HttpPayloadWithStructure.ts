// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { HttpPayloadWithStructureInputOutput } from "../../models/models_0";
import {
  deserializeHttpPayloadWithStructureRequest,
  serializeHttpPayloadWithStructureResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type HttpPayloadWithStructure<Context> = __Operation<
  HttpPayloadWithStructureServerInput,
  HttpPayloadWithStructureServerOutput,
  Context
>;

export interface HttpPayloadWithStructureServerInput extends HttpPayloadWithStructureInputOutput {}
export namespace HttpPayloadWithStructureServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof HttpPayloadWithStructureInputOutput.validate>[0]
  ) => __ValidationFailure[] = HttpPayloadWithStructureInputOutput.validate;
}
export interface HttpPayloadWithStructureServerOutput extends HttpPayloadWithStructureInputOutput {}

export type HttpPayloadWithStructureErrors = never;

export class HttpPayloadWithStructureSerializer
  implements __OperationSerializer<RestJsonService<any>, "HttpPayloadWithStructure", HttpPayloadWithStructureErrors>
{
  serialize = serializeHttpPayloadWithStructureResponse;
  deserialize = deserializeHttpPayloadWithStructureRequest;

  isOperationError(error: any): error is HttpPayloadWithStructureErrors {
    return false;
  }

  serializeError(error: HttpPayloadWithStructureErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
