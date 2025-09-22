// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { TestNoPayloadInputOutput } from "../../models/models_0";
import {
  deserializeTestGetNoInputNoPayloadRequest,
  serializeTestGetNoInputNoPayloadResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestGetNoInputNoPayload<Context> = __Operation<
  TestGetNoInputNoPayloadServerInput,
  TestGetNoInputNoPayloadServerOutput,
  Context
>;

export interface TestGetNoInputNoPayloadServerInput {}
export namespace TestGetNoInputNoPayloadServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface TestGetNoInputNoPayloadServerOutput extends TestNoPayloadInputOutput {}

export type TestGetNoInputNoPayloadErrors = never;

export class TestGetNoInputNoPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestGetNoInputNoPayload", TestGetNoInputNoPayloadErrors>
{
  serialize = serializeTestGetNoInputNoPayloadResponse;
  deserialize = deserializeTestGetNoInputNoPayloadRequest;

  isOperationError(error: any): error is TestGetNoInputNoPayloadErrors {
    return false;
  }

  serializeError(error: TestGetNoInputNoPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
