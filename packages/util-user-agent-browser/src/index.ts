import { Provider, UserAgent } from "@smithy/types";
import bowser from "bowser";

import { DefaultUserAgentOptions } from "./configurations";

export interface PreviouslyResolved {
  userAgentAppId: Provider<string | undefined>;
}

/**
 * @internal
 *
 * Default provider to the user agent in browsers. It's a best effort to infer
 * the device information. It uses bowser library to detect the browser and version
 */
export const createDefaultUserAgentProvider =
  ({ serviceId, clientVersion }: DefaultUserAgentOptions): ((config?: PreviouslyResolved) => Promise<UserAgent>) =>
  async (config?: PreviouslyResolved) => {
    const parsedUA =
      typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser.parse(window.navigator.userAgent)
        : undefined;
    const sections: UserAgent = [
      // sdk-metadata
      ["aws-sdk-js", clientVersion],
      // ua-metadata
      ["ua", "2.1"],
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

    const appId = await config?.userAgentAppId?.();
    if (appId) {
      sections.push([`app/${appId}`]);
    }

    return sections;
  };

/**
 * @internal
 * @deprecated use createDefaultUserAgentProvider
 */
export const defaultUserAgent = createDefaultUserAgentProvider;
