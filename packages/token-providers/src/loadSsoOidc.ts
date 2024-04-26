// @ts-expect-error Cannot find module '@aws-sdk/client-sso-oidc'
import { CreateTokenCommand, SSOOIDCClient } from "@aws-sdk/client-sso-oidc";

// This file must be loaded dynamically.
export { CreateTokenCommand, SSOOIDCClient };
