// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedPatternOverrideInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedPatternOverrideRequest,
  serializeMalformedPatternOverrideResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedPatternOverride<Context> = __Operation<
  MalformedPatternOverrideServerInput,
  MalformedPatternOverrideServerOutput,
  Context
>;

export interface MalformedPatternOverrideServerInput extends MalformedPatternOverrideInput {}
export namespace MalformedPatternOverrideServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedPatternOverrideInput.validate>[0]) => __ValidationFailure[] =
    MalformedPatternOverrideInput.validate;
}
export interface MalformedPatternOverrideServerOutput {}

export type MalformedPatternOverrideErrors = ValidationException;

export class MalformedPatternOverrideSerializer
  implements
    __OperationSerializer<RestJsonValidationService<any>, "MalformedPatternOverride", MalformedPatternOverrideErrors>
{
  serialize = serializeMalformedPatternOverrideResponse;
  deserialize = deserializeMalformedPatternOverrideRequest;

  isOperationError(error: any): error is MalformedPatternOverrideErrors {
    const names: MalformedPatternOverrideErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedPatternOverrideErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
