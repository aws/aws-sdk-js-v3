import { memoize } from "@aws-sdk/property-provider";
import type { DefaultsMode, ResolvedDefaultsMode } from "@aws-sdk/smithy-client";
import type { Provider } from "@aws-sdk/types";

import { DEFAULTS_MODE_OPTIONS } from "./constants";

/**
 * @internal
 */
export interface ResolveDefaultsModeConfigOptions {
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

/**
 * Validate the defaultsMode configuration. If the value is set to "auto", it
 * resolves the value to "mobile".
 *
 * @default "legacy"
 * @internal
 */
export const resolveDefaultsModeConfig = ({
  defaultsMode,
}: ResolveDefaultsModeConfigOptions = {}): Provider<ResolvedDefaultsMode> =>
  memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
      case "auto":
        // Because this function is only exists in React Native, so it only resolves to "mobile"
        // when defaultsMode set to "auto".
        return Promise.resolve("mobile");
      case "mobile":
      case "in-region":
      case "cross-region":
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
