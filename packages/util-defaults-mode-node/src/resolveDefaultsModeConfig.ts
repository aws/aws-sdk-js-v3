import { NODE_REGION_CONFIG_OPTIONS } from "@aws-sdk/config-resolver";
import { getInstanceMetadataEndpoint, httpRequest } from "@aws-sdk/credential-provider-imds";
import { loadConfig } from "@aws-sdk/node-config-provider";
import { memoize } from "@aws-sdk/property-provider";
import type { DefaultsMode, ResolvedDefaultsMode } from "@aws-sdk/smithy-client";
import type { Provider } from "@aws-sdk/types";

import {
  AWS_DEFAULT_REGION_ENV,
  AWS_EXECUTION_ENV,
  AWS_REGION_ENV,
  DEFAULTS_MODE_OPTIONS,
  ENV_IMDS_DISABLED,
  IMDS_REGION_PATH,
} from "./constants";
import { NODE_DEFAULTS_MODE_CONFIG_OPTIONS } from "./defaultsModeConfig";

/**
 * @internal
 */
export interface ResolveDefaultsModeConfigOptions {
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
  region?: string | Provider<string>;
}

/**
 * Validate the defaultsMode configuration. If the value is set to "auto", it
 * resolves the value to "in-region", "cross-region", or "standard".
 *
 * @default "legacy"
 * @internal
 */
export const resolveDefaultsModeConfig = ({
  region = loadConfig(NODE_REGION_CONFIG_OPTIONS),
  defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS),
}: ResolveDefaultsModeConfigOptions = {}): Provider<ResolvedDefaultsMode> =>
  memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
      case "auto":
        return resolveNodeDefaultsModeAuto(region);
      case "in-region":
      case "cross-region":
      case "mobile":
      case "standard":
      case "legacy":
        return Promise.resolve(mode?.toLocaleLowerCase() as ResolvedDefaultsMode);
      case undefined:
        return Promise.resolve("legacy");
      default:
        throw new Error(
          `Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`
        );
    }
  });

const resolveNodeDefaultsModeAuto = async (clientRegion?: string | Provider<string>): Promise<ResolvedDefaultsMode> => {
  if (clientRegion) {
    const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
    const inferredRegion = await inferPhysicalRegion();
    if (!inferredRegion) {
      return "standard";
    }
    if (resolvedRegion === inferredRegion) {
      return "in-region";
    } else {
      return "cross-region";
    }
  }
  return "standard";
};

/**
 * Infer the hosting app's physical region.
 */
const inferPhysicalRegion = async (): Promise<string | undefined> => {
  if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
    // We're running in an AWS service environment, so we can trust the region environment variables to be the current
    // region, if they're set
    return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
  }
  if (!process.env[ENV_IMDS_DISABLED]) {
    // We couldn't figure out the region from environment variables. Check IMDSv2
    try {
      const endpoint = await getInstanceMetadataEndpoint();
      return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
    } catch (e) {
      // Swallow the error.
    }
  }
};
