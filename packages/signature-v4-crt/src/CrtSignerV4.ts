import { parseQueryString } from "@aws-sdk/querystring-parser";
import {
  getCanonicalQuery,
  getPayloadHash,
  moveHeadersToQuery,
  normalizeCredentialsProvider,
  normalizeRegionProvider,
  prepareRequest,
  SignatureV4CryptoInit,
  SignatureV4Init,
} from "@aws-sdk/signature-v4";
import {
  Credentials,
  HttpRequest,
  Provider,
  QueryParameterBag,
  RequestPresigner,
  RequestPresigningArguments,
  RequestSigner,
  RequestSigningArguments,
} from "@aws-sdk/types";
import { auth as crtAuth, http as crtHttp, io as crtIO } from "aws-crt";

import { MAX_PRESIGNED_TTL, SHA256_HEADER } from "./constants";
import { deleteHeader } from "./headerUtil";

export type AwsSigningAlgorithm = crtAuth.AwsSigningAlgorithm;

/* private function to convert sdk Http request to crt Http request */
function sdkHttpRequest2crtHttpRequest(sdkRequest: HttpRequest): crtHttp.HttpRequest {
  /* Remove the x-amz-content-sha256 header, if exists */
  deleteHeader(SHA256_HEADER, sdkRequest.headers);
  const headersArray = Object.entries(sdkRequest.headers);
  const crtHttpHeaders = new crtHttp.HttpHeaders(headersArray);
  const queryString = getCanonicalQuery(sdkRequest);

  /**
   * Not converting the body to the crtRequest. For now, it's better to get the payload Hash from SDK.
   * The body value will be set from config.
   */
  return new crtHttp.HttpRequest(sdkRequest.method, sdkRequest.path + "?" + queryString, crtHttpHeaders);
}

export interface CrtSignerV4Init extends SignatureV4Init {
  /**
   * The Algorithm used for the signer. Includes: SigV4, SigV4Asymmetric.
   *
   * @default [SigV4]
   */
  signingAlgorithm?: AwsSigningAlgorithm;
}

/**
 * Based aws-crt, with the same API as signing the request from SignatureV4, compatible with request Signer from SDK.
 * The difference between them is CrtSignerV4 only supports signing/presigning the request. The behavior of two signers
 * are slightly different, includes the case of headers name after signing and the CrtSignerV4 does NOT support overwrite
 * the internal check against (x-amzn-trace-id, user-agent), which will always be skipped.
 * Most importantly, CrtSignerV4 supports Signature V4 Asymmetric.
 *
 * Note: aws-crt that supports SigV4A is still a private repo https://github.com/awslabs/aws-crt-nodejs-staging/tree/sigv4a-binding
 */
export class CrtSignerV4 implements RequestPresigner, RequestSigner {
  private readonly service: string;
  private readonly regionProvider: Provider<string>;
  private readonly credentialProvider: Provider<Credentials>;
  private readonly sha256: any;
  private readonly uriEscapePath: boolean;
  private readonly applyChecksum: boolean;
  private readonly signingAlgorithm: AwsSigningAlgorithm;

