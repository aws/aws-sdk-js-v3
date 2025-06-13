// smithy-typescript generated code
import { Endpoint, EndpointV2, Provider, EndpointParameters as __EndpointParameters } from "@smithy/types";

/**
 * @public
 */
export interface ClientInputEndpointParameters {
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
}

export type ClientResolvedEndpointParameters = ClientInputEndpointParameters & {
  defaultSigningName: string;
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return Object.assign(options, {
    defaultSigningName: "",
  });
};

export const commonParams = {
  endpoint: { type: "builtInParams", name: "endpoint" },
} as const;

export interface EndpointParameters extends __EndpointParameters {
  endpoint?: string | undefined;
}
