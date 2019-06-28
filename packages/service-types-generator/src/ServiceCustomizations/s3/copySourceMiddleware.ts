import { IMPORTS } from "../../internalImports";
import {
  ServiceCustomizationDefinition,
  CustomizationDefinition
} from "@aws-sdk/build-types";
import { packageNameToVariable } from "../../packageNameToVariable";

const copySourceMiddleware: CustomizationDefinition = {
  type: "Middleware",
  step: "initialize",
  priority: 0,
  tags: "{COPYSOURCE: true, URI_ENCODE: true}",
  expression: `${packageNameToVariable(
    "@aws-sdk/middleware-s3-copysource"
  )}.encodeCopySource`,
  imports: [IMPORTS["middleware-s3-copysource"]]
};

export const copySourceMiddlewareCustomization: ServiceCustomizationDefinition = {
  commands: {
    CopyObject: [copySourceMiddleware],
    UploadPartCopy: [copySourceMiddleware]
  },
  client: []
};
