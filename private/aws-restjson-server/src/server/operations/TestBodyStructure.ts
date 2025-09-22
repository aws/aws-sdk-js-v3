// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { TestBodyStructureInputOutput } from "../../models/models_0";
import { deserializeTestBodyStructureRequest, serializeTestBodyStructureResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestBodyStructure<Context> = __Operation<
  TestBodyStructureServerInput,
  TestBodyStructureServerOutput,
  Context
>;

export interface TestBodyStructureServerInput extends TestBodyStructureInputOutput {}
export namespace TestBodyStructureServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof TestBodyStructureInputOutput.validate>[0]) => __ValidationFailure[] =
    TestBodyStructureInputOutput.validate;
}
export interface TestBodyStructureServerOutput extends TestBodyStructureInputOutput {}

export type TestBodyStructureErrors = never;

export class TestBodyStructureSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestBodyStructure", TestBodyStructureErrors>
{
  serialize = serializeTestBodyStructureResponse;
  deserialize = deserializeTestBodyStructureRequest;

  isOperationError(error: any): error is TestBodyStructureErrors {
    return false;
  }

  serializeError(error: TestBodyStructureErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
