import { MiddlewareCustomizationDefinition } from "@aws-sdk/build-types";
import { IMPORTS } from "../../internalImports";
import { packageNameToVariable } from "../../packageNameToVariable";

export const setContentLengthConfiguration: MiddlewareCustomizationDefinition = {
  type: "Middleware",
  imports: [IMPORTS["middleware-content-length"]],
  step: "build",
  priority: -80,
  tags: "{SET_CONTENT_LENGTH: true}",
  expression: `${packageNameToVariable(
    "@aws-sdk/middleware-content-length"
  )}.contentLengthMiddleware(
        this.config.bodyLengthChecker
    )`,
  configuration: {
    bodyLengthChecker: {
      type: "forked",
      internal: true,
      inputType: "(body: any) => number | undefined",
      documentation:
        "A function that can calculate the length of a request body.",
      browser: {
        required: false,
        imports: [IMPORTS["util-body-length-browser"]],
        default: {
          type: "value",
          expression: `${packageNameToVariable(
            "@aws-sdk/util-body-length-browser"
          )}.calculateBodyLength`
        }
      },
      node: {
        required: false,
        imports: [IMPORTS["util-body-length-node"]],
        default: {
          type: "value",
          expression: `${packageNameToVariable(
            "@aws-sdk/util-body-length-node"
          )}.calculateBodyLength`
        }
      },
      universal: {
        required: false,
        imports: [IMPORTS["util-body-length-browser"]],
        default: {
          type: "value",
          expression: `${packageNameToVariable(
            "@aws-sdk/util-body-length-browser"
          )}.calculateBodyLength`
        }
      }
    }
  }
};
