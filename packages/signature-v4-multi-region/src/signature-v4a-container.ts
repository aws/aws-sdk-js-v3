import type { AwsCredentialIdentity } from "@aws-sdk/types";
import type { HttpRequest, RequestPresigner, RequestSigner, RequestSigningArguments } from "@smithy/types";

/**
 * @public
 */
export type OptionalSigV4aSigner = {
  new (options: any): RequestPresigner &
    RequestSigner & {
      signWithCredentials(
        requestToSign: HttpRequest,
        credentials: AwsCredentialIdentity,
        options: RequestSigningArguments
      ): Promise<HttpRequest>;
    };
};

/**
 * @public
 */
export const signatureV4aContainer: {
  SignatureV4a: null | OptionalSigV4aSigner;
} = {
  SignatureV4a: null,
};
