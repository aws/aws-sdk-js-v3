/**
 * Authentication schemes represent a way that the service will authenticate the customer’s identity.
 */
export interface AuthScheme {
  /**
   * @example "sigv4a" or "sigv4"
   */
  name: "sigv4" | "sigv4a" | string;
  /**
   * @example "s3"
   */
  signingName: string;
  /**
   * @example "us-east-1"
   */
  signingRegion: string;
  /**
   * @example ["*"]
   * @exammple ["us-west-2", "us-east-1"]
   */
  signingRegionSet?: string[];
  /**
   * @deprecated this field was renamed to signingRegion.
   */
  signingScope?: never;
  properties: Record<string, unknown>;
}
