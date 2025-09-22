// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedRequiredInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedRequiredRequest,
  serializeMalformedRequiredResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedRequired<Context> = __Operation<
  MalformedRequiredServerInput,
  MalformedRequiredServerOutput,
  Context
>;

export interface MalformedRequiredServerInput extends MalformedRequiredInput {}
export namespace MalformedRequiredServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedRequiredInput.validate>[0]) => __ValidationFailure[] =
    MalformedRequiredInput.validate;
}
export interface MalformedRequiredServerOutput {}

export type MalformedRequiredErrors = ValidationException;

export class MalformedRequiredSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "MalformedRequired", MalformedRequiredErrors>
{
  serialize = serializeMalformedRequiredResponse;
  deserialize = deserializeMalformedRequiredRequest;

  isOperationError(error: any): error is MalformedRequiredErrors {
    const names: MalformedRequiredErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedRequiredErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
