import { SSOOIDCClient } from "./bundle/client-sso-oidc-node";

const ssoOidcClientsHash: Record<string, typeof SSOOIDCClient | any> = {};

/**
 * Returns a SSOOIDC client for the given region. If the client has already been created,
 * it will be returned from the hash.
 */
export const getSsoOidcClient = (ssoRegion: string) => {
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
