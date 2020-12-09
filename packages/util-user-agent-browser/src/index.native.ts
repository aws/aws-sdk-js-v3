import { Provider, UserAgent } from "@aws-sdk/types";

/**
 * Default provider to the user agent in ReactNative. It's a best effort to infer
 * the device information. It uses bowser library to detect the browser and virsion
 */
export const defaultUserAgent = (packageName: string, packageVersion: string): Provider<UserAgent> => {
  // TODO: remove this post GA and version changed to 3.x.x
  const version = packageVersion.replace(/^1\./, "3.");
  return async () => [
    // sdk-metadata
    ["aws-sdk-js", version],
    // api-metadata
    // TODO: use api name instead of package name
    [`api/${packageName}`, version],
    // os-metadata
    ["os/other"],
    // language-metadata
    // ECMAScript edition doesn't matter in JS.
    ["lang/js"],
    ["md/rn"],
  ];
};
