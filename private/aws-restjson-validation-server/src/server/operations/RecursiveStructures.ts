// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { RecursiveStructuresInput, ValidationException } from "../../models/models_0";
import {
  deserializeRecursiveStructuresRequest,
  serializeRecursiveStructuresResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type RecursiveStructures<Context> = __Operation<
  RecursiveStructuresServerInput,
  RecursiveStructuresServerOutput,
  Context
>;

export interface RecursiveStructuresServerInput extends RecursiveStructuresInput {}
export namespace RecursiveStructuresServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof RecursiveStructuresInput.validate>[0]) => __ValidationFailure[] =
    RecursiveStructuresInput.validate;
}
export interface RecursiveStructuresServerOutput {}

export type RecursiveStructuresErrors = ValidationException;

export class RecursiveStructuresSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "RecursiveStructures", RecursiveStructuresErrors>
{
  serialize = serializeRecursiveStructuresResponse;
  deserialize = deserializeRecursiveStructuresRequest;

  isOperationError(error: any): error is RecursiveStructuresErrors {
    const names: RecursiveStructuresErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: RecursiveStructuresErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
