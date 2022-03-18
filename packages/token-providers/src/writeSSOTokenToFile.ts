import { getSSOTokenFilepath, SSOToken } from "@aws-sdk/shared-ini-file-loader";
// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { writeFile } = fsPromises;

/**
 * Writes SSO token to file based on filepath computed from ssoStartUrl.
 */
export const writeSSOTokenToFile = (ssoStartUrl: string, ssoToken: SSOToken) => {
  const tokenFilepath = getSSOTokenFilepath(ssoStartUrl);
  const tokenString = JSON.stringify(ssoToken, null, 2);
  return writeFile(tokenFilepath, tokenString);
};
