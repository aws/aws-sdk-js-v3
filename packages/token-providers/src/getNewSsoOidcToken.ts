import { CreateTokenCommand } from "@aws-sdk/client-sso-oidc";
import { SSOToken } from "@smithy/shared-ini-file-loader";

import { getSsoOidcClient } from "./getSsoOidcClient";

/**
 * Returns a new SSO OIDC token from ssoOids.createToken() API call.
 */
export const getNewSsoOidcToken = (ssoToken: SSOToken, ssoRegion: string) => {
  const ssoOidcClient = getSsoOidcClient(ssoRegion);
  return ssoOidcClient.send(
    new CreateTokenCommand({
      clientId: ssoToken.clientId,
      clientSecret: ssoToken.clientSecret,
      refreshToken: ssoToken.refreshToken,
      grantType: "refresh_token",
    })
  );
};
