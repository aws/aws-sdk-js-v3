// smithy-typescript generated code
import { EndpointParameters } from "./EndpointParameters";
import { ruleSet } from "./ruleset";
import { EndpointV2, Logger } from "@smithy/types";
import { EndpointCache, EndpointParams, resolveEndpoint } from "@smithy/util-endpoints";

const cache = new EndpointCache({
  size: 50,
  params: ["endpoint"],
});

export const defaultEndpointResolver = (
  endpointParams: EndpointParameters,
  context: { logger?: Logger } = {}
): EndpointV2 => {
  return cache.get(endpointParams as EndpointParams, () =>
    resolveEndpoint(ruleSet, {
      endpointParams: endpointParams as EndpointParams,
      logger: context.logger,
    })
  );
};
