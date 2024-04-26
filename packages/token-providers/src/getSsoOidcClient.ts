const ssoOidcClientsHash: Record<string, any> = {};

/**
 * Returns a SSOOIDC client for the given region. If the client has already been created,
 * it will be returned from the hash.
 * @internal
 */
export const getSsoOidcClient = async (ssoRegion: string) => {
  // @ts-ignore Cannot find module '@aws-sdk/client-sso-oidc'
  const { SSOOIDCClient } = await import("@aws-sdk/client-sso-oidc");

  // return ssoOidsClient if already created.
  if (ssoOidcClientsHash[ssoRegion]) {
    return ssoOidcClientsHash[ssoRegion];
  }

  // Create new SSOOIDC client, and store is in hash.
  // If we need to support configuration of SsoOidc client in future through code,
  // the provision to pass region from client configuration needs to be added.
  const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
  ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
  return ssoOidcClient;
};
