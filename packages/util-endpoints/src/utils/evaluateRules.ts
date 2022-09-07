import { EndpointV2 } from "@aws-sdk/types";

import { EndpointError, EvaluateOptions, RuleSetRules } from "../types";
import { evaluateEndpointRule } from "./evaluateEndpointRule";
import { evaluateErrorRule } from "./evaluateErrorRule";
import { evaluateTreeRule } from "./evaluateTreeRule";

export const evaluateRules = (rules: RuleSetRules, options: EvaluateOptions): EndpointV2 => {
  for (const rule of rules) {
    if (rule.type === "endpoint") {
      const endpointOrUndefined = evaluateEndpointRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else if (rule.type === "error") {
      evaluateErrorRule(rule, options);
    } else if (rule.type === "tree") {
      const endpointOrUndefined = evaluateTreeRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else {
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
};
