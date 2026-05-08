// smithy-typescript generated code
import { type EndpointParams, decideEndpoint, EndpointCache } from "@smithy/core/endpoints";
import type { EndpointV2, Logger } from "@smithy/types";

import { bdd } from "./bdd";
import type { EndpointParameters } from "./EndpointParameters";

const cache = new EndpointCache({
  size: 50,
  params: ["endpoint"],
});

/**
 * @internal
 */
export const defaultEndpointResolver = (
  endpointParams: EndpointParameters,
  context: { logger?: Logger } = {}
): EndpointV2 => {
  return cache.get(endpointParams as EndpointParams, () =>
    decideEndpoint(bdd, {
      endpointParams: endpointParams as EndpointParams,
      logger: context.logger,
    })
  );
};
