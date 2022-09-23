/**
 * Authentication schemes represent a way that the service will authenticate the customer’s identity.
 */
export interface AuthScheme {
  /**
   * @example "v4" for SigV4
   */
  name: string;
  /**
   * @example "s3"
   */
  signingName: string;
  /**
   * @example "us-east-1"
   */
  signingScope: string;
  properties: Record<string, unknown>;
}
