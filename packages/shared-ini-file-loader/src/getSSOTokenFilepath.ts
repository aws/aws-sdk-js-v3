import { createHash } from "crypto";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";

/**
 * Returns the filepath of the file where SSO token is stored.
 */
export const getSSOTokenFilepath = (ssoStartUrl: string) => {
  const hasher = createHash("sha1");
  const cacheName = hasher.update(ssoStartUrl).digest("hex");
  return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
};
