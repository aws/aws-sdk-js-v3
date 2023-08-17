// smithy-typescript generated code
import { getDefaultClientConfiguration, resolveDefaultRuntimeConfig } from "@smithy/types";

import { JsonProtocolClientConfiguration } from "./clientConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configureClient(clientConfiguration: JsonProtocolClientConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<JsonProtocolClientConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const clientConfiguration: JsonProtocolClientConfiguration = {
    ...asPartial(getDefaultClientConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configureClient(clientConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(clientConfiguration),
  };
};
