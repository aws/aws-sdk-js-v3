// smithy-typescript generated code
import { RuleSetObject } from "@smithy/types";

export const ruleSet: RuleSetObject = {
  version: "1.0",
  parameters: {
    endpoint: {
      type: "string",
      builtIn: "SDK::Endpoint",
      documentation: "Endpoint used for making requests. Should be formatted as a URI.",
    },
  },
  rules: [
    {
      conditions: [
        {
          fn: "isSet",
          argv: [
            {
              ref: "endpoint",
            },
          ],
        },
      ],
      endpoint: {
        url: {
          ref: "endpoint",
        },
      },
      type: "endpoint",
    },
    {
      conditions: [],
      error: "(default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
      type: "error",
    },
  ],
};
