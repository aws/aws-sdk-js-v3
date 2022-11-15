import { Identity, IdentityProvider } from "./Identity";

export interface LoginIdentity extends Identity {
  /**
   * Identity username
   */
  readonly username: string;

  /**
   * Identity password
   */
  readonly password: string;
}

export type LoginIdentityProvider = IdentityProvider<LoginIdentity>;
