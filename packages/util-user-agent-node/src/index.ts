import { loadConfig } from "@aws-sdk/node-config-provider";
import { Provider, UserAgent } from "@aws-sdk/types";
import { platform, release } from "os";
import { env, versions } from "process";

import { isCrtAvailable } from "./is-crt-available";

export const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
export const UA_APP_ID_INI_NAME = "sdk-ua-app-id";

interface DefaultUserAgentOptions {
  serviceId?: string;
  clientVersion: string;
}

/**
 * Collect metrics from runtime to put into user agent.
 */
export const defaultUserAgent = ({ serviceId, clientVersion }: DefaultUserAgentOptions): Provider<UserAgent> => {
  const sections: UserAgent = [
    // sdk-metadata
    ["aws-sdk-js", clientVersion],
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

  const appIdPromise = loadConfig<string | undefined>({
    environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
    configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
    default: undefined,
  })();

  let resolvedUserAgent: UserAgent | undefined = undefined;
  return async () => {
    if (!resolvedUserAgent) {
      const appId = await appIdPromise;
      resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
    }
    return resolvedUserAgent;
  };
};
