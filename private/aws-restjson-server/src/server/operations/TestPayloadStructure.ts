// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { TestPayloadStructureInputOutput } from "../../models/models_0";
import {
  deserializeTestPayloadStructureRequest,
  serializeTestPayloadStructureResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestPayloadStructure<Context> = __Operation<
  TestPayloadStructureServerInput,
  TestPayloadStructureServerOutput,
  Context
>;

export interface TestPayloadStructureServerInput extends TestPayloadStructureInputOutput {}
export namespace TestPayloadStructureServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof TestPayloadStructureInputOutput.validate>[0]
  ) => __ValidationFailure[] = TestPayloadStructureInputOutput.validate;
}
export interface TestPayloadStructureServerOutput extends TestPayloadStructureInputOutput {}

export type TestPayloadStructureErrors = never;

export class TestPayloadStructureSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestPayloadStructure", TestPayloadStructureErrors>
{
  serialize = serializeTestPayloadStructureResponse;
  deserialize = deserializeTestPayloadStructureRequest;

  isOperationError(error: any): error is TestPayloadStructureErrors {
    return false;
  }

  serializeError(error: TestPayloadStructureErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
