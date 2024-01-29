import { SSOToken } from "@smithy/shared-ini-file-loader";

import { getSsoOidcClient } from "./getSsoOidcClient";

/**
 * Returns a new SSO OIDC token from ssoOids.createToken() API call.
 * @internal
 */
export const getNewSsoOidcToken = async (ssoToken: SSOToken, ssoRegion: string) => {
  const { CreateTokenCommand } = await import("./loadSsoOidc");

  const ssoOidcClient = await getSsoOidcClient(ssoRegion);
  return ssoOidcClient.send(
    new CreateTokenCommand({
      clientId: ssoToken.clientId,
      clientSecret: ssoToken.clientSecret,
      refreshToken: ssoToken.refreshToken,
      grantType: "refresh_token",
    })
  );
};
