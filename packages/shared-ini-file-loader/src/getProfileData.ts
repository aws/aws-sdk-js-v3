import { ParsedIniData } from "@aws-sdk/types";

const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;

/**
 * Returns the profile data from parsed ini data.
 * * Returns data for `default`
 * * Reads profileName after profile prefix including/excluding quotes
 */
export const getProfileData = (data: ParsedIniData): ParsedIniData =>
  Object.entries(data)
    // filter out non-profile keys
    .filter(([key]) => profileKeyRegex.test(key))
    // replace profile key with profile name
    .reduce((acc, [key, value]) => ({ ...acc, [profileKeyRegex.exec(key)![2]]: value }), {
      // Populate default profile, if present.
      ...(data.default && { default: data.default }),
    });
