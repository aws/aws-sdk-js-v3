// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedLengthQueryStringInput, ValidationException } from "../../models/models_0";
import {
  deserializeMalformedLengthQueryStringRequest,
  serializeMalformedLengthQueryStringResponse,
  serializeValidationExceptionError,
} from "../../protocols/Aws_restJson1";
import { RestJsonValidationService } from "../RestJsonValidationService";

export type MalformedLengthQueryString<Context> = __Operation<
  MalformedLengthQueryStringServerInput,
  MalformedLengthQueryStringServerOutput,
  Context
>;

export interface MalformedLengthQueryStringServerInput extends MalformedLengthQueryStringInput {}
export namespace MalformedLengthQueryStringServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedLengthQueryStringInput.validate>[0]
  ) => __ValidationFailure[] = MalformedLengthQueryStringInput.validate;
}
export interface MalformedLengthQueryStringServerOutput {}

export type MalformedLengthQueryStringErrors = ValidationException;

export class MalformedLengthQueryStringSerializer
  implements
    __OperationSerializer<
      RestJsonValidationService<any>,
      "MalformedLengthQueryString",
      MalformedLengthQueryStringErrors
    >
{
  serialize = serializeMalformedLengthQueryStringResponse;
  deserialize = deserializeMalformedLengthQueryStringRequest;

  isOperationError(error: any): error is MalformedLengthQueryStringErrors {
    const names: MalformedLengthQueryStringErrors["name"][] = ["ValidationException"];
    return names.includes(error.name);
  }

  serializeError(error: MalformedLengthQueryStringErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
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
