import type { AwsIdentityProperties } from "@aws-sdk/types";

import { FromSsoInit } from "./fromSso";

/**
 * Returns a SSOOIDC client for the given region.
 * @internal
 */
export const getSsoOidcClient = async (
  ssoRegion: string,
  init: FromSsoInit = {},
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"]
) => {
  const { SSOOIDCClient } = await import("@aws-sdk/nested-clients/sso-oidc");

  const coalesce = (prop: "logger" | "userAgentAppId") =>
    init.clientConfig?.[prop] ?? init.parentClientConfig?.[prop] ?? callerClientConfig?.[prop];

  const ssoOidcClient = new SSOOIDCClient(
    Object.assign({}, init.clientConfig ?? {}, {
      region: ssoRegion ?? init.clientConfig?.region,
      logger: coalesce("logger"),
      userAgentAppId: coalesce("userAgentAppId"),
    })
  );
  return ssoOidcClient;
};
