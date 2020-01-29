import { createScope, getSigningKey } from "./credentialDerivation";
import { getCanonicalHeaders } from "./getCanonicalHeaders";
import { getCanonicalQuery } from "./getCanonicalQuery";
import { getPayloadHash } from "./getPayloadHash";
import { prepareRequest } from "./prepareRequest";
import { moveHeadersToQuery } from "./moveHeadersToQuery";
import {
  ALGORITHM_IDENTIFIER,
  ALGORITHM_QUERY_PARAM,
  AMZ_DATE_HEADER,
  AMZ_DATE_QUERY_PARAM,
  AUTH_HEADER,
  CREDENTIAL_QUERY_PARAM,
  EXPIRES_QUERY_PARAM,
  MAX_PRESIGNED_TTL,
  SHA256_HEADER,
  SIGNATURE_QUERY_PARAM,
  SIGNED_HEADERS_QUERY_PARAM,
  TOKEN_HEADER,
  TOKEN_QUERY_PARAM,
  EVENT_ALGORITHM_IDENTIFIER
} from "./constants";
import {
  Credentials,
  DateInput,
  HashConstructor,
  Provider,
  RequestPresigner,
  RequestSigner,
  RequestSigningArguments,
  SigningArguments,
  StringSigner,
  EventSigner,
  FormattedEvent,
  EventSigningArguments,
  HeaderBag,
  HttpRequest
} from "@aws-sdk/types";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { hasHeader } from "./hasHeader";
import { toDate, iso8601 } from "./utilDate";

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
  credentials: Credentials | Provider<Credentials>;

  /**
   * A constructor function for a hash object that will calculate SHA-256 HMAC
   * checksums.
   */
  sha256?: HashConstructor;

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
  sha256: HashConstructor;
}

