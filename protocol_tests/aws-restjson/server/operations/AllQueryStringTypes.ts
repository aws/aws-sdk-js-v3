import { AllQueryStringTypesInput } from "../../models/models_0";
import {
  deserializeAllQueryStringTypesRequest,
  serializeAllQueryStringTypesResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type AllQueryStringTypes = __Operation<AllQueryStringTypesServerInput, AllQueryStringTypesServerOutput>;

export type AllQueryStringTypesServerInput = AllQueryStringTypesInput;
export type AllQueryStringTypesServerOutput = __MetadataBearer;

export type AllQueryStringTypesErrors = never;

export class AllQueryStringTypesSerializer
  implements OperationSerializer<RestJsonService, "AllQueryStringTypes", AllQueryStringTypesErrors> {
  serialize = serializeAllQueryStringTypesResponse;
  deserialize = deserializeAllQueryStringTypesRequest;

  isOperationError(error: any): error is AllQueryStringTypesErrors {
    return false;
  }

  serializeError(error: AllQueryStringTypesErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
