import type { DefaultsMode } from "@aws-sdk/smithy-client";
import type { Provider } from "@aws-sdk/types";

export const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

/**
 * @internal
 */
export interface ResolveDefaultsModeConfigOptions {
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}
