// smithy-typescript generated code
import {
  getAwsRegionExtensionConfiguration,
  resolveAwsRegionExtensionConfiguration,
} from "@aws-sdk/region-config-resolver";
import { getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig } from "@smithy/protocol-http";
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/smithy-client";

import { getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig } from "./auth/httpAuthExtensionConfiguration";
import type { EC2ProtocolExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configure(extensionConfiguration: EC2ProtocolExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const extensionConfiguration: EC2ProtocolExtensionConfiguration = Object.assign(
    getAwsRegionExtensionConfiguration(runtimeConfig),
    getDefaultExtensionConfiguration(runtimeConfig),
    getHttpHandlerExtensionConfiguration(runtimeConfig),
    getHttpAuthExtensionConfiguration(runtimeConfig)
  );

  extensions.forEach((extension) => extension.configure(extensionConfiguration));

  return Object.assign(
    runtimeConfig,
    resolveAwsRegionExtensionConfiguration(extensionConfiguration),
    resolveDefaultRuntimeConfig(extensionConfiguration),
    resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    resolveHttpAuthRuntimeConfig(extensionConfiguration)
  );
};
