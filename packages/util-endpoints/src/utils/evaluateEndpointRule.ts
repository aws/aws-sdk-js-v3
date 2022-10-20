import { EndpointV2 } from "@aws-sdk/types";

import { EndpointRuleObject, EvaluateOptions } from "../types";
import { evaluateConditions } from "./evaluateConditions";
import { getEndpointHeaders } from "./getEndpointHeaders";
import { getEndpointProperties } from "./getEndpointProperties";
import { getEndpointUrl } from "./getEndpointUrl";
import { toDebugString } from "./toDebugString";

export const evaluateEndpointRule = (
  endpointRule: EndpointRuleObject,
  options: EvaluateOptions
): EndpointV2 | undefined => {
  const { conditions, endpoint } = endpointRule;
  const { decisionLog } = options;

  const { result, referenceRecord } = evaluateConditions(conditions, options);

  if (!result) {
    return;
  }

  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord },
  };

  const { url, properties, headers } = endpoint;

  decisionLog.push(`Resolving endpoint from template: ${toDebugString(endpoint)}`);

  return {
    ...(headers != undefined && {
      headers: getEndpointHeaders(headers, endpointRuleOptions),
    }),
    ...(properties != undefined && {
      properties: getEndpointProperties(properties, endpointRuleOptions),
    }),
    url: getEndpointUrl(url, endpointRuleOptions),
  };
};
