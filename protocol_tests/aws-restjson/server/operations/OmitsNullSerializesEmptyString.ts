import { OmitsNullSerializesEmptyStringInput } from "../../models/models_0";
import {
  deserializeOmitsNullSerializesEmptyStringRequest,
  serializeOmitsNullSerializesEmptyStringResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type OmitsNullSerializesEmptyString = __Operation<
  OmitsNullSerializesEmptyStringServerInput,
  OmitsNullSerializesEmptyStringServerOutput
>;

export type OmitsNullSerializesEmptyStringServerInput = OmitsNullSerializesEmptyStringInput;
export type OmitsNullSerializesEmptyStringServerOutput = __MetadataBearer;

export type OmitsNullSerializesEmptyStringErrors = never;

export class OmitsNullSerializesEmptyStringSerializer
  implements
    OperationSerializer<RestJsonService, "OmitsNullSerializesEmptyString", OmitsNullSerializesEmptyStringErrors> {
  serialize = serializeOmitsNullSerializesEmptyStringResponse;
  deserialize = deserializeOmitsNullSerializesEmptyStringRequest;

  isOperationError(error: any): error is OmitsNullSerializesEmptyStringErrors {
    return false;
  }

  serializeError(
    error: OmitsNullSerializesEmptyStringErrors,
    ctx: Omit<SerdeContext, "endpoint">
  ): Promise<__HttpResponse> {
    throw error;
  }
}
