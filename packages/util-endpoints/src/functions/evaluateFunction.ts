import { resolveReferenceValue } from "../resolveReferenceValue";
import { EndpointFunction, FunctionArg } from "../RuleSet";
import { EndpointParametersAndAssignments, ResolvedFunctionArg } from "../types";
import { isEndpointFunction } from "../utils";
import {
  booleanEquals,
  getAttr,
  getPartition,
  isSet,
  isValidHostLabel,
  not,
  parseArn,
  parseURL,
  stringEquals,
  substring,
  uriEncode,
} from "./builtIns";

export const evaluateFunction = (params: EndpointParametersAndAssignments, functionModel: EndpointFunction): any => {
  const resolvedArgv = resolveFunctionArgv(params, functionModel.argv);
  switch (functionModel.fn) {
    case "isSet":
      return isSet(params, resolvedArgv);
    case "not":
      return not(resolvedArgv);
    case "getAttr":
      return getAttr(params, resolvedArgv);
    case "aws.partition":
      return getPartition(resolvedArgv);
    case "aws.parseArn":
      return parseArn(resolvedArgv);
    case "substring":
      return substring(resolvedArgv);
    case "stringEquals":
      return stringEquals(resolvedArgv);
    case "isValidHostLabel":
      return isValidHostLabel(resolvedArgv);
    case "uriEncode":
      return uriEncode(resolvedArgv);
    case "parseURL":
      return parseURL(resolvedArgv);
    case "booleanEquals":
      return booleanEquals(resolvedArgv);
    default:
      break;
  }
};

export const resolveFunctionArgv = (
  params: EndpointParametersAndAssignments,
  functionArgvModel: FunctionArg[]
): ResolvedFunctionArg[] =>
  functionArgvModel.map((arg) => {
    if (typeof arg === "boolean" || typeof arg === "number") {
      return arg;
    } else if (typeof arg === "string") {
      // TODO(endpointsv2): replace template string
      return arg;
    } else if (arg instanceof Array) {
      return resolveFunctionArgv(params, arg);
    } else if (isEndpointFunction(arg)) {
      return evaluateFunction(params, arg);
    } else {
      return resolveReferenceValue(params, arg);
    }
  });
