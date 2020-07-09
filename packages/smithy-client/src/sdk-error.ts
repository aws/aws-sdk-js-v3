import { SmithyException } from "./exception";
import { MetadataBearer } from "@aws-sdk/types";

export type SdkError = Error & SmithyException & MetadataBearer;
