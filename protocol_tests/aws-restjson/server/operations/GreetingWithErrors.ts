import { ComplexError, FooError, GreetingWithErrorsOutput, InvalidGreeting } from "../../models/models_0";
import {
  deserializeGreetingWithErrorsRequest,
  serializeComplexErrorError,
  serializeFooErrorError,
  serializeGreetingWithErrorsResponse,
  serializeInvalidGreetingError,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type GreetingWithErrors = __Operation<GreetingWithErrorsServerInput, GreetingWithErrorsServerOutput>;

export type GreetingWithErrorsServerInput = {};
export type GreetingWithErrorsServerOutput = GreetingWithErrorsOutput & __MetadataBearer;

export type GreetingWithErrorsErrors = FooError | ComplexError | InvalidGreeting;

export class GreetingWithErrorsSerializer
  implements OperationSerializer<RestJsonService, "GreetingWithErrors", GreetingWithErrorsErrors> {
  serialize = serializeGreetingWithErrorsResponse;
  deserialize = deserializeGreetingWithErrorsRequest;

  isOperationError(error: any): error is GreetingWithErrorsErrors {
    const names: GreetingWithErrorsErrors["name"][] = ["FooError", "ComplexError", "InvalidGreeting"];
    return names.includes(error.name);
  }

  serializeError(error: GreetingWithErrorsErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    switch (error.name) {
      case "FooError": {
        return serializeFooErrorError(error, ctx);
      }
      case "ComplexError": {
        return serializeComplexErrorError(error, ctx);
      }
      case "InvalidGreeting": {
        return serializeInvalidGreetingError(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }
}
