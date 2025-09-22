// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedLengthOverrideInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedLengthOverrideRequest,
  serializeMalformedLengthOverrideResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedLengthOverride<Context> = __Operation<
  MalformedLengthOverrideServerInput,
  MalformedLengthOverrideServerOutput,
  Context
>;

export interface MalformedLengthOverrideServerInput extends MalformedLengthOverrideInput {}
export namespace MalformedLengthOverrideServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedLengthOverrideInput.validate>[0]) => __ValidationFailure[] =
    MalformedLengthOverrideInput.validate;
}
export interface MalformedLengthOverrideServerOutput {}

export type MalformedLengthOverrideErrors = ValidationException;

export class MalformedLengthOverrideSerializer
  implements
    __OperationSerializer<RestJsonValidationService<any>, "MalformedLengthOverride", MalformedLengthOverrideErrors>
{
  serialize = serializeMalformedLengthOverrideResponse;
  deserialize = deserializeMalformedLengthOverrideRequest;

  isOperationError(error: any): error is MalformedLengthOverrideErrors {
    const names: MalformedLengthOverrideErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedLengthOverrideErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationException": {
        return serializeValidationExceptionError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }
}
