/**
 * Authentication schemes represent a way that the service will authenticate the customer’s identity.
 */
export interface AuthScheme {
  name: string; // eg. SigV4
  properties: Record<string, unknown>;
}
