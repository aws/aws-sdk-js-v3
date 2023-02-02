import { Identity, IdentityProvider } from "./identity";
import { HttpSigner } from "./signature";
import { Provider } from "./util";

/**
 * Authentication schemes represent a way that the service will authenticate the customer’s identity.
 */
export interface AuthScheme {
  schemeId: string;
  identity: (identityResolverConfiguration: Record<string, any>) => IdentityProvider<Identity>;
  signer: Provider<HttpSigner<Identity>>;
  /**
   * @example "sigv4a" or "sigv4"
   * @deprecated
   */
  name?: "sigv4" | "sigv4a" | string;
  /**
   * @example "s3"
   * @deprecated
   */
  signingName?: string;
  /**
   * @example "us-east-1"
   * @deprecated
   */
  signingRegion?: string;
  /**
   * @example ["*"]
   * @exammple ["us-west-2", "us-east-1"]
   * @deprecated
   */
  signingRegionSet?: string[];
  /**
   * @deprecated this field was renamed to signingRegion.
   */
  signingScope?: never;
  /**
   * @deprecated
   */
  properties?: Record<string, unknown>;
}

export interface HttpAuthOption {
  schemeId: string;
  identityProperties: Record<string, any>;
  signerProperties: Record<string, any>;
}

export interface AuthSchemeProvider {
  <T>(authParameters: T & Record<string, any>): Array<HttpAuthOption>;
}

// As described in the Smithy documentation:
// https://github.com/awslabs/smithy/blob/main/smithy-model/src/main/resources/software/amazon/smithy/model/loader/prelude.smithy
export interface HttpAuthDefinition {
  /**
   * Defines the location of where the Auth is serialized.
   */
  in: HttpAuthLocation;

  /**
   * Defines the name of the HTTP header or query string parameter
   * that contains the Auth.
   */
  name: string;

  /**
   * Defines the security scheme to use on the `Authorization` header value.
   * This can only be set if the "in" property is set to {@link HttpAuthLocation.HEADER}.
   */
  scheme?: string;
}

export enum HttpAuthLocation {
  HEADER = "header",
  QUERY = "query",
}
