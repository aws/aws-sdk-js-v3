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
  const endpointHeaders = getEndpointHeaders(headers, endpointRuleOptions);
  const endpointProperties = getEndpointProperties(properties, endpointRuleOptions);

  return {
    ...(Object.entries(endpointHeaders).length > 0 && {
      headers: endpointHeaders,
    }),
    ...(Object.entries(endpointProperties).length > 0 && {
      properties: endpointProperties,
    }),
    url: evaluateEndpointUrl(url, endpointRuleOptions),
  };
};
