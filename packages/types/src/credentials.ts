import { Provider } from "./util";

export interface AwsCredentialIdentity {
  /**
   * A {Date} when the identity or credential will no longer be accepted.
   */
  readonly expiration?: Date;
}

/**
 * An object representing temporary or permanent AWS credentials.
 */
export interface Credentials extends AwsCredentialIdentity {
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
}

export type CredentialProvider = Provider<Credentials>;
