import { Identity, IdentityProvider } from "./identity";
import { HttpSigner } from "./signature";
import { Provider } from "./util";

/**
 * Authentication schemes represent a way that the service will authenticate the customer’s identity.
 */
export interface AuthScheme {
  /**
   * @example "aws.auth#sigv4a" or "aws.auth#sigv4"
   */
  schemeId: string;
  /**
   * Resolves an identity provider compatible with the AuthScheme,
   * e.g. resolving credential chains
   * @returns an identity provider
   */
  identity: IdentityProvider<Identity>;
  /**
   * Resolves a signer compatible with the AuthScheme
   */
  signer: Provider<HttpSigner<Identity>>;
  /**
   * @example "sigv4a" or "sigv4"
   * @deprecated use {@link schemeId} instead
   */
  name?: "sigv4" | "sigv4a" | string;
  /**
   * @example "s3"
   * @deprecated use {@link IdentityInputConfig.signingProperties} instead
   */
  signingName?: string;
  /**
   * @example "us-east-1"
   * @deprecated use {@link IdentityInputConfig.signingProperties} instead
   */
  signingRegion?: string;
  /**
   * @example ["*"]
   * @exammple ["us-west-2", "us-east-1"]
   * @deprecated use {@link IdentityInputConfig.signingProperties} instead
   */
  signingRegionSet?: string[];
  /**
   * @deprecated this field was renamed to signingRegion.
   * @deprecated use {@link IdentityInputConfig.signingProperties} instead
   */
  signingScope?: never;
  /**
   * @deprecated use {@link IdentityInputConfig.signingProperties} instead
   */
  properties?: Record<string, unknown>;
}

export interface HttpAuthOption {
  /**
   * @example "aws.auth#sigv4a" or "aws.auth#sigv4"
   */
  schemeId: string;
  /**
   * Properties used in an {@link IdentityProvider}
   */
  identityProperties: Record<string, any>;
  /**
   * Properties used in an {@link HttpSigner}
   */
  signerProperties: Record<string, any>;
}

export interface AuthOptionsProvider {
  /**
   * Resolves potential list of {@link HttpAuthOption} for authentication
   */
  <T>(authParameters?: T & Record<string, any>): Promise<Array<HttpAuthOption>>;
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
