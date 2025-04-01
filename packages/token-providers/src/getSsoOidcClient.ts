import { FromSsoInit } from "./fromSso";

/**
 * Returns a SSOOIDC client for the given region.
 * @internal
 */
export const getSsoOidcClient = async (ssoRegion: string, init: FromSsoInit = {}) => {
  const { SSOOIDCClient } = await import("@aws-sdk/nested-clients/sso-oidc");

  const ssoOidcClient = new SSOOIDCClient(
    Object.assign({}, init.clientConfig ?? {}, {
      region: ssoRegion ?? init.clientConfig?.region,
      logger: init.clientConfig?.logger ?? init.parentClientConfig?.logger,
    })
  );
  return ssoOidcClient;
};
