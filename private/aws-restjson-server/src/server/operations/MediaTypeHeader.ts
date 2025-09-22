// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { MediaTypeHeaderInput, MediaTypeHeaderOutput } from "../../models/models_0";
import { deserializeMediaTypeHeaderRequest, serializeMediaTypeHeaderResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type MediaTypeHeader<Context> = __Operation<MediaTypeHeaderServerInput, MediaTypeHeaderServerOutput, Context>;

export interface MediaTypeHeaderServerInput extends MediaTypeHeaderInput {}
export namespace MediaTypeHeaderServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof MediaTypeHeaderInput.validate>[0]) => __ValidationFailure[] =
    MediaTypeHeaderInput.validate;
}
export interface MediaTypeHeaderServerOutput extends MediaTypeHeaderOutput {}

export type MediaTypeHeaderErrors = never;

export class MediaTypeHeaderSerializer
  implements __OperationSerializer<RestJsonService<any>, "MediaTypeHeader", MediaTypeHeaderErrors>
{
  serialize = serializeMediaTypeHeaderResponse;
  deserialize = deserializeMediaTypeHeaderRequest;

  isOperationError(error: any): error is MediaTypeHeaderErrors {
    return false;
  }

  serializeError(error: MediaTypeHeaderErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
