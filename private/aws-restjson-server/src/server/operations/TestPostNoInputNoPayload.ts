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
  deserializeTestPostNoInputNoPayloadRequest,
  serializeTestPostNoInputNoPayloadResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestPostNoInputNoPayload<Context> = __Operation<
  TestPostNoInputNoPayloadServerInput,
  TestPostNoInputNoPayloadServerOutput,
  Context
>;

export interface TestPostNoInputNoPayloadServerInput {}
export namespace TestPostNoInputNoPayloadServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface TestPostNoInputNoPayloadServerOutput extends TestNoPayloadInputOutput {}

export type TestPostNoInputNoPayloadErrors = never;

export class TestPostNoInputNoPayloadSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestPostNoInputNoPayload", TestPostNoInputNoPayloadErrors>
{
  serialize = serializeTestPostNoInputNoPayloadResponse;
  deserialize = deserializeTestPostNoInputNoPayloadRequest;

  isOperationError(error: any): error is TestPostNoInputNoPayloadErrors {
    return false;
  }

  serializeError(error: TestPostNoInputNoPayloadErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
