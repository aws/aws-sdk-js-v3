import { IniSection } from "@aws-sdk/types";
import { LoadedConfigSelectors } from "@smithy/node-config-provider";

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";

export const getEndpointUrlConfig = (serviceId: string): LoadedConfigSelectors<string | undefined> => ({
  environmentVariableSelector: (env: NodeJS.ProcessEnv) => {
    // The value provided by a service-specific environment variable.
    const serviceEndpointUrlSections = [ENV_ENDPOINT_URL, ...serviceId.split(" ").map((w) => w.toUpperCase())];
    const serviceEndpointUrl = env[serviceEndpointUrlSections.join("_")];
    if (serviceEndpointUrl) return serviceEndpointUrl;

    // The value provided by the global endpoint environment variable.
    const endpointUrl = env[ENV_ENDPOINT_URL];
    if (endpointUrl) return endpointUrl;

    return undefined;
  },

  configFileSelector: (profile: IniSection) => {
    // The value provided by a service-specific parameter from a services definition section
    // referenced in a profile in the shared configuration file.

    // ToDo: profile is selected one. It does not have access to other 'services' section.
    // The configFileSelector interface needs to be modified to pass ParsedIniData as optional second parameter.

    // The value provided by the global parameter from a profile in the shared configuration file.
    const endpointUrl = profile[CONFIG_ENDPOINT_URL];
    if (endpointUrl) return endpointUrl;

    return undefined;
  },

  default: undefined,
});
