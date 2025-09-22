// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { TestNoPayloadInputOutput } from "../../models/models_0";
import { deserializeTestPostNoPayloadRequest, serializeTestPostNoPayloadResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestPostNoPayload<Context> = __Operation<
  TestPostNoPayloadServerInput,
  TestPostNoPayloadServerOutput,
  Context
>;

export interface TestPostNoPayloadServerInput extends TestNoPayloadInputOutput {}
export namespace TestPostNoPayloadServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof TestNoPayloadInputOutput.validate>[0]) => __ValidationFailure[] =
    TestNoPayloadInputOutput.validate;
}
export interface TestPostNoPayloadServerOutput extends TestNoPayloadInputOutput {}

export type TestPostNoPayloadErrors = never;

export class TestPostNoPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestPostNoPayload", TestPostNoPayloadErrors>
{
  serialize = serializeTestPostNoPayloadResponse;
  deserialize = deserializeTestPostNoPayloadRequest;

  isOperationError(error: any): error is TestPostNoPayloadErrors {
    return false;
  }

  serializeError(error: TestPostNoPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
