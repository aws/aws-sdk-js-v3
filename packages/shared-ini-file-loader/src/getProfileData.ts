import { ParsedIniData } from "@aws-sdk/types";

const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;

/**
 * Returns the profile data from parsed ini data.
 * * Returns data for `default`
 * * Reads profileName after profile prefix including/excluding quotes
 */
export const getProfileData = (data: ParsedIniData): ParsedIniData => {
  const map: ParsedIniData = {};
  for (const key of Object.keys(data)) {
    let matches: Array<string> | null;
    if (key === "default") {
      map.default = data.default;
    } else if ((matches = profileKeyRegex.exec(key))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_1, _2, normalizedKey] = matches;
      if (normalizedKey) {
        map[normalizedKey] = data[key];
      }
    }
  }

  return map;
};
