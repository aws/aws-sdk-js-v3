// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { ContentTypeParametersInput, ContentTypeParametersOutput } from "../../models/models_0";
import {
  deserializeContentTypeParametersRequest,
  serializeContentTypeParametersResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type ContentTypeParameters<Context> = __Operation<
  ContentTypeParametersServerInput,
  ContentTypeParametersServerOutput,
  Context
>;

export interface ContentTypeParametersServerInput extends ContentTypeParametersInput {}
export namespace ContentTypeParametersServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof ContentTypeParametersInput.validate>[0]) => __ValidationFailure[] =
    ContentTypeParametersInput.validate;
}
export interface ContentTypeParametersServerOutput extends ContentTypeParametersOutput {}

export type ContentTypeParametersErrors = never;

export class ContentTypeParametersSerializer
  implements __OperationSerializer<RestJsonService<any>, "ContentTypeParameters", ContentTypeParametersErrors>
{
  serialize = serializeContentTypeParametersResponse;
  deserialize = deserializeContentTypeParametersRequest;

  isOperationError(error: any): error is ContentTypeParametersErrors {
    return false;
  }

  serializeError(error: ContentTypeParametersErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
