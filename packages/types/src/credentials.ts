import { Provider } from "./util";

/**
 * An object representing temporary or permanent AWS credentials.
 * @deprecated use auth.ts::Credentials
 * @private
 */
export interface Credentials {
  /**
   * AWS access key ID
   */
  readonly accessKeyId: string;

  /**
   * AWS secret access key
   */
  readonly secretAccessKey: string;

  /**
   * A security or session token to use with these credentials. Usually
   * present for temporary credentials.
   */
  readonly sessionToken?: string;

  /**
   * A {Date} when these credentials will no longer be accepted.
   */
  readonly expiration?: Date;
}

/**
 * @deprecated use auth.ts::Credentials
 * @private
 */
export type CredentialProvider = Provider<Credentials>;
