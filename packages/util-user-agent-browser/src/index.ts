import { Provider, UserAgent } from "@aws-sdk/types";
import bowser from "bowser";

import { DefaultUserAgentOptions } from "./configurations";

/**
 * Default provider to the user agent in browsers. It's a best effort to infer
 * the device information. It uses bowser library to detect the browser and version
 */
export const defaultUserAgent = ({
  serviceId,
  clientVersion,
}: DefaultUserAgentOptions): Provider<UserAgent> => async () => {
  const parsedUA = window?.navigator?.userAgent ? bowser.parse(window.navigator.userAgent) : undefined;
  const sections: UserAgent = [
    // sdk-metadata
    ["aws-sdk-js", clientVersion],
    // os-metadata
    [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
    // language-metadata
    // ECMAScript edition doesn't matter in JS.
    ["lang/js"],
    // browser vendor and version.
    ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`],
  ];

  if (serviceId) {
    // api-metadata
    // service Id may not appear in non-AWS clients
    sections.push([`api/${serviceId}`, clientVersion]);
  }

  return sections;
};
