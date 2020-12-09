import { Provider, UserAgent } from "@aws-sdk/types";
import { parse } from "bowser";

/**
 * Default provider to the user agent in browsers. It's a best effort to infer
 * the device information. It uses bowser library to detect the browser and virsion
 */
export const defaultUserAgent = (packageName: string, packageVersion: string): Provider<UserAgent> => {
  // TODO: remove this post GA and version changed to 3.x.x
  const version = packageVersion.replace(/^1\./, "3.");
  const parsedUA = window?.navigator?.userAgent ? parse(window.navigator.userAgent) : undefined;
  return async () => [
    // sdk-metadata
    ["aws-sdk-js", version],
    // api-metadata
    // TODO: use api name instead of package name
    [`api/${packageName}`, version],
    // os-metadata
    [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
    // language-metadata
    // ECMAScript edition doesn't matter in JS. This is a best guess.
    ["lang/js", "ES5"],
    // browser vendor and version. Use `brows` to save 2 bytes on wire.
    ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`],
  ];
};
