import { MiddlewareCustomizationDefinition } from "@aws-sdk/build-types";
import { IMPORTS } from "../../internalImports";
import { packageNameToVariable } from "../../packageNameToVariable";

export const retryMiddleware: MiddlewareCustomizationDefinition = {
  type: "Middleware",
  imports: [IMPORTS["middleware-retry"], IMPORTS["types"]],
  step: "finalize",
  priority: Number.POSITIVE_INFINITY,
  tags: "{RETRY: true}",
  expression: `${packageNameToVariable(
    "@aws-sdk/middleware-retry"
  )}.retryMiddleware(
        this.config.maxRetries,
        this.config.retryDecider,
        this.config.delayDecider
    )`,
  conditionExpression: `this.config.maxRetries > 0`,
  configuration: {
    maxRetries: {
      type: "unified",
      inputType: "number",
      required: false,
      default: {
        type: "value",
        expression: "3"
      },
      documentation:
        "The maximum number of times requests that encounter potentially transient failures should be retried"
    },
    retryDecider: {
      type: "unified",
      inputType: `${packageNameToVariable("@aws-sdk/types")}.RetryDecider`,
      required: false,
      documentation: "A function that determines whether an error is retryable"
    },
    delayDecider: {
      type: "unified",
      inputType: `${packageNameToVariable("@aws-sdk/types")}.DelayDecider`,
      required: false,
      documentation:
        "A function that determines how long (in milliseconds) the SDK should wait before retrying a request"
    }
  }
};
