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
   */
  readonly expiration?: Date;
}

export type TokenProvider = Provider<Token>;
