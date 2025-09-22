// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedPatternInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedPatternRequest,
  serializeMalformedPatternResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedPattern<Context> = __Operation<MalformedPatternServerInput, MalformedPatternServerOutput, Context>;

export interface MalformedPatternServerInput extends MalformedPatternInput {}
export namespace MalformedPatternServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedPatternInput.validate>[0]) => __ValidationFailure[] =
    MalformedPatternInput.validate;
}
export interface MalformedPatternServerOutput {}

export type MalformedPatternErrors = ValidationException;

export class MalformedPatternSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "MalformedPattern", MalformedPatternErrors>
{
  serialize = serializeMalformedPatternResponse;
  deserialize = deserializeMalformedPatternRequest;

  isOperationError(error: any): error is MalformedPatternErrors {
    const names: MalformedPatternErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedPatternErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
