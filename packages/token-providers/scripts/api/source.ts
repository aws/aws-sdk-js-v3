import {
  AccessDeniedException,
  AuthorizationPendingException,
  CreateTokenCommand,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidRequestException,
  InvalidScopeException,
  SlowDownException,
  SSOOIDCClient,
  UnauthorizedClientException,
  UnsupportedGrantTypeException,
} from "../../../../clients/client-sso-oidc/src/index";

// create a bundled version of a subset of the SSOOIDC client
// to break the cyclical dependency.

export {
  AccessDeniedException,
  AuthorizationPendingException,
  CreateTokenCommand,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidRequestException,
  InvalidScopeException,
  SlowDownException,
  SSOOIDCClient,
  UnauthorizedClientException,
  UnsupportedGrantTypeException,
};
