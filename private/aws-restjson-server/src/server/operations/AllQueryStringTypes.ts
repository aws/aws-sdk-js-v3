// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { AllQueryStringTypesInput } from "../../models/models_0";
import {
  deserializeAllQueryStringTypesRequest,
  serializeAllQueryStringTypesResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type AllQueryStringTypes<Context> = __Operation<
  AllQueryStringTypesServerInput,
  AllQueryStringTypesServerOutput,
  Context
>;

export interface AllQueryStringTypesServerInput extends AllQueryStringTypesInput {}
export namespace AllQueryStringTypesServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof AllQueryStringTypesInput.validate>[0]) => __ValidationFailure[] =
    AllQueryStringTypesInput.validate;
}
export interface AllQueryStringTypesServerOutput {}

export type AllQueryStringTypesErrors = never;

export class AllQueryStringTypesSerializer
  implements __OperationSerializer<RestJsonService<any>, "AllQueryStringTypes", AllQueryStringTypesErrors>
{
  serialize = serializeAllQueryStringTypesResponse;
  deserialize = deserializeAllQueryStringTypesRequest;

  isOperationError(error: any): error is AllQueryStringTypesErrors {
    return false;
  }

  serializeError(error: AllQueryStringTypesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
