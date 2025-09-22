// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { TestPayloadBlobInputOutput } from "../../models/models_0";
import { deserializeTestPayloadBlobRequest, serializeTestPayloadBlobResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type TestPayloadBlob<Context> = __Operation<TestPayloadBlobServerInput, TestPayloadBlobServerOutput, Context>;

export interface TestPayloadBlobServerInput extends TestPayloadBlobInputOutput {}
export namespace TestPayloadBlobServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof TestPayloadBlobInputOutput.validate>[0]) => __ValidationFailure[] =
    TestPayloadBlobInputOutput.validate;
}
export interface TestPayloadBlobServerOutput extends TestPayloadBlobInputOutput {}

export type TestPayloadBlobErrors = never;

export class TestPayloadBlobSerializer
  implements __OperationSerializer<RestJsonService<any>, "TestPayloadBlob", TestPayloadBlobErrors>
{
  serialize = serializeTestPayloadBlobResponse;
  deserialize = deserializeTestPayloadBlobRequest;

  isOperationError(error: any): error is TestPayloadBlobErrors {
    return false;
  }

  serializeError(error: TestPayloadBlobErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
