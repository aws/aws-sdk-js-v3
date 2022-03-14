import {
  DEFAULT_PROFILE as __DEFAULT_PROFILE,
  ENV_PROFILE as __ENV_PROFILE,
  getProfileName,
} from "@aws-sdk/shared-ini-file-loader";

/**
 * @deprecated Use DEFAULT_PROFILE from "@aws-sdk/shared-ini-file-loader" instead.
 */
export const DEFAULT_PROFILE = __DEFAULT_PROFILE;

/**
 * @deprecated Use ENV_PROFILE from "@aws-sdk/shared-ini-file-loader" instead.
 */
export const ENV_PROFILE = __ENV_PROFILE;

/**
 * @deprecated Use getProfileName from "@aws-sdk/shared-ini-file-loader" instead.
 */
export const getMasterProfileName = getProfileName;
