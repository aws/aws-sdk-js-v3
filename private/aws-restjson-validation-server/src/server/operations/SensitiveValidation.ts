// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { SensitiveValidationInput, ValidationException } from "../../models/models_0";
import {
  deserializeSensitiveValidationRequest,
  serializeSensitiveValidationResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type SensitiveValidation<Context> = __Operation<
  SensitiveValidationServerInput,
  SensitiveValidationServerOutput,
  Context
>;

export interface SensitiveValidationServerInput extends SensitiveValidationInput {}
export namespace SensitiveValidationServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof SensitiveValidationInput.validate>[0]) => __ValidationFailure[] =
    SensitiveValidationInput.validate;
}
export interface SensitiveValidationServerOutput {}

export type SensitiveValidationErrors = ValidationException;

export class SensitiveValidationSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "SensitiveValidation", SensitiveValidationErrors>
{
  serialize = serializeSensitiveValidationResponse;
  deserialize = deserializeSensitiveValidationRequest;

  isOperationError(error: any): error is SensitiveValidationErrors {
    const names: SensitiveValidationErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: SensitiveValidationErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
