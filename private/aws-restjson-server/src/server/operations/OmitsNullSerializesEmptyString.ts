// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { OmitsNullSerializesEmptyStringInput } from "../../models/models_0";
import {
  deserializeOmitsNullSerializesEmptyStringRequest,
  serializeOmitsNullSerializesEmptyStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type OmitsNullSerializesEmptyString<Context> = __Operation<
  OmitsNullSerializesEmptyStringServerInput,
  OmitsNullSerializesEmptyStringServerOutput,
  Context
>;

export interface OmitsNullSerializesEmptyStringServerInput extends OmitsNullSerializesEmptyStringInput {}
export namespace OmitsNullSerializesEmptyStringServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof OmitsNullSerializesEmptyStringInput.validate>[0]
  ) => __ValidationFailure[] = OmitsNullSerializesEmptyStringInput.validate;
}
export interface OmitsNullSerializesEmptyStringServerOutput {}

export type OmitsNullSerializesEmptyStringErrors = never;

export class OmitsNullSerializesEmptyStringSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "OmitsNullSerializesEmptyString", OmitsNullSerializesEmptyStringErrors>
{
  serialize = serializeOmitsNullSerializesEmptyStringResponse;
  deserialize = deserializeOmitsNullSerializesEmptyStringRequest;

  isOperationError(error: any): error is OmitsNullSerializesEmptyStringErrors {
    return false;
  }

  serializeError(error: OmitsNullSerializesEmptyStringErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
