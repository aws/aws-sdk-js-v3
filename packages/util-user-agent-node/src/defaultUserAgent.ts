import { Provider, UserAgent } from "@smithy/types";
import { platform, release } from "os";
import { env, versions } from "process";

import { isCrtAvailable } from "./is-crt-available";

export { crtAvailability } from "./crt-availability";

export interface DefaultUserAgentOptions {
  serviceId?: string;
  clientVersion: string;
}

export interface PreviouslyResolved {
  userAgentAppId: Provider<string | undefined>;
}

/**
 * @internal
 *
 * Collect metrics from runtime to put into user agent.
 */
export const createDefaultUserAgentProvider = ({ serviceId, clientVersion }: DefaultUserAgentOptions) => {
  return async (config?: PreviouslyResolved) => {
    const sections: UserAgent = [
      // sdk-metadata
      ["aws-sdk-js", clientVersion],
      // ua-metadata
      ["ua", "2.1"],
      // os-metadata
      [`os/${platform()}`, release()],
      // language-metadata
      // ECMAScript edition doesn't matter in JS, so no version needed.
      ["lang/js"],
      ["md/nodejs", `${versions.node}`],
    ];

    const crtAvailable = isCrtAvailable();
    if (crtAvailable) {
      sections.push(crtAvailable);
    }

    if (serviceId) {
      // api-metadata
      // service Id may not appear in non-AWS clients
      sections.push([`api/${serviceId}`, clientVersion]);
    }

    if (env.AWS_EXECUTION_ENV) {
      // env-metadata
      sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
    }

    const appId = await config?.userAgentAppId?.();

    const resolvedUserAgent: UserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
    return resolvedUserAgent;
  };
};

/**
 *
 * @internal
 *
 * @deprecated use createDefaultUserAgentProvider
 *
 */
export const defaultUserAgent = createDefaultUserAgentProvider;
