import { SimpleScalarPropertiesInputOutput } from "../../models/models_0";
import {
  deserializeSimpleScalarPropertiesRequest,
  serializeSimpleScalarPropertiesResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";
import { HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
import { OperationSerializer, Operation as __Operation } from "@aws-smithy/server-common";

export type SimpleScalarProperties = __Operation<SimpleScalarPropertiesServerInput, SimpleScalarPropertiesServerOutput>;

export type SimpleScalarPropertiesServerInput = SimpleScalarPropertiesInputOutput;
export type SimpleScalarPropertiesServerOutput = SimpleScalarPropertiesInputOutput & __MetadataBearer;

export type SimpleScalarPropertiesErrors = never;

export class SimpleScalarPropertiesSerializer
  implements OperationSerializer<RestJsonService, "SimpleScalarProperties", SimpleScalarPropertiesErrors> {
  serialize = serializeSimpleScalarPropertiesResponse;
  deserialize = deserializeSimpleScalarPropertiesRequest;

  isOperationError(error: any): error is SimpleScalarPropertiesErrors {
    return false;
  }

  serializeError(error: SimpleScalarPropertiesErrors, ctx: Omit<SerdeContext, "endpoint">): Promise<__HttpResponse> {
    throw error;
  }
}
