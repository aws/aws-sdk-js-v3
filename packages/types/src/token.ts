import { Provider } from "./util";

/**
 * An object representing temporary or permanent AWS token.
 */
export interface Token {
  /**
   *The literal token string
   */
  readonly token: string;
  /**
   * A {Date} when these token will no longer be accepted.
   * When expiration is not defined, the token is assumed to be permanent.
   */
  readonly expiration?: Date;
}

export type TokenProvider = Provider<Token>;
