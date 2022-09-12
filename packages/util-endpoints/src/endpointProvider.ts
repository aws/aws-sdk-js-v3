import { EndpointParameters, EndpointV2, Logger } from "@aws-sdk/types";

import { constructEndpoint } from "./constructEndpoint";
import { isSet } from "./functions/builtIns";
import { evaluateFunction } from "./functions/evaluateFunction";
import { Condition, EndpointFunction, EndpointRule, ErrorRule, Rule, RuleSet, TreeRule } from "./RuleSet";
import { EndpointParametersAndAssignments, ResolvedFunctionArg } from "./types";
import { isEndpointFunction } from "./utils";

const EMPTY_RESULT = undefined;
const EXHAUSTED_RULE_ERROR_MSG = "Exhaused all rules in tree rule without match";

export interface EndpointProviderContext {
  logger?: Logger;
}
export const endpointProvider = (
  params: EndpointParameters,
  model: RuleSet,
  context: EndpointProviderContext = {}
): EndpointV2 => {
  // set default values to params
  for (const [name, parameterModel] of Object.entries(model.parameters)) {
    if (parameterModel.default && !isSet(params, [name])) {
      params[name] = parameterModel.default;
    }
  }
  // validate input params have expected types
  for (const [name, paramValue] of Object.entries(params)) {
    if (model.parameters[name] && model.parameters[name].type.toLowerCase() !== typeof paramValue) {
      throw new Error(
        `Endpoint parameter ${name} has wrong type, expected "${
          model.parameters[name].type
        }", got "${typeof paramValue}"`
      );
    }
  }
  // validate required params
  for (const [name, parameterModel] of Object.entries(model.parameters)) {
    if (parameterModel.required && !isSet(params, [name])) {
      throw new Error(`Required endpoint paramter ${name} is missing`);
    }
  }
  // evaluate rules
  for (const ruleModel of model.rules) {
    if (!isEndpointFunction(ruleModel) && ruleModel.documentation) {
      context?.logger?.debug(ruleModel.documentation);
    }
    const endpoint = evaluateRule(params, ruleModel, context);
    if (endpoint !== EMPTY_RESULT) {
      return endpoint;
    }
  }
  throw new Error(EXHAUSTED_RULE_ERROR_MSG);
};

const evaluateConditions = (
  params: EndpointParametersAndAssignments,
  conditionsModel: Condition[]
): [boolean, Record<string, ResolvedFunctionArg>] => {
  const assigned: Record<string, ResolvedFunctionArg> = {};
  for (const conditionModel of conditionsModel) {
    const res = evaluateFunction(params, conditionModel);
    if (res === false) {
      // TODO: needs to confirm is falsy or strict false here
      return [false, assigned];
    }
    if (conditionModel.assign) {
      assigned[conditionModel.assign] = res;
    }
  }
  return [true, assigned];
};

const evaluateRule = (
  params: EndpointParametersAndAssignments,
  ruleModel: Rule | EndpointFunction,
  context: EndpointProviderContext = {}
): EndpointV2 | undefined => {
  if (isEndpointFunction(ruleModel)) {
    const res = evaluateFunction(params, ruleModel);
    return res as EndpointV2; // TODO(endpointsv2) validate res
  } else {
    if (ruleModel.documentation) {
      context?.logger?.debug(ruleModel.documentation);
    }
    if (ruleModel.type === "endpoint") {
      return evaluateEndpointRule(params, ruleModel);
    }
    if (ruleModel.type === "error") {
      return evaluateErrorRule(params, ruleModel);
    }
    if (ruleModel.type === "tree") {
      return evaluateTreeRule(params, ruleModel, context);
    }
  }
};

const evaluateEndpointRule = (
  params: EndpointParametersAndAssignments,
  endpointRule: EndpointRule
): EndpointV2 | undefined => {
  const [pass, assignedParams] = evaluateConditions(params, endpointRule.conditions);
  if (!pass) {
    return;
  } else {
    const paramsInScope = { ...params, ...assignedParams };
    return constructEndpoint(paramsInScope, endpointRule);
  }
};

const evaluateErrorRule = (params: EndpointParametersAndAssignments, errorRule: ErrorRule): EndpointV2 | undefined => {
  const [pass, assignedParams] = evaluateConditions(params, errorRule.conditions);
  if (!pass) {
    return;
  }
  /* TODO(endpointsv2) */
  //PASS
};

const evaluateTreeRule = (
  params: EndpointParametersAndAssignments,
  treeRule: TreeRule,
  context: EndpointProviderContext = {}
): EndpointV2 | undefined => {
  const [pass, assignedParams] = evaluateConditions(params, treeRule.conditions);
  if (!pass) {
    return;
  }
  for (const subRule of treeRule.rules) {
    const endpoint = evaluateRule(params, subRule, context);
    if (endpoint !== EMPTY_RESULT) {
      return endpoint;
    }
  }
};
