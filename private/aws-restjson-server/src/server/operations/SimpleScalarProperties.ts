// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { SimpleScalarPropertiesInputOutput } from "../../models/models_0";
import {
  deserializeSimpleScalarPropertiesRequest,
  serializeSimpleScalarPropertiesResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type SimpleScalarProperties<Context> = __Operation<
  SimpleScalarPropertiesServerInput,
  SimpleScalarPropertiesServerOutput,
  Context
>;

export interface SimpleScalarPropertiesServerInput extends SimpleScalarPropertiesInputOutput {}
export namespace SimpleScalarPropertiesServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof SimpleScalarPropertiesInputOutput.validate>[0]
  ) => __ValidationFailure[] = SimpleScalarPropertiesInputOutput.validate;
}
export interface SimpleScalarPropertiesServerOutput extends SimpleScalarPropertiesInputOutput {}

export type SimpleScalarPropertiesErrors = never;

export class SimpleScalarPropertiesSerializer
  implements __OperationSerializer<RestJsonService<any>, "SimpleScalarProperties", SimpleScalarPropertiesErrors>
{
  serialize = serializeSimpleScalarPropertiesResponse;
  deserialize = deserializeSimpleScalarPropertiesRequest;

  isOperationError(error: any): error is SimpleScalarPropertiesErrors {
    return false;
  }

  serializeError(error: SimpleScalarPropertiesErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
