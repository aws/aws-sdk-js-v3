import {
  AwsCredentialIdentity,
  ChecksumConstructor,
  DateInput,
  EventSigner,
  EventSigningArguments,
  FormattedEvent,
  HashConstructor,
  HeaderBag,
  HttpRequest,
  Provider,
  RequestPresigner,
  RequestPresigningArguments,
  RequestSigner,
  RequestSigningArguments,
  SigningArguments,
  StringSigner,
} from "@aws-sdk/types";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { normalizeProvider } from "@aws-sdk/util-middleware";
import { toUint8Array } from "@aws-sdk/util-utf8";

import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_HEADER,
  AMZ_DATE_QUERY_PARAM,
  AUTH_HEADER,
  CREDENTIAL_QUERY_PARAM,
  EVENT_ALGORITHM_IDENTIFIER,
  EXPIRES_QUERY_PARAM,
  MAX_PRESIGNED_TTL,
  SHA256_HEADER,
  SIGNATURE_QUERY_PARAM,
  SIGNED_HEADERS_QUERY_PARAM,
  TOKEN_HEADER,
  TOKEN_QUERY_PARAM,
} from "./constants";
import { createScope, getSigningKey } from "./credentialDerivation";
import { getCanonicalHeaders } from "./getCanonicalHeaders";
import { getCanonicalQuery } from "./getCanonicalQuery";
import { getPayloadHash } from "./getPayloadHash";
import { hasHeader } from "./headerUtil";
import { moveHeadersToQuery } from "./moveHeadersToQuery";
import { prepareRequest } from "./prepareRequest";
import { iso8601 } from "./utilDate";

export interface SignatureV4Init {
  /**
   * The service signing name.
   */
  service: string;

  /**
   * The region name or a function that returns a promise that will be
   * resolved with the region name.
   */
  region: string | Provider<string>;

  /**
   * The credentials with which the request should be signed or a function
   * that returns a promise that will be resolved with credentials.
   */
  credentials: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;

  /**
   * A constructor function for a hash object that will calculate SHA-256 HMAC
   * checksums.
   */
  sha256?: ChecksumConstructor | HashConstructor;

  /**
   * Whether to uri-escape the request URI path as part of computing the
   * canonical request string. This is required for every AWS service, except
   * Amazon S3, as of late 2017.
   *
   * @default [true]
   */
  uriEscapePath?: boolean;

  /**
   * Whether to calculate a checksum of the request body and include it as
   * either a request header (when signing) or as a query string parameter
   * (when presigning). This is required for AWS Glacier and Amazon S3 and optional for
   * every other AWS service as of late 2017.
   *
   * @default [true]
   */
  applyChecksum?: boolean;
}

export interface SignatureV4CryptoInit {
  sha256: ChecksumConstructor | HashConstructor;
}

export class SignatureV4 implements RequestPresigner, RequestSigner, StringSigner, EventSigner {
  private readonly service: string;
  private readonly regionProvider: Provider<string>;
  private readonly credentialProvider: Provider<AwsCredentialIdentity>;
  private readonly sha256: ChecksumConstructor | HashConstructor;
  private readonly uriEscapePath: boolean;
  private readonly applyChecksum: boolean;

  constructor({
    applyChecksum,
    credentials,
    region,
    service,
    sha256,
    uriEscapePath = true,
  }: SignatureV4Init & SignatureV4CryptoInit) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    // default to true if applyChecksum isn't set
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }

  public async presign(originalRequest: HttpRequest, options: RequestPresigningArguments = {}): Promise<HttpRequest> {
    const {
      signingDate = new Date(),
      expiresIn = 3600,
      unsignableHeaders,
      unhoistableHeaders,
      signableHeaders,
      signingRegion,
      signingService,
    } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? (await this.regionProvider());

    const { longDate, shortDate } = formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject(
        "Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future"
      );
    }

    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });

    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);

    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);

    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
      longDate,
      scope,
      this.getSigningKey(credentials, region, shortDate, signingService),
      this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256))
    );

    return request;
  }

  public async sign(stringToSign: string, options?: SigningArguments): Promise<string>;
  public async sign(event: FormattedEvent, options: EventSigningArguments): Promise<string>;
  public async sign(requestToSign: HttpRequest, options?: RequestSigningArguments): Promise<HttpRequest>;
  public async sign(toSign: any, options: any): Promise<any> {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }

  private async signEvent(
    { headers, payload }: FormattedEvent,
    { signingDate = new Date(), priorSignature, signingRegion, signingService }: EventSigningArguments
  ): Promise<string> {
    const region = signingRegion ?? (await this.regionProvider());
    const { shortDate, longDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload } as any, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload,
    ].join("\n");
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }

  private async signString(
    stringToSign: string,
    { signingDate = new Date(), signingRegion, signingService }: SigningArguments = {}
  ): Promise<string> {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? (await this.regionProvider());
    const { shortDate } = formatDate(signingDate);

    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }

  private async signRequest(
    requestToSign: HttpRequest,
    {
      signingDate = new Date(),
      signableHeaders,
      unsignableHeaders,
      signingRegion,
      signingService,
    }: RequestSigningArguments = {}
  ): Promise<HttpRequest> {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? (await this.regionProvider());
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);

    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }

    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }

    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(
      longDate,
      scope,
      this.getSigningKey(credentials, region, shortDate, signingService),
      this.createCanonicalRequest(request, canonicalHeaders, payloadHash)
    );

    request.headers[AUTH_HEADER] =
      `${ALGORITHM_IDENTIFIER} ` +
      `Credential=${credentials.accessKeyId}/${scope}, ` +
      `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
      `Signature=${signature}`;

    return request;
  }

  private createCanonicalRequest(request: HttpRequest, canonicalHeaders: HeaderBag, payloadHash: string): string {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }

  private async createStringToSign(
    longDate: string,
    credentialScope: string,
    canonicalRequest: string
  ): Promise<string> {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();

    return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }

  private getCanonicalPath({ path }: HttpRequest): string {
    if (this.uriEscapePath) {
      // Non-S3 services, we normalize the path and then double URI encode it.
      // Ref: "Remove Dot Segments" https://datatracker.ietf.org/doc/html/rfc3986#section-5.2.4
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0) continue;
        if (pathSegment === ".") continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      // Joining by single slashes to remove consecutive slashes.
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${
        normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""
      }`;

      const doubleEncoded = encodeURIComponent(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }

    // For S3, we shouldn't normalize the path. For example, object name
    // my-object//example//photo.user should not be normalized to
    // my-object/example/photo.user
    return path;
  }

  private async getSignature(
    longDate: string,
    credentialScope: string,
    keyPromise: Promise<Uint8Array>,
    canonicalRequest: string
  ): Promise<string> {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);

    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }

  private getSigningKey(
    credentials: AwsCredentialIdentity,
    region: string,
    shortDate: string,
    service?: string
  ): Promise<Uint8Array> {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }

  private validateResolvedCredentials(credentials: unknown) {
    if (
      typeof credentials !== "object" ||
      // @ts-expect-error: Property 'accessKeyId' does not exist on type 'object'.ts(2339)
      typeof credentials.accessKeyId !== "string" ||
      // @ts-expect-error: Property 'secretAccessKey' does not exist on type 'object'.ts(2339)
      typeof credentials.secretAccessKey !== "string"
    ) {
      throw new Error("Resolved credential object is not valid");
    }
  }
}

const formatDate = (now: DateInput): { longDate: string; shortDate: string } => {
  const longDate = iso8601(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.slice(0, 8),
  };
};

const getCanonicalHeaderList = (headers: object): string => Object.keys(headers).sort().join(";");
