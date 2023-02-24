import { ParsedIniData } from "@aws-sdk/types";

const ssoSessionKeyRegex = /^sso-session\s(["'])?([^\1]+)\1$/;

/**
 * Returns the sso-session data from parsed ini data by reading
 * ssoSessionName after sso-session prefix including/excluding quotes
 */
export const getSsoSessionData = (data: ParsedIniData): ParsedIniData =>
  Object.entries(data)
    // filter out non sso-session keys
    .filter(([key]) => ssoSessionKeyRegex.test(key))
    // replace sso-session key with sso-session name
    .reduce((acc, [key, value]) => ({ ...acc, [ssoSessionKeyRegex.exec(key)![2]]: value }), {});
