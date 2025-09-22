// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MalformedContentTypeWithoutBodyEmptyInputInput } from "../../models/models_0";
import {
  deserializeMalformedContentTypeWithoutBodyEmptyInputRequest,
  serializeMalformedContentTypeWithoutBodyEmptyInputResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MalformedContentTypeWithoutBodyEmptyInput<Context> = __Operation<
  MalformedContentTypeWithoutBodyEmptyInputServerInput,
  MalformedContentTypeWithoutBodyEmptyInputServerOutput,
  Context
>;

export interface MalformedContentTypeWithoutBodyEmptyInputServerInput
  extends MalformedContentTypeWithoutBodyEmptyInputInput {}
export namespace MalformedContentTypeWithoutBodyEmptyInputServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof MalformedContentTypeWithoutBodyEmptyInputInput.validate>[0]
  ) => __ValidationFailure[] = MalformedContentTypeWithoutBodyEmptyInputInput.validate;
}
export interface MalformedContentTypeWithoutBodyEmptyInputServerOutput {}

export type MalformedContentTypeWithoutBodyEmptyInputErrors = never;

export class MalformedContentTypeWithoutBodyEmptyInputSerializer
  implements
    __OperationSerializer<
      RestJsonService<any>,
      "MalformedContentTypeWithoutBodyEmptyInput",
      MalformedContentTypeWithoutBodyEmptyInputErrors
    >
{
  serialize = serializeMalformedContentTypeWithoutBodyEmptyInputResponse;
  deserialize = deserializeMalformedContentTypeWithoutBodyEmptyInputRequest;

  isOperationError(error: any): error is MalformedContentTypeWithoutBodyEmptyInputErrors {
    return false;
  }

  serializeError(
    error: MalformedContentTypeWithoutBodyEmptyInputErrors,
    ctx: ServerSerdeContext
  ): Promise<__HttpResponse> {
    throw error;
  }
}
