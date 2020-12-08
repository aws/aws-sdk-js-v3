import { loadConfig } from "@aws-sdk/node-config-provider";
import { Provider, UserAgent } from "@aws-sdk/types";
import { platform, release } from "os";
import { env, versions } from "process";

export const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
export const UA_APP_ID_INI_NAME = "sdk-ua-app-id";

export const defaultUserAgent = (packageName: string, packageVersion: string): Provider<UserAgent> => {
  // TODO: remove this post GA and version changed to 3.x.x
  const version = packageVersion.replace(/^1\./, "3.");
  const sections: UserAgent = [
    // sdk-metadata
    ["aws-sdk-js", version],
    // api-metadata
    // TODO: use api name instead of package name
    [`api/${packageName}`, version],
    // os-metadata
    [`os/${platform()}`, release()],
    // language-metadata
    // ECMAScript edition doesn't matter in JS, so no version needed.
    ["lang/js"],
    ["md/nodejs", `${versions.node}`],
  ];
  if (env.AWS_EXECUTION_ENV) {
    // env-metadata
    sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
  }
  return async () => {
    const appId = await loadConfig<string | undefined>({
      environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
      configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
      default: undefined,
    })();
    if (appId) {
      sections.push([`app/${appId}`]);
    }
    return sections;
  };
};
