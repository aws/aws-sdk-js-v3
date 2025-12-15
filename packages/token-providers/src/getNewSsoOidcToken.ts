import type { AwsIdentityProperties } from "@aws-sdk/types";
import { SSOToken } from "@smithy/shared-ini-file-loader";

import { FromSsoInit } from "./fromSso";
import { getSsoOidcClient } from "./getSsoOidcClient";

/**
 * Returns a new SSO OIDC token from SSOOIDC::createToken() API call.
 * @internal
 */
export const getNewSsoOidcToken = async (
  ssoToken: SSOToken,
  ssoRegion: string,
  init: FromSsoInit = {},
  callerClientConfig?: AwsIdentityProperties["callerClientConfig"]
) => {
  const { CreateTokenCommand } = await import("@aws-sdk/nested-clients/sso-oidc");

  const ssoOidcClient = await getSsoOidcClient(ssoRegion, init, callerClientConfig);
  return ssoOidcClient.send(
    new CreateTokenCommand({
      clientId: ssoToken.clientId,
      clientSecret: ssoToken.clientSecret,
      refreshToken: ssoToken.refreshToken,
      grantType: "refresh_token",
    })
  );
};
