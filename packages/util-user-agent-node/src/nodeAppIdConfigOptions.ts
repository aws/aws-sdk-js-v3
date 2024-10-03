import { LoadedConfigSelectors } from "@smithy/node-config-provider";
import { DEFAULT_UA_APP_ID } from "@aws-sdk/middleware-user-agent";


/**
 * @internal
 */
export const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";

/**
 * @internal
 */
export const UA_APP_ID_INI_NAME = "sdk-ua-app-id";

/**
 * @internal
 */
export const NODE_APP_ID_CONFIG_OPTIONS: LoadedConfigSelectors<string | undefined> = {
  environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
  configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
  default: DEFAULT_UA_APP_ID,
};
