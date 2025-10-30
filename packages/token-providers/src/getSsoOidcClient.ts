import { FromSsoInit } from "./fromSso";

/**
 * Returns a SSOOIDC client for the given region.
 * @internal
 */
export const getSsoOidcClient = async (ssoRegion: string, init: FromSsoInit = {}) => {
  const { SSOOIDCClient } = await import("@aws-sdk/nested-clients/sso-oidc");

  const coalesce = (prop: string) => init.clientConfig?.[prop] ?? init.parentClientConfig?.[prop];

  const ssoOidcClient = new SSOOIDCClient(
    Object.assign({}, init.clientConfig ?? {}, {
      region: ssoRegion ?? init.clientConfig?.region,
      logger: coalesce("logger"),
      userAgentAppId: coalesce("userAgentAppId"),
    })
  );
  return ssoOidcClient;
};
