// smithy-typescript generated code
import {
  Operation as __Operation,
  OperationSerializer as __OperationSerializer,
  ServerSerdeContext,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
import { HttpResponse as __HttpResponse } from "@smithy/protocol-http";

import { FractionalSecondsOutput } from "../../models/models_0";
import { deserializeFractionalSecondsRequest, serializeFractionalSecondsResponse } from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type FractionalSeconds<Context> = __Operation<
  FractionalSecondsServerInput,
  FractionalSecondsServerOutput,
  Context
>;

export interface FractionalSecondsServerInput {}
export namespace FractionalSecondsServerInput {
  /**
   * @internal
   */
  export const validate: () => __ValidationFailure[] = () => [];
}
export interface FractionalSecondsServerOutput extends FractionalSecondsOutput {}

export type FractionalSecondsErrors = never;

export class FractionalSecondsSerializer
  implements __OperationSerializer<RestJsonService<any>, "FractionalSeconds", FractionalSecondsErrors>
{
  serialize = serializeFractionalSecondsResponse;
  deserialize = deserializeFractionalSecondsRequest;

  isOperationError(error: any): error is FractionalSecondsErrors {
    return false;
  }

  serializeError(error: FractionalSecondsErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}
