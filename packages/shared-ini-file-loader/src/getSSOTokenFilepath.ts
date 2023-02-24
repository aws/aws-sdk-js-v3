import { createHash } from "crypto";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";

/**
 * Returns the filepath of the file where SSO token is stored.
 */
export const getSSOTokenFilepath = (id: string) => {
  const hasher = createHash("sha1");
  const cacheName = hasher.update(id).digest("hex");
  return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
};
