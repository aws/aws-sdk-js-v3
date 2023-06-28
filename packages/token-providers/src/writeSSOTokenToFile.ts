import { getSSOTokenFilepath, SSOToken } from "@smithy/shared-ini-file-loader";
// ToDo: Change to "fs/promises" when supporting nodejs>=14
import { promises as fsPromises } from "fs";

const { writeFile } = fsPromises;

/**
 * Writes SSO token to file based on filepath computed from ssoStartUrl or session name.
 */
export const writeSSOTokenToFile = (id: string, ssoToken: SSOToken) => {
  const tokenFilepath = getSSOTokenFilepath(id);
  const tokenString = JSON.stringify(ssoToken, null, 2);
  return writeFile(tokenFilepath, tokenString);
};