export class SignatureV4
  implements RequestPresigner, RequestSigner, StringSigner, EventSigner {
  private readonly service: string;
  private readonly regionProvider: Provider<string>;
  private readonly credentialProvider: Provider<Credentials>;
  private readonly sha256: HashConstructor;
  private readonly uriEscapePath: boolean;
  private readonly applyChecksum: boolean;

  constructor({
    applyChecksum,
    credentials,
    region,
    service,
    sha256,
    uriEscapePath = true
  }: SignatureV4Init & SignatureV4CryptoInit) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    // default to true if applyChecksum isn't set
    this.applyChecksum =
      typeof applyChecksum === "boolean" ? applyChecksum : true;

    if (typeof region === "string") {
      const promisified = Promise.resolve(region);
      this.regionProvider = () => promisified;
    } else {
      this.regionProvider = region;
    }

    if (typeof credentials === "object") {
      const promisified = Promise.resolve(credentials);
      this.credentialProvider = () => promisified;
    } else {
      this.credentialProvider = credentials;
    }
  }

  public async presignRequest(
    originalRequest: HttpRequest,
    expiration: DateInput,
    options: RequestSigningArguments = {}
  ): Promise<HttpRequest> {
    const [region, credentials] = await Promise.all([
      this.regionProvider(),
      this.credentialProvider()
    ]);

    const {
      signingDate = new Date(),
      unsignableHeaders,
      signableHeaders
    } = options;

    const { longDate, shortDate } = formatDate(signingDate);
    const ttl = getTtl(signingDate, expiration);
    if (ttl > MAX_PRESIGNED_TTL) {
      return Promise.reject(
        "Signature version 4 presigned URLs" +
          " must have an expiration date less than one week in" +
          " the future"
      );
    }

    const scope = createScope(shortDate, region, this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest));

    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[
      CREDENTIAL_QUERY_PARAM
    ] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = ttl.toString(10);

    const canonicalHeaders = getCanonicalHeaders(
      request,
      unsignableHeaders,
      signableHeaders
    );
    request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(
      canonicalHeaders
    );

    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
      longDate,
      scope,
      this.getSigningKey(credentials, region, shortDate),
      this.createCanonicalRequest(
        request,
        canonicalHeaders,
        await getPayloadHash(originalRequest, this.sha256)
      )
    );

    return request;
  }

  public sign(
    stringToSign: string,
    options?: SigningArguments
  ): Promise<string>;
  public sign(
    requestToSign: HttpRequest,
    options?: RequestSigningArguments
  ): Promise<HttpRequest>;
  public async sign<T extends string | HttpRequest>(
    toSign: T,
    {
      signingDate = new Date(),
      ...options
    }: RequestSigningArguments | SigningArguments = {}
  ): Promise<T> {
    const [region, credentials] = await Promise.all([
      this.regionProvider(),
      this.credentialProvider()
    ]);

    if (typeof toSign === "string") {
      return this.signString(
        toSign,
        signingDate,
        region,
        credentials
      ) as Promise<T>;
    } else {
      const {
        unsignableHeaders,
        signableHeaders
      } = options as RequestSigningArguments;

      return this.signRequest(
        toSign as HttpRequest,
        signingDate,
        region,
        credentials,
        unsignableHeaders,
        signableHeaders
      ) as Promise<T>;
    }
  }

  public async signEvent(
    { headers, payload }: FormattedEvent,
    options: EventSigningArguments
  ): Promise<string> {
    const [region, credentials] = await Promise.all([
      this.regionProvider(),
      this.credentialProvider()
    ]);
    const { signingDate = new Date(), priorSignature } = options;
    const { shortDate, longDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, this.service);
    const hashedPayload = await getPayloadHash(
      { headers: {}, body: payload } as any,
      this.sha256
    );
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, signingDate, region, credentials);
  }

  private async signString(
    stringToSign: string,
    signingDate: DateInput,
    region: string,
    credentials: Credentials
  ): Promise<string> {
    const { shortDate } = formatDate(signingDate);

    const hash = new this.sha256(
      await this.getSigningKey(credentials, region, shortDate)
    );
    hash.update(stringToSign);
    return toHex(await hash.digest());
  }

  private async signRequest(
    originalRequest: HttpRequest,
    signingDate: DateInput,
    region: string,
    credentials: Credentials,
    unsignableHeaders?: Set<string>,
    signableHeaders?: Set<string>
  ): Promise<HttpRequest> {
    const request = prepareRequest(originalRequest);
    const { longDate, shortDate } = formatDate(signingDate);
    const scope = createScope(shortDate, region, this.service);

    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }

    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }

    const canonicalHeaders = getCanonicalHeaders(
      request,
      unsignableHeaders,
      signableHeaders
    );
    const signature = await this.getSignature(
      longDate,
      scope,
      this.getSigningKey(credentials, region, shortDate),
      this.createCanonicalRequest(request, canonicalHeaders, payloadHash)
    );

    request.headers[AUTH_HEADER] =
      `${ALGORITHM_IDENTIFIER} ` +
      `Credential=${credentials.accessKeyId}/${scope}, ` +
      `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
      `Signature=${signature}`;

    return request;
  }

  private createCanonicalRequest(
    request: HttpRequest,
    canonicalHeaders: HeaderBag,
    payloadHash: string
  ): string {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map(name => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }

  private async createStringToSign(
    longDate: string,
    credentialScope: string,
    canonicalRequest: string
  ): Promise<string> {
    const hash = new this.sha256();
    hash.update(canonicalRequest);
    const hashedRequest = await hash.digest();

    return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }

  private getCanonicalPath({ path }: HttpRequest): string {
    if (this.uriEscapePath) {
      const doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
      return `/${doubleEncoded.replace(/%2F/g, "/")}`;
    }

    return path;
  }

  private async getSignature(
    longDate: string,
    credentialScope: string,
    keyPromise: Promise<Uint8Array>,
    canonicalRequest: string
  ): Promise<string> {
    const stringToSign = await this.createStringToSign(
      longDate,
      credentialScope,
      canonicalRequest
    );

    const hash = new this.sha256(await keyPromise);
    hash.update(stringToSign);
    return toHex(await hash.digest());
  }

  private getSigningKey(
    credentials: Credentials,
    region: string,
    shortDate: string
  ): Promise<Uint8Array> {
    return getSigningKey(
      this.sha256,
      credentials,
      shortDate,
      region,
      this.service
    );
  }
}

function formatDate(now: DateInput): { longDate: string; shortDate: string } {
  const longDate = iso8601(now).replace(/[\-:]/g, "");
  return {
    longDate,
    shortDate: longDate.substr(0, 8)
  };
}

function getCanonicalHeaderList(headers: object): string {
  return Object.keys(headers)
    .sort()
    .join(";");
}

function getTtl(start: DateInput, expiration: DateInput): number {
  return Math.floor(
    (toDate(expiration).valueOf() - toDate(start).valueOf()) / 1000
  );
}
