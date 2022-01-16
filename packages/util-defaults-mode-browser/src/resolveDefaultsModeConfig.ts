import { memoize } from "@aws-sdk/property-provider";
import type { DefaultsMode, ResolvedDefaultsMode } from "@aws-sdk/smithy-client";
import type { Provider } from "@aws-sdk/types";
import bowser from "bowser";

import { DEFAULTS_MODE_OPTIONS } from "./constants";

/**
 * @internal
 */
export interface ResolveDefaultsModeConfigOptions {
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

/**
 * Validate the defaultsMode configuration. If the value is set to "auto", it
 * resolves the value to "mobile" if the app is running in a mobile browser,
 * otherwise it resolves to "standard".
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
        return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
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

const isMobileBrowser = (): boolean => {
  const parsedUA =
    typeof window !== "undefined" && window?.navigator?.userAgent
      ? bowser.parse(window.navigator.userAgent)
      : undefined;
  const platform = parsedUA?.platform?.type;
  // Reference: https://github.com/lancedikson/bowser/blob/master/src/constants.js#L86
  return platform === "tablet" || platform === "mobile";
};
