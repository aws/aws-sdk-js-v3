import { ServiceCustomizationDefinition } from "@aws-sdk/build-types";
import { packageNameToVariable } from "../../packageNameToVariable";
import { IMPORTS } from "../../internalImports";

export const validateBucketNameMiddleware: ServiceCustomizationDefinition = {
  commands: {},
  client: [
    {
      imports: [IMPORTS["middleware-sdk-s3"]],
      step: "initialize",
      priority: 0,
      type: "Middleware",
      tags: "{VALIDATE_BUCKET_NAME: true}",
      expression: `${packageNameToVariable(
        "@aws-sdk/middleware-sdk-s3"
      )}.validateBucketName`
    }
  ]
};
