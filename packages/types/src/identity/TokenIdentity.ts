import { Identity, IdentityProvider } from "./Identity";

/**
 * @public
 */
export interface TokenIdentity extends Identity {
  /**
   * The literal token string
   */
  readonly token: string;
}

/**
 * @public
 */
export type TokenIdentityProvider = IdentityProvider<TokenIdentity>;
