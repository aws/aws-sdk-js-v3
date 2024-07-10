import { SignatureV4S3Express } from "@aws-sdk/middleware-sdk-s3";
import { SignatureV4CryptoInit, SignatureV4Init } from "@smithy/signature-v4";
import {
  AwsCredentialIdentity,
  HttpRequest,
  RequestPresigner,
  RequestPresigningArguments,
  RequestSigner,
  RequestSigningArguments,
} from "@smithy/types";

/**
 * @internal
 */
export interface SigV4aSigner extends RequestPresigner, RequestSigner {
  signWithCredentials(
    requestToSign: HttpRequest,
    credentials: AwsCredentialIdentity,
    options: RequestSigningArguments
  ): Promise<HttpRequest>;
}

/**
 * @internal
 */
export type SignatureV4MultiRegionInit = SignatureV4Init &
  SignatureV4CryptoInit & {
    runtime?: string;
  };

/**
 * A SigV4-compatible signer for S3 service. In order to support SigV4a algorithm according to the operation input
 * dynamically, the signer wraps native module SigV4a signer and JS SigV4 signer. It signs the request with SigV4a
 * algorithm if the request needs to be signed with `*` region. Otherwise, it signs the request with normal SigV4
 * signer.
 * @internal
 */
export class SignatureV4MultiRegion implements RequestPresigner, RequestSigner {
  private sigv4aSigner?: SigV4aSigner;
  private readonly sigv4Signer: SignatureV4S3Express;
  private readonly signerOptions: SignatureV4MultiRegionInit;

  constructor(options: SignatureV4MultiRegionInit) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }

  public async sign(requestToSign: HttpRequest, options: RequestSigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      const signer = await this.getSigv4aSigner();
      return signer.sign(requestToSign, options);
    }
    return this.sigv4Signer.sign(requestToSign, options);
  }

  /**
   * Sign with alternate credentials to the ones provided in the constructor.
   */
  public async signWithCredentials(
    requestToSign: HttpRequest,
    credentials: AwsCredentialIdentity,
    options: RequestSigningArguments = {}
  ): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      const signer = await this.getSigv4aSigner();
      return signer.signWithCredentials(requestToSign, credentials, options);
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }

  public async presign(originalRequest: HttpRequest, options: RequestPresigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      const signer = await this.getSigv4aSigner();
      return signer.presign(originalRequest, options);
    }
    return this.sigv4Signer.presign(originalRequest, options);
  }

  public async presignWithCredentials(
    originalRequest: HttpRequest,
    credentials: AwsCredentialIdentity,
    options: RequestPresigningArguments = {}
  ): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
    }
    return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
  }

  private async getSigv4aSigner(): Promise<SigV4aSigner> {
    if (!this.sigv4aSigner) {
      const { SignatureV4a } = await import("@smithy/signature-v4a");
      this.sigv4aSigner = new SignatureV4a({
        ...this.signerOptions,
      }) as SigV4aSigner;
    }
    return this.sigv4aSigner;
  }
}
