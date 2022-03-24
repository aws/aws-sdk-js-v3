export const ENV_PROFILE = "AWS_PROFILE";
export const DEFAULT_PROFILE = "default";

export const getProfileName = (): string => process.env[ENV_PROFILE] || DEFAULT_PROFILE;
