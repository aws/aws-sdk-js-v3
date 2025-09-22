// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedLengthInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedLengthRequest,
  serializeMalformedLengthResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedLength<Context> = __Operation<MalformedLengthServerInput, MalformedLengthServerOutput, Context>;

export interface MalformedLengthServerInput extends MalformedLengthInput {}
export namespace MalformedLengthServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedLengthInput.validate>[0]) => __ValidationFailure[] =
    MalformedLengthInput.validate;
}
export interface MalformedLengthServerOutput {}

export type MalformedLengthErrors = ValidationException;

export class MalformedLengthSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "MalformedLength", MalformedLengthErrors>
{
  serialize = serializeMalformedLengthResponse;
  deserialize = deserializeMalformedLengthRequest;

  isOperationError(error: any): error is MalformedLengthErrors {
    const names: MalformedLengthErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedLengthErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
