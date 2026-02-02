// smithy-typescript generated code
import type { Endpoint, EndpointParameters as __EndpointParameters, EndpointV2, Provider } from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
}

/**
 * @public
 */
export type ClientResolvedEndpointParameters = Omit<ClientInputEndpointParameters, "endpoint"> & {
  defaultSigningName: string;
};

/**
 * @internal
 */
export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return Object.assign(options, {
    defaultSigningName: "",
  });
};

/**
 * @internal
 */
export const commonParams = {
  endpoint: { type: "builtInParams", name: "endpoint" },
} as const;

/**
 * @internal
 */
export interface EndpointParameters extends __EndpointParameters {
  endpoint?: string | undefined;
}
