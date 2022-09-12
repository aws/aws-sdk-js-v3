import { isValidHostname } from "@aws-sdk/protocol-http";
import { EndpointV2 } from "@aws-sdk/types";

import { evaluateFunction, resolveFunctionArgv } from "./functions/evaluateFunction";
import { resolveReferenceValue } from "./resolveReferenceValue";
import { resolveTemplateString } from "./resolveTemplateString";
import { EndpointFunction, EndpointRule, Reference, TemplateString } from "./RuleSet";
import { EndpointParametersAndAssignments } from "./types";
import { isEndpointFunction, isReference } from "./utils";

export const constructEndpoint = (
  params: EndpointParametersAndAssignments,
  endpointRule: EndpointRule
): EndpointV2 | undefined => {
  if (!endpointRule.endpoint) {
    return;
  }
  const url = populateURL(params, endpointRule.endpoint!.url);
  return {
    url,
    attributes: endpointRule.endpoint.properties ?? {},
    headers: Object.entries(endpointRule.endpoint.headers ?? {})
      // Cast the resolved header values to string. This should be guaranteed by model.
      .map(([name, value]) => [name, resolveFunctionArgv(params, value)] as [string, string[]])
      .reduce((acc, [name, value]) => {
        acc[name] = value;
        return acc;
      }, {} as Record<string, string[]>),
  };
};

const populateURL = (
  params: EndpointParametersAndAssignments,
  model: TemplateString | Reference | EndpointFunction
): URL => {
  let template: TemplateString = "";
  if (typeof model === "string") {
    template = model;
  } else if (isEndpointFunction(model)) {
    // TODO(endpointsv2): validate function returns an string. Might be guaranteed by model
    template = evaluateFunction(params, model) as string;
  } else if (isReference(model)) {
    // TODO(endpointsv2): ditto
    template = resolveReferenceValue(params, model) as string;
  }
  const urlStr = resolveTemplateString(params, template);
  const url = new URL(urlStr);
  if (isValidHostname(url.hostname)) {
    return url;
  } else {
    throw new Error(`Resolved hostname is not valid: ${url.hostname}`);
  }
};
