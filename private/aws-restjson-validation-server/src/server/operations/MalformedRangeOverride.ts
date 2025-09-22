// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedRangeOverrideInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedRangeOverrideRequest,
  serializeMalformedRangeOverrideResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedRangeOverride<Context> = __Operation<
  MalformedRangeOverrideServerInput,
  MalformedRangeOverrideServerOutput,
  Context
>;

export interface MalformedRangeOverrideServerInput extends MalformedRangeOverrideInput {}
export namespace MalformedRangeOverrideServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedRangeOverrideInput.validate>[0]) => __ValidationFailure[] =
    MalformedRangeOverrideInput.validate;
}
export interface MalformedRangeOverrideServerOutput {}

export type MalformedRangeOverrideErrors = ValidationException;

export class MalformedRangeOverrideSerializer
  implements
    __OperationSerializer<RestJsonValidationService<any>, "MalformedRangeOverride", MalformedRangeOverrideErrors>
{
  serialize = serializeMalformedRangeOverrideResponse;
  deserialize = deserializeMalformedRangeOverrideRequest;

  isOperationError(error: any): error is MalformedRangeOverrideErrors {
    const names: MalformedRangeOverrideErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedRangeOverrideErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
