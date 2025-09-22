// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedUniqueItemsInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedUniqueItemsRequest,
  serializeMalformedUniqueItemsResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedUniqueItems<Context> = __Operation<
  MalformedUniqueItemsServerInput,
  MalformedUniqueItemsServerOutput,
  Context
>;

export interface MalformedUniqueItemsServerInput extends MalformedUniqueItemsInput {}
export namespace MalformedUniqueItemsServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MalformedUniqueItemsInput.validate>[0]) => __ValidationFailure[] =
    MalformedUniqueItemsInput.validate;
}
export interface MalformedUniqueItemsServerOutput {}

export type MalformedUniqueItemsErrors = ValidationException;

export class MalformedUniqueItemsSerializer
  implements __OperationSerializer<RestJsonValidationService<any>, "MalformedUniqueItems", MalformedUniqueItemsErrors>
{
  serialize = serializeMalformedUniqueItemsResponse;
  deserialize = deserializeMalformedUniqueItemsRequest;

  isOperationError(error: any): error is MalformedUniqueItemsErrors {
    const names: MalformedUniqueItemsErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedUniqueItemsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
