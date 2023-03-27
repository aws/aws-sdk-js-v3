import { ParsedIniData } from "@aws-sdk/types";

/**
 * Merge multiple profile config files such that settings each file are kept together
 *
 * @internal
 */
export const mergeConfigFiles = (...files: ParsedIniData[]): ParsedIniData => {
  const merged: ParsedIniData = {};
  for (const file of files) {
    for (const [key, values] of Object.entries(file)) {
      if (merged[key] !== undefined) {
        Object.assign(merged[key], values);
      } else {
        merged[key] = values;
      }
    }
  }
  return merged;
};
