// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedRangeInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedRangeRequest,
  serializeMalformedRangeResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedRange<Context> = __Operation<MalformedRangeServerInput, MalformedRangeServerOutput, Context>;

export interface MalformedRangeServerInput extends MalformedRangeInput {}
export namespace MalformedRangeServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedRangeInput.validate>[0]) => __ValidationFailure[] =
    MalformedRangeInput.validate;
}
export interface MalformedRangeServerOutput {}

export type MalformedRangeErrors = ValidationException;

export class MalformedRangeSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "MalformedRange", MalformedRangeErrors>
{
  serialize = serializeMalformedRangeResponse;
  deserialize = deserializeMalformedRangeRequest;

  isOperationError(error: any): error is MalformedRangeErrors {
    const names: MalformedRangeErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedRangeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
