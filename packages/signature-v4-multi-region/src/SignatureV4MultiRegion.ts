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

import { OptionalCrtSignerV4, signatureV4CrtContainer } from "./signature-v4-crt-container";

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
 * Note that SigV4a signer is only supported in Node.js now because it depends on a native dependency.
 * @internal
 */
export class SignatureV4MultiRegion implements RequestPresigner, RequestSigner {
  private sigv4aSigner?: InstanceType<OptionalCrtSignerV4>;
  private readonly sigv4Signer: SignatureV4S3Express;
  private readonly signerOptions: SignatureV4MultiRegionInit;

  constructor(options: SignatureV4MultiRegionInit) {
    this.sigv4Signer = new SignatureV4S3Express(options);
    this.signerOptions = options;
  }

  public async sign(requestToSign: HttpRequest, options: RequestSigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().sign(requestToSign, options);
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
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().signWithCredentials(requestToSign, credentials, options);
    }
    return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
  }

  public async presign(originalRequest: HttpRequest, options: RequestPresigningArguments = {}): Promise<HttpRequest> {
    if (options.signingRegion === "*") {
      if (this.signerOptions.runtime !== "node")
        throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
      return this.getSigv4aSigner().presign(originalRequest, options);
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

  private getSigv4aSigner(): InstanceType<OptionalCrtSignerV4> {
    if (!this.sigv4aSigner) {
      let CrtSignerV4: OptionalCrtSignerV4 | null = null;

      try {
        CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
        if (typeof CrtSignerV4 !== "function") throw new Error();
      } catch (e) {
        e.message =
          `${e.message}\n` +
          `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. \n` +
          `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` +
          `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. \n` +
          "For more information please go to " +
          "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt";
        throw e;
      }

      this.sigv4aSigner = new CrtSignerV4({
        ...this.signerOptions,
        signingAlgorithm: 1,
      });
    }
    return this.sigv4aSigner;
  }
}
