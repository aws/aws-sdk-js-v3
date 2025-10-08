import { Provider, UserAgent } from "@smithy/types";

import type { DefaultUserAgentOptions } from "./configurations";

export { createUserAgentStringParsingProvider } from "./createUserAgentStringParsingProvider";

/**
 * @internal
 */
export interface PreviouslyResolved {
  userAgentAppId: Provider<string | undefined>;
}

/**
 * @internal
 */
type NavigatorAugment = {
  userAgentData?: {
    brands?: {
      brand?: string;
      version?: string;
    }[];
    platform?: string;
  };
};

/**
 * Default provider of the AWS SDK user agent string in react-native.
 * @internal
 */
export const createDefaultUserAgentProvider =
  ({ serviceId, clientVersion }: DefaultUserAgentOptions): ((config?: PreviouslyResolved) => Promise<UserAgent>) =>
  async (config?: PreviouslyResolved) => {
    const navigator =
      typeof window !== "undefined" ? (window.navigator as typeof window.navigator & NavigatorAugment) : undefined;

    const uaString = navigator?.userAgent ?? "";

    // Sample values: macOS, iOS, Windows, Android, Linux
    const osName = navigator?.userAgentData?.platform ?? fallback.os(uaString) ?? "other";
    // We're not going to attempt to detect the OS version in a browser.
    const osVersion = undefined;

    const brands = navigator?.userAgentData?.brands ?? [];
    const brand = brands[brands.length - 1];

    // Sample values: Safari, Chrome, Firefox, Microsoft Edge
    const browserName = brand?.brand ?? fallback.browser(uaString) ?? "unknown";
    const browserVersion = brand?.version ?? "unknown";

    const sections: UserAgent = [
      ["aws-sdk-js", clientVersion],
      ["ua", "2.1"],
      [`os/${osName}`, osVersion],
      ["lang/js"],
      ["md/browser", `${browserName}_${browserVersion}`],
    ];

    if (serviceId) {
      sections.push([`api/${serviceId}`, clientVersion]);
    }

    const appId = await config?.userAgentAppId?.();
    if (appId) {
      sections.push([`app/${appId}`]);
    }
    return sections;
  };

/**
 * Rudimentary UA string parsing as a fallback.
 * @internal
 */
export const fallback = {
  os(ua: string): string | undefined {
    if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
    if (/Macintosh|Mac OS X/.test(ua)) return "macOS";
    if (/Windows NT/.test(ua)) return "Windows";
    if (/Android/.test(ua)) return "Android";
    if (/Linux/.test(ua)) return "Linux";
    return undefined;
  },
  browser(ua: string): string | undefined {
    if (/EdgiOS|EdgA|Edg\//.test(ua)) return "Microsoft Edge";
    if (/Firefox\//.test(ua)) return "Firefox";
    if (/Chrome\//.test(ua)) return "Chrome";
    if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) return "Safari";
    return undefined;
  },
};

/**
 * @internal
 * @deprecated use createDefaultUserAgentProvider
 */
export const defaultUserAgent = createDefaultUserAgentProvider;
