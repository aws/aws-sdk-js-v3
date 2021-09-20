import { UserAgentPair } from "@aws-sdk/types";

export const isCrtAvailable = (): UserAgentPair | null => {
  try {
    // Attempt to load ambient package aws-crt to verify if it exists.
    // We cannot use dynamic import(https://github.com/tc39/proposal-dynamic-import) here because bundlers
    // (WebPack, Rollup) will try to bundle this optional dependency and fail to build if not exist.
    // Thus this user agent key will only available in Node.js runtime.
    if (typeof require === "function" && typeof module !== "undefined" && module.require && require("aws-crt")) {
      // Validate `module` to make sure this is not in a `require.js` scope.
      // TODO: load package version.
      return ["md/crt-avail"];
    }
    return null;
  } catch (e) {
    // No aws-crt package available in the runtime.
    return null;
  }
};
