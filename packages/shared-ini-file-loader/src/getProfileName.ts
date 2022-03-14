export const ENV_PROFILE = "AWS_PROFILE";
export const DEFAULT_PROFILE = "default";

export const getProfileName = (init: { profile?: string }): string =>
  init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