  constructor({
    credentials,
    region,
    service,
    sha256,
    applyChecksum = true,
    uriEscapePath = true,
    signingAlgorithm = crtAuth.AwsSigningAlgorithm.SigV4,
  }: CrtSignerV4Init & SignatureV4CryptoInit) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.signingAlgorithm = signingAlgorithm;
    this.applyChecksum = applyChecksum;
    this.regionProvider = normalizeRegionProvider(region);
    this.credentialProvider = normalizeCredentialsProvider(credentials);
    crtIO.enable_logging(crtIO.LogLevel.ERROR);
  }

  private async options2crtConfigure(
    {
      signingDate = new Date(),
      signableHeaders,
      unsignableHeaders,
      signingRegion,
      signingService,
    }: RequestSigningArguments | RequestPresigningArguments | undefined = {},
    viaHeader: Boolean,
    payloadHash: string,
    expiresIn?: number
  ): Promise<crtAuth.AwsSigningConfig> {
    const credentials = await this.credentialProvider();
    const region = signingRegion ?? (await this.regionProvider());
    const service = signingService ?? this.service;
    if (signableHeaders?.has("x-amzn-trace-id") || signableHeaders?.has("user-agent")) {
      throw new Error("internal check (x-amzn-trace-id, user-agent) is not supported to be included to sign with CRT.");
    }
    const headersUnsignable = getHeadersUnsignable(unsignableHeaders, signableHeaders);
    return {
      algorithm: this.signingAlgorithm,
      signature_type: viaHeader
        ? crtAuth.AwsSignatureType.HttpRequestViaHeaders
        : crtAuth.AwsSignatureType.HttpRequestViaQueryParams,
      provider: sdk2crtCredentialsProvider(credentials),
      region: region,
      service: service,
      date: new Date(signingDate),
      header_blacklist: headersUnsignable,
      use_double_uri_encode: this.uriEscapePath,
      /* Always set the body value by the result from SDK */
      signed_body_value: payloadHash,
      signed_body_header:
        this.applyChecksum && viaHeader
          ? crtAuth.AwsSignedBodyHeaderType.XAmzContentSha256
          : crtAuth.AwsSignedBodyHeaderType.None,
      expiration_in_seconds: expiresIn,
    };
  }

  public async presign(originalRequest: HttpRequest, options: RequestPresigningArguments = {}): Promise<HttpRequest> {
    if (options.expiresIn && options.expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject(
        "Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future"
      );
    }
    const request = moveHeadersToQuery(prepareRequest(originalRequest));

    const crtSignedRequest = await this.signRequest(
      request,
      await this.options2crtConfigure(
        options,
        false /* viaHeader */,
        await getPayloadHash(originalRequest, this.sha256),
        options.expiresIn ? options.expiresIn : 3600
      )
    );
    request.query = this.getQueryParam(crtSignedRequest.path);
    return request;
  }

  public async sign(toSign: HttpRequest, options?: RequestSigningArguments): Promise<HttpRequest> {
    const request = prepareRequest(toSign);
    const crtSignedRequest = await this.signRequest(
      request,
      await this.options2crtConfigure(options, true /* viaHeader */, await getPayloadHash(toSign, this.sha256))
    );
    request.headers = crtSignedRequest.headers._flatten().reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    return request;
  }

  /* Get the query parameters from crtPath */
  private getQueryParam(crtPath: string): QueryParameterBag {
    const start = crtPath.search(/\?/);
    const startHash = crtPath.search(/\#/);
    const end = startHash == -1 ? undefined : startHash;
    const queryParam = {} as QueryParameterBag;
    if (start == -1) {
      return queryParam;
    }
    const queryString = crtPath.slice(start + 1, end);
    return parseQueryString(queryString);
  }

  private async signRequest(
    requestToSign: HttpRequest,
    crtConfig: crtAuth.AwsSigningConfig
  ): Promise<crtHttp.HttpRequest> {
    const request = sdkHttpRequest2crtHttpRequest(requestToSign);
    // if (requestToSign.headers[TOKEN_HEADER])
    try {
      return await crtAuth.aws_sign_request(request, crtConfig);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Test-only API used for cross-library signing verification tests. Verify sign.
   *
   * Verifies:
   *  (1) The canonical request generated during sigv4a signing of the request matches what is passed in
   *  (2) The signature passed in is a valid ECDSA signature of the hashed string-to-sign derived from the
   *  canonical request
   *
   * @param request The original request used for signing
   * @param signature the actual signature computed from a previous signing of the signable
   * @param expectedCanonicalRequest expected result when building the canonical request
   * @param eccPubKeyX the x coordinate of the public part of the ecc key to verify the signature
   * @param eccPubKeyY the y coordinate of the public part of the ecc key to verify the signature
   * @param options the RequestSigningArguments used for signing
   *
   * @return True, if the verification succeed. Otherwise, false.
   */
  public async verifySigv4aSigning(
    request: HttpRequest,
    signature: string,
    expectedCanonicalRequest: string,
    eccPubKeyX: string,
    eccPubKeyY: string,
    options: RequestSigningArguments = {}
  ): Promise<boolean> {
    const sdkRequest = prepareRequest(request);
    const crtRequest = sdkHttpRequest2crtHttpRequest(sdkRequest);
    const payloadHash = await getPayloadHash(request, this.sha256);
    const crtConfig = await this.options2crtConfigure(options, true /* viaHeader */, payloadHash);
    return crtAuth.aws_verify_sigv4a_signing(
      crtRequest,
      crtConfig,
      expectedCanonicalRequest,
      signature,
      eccPubKeyX,
      eccPubKeyY
    );
  }

  /* Verify presign */
  public async verifySigv4aPreSigning(
    request: HttpRequest,
    signature: string | Array<string> | null,
    expectedCanonicalRequest: string,
    eccPubKeyX: string,
    eccPubKeyY: string,
    options: RequestPresigningArguments = {}
  ): Promise<boolean> {
    if (typeof signature != "string") {
      return false;
    }
    const sdkRequest = prepareRequest(request);
    const crtRequest = sdkHttpRequest2crtHttpRequest(sdkRequest);
    const crtConfig = await this.options2crtConfigure(
      options,
      false /* viaHeader */,
      await getPayloadHash(request, this.sha256),
      options.expiresIn ? options.expiresIn : 3600
    );
    return crtAuth.aws_verify_sigv4a_signing(
      crtRequest,
      crtConfig,
      expectedCanonicalRequest,
      signature,
      eccPubKeyX,
      eccPubKeyY
    );
  }
}

function sdk2crtCredentialsProvider(credentials: Credentials): crtAuth.AwsCredentialsProvider {
  return crtAuth.AwsCredentialsProvider.newStatic(
    credentials.accessKeyId,
    credentials.secretAccessKey,
    credentials.sessionToken
  );
}

function getHeadersUnsignable(unsignableHeaders?: Set<string>, signableHeaders?: Set<string>): string[] {
  if (!unsignableHeaders) {
    return [];
  }
  if (!signableHeaders) {
    return [...unsignableHeaders];
  }
  const result = new Set([...unsignableHeaders]);
  for (let it = signableHeaders.values(), val = null; (val = it.next().value); ) {
    if (result.has(val)) {
      result.delete(val);
    }
  }
  return [...result];
}
