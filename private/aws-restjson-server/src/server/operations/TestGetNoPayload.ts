// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { TestNoPayloadInputOutput } from "../../models/models_0";
import { deserializeTestGetNoPayloadRequest, serializeTestGetNoPayloadResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestGetNoPayload<Context> = __Operation<TestGetNoPayloadServerInput, TestGetNoPayloadServerOutput, Context>;

export interface TestGetNoPayloadServerInput extends TestNoPayloadInputOutput {}
export namespace TestGetNoPayloadServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof TestNoPayloadInputOutput.validate>[0]) => __ValidationFailure[] =
    TestNoPayloadInputOutput.validate;
}
export interface TestGetNoPayloadServerOutput extends TestNoPayloadInputOutput {}

export type TestGetNoPayloadErrors = never;

export class TestGetNoPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestGetNoPayload", TestGetNoPayloadErrors>
{
  serialize = serializeTestGetNoPayloadResponse;
  deserialize = deserializeTestGetNoPayloadRequest;

  isOperationError(error: any): error is TestGetNoPayloadErrors {
    return false;
  }

  serializeError(error: TestGetNoPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
