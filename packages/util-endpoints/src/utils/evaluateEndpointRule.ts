import { Endpoint, EndpointRuleObject, EvaluateOptions } from "../types";
import { evaluateConditions } from "./evaluateConditions";
import { evaluateEndpointUrl } from "./evaluateEndpointUrl";
import { getEndpointHeaders } from "./getEndpointHeaders";
import { getEndpointProperties } from "./getEndpointProperties";

export const evaluateEndpointRule = (
  endpointRule: EndpointRuleObject,
  options: EvaluateOptions
): Endpoint | undefined => {
  const { conditions, endpoint } = endpointRule;

  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }

  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord },
  };

  const { url, properties, headers } = endpoint;
  return {
    ...(headers != undefined && {
      headers: getEndpointHeaders(headers, endpointRuleOptions),
    }),
    ...(properties != undefined && {
      properties: getEndpointProperties(properties, endpointRuleOptions),
    }),
    url: evaluateEndpointUrl(url, endpointRuleOptions),
  };
};
