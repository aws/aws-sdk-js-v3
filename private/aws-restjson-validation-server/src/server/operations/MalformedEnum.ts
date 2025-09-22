// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedEnumInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedEnumRequest,
  serializeMalformedEnumResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedEnum<Context> = __Operation<MalformedEnumServerInput, MalformedEnumServerOutput, Context>;

export interface MalformedEnumServerInput extends MalformedEnumInput {}
export namespace MalformedEnumServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedEnumInput.validate>[0]) => __ValidationFailure[] =
    MalformedEnumInput.validate;
}
export interface MalformedEnumServerOutput {}

export type MalformedEnumErrors = ValidationException;

export class MalformedEnumSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "MalformedEnum", MalformedEnumErrors>
{
  serialize = serializeMalformedEnumResponse;
  deserialize = deserializeMalformedEnumRequest;

  isOperationError(error: any): error is MalformedEnumErrors {
    const names: MalformedEnumErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedEnumErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
