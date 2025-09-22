// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ServiceException as __BaseException,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { ComplexError, FooError, GreetingWithErrorsOutput, InvalidGreeting } from "../../models/models_0";
import {
  deserializeGreetingWithErrorsRequest,
  serializeComplexErrorError,
  serializeFooErrorError,
  serializeGreetingWithErrorsResponse,
  serializeInvalidGreetingError,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type GreetingWithErrors<Context> = __Operation<
  GreetingWithErrorsServerInput,
  GreetingWithErrorsServerOutput,
  Context
>;

export interface GreetingWithErrorsServerInput {}
export namespace GreetingWithErrorsServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface GreetingWithErrorsServerOutput extends GreetingWithErrorsOutput {}

export type GreetingWithErrorsErrors = InvalidGreeting | ComplexError | FooError;

export class GreetingWithErrorsSerializer
  implements __OperationSerializer<RestJsonService<any>, "GreetingWithErrors", GreetingWithErrorsErrors>
{
  serialize = serializeGreetingWithErrorsResponse;
  deserialize = deserializeGreetingWithErrorsRequest;

  isOperationError(error: any): error is GreetingWithErrorsErrors {
    const names: GreetingWithErrorsErrors["name"][] = ["InvalidGreeting", "ComplexError", "FooError"];
    return names.includes(error.name);
  }

  serializeError(error: GreetingWithErrorsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "InvalidGreeting": {
        return serializeInvalidGreetingError(error, ctx);
      }
      case "ComplexError": {
        return serializeComplexErrorError(error, ctx);
      }
      case "FooError": {
        return serializeFooErrorError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }
}
